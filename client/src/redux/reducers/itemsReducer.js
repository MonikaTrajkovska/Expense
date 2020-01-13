const initialUserState = {
    items: [],
    newProduct: false,
    Update: false,
    editItems: {},
}

export function itemsReducer(state = initialUserState, action) {
    switch (action.type) {
        case 'GET_ITEMS':
            return {
                ...state,
                items: action.payload
            }
        case "DELETE_ITEM":
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }
        case 'EDIT_ITEMS':
            return {
                ...state,
                editItems: {
                    _id: action.payload._id,
                    product_name: action.payload.product_name,
                    product_type: action.payload.product_type,
                    product_description: action.payload.product_description,
                    purchase_date: action.payload.purchase_date,
                    product_price: action.payload.product_price
                }
            }
        case 'UPDATE':
            return {
                ...state,
                Update: action.state
            }
        case 'NEW_ITEM':
            return {
                ...state,
                newProduct: action.state
            }
        default:
            return { ...state }
    }

}

