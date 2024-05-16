import { v4 } from "uuid";
import api from "../../utils/api";
import Actions from "../actionTypes";
import { toast } from "react-toastify";

export const getCart = () => (dispatch) => {
  dispatch({ type: Actions.CART_LOADING });
  api
    .get("/cart")
    .then((res) => dispatch({ type: Actions.CART_SUCCESS, payload: res.data }))
    .catch((err) =>
      dispatch({ type: Actions.CART_ERROR, payload: err.message })
    );
};

export const addToBasket = (product, restName) => (dispatch) => {
  const newItem = {
    id: v4(),
    productId: product.id,
    title: product.title,
    price: product.price,
    photo: product.photo,
    restaurantName: restName,
    amount: 1,
  };

  api
    .post("/cart", newItem)
    .then(() => {
      dispatch({ type: Actions.ADD_ITEM, payload: newItem });

      toast.success(`${newItem.title} added cart`);
    })
    .catch(() => toast.error("We are sorry. Something went wrong!"));
};

export const updateItem = (id, newAmount) => (dispatch) => {
  api
    .patch(`/cart/${id}`, { amount: newAmount })
    .then((res) => {
      dispatch({
        type: Actions.UPDATE_ITEM,
        payload: res.data,
      });

      toast.info(`Increased by 1 (${newAmount})`);
    })
    .catch(() => toast.error("We are sorry. Something went wrong!"));
};

export const deleteItem = (id) => (dispatch) => {
  api
    .delete(`/cart/${id}`)
    .then(() => {
      dispatch({ type: Actions.DELETE_ITEM, payload: id });
      toast.warning("Product deleted from cart.");
    })
    .catch(() => toast.error("We are sorry. Something went wrong!"));
};
