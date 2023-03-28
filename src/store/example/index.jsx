import * as types from "../types";

export const example = () => async (dispatch) => {
  try {
    let test = "TEST";
    dispatch({
      type: types.example,
      payload: test,
    });
  } catch (err) {
    console.log(err);
  }
};

const initialCartState = {
  example: "",
};

const reducer = (state = initialCartState, action) => {
  switch (action.type) {
    case types.example:
      return {
        ...state,
        example: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
