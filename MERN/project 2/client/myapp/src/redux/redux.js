const initialState = {
    products : [],
    cart : []
}

const productManager = (state = initialState,action )=> {

    switch (action.type) {

        case "ADD" : {
            return{...state, products : [...state.products , action.payload]}
        }
        case "DELETE" : {

            const toDelete = state.products.find((pro)=>pro.id === action.payload)
            const updatedProducts =  state.products.filter((pro)=> pro.id !== toDelete.id)
            return{...state, products : updatedProducts}
        }
        case "ADDTOCART" : {

            const toAdd = state.products.find((pro)=>pro.id === action.payload)
            return{...state, cart : [...state.cart , toAdd]}
        }
        case "DELETEFROMCART" : {

            const toDelete = state.cart.find((pro)=>pro.id === action.payload)
            if(toDelete){
            const updatedProducts = state.cart.filter((pro)=> pro.id !== toDelete.id)
            return{...state,cart : updatedProducts}
            }
        }

        default:
            return state;
    }
}

export default productManager