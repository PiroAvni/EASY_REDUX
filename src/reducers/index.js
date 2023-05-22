const initState = {
  name: "Lamarr",
  location: "Skype",
};

const myReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_LOCATION":
      return { ...state, location:  action.payload};
    default:
      return state;
  }
};

export default myReducer;
