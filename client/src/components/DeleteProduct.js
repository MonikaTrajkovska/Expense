

// import React from 'react'
//  import { connect } from 'react-redux'
//  import axios from 'axios'

//  const DeleteProduct= (props) => {

//      function deleteThisProduct() {
//          axios.delete(`http://localhost:8084/api/v1/items/${props._id}`,
//          { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}})
//        .then(res => {
//         console.log(res);
//         props.deleteAlert()
//          props.productDeleted()
//          })
//          .catch(err => {
//          console.log(err);
//          });
        
//      }

//    return (
//          <div className="alert">
//              <div className="alert-container">
// //                 <div className="alert-text-container">
// //                     <h1>Delete Product</h1>
// //                     <p>You are about to delete this product. Are you sure you wish to continue ?</p>
// //                 </div>
// //                 <div className="alert-buttons">
// //                     <button className="alert-btn cancel-alert-btn" 
// //                     onClick={props.deleteAlert}>CANCEL</button>
// //                     <button className="alert-btn delete-alert-btn" 
// //                     onClick={deleteThisProduct}>DELETE</button>
// //                 </div>
// //             </div>
// //         </div>
// //     )
// // }

// // function mapStateToProps (state) {
// //     return {
// //         id: state.itemsReducer.productToEdit.id
// //     }
// // }

// // export default connect(mapStateToProps)(DeleteProduct)



// // //  import React from 'react'
// // //  import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// // // import './DeleteProduct.css'

// // // // const DeleteProduct= ()=>{
// // //     return(
// // //         <React.Fragment>
// // //              <div className="modal6">
        
// // //         <h3>Delete Product</h3>
// // //         <p>You are about to delete this product.Are you sure you wish to continue?</p>
// // // <div className="alert-btn6">
// // //             <button className="cancel-btn6">Cancel</button>
// // //             <button className="delete-btn6">Delete</button>
// // //         </div>
// // //     </div>
    
// // //         </React.Fragment>
// // //     )
// // // }



// // export default DeleteProduct