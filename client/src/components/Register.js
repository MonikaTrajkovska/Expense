import React from 'react'
import './Register.css'


 import axios from 'axios'
 
 
 class Register extends React.Component {
     constructor () {
         super()
         this.state = {
             first_name: null,
             last_name: null,
             email: null,
             date_birth:null,
             telephone: null,
             country: null,
             password: null,
            
         }
     }
 
     saveValue = (event) => {
         this.setState({[event.target.id]: event.target.value})
     }
 
  
 
     register = (event) => {
         if(this.state.first_name === null ||
             this.state.last_name === null ||
             this.state.email === null ||
              this.state.date_birth === null ||
             this.state.telephone === null ||
             this.state.country === null ||
             this.state.password === null
              ){
                 event.preventDefault()
                 alert('Please fill  all the fields  ')
         } 
         else if (this.state.first_name != null &&
             this.state.last_name != null &&
             this.state.email != null &&
             this.state.date_birth != null &&
             this.state.telephone != null &&
             this.state.country != null &&
             this.state.password != null
             ) {
             event.preventDefault()
             axios.post('http://127.0.0.1:8085/api/v1/auth/register', {
                 first_name: this.state.first_name,
                 last_name: this.state.last_name,
                 email: this.state.email,
                 date_birth: this.state.date_birth,
                 telephone: this.state.telephone,
                 country: this.state.country,
                 password: this.state.password,
                 
             })
             .then(res => {
                 console.log(res)
                 axios.post('http://127.0.0.1:8085/api/v1/auth/login', {
                     email: this.state.email,
                     password: this.state.password
                 })
                 .then(res=>{
                     localStorage.setItem('jwt', res.data.jwt);
                     localStorage.setItem('name', this.state.first_name);
                     localStorage.setItem('lastName', this.state.last_name);
                    
                  
                 })
                 .catch(err=>{
                     console.log(err)
                 })
             })
             .catch(err=>{
                 console.log(err)
             });
         }
     }
 
     render () {
         return (
             <React.Fragment>
                 
                 <div className="login1">
                   <div className="box-container1">
                     <form>
                     <p className="input-container1">
                     <label className="text-field-input1">First name</label>
                     <input type="text" className="text-field1" id="first_name" onChange={this.saveValue} />
                 </p>
                 <p className="input-container1">
                     <label className="text-field-input1">Last name</label>
                     <input type="text" className="text-field1"  id="last_name" onChange={this.saveValue}/>
                 </p>
                 <p className="input-container1">
                     <label className="text-field-input1">E-mail</label>
                     <input type="email" className="text-field1" id='email' onChange={this.saveValue}/>
                 </p>
                 <p className="input-container1">
                     <label className="text-field-input1">Date of birth</label>
                     <input type="text" className="text-field1" id='date_birth' onChange={this.saveValue} />
                </p>
                 <p className="input-container1">
                     <label className="text-field-input1">Telephone</label>
                     <input type="number" className="text-field1" id='telephone' onChange={this.saveValue} />
                 </p>
                 <p className="input-container1">
                     <label className="text-field-input1">Country</label>
                    <input type="text" className="text-field1"id='country' onChange={this.saveValue}  />
                 </p>
                            
                    <p className="input-container1">
                        <label className="text-field-input1">Password</label>
                        <input type="password" className="text-field1" id='password' onChange={this.saveValue}/>
                          </p>      
                          <button className="primary-button1" type="submit" onClick={this.register}>Register</button>
                        </form>
                         </div>
                          
                                  
     <div className="additional-info1"><p>Or if you don't have an account,
      <button onClick={this.props.registerDone} className="register-login">Sign In</button>
                         </p>
                                                  
                                                 
                         </div>      
                            
                        </div>
                 
                     
             </React.Fragment>
         )
     }
     
 }
 
 export default Register

// const Register = ()=> {
//     return (
//         <React.Fragment>
       
//        <div className="login1">
//         <div className="box-container1">
//             <form>
//                 <p className="input-container1">
//                     <label className="text-field-input1">First name</label>
//                     <input type="text" className="text-field1" />
//                 </p>
//                 <p className="input-container1">
//                     <label className="text-field-input1">Last name</label>
//                     <input type="text" className="text-field1" />
//                 </p>
//                 <p className="input-container1">
//                     <label className="text-field-input1">E-mail</label>
//                     <input type="email" className="text-field1" />
//                 </p>
//                 <p className="input-container1">
//                     <label className="text-field-input1">Date of birth</label>
//                     <input type="text" className="text-field1" />
//                 </p>
//                 <p className="input-container1">
//                     <label className="text-field-input1">Telephone</label>
//                     <input type="number" className="text-field1" />
//                 </p>
//                 <p className="input-container1">
//                     <label className="text-field-input1">Country</label>
//                     <input type="text" className="text-field1" />
//                 </p>
//                     <p className="input-container1">
//                         <label className="text-field-input1">Password</label>
//                         <input type="password" className="text-field1" />
//                          </p>
//                 <button className="primary-button1">Register</button>
//                 </form>
           
           
//            </div>

        
//             {/* <div className="additional-info1">Or if you don't have an account,<a href="#">Sign in</a></div> */}
                        
                       
// </div>

//         </React.Fragment>
//     )
// }
// export default Register