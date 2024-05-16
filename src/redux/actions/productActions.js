import api from "../../utils/api";
import Actions from "../actionTypes";

export const getDataByRestId = (id) => async (dispatch) => {
  dispatch({ type: Actions.PROD_LOADING });

  const req1 = api.get(`/restaurants/${id}`);
  const req2 = api.get(`/products?restaurantId=${id}`);

  try {
    const responses = await Promise.all([req1, req2]);
    dispatch({ type: Actions.PROD_ERROR, payload: responses });
  } catch (err) {
    dispatch({ type: Actions.PROD_ERROR, payload: err.message });
  }
};
