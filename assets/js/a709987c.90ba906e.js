(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[897],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return m},kt:function(){return N}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),d=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(u.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=d(a),N=r,g=k["".concat(u,".").concat(N)]||k[N]||o[N]||l;return a?n.createElement(g,i(i({ref:e},m),{},{components:a})):n.createElement(g,i({ref:e},m))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2737:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return m},default:function(){return k}});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),i=["components"],p={sidebar_position:17,title:"\u67e5\u8be2\u8ba2\u5355\u72b6\u6001"},u=void 0,d={unversionedId:"api/api-17-pay-query",id:"api/api-17-pay-query",isDocsHomePage:!1,title:"\u67e5\u8be2\u8ba2\u5355\u72b6\u6001",description:"\u8bf7\u6c42\u65b9\u5f0f",source:"@site/docs/api/api-17-pay-query.md",sourceDirName:"api",slug:"/api/api-17-pay-query",permalink:"/docs/api/api-17-pay-query",version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17,title:"\u67e5\u8be2\u8ba2\u5355\u72b6\u6001"},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa\u88ab\u626b\u8ba2\u5355",permalink:"/docs/api/api-16-be-swept-pay"},next:{title:"\u786e\u8ba4\u4ed8\u6b3e",permalink:"/docs/api/api-18-pay-confirm"}},m=[{value:"\u8bf7\u6c42\u65b9\u5f0f",id:"\u8bf7\u6c42\u65b9\u5f0f",children:[]},{value:"Request header",id:"request-header",children:[]},{value:"\u8bf7\u6c42URL",id:"\u8bf7\u6c42url",children:[]},{value:"\u8bf7\u6c42\u5b57\u6bb5",id:"\u8bf7\u6c42\u5b57\u6bb5",children:[]},{value:"\u8fd4\u56de\u5185\u5bb9",id:"\u8fd4\u56de\u5185\u5bb9",children:[]},{value:"data\u8fd4\u56de\u5185\u5bb9",id:"data\u8fd4\u56de\u5185\u5bb9",children:[]},{value:"status\u72b6\u6001\u8bf4\u660e",id:"status\u72b6\u6001\u8bf4\u660e",children:[]},{value:"\u8bf7\u6c42\u793a\u4f8b\uff1a",id:"\u8bf7\u6c42\u793a\u4f8b\uff1a",children:[]},{value:"\u8fd4\u56de\u793a\u4f8b\uff1a",id:"\u8fd4\u56de\u793a\u4f8b\uff1a",children:[]}],o={toc:m};function k(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u8bf7\u6c42\u65b9\u5f0f"},"\u8bf7\u6c42\u65b9\u5f0f"),(0,l.kt)("p",null,"GET\u8bf7\u6c42"),(0,l.kt)("h2",{id:"request-header"},"Request header"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u957f\u5ea6"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"X-token"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u767b\u5f55\u540e\u7684token")))),(0,l.kt)("h2",{id:"\u8bf7\u6c42url"},"\u8bf7\u6c42URL"),(0,l.kt)("p",null,"/user-service/pay/query"),(0,l.kt)("h2",{id:"\u8bf7\u6c42\u5b57\u6bb5"},"\u8bf7\u6c42\u5b57\u6bb5"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u957f\u5ea6"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u5426\u4e3a\u7a7a"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e")))),(0,l.kt)("h2",{id:"\u8fd4\u56de\u5185\u5bb9"},"\u8fd4\u56de\u5185\u5bb9"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"200"'),(0,l.kt)("td",{parentName:"tr",align:null},"200\u8868\u793a\u8bf7\u6c42\u6210\u529f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"msg"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"SUCCESS"'),(0,l.kt)("td",{parentName:"tr",align:null},"msg")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"--")))),(0,l.kt)("h2",{id:"data\u8fd4\u56de\u5185\u5bb9"},"data\u8fd4\u56de\u5185\u5bb9"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8ba2\u5355\u72b6\u6001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amount"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"\u91d1\u989d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"payer"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ed8\u6b3e\u4eba")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"payee"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6536\u6b3e\u4eba")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"remark"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5907\u6ce8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createTime"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"finishedTime"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b8c\u6210\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"payNo"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8ba2\u5355\u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"expire"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fc7\u671f")))),(0,l.kt)("h2",{id:"status\u72b6\u6001\u8bf4\u660e"},"status\u72b6\u6001\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INIT"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521d\u59cb\u5316")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SCAN"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5df2\u626b\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PAYING"),(0,l.kt)("td",{parentName:"tr",align:null},"\u652f\u4ed8\u4e2d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SUCCESS"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6210\u529f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FAIL"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5931\u8d25")))),(0,l.kt)("h2",{id:"\u8bf7\u6c42\u793a\u4f8b\uff1a"},"\u8bf7\u6c42\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"")),(0,l.kt)("h2",{id:"\u8fd4\u56de\u793a\u4f8b\uff1a"},"\u8fd4\u56de\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n\xa0\xa0\xa0\xa0"code":\xa0200,\n\xa0\xa0\xa0\xa0"data":\xa0{\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"status":\xa0"INIT",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"amount":\xa0"",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"payer":\xa0"zhangxiaobai",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"payee":\xa0"",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"remark":\xa0"",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"createTime":\xa0"2021.06.01\xa008:34:07",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"finishedTime":\xa0"2021.06.01\xa008:34:07",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"payNo":\xa0"1399539726691729408",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"expire":\xa0false\n\xa0\xa0\xa0\xa0},\n\xa0\xa0\xa0\xa0"msg":\xa0"SUCCESS"\n}\n')))}k.isMDXComponent=!0}}]);