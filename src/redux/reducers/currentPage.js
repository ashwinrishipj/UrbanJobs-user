const currentPage = (state = "home", action) => {
  switch (action.payload) {
    case "CURRENTPAGE":
      return action.payload;

    default:
      return state;
  }
};

export default currentPage;