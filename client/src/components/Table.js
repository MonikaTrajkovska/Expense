import React from "react";
// import Popup from "reactjs-popup";


import store from '../redux/store'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
// import { faEdit } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { edit editProductClicked } from "../../redux/actions/productAction";


class Table extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            // editProductClicked: false,
            showAlert:null
        }
    }

    // editProduct = (product) => {
    //     const clicked = !this.state.editProductClicked
    //     store.dispatch(editProduct(product));
    //     store.dispatch(editProductClicked(clicked));

    // }

    
    
    render(){
        let productsTable = null;
        if(this.props.items){
            productsTable=this.props.items.map(item => {   
            return(
                <tr key = {item._id}>
                        <td>{item.product_name}</td>
                        <td>{item.product_type}</td>
                        <td>{item.product_description}</td>
                        <td>{item.purchase_date.toString().slice(0, 10)}</td>
                        <td>{item.product_price}</td>
                        <td>
                            {/* <Link to="/edit-product">
                            <button className="btn-secondary" title="Edit this product" id="edit" onClick={() => this.editProduct(product)}>
                            <FontAwesomeIcon icon={faEdit} />
                            </button>
                            </Link> 
                            <Popup trigger={<button  className="btn-danger" title="Delete this product" id="delete">
                            <FontAwesomeIcon icon={faTrashAlt} />
                            </button>}position="center"><div><Alert/></div>
                        </Popup> */}
                        </td>
                </tr>
            )
        })
    }
    
        return(
            <React.Fragment>
                <div className="table-container">
        <table>
          <thead>
            <tr>
                <th>Product Name</th>
                <th>Product Type</th>
                <th>Product Description</th>
                <th>Purchase Date</th>
                <th>Product Price</th>
            </tr>
          </thead>
                <tbody>
                {productsTable}
                </tbody>
        </table>
        </div>
            </React.Fragment>
        )
    }

}

function mapStateToProps (state) {
    return {
        items: state.itemsReducer.items,
        // editProductClicked: state.productReducer.editProductClicked,
        
       
    }
}

export default connect(mapStateToProps)(Table);