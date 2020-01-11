// export function getJwt (data) {
//     return {
//         type: 'GET_JWT',
//         payload: data
//     }
// }

export function getItems (data) {
    return {
        type: 'GET_ITEMS',
        payload: data
    }
}

 export function deleteItem(id) {
     return{
              type:"DELETE_ITEM",
             payload:id
         
     }}

 
 

    export function Update (newState) {
        return {
            type: 'DID_UPDATE',
            state: newState
        }
    }
    
    export function changeNewToEditProduct (newState) {
                 return {
             type: 'CHANGE_NEW_TO_EDIT',
             state: newState
        }
     }
     export function editThisProduct 
 (_id, product_name, product_type, product_description, purchase_date, product_price) {
     return {
         type: 'EDIT_THIS_PRODUCT',
         payload: {
             _id, product_name, product_type, product_description, purchase_date, product_price
         }
     }}
// export const editProduct = (items, newProduct) => {
//     return {
//         type: "EDIT_PRODUCT",
//         items,
//         newProduct
//     }
// }

// export const newProduct = (newProduct) => {
//     return {
//         type: "CHANGE_NEW_TO_EDIT",
//         newProduct
//     }
// }