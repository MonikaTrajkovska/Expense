
export function getItems(items) {
    return {
        type: 'GET_ITEMS',
        payload: items
    }
}

//  export function deleteItem(id) {
//      return{
//               type:"DELETE_ITEM",
//              payload:id

//      }}

export function Update(item) {
    return {
        type: 'UPDATE',
        state: item
    }
}

export function newItem(item) {
    return {
        type: 'NEW_ITEM',
        state: item
    }
}

export function editOneItem(_id, product_name, product_type, product_description, purchase_date, product_price) {
    return {
        type: 'EDIT_ITEMS',
        payload: {
            _id,
            product_name,
            product_type,
            product_description,
            purchase_date,
            product_price
        }
    }
}
