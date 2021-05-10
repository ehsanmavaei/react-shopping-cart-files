

const reducer=(state,action)=>{
switch (action.type) {
    case 'DEL':
       return{...state,
    cart:state.cart.filter((item)=> item.id!=action.id)
      
       }
        break;

    default:
        return state
}
}
export default reducer

