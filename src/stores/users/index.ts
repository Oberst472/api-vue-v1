import { defineStore } from 'pinia'
import { User } from '../../types/typeUsers';
import ApiUsers from '../../api/apiUsers'

const api = new ApiUsers()

export const useUsersStore = defineStore('users', {
    state: () => ({
        users: {} as { [char: string]: User[] },
        userInfo: null as User | null,
        activePage: 1 as number,
        totalUsersCount: 0 as number,
        searchVal: '' as string

    }),
    getters: {
        getUsers: state => state?.users[state.activePage],
        getFoundUsers: state => {
            if (!state.searchVal) return []
            const arr: User[] = []
            for (let key in state.users) {
                state.users[key].forEach(item => {
                    const b = item.name.toLowerCase()
                    const r = state.searchVal.toLowerCase()
                    const i = b.indexOf(r)

                    if (i !== -1) return arr.push(item)
                })
            }
            return arr
        },
        // getUsers: state => state.searchVal ? this.foundUsers : gusers
    },
    actions: {
        async stGetAllUsers(): Promise<any> {
            const val = {page: this.activePage}
            try {
                const res: any = await api.apiGetAllUsers(val)
                if (!res) return console.error('ERROR!!! NOT USERS!!!')

                const {prev, next, count, results} = res
                if (results.length) {
                    this.addNewUsersToObj(results)
                    this.setAddInfo(prev, next, count)
                    return true
                }
                return false
            } catch (e) {
                console.log(e);
                return false
            }
        },
        async stGetUserById(id: number): Promise<any> {
            try {
                const res: any = await api.apiGetUserById(id)
                if (!res) return console.error('ERROR!!! USER NOT FOUND!!!')
                this.userInfo = res
                return true
            } catch (e) {
                console.log(e);
                return false
            }
        },
        addNewUsersToObj(items: User[]) {
            this.users[String(this.activePage)] = items

        },
        setActivePage(val: number) {
            this.activePage = val
        },
        setAddInfo(previos: string | null, next: string | null, count: number | string) {
            this.totalUsersCount = parseFloat(String(count))
        },
    }
})
