(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{38:function(e,t,a){},42:function(e,t){},43:function(e,t,a){e.exports=a(76)},52:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(22),l=a.n(n),r=a(0),c=a.n(r),u=a(17),o=a(8),i=a(9),s=a(10),m=a(12),d=a(11),p=a(13),E=(a(52),a(5)),h=a.n(E),f=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).saveValue=function(t){e.setState(Object(o.a)({},t.target.id,t.target.value))},e.register=function(t){null===e.state.first_name||null===e.state.last_name||null===e.state.email||null===e.state.date_birth||null===e.state.telephone||null===e.state.country||null===e.state.password?(t.preventDefault(),alert("Please fill  all the fields  ")):null!=e.state.first_name&&null!=e.state.last_name&&null!=e.state.email&&null!=e.state.date_birth&&null!=e.state.telephone&&null!=e.state.country&&null!=e.state.password&&(t.preventDefault(),h.a.post("http://127.0.0.1:8085/api/v1/auth/register",{first_name:e.state.first_name,last_name:e.state.last_name,email:e.state.email,date_birth:e.state.date_birth,telephone:e.state.telephone,country:e.state.country,password:e.state.password}).then((function(t){console.log(t),h.a.post("http://127.0.0.1:8085/api/v1/auth/login",{email:e.state.email,password:e.state.password}).then((function(t){localStorage.setItem("jwt",t.data.jwt),localStorage.setItem("name",e.state.first_name),localStorage.setItem("lastName",e.state.last_name)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)})))},e.state={first_name:null,last_name:null,email:null,date_birth:null,telephone:null,country:null,password:null},e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"login1"},c.a.createElement("div",{className:"box-container1"},c.a.createElement("form",null,c.a.createElement("p",{className:"input-container1"},c.a.createElement("label",{className:"text-field-input1"},"First name"),c.a.createElement("input",{type:"text",className:"text-field1",id:"first_name",onChange:this.saveValue})),c.a.createElement("p",{className:"input-container1"},c.a.createElement("label",{className:"text-field-input1"},"Last name"),c.a.createElement("input",{type:"text",className:"text-field1",id:"last_name",onChange:this.saveValue})),c.a.createElement("p",{className:"input-container1"},c.a.createElement("label",{className:"text-field-input1"},"E-mail"),c.a.createElement("input",{type:"email",className:"text-field1",id:"email",onChange:this.saveValue})),c.a.createElement("p",{className:"input-container1"},c.a.createElement("label",{className:"text-field-input1"},"Date of birth"),c.a.createElement("input",{type:"text",className:"text-field1",id:"date_birth",onChange:this.saveValue})),c.a.createElement("p",{className:"input-container1"},c.a.createElement("label",{className:"text-field-input1"},"Telephone"),c.a.createElement("input",{type:"number",className:"text-field1",id:"telephone",onChange:this.saveValue})),c.a.createElement("p",{className:"input-container1"},c.a.createElement("label",{className:"text-field-input1"},"Country"),c.a.createElement("input",{type:"text",className:"text-field1",id:"country",onChange:this.saveValue})),c.a.createElement("p",{className:"input-container1"},c.a.createElement("label",{className:"text-field-input1"},"Password"),c.a.createElement("input",{type:"password",className:"text-field1",id:"password",onChange:this.saveValue})),c.a.createElement("button",{className:"primary-button1",type:"submit",onClick:this.register},"Register"))),c.a.createElement("div",{className:"additional-info1"},c.a.createElement("p",null,"Or if you don't have an account,",c.a.createElement("button",{onClick:this.props.registerDone,className:"register-login"},"Sign In")))))}}]),t}(c.a.Component),b=(a(70),a(71),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).saveValue=function(t){e.setState(Object(o.a)({},t.target.id,t.target.value))},e.login=function(t){t.preventDefault(),h.a.post("http://127.0.0.1:8085/api/v1/auth/login",{email:e.state.email,password:e.state.password}).then((function(e){localStorage.setItem("jwt",e.data.jwt),localStorage.setItem("name",e.data.first_name),localStorage.setItem("lastName",e.data.last_name)})).catch((function(e){console.log(e)}))},e.state={email:null,password:null},e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{id:"login"},c.a.createElement("div",{className:"box-container"},c.a.createElement("form",null,c.a.createElement("p",{className:"input-container"},c.a.createElement("label",{className:"text-field-input"},"E-mail"),c.a.createElement("input",{type:"text",className:"text-field",id:"email",onChange:this.saveValue})),c.a.createElement("p",{className:"input-container"},c.a.createElement("label",{className:"text-field-input"},"Password"),c.a.createElement("input",{type:"password",className:"text-field",id:"password",onChange:this.saveValue})),c.a.createElement("button",{className:"primary-button",onClick:this.login},"Sign in")),c.a.createElement("div",{className:"additional-info"},c.a.createElement("p",null,"Or if you don't have an account,",c.a.createElement("button",{onClick:this.props.registerDone},"Register"))))))}}]),t}(c.a.Component)),_=a(20),g=a(40),N=a.n(g),y=a(19),v={items:[],newProduct:!1,Update:!1,editItems:{}};var x=Object(_.c)({itemsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ITEMS":return Object(y.a)({},e,{items:t.payload});case"DELETE_ITEM":return Object(y.a)({},e,{items:e.items.filter((function(e){return e._id!==t.payload}))});case"EDIT_ITEMS":return Object(y.a)({},e,{editItems:{_id:t.payload._id,product_name:t.payload.product_name,product_type:t.payload.product_type,product_description:t.payload.product_description,purchase_date:t.payload.purchase_date,product_price:t.payload.product_price}});case"UPDATE":return Object(y.a)({},e,{Update:t.state});case"NEW_ITEM":return Object(y.a)({},e,{newProduct:t.state});default:return Object(y.a)({},e)}}}),C=Object(_.d)(x,Object(_.a)(N.a));console.log(C.getState());var w=C;function P(e){return{type:"GET_ITEMS",payload:e}}var j=function(e){return{type:"DELETE_ITEM",payload:e}};function O(e){return{type:"UPDATE",state:e}}function k(e,t,a,n,l,r){return{type:"EDIT_ITEMS",payload:{_id:e,product_name:t,product_type:a,product_description:n,purchase_date:l,product_price:r}}}a(38);var I=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).save=function(e){a.setState(Object(o.a)({},e.target.id,e.target.value))},a.createProduct=function(e){null===a.state.product_name||null===a.state.product_type||null===a.state.product_description||null===a.state.purchase_date||null===a.state.product_price?(e.preventDefault(),alert("You missed some fileds")):null!=a.state.product_name&&null!=a.state.product_type&&null!=a.state.product_description&&null!=a.state.purchase_date&&null!=a.state.product_price&&(h.a.post("http://localhost:8084/api/v1/items",{product_name:a.state.product_name,product_type:a.state.product_type,product_description:a.state.product_description,purchase_date:a.state.purchase_date,product_price:a.state.product_price},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),w.dispatch(O(!0)))},a.state={newProduct:a.props.newProduct,product_name:""===a.props.product_name,product_type:""===a.props.newProduct,product_description:""===a.props.newProduct,purchase_date:""===a.props.newProduct,product_price:""===a.props.newProduct},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,"New Product"),c.a.createElement("div",{id:"login2"},c.a.createElement("div",{className:"box-container2"},c.a.createElement("form",{action:""},c.a.createElement("p",{className:"input-container2"},c.a.createElement("label",{className:"text-field-input2"},"Product Name")," ",c.a.createElement("br",null),c.a.createElement("input",{type:"text",className:"text-field2",id:"product_name",onChange:this.save,defaultValue:this.state.product_name})),c.a.createElement("p",{className:"input-container2"},c.a.createElement("label",{className:"text-field-input2"},"Product Type")," ",c.a.createElement("br",null),c.a.createElement("input",{type:"text",className:"text-field2",id:"product_type",onChange:this.save,defaultValue:this.state.newProduct})),c.a.createElement("p",{className:"input-container2"},c.a.createElement("label",{className:"text-field-input2"},"Product Description")," ",c.a.createElement("br",null),c.a.createElement("input",{type:"text",className:"text-field2",id:"product_description",onChange:this.save,defaultValue:this.state.newProduct})),c.a.createElement("p",{className:"input-container2"},c.a.createElement("label",{className:"text-field-input2"},"Purchase Date")," ",c.a.createElement("br",null),c.a.createElement("input",{type:"date",className:"text-field2",id:"purchase_date",onChange:this.save,defaultValue:this.state.newProduct})),c.a.createElement("p",{className:"input-container2"},c.a.createElement("label",{className:"text-field-input2"},"Product Price")," ",c.a.createElement("br",null),c.a.createElement("input",{type:"text",className:"text-field2",id:"product_price",onChange:this.save,defaultValue:this.state.newProduct})),!this.state.newProduct,c.a.createElement("button",{className:"primary-button2",onClick:this.createProduct},"CREATE PRODUCT"))),c.a.createElement("div",{className:"new2"},c.a.createElement("p",null,c.a.createElement("i",{className:"fas fa-plus-circle"})),c.a.createElement("p",null,"You are creating new product"))))}}]),t}(c.a.Component);var D=Object(u.b)((function(e){return{items:e.itemsReducer.items,newProduct:e.itemsReducer.newProduct}}))(I),T=(a(72),a(16)),S=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",null,c.a.createElement("nav",{className:"nav3"},c.a.createElement("div",{className:"buttons3"},c.a.createElement(T.b,{to:"/products"},c.a.createElement("button",{className:"main-buttons3",id:"products-btn3"},"Products")),c.a.createElement(T.b,{to:"/expneses"},c.a.createElement("button",{className:"main-buttons3",id:"expenses-btn3"},"Expenses"))))))},V=(a(74),function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,"Expenses"),c.a.createElement("div",{className:"expense4"},c.a.createElement("button",{className:"monthly-btn4"},"Monthly"),c.a.createElement("button",{className:"yearly-btn4"},"Yearly"),c.a.createElement("label",{id:"filter4"},"Choose Month:",c.a.createElement("select",{id:"filter4"},c.a.createElement("option",null,"January"),c.a.createElement("option",null,"February"),c.a.createElement("option",null,"March"),c.a.createElement("option",null,"April"),c.a.createElement("option",null,"May"),c.a.createElement("option",null,"June"),c.a.createElement("option",null,"July"),c.a.createElement("option",null,"August"),c.a.createElement("option",null,"September"),c.a.createElement("option",null,"Octomber"),c.a.createElement("option",null,"November"),c.a.createElement("option",null,"Decembar")))),c.a.createElement("table",{className:"data4"},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Product name"),c.a.createElement("th",null,"Product type"),c.a.createElement("th",null,"Product description"),c.a.createElement("th",null,"Purchase date"),c.a.createElement("th",null,"Product price "),c.a.createElement("th",null),c.a.createElement("th",null)),c.a.createElement("tr",null,c.a.createElement("td",null,"Coca-cola"),c.a.createElement("td",null,"Drink"),c.a.createElement("td",null,"Carbonated soft drink"),c.a.createElement("td",null,"19.08.2018"),c.a.createElement("td",null,"75"),c.a.createElement("td",null)),c.a.createElement("tr",null,c.a.createElement("td",null,"Coca-cola"),c.a.createElement("td",null,"Drink"),c.a.createElement("td",null,"Carbonated soft drink"),c.a.createElement("td",null,"19.08.2018"),c.a.createElement("td",null,"75"),c.a.createElement("td",null)),c.a.createElement("tr",null,c.a.createElement("td",null,"Coca-cola"),c.a.createElement("td",null,"Drink"),c.a.createElement("td",null,"Carbonated soft drink"),c.a.createElement("td",null,"19.08.2018"),c.a.createElement("td",null,"75"),c.a.createElement("td",null)),c.a.createElement("tr",null,c.a.createElement("td",null,"Coca-cola"),c.a.createElement("td",null,"Drink"),c.a.createElement("td",null,"Carbonated soft drink"),c.a.createElement("td",null,"19.08.2018"),c.a.createElement("td",null,"75"),c.a.createElement("td",null)),c.a.createElement("tr",null,c.a.createElement("td",null,"Coca-cola"),c.a.createElement("td",null,"Drink"),c.a.createElement("td",null,"Carbonated soft drink"),c.a.createElement("td",null,"19.08.2018"),c.a.createElement("td",null,"75"),c.a.createElement("td",null)),c.a.createElement("tr",null,c.a.createElement("td",null,"Coca-cola"),c.a.createElement("td",null,"Drink"),c.a.createElement("td",null,"Carbonated soft drink"),c.a.createElement("td",null,"19.08.2018"),c.a.createElement("td",null,"75"),c.a.createElement("td",null)),c.a.createElement("tr",null,c.a.createElement("td",null,"Coca-cola"),c.a.createElement("td",null,"Drink"),c.a.createElement("td",null,"Carbonated soft drink"),c.a.createElement("td",null,"19.08.2018"),c.a.createElement("td",null,"75"),c.a.createElement("td",null)),c.a.createElement("tr",null,c.a.createElement("td",null,"Coca-cola"),c.a.createElement("td",null,"Drink"),c.a.createElement("td",null,"Carbonated soft drink"),c.a.createElement("td",null,"19.08.2018"),c.a.createElement("td",null,"75"),c.a.createElement("td",null)),c.a.createElement("tr",null,c.a.createElement("td",null,"Coca-cola"),c.a.createElement("td",null,"Drink"),c.a.createElement("td",null,"Carbonated soft drink"),c.a.createElement("td",null,"19.08.2018"),c.a.createElement("td",null,"75"),c.a.createElement("td",null)),c.a.createElement("tr",null,c.a.createElement("td",null,"Coca-cola"),c.a.createElement("td",null,"Drink"),c.a.createElement("td",null,"Carbonated soft drink"),c.a.createElement("td",null,"19.08.2018"),c.a.createElement("td",null,"75"),c.a.createElement("td",null)),c.a.createElement("tr",null,c.a.createElement("td",null,"Coca-cola"),c.a.createElement("td",null,"Drink"),c.a.createElement("td",null,"Carbonated soft drink"),c.a.createElement("td",null,"19.08.2018"),c.a.createElement("td",null,"75"),c.a.createElement("td",null)))),c.a.createElement("div",{className:"total-spent4"},c.a.createElement("p",null,"Total spent:1205 den.")))}),M=(a(75),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).onDeleteClick=function(e){h.a.delete("http://localhost:8084/api/v1/items/".concat(e),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(t){console.log(t),w.dispatch(j(e))})).catch((function(e){console.log(e)}))},a.doneEdit=function(e){var t=a.props.items.filter((function(t,a){if(t._id===e)return t}));a.props.editOneItem(t[0]._id,t[0].product_name,t[0].product_type,t[0].product_description,t[0].purchase_date,t[0].product_price)},a.state={showModal:null,item:[],alertShow:!1},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){h.a.get("http://localhost:8084/api/v1/items",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){w.dispatch(P(e.data))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=null;return this.props.items&&(t=this.props.items.map((function(t){return c.a.createElement("tr",{key:t._id},c.a.createElement("td",null,t.product_name),c.a.createElement("td",null,t.product_type),c.a.createElement("td",null,t.product_description),c.a.createElement("td",null,t.purchase_date),c.a.createElement("td",null,t.product_price),c.a.createElement("td",null,c.a.createElement(T.b,{to:"/updateproduct/".concat(t._id)},c.a.createElement("span",{id:"edit",className:"btn btn-light",onClick:function(){e.doneEdit(t._id)}}," Edit ")),c.a.createElement(T.b,{to:"/deleteproduct"},c.a.createElement("button",{id:"delete",className:"btn btn-danger",onClick:e.onDeleteClick(e._id)}," Delete "))))}))),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"main-div5"},c.a.createElement("h3",null,"Products"),c.a.createElement("label",null,"Filter by:",c.a.createElement("select",{id:"filter5"},c.a.createElement("option",null,"Year"),c.a.createElement("option",null,"Highest Price"),c.a.createElement("option",null,"Lowest Price"),c.a.createElement("option",null,"Latest Purchases")))),c.a.createElement("table",{className:"table table-dark"},this.state.showModal,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Product name"),c.a.createElement("th",null,"Product type"),c.a.createElement("th",null,"Product description"),c.a.createElement("th",null,"Purchase date"),c.a.createElement("th",null,"Product price "),c.a.createElement("th",null),c.a.createElement("th",null))),c.a.createElement("tbody",null,t)),c.a.createElement(T.b,{to:"/newproduct"},c.a.createElement("button",{className:"fixed-button5",onClick:this.toggle},"New Product")))}}]),t}(c.a.Component));var F=Object(u.b)((function(e){return{items:e.itemsReducer.items}}),(function(e){return{getItems:function(t){return e(P(t))},editOneItem:function(t){return e(k(t))}}}))(M),R=a(42),A=a.n(R),U=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).save=function(e){a.setState(Object(o.a)({},e.target.id,e.target.value))},a.edit=function(e){e.preventDefault(),h.a.put("http://localhost:8084/api/v1/items/".concat(a.props.match.params.id),{product_name:a.state.product_name,product_type:a.state.product_type,product_description:a.state.product_description,purchase_date:a.state.purchase_date,product_price:a.state.product_price},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},console.log(a.props),a.state={editItems:a.props.editItems,_id:a.props._id,product_name:a.props.product_name,product_type:a.props.product_type,product_description:a.props.product_description,purchase_date:a.props.purchase_date,product_price:a.props.product_price},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,"Edit this product "),c.a.createElement("div",{id:"login2"},c.a.createElement("div",{className:"box-container2"},c.a.createElement("form",null,c.a.createElement("p",{className:"input-container2"},c.a.createElement("label",{className:"text-field-input2"},"Product Name")," ",c.a.createElement("br",null),c.a.createElement("input",{type:"text",className:"text-field2",id:"product_name",onChange:this.save,defaultValue:this.props.editItems})),c.a.createElement("p",{className:"input-container2"},c.a.createElement("label",{className:"text-field-input2"},"Product Type")," ",c.a.createElement("br",null),c.a.createElement("input",{type:"text",className:"text-field2",id:"product_type",onChange:this.save,defaultValue:this.props.editItems})),c.a.createElement("p",{className:"input-container2"},c.a.createElement("label",{className:"text-field-input2"},"Product Description")," ",c.a.createElement("br",null),c.a.createElement("input",{type:"text",className:"text-field2",id:"product_description",onChange:this.save,defaultValue:this.props.editItems})),c.a.createElement("p",{className:"input-container2"},c.a.createElement("label",{className:"text-field-input2"},"Purchase Date")," ",c.a.createElement("br",null),c.a.createElement("input",{type:"date",className:"text-field2",id:"purchase_date",onChange:this.save,defaultValue:this.props.editItems})),c.a.createElement("p",{className:"input-container2"},c.a.createElement("label",{className:"text-field-input2"},"Product Price")," ",c.a.createElement("br",null),c.a.createElement("input",{type:"text",className:"text-field2",id:"product_price",onChange:this.save,defaultValue:this.props.editItems})),c.a.createElement("button",{className:"primary-button long",id:"create-btn",onClick:this.edit},"EDIT PRODUCT"))),c.a.createElement("div",{className:"new2"},c.a.createElement("p",null,c.a.createElement("i",{className:"fas fa-plus-circle"})),c.a.createElement("p",null,"You are updating product"))))}}]),t}(c.a.Component);var B=Object(u.b)((function(e){return{items:e.items,editItems:e.editItems}}),(function(e){return{Update:function(t){return e(O(t))},newItem:function(t){return e({type:"NEW_ITEM",state:t})},editOneItem:function(t){return e(k(t))}}}))(U),J=a(18),L=document.getElementById("root");l.a.render(c.a.createElement(u.a,{store:w},c.a.createElement((function(){return c.a.createElement(T.a,null,c.a.createElement(J.c,null,c.a.createElement(J.a,{exact:!0,path:"/",component:b}),c.a.createElement(J.a,{exact:!0,path:"/Register",component:f}),c.a.createElement(J.a,{exact:!0,path:"/updateproduct/:id",component:B})," */}",c.a.createElement(J.a,{exact:!0,path:"/newproduct",render:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(S,null),c.a.createElement(D,null))}}),c.a.createElement(J.a,{exact:!0,path:"/expenses",render:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(S,null),c.a.createElement(V,null))}}),c.a.createElement(J.a,{exact:!0,path:"/products",render:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(S,null),c.a.createElement(F,null))}}),c.a.createElement(J.a,{exact:!0,path:"/deleteproduct/",component:A.a})))}),null)),L)}},[[43,1,2]]]);
//# sourceMappingURL=main.baef166d.chunk.js.map