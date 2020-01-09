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

export function deleteItem(item) {
    return{
             type:"DELETE_ITEM",
             payload:item
         
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
   
    