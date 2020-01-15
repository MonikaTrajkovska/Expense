import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

// import store from '../redux/store'
import { Update, newItem, editOneItem } from '../redux/actions/itemsActions'

import './New product.css'

class UpdateProduct extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);

        this.state = {
            editItems:this.props.editItems,
             _id: this.props._id,
            product_name: this.props.product_name,
            product_type: this.props.product_type,
            product_description: this.props.product_description,
            purchase_date: this.props.purchase_date,
            product_price: this.props.product_price,
        }
    }

    save = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    edit = (event) => {
        event.preventDefault()
        axios.put(
            `http://localhost:8084/api/v1/items/${this.props.match.params.id}`,
            {
                product_name: this.state.product_name,
                product_type: this.state.product_type,
                product_description: this.state.product_description,
                purchase_date: this.state.purchase_date,
                product_price: this.state.product_price,
            },
            {
                headers: { "Authorization": `Bearer ${localStorage.getItem('jwt')}` }
            }
        )
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });

        // store.dispatch(Update(true))
        // store.dispatch(newItem(false))
        // store.dispatch(editOneItem(
        //     this.props._id,
        //     this.props.product_name,
        //     this.props.product_type,
        //     this.props.product_description,
        //     this.props.purchase_date,
        //     this.prop.product_price))
    }



    render() {
        return (
            <React.Fragment>
                <h3>Edit this product </h3>


                <div id="login2">
                    <div className="box-container2">
                        <form >
                            <p className="input-container2">
                                <label className="text-field-input2">Product Name</label> <br />
                                <input type="text" className="text-field2"
                                    id='product_name'
                                    onChange={this.save}
                                    defaultValue={this.props.editItems} />
                            </p>
                            <p className="input-container2">
                                <label className="text-field-input2">Product Type</label> <br />
                                <input type="text" className="text-field2"
                                    id='product_type'
                                    onChange={this.save}
                                    defaultValue={this.props.editItems} />
                            </p>
                            <p className="input-container2">
                                <label className="text-field-input2">Product Description</label> <br />
                                <input type="text" className="text-field2"
                                    id='product_description'
                                    onChange={this.save}
                                    defaultValue={this.props.editItems} />
                            </p>
                            <p className="input-container2">
                                <label className="text-field-input2">Purchase Date</label> <br />
                                <input type="date" className="text-field2"
                                    id='purchase_date'
                                    onChange={this.save}
                                    defaultValue={this.props.editItems} />
                            </p>
                            <p className="input-container2">
                                <label className="text-field-input2">Product Price</label> <br />
                                <input type="text" className="text-field2"
                                    id='product_price'
                                    onChange={this.save}
                                    defaultValue={this.props.editItems} />
                            </p>


                            <button className="primary-button long" id="create-btn"
                                onClick={this.edit}>EDIT PRODUCT</button>


                        </form>
                    </div>
                    <div className="new2">
                        <p><i className="fas fa-plus-circle"></i></p>
                        <p>You are updating product</p>
                    </div>
                </div>


            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    // console.log(state);
    return {
        items: state.items,
        editItems: state.editItems,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        Update: (data) => dispatch(Update(data)),
        newItem: (data) => dispatch(newItem(data)),
        editOneItem: (data) => dispatch(editOneItem(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProduct)