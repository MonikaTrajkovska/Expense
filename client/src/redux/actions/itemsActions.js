
export function getItems(items) {
    return {
        type: 'GET_ITEMS',
        payload: items
    }
}
// export function removeItemsToStore(items) {
//     return {
//       type: "DELETE_ITEM",
//       payload: items
//     };
//   }
 export const deleteItem = (_id) => {
     return {
        type: "DELETE_ITEM",
         payload: _id
     }
}

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
