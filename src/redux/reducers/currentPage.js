const currentPage = (state = "login", action) => {

  console.log("action", action);

  if (action?.paload) {
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