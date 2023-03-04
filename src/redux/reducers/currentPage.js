const currentPage = (state = "login", action) => {

  if (action?.payload !== (undefined || null)) {
    switch (action.payload) {
      case "CURRENTPAGE":
        return action.payload;

      default:
        return state;
    }
  }

  return state;
};


export default currentPage;