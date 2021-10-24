(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(44)},29:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),i=a.n(l),c=(a(29),a(8)),s=a(9),o=a(11),u=a(10),d=a(12),m=a(1),p=(a(30),[{name:"tables",path:"/",exact:!0},{name:"menu",path:"/menu"},{name:"summary",path:"/summary"}]),E=function(){var e=p.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(m.c,{to:e.path,exact:!!e.exact&&e.exact},e.name))});return r.a.createElement("nav",null,r.a.createElement("ul",null,e))},b=a(23),h=a(4),f=a(2),v=function(e){return r.a.createElement("div",null,r.a.createElement("div",null,"Are you sure want to delete ",r.a.createElement("strong",null,e.item.name," "),"?"),r.a.createElement(m.b,{to:"/menu"},r.a.createElement("button",null,"No")),r.a.createElement(m.b,{to:"/menu"},r.a.createElement("button",{onClick:function(){return e.delete(e.id)}},"Yes")))},y=(a(36),function(e){return r.a.createElement("div",{className:"table ".concat(e.ordersExists?"taken":"free")},r.a.createElement("h1",null,"Table ".concat(e.id)),r.a.createElement("div",{className:"picture"}),r.a.createElement(m.b,{to:"/order"},r.a.createElement("button",{onClick:function(){return e.setIdTable(e.id)},disabled:e.ordersExists||!e.orderPossible},"Take order")),r.a.createElement(m.b,{to:"/order/list"},r.a.createElement("button",{disabled:!e.ordersExists,onClick:function(){return e.setIdTable(e.id)}},"Show order")),r.a.createElement(m.b,{to:"/"},r.a.createElement("button",{disabled:!e.ordersExists,onClick:function(){return e.completeOrders(e.id)}},"Finish order")))}),O=(a(37),function(e){var t=function(e,t){return e.findIndex(function(e){return e.idTable===t})>-1};return r.a.createElement("div",{className:"tables"},function(){for(var a=[],n=1;n<=10;n++)a.push(r.a.createElement(y,{key:n,id:n,setIdTable:e.setIdTable,ordersExists:t(e.activeOrders,n),completeOrders:e.completeOrders,orderPossible:e.orderPossible}));return a}())}),T=(a(38),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={orders:[],selectedDish:a.props.items[0],typedQuantity:1,orderFinished:!1},a.showMenu=function(){return r.a.createElement("select",{onChange:a.handleSelectChange},a.props.items.map(function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)}))},a.showOrderList=function(){return r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Action")),a.state.orders.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.quantity),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(e){return a.cancelOrder(e,t)}},"Cancel")))}))))},a.cancelOrder=function(e,t){e.preventDefault();var n=Object(h.a)(a.state.orders);n.splice(t,1),a.setState({orders:n})},a.handleSelectChange=function(e){var t=parseInt(e.target.value);a.setState({selectedDish:a.props.items.filter(function(e){return e.id===t})[0]})},a.handleInputChange=function(e){var t=parseInt(e.target.value);a.setState({typedQuantity:t})},a.addDishToOrder=function(e){e.preventDefault();var t={id:a.state.selectedDish.id,name:a.state.selectedDish.name,price:a.state.selectedDish.price,quantity:a.state.typedQuantity,idTable:a.props.idTable},n=a.state.orders,r=n.findIndex(function(e){return e.id===t.id});-1!==r?n[r].quantity+=t.quantity:n.push(t),a.setState({orders:n})},a.handleSubmit=function(e){e.preventDefault(),a.props.addOrders(a.state.orders),a.setState({orderFinished:!0})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.orderFinished?r.a.createElement(f.b,{to:"/"}):r.a.createElement("div",{className:"orderForm"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Dish:",this.showMenu()),r.a.createElement("label",null,"Quantity:",r.a.createElement("input",{type:"number",value:"".concat(this.state.typedQuantity),min:"1",step:"1",onChange:this.handleInputChange})),r.a.createElement("button",{onClick:this.addDishToOrder},"Add"),r.a.createElement("br",null),r.a.createElement(m.b,{to:"/"},r.a.createElement("button",null,"Back")),0===this.state.orders.length?null:r.a.createElement("button",{type:"submit"},"Done")),r.a.createElement("h1",null,"Order:"),0===this.state.orders.length?null:this.showOrderList())}}]),t}(r.a.Component)),I=(a(39),function(e){return r.a.createElement("div",{className:"orderList"},r.a.createElement("h1",null,"Order for Table ",e.idTable),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Quantity")),e.items.filter(function(t){return t.idTable===e.idTable}).map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.quantity))}))),r.a.createElement(m.b,{to:"/"},r.a.createElement("button",null,"Back")))}),j=function(e){return r.a.createElement("li",null,r.a.createElement("span",null,e.name),r.a.createElement("span",null,"".concat(e.price," $")),r.a.createElement(m.b,{to:"/menu/edit"},r.a.createElement("button",{onClick:function(){return e.setIdToEdit(e.id)}},"Edit")),r.a.createElement(m.b,{to:"/menu/delete"},r.a.createElement("button",{onClick:function(){return e.setIdToDelete(e.id)}},"Delete")))},g=(a(40),function(e){var t=e.items.map(function(t){return r.a.createElement(j,{key:t.id,id:t.id,name:t.name,price:t.price,setIdToEdit:e.setIdToEdit,setIdToDelete:e.setIdToDelete})});return r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"listItems"},t),0===t.length?r.a.createElement("p",null,"You do not have any menu's items. Taking order is not possible."):null,r.a.createElement(m.b,{to:"/menu/add"},r.a.createElement("button",null,"Add")),r.a.createElement(f.a,{when:0===t.length,message:function(){return e.setOrderPossible()}}))}),k=a(22),C=(a(41),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"add"===a.props.type?"":a.props.item.name,price:"add"===a.props.type?"":a.props.item.price.toString(),valid:!1,errors:{name:!0,price:!0}},a.messages={name_incorrect:"cannot be empty",price_incorrect:"cannot be empty"},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(k.a)({},t,n))},a.validateForm=function(){var e=!1,t=!1,n=!1;return a.state.name.length>0&&(e=!0),a.state.price.length>0&&(t=!0),e&&t&&(n=!0),{name:e,price:t,correct:n}},a.handleSubmit=function(e){e.preventDefault();var t=a.validateForm();if(t.correct){var n=a.state,r=n.name,l=n.price;a.newItem={id:null,name:r,price:l},"add"===a.props.type?a.props.add(a.newItem):a.props.edit(a.newItem),a.setState({valid:!0})}else a.setState({errors:{name:t.name,price:t.price}})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.valid?r.a.createElement(f.b,{to:"/menu"}):r.a.createElement("div",{className:"addEditForm"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Name",r.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleInputChange}),!this.state.errors.name&&r.a.createElement("span",{className:"errors"},this.messages.name_incorrect)),r.a.createElement("label",null,"Price [$]",r.a.createElement("input",{type:"number",min:"0.01",step:"0.01",name:"price",value:this.state.price,onChange:this.handleInputChange}),!this.state.errors.price&&r.a.createElement("span",{className:"errors"},this.messages.price_incorrect)),r.a.createElement(m.b,{to:"/menu"},r.a.createElement("button",null,"Back")),r.a.createElement("button",{type:"submit"},"add"===this.props.type?"Add":"Edit")))}}]),t}(r.a.Component)),S=(a(42),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={sortBy:"quantity"},a.handleClick=function(){var e=a.state.sortBy;a.setState({sortBy:"quantity"===e?"income":"quantity"})},a.prepareData=function(e){var t=[],n=[],r=[];return a.props.items.forEach(function(e){t.includes(e.id)||t.push(e.id)}),t.forEach(function(e){n.push(a.props.items.filter(function(t){return t.id===e}))}),n.forEach(function(e){var t=0;e.length>1?e.forEach(function(e){t+=e.quantity}):t=e[0].quantity,r.push({name:e[0].name,totalQuantity:t,income:e[0].price*t})}),"quantity"===e?r=r.sort(function(e,t){return t.totalQuantity-e.totalQuantity}):"income"===e&&(r=r.sort(function(e,t){return t.income-e.income})),r},a.showIncomes=function(){var e=a.prepareData(a.state.sortBy);return r.a.createElement("div",null,r.a.createElement("h1",null,"Summary"),r.a.createElement("div",{className:"selection"},r.a.createElement("p",null,"sorted by:"),r.a.createElement("button",{onClick:a.handleClick,disabled:"quantity"===a.state.sortBy},"quantity"),r.a.createElement("button",{onClick:a.handleClick,disabled:"income"===a.state.sortBy},"income")),r.a.createElement("div",{className:"summary"},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Income [$]")),e.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.name," "),r.a.createElement("td",null,e.totalQuantity),r.a.createElement("td",null,e.income))})))),r.a.createElement(m.b,{to:"/"},r.a.createElement("button",null,"Back")))},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.showIncomes())}}]),t}(r.a.Component)),D=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={items:[{id:0,name:"Tomato soup",price:12},{id:1,name:"Pork schnitzel",price:16},{id:2,name:"Fish and chips",price:12.5}],activeOrders:[],completedOrders:[],idToEdit:null,idToDelete:null,idTable:null,nextAvailableId:3,orderPossible:!0},a.setIdToEdit=function(e){a.setState({idToEdit:e})},a.setIdToDelete=function(e){a.setState({idToDelete:e})},a.setIdTable=function(e){a.setState({idTable:e})},a.deleteItem=function(e){var t=Object(h.a)(a.state.items),n=t.filter(function(t){return t.id===e}),r=Object(b.a)(n,1)[0];t.splice(t.indexOf(r),1),a.setState({idToDelete:null,items:t})},a.addItem=function(e){var t=Object(h.a)(a.state.items),n=a.state.nextAvailableId;e.id=n,t.push(e),a.setState({items:t,nextAvailableId:n+1})},a.editItem=function(e){var t=Object(h.a)(a.state.items),n=Object(h.a)(t.filter(function(e){return e.id===a.state.idToEdit}))[0],r=t.indexOf(n);t[r]={id:a.state.idToEdit,name:e.name,price:e.price};var l=Object(h.a)(a.state.activeOrders);l.forEach(function(t,n,r){if(t.id===a.state.idToEdit)return r[n]={id:a.state.idToEdit,name:e.name,price:e.price,quantity:t.quantity,idTable:t.idTable}}),a.setState({items:t,activeOrders:l})},a.addOrders=function(e){var t=Object(h.a)(a.state.activeOrders),n=[].concat(Object(h.a)(t),Object(h.a)(e));a.setState({activeOrders:n})},a.completeOrders=function(e){var t=Object(h.a)(a.state.activeOrders),n=Object(h.a)(a.state.completedOrders),r=t.filter(function(t){return t.idTable===e});t.forEach(function(t,a,n){t.idTable===e&&n.splice(a,1)}),a.setState({activeOrders:t,completedOrders:[].concat(Object(h.a)(n),Object(h.a)(r))})},a.setOrderPossible=function(){a.setState(function(e){return{orderPossible:!e.orderPossible}})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.c,{path:"/",exact:!0,render:function(){return r.a.createElement(O,{activeOrders:e.state.activeOrders,setIdTable:e.setIdTable,completeOrders:e.completeOrders,orderPossible:e.state.orderPossible})}}),r.a.createElement(f.c,{path:"/order",exact:!0,render:function(){return r.a.createElement(T,{idTable:e.state.idTable,items:e.state.items,addOrders:e.addOrders})}}),r.a.createElement(f.c,{path:"/order/list",render:function(){return r.a.createElement(I,{idTable:e.state.idTable,items:e.state.activeOrders})}}),r.a.createElement(f.c,{path:"/menu",exact:!0,render:function(){return r.a.createElement(g,{items:e.state.items,setIdToEdit:e.setIdToEdit,setIdToDelete:e.setIdToDelete,setOrderPossible:e.setOrderPossible})}}),r.a.createElement(f.c,{path:"/menu/delete",render:function(){return r.a.createElement(v,{id:e.state.idToDelete,item:Object(h.a)(Object(h.a)(e.state.items).filter(function(t){return t.id===e.state.idToDelete}))[0],delete:e.deleteItem})}}),r.a.createElement(f.c,{path:"/menu/add",render:function(){return r.a.createElement(C,{type:"add",add:e.addItem})}}),r.a.createElement(f.c,{path:"/menu/edit",render:function(){return r.a.createElement(C,{type:"edit",item:Object(h.a)(Object(h.a)(e.state.items).filter(function(t){return t.id===e.state.idToEdit}))[0],edit:e.editItem})}}),r.a.createElement(f.c,{path:"/summary",render:function(){return r.a.createElement(S,{items:e.state.completedOrders})}}))}}]),t}(r.a.Component),w=(a(43),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement("p",null,"Waitress Assistant")),r.a.createElement("main",null,r.a.createElement("div",{className:"navigation"},r.a.createElement(E,null)),r.a.createElement("div",{className:"panel"},r.a.createElement(D,null))),r.a.createElement("footer",null,r.a.createElement("p",{dangerouslySetInnerHTML:{__html:"&copy; Pawe\u0142 Wo\u017aniak"}}))))}}]),t}(n.Component));i.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.bbb15f51.chunk.js.map