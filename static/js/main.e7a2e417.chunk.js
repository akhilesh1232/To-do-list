(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{21:function(t,e,n){},22:function(t,e,n){},23:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n(2),s=n.n(a),c=n(5),d=n.n(c),r=(n(21),n(13)),u=n(8),o=n(9),l=n(3),h=n(15),j=n(14),m=(n(22),n(23),n(10)),b=n(11);var p=function(t){var e=t.items.map((function(e){return Object(i.jsx)("div",{className:"List",children:Object(i.jsxs)("p",{children:[Object(i.jsx)("input",{type:"text",id:e.key,value:e.text,onChange:function(n){t.setUpdate(n.target.value,e.key)}}),Object(i.jsx)("span",{children:Object(i.jsx)(m.a,{className:"faicons",icon:"trash",onClick:function(){return t.deleteItem(e.key)}})})]})},e.key)}));return Object(i.jsx)("div",{children:Object(i.jsx)(b.a,{duration:250,easing:"ease-in-out",children:e})})},f=n(4),v=n(12);f.b.add(v.a);var x=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(t){var i;return Object(u.a)(this,n),(i=e.call(this,t)).state={items:[],currentitem:{text:"",key:""}},i.handelinput=i.handelinput.bind(Object(l.a)(i)),i.additem=i.additem.bind(Object(l.a)(i)),i.deleteItem=i.deleteItem.bind(Object(l.a)(i)),i.setUpdate=i.setUpdate.bind(Object(l.a)(i)),i}return Object(o.a)(n,[{key:"handelinput",value:function(t){this.setState({currentitem:{text:t.target.value,key:Date.now()}})}},{key:"additem",value:function(){var t=this.state.currentitem;if(""!==t.text){var e=[].concat(Object(r.a)(this.state.items),[t]);this.setState({items:e,currentitem:{text:"",key:""}})}}},{key:"deleteItem",value:function(t){var e=this.state.items.filter((function(e){return e.key!==t}));this.setState({items:e})}},{key:"setUpdate",value:function(t,e){var n=this.state.items;n.map((function(n){n.key===e&&(n.text=t)})),this.setState({items:n})}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("header",{children:Object(i.jsxs)("div",{id:"to-do-form",children:[Object(i.jsx)("input",{type:"text",placeholder:"Add an item",value:this.state.currentitem.text,onChange:this.handelinput}),Object(i.jsx)("button",{onClick:this.additem,children:"Add"})]})}),Object(i.jsx)(p,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate})]})}}]),n}(s.a.Component),O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),i(t),a(t),s(t),c(t)}))};d.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root")),O()}},[[29,1,2]]]);
//# sourceMappingURL=main.e7a2e417.chunk.js.map