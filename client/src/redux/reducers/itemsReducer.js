const initialUserState = {
    items: [],
    newProduct: false,
    Update: false,
   
    
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
                   items:state.items.filter(item => item._id !== action.payload)
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
         
            return   state
        }

    }

