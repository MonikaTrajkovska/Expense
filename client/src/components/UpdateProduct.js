import React from 'react'
import store from '../redux/store'
import {Update,changeNewToEditProduct} from '../redux/actions/itemsActions'
import {connect} from 'react-redux'
import './New Product.css'

import axios from 'axios'



class UpdateProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
             productToEdit: this.props.productToEdit ,
            product_name: this.props.product_name=== null ,
           product_type: this.props.product_type === null ,
            product_description: this.props.product_description=== null,
            purchase_date: this.props.purchase_date === null ,
            product_price: this.props.prod === null ,
            
    }
}

    save = (event) => {
        this.setState({[event.target.id]: event.target.value})
    }
    

    editProduct = (event) => {

        if(
            this.state.product_name === '' ||
           this.state.product_type === '' ||
           this.state.product_description === '' ||
           this.state.purchase_date === '' ||
          this.state.product_price === 0) {
                alert('All fields must be filled out')
                event.preventDefault()
        } else {
            store.dispatch(Update(!this.state.Update))
            axios.put(`http://localhost:8084/api/v1/items/${this.props.productToEdit._id}`, {
                product_name: this.state.product_name,
                product_type: this.state.product_type,
                product_description: this.state.product_description,
                purchase_date: this.state.purchase_date,
                product_price: this.state.product_price,
              
            }, { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}})
            .then(res => {
            console.log(res);
            })
            .catch(err => {
            console.log(err);
            alert('All the fields must be filled out in order to edit your product succesfuly!')
            });
             store.dispatch(Update(true))
            store.dispatch(changeNewToEditProduct(false))
           
        }
    }
    
    

    render() {
        return (
            <React.Fragment>
              
                
               
                   <h3>New Product</h3>
             
    
                <div id="login2">
                    <div className="box-container2">
                        <form action="">
                                <p className="input-container2">
                                    <label className="text-field-input2">Product Name</label> <br/>
                                    <input type="text" className="text-field2"
                                    id='product_name'
                                    onChange={this.save}
                                    defaultValue={this.state.product_name} />
                                </p>
                                <p className="input-container2">
                                    <label className="text-field-input2">Product Type</label> <br/>
                                    <input type="text" className="text-field2"
                                    id='product_type'
                                    onChange={this.save}
                                    defaultValue={this.state.product_type} />
                                </p>
                                <p className="input-container2">
                                    <label className="text-field-input2">Product Description</label> <br/>
                                    <input type="text" className="text-field2"
                                    id='product_description'
                                    onChange={this.save}
                                    defaultValue={ this.state.product_description} />
                                </p>
                                <p className="input-container2">
                                    <label className="text-field-input2">Purchase Date</label> <br/>
                                    <input type="date" className="text-field2"
                                    id='purchase_date'
                                    onChange={this.save}
                                    defaultValue={this.state.purchase_date} />
                                </p>
                                <p className="input-container2">
                                    <label className="text-field-input2">Product Price</label> <br/>
                                    <input type="text" className="text-field2"
                                    id='product_price'
                                    onChange={this.save}
                                    defaultValue={this.state.product_price}  />
                                </p>
                                
                                {!this.state.editProduct }
                                    <button className="primary-button long" id="create-btn" 
                                        onClick={this.editProduct}>EDIT PRODUCT</button>
                                    
                                
                        </form>
                    </div>
                    <div className="new2"> 
                        <p><i className="fas fa-plus-circle"></i></p>
                        <p>You are creating new product</p>
                   </div>
                </div>
                  
               
            </React.Fragment>
        )
    }
}

function mapStateToProps (state) {
    return {
         items: state.itemsReducer.items,
        productToEdit: state.itemsReducer.productToEdit,
       
       
    }
}

export default connect(mapStateToProps)(UpdateProduct)