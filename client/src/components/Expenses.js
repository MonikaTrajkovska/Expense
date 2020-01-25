import React from 'react'
import Table from './Table'
import axios from 'axios'
import {connect} from 'react-redux'

import store from '../redux/store'
import {sort, getItems} from '../redux/actions/itemsActions'


class Expenses extends React.Component {
    constructor() {
        super()
        this.state = {
            monthFilter: false,
            yearFilter: true,
            toggle: true,
            refilter: null,
            Update: false
        }
    }

    yearFilter = () => {
        this.setState({
            yearFilter: true,
            monthFilter: false,
            toggle: true
        })
    }

    monthFilter = () => {
        this.setState({
            yearFilter: false,
            monthFilter: true,
            toggle: false
        })
    }

    Allrefilter = (event) => {
        this.setState({
            refilter: event.target.value,
            Update: true
        })
    }

    componentDidMount(){
        axios.get("http://localhost:8084/api/v1/items?sort=purchase_date:desc", 
        { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}})
        .then(res=>{
            store.dispatch(getItems(res.data))
        })
        .catch(err=>{
            console.log(err)
        })
    }

    componentDidUpdate(){
        if(this.state.Update){
            let date = this.state.refilter
            if(date === 'total'){
                axios.get(`http://localhost:8084/api/v1/items?sort=purchase_date:desc`,
                { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}})
                .then(res=>{
                   store.dispatch(getItems(res.data))
                
                })
                .catch(err=>{
                    console.log(err)
                })
            } else if(date.length === 4){
                let fromDate = new Date(`${date}-01-01 00:00:00.000`).getTime();
                let toDate = new Date(`${date}-12-31 23:59:59.000`).getTime();
                axios.get(`http://localhost:8084/api/v1/items?date_from=${fromDate}&date_to=${toDate}&sort=purchase_date:desc`,
                { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}})
                .then(res=>{
                    store.dispatch(getItems(res.data))
                
                })
                .catch(err=>{
                    console.log(err)
                })
            } else if (date.length === 7){
                let fromDate = new Date(`${date}-01 00:00:00.000`).getTime();
                let toDate = new Date(`${date}-31 23:59:59.000`).getTime();
                axios.get(`http://localhost:8084/api/v1/items?date_from=${fromDate}&date_to=${toDate}&sort=purchase_date:desc`,
                { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}})
                .then(res=>{
                     store.dispatch(getItems(res.data))
                   
                })
                .catch(err=>{
                    console.log(err)
                })
            }
            this.setState({Update: false})
        }
    }

    render () {
        // Total spent
        let totalAmount = 0
        for (let i = 0; i < this.props.items.length; i++) {
            totalAmount += this.props.items[i].product_price
        }
        // Za options na selectbox od Year
        let today = new Date();
        let year = today.getFullYear();
        let selectOptions= []
        for (let i = 2000; i <= year; i++) {
        selectOptions.push(<option key={i} value={i}>{i}</option>)
        }
        selectOptions.reverse();

        return (
            <React.Fragment>
             
                <div id="expenses">
                    <div id="expenses-header-one">
                        <h1>Expenses</h1>
                    </div>

                    <div id="expenses-header-two">
                        <button className={this.state.toggle? "tab-btn active-tab-btn " : "tab-btn"} 
                            onClick={this.yearFilter}>YEARLY
                        </button>
                        <button className={!this.state.toggle? "tab-btn active-tab-btn " : "tab-btn"} 
                            onClick={this.monthFilter}>MONTHLY
                        </button>

                        {this.state.monthFilter ? 
                            <p id="select-box-container">
                                <label htmlFor="expenses-filter">Choose Month </label>
                                <input type='month' className="select-box" id="expenses-month-box" onChange={this.Allrefilter}></input>
                            </p>
                        : null}

                        {this.state.yearFilter ? 
                            <p id="select-box-container">
                                <label htmlFor="expenses-filter">Choose Year </label>
                                <select name="expenses-filter" className="select-box" id="expenses-select-box" onChange={this.Allrefilter}>
                                    <option>----</option>
                                    <option value={'total'}>Total</option>
                                    {selectOptions}
                                </select>
                            </p>
                        : null}
                            
                    </div>
                    <Table />
                </div>
                <div id="total-spent">
                    <p>Total Spent: {totalAmount} den.</p>
                </div>
            </React.Fragment>
            
        )
    }
}

function mapStateToProps (state) {
    return {
        items: state.itemsReducer.items
    }
}

export default connect(mapStateToProps)(Expenses)


// import React from 'react'

// import './Expenses.css'
// const Expenses = ()=>{
//     return(
//         <React.Fragment>
//              <h3>Expenses</h3>
//   <div className="expense4">
//   <button className="monthly-btn4">Monthly</button>
//   <button className="yearly-btn4">Yearly</button>
  
//   <label  id="filter4">Choose Month: 
//     <select id="filter4">
//         <option>January</option>
//         <option>February</option>
//         <option>March</option>
//         <option>April</option>
//         <option>May</option>
//         <option>June</option>
//         <option>July</option>
//         <option>August</option>
//         <option>September</option>
//         <option>Octomber</option>
//         <option>November</option>
//         <option>Decembar</option>
//     </select>
//   </label>
  
// </div>
        
        
//         <table className="data4">
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
//                     {/* <a href=""><i className="far fa-edit"></i></a>
//                     <a href=""><i className="far fa-trash-alt"></i></a> */}
//                 </td>
//           </tr>
//           <tr>
//             <td>Coca-cola</td>
//             <td>Drink</td>
//             <td>Carbonated soft drink</td>
//             <td>19.08.2018</td>
//             <td>75</td>
//             <td>
//                     {/* a href=""><i className="far fa-edit"></i></a>
//                     <a href=""><i className="far fa-trash-alt"></i></a>< */}
//                 </td>
//           </tr>
//           <tr>
//             <td>Coca-cola</td>
//             <td>Drink</td>
//             <td>Carbonated soft drink</td>
//             <td>19.08.2018</td>
//             <td>75</td>
//             <td>
//                     {/* <a href=""><i className="far fa-edit"></i></a>
//                     <a href=""><i className="far fa-trash-alt"></i></a> */}
//                 </td>
//           </tr>
//           <tr>
//             <td>Coca-cola</td>
//             <td>Drink</td>
//             <td>Carbonated soft drink</td>
//             <td>19.08.2018</td>
//             <td>75</td>
//             <td>
//                     {/* <a href=""><i className="far fa-edit"></i></a>
//                     <a href=""><i className="far fa-trash-alt"></i></a> */}
//                 </td>
//           </tr>
//           <tr>
//             <td>Coca-cola</td>
//             <td>Drink</td>
//             <td>Carbonated soft drink</td>
//             <td>19.08.2018</td>
//             <td>75</td>
//             <td>
//                     {/* <a href=""><i className="far fa-edit"></i></a>
//                     <a href=""><i className="far fa-trash-alt"></i></a> */}
//                 </td>
//           </tr>
//           <tr>
//             <td>Coca-cola</td>
//             <td>Drink</td>
//             <td>Carbonated soft drink</td>
//             <td>19.08.2018</td>
//             <td>75</td>
//             <td>
//                     {/* <a href=""><i className="far fa-edit"></i></a>
//                     <a href=""><i className="far fa-trash-alt"></i></a> */}
//                 </td>
//           </tr>
//           <tr>
//             <td>Coca-cola</td>
//             <td>Drink</td>
//             <td>Carbonated soft drink</td>
//             <td>19.08.2018</td>
//             <td>75</td>
//             <td>
//                     {/* <a href=""><i className="far fa-edit"></i></a>
//                     <a href=""><i className="far fa-trash-alt"></i></a> */}
//                 </td>
//           </tr>
//           <tr>
//             <td>Coca-cola</td>
//             <td>Drink</td>
//             <td>Carbonated soft drink</td>
//             <td>19.08.2018</td>
//             <td>75</td>
//             <td>
//                     {/* <a href=""><i className="far fa-edit"></i></a>
//                     <a href=""><i className="far fa-trash-alt"></i></a> */}
//                 </td>
//           </tr>
//           <tr>
//             <td>Coca-cola</td>
//             <td>Drink</td>
//             <td>Carbonated soft drink</td>
//             <td>19.08.2018</td>
//             <td>75</td>
//             <td>
//                     {/* <a href=""><i className="far fa-edit"></i></a>
//                     <a href=""><i className="far fa-trash-alt"></i></a> */}
//                 </td>
//           </tr>
//           <tr>
//             <td>Coca-cola</td>
//             <td>Drink</td>
//             <td>Carbonated soft drink</td>
//             <td>19.08.2018</td>
//             <td>75</td>
//             <td>
//                     {/* <a href=""><i className="far fa-edit"></i></a>
//                     <a href=""><i className="far fa-trash-alt"></i></a> */}
//                 </td>
//           </tr>
//           <tr>
//             <td>Coca-cola</td>
//             <td>Drink</td>
//             <td>Carbonated soft drink</td>
//             <td>19.08.2018</td>
//             <td>75</td>
//             <td>
//                     {/* <a href=""><i className="far fa-edit"></i></a>
//                     <a href=""><i className="far fa-trash-alt"></i></a> */}
//                 </td>
//           </tr>
//           </tbody>
//         </table>
//         <div className="total-spent4">
//             <p >Total spent:1205 den.</p>

//         </div>
//         </React.Fragment>
//     )
// }



// export default Expenses