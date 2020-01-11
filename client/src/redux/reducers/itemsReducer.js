const initialUserState = {
    items: [],
    newProduct: false,
    Update: false,
    productToEdit: [],
   
    
}

export function itemsReducer (state = initialUserState, action) {
    switch(action.type) {
        case 'GET_ITEMS' : 
            return {
                ...state,
                items: action.payload
            }
          

            case  "DELETE_ITEM":
                    return{
                            ...state,
                       items:state.items.filter(item => item.id !== action.payload)
                              }

            // case "DELETE_PRODUCT": {
            //     let newItems = state.items.filter(item => {
            //         return action.payload._id !== item._id
            //     })
            //     return { ...state, items: newItems }
            // }
             case 'EDIT_THIS_PRODUCT' : {
                 return {
                     ...state,
                     productToEdit: 
                        [{_id: action.payload._id,
                         product_name: action.payload.product_name,
                         product_type: action.payload.product_type,
                         product_description: action.payload.product_description,
                        purchase_date: action.payload.purchase_date,
                        product_price: action.payload.product_price}]
                }
             }
           
                case 'DID_UPDATE' : {
                    return {
                        ...state,
                        Update: action.state
                    }
                }
                case 'CHANGE_NEW_TO_EDIT' : {
                    return {
                        ...state,
                        newProduct: action.state
                    }
                }
                
                
         default: 
         
            return  {...state}
        }

    }

