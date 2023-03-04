export const currentPage = (data) => {
    if (data !== null || undefined) {
        return {
            type: 'CURRENTPAGE',
            payload: data
        }
    }

    return {
        type: undefined
    }
}
