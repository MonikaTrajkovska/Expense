// import React from 'react'
//  import store from '../redux/store'

//  import {connect} from 'react-redux'


//  import axios from 'axios'

// class edit extends React.Component{
// constructor(){
//     super()
//     this.state={
//         product_name:this.props.product_name,
                    
//         product_type:this.props.product_type,
//         product_description:this.props.product_description,
//         purchase_date:this.props.purchase_date,
//         product_price:this.props.product_price,
// }


// }
// }



//     handleSubmit=(e)=>{
//         e.preventDefault()
//         axios.put(`https://localhost:8084/api/v1/items/id`, {
            
//         }, { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}})
//         .then(res => {
//          console.log(res);
//         })
//         .catch(err => {
//         console.log(err);
//         alert('All the fields must be filled out in order to edit your product succesfuly!')
//         });
//     store.dispatch({
//             type:'UPDATE_ITEM',
//             item:{
//                 id:e.target.id.value,
//                 product_name:e.target.product_name.value,
                
//                 product_type:e.target.product_type.value,
//                 product_description:e.target.product_description.value,
//                 purchase_date:e.target.purchase_date.value,
//                 product_price:e.target.product_price.value,
//             }
//         })
//     }
    
//         return(
//             <div>
//                 <h3>Edit product</h3>
//                 <form onSubmit={this.handleSubmit}>
//                     <p>
//                 <label className="text-field-input2">Product Name</label> <br/>
//                                     <input type="text" className="text-field2"
//                                     id='product_name'
                                   
//                                      defaultValue={this.props.items.product_name} />
//                                  </p>
//                                  <p className="input-container2">
//                                      <label className="text-field-input2">Product Type</label> <br/>
//                                     <input type="text" className="text-field2"
//                                     id='product_type'
                                   
//                                      defaultValue={this.props.items.product_type} />
//                                 </p>
//                                 <p className="input-container2">
//                                     <label className="text-field-input2">Product Description</label> <br/>
//                                      <input type="text" className="text-field2"
//                                     id='product_description'
                                    
//                                      defaultValue={ this.props.items.product_description} />
//                                  </p>
//                                  <p className="input-container2">
//                                      <label className="text-field-input2">Purchase Date</label> <br/>
//                                     <input type="date" className="text-field2"
//                                      id='purchase_date'
                                     
//                                      defaultValue={this.props.items.purchase_date} />
//                                 </p>
//                                 <p className="input-container2">
//                                     <label className="text-field-input2">Product Price</label> <br/>
//                                     <input type="text" className="text-field2"
//                                      id='product_price'
                                    
//                                      defaultValue={this.props.items.product_price}  />
//                                  </p>


//                 </form>
//             </div>
//         )
        



//  function mapStateToProps (state) {
//     return {
//          items: state.items,
       
     
      
//     }
// }

// export default connect(mapStateToProps)(edit)