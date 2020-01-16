// import React from 'react'
// import '../../assets/styles/Pop-up.css'

// const alert = (props) => {
//     return (
//         <div id="alert" className='delete'>
//         <div id="alert-container">
//             <div id="alert-text-container">
//                 <h1>Delete Product</h1>
//                 <p>You are about to delete this product. Are you sure you wish to continue ?</p>
//             </div>
//             <div id="alert-buttons">
//                 <button className="alert-btn" id="cancel-alert-btn" onClick={props.hide}
//                 >CANCEL</button>
//                 <button className="alert-btn" id="delete-alert-btn" onClick={props.delete}
//                 >DELETE</button>
//             </div>
//         </div>
//     </div>
//     )
// }

// // export default alert;

// onDeleteClick = _id => {
//     axios.delete(`http://localhost:8084/api/v1/items/${_id}`,
//               {
//                   headers: {
//                       'Authorization': `Bearer ${localStorage.getItem('jwt')}`
//                   }
//               })
//               .then(res => {
//                   console.log(res)
//                   store.dispatch(deleteItem(_id))
//               })
//               .catch(err => {
//                   console.log(err)
//               })
//               }
// import React from 'react'
// import { connect } from 'react-redux'
// import axios from 'axios'
// import { editOneItem } from '../redux/actions/itemsActions'

// class DeleteProduct extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
            
//         }
//     }

//     componentDidMount(){
//         axios.delete(`http://localhost:8084/api/v1/items/${this.props.match.params.id}`,
//         { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}})
//         .then(res => {
//         console.log(res);
       
//         })
//         .catch(err => {
//         console.log(err);
//         });
        
//     }}

//     // return (
//     //     <div>
//     //     <div className="alert">
//     //         <div className="alert-container">
//     //             <div className="alert-text-container">
//     //                 <h1>Delete Product</h1>
//     //                 <p>You are about to delete this product. Are you sure you wish to continue ?</p>
//     //             </div>
//     //             <div className="alert-buttons">
//     //                 {/* <button className="alert-btn cancel-alert-btn" 
//     //                 onClick={props.deleteAlert}>CANCEL</button>
//     //                 <button className="alert-btn delete-alert-btn" 
//     //                 onClick={deleteThisProduct}>DELETE</button> */}
//     //             </div>
//     //         </div>
//     //     </div>
//     //     </div>
//     // )

// function mapStateToProps(state) {
//     // console.log(state);
//     return {
//         items: state.items,
        
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return {
//        deleteItem:(id)=>dispatch(editOneItem(id)),
//         editOneItem: (data) => dispatch(editOneItem(data))
//     }
// }

// export default connect(mapStateToProps)(DeleteProduct)









//   import React from 'react'
//   import { connect } from 'react-redux'
//   import axios from 'axios'
//  import { deleteItem } from '../redux/actions/itemsActions';
//  import store from '../redux/store'
//  import { render } from 'react-dom';

//  import React from 'react'
//   import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
//  import './DeleteProduct.css'

// const DeleteProduct= ()=>{
//      return(
//        <React.Fragment>
//              <div className="modal6">
        
//          <h3>Delete Product</h3>
//          <p>You are about to delete this product.Are you sure you wish to continue?</p>
//  <div className="alert-btn6">
//              <button className="cancel-btn6">Cancel</button>
//             <button className="delete-btn6">Delete</button>
//         </div>
//      </div>
//        </React.Fragment>
//      )}



// export default DeleteProduct