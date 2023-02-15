export const currentPage = (pageName) => {
    if (pageName !== undefined || null) {
        return {
            type: 'CURRENTPAGE',
            payload: pageName
        }
    }
    return { type: 'null' }
}