const reducer = (state, action) => {
  switch (action.type) {
    case "DEL":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.id),
      };
    case "CLEARALL":
      return {
        ...state,
        cart: [],
      };
    case "ADDSUGGESTION":
      let match = [];
      const filter = state.suggestion.filter((item) => item.id === action.id);
      const filtered = filter[0].id;

      state.cart.forEach((element) => {
        if (element.id === filtered) {
          match.push(element.id);
        }
      });

      if (match.includes(filtered)) {
        return {
          ...state,
          cart: state.cart,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...filter[0] }],
        };
      }

    case "INCREMENT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.id
            ? { ...item, orderAmount: item.orderAmount + 1 }
            : item
        ),
      };
    case "DECREMENT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.id
            ? { ...item, orderAmount: item.orderAmount - 1 }
            : item
        ),
      };

    default:
      return state;
  }
};
export default reducer;
