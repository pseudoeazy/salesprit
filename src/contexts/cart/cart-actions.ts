import { useReducer } from "react";
import { reducer, cartItemsTotalPrice } from "./cart-reducer";
import Item from "types/item";

const INITIAL_STATE = {
  isOpen: false,
  items: [],
  coupon: null,
};

export const useCartActions = (initialCart = INITIAL_STATE) => {
  const [state, dispatch] = useReducer(reducer, initialCart);

  const addItemHandler = (item: Item, quantity = 1) => {
    dispatch({ type: "ADD_ITEM", payload: { ...item, quantity } });
  };

  const removeItemHandler = (item: Item, quantity = 1) => {
    dispatch({ type: "REMOVE_ITEM", payload: { ...item, quantity } });
  };

  const clearItemFromCartHandler = (item: Item) => {
    dispatch({ type: "CLEAR_ITEM_FROM_CART", payload: item });
  };

  const clearCartHandler = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const toggleCartHandler = () => {
    dispatch({ type: "TOGGLE_CART" });
  };
  const couponHandler = (coupon: number | string) => {
    dispatch({ type: "APPLY_COUPON", payload: coupon });
  };
  const removeCouponHandler = () => {
    dispatch({ type: "REMOVE_COUPON" });
  };
  const rehydrateLocalState = (payload: any) => {
    dispatch({ type: "REHYDRATE", payload });
  };
  const isInCartHandler = (id: number | string) => {
    return state.items?.some((item: Item) => item.id === id);
  };
  const getItemHandler = (id: number | string) => {
    return state.items?.find((item: Item) => item.id === id);
  };
  const getCartItemsPrice = () => cartItemsTotalPrice(state.items).toFixed(2);
  const getCartItemsTotalPrice = () =>
    cartItemsTotalPrice(state.items, state.coupon).toFixed(2);

  const getDiscount = () => {
    const total = cartItemsTotalPrice(state.items);
    const discount = state.coupon
      ? (total * Number(state.coupon?.discountInPercent)) / 100
      : 0;
    return discount.toFixed(2);
  };
  const getItemsCount = state.items?.reduce(
    (acc: number, item: Item) => acc + item.quantity,
    0
  );

  return {
    state,
    getItemsCount,
    rehydrateLocalState,
    addItemHandler,
    removeItemHandler,
    clearItemFromCartHandler,
    clearCartHandler,
    isInCartHandler,
    getItemHandler,
    toggleCartHandler,
    getCartItemsTotalPrice,
    getCartItemsPrice,
    couponHandler,
    removeCouponHandler,
    getDiscount,
  };
};
