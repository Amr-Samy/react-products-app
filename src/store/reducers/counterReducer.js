const counterReducer = (intialState = 0, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      //   return intialState + 1;
      return intialState + action.payload;
    case "DECREMENT_COUNTER":
      return intialState - action.payload;
    default:
      return intialState;
  }
};

export default counterReducer;
