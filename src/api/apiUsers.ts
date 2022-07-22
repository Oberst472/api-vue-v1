import Api from './index'


export default class ApiUsers extends Api {
    constructor() {
        super();
    }

    async apiGetAllUsers(val: { page: number }): Promise<any> {
        const page = val.page || 1
        try {
            const res = await fetch(`${this.uri}/people?page=${page}`, this.get())
            if (!res.ok) return null
            return await res.json()
        } catch (e) {
            console.log(e);
            return null
        }
    }

    async apiGetUserById(id: number): Promise<any> {
        try {
            const res = await fetch(`${this.uri}/people/${id}`, this.get())
            if (!res.ok) return null
            return await res.json()
        } catch (e) {
            console.log(e);
            return null
        }
    }
}
