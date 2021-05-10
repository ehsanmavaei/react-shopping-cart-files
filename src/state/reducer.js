

const reducer=(state,action)=>{
switch (action.type) {
    case 'DEL':
       return{...state,
    cart:state.cart.filter((item)=> item.id!=action.id)
      
       }
    case 'INCREMENT':

       
       return{...state,
        cart:state.cart.map((item)=>item.id==action.id? {...item,orderAmount:item.orderAmount+1}:item)
      
      
       }
    case 'DECREMENT':

       
       return{...state,
        cart:state.cart.map((item)=>item.id==action.id? {...item,orderAmount:item.orderAmount-1}:item)
      
      
       }
        break;

    default:
        return state
}
}
export default reducer

