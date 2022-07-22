import { defineStore } from 'pinia'


export const useLoadingStore = defineStore('loading', {
    state: () => ({
        isLoading: true

    }),
    actions: {
        stChangeLoading(val = true): void {
            this.isLoading = val
        },
    }
})
