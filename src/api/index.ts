export default class Api {
    readonly uri = `https://swapi.dev/api`
    post(val: object) {
        return {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(val)
        }
    }
    get() {
        return {
            method: 'GET',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
        }
    }
    patch(val: object) {
        return {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(val)
        }
    }
}
