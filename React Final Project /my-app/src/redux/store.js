import { DeleteInDB , UpdateToDB} from "../firebase/utils"

const intialData = {

    products: [],
    total : 0
}
const StoreManagment = (state = intialData, action) => {
    switch (action.type) {

        case "ADD": {

            return { ...state, products: [...state.products, action.payload] }
        }
        case "DELETEPRO": {


            const toDelete = state.products.find(elm => elm.id === action.payload)
            if (toDelete) {
                toDelete.status = "DELETED"
                return { ...state, products: state.products }

            }
        }
        case  "DELETECUS" : {
            
          DeleteInDB(action.payload, "customers")
          .then(()=> {console.log("has been deleted !")}).catch(error => console.log(error))
            break;
        }
        case "UPDATECUS": {


                UpdateToDB(action.id , action.payload , "customers")
                .then(()=> {console.log("has been updated !")}).catch(error => console.log(error))

                break;
        }
                case "UPDATEPRO": {
                    
                    const index = state.products.findIndex(elm => elm.id === action.id);
                    if (index != -1) {
                        state.products[index] = action.payload;
                    }
                    return { ...state, products: state.products }
                }

                case "UPDATEQUANTITY" : {


                    const obj = action.payload
                    obj.quantity--
                  UpdateToDB(action.payload.id ,obj , "products")
                    break;
                }
                
                case "UPDATETOTAL" : {

                    return { ...state, products: [...state.products] ,total : ( state.total+action.payload)}
                }
        default:
            return state;
    }
}
export default StoreManagment;