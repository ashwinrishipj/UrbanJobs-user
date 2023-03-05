const currentPage = (data) => {
    if (data !== null || data !== undefined) {
        return {
            type: 'CURRENTPAGE',
            payload: data
        }
    }

    return {type: null}
}

export default currentPage;