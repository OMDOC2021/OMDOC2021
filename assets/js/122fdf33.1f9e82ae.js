(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[819],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return m},kt:function(){return g}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),u=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=u(t.components);return a.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},o=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),o=u(n),g=r,N=o["".concat(d,".").concat(g)]||o[g]||k[g]||l;return n?a.createElement(N,i(i({ref:e},m),{},{components:n})):a.createElement(N,i({ref:e},m))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=o;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},8076:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return m},default:function(){return o}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i=["components"],p={sidebar_position:2,title:"\u767b\u5f55/\u6ce8\u518c"},d=void 0,u={unversionedId:"api/api-2-login",id:"api/api-2-login",isDocsHomePage:!1,title:"\u767b\u5f55/\u6ce8\u518c",description:"\u8bf7\u6c42\u65b9\u5f0f",source:"@site/docs/api/api-2-login.md",sourceDirName:"api",slug:"/api/api-2-login",permalink:"/docs/api/api-2-login",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u767b\u5f55/\u6ce8\u518c"},sidebar:"tutorialSidebar",previous:{title:"\u901a\u7528\u8bf4\u660e",permalink:"/docs/intro"},next:{title:"\u4e0a\u4f20\u5934\u50cf",permalink:"/docs/api/api-3-upload-avatar"}},m=[{value:"\u8bf7\u6c42\u65b9\u5f0f",id:"\u8bf7\u6c42\u65b9\u5f0f",children:[]},{value:"Request header",id:"request-header",children:[]},{value:"\u8bf7\u6c42URL",id:"\u8bf7\u6c42url",children:[]},{value:"\u8bf7\u6c42\u5b57\u6bb5",id:"\u8bf7\u6c42\u5b57\u6bb5",children:[]},{value:"\u8bf7\u6c42\u83b7\u53d6\u9a8c\u8bc1\u7801\u7684URL",id:"\u8bf7\u6c42\u83b7\u53d6\u9a8c\u8bc1\u7801\u7684url",children:[]},{value:"\u8bf7\u6c42\u5b57\u6bb5",id:"\u8bf7\u6c42\u5b57\u6bb5-1",children:[]},{value:"\u767b\u5f55",id:"\u767b\u5f55",children:[]},{value:"\u8bf7\u6c42\u5b57\u6bb5",id:"\u8bf7\u6c42\u5b57\u6bb5-2",children:[]},{value:"\u8fd4\u56de\u5185\u5bb9",id:"\u8fd4\u56de\u5185\u5bb9",children:[]},{value:"data\u8fd4\u56de\u5185\u5bb9",id:"data\u8fd4\u56de\u5185\u5bb9",children:[]},{value:"\u7528\u6237\u540d\u5bc6\u7801\u767b\u5f55\u793a\u4f8b\uff1a",id:"\u7528\u6237\u540d\u5bc6\u7801\u767b\u5f55\u793a\u4f8b\uff1a",children:[]},{value:"\u8fd4\u56de\u793a\u4f8b\uff1a",id:"\u8fd4\u56de\u793a\u4f8b\uff1a",children:[]},{value:"\u9a8c\u8bc1\u7801\u8bf7\u6c42\u793a\u4f8b\uff1a",id:"\u9a8c\u8bc1\u7801\u8bf7\u6c42\u793a\u4f8b\uff1a",children:[]},{value:"\u8fd4\u56de\u793a\u4f8b\uff1a",id:"\u8fd4\u56de\u793a\u4f8b\uff1a-1",children:[]},{value:"\u624b\u673a\u9a8c\u8bc1\u7801\u767b\u5f55\u793a\u4f8b",id:"\u624b\u673a\u9a8c\u8bc1\u7801\u767b\u5f55\u793a\u4f8b",children:[]},{value:"\u8fd4\u56de\u793a\u4f8b\uff1a",id:"\u8fd4\u56de\u793a\u4f8b\uff1a-2",children:[]}],k={toc:m};function o(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u8bf7\u6c42\u65b9\u5f0f"},"\u8bf7\u6c42\u65b9\u5f0f"),(0,l.kt)("p",null,"POST\u8bf7\u6c42\uff0cContent-Type\u4e3aapplication/json"),(0,l.kt)("h2",{id:"request-header"},"Request header"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u957f\u5ea6"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cid"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"app\u83b7\u53d6\u7684cid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"equType"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"Android/Ios")))),(0,l.kt)("p",null,"\u6ce8\uff1a\u7528\u6237\u4e0d\u5b58\u5728\uff0c\u5728\u8fdb\u884c\u6821\u9a8c\u9a8c\u8bc1\u7801\u6b63\u786e\u540e\u4f1a\u81ea\u52a8\u6ce8\u518c\u3002"),(0,l.kt)("h1",{id:"1\u7528\u6237\u5bc6\u7801\u767b\u5f55"},"1.\u7528\u6237\u5bc6\u7801\u767b\u5f55"),(0,l.kt)("h2",{id:"\u8bf7\u6c42url"},"\u8bf7\u6c42URL"),(0,l.kt)("p",null,"/user-service/login"),(0,l.kt)("h2",{id:"\u8bf7\u6c42\u5b57\u6bb5"},"\u8bf7\u6c42\u5b57\u6bb5"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u957f\u5ea6"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u5426\u4e3a\u7a7a"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"64"),(0,l.kt)("td",{parentName:"tr",align:null},'"0123456789"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u90ae\u7bb1/\u6216\u8005\u624b\u673a\u53f7(\u624b\u673a\u53f7\u5fc5\u987b\u662f0\u5f00\u5934\uff0c\u4e1410\u4f4d)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"12-20"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u767b\u5f55\u5bc6\u7801")))),(0,l.kt)("h1",{id:"2\u77ed\u4fe1\u767b\u5f55"},"2.\u77ed\u4fe1\u767b\u5f55"),(0,l.kt)("h2",{id:"\u8bf7\u6c42\u83b7\u53d6\u9a8c\u8bc1\u7801\u7684url"},"\u8bf7\u6c42\u83b7\u53d6\u9a8c\u8bc1\u7801\u7684URL"),(0,l.kt)("p",null,"/user-service/sms/code"),(0,l.kt)("h2",{id:"\u8bf7\u6c42\u5b57\u6bb5-1"},"\u8bf7\u6c42\u5b57\u6bb5"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u957f\u5ea6"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u5426\u4e3a\u7a7a"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"64"),(0,l.kt)("td",{parentName:"tr",align:null},'"0123456789"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u90ae\u7bb1/\u6216\u8005\u624b\u673a\u53f7(\u624b\u673a\u53f7\u5fc5\u987b\u662f0\u5f00\u5934\uff0c\u4e1410\u4f4d)")))),(0,l.kt)("h2",{id:"\u767b\u5f55"},"\u767b\u5f55"),(0,l.kt)("p",null,"/user-service/sms/login"),(0,l.kt)("h2",{id:"\u8bf7\u6c42\u5b57\u6bb5-2"},"\u8bf7\u6c42\u5b57\u6bb5"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u957f\u5ea6"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u5426\u4e3a\u7a7a"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"64"),(0,l.kt)("td",{parentName:"tr",align:null},'"0123456789"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u624b\u673a\u53f7(\u624b\u673a\u53f7\u5fc5\u987b\u662f0\u5f00\u5934\uff0c\u4e1410\u4f4d)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"smsCode"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9a8c\u8bc1\u7801")))),(0,l.kt)("h2",{id:"\u8fd4\u56de\u5185\u5bb9"},"\u8fd4\u56de\u5185\u5bb9"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"200"'),(0,l.kt)("td",{parentName:"tr",align:null},"200\u6807\u793a\u8bf7\u6c42\u6210\u529f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"msg"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"ok"'),(0,l.kt)("td",{parentName:"tr",align:null},"msg")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"--")))),(0,l.kt)("h2",{id:"data\u8fd4\u56de\u5185\u5bb9"},"data\u8fd4\u56de\u5185\u5bb9"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"token"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"39:0e0e9cf6-c9b8-4736-8834-8a831c6c1eb0"'),(0,l.kt)("td",{parentName:"tr",align:null},"token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"needPassword"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u8bbe\u7f6e\u767b\u5f55\u5bc6\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"verify"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"UNDO"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u72b6\u6001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"expireTime"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},'"1678734859487"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u65f6\u95f4\u6233")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"idType"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"1245648978477"'),(0,l.kt)("td",{parentName:"tr",align:null},'\u7528\u6237\u6807\u793a"ID_CARD"\uff08\u672c\u5730\u4eba\uff09/"PASSPORT"\uff08\u5916\u56fd\u4eba\uff09')))),(0,l.kt)("h2",{id:"\u7528\u6237\u540d\u5bc6\u7801\u767b\u5f55\u793a\u4f8b\uff1a"},"\u7528\u6237\u540d\u5bc6\u7801\u767b\u5f55\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "username":"0123456789",\n    "password":"OMqwer10091!@#"\n\n}\n')),(0,l.kt)("h2",{id:"\u8fd4\u56de\u793a\u4f8b\uff1a"},"\u8fd4\u56de\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{ \n    "code": 200,\n    "msg": "Login Successfully",\n    "data": {\n      "token": "1:10f44a88-dd70-4701-8d66-9025a59f2c92",\n      "needPassword": false,\n      "verify": "PASS",\n      "expireTime": 1624689891387,\n      "idType": "ID_CARD"\n     }\n}\n')),(0,l.kt)("h2",{id:"\u9a8c\u8bc1\u7801\u8bf7\u6c42\u793a\u4f8b\uff1a"},"\u9a8c\u8bc1\u7801\u8bf7\u6c42\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "mobile":"0123456789"\n}\n')),(0,l.kt)("h2",{id:"\u8fd4\u56de\u793a\u4f8b\uff1a-1"},"\u8fd4\u56de\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{ \n    "code":\xa0200,\n    \xa0"msg":\xa0"SUCCESS"\n}\n')),(0,l.kt)("h2",{id:"\u624b\u673a\u9a8c\u8bc1\u7801\u767b\u5f55\u793a\u4f8b"},"\u624b\u673a\u9a8c\u8bc1\u7801\u767b\u5f55\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "mobile":"0123456789",\n    "code":"717324"\n}\n')),(0,l.kt)("h2",{id:"\u8fd4\u56de\u793a\u4f8b\uff1a-2"},"\u8fd4\u56de\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{ \n    "code": 200,\n    "msg": "Login Successfully",\n    "data": {\n       "token": "1:10f44a88-dd70-4701-8d66-9025a59f2c92",\n       "needPassword": false,\n       "verify": "PASS",\n       "expireTime": 1624689891387,\n       "idType": "ID_CARD"\n    }\n}\n')))}o.isMDXComponent=!0}}]);