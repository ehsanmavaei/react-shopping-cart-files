

const reducer = (state, action) => {
  switch (action.type) {
    case "DEL":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id != action.id),
      };
    case "ADDSUGGESTION":
      const filter = state.suggestion.filter((item) => item.id == action.id);

      let match = false;

      state.cart.forEach((element) => {
        element.id == filter[0].id ? (match = true) : (match = false);
      });

      if (match) {
        return {
          ...state,
          cart: state.cart,
        };
      } else {
        console.log("no  match");

        return {
          ...state,
          cart: [...state.cart, { ...filter[0] }],
        };
      }

    case "INCREMENT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id == action.id
            ? { ...item, orderAmount: item.orderAmount + 1 }
            : item
        ),
      };
    case "DECREMENT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id == action.id
            ? { ...item, orderAmount: item.orderAmount - 1 }
            : item
        ),
      };
      break;

    default:
      return state;
  }
};
export default reducer;
