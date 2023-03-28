import * as types from "../types";
import TeacherServices from "../../@core/Services/TeacherServices";

export const getAllteachers = () => async (dispatch) => {
  try {
    const { data } = await TeacherServices.getAll();
    if (data?.statusCode === "10000") {
      dispatch({
        type: types.teachers,
        payload: data?.data?.users,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const initialCartState = {
  entities: [],
};

const reducer = (state = initialCartState, action) => {
  switch (action.type) {
    case types.teachers:
      return {
        ...state,
        entities: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
