const favouriteReducers = (intialState = [], action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      if (!intialState.find((obj) => obj.id === action.payload.id)) {
        // console.log("not found, add to array");
        return [...intialState, action.payload];
      } else {
        return [...intialState];
      }
    case "REMOVE_FROM_FAVOURITES":
      let tempArr = intialState.filter((obj) => obj.id !== action.payload.id);
      return [...tempArr];
    default:
      return intialState;
  }
};

export default favouriteReducers;
