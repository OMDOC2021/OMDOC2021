"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[8683],{3905:function(t,n,e){e.d(n,{Zo:function(){return d},kt:function(){return N}});var a=e(7294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var u=a.createContext({}),m=function(t){var n=a.useContext(u),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},d=function(t){var n=m(t.components);return a.createElement(u.Provider,{value:n},t.children)},o={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),k=m(e),N=r,g=k["".concat(u,".").concat(N)]||k[N]||o[N]||l;return e?a.createElement(g,i(i({ref:n},d),{},{components:e})):a.createElement(g,i({ref:n},d))}));function N(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=k;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=e[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}k.displayName="MDXCreateElement"},7437:function(t,n,e){e.r(n),e.d(n,{contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return d}});var a=e(7462),r=e(3366),l=(e(7294),e(3905)),i=["components"],p={sidebar_position:4,title:"\u786e\u8ba4\u652f\u4ed8"},u=void 0,m={unversionedId:"api/utility/common-pay",id:"api/utility/common-pay",isDocsHomePage:!1,title:"\u786e\u8ba4\u652f\u4ed8",description:"\u8bf7\u6c42\u65b9\u5f0f",source:"@site/docs/api/utility/common-pay.md",sourceDirName:"api/utility",slug:"/api/utility/common-pay",permalink:"/docs/api/utility/common-pay",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u786e\u8ba4\u652f\u4ed8"},sidebar:"tutorialSidebar",previous:{title:"\u8bdd\u8d39",permalink:"/docs/api/utility/mobile-utility"},next:{title:"\u8ba4\u8bc1",permalink:"/docs/api/verify/api-19-verify"}},d=[{value:"\u8bf7\u6c42\u65b9\u5f0f",id:"\u8bf7\u6c42\u65b9\u5f0f",children:[]},{value:"\u8bf7\u6c42\u5185\u5bb9",id:"\u8bf7\u6c42\u5185\u5bb9",children:[]},{value:"\u8bf7\u6c42\u793a\u4f8b",id:"\u8bf7\u6c42\u793a\u4f8b",children:[]},{value:"\u8fd4\u56de\u5185\u5bb9",id:"\u8fd4\u56de\u5185\u5bb9",children:[]},{value:"\u751f\u6d3b\u7f34\u8d39\u7c7b\u522b\u8bf4\u660e",id:"\u751f\u6d3b\u7f34\u8d39\u7c7b\u522b\u8bf4\u660e",children:[{value:"content \u5185\u5bb9\u5c55\u793a \u6c34\u7535\u8d39",id:"content-\u5185\u5bb9\u5c55\u793a-\u6c34\u7535\u8d39",children:[]},{value:"content \u5185\u5bb9\u5c55\u793a \u8bdd\u8d39",id:"content-\u5185\u5bb9\u5c55\u793a-\u8bdd\u8d39",children:[]},{value:"content \u5185\u5bb9\u5c55\u793a \u7f51\u8d39",id:"content-\u5185\u5bb9\u5c55\u793a-\u7f51\u8d39",children:[]}]},{value:"\u8fd4\u56de\u793a\u4f8b",id:"\u8fd4\u56de\u793a\u4f8b",children:[]}],o={toc:d};function k(t){var n=t.components,e=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},o,e,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u8bf7\u6c42\u65b9\u5f0f"},"\u8bf7\u6c42\u65b9\u5f0f"),(0,l.kt)("p",null,"POST\u8bf7\u6c42"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"/user-service/utility/pay\n")),(0,l.kt)("h2",{id:"\u8bf7\u6c42\u5185\u5bb9"},"\u8bf7\u6c42\u5185\u5bb9"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u957f\u5ea6"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u5426\u4e3a\u7a7a"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"utilityNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"19\u4f4d"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9884\u4e0b\u5355\u5355\u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"payType"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u652f\u4ed8\u65b9\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tradePassword"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"123456"'),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8d44\u91d1\u5bc6\u7801")))),(0,l.kt)("h2",{id:"\u8bf7\u6c42\u793a\u4f8b"},"\u8bf7\u6c42\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "utilityNumber":"1433649501930913792",\n    "tradePassword":"123456",\n    "payType":"ONE MONEY"\n}\n')),(0,l.kt)("h2",{id:"\u8fd4\u56de\u5185\u5bb9"},"\u8fd4\u56de\u5185\u5bb9"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"200"'),(0,l.kt)("td",{parentName:"tr",align:null},"200\u6807\u793a\u8bf7\u6c42\u6210\u529f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"msg"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"ok"'),(0,l.kt)("td",{parentName:"tr",align:null},"msg")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"---")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"depositAmount"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"10.00"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f34\u8d39\u91d1\u989d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"totalAmount"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"30.00"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u603b\u91d1\u989d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"orderNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"1433682794466377728"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u5355\u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"carrier"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"ASI","'),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd0\u8425\u5546\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fee"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"20.00"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u624b\u7eed\u8d39")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"utilityType"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"UTILITY_WATER_ELECTRIC"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u751f\u6d3b\u7f34\u8d39\u7c7b\u522b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"ONE MONEY"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u652f\u4ed8\u65b9\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"DOING"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u72b6\u6001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"content"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"---")))),(0,l.kt)("h2",{id:"\u751f\u6d3b\u7f34\u8d39\u7c7b\u522b\u8bf4\u660e"},"\u751f\u6d3b\u7f34\u8d39\u7c7b\u522b\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UTILITY_WATER_ELECTRIC"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6c34\u7535\u8d39")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UTILITY_MOBILE"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bdd\u8d39")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UTILITY_NET"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f51\u8d39")))),(0,l.kt)("h3",{id:"content-\u5185\u5bb9\u5c55\u793a-\u6c34\u7535\u8d39"},"content \u5185\u5bb9\u5c55\u793a \u6c34\u7535\u8d39"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"customerId"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"meterNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"Meter Number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amount"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f34\u8d39\u91d1\u989d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"carrier"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd0\u8425\u5546")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"icon"),(0,l.kt)("td",{parentName:"tr",align:null},"\u56fe\u6807")))),(0,l.kt)("h3",{id:"content-\u5185\u5bb9\u5c55\u793a-\u8bdd\u8d39"},"content \u5185\u5bb9\u5c55\u793a \u8bdd\u8d39"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"phone"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5145\u503c\u624b\u673a\u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"carrier"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd0\u8425\u5546")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amount"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f34\u8d39\u91d1\u989d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"icon"),(0,l.kt)("td",{parentName:"tr",align:null},"\u56fe\u6807")))),(0,l.kt)("h3",{id:"content-\u5185\u5bb9\u5c55\u793a-\u7f51\u8d39"},"content \u5185\u5bb9\u5c55\u793a \u7f51\u8d39"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subscriberNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8ba2\u9605\u53f7\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"carrier"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd0\u8425\u5546")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amount"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f34\u8d39\u91d1\u989d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"icon"),(0,l.kt)("td",{parentName:"tr",align:null},"\u56fe\u6807")))),(0,l.kt)("h2",{id:"\u8fd4\u56de\u793a\u4f8b"},"\u8fd4\u56de\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "msg": "ok",\n  "code": 200,\n  "data": {\n    "depositAmount": "10.00",\n    "totalAmount": "30.00",\n    "orderNumber": "1436896935591149568",\n    "createTime": "2021.09.12 10:38:20",\n    "fee": "20.00",\n    "utilityType": "UTILITY_WATER_ELECTRIC",\n    "type": "ONE MONEY",\n    "content": {\n      "customerId": "123456789",\n      "meterNumber": "12341234",\n      "amount": "10.00",\n      "carrier": "Metropolitan Electric",\n    },\n    "status": "DOING"\n  }\n}\n')))}k.isMDXComponent=!0}}]);