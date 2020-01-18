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
            showMonhtly: false,
            showYearly: true,
            toggle: true,
            filterValue: null,
            Update: false
        }
    }

    showYearly = () => {
        this.setState({
            showYearly: true,
            showMonhtly: false,
            toggle: true
        })
    }

    showMonhtly = () => {
        this.setState({
            showYearly: false,
            showMonhtly: true,
            toggle: false
        })
    }

    searchFilter = (event) => {
        this.setState({
            filterValue: event.target.value,
            Update: true
        })
    }

    componentDidMount(){
        axios.get("http://localhost:8084/api/v1/items?sort=purchase_date:desc", 
        { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}})
        .then(res=>{
            store.dispatch(getItems(res.data))
            // store.dispatch(sort('LATEST_PURCHASE'))
            // this.setState({didUpdate: this.props.didUpdate})
            console.log('didMount')
        })
        .catch(err=>{
            console.log(err)
        })
    }

    componentDidUpdate(){
        if(this.state.Update){
            let myDate = this.state.filterValue
            if(myDate === 'total'){
                axios.get(`http://localhost:8084/api/v1/items?sort=purchase_date:desc`,
                { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}})
                .then(res=>{
                    // console.log(res.data)
                    store.dispatch(getItems(res.data))
                    // store.dispatch(sort('LATEST_PURCHASE'))
                    console.log('didUpdate')
                })
                .catch(err=>{
                    console.log(err)
                })
            } else if(myDate.length === 4){
                // let fromTargetDate = `${myDate}-01-01T00:00:00.000Z`
                let fromTargetDate = new Date(`${myDate}-01-01 00:00:00.000`).getTime();
                // let toTargetDate = `${myDate}-12-31T23:59:59.000Z`
                let toTargetDate = new Date(`${myDate}-12-31 23:59:59.000`).getTime();
                axios.get(`http://localhost:8084/api/v1/items?date_from=${fromTargetDate}&date_to=${toTargetDate}&sort=purchase_date:desc`,
                { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}})
                .then(res=>{
                    store.dispatch(getItems(res.data))
                    // store.dispatch(sort('LATEST_PURCHASE'))
                    console.log('Update')
                })
                .catch(err=>{
                    console.log(err)
                })
            } else if (myDate.length === 7){
                // let fromTargetDate = `${myDate}-01T00:00:00.000Z`
                let fromTargetDate = new Date(`${myDate}-01 00:00:00.000`).getTime();
                // let toTargetDate = `${myDate}-31T23:59:59.000Z`
                let toTargetDate = new Date(`${myDate}-31 23:59:59.000`).getTime();
                axios.get(`http://localhost:8084/api/v1/items?date_from=${fromTargetDate}&date_to=${toTargetDate}&sort=purchase_date:desc`,
                { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}})
                .then(res=>{
                    // console.log(res.data)
                    store.dispatch(getItems(res.data))
                    // store.dispatch(sort('LATEST_PURCHASE'))
                    console.log('Update')
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
        let totalSpent = 0
        for (let i = 0; i < this.props.items.length; i++) {
            totalSpent += this.props.items[i].product_price
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
                {/* *****Narednava linija ja renderira <Navbar/> a toggle mu treba za da se dodade klasa na kopceto PExpences da bide zeleno*****  */}
                {/* <this.props.component toggle={false}/> */}
                <div id="expenses">
                    <div id="expenses-header-one">
                        <h1>Expenses</h1>
                    </div>

                    <div id="expenses-header-two">
                        <button className={this.state.toggle? "tab-btn active-tab-btn " : "tab-btn"} 
                            onClick={this.showYearly}>YEARLY
                        </button>
                        <button className={!this.state.toggle? "tab-btn active-tab-btn " : "tab-btn"} 
                            onClick={this.showMonhtly}>MONTHLY
                        </button>

                        {this.state.showMonhtly ? 
                            <p id="select-box-container">
                                <label htmlFor="expenses-filter">Choose Month </label>
                                <input type='month' className="select-box" id="expenses-month-box" onChange={this.searchFilter}></input>
                            </p>
                        : null}

                        {this.state.showYearly ? 
                            <p id="select-box-container">
                                <label htmlFor="expenses-filter">Choose Year </label>
                                <select name="expenses-filter" className="select-box" id="expenses-select-box" onChange={this.searchFilter}>
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
                    <p>Total Spent: {totalSpent} den.</p>
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