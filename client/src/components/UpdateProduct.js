

 import React from 'react'
 import store from '../redux/store'
 import {Update,changeNewToEditProduct,editThisProduct} from '../redux/actions/itemsActions'
 import {connect} from 'react-redux'
 import './New Product.css'

 import axios from 'axios'



class UpdateProduct extends React.Component {
    constructor(props) {
         super(props)
         this.state = {
            
       productToEdit:this.props.productToEdit,
        id:this.props.id,
       product_name: this.props.product_name,
            product_type:this.props.product_type  ,
            product_description:this.props.product_description,
            purchase_date:this.props.purchase_date,
             product_price: this.props.product_price ,
           
    } }

     save = (event) => {
         this.setState({[event.target.id]: event.target.value})
     }
    

    editProduct = (event) => { 
      
        // if(
            
        // this.state.product_name === '' ||
        // this.state.product_type === '' ||
        // this.state.product_description === '' ||
        //  this.state.purchase_date === '' ||
        // this.state.product_price === 0) {
        //     alert('All fields must be filled out')
             
        //  }else{ 
            event.preventDefault()
             axios.put(`http://localhost:8084/api/v1/items/${this.props.id}`, {
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
            // alert('All the fields must be filled out in order to edit your product succesfuly!')
            });
            // store.dispatch(editProduct(items));
            //  store.dispatch(Update(true))
             //  store.dispatch(editThisProduct(
            //         this.props._id,
             //          this.props.product_name,
             //          this.props.product_type,
            //         this.props.product_description,
            //         this.props.purchase_date,
             //          this.props.product_price))
                 // store.dispatch(changeNewToEditProduct(true))
                //   store.dispatch(Update(true))
                //  store.dispatch(changeNewToEditProduct(false))
                 store.dispatch(editThisProduct(this.state.id,this.state.product_name,
                     this.state.product_type,
                     this.state.product_description, 
                    this.state.purchase_date,
                    this.state.product_price))
                 
            
        
    }

  

   render() {
        return (
            <React.Fragment>
              
            
               
                   <h3>New Product</h3>
             
    
                 <div id="login2">
                     <div className="box-container2">
                         <form >
                                 <p className="input-container2">
                                     <label className="text-field-input2">Product Name</label> <br/>
                                    <input type="text" className="text-field2"
                                    id='product_name'
                                    onChange={this.save}
                                     defaultValue={this.state.ProductToEdit } />
                                 </p>
                                 <p className="input-container2">
                                     <label className="text-field-input2">Product Type</label> <br/>
                                    <input type="text" className="text-field2"
                                    id='product_type'
                                    onChange={this.save}
                                     defaultValue={this.state.ProductToEdit} />
                                </p>
                                <p className="input-container2">
                                    <label className="text-field-input2">Product Description</label> <br/>
                                     <input type="text" className="text-field2"
                                    id='product_description'
                                     onChange={this.save}
                                     defaultValue={ this.state.ProductToEdit} />
                                 </p>
                                 <p className="input-container2">
                                     <label className="text-field-input2">Purchase Date</label> <br/>
                                    <input type="date" className="text-field2"
                                     id='purchase_date'
                                     onChange={this.save}
                                     defaultValue={this.state.ProductToEdit} />
                                </p>
                                <p className="input-container2">
                                    <label className="text-field-input2">Product Price</label> <br/>
                                    <input type="text" className="text-field2"
                                     id='product_price'
                                     onChange={this.save}
                                     defaultValue={this.state.ProductToEdit}  />
                                 </p>
                                
                                                                 {/* {!this.state.editProduct } */}
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