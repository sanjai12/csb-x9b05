(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{184:function(e,t,a){},276:function(e,t,a){"use strict";a.r(t);var c=a(0),l=a(18),s=a.n(l),r=(a(184),a(67)),n=a(83),o=a(155);const i={details:{}};var d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;return"PLACE_DETAILS"===t.type?{...e,details:t.payload}:e},j=Object(n.b)({DetailReducer:d});var h=function(){return{store:Object(n.c)(j,Object(n.a)(o.a))}},p=(a(190),a(282)),b=a(174),u=a(176),O=a(156),x=a.n(O);const m={getPlaceDetails:function(e,t){return a=>{const{country:c,state:l,place:s}=e;x.a.get("https://api.zippopotam.us/".concat(c,"/").concat(l,"/").concat(s)).then((e=>{console.log(e.data),a({type:"PLACE_DETAILS",payload:e.data}),t(!0)})).catch((e=>{u.b.error("No Records Found!")}))}}};var v=a(279),y=a(287),g=a(280),w=a(281),C=a(286),f=a(76),S=a(5);var P=Object(r.b)((e=>({placeDetails:e.DetailReducer.details})),null)((e=>{const t=e.placeDetails;return Object(S.jsxs)("div",{children:[Object(S.jsx)(C.a,{onBack:e.backHandler,title:"Back"}),t.places&&t.places.length?Object(S.jsxs)(v.a,{style:{height:400,width:"100%"},center:[t.places[0].latitude,t.places[0].longitude],zoom:8,scrollWheelZoom:!1,children:[Object(S.jsx)(y.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t.places.map((e=>Object(S.jsx)(g.a,{position:[e.latitude,e.longitude],children:Object(S.jsx)(w.a,{children:Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{children:"Postal Code : ".concat(e["post code"])}),Object(S.jsx)("div",{children:"State : ".concat(t.state)}),Object(S.jsx)("div",{children:"Country : ".concat(t.country)}),Object(S.jsx)("div",{children:"place : ".concat(e["place name"])}),Object(S.jsx)("div",{children:"latitude : ".concat(e.latitude)}),Object(S.jsx)("div",{children:"longitude : ".concat(e.longitude)})]})})})))]}):Object(S.jsx)(f.a,{})]})})),D=a(284),L=a(283),A=a(285),k=a(122);const{Option:I}=D.a,M=[{label:"US",value:"us"},{label:"CA",value:"ca"}],H=[{label:"Georgia",value:"GA"},{label:"Massachusetts",value:"MA"},{label:"Newyork",value:"NY"},{label:"Losangeles",value:"LA"},{label:"Test",value:"TS"}],E=["Belmont","Smyrna","test"];var F=e=>Object(S.jsx)(L.a,{title:"Search the Map Details",bordered:!1,children:Object(S.jsxs)(A.a,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:t=>{e.searchMap(t)},children:[Object(S.jsx)(A.a.Item,{label:"Country",name:"country",rules:[{required:!0,message:"Please select country!"}],children:Object(S.jsx)(D.a,{showSearch:!0,allowClear:!0,style:{width:200},placeholder:"Select a country",optionFilterProp:"children",filterOption:(e,t)=>t.children.toLowerCase().indexOf(e.toLowerCase())>=0,children:M.map(((e,t)=>Object(S.jsx)(I,{value:e.value,children:e.label},t)))})}),Object(S.jsx)(A.a.Item,{label:"State",name:"state",rules:[{required:!0,message:"Please select state!"}],children:Object(S.jsx)(D.a,{showSearch:!0,allowClear:!0,style:{width:200},placeholder:"Select a state",optionFilterProp:"children",filterOption:(e,t)=>t.children.toLowerCase().indexOf(e.toLowerCase())>=0,children:H.map(((e,t)=>Object(S.jsx)(I,{value:e.value,children:e.label},t)))})}),Object(S.jsx)(A.a.Item,{label:"Place",name:"place",rules:[{required:!0,message:"Please select place!"}],children:Object(S.jsx)(D.a,{showSearch:!0,allowClear:!0,style:{width:200},placeholder:"Select a place",optionFilterProp:"children",filterOption:(e,t)=>t.children.toLowerCase().indexOf(e.toLowerCase())>=0,children:E.map(((e,t)=>Object(S.jsx)(I,{value:e,children:e},t)))})}),Object(S.jsx)(A.a.Item,{wrapperCol:{offset:8,span:16},children:Object(S.jsx)(k.a,{type:"primary",htmlType:"submit",children:"Search Places"})})]})});const{Header:N,Content:T}=p.a;var B=Object(r.b)(null,(e=>({getPlaceDetails:(t,a)=>e(m.getPlaceDetails(t,a))})))((e=>{const[t,a]=Object(c.useState)(["Home"]),[l,s]=Object(c.useState)(!1),r=()=>{s(!1),a(["Home"])},n=e=>{"Home"===e.target.id&&r()};return Object(S.jsxs)(p.a,{className:"layout",children:[Object(S.jsx)(N,{children:Object(S.jsx)("center",{children:Object(S.jsx)("h2",{style:{color:"#fff"},children:"Map Details App"})})}),Object(S.jsxs)(T,{style:{padding:"0 50px"},children:[Object(S.jsx)(b.a,{style:{margin:"16px 0"},children:t.map((e=>Object(S.jsx)(b.a.Item,{style:{cursor:"pointer"},id:e,onClick:n,children:e})))}),Object(S.jsx)("div",{className:"site-layout-content",children:l?Object(S.jsx)(P,{backHandler:r}):Object(S.jsx)(F,{searchMap:c=>{e.getPlaceDetails(c,(e=>{if(e){s(!0);const e=[...t,"Place Details"];a(e)}}))}})})]})]})}));const{store:q}=h();function z(){return Object(S.jsx)(r.a,{store:q,children:Object(S.jsx)(B,{})})}const R=document.getElementById("root");s.a.render(Object(S.jsx)(c.StrictMode,{children:Object(S.jsx)(z,{})}),R)}},[[276,1,2]]]);
//# sourceMappingURL=main.90b45fdd.chunk.js.map