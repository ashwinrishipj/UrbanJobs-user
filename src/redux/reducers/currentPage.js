const currentPage = (state = "login", action) => {

  if (action?.type !== (undefined || null)) {
    switch (action.type) {
      case "CURRENTPAGE":
        return action.payload;

      default:
        return state;
    }
  }

  return state;
};


export default currentPage;