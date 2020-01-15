import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import Register from './components/Register'
import Login from './components/Login'
import NewProduct from './components/NewProduct'
import Header from './components/Header'
import Expenses from './components/Expenses'
import Products from './components/Products'
import DeleteProduct from './components/DeleteProduct'
import UpdateProduct from './components/UpdateProduct'

import store from './redux/store'
// import AppNavBar from './components/AppNavBar'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const app = document.getElementById('root')
// const Menu =() => {
//      return (
//         <ul>
//             <li>
//                 <Link to= '/'>Login</Link>
//             </li>
//              <li>
//                  <Link to='/newproduct'>NewProduct</Link>
//              </li>
//              <li>
//                  <Link to='/expenses'>header</Link>
//              </li>
//              <li>
//                  <Link to= '/register'>Register</Link>
//              </li>
//              <li>
//                  <Link to= '/products'>Products</Link>
//              </li>
//              {/* <li>
//                  <Link to= '/deleteproduct'>Delete Product</Link>
//              </li> */}
//          </ul>
//      )
//  }

const Routes = () => {
    return (
        <Router>
            {/* <AppNavBar/>  */}
            <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/Register' component={Register} />
                <Route exact path='/updateproduct/:id' component={UpdateProduct} />
                {/* <Route exact path='/edit' component={edit} /> */}
                {/* <Route exact  path='/header' component={Header}/>   */} */}
                <Route exact path="/newproduct" render={() =>
                    <>
                        <Header />
                        <NewProduct />
                    </>
                } />
                <Route exact path="/expenses" render={() =>
                    <>
                        <Header />
                        <Expenses />
                    </>
                } />
                <Route exact path="/products" render={() =>
                    <>
                        <Header />
                        <Products />
                    </>
                } />
                <Route exact path="/deleteproduct/:id" component={DeleteProduct}/>
                  
              
                {/* <Route exact path='/login' component={Login}/> */}
            </Switch>
        </Router>
    )
}

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>, app
)