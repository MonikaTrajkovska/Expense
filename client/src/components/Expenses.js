import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import store from '../redux/store'
import { getItems } from '../redux/actions/itemsActions'
import Table from './Table'
import Header from './Header'
import './Expenses.css'



class Expenses extends React.Component {
    constructor() {
        super()
        this.state = {
            monthFilter: false,
            yearFilter: true,
            refilter: null,
            Update: false
        }
    }

    yearFilter = () => {
        this.setState({
            yearFilter: true,
            monthFilter: false,
           
        })
    }

    monthFilter = () => {
        this.setState({
            yearFilter: false,
            monthFilter: true,
            
        })
    }

    Allrefilter = (event) => {
        this.setState({
            refilter: event.target.value,
            Update: true
        })
    }

    componentDidMount() {
        axios.get("https://mern-app-expensecalculator.herokuapp.com/api/v1/items?sort=purchase_date:desc",
            { headers: { "Authorization": `Bearer ${localStorage.getItem('jwt')}` } })
            .then(res => {
                store.dispatch(getItems(res.data))
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidUpdate() {
        if (this.state.Update) {
            let date = this.state.refilter
            if (date === 'all') {
                axios.get(`https://mern-app-expensecalculator.herokuapp.com/api/v1/items?sort=purchase_date:desc`,
                    { headers: { "Authorization": `Bearer ${localStorage.getItem('jwt')}` } })
                    .then(res => {
                        store.dispatch(getItems(res.data))

                    })
                    .catch(err => {
                        console.log(err)
                    })
            } else if (date.length === 4) {
                let fromDate = new Date(`${date}-01-01 00:00:00.000`).getTime();
                let toDate = new Date(`${date}-12-31 23:59:59.000`).getTime();
                axios.get(`https://mern-app-expensecalculator.herokuapp.com/api/v1/items?date_from=${fromDate}&date_to=${toDate}&sort=purchase_date:desc`,
                    { headers: { "Authorization": `Bearer ${localStorage.getItem('jwt')}` } })
                    .then(res => {
                        store.dispatch(getItems(res.data))

                    })
                    .catch(err => {
                        console.log(err)
                    })
            } else { 
                let fromDate = new Date(`${date}-01 00:00:00.000`).getTime();
                let toDate = new Date(`${date}-31 23:59:59.000`).getTime();
                axios.get(`https://mern-app-expensecalculator.herokuapp.com/api/v1/items?date_from=${fromDate}&date_to=${toDate}&sort=purchase_date:desc`,
                    { headers: { "Authorization": `Bearer ${localStorage.getItem('jwt')}` } })
                    .then(res => {
                        store.dispatch(getItems(res.data))

                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
            this.setState({ Update: false })
        }
    }

    render() {
        // Total spent
        let totalAmount = 0
        for (let i = 0; i < this.props.items.length; i++) {
            totalAmount += this.props.items[i].product_price
        }
       

        return (
            <React.Fragment>
                <Header />
                <h3>Expenses</h3>
                <div className="expense4">
                    <button className="yearly-btn4" onClick={this.yearFilter}>Yearly</button>
                  
                    <button className="monthly-btn4" onClick={this.monthFilter}>MONTHLY</button>
                   
                    {this.state.monthFilter ?
                        <p id="box-container">
                            <label htmlFor="filter4">Choose Month </label>

                            <input type='month' className="box" id="month-box" onChange={this.Allrefilter}></input>
                        </p>
                        : null}

                    {this.state.yearFilter ?
                        <p id="box-container">
                            <label htmlFor="filter4">Choose Year </label>
                            <select  className="box" id="cost" onChange={this.Allrefilter}>
                                <option>----</option>
                                <option value={'all'}>Total</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                                <option value="2012">2012</option>
                                <option value="2011">2011</option>
                            </select>
                        </p>
                        : null}

                    <Table />
                </div>
                <div className="total-spent4">
                    <p>Total Spent: {totalAmount} denars </p>
                </div>
            </React.Fragment >

        )
    }
}

function mapStateToProps(state) {
    return {
        items: state.itemsReducer.items
    }
}

export default connect(mapStateToProps)(Expenses)


