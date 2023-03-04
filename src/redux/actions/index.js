export function currentPage(param = "login") {
    if (param !== null || undefined) {
        return {
            type: 'CURRENTPAGE',
            payload: param
        }
    }

    return {
        type: 'CURRENTPAGE',
        payload: undefined
    }
}
