(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{38:function(e,t,a){},42:function(e,t){},43:function(e,t,a){e.exports=a(75)},52:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(22),l=a.n(n),c=a(0),r=a.n(c),s=a(12),i=a(15),o=a(3),u=a(4),m=a(6),p=a(5),d=a(7),h=(a(52),a(2)),E=a.n(h),f=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).saveValue=function(t){e.setState(Object(i.a)({},t.target.id,t.target.value))},e.register=function(t){null===e.state.first_name||null===e.state.last_name||null===e.state.email||null===e.state.date_birth||null===e.state.telephone||null===e.state.country||null===e.state.password?(t.preventDefault(),alert("Please fill  all the fields  ")):null!=e.state.first_name&&null!=e.state.last_name&&null!=e.state.email&&null!=e.state.date_birth&&null!=e.state.telephone&&null!=e.state.country&&null!=e.state.password&&(t.preventDefault(),E.a.post("http://127.0.0.1:8085/api/v1/auth/register",{first_name:e.state.first_name,last_name:e.state.last_name,email:e.state.email,date_birth:e.state.date_birth,telephone:e.state.telephone,country:e.state.country,password:e.state.password}).then((function(t){console.log(t),E.a.post("http://127.0.0.1:8085/api/v1/auth/login",{email:e.state.email,password:e.state.password}).then((function(t){localStorage.setItem("jwt",t.data.jwt),localStorage.setItem("name",e.state.first_name),localStorage.setItem("lastName",e.state.last_name)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)})))},e.state={first_name:null,last_name:null,email:null,date_birth:null,telephone:null,country:null,password:null},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"login1"},r.a.createElement("div",{className:"box-container1"},r.a.createElement("form",null,r.a.createElement("p",{className:"input-container1"},r.a.createElement("label",{className:"text-field-input1"},"First name"),r.a.createElement("input",{type:"text",className:"text-field1",id:"first_name",onChange:this.saveValue})),r.a.createElement("p",{className:"input-container1"},r.a.createElement("label",{className:"text-field-input1"},"Last name"),r.a.createElement("input",{type:"text",className:"text-field1",id:"last_name",onChange:this.saveValue})),r.a.createElement("p",{className:"input-container1"},r.a.createElement("label",{className:"text-field-input1"},"E-mail"),r.a.createElement("input",{type:"email",className:"text-field1",id:"email",onChange:this.saveValue})),r.a.createElement("p",{className:"input-container1"},r.a.createElement("label",{className:"text-field-input1"},"Date of birth"),r.a.createElement("input",{type:"text",className:"text-field1",id:"date_birth",onChange:this.saveValue})),r.a.createElement("p",{className:"input-container1"},r.a.createElement("label",{className:"text-field-input1"},"Telephone"),r.a.createElement("input",{type:"number",className:"text-field1",id:"telephone",onChange:this.saveValue})),r.a.createElement("p",{className:"input-container1"},r.a.createElement("label",{className:"text-field-input1"},"Country"),r.a.createElement("input",{type:"text",className:"text-field1",id:"country",onChange:this.saveValue})),r.a.createElement("p",{className:"input-container1"},r.a.createElement("label",{className:"text-field-input1"},"Password"),r.a.createElement("input",{type:"password",className:"text-field1",id:"password",onChange:this.saveValue})),r.a.createElement("button",{className:"primary-button1",type:"submit",onClick:this.register},"Register"))),r.a.createElement("div",{className:"additional-info1"},r.a.createElement("p",null,"Or if you don't have an account,",r.a.createElement("button",{onClick:this.props.registerDone,className:"register-login"},"Sign In")))))}}]),t}(r.a.Component),y=(a(70),a(71),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).saveValue=function(t){e.setState(Object(i.a)({},t.target.id,t.target.value))},e.login=function(t){t.preventDefault(),E.a.post("http://127.0.0.1:8085/api/v1/auth/login",{email:e.state.email,password:e.state.password}).then((function(e){localStorage.setItem("jwt",e.data.jwt),localStorage.setItem("name",e.data.first_name),localStorage.setItem("lastName",e.data.last_name)})).catch((function(e){console.log(e)}))},e.state={email:null,password:null},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"login"},r.a.createElement("div",{className:"box-container"},r.a.createElement("form",null,r.a.createElement("p",{className:"input-container"},r.a.createElement("label",{className:"text-field-input"},"E-mail"),r.a.createElement("input",{type:"text",className:"text-field",id:"email",onChange:this.saveValue})),r.a.createElement("p",{className:"input-container"},r.a.createElement("label",{className:"text-field-input"},"Password"),r.a.createElement("input",{type:"password",className:"text-field",id:"password",onChange:this.saveValue})),r.a.createElement("button",{className:"primary-button",onClick:this.login},"Sign in")),r.a.createElement("div",{className:"additional-info"},r.a.createElement("p",null,"Or if you don't have an account,",r.a.createElement("button",{onClick:this.props.registerDone},"Register"))))))}}]),t}(r.a.Component)),b=a(20),_=a(40),g=a.n(_),v=a(18),N={items:[],newProduct:!1,Update:!1,editItems:{},expensesClicked:!1};var x=Object(b.c)({itemsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ITEMS":return Object(v.a)({},e,{items:t.payload});case"DELETE_ITEM":return Object(v.a)({},e,{items:e.items.filter((function(e){return e._id!==t.payload}))});case"EDIT_ITEMS":return Object(v.a)({},e,{editItems:{_id:t.payload._id,product_name:t.payload.product_name,product_type:t.payload.product_type,product_description:t.payload.product_description,purchase_date:t.payload.purchase_date,product_price:t.payload.product_price}});case"GET_TOTAL_PRICE":return Object(v.a)({},e,{totalPrice:t.payload});case"UPDATE":return Object(v.a)({},e,{Update:t.state});case"NEW_ITEM":return Object(v.a)({},e,{newProduct:t.state});case"EXPENSES_CLICKED":return Object(v.a)({},e,{expensesClicked:t.expensesClicked});default:return Object(v.a)({},e)}}}),j=Object(b.d)(x,Object(b.a)(g.a));console.log(j.getState());var w=j;function O(e){return{type:"GET_ITEMS",payload:e}}var P=function(e){return{type:"DELETE_ITEM",payload:e}};function C(e){return{type:"UPDATE",state:e}}function S(e,t,a,n,l,c){return{type:"EDIT_ITEMS",payload:{_id:e,product_name:t,product_type:a,product_description:n,purchase_date:l,product_price:c}}}a(38);var D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).save=function(e){a.setState(Object(i.a)({},e.target.id,e.target.value))},a.createProduct=function(e){null===a.state.product_name||null===a.state.product_type||null===a.state.product_description||null===a.state.purchase_date||null===a.state.product_price?(e.preventDefault(),alert("You missed some fileds")):null!=a.state.product_name&&null!=a.state.product_type&&null!=a.state.product_description&&null!=a.state.purchase_date&&null!=a.state.product_price&&(E.a.post("http://localhost:8084/api/v1/items",{product_name:a.state.product_name,product_type:a.state.product_type,product_description:a.state.product_description,purchase_date:a.state.purchase_date,product_price:a.state.product_price},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),w.dispatch(C(!0)))},a.state={newProduct:a.props.newProduct,product_name:""===a.props.product_name,product_type:""===a.props.newProduct,product_description:""===a.props.newProduct,purchase_date:""===a.props.newProduct,product_price:""===a.props.newProduct},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"New Product"),r.a.createElement("div",{id:"login2"},r.a.createElement("div",{className:"box-container2"},r.a.createElement("form",{action:""},r.a.createElement("p",{className:"input-container2"},r.a.createElement("label",{className:"text-field-input2"},"Product Name")," ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",className:"text-field2",id:"product_name",onChange:this.save,defaultValue:this.state.product_name})),r.a.createElement("p",{className:"input-container2"},r.a.createElement("label",{className:"text-field-input2"},"Product Type")," ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",className:"text-field2",id:"product_type",onChange:this.save,defaultValue:this.state.newProduct})),r.a.createElement("p",{className:"input-container2"},r.a.createElement("label",{className:"text-field-input2"},"Product Description")," ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",className:"text-field2",id:"product_description",onChange:this.save,defaultValue:this.state.newProduct})),r.a.createElement("p",{className:"input-container2"},r.a.createElement("label",{className:"text-field-input2"},"Purchase Date")," ",r.a.createElement("br",null),r.a.createElement("input",{type:"date",className:"text-field2",id:"purchase_date",onChange:this.save,defaultValue:this.state.newProduct})),r.a.createElement("p",{className:"input-container2"},r.a.createElement("label",{className:"text-field-input2"},"Product Price")," ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",className:"text-field2",id:"product_price",onChange:this.save,defaultValue:this.state.newProduct})),!this.state.newProduct,r.a.createElement("button",{className:"primary-button2",onClick:this.createProduct},"CREATE PRODUCT"))),r.a.createElement("div",{className:"new2"},r.a.createElement("p",null,r.a.createElement("i",{className:"fas fa-plus-circle"})),r.a.createElement("p",null,"You are creating new product"))))}}]),t}(r.a.Component);var I=Object(s.b)((function(e){return{items:e.itemsReducer.items,newProduct:e.itemsReducer.newProduct}}))(D),k=(a(72),a(10)),T=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("nav",{className:"nav3"},r.a.createElement("div",{className:"buttons3"},r.a.createElement(k.b,{to:"/products"},r.a.createElement("button",{className:"main-buttons3",id:"products-btn3"},"Products")),r.a.createElement(k.b,{to:"/expneses"},r.a.createElement("button",{className:"main-buttons3",id:"expenses-btn3"},"Expenses"))))))},A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).yearlySelect=function(){a.setState({monthlyDisplay:!1,yearlyDisplay:!0,active:!1,yearlySelected:"all",filter:null})},a.monthlySelect=function(){a.setState({yearlyDisplay:!1,monthlyDisplay:!0,active:!0,yearlySelected:"all",filter:null})},a.yearlySelectHandler=function(e){a.setState({yearlySelected:e.target.value})},a.monthlySelectHandler=function(e){a.setState({filter:e.target.value})},a.state={monthlyDisplay:!1,yearlyDisplay:!0,active:!1,filter:null,yearlySelected:null},a.year=(new Date).getFullYear()-20,a.years=Array.from(new Array(21),(function(e,t){return t+a.year})),a.months=["January","February","March","April","May","June","July","August","September","October","November","December"],a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(){if("all"===this.state.yearlySelected)E.a.get("http://localhost:8084/api/v1/items/?sort=date:desc",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){w.dispatch(O(e.data))})).catch((function(e){console.log(e)}));else if(null==this.state.yearlySelected||4!==this.state.yearlySelected.length||this.state.monthlyDisplay){if(null!=this.state.filter&&null!=this.state.yearlySelected&&this.state.monthlyDisplay){for(var e,t=0;t<this.months.length;t++)this.state.filter===this.months[t]&&(e=t+1,1===t.toString().length&&(e="0"+e.toString()));var a=new Date("".concat(this.state.yearlySelected,"-").concat(e,"-01 00:00:00.000")).getTime(),n=new Date("".concat(this.state.yearlySelected,"-").concat(e,"-31 23:59:59.000")).getTime();E.a.get("http://localhost:8084/api/v1/items/?date_from=".concat(a,"&date_to=").concat(n),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){w.dispatch(O(e.data))})).catch((function(e){return console.log(e)}))}}else{var l=new Date("".concat(this.state.yearlySelected,"-01-01 00:00:00.000")).getTime(),c=new Date("".concat(this.state.yearlySelected,"-12-31 23:59:59.000")).getTime();E.a.get("http://localhost:8084/api/v1/items/?date_from=".concat(l,"&date_to=").concat(c),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){w.dispatch(O(e.data))})).catch((function(e){return console.log(e)}))}}},{key:"render",value:function(){var e=r.a.createElement("select",{name:"year-select",className:"month-select",onChange:this.yearlySelectHandler},r.a.createElement("option",{defaultChecked:!0,value:"all"}," ALL"),this.years.map((function(e,t){return r.a.createElement("option",{key:"year".concat(t),value:e},e)}))),t=r.a.createElement("select",{name:"month-select",className:"month-select select-box",onChange:this.monthlySelectHandler},r.a.createElement("option",{defaultChecked:!0},"Month"),this.months.map((function(e,t){return r.a.createElement("option",{key:"month".concat(t),value:e},e)}))),a=r.a.createElement("div",{className:"yearMonthly-div"},t,e);return r.a.createElement(r.a.Fragment,null,r.a.createElement(this.props.header,null),r.a.createElement("h3",{id:"expenses-h3"},"Expenses"),r.a.createElement("div",{className:"expenses-div"},r.a.createElement(k.b,{to:"#"},r.a.createElement("button",{className:this.state.active?"select-btn":"active-btn select-btn",onClick:this.yearlySelect},"Yearly")),r.a.createElement(k.b,{to:"#"},r.a.createElement("button",{className:this.state.active?"active-btn select-btn":"select-btn",onClick:this.monthlySelect},"Monthly")),r.a.createElement("div",{className:"select-div"},this.state.monthlyDisplay?r.a.createElement("label",{htmlFor:"month-select"},"Choose month and year:"):r.a.createElement("label",{htmlFor:"year-select"},"Choose year:"),this.state.monthlyDisplay?a:e)),r.a.createElement(this.props.products,null),r.a.createElement("div",{className:"transparent-div"},r.a.createElement("p",null,"Total spent: ",r.a.createElement("span",null,this.props.totalPrice)," den.")))}}]),t}(r.a.Component);var V=Object(s.b)((function(e){return{totalPrice:e.totalPrice}}))(A),F=(a(74),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).onDeleteClick=function(e){return E.a.delete("http://localhost:8084/api/v1/items/".concat(e),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(t){console.log(t),w.dispatch(P(e))})).catch((function(e){console.log(e)})),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"modal6"},r.a.createElement("h3",null,"Delete Product"),r.a.createElement("p",null,"You are about to delete this product.Are you sure you wish to continue?"),r.a.createElement("div",{className:"alert-btn6"},r.a.createElement("button",{className:"cancel-btn6"},"Cancel"),r.a.createElement("button",{className:"delete-btn6"},"Delete"))))},a.doneEdit=function(e){var t=a.props.items.filter((function(t,a){if(t._id===e)return t}));a.props.editOneItem(t[0]._id,t[0].product_name,t[0].product_type,t[0].product_description,t[0].purchase_date,t[0].product_price)},a.state={showModal:null,item:[],alertShow:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){E.a.get("http://localhost:8084/api/v1/items",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){w.dispatch(O(e.data))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=null;return this.props.items&&(t=this.props.items.map((function(t){return r.a.createElement("tr",{key:t._id},r.a.createElement("td",null,t.product_name),r.a.createElement("td",null,t.product_type),r.a.createElement("td",null,t.product_description),r.a.createElement("td",null,t.purchase_date),r.a.createElement("td",null,t.product_price),r.a.createElement("td",null,r.a.createElement(k.b,{to:"/updateproduct/".concat(t._id)},r.a.createElement("span",{id:"edit",className:"btn btn-light",onClick:function(){e.doneEdit(t._id)}}," Edit ")),r.a.createElement("button",{id:"delete",className:"btn btn-danger",onClick:function(){e.onDeleteClick(t._id)}}," Delete ")))}))),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main-div5"},r.a.createElement("h3",null,"Products"),r.a.createElement("label",null,"Filter by:",r.a.createElement("select",{id:"filter5"},r.a.createElement("option",null,"Year"),r.a.createElement("option",null,"Highest Price"),r.a.createElement("option",null,"Lowest Price"),r.a.createElement("option",null,"Latest Purchases")))),r.a.createElement("table",{className:"table table-dark"},this.state.showModal,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Product name"),r.a.createElement("th",null,"Product type"),r.a.createElement("th",null,"Product description"),r.a.createElement("th",null,"Purchase date"),r.a.createElement("th",null,"Product price "),r.a.createElement("th",null),r.a.createElement("th",null))),r.a.createElement("tbody",null,t)),r.a.createElement(k.b,{to:"/newproduct"},r.a.createElement("button",{className:"fixed-button5",onClick:this.toggle},"New Product")))}}]),t}(r.a.Component));var M=Object(s.b)((function(e){return{items:e.itemsReducer.items}}),(function(e){return{getItems:function(t){return e(O(t))},editOneItem:function(t){return e(S(t))}}}))(F),R=a(42),U=a.n(R),B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).save=function(e){a.setState(Object(i.a)({},e.target.id,e.target.value))},a.edit=function(e){e.preventDefault(),E.a.put("http://localhost:8084/api/v1/items/".concat(a.props.match.params.id),{product_name:a.state.product_name,product_type:a.state.product_type,product_description:a.state.product_description,purchase_date:a.state.purchase_date,product_price:a.state.product_price},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},console.log(a.props),a.state={editItems:a.props.editItems,_id:a.props._id,product_name:a.props.product_name,product_type:a.props.product_type,product_description:a.props.product_description,purchase_date:a.props.purchase_date,product_price:a.props.product_price},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Edit this product "),r.a.createElement("div",{id:"login2"},r.a.createElement("div",{className:"box-container2"},r.a.createElement("form",null,r.a.createElement("p",{className:"input-container2"},r.a.createElement("label",{className:"text-field-input2"},"Product Name")," ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",className:"text-field2",id:"product_name",onChange:this.save,defaultValue:this.props.editItems})),r.a.createElement("p",{className:"input-container2"},r.a.createElement("label",{className:"text-field-input2"},"Product Type")," ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",className:"text-field2",id:"product_type",onChange:this.save,defaultValue:this.props.editItems})),r.a.createElement("p",{className:"input-container2"},r.a.createElement("label",{className:"text-field-input2"},"Product Description")," ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",className:"text-field2",id:"product_description",onChange:this.save,defaultValue:this.props.editItems})),r.a.createElement("p",{className:"input-container2"},r.a.createElement("label",{className:"text-field-input2"},"Purchase Date")," ",r.a.createElement("br",null),r.a.createElement("input",{type:"date",className:"text-field2",id:"purchase_date",onChange:this.save,defaultValue:this.props.editItems})),r.a.createElement("p",{className:"input-container2"},r.a.createElement("label",{className:"text-field-input2"},"Product Price")," ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",className:"text-field2",id:"product_price",onChange:this.save,defaultValue:this.props.editItems})),r.a.createElement("button",{className:"primary-button long",id:"create-btn",onClick:this.edit},"EDIT PRODUCT"))),r.a.createElement("div",{className:"new2"},r.a.createElement("p",null,r.a.createElement("i",{className:"fas fa-plus-circle"})),r.a.createElement("p",null,"You are updating product"))))}}]),t}(r.a.Component);var L=Object(s.b)((function(e){return{items:e.items,editItems:e.editItems}}),(function(e){return{Update:function(t){return e(C(t))},newItem:function(t){return e({type:"NEW_ITEM",state:t})},editOneItem:function(t){return e(S(t))}}}))(B),z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).hideAlert=function(){a.setState({alertShow:!1})},a.state={alertShow:!1,items:null},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.items&&E.a.get("http://localhost:8084/api/v1/items/?sort=date:desc",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){w.dispatch(O(e.data));for(var t=0,a=0;a<e.data.length;a++)t+=parseInt(e.data[a].price);w.dispatch({type:"GET_TOTAL_PRICE",payload:t})})).catch((function(e){console.log(e)}))}},{key:"componentDidUpdate",value:function(){this.props.Update&&E.a.get("http://localhost:8084/api/v1/items/?sort=date:desc",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){w.dispatch(O(e.data)),w.dispatch(C(!1))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=null;return this.props.items&&(t=this.props.items.map((function(t){return r.a.createElement("tr",{key:t._id},r.a.createElement("td",null,t.product_name),r.a.createElement("td",null,t.product_type),r.a.createElement("td",null,t.product_description),r.a.createElement("td",null,t.purchase_date),r.a.createElement("td",null,t.product_price),r.a.createElement("td",null,r.a.createElement(k.b,{to:"/updateproduct/".concat(t._id)},r.a.createElement("span",{id:"edit",className:"btn btn-light",onClick:function(){e.doneEdit(t._id)}}," Edit ")),r.a.createElement("button",{id:"delete",className:"btn btn-danger",onClick:function(){e.onDeleteClick(t._id)}}," Delete ")))}))),r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"main-box"},r.a.createElement("table",{className:"Table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Product Name"),r.a.createElement("th",null,"Product Type"),r.a.createElement("th",null,"Product Description"),r.a.createElement("th",null,"Purchase Date"),r.a.createElement("th",null,"Product Price"))),r.a.createElement("tr",null,r.a.createElement("td",{id:"emptyTd"})),r.a.createElement("tbody",null,t))),alert)}}]),t}(r.a.Component);var Y=Object(s.b)((function(e){return{items:e.items,Update:e.Update}}))(z),H=a(19),J=document.getElementById("root");l.a.render(r.a.createElement(s.a,{store:w},r.a.createElement((function(){return r.a.createElement(k.a,null,r.a.createElement(H.c,null,r.a.createElement(H.a,{exact:!0,path:"/",component:y}),r.a.createElement(H.a,{exact:!0,path:"/Register",component:f}),r.a.createElement(H.a,{exact:!0,path:"/updateproduct/:id",component:L})," */}",r.a.createElement(H.a,{exact:!0,path:"/newproduct",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement(I,null))}}),r.a.createElement(H.a,{exact:!0,path:"/expenses",render:function(){return r.a.createElement(V,{header:T,products:Y})}}),r.a.createElement(H.a,{exact:!0,path:"/products",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement(M,null))}}),r.a.createElement(H.a,{exact:!0,path:"/deleteproduct/",component:U.a})))}),null)),J)}},[[43,1,2]]]);
//# sourceMappingURL=main.7d7ce41f.chunk.js.map