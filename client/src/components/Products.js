

import React from "react";
import axios from "axios";
import {
  getItems,
  editOneItem,
deleteItem

} from "../redux/actions/itemsActions";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import store from '../redux/store'
import './Products.css'
import PropTypes from 'prop-types';

// import { render } from "react-dom";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: null,
      item:[],
      alertShow:false

    };
  }

  componentDidMount() {
    axios.get("http://localhost:8084/api/v1/items",
      { headers: { "Authorization": `Bearer ${localStorage.getItem('jwt')}` } })
      .then(res => {
        store.dispatch(getItems(res.data));
      })
      .catch(err => {
        console.log(err);
      })
    }


// componentDidMount(){
    
//        axios.delete(`http://localhost:8084/api/v1/items/${id}`,
//       { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}})
//       .then(res=>{
//           store.dispatch(deleteItem(_id))
//            // console.log(res.data)

//       })
//        .catch(err=>{
//           console.log(err)

//       })
//     }
//   return (
//     <React.Fragment>
      
//               <div className="modal6">
        
//           <h3>Delete Product</h3>
//          <p>You are about to delete this product.Are you sure you wish to continue?</p>
//            <div className="alert-btn6">
//               <button className="cancel-btn6">Cancel</button>
//             <button className="delete-btn6">Delete</button>
//         </div>
//       </div>       >
//     </React.Fragment>
//     )
//          })
//        }

// productDeleted = (_id) => {  
//   var item = this.props.items.filter((v, i) => {
//   if (v._id === _id) {
//     return v;
//   }
//   return
// })

// this.props.editOneItem(item[0]._id)
// }

// delete=(_id)=>{
//   var item=this.props.filter((v,i)=>{
//     if(v._id===_id){
//       return v
//     }
//     return
//   })
  
//   this.props.deleteItem(item._id)
// }
 onDeleteClick = _id => {
     axios.delete(`http://localhost:8084/api/v1/items/${_id}`,
               {
                  headers: {
                       'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                   }
               })
               .then(res => {
                  console.log(res)
                   store.dispatch(deleteItem(_id))
               })
               .catch(err => {
                   console.log(err)
               
               
               return (
                    <React.Fragment>
                      
                               <div className="modal6">
                        
                          <h3>Delete Product</h3>
                         <p>You are about to delete this product.Are you sure you wish to continue?</p>
                           <div className="alert-btn6">
                             <button className="cancel-btn6">Cancel</button>
                             <button className="delete-btn6">Delete</button>
                       </div>
                       </div>     
                     </React.Fragment>
                    )
               }     
               )}               
  doneEdit = (_id) => {
    // alert('TEST');
    // console.log(this.props);
    // console.log('***************************************');
    // console.log(this.props._id,
    //   this.props.product_name,
    //   this.props.product_type,
    //   this.props.product_description,
    //   this.props.purchase_date,
    //   this.props.product_price);
    // console.log('***************************************');

    var item = this.props.items.filter((v, i) => {
      if (v._id === _id) {
        return v;
      }
      return
    })

    // console.log(item[0]);

    // store.dispatch(
     
    this.props.editOneItem(item[0]._id, item[0].product_name, item[0].product_type, item[0].product_description, item[0].purchase_date, item[0].product_price);
    // store.dispatch(true)
      }
  // edit(e){
  //   var id=e.target.getAttribute('data-key')
  //   store.dispatch({
  //     type:"UPDATE_ITEM",
  //     id:id
  //   })
  //   // this.props.history.push('/edit/'+id)
  // }


  render() {
    
    let itemsList = null;
    if (this.props.items) {
      itemsList = this.props.items.map(item => {
        
        return (

          <tr key={item._id}>
            <td>{item.product_name}</td>
            
            <td>{item.product_type}</td>
            <td>{item.product_description}</td>
            <td>{item.purchase_date}</td>
            <td>{item.product_price}</td>
            <td>

              <Link to={`/updateproduct/${item._id}`}>
                <span id="edit" className="btn btn-light" onClick={() => { this.doneEdit(item._id) }}> Edit </span>
              </Link>

            
                <button id="delete" className="btn btn-danger" onClick={()=>{this.onDeleteClick(item._id)}}> Delete </button>
            
            </td>
          </tr >
        );
      });
    }
    return (
      <React.Fragment>
        <div className="main-div5">

          <h3>Products</h3>
          <label>Filter by:
<select id="filter5">
              <option>Year</option>
              <option>Highest Price</option>
              <option>Lowest Price</option>
              <option>Latest Purchases</option>
            </select>
          </label>
        </div>

        <table className="table table-dark">
          {this.state.showModal}
          <thead>
            <tr>

              <th>Product name</th>
              <th>Product type</th>
              <th>Product description</th>
              <th>Purchase date</th>
              <th>Product price </th>
              <th></th>
              <th></th>


            </tr>
          </thead>
          <tbody>{itemsList}</tbody>
        </table>
        <Link to="/newproduct">
          <button className="fixed-button5" onClick={this.toggle}>New Product</button>
        </Link>
      </React.Fragment >
    );
  }
}
Products.propTypes = {
  items: React.PropTypes.array.isRequired,
  item: PropTypes.object.isRequired,
  
}

function mapStateToProps(state) {
  return {
    items: state.itemsReducer.items,

  };
}
function mapDispatchToProps(dispatch) {
  return {
    getItems: data => dispatch(getItems(data)),
    editOneItem: data => dispatch(editOneItem(data))
    // deleteItem:id=>dispatch(deleteItem(id))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);


















// import React from 'react'
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import './Products.css'

// const Products = ()=> {
//     return (
//         <React.Fragment>
//             <div className="main-div5">
//   <h3>Products</h3>
//   <label>Filter by: 
//   <select id="filter5">
//       <option>Year</option>
//       <option>Highest Price</option>
//       <option>Lowest Price</option>
//       <option>Latest Purchases</option>
//   </select>
// </label>
// </div>


//         <table className="data5">
//             <tbody>
//           <tr>
//             <th>Product name</th>
//             <th>Product type</th>
//             <th>Product description</th>
//             <th>Purchase date</th>
//             <th>Product price </th>
//             <th></th>
//             <th></th>
//           </tr>
//           <tr>
//             <td>Coca-cola</td>
//             <td>Drink</td>
//             <td>Carbonated soft drink</td>
//             <td>19.08.2018</td>
//             <td>75</td>
//             <td>
//                     <a href=""><i className="far fa-edit"></i></a>
//                     <a href=""><i className="far fa-trash-alt"></i></a>
//                 </td>
//           </tr>
//           <tr>
//             <td>Coca-cola</td>
//             <td>Drink</td>
//             <td>Carbonated soft drink</td>
//             <td>19.08.2018</td>
//             <td>75</td>
//             <td>
//                     <a href=""><i className="far fa-edit"></i></a>
//                     <a href=""><i className="far fa-trash-alt"></i></a>
//                 </td>
//           </tr>
//           <tr>
//             <td>Coca-cola</td>
//             <td>Drink</td>
//             <td>Carbonated soft drink</td>
//             <td>19.08.2018</td>
//             <td>75</td>
//             <td>
//                     <a href=""><i className="far fa-edit"></i></a>
//                     <a href=""><i className="far fa-trash-alt"></i></a>
//                 </td>
//           </tr>
//           <tr>
//             <td>Coca-cola</td>
//             <td>Drink</td>
//             <td>Carbonated soft drink</td>
//             <td>19.08.2018</td>
//             <td>75</td>
//             <td>
//                     <a href=""><i className="far fa-edit"></i></a>
//                     <a href=""><i className="far fa-trash-alt"></i></a>
//                 </td>
//           </tr>
//           <tr>
//             <td>Coca-cola</td>
//             <td>Drink</td>
//             <td>Carbonated soft drink</td>
//             <td>19.08.2018</td>
//             <td>75</td>
//             <td>
//                     <a href=""><i className="far fa-edit"></i></a>
//                     <a href=""><i className="far fa-trash-alt"></i></a>
//                 </td>
//           </tr>
//           <tr>
//             <td>Coca-cola</td>
//             <td>Drink</td>
//             <td>Carbonated soft drink</td>
//             <td>19.08.2018</td>
//             <td>75</td>
//             <td>
//                     <a href=""><i className="far fa-edit"></i></a>
//                     <a href=""><i className="far fa-trash-alt"></i></a>
//                 </td>
//           </tr>
//           <tr>
//             <td>Coca-cola</td>
//             <td>Drink</td>
//             <td>Carbonated soft drink</td>
//             <td>19.08.2018</td>
//             <td>75</td>
//             <td>
//                     <a href=""><i className="far fa-edit"></i></a>
//                     <a href=""><i className="far fa-trash-alt"></i></a>
//                 </td>
//           </tr>
//           <tr>
//             <td>Coca-cola</td>
//             <td>Drink</td>
//             <td>Carbonated soft drink</td>
//             <td>19.08.2018</td>
//             <td>75</td>
//             <td>
//                     <a href=""><i className="far fa-edit"></i></a>
//                     <a href=""><i className="far fa-trash-alt"></i></a>
//                 </td>
//           </tr>
//           <tr>
//             <td>Coca-cola</td>
//             <td>Drink</td>
//             <td>Carbonated soft drink</td>
//             <td>19.08.2018</td>
//             <td>75</td>
//             <td>
//                     <a href=""><i className="far fa-edit"></i></a>
//                     <a href=""><i className="far fa-trash-alt"></i></a>
//                 </td>
//           </tr>
//           <tr>
//             <td>Coca-cola</td>
//             <td>Drink</td>
//             <td>Carbonated soft drink</td>
//             <td>19.08.2018</td>
//             <td>75</td>
//             <td>
//                     <a href=""><i className="far fa-edit"></i></a>
//                     <a href=""><i className="far fa-trash-alt"></i></a>
//                 </td>
//           </tr>
//           <tr>
//             <td>Coca-cola</td>
//             <td>Drink</td>
//             <td>Carbonated soft drink</td>
//             <td>19.08.2018</td>
//             <td>75</td>
//             <td>
//                     <a href=""><i className="far fa-edit"></i></a>
//                     <a href=""><i className="far fa-trash-alt"></i></a>
//                 </td>
//           </tr>
//           </tbody>
//         </table>
//         <button className="fixed-button5">New product</button>




//         </React.Fragment>
//     )
// }
// export default Products