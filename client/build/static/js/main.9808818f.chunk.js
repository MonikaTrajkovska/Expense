(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{38:function(e,t,a){},39:function(e,t,a){},43:function(e,t,a){e.exports=a(74)},69:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(22),l=a.n(n),c=a(0),r=a.n(c),s=a(12),o=a(3),i=a(18),u=a(20),p=a(41),d=a.n(p),m=a(19),h={items:[],newProduct:!1,Update:!1,editItems:{}};var E=Object(u.c)({itemsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ITEMS":return Object(m.a)({},e,{items:t.payload});case"DELETE_ITEM":return Object(m.a)({},e,{items:e.items.filter((function(e){return e._id!==t.payload}))});case"EDIT_ITEMS":return Object(m.a)({},e,{editItems:{_id:t.payload._id,product_name:t.payload.product_name,product_type:t.payload.product_type,product_description:t.payload.product_description,purchase_date:t.payload.purchase_date,product_price:t.payload.product_price}});case"GET_TOTAL_PRICE":return Object(m.a)({},e,{totalPrice:t.payload});case"UPDATE":return Object(m.a)({},e,{Update:t.state});case"NEW_ITEM":return Object(m.a)({},e,{newProduct:t.state});default:return Object(m.a)({},e)}}}),f=Object(u.d)(E,Object(u.a)(d.a));console.log(f.getState());var b=f,g=a(15),_=a(4),v=a(5),y=a(7),N=a(6),x=a(8),w=a(2),j=a.n(w),O=(a(69),function(e){function t(){var e;return Object(_.a)(this,t),(e=Object(y.a)(this,Object(N.a)(t).call(this))).saveValue=function(t){e.setState(Object(g.a)({},t.target.id,t.target.value))},e.sendToProducts=function(){if(e.state.redirect)return r.a.createElement(i.a,{to:"/products"})},e.register=function(t){null===e.state.first_name||null===e.state.last_name||null===e.state.email||null===e.state.date_birth||null===e.state.telephone||null===e.state.country||null===e.state.password?(t.preventDefault(),alert("Please fill  all the fields  ")):null!=e.state.first_name&&null!=e.state.last_name&&null!=e.state.email&&null!=e.state.date_birth&&null!=e.state.telephone&&null!=e.state.country&&null!=e.state.password&&(t.preventDefault(),j.a.post("http://127.0.0.1:8085/api/v1/auth/register",{first_name:e.state.first_name,last_name:e.state.last_name,email:e.state.email,date_birth:e.state.date_birth,telephone:e.state.telephone,country:e.state.country,password:e.state.password}).then((function(t){console.log(t),j.a.post("http://127.0.0.1:8085/api/v1/auth/login",{email:e.state.email,password:e.state.password}).then((function(t){localStorage.setItem("jwt",t.data.jwt),localStorage.setItem("name",e.state.first_name),localStorage.setItem("lastName",e.state.last_name),e.setState({redirect:!0})})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)})))},e.state={first_name:null,last_name:null,email:null,date_birth:null,telephone:null,country:null,password:null,redirect:!1},e}return Object(x.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.sendToProducts(),r.a.createElement("div",{className:"login1"},r.a.createElement("div",{className:"box-container1"},r.a.createElement("form",null,r.a.createElement("p",{className:"input-container1"},r.a.createElement("label",{className:"text-field-input1"},"First name"),r.a.createElement("input",{type:"text",className:"text-field1",id:"first_name",onChange:this.saveValue})),r.a.createElement("p",{className:"input-container1"},r.a.createElement("label",{className:"text-field-input1"},"Last name"),r.a.createElement("input",{type:"text",className:"text-field1",id:"last_name",onChange:this.saveValue})),r.a.createElement("p",{className:"input-container1"},r.a.createElement("label",{className:"text-field-input1"},"E-mail"),r.a.createElement("input",{type:"email",className:"text-field1",id:"email",onChange:this.saveValue})),r.a.createElement("p",{className:"input-container1"},r.a.createElement("label",{className:"text-field-input1"},"Date of birth"),r.a.createElement("input",{type:"text",className:"text-field1",id:"date_birth",onChange:this.saveValue})),r.a.createElement("p",{className:"input-container1"},r.a.createElement("label",{className:"text-field-input1"},"Telephone"),r.a.createElement("input",{type:"number",className:"text-field1",id:"telephone",onChange:this.saveValue})),r.a.createElement("p",{className:"input-container1"},r.a.createElement("label",{className:"text-field-input1"},"Country"),r.a.createElement("input",{type:"text",className:"text-field1",id:"country",onChange:this.saveValue})),r.a.createElement("p",{className:"input-container1"},r.a.createElement("label",{className:"text-field-input1"},"Password"),r.a.createElement("input",{type:"password",className:"text-field1",id:"password",onChange:this.saveValue})),r.a.createElement("button",{className:"primary-button1",type:"submit",onClick:this.register},"Register"))),r.a.createElement("div",{className:"additional-info1"},r.a.createElement("p",null,"Or if you don't have an account,",r.a.createElement(o.b,{to:"/"},r.a.createElement("span",{className:"register-login"},"Sign In"))))))}}]),t}(r.a.Component)),P=(a(71),a(72),function(e){function t(){var e;return Object(_.a)(this,t),(e=Object(y.a)(this,Object(N.a)(t).call(this))).saveValue=function(t){e.setState(Object(g.a)({},t.target.id,t.target.value))},e.sendToProducts=function(){if(e.state.redirect)return r.a.createElement(i.a,{to:"/products"})},e.login=function(t){t.preventDefault(),j.a.post("http://127.0.0.1:8085/api/v1/auth/login",{email:e.state.email,password:e.state.password}).then((function(t){localStorage.setItem("jwt",t.data.jwt),localStorage.setItem("name",t.data.first_name),localStorage.setItem("lastName",t.data.last_name),e.setState({redirect:!0})})).catch((function(e){console.log(e)}))},e.state={email:null,password:null,redirect:!1},e}return Object(x.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.sendToProducts(),r.a.createElement("div",{id:"login"},r.a.createElement("div",{className:"box-container"},r.a.createElement("form",null,r.a.createElement("p",{className:"input-container"},r.a.createElement("label",{className:"text-field-input"},"E-mail"),r.a.createElement("input",{type:"text",className:"text-field",id:"email",onChange:this.saveValue})),r.a.createElement("p",{className:"input-container"},r.a.createElement("label",{className:"text-field-input"},"Password"),r.a.createElement("input",{type:"password",className:"text-field",id:"password",onChange:this.saveValue})),r.a.createElement("button",{className:"primary-button",onClick:this.login},"Sign in")),r.a.createElement("div",{className:"additional-info"},r.a.createElement("p",{className:"additional-info1"},"Or if you don't have an account,",r.a.createElement(o.b,{to:"/register"},r.a.createElement("span",null,"Register")))))))}}]),t}(r.a.Component));function C(e){return{type:"GET_ITEMS",payload:e}}var I=function(e){return{type:"DELETE_ITEM",payload:e}};function S(e){return{type:"UPDATE",state:e}}function T(e,t,a,n,l,c){return{type:"EDIT_ITEMS",payload:{_id:e,product_name:t,product_type:a,product_description:n,purchase_date:l,product_price:c}}}a(38);var D=function(e){function t(e){var a;return Object(_.a)(this,t),(a=Object(y.a)(this,Object(N.a)(t).call(this,e))).save=function(e){a.setState(Object(g.a)({},e.target.id,e.target.value))},a.createProduct=function(e){null===a.state.product_name||null===a.state.product_type||null===a.state.product_description||null===a.state.purchase_date||null===a.state.product_price?(e.preventDefault(),alert("Please fill all the fields")):null!=a.state.product_name&&null!=a.state.product_type&&null!=a.state.product_description&&null!=a.state.purchase_date&&null!=a.state.product_price&&(j.a.post("http://localhost:8084/api/v1/items",{product_name:a.state.product_name,product_type:a.state.product_type,product_description:a.state.product_description,purchase_date:a.state.purchase_date,product_price:a.state.product_price},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),b.dispatch(S(!0)))},a.state={newProduct:a.props.newProduct,product_name:""===a.props.product_name,product_type:""===a.props.newProduct,product_description:""===a.props.newProduct,purchase_date:""===a.props.newProduct,product_price:""===a.props.newProduct},a}return Object(x.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"New Product"),r.a.createElement("div",{id:"login2"},r.a.createElement("div",{className:"box-container2"},r.a.createElement("form",{action:""},r.a.createElement("p",{className:"input-container2"},r.a.createElement("label",{className:"text-field-input2"},"Product Name")," ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",className:"text-field2",id:"product_name",onChange:this.save,defaultValue:this.props.product_name})),r.a.createElement("p",{className:"input-container2"},r.a.createElement("label",{className:"text-field-input2"},"Product Type")," ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",className:"text-field2",id:"product_type",onChange:this.save,defaultValue:this.props.product_type})),r.a.createElement("p",{className:"input-container2"},r.a.createElement("label",{className:"text-field-input2"},"Product Description")," ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",className:"text-field2",id:"product_description",onChange:this.save,defaultValue:this.props.product_description})),r.a.createElement("p",{className:"input-container2"},r.a.createElement("label",{className:"text-field-input2"},"Purchase Date")," ",r.a.createElement("br",null),r.a.createElement("input",{type:"date",className:"text-field2",id:"purchase_date",onChange:this.save,defaultValue:this.props.purchase_date})),r.a.createElement("p",{className:"input-container2"},r.a.createElement("label",{className:"text-field-input2"},"Product Price")," ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",className:"text-field2",id:"product_price",onChange:this.save,defaultValue:this.props.product_price})),r.a.createElement(o.b,{to:"/products"},!this.state.newProduct,r.a.createElement("button",{className:"primary-button2",onClick:this.createProduct},"CREATE PRODUCT")))),r.a.createElement("div",{className:"new2"},r.a.createElement(o.b,{to:"/newproduct"},r.a.createElement("p",null,r.a.createElement("i",{className:"fas fa-plus-circle"}))),r.a.createElement("p",null,"You are creating new product"))))}}]),t}(r.a.Component);var k=Object(s.b)((function(e){return{items:e.itemsReducer.items,newProduct:e.itemsReducer.newProduct}}))(D),M=(a(39),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("nav",{className:"nav3"},r.a.createElement("div",{className:"buttons3"},r.a.createElement(o.b,{to:"/products"},r.a.createElement("button",{className:"main-buttons3",id:"products-btn3"},"Products")),r.a.createElement(o.b,{to:"/expenses"},r.a.createElement("button",{className:"main-buttons3",id:"expenses-btn3"},"Expenses"))))))}),V=function(e){function t(e){var a;return Object(_.a)(this,t),(a=Object(y.a)(this,Object(N.a)(t).call(this,e))).state={showAlert:null},a}return Object(x.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=null;return this.props.items&&(e=this.props.items.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e.product_name),r.a.createElement("td",null,e.product_type),r.a.createElement("td",null,e.product_description),r.a.createElement("td",null,e.purchase_date.toString().slice(0,10)),r.a.createElement("td",null,e.product_price),r.a.createElement("td",null))}))),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"table-container"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Product Name"),r.a.createElement("th",null,"Product Type"),r.a.createElement("th",null,"Product Description"),r.a.createElement("th",null,"Purchase Date"),r.a.createElement("th",null,"Product Price"))),r.a.createElement("tbody",null,e))))}}]),t}(r.a.Component);var U=Object(s.b)((function(e){return{items:e.itemsReducer.items}}))(V),F=function(e){function t(){var e;return Object(_.a)(this,t),(e=Object(y.a)(this,Object(N.a)(t).call(this))).showYearly=function(){e.setState({showYearly:!0,showMonhtly:!1,toggle:!0})},e.showMonhtly=function(){e.setState({showYearly:!1,showMonhtly:!0,toggle:!1})},e.searchFilter=function(t){e.setState({filterValue:t.target.value,Update:!0})},e.state={showMonhtly:!1,showYearly:!0,toggle:!0,filterValue:null,Update:!1},e}return Object(x.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){j.a.get("http://localhost:8084/api/v1/items?sort=purchase_date:desc",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){b.dispatch(C(e.data)),console.log("didMount")})).catch((function(e){console.log(e)}))}},{key:"componentDidUpdate",value:function(){if(this.state.Update){var e=this.state.filterValue;if("total"===e)j.a.get("http://localhost:8084/api/v1/items?sort=purchase_date:desc",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){b.dispatch(C(e.data)),console.log("didUpdate")})).catch((function(e){console.log(e)}));else if(4===e.length){var t=new Date("".concat(e,"-01-01 00:00:00.000")).getTime(),a=new Date("".concat(e,"-12-31 23:59:59.000")).getTime();j.a.get("http://localhost:8084/api/v1/items?date_from=".concat(t,"&date_to=").concat(a,"&sort=purchase_date:desc"),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){b.dispatch(C(e.data)),console.log("Update")})).catch((function(e){console.log(e)}))}else if(7===e.length){var n=new Date("".concat(e,"-01 00:00:00.000")).getTime(),l=new Date("".concat(e,"-31 23:59:59.000")).getTime();j.a.get("http://localhost:8084/api/v1/items?date_from=".concat(n,"&date_to=").concat(l,"&sort=purchase_date:desc"),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){b.dispatch(C(e.data)),console.log("Update")})).catch((function(e){console.log(e)}))}this.setState({Update:!1})}}},{key:"render",value:function(){for(var e=0,t=0;t<this.props.items.length;t++)e+=this.props.items[t].product_price;for(var a=(new Date).getFullYear(),n=[],l=2e3;l<=a;l++)n.push(r.a.createElement("option",{key:l,value:l},l));return n.reverse(),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"expenses"},r.a.createElement("div",{id:"expenses-header-one"},r.a.createElement("h1",null,"Expenses")),r.a.createElement("div",{id:"expenses-header-two"},r.a.createElement("button",{className:this.state.toggle?"tab-btn active-tab-btn ":"tab-btn",onClick:this.showYearly},"YEARLY"),r.a.createElement("button",{className:this.state.toggle?"tab-btn":"tab-btn active-tab-btn ",onClick:this.showMonhtly},"MONTHLY"),this.state.showMonhtly?r.a.createElement("p",{id:"select-box-container"},r.a.createElement("label",{htmlFor:"expenses-filter"},"Choose Month "),r.a.createElement("input",{type:"month",className:"select-box",id:"expenses-month-box",onChange:this.searchFilter})):null,this.state.showYearly?r.a.createElement("p",{id:"select-box-container"},r.a.createElement("label",{htmlFor:"expenses-filter"},"Choose Year "),r.a.createElement("select",{name:"expenses-filter",className:"select-box",id:"expenses-select-box",onChange:this.searchFilter},r.a.createElement("option",null,"----"),r.a.createElement("option",{value:"total"},"Total"),n)):null),r.a.createElement(U,null)),r.a.createElement("div",{id:"total-spent"},r.a.createElement("p",null,"Total Spent: ",e," den.")))}}]),t}(r.a.Component);var A=Object(s.b)((function(e){return{items:e.itemsReducer.items}}))(F),R=(a(73),function(e){function t(e){var a;return Object(_.a)(this,t),(a=Object(y.a)(this,Object(N.a)(t).call(this,e))).refilter=function(e){a.setState({Update:!0,align:e.target.value})},a.delete=function(e){a.setState({showModal:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"modal6"},r.a.createElement("h3",null,"Delete Product"),r.a.createElement("p",null,"You are about to delete this product.Are you sure you wish to continue?"),r.a.createElement("div",{className:"alert-btn6"},r.a.createElement("button",{className:"cancel-btn6",onClick:function(){return a.setState({showModal:null})}},"Cancel"),r.a.createElement("button",{className:"delete-btn6",onClick:function(){a.onDeleteClick(e)}},"Delete"))))})},a.onDeleteClick=function(e){j.a.delete("http://localhost:8084/api/v1/items/".concat(e),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(t){console.log(t),b.dispatch(I(e))})).catch((function(e){console.log(e)}))},a.doneEdit=function(e){var t=a.props.items.filter((function(t,a){if(t._id===e)return t}));a.props.editOneItem(t[0]._id,t[0].product_name,t[0].product_type,t[0].product_description,t[0].purchase_date,t[0].product_price)},a.state={showModal:null,item:[],filterOption:null,Update:!1,align:null},a}return Object(x.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){j.a.get("http://localhost:8084/api/v1/items?align=purchase_date:desc",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){b.dispatch(C(e.data))})).catch((function(e){console.log(e)}))}},{key:"componentDidUpdate",value:function(){!0===this.state.Update&&(null===this.state.align?(j.a.get("http://localhost:8084/api/v1/items?align=purchase_date:desc",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){b.dispatch(C(e.data)),b.dispatch(S(!1))})).catch((function(e){console.log(e)})),this.setState({Update:!1})):null!=this.state.align?(j.a.get("http://localhost:8084/api/v1/items?sort=".concat(this.state.align),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){b.dispatch(C(e.data)),b.dispatch(S(!1)),console.log("Update")})).catch((function(e){console.log(e)})),this.setState({Update:!1,align:null})):console.log("Error "))}},{key:"render",value:function(){var e=this,t=null;return this.props.items&&(t=this.props.items.map((function(t){return r.a.createElement("tr",{key:t._id},r.a.createElement("td",null,t.product_name),r.a.createElement("td",null,t.product_type),r.a.createElement("td",null,t.product_description),r.a.createElement("td",null,t.purchase_date.toString().slice(0,10)),r.a.createElement("td",null,t.product_price),r.a.createElement("td",null,r.a.createElement(o.b,{to:"/updateproduct/".concat(t._id)},r.a.createElement("span",{id:"edit",className:"far fa-edit",onClick:function(){e.doneEdit(t._id)}})),r.a.createElement("span",{id:"delete",className:"far fa-trash-alt",onClick:function(){return e.delete(t._id)}}," ")))}))),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main-div5"},r.a.createElement("h3",null,"Products"),r.a.createElement("label",null,"Filter by:",r.a.createElement("select",{name:"purchase-filter",className:"select-box",onChange:this.refilter},r.a.createElement("option",{value:"purchase_date:desc"},"Latest Purchase"),r.a.createElement("option",{value:"product_price:desc"},"Highest Price"),r.a.createElement("option",{value:"product_price:asc"},"Lowest Price"),r.a.createElement("option",{value:"purchase_date:asc"},"First Purchase")))),r.a.createElement("table",{className:"table table-dark"},this.state.showModal,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Product name"),r.a.createElement("th",null,"Product type"),r.a.createElement("th",null,"Product description"),r.a.createElement("th",null,"Purchase date"),r.a.createElement("th",null,"Product price "),r.a.createElement("th",null),r.a.createElement("th",null))),r.a.createElement("tbody",null,t)),r.a.createElement(o.b,{to:"/newproduct"},r.a.createElement("button",{className:"fixed-button5",onClick:this.toggle},"New Product")))}}]),t}(r.a.Component));var Y=Object(s.b)((function(e){return{items:e.itemsReducer.items}}),(function(e){return{getItems:function(t){return e(C(t))},editOneItem:function(t){return e(T(t))}}}))(R),L=function(e){function t(e){var a;return Object(_.a)(this,t),(a=Object(y.a)(this,Object(N.a)(t).call(this,e))).save=function(e){a.setState(Object(g.a)({},e.target.id,e.target.value))},a.edit=function(e){e.preventDefault(),j.a.put("http://localhost:8084/api/v1/items/".concat(a.props.match.params.id),{product_name:a.state.product_name,product_type:a.state.product_type,product_description:a.state.product_description,purchase_date:a.state.purchase_date,product_price:a.state.product_price},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},console.log(a.props),a.state={editItems:a.props.editItems,_id:a.props._id,product_name:a.props.product_name,product_type:a.props.product_type,product_description:a.props.product_description,purchase_date:a.props.purchase_date,product_price:a.props.product_price},a}return Object(x.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Edit this product "),r.a.createElement("div",{id:"login2"},r.a.createElement("div",{className:"box-container2"},r.a.createElement("form",null,r.a.createElement("p",{className:"input-container2"},r.a.createElement("label",{className:"text-field-input2"},"Product Name")," ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",className:"text-field2",id:"product_name",onChange:this.save,defaultValue:this.state.editItems})),r.a.createElement("p",{className:"input-container2"},r.a.createElement("label",{className:"text-field-input2"},"Product Type")," ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",className:"text-field2",id:"product_type",onChange:this.save,defaultValue:this.state.editItems})),r.a.createElement("p",{className:"input-container2"},r.a.createElement("label",{className:"text-field-input2"},"Product Description")," ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",className:"text-field2",id:"product_description",onChange:this.save,defaultValue:this.state.editItems})),r.a.createElement("p",{className:"input-container2"},r.a.createElement("label",{className:"text-field-input2"},"Purchase Date")," ",r.a.createElement("br",null),r.a.createElement("input",{type:"date",className:"text-field2",id:"purchase_date",onChange:this.save,defaultValue:this.state.editItems})),r.a.createElement("p",{className:"input-container2"},r.a.createElement("label",{className:"text-field-input2"},"Product Price")," ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",className:"text-field2",id:"product_price",onChange:this.save,defaultValue:this.state.editItems})),r.a.createElement("button",{className:"primary-button long",id:"create-btn",onClick:this.edit},"EDIT PRODUCT"))),r.a.createElement("div",{className:"new2"},r.a.createElement("p",null,r.a.createElement("i",{className:"fas fa-plus-circle"})),r.a.createElement("p",null,"You are updating product"))))}}]),t}(r.a.Component);var B=Object(s.b)((function(e){return{items:e.items,editItems:e.editItems}}),(function(e){return{Update:function(t){return e(S(t))},newItem:function(t){return e({type:"NEW_ITEM",state:t})},editOneItem:function(t){return e(T(t))}}}))(L),z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"WELCOME"),r.a.createElement("h3",null,"EXPENSE CALCULATOR"),r.a.createElement("h4",null,"See where your money goes"),r.a.createElement("h4",null,"Simple App to start Saving More"),r.a.createElement("button",null,"Register"),r.a.createElement("button",null,"Log in"))},G=document.getElementById("root");l.a.render(r.a.createElement(s.a,{store:b},r.a.createElement((function(){return r.a.createElement(o.a,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/home",component:z}),r.a.createElement(i.b,{exact:!0,path:"/",component:P}),r.a.createElement(i.b,{exact:!0,path:"/Register",component:O}),r.a.createElement(i.b,{exact:!0,path:"/updateproduct/:id",component:B}),r.a.createElement(i.b,{exact:!0,path:"/newproduct",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,null),r.a.createElement(k,null))}}),r.a.createElement(i.b,{exact:!0,path:"/expenses",render:function(){return r.a.createElement(A,{header:M,products:U})}}),r.a.createElement(i.b,{exact:!0,path:"/products",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,null),r.a.createElement(Y,null))}})))}),null)),G)}},[[43,1,2]]]);
//# sourceMappingURL=main.9808818f.chunk.js.map