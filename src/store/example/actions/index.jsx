import * as types from "../../types";

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
