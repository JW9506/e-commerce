!function(e){function r(r){for(var n,a,o=r[0],m=r[1],l=r[2],s=0,u=[];s<o.length;s++)a=o[s],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&u.push(i[a][0]),i[a]=0;for(n in m)Object.prototype.hasOwnProperty.call(m,n)&&(e[n]=m[n]);for(p&&p(r);u.length;)u.shift()();return c.push.apply(c,l||[]),t()}function t(){for(var e,r=0;r<c.length;r++){for(var t=c[r],n=!0,o=1;o<t.length;o++){var m=t[o];0!==i[m]&&(n=!1)}n&&(c.splice(r--,1),e=a(a.s=t[0]))}return e}var n={},i={0:0},c=[];function a(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=n,a.d=function(e,r,t){a.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,r){if(1&r&&(e=a(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)a.d(t,n,function(r){return e[r]}.bind(null,n));return t},a.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(r,"a",r),r},a.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},a.p="/e-commerce";var o=window.webpackJsonp=window.webpackJsonp||[],m=o.push.bind(o);o.push=r,o=o.slice();for(var l=0;l<o.length;l++)r(o[l]);var p=m;c.push([88,1]),t()}({0:function(e,r,t){e.exports=t(14)(0)},10:function(e,r,t){e.exports={PUBLIC_URL:"/e-commerce",TITLE:"E-Commerce!"}},14:function(e,r){e.exports=react_3a6bbc2407},57:function(e,r,t){e.exports=t(14)(20)},59:function(e,r,t){e.exports=t(14)(27)},7:function(e,r,t){e.exports=t(14)(24)},82:function(e,r,t){},83:function(e,r,t){},84:function(e,r,t){},85:function(e,r,t){},86:function(e,r,t){},87:function(e,r,t){},88:function(e,r,t){"use strict";t.r(r);var n=t(0),i=t.n(n),c=t(57),a=t.n(c),o=(t(17),t(7)),m=(t(51),t(55),t(35),t(36),t(80),t(81),t(82),function(e){var r=e.name,t=e.price,n=e.imageUrl;return i.a.createElement("div",{className:"collection-item"},i.a.createElement("div",{className:"image",style:{backgroundImage:"url("+n+")"}}),i.a.createElement("div",{className:"collection-footer"},i.a.createElement("span",{className:"name"},r),i.a.createElement("span",{className:"price"},t)))});t(83);function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var p=function(e){var r=e.title,t=e.items;return i.a.createElement("div",{className:"collection-preview"},i.a.createElement("h1",{className:"title"},r),i.a.createElement("div",{className:"preview"},t.filter((function(e,r){return r<4})).map((function(e){return i.a.createElement(m,l({key:e.id},e))}))))},s=[{id:1,title:"AAA",routeName:"AAA",items:[{id:1,name:"001",imageUrl:"/e-commerce/imgs/411ff29ba0.jpg",price:25},{id:2,name:"002",imageUrl:"/e-commerce/imgs/6cc8d678b8.jpg",price:18},{id:3,name:"003",imageUrl:"/e-commerce/imgs/a97eee0a4e.jpg",price:35},{id:4,name:"004",imageUrl:"/e-commerce/imgs/6c9ff219b7.jpg",price:25},{id:5,name:"005",imageUrl:"/e-commerce/imgs/7d251333a6.jpg",price:18},{id:6,name:"006",imageUrl:"/e-commerce/imgs/3909f8ae13.jpg",price:14},{id:7,name:"007",imageUrl:"/e-commerce/imgs/d5814dc364.jpg",price:18},{id:8,name:"008",imageUrl:"/e-commerce/imgs/5704411332.jpg",price:14},{id:9,name:"009",imageUrl:"/e-commerce/imgs/784e2d330f.jpg",price:16}]},{id:2,title:"BBB",routeName:"BBB",items:[{id:10,name:"001",imageUrl:"/e-commerce/imgs/601615fded.jpg",price:220},{id:11,name:"002",imageUrl:"/e-commerce/imgs/22af51cc75.jpg",price:280},{id:12,name:"003",imageUrl:"/e-commerce/imgs/910f54efa8.jpg",price:110},{id:13,name:"004",imageUrl:"/e-commerce/imgs/4cb2b119d5.jpg",price:160},{id:14,name:"005",imageUrl:"/e-commerce/imgs/68bc3dfe63.jpg",price:160},{id:15,name:"006",imageUrl:"/e-commerce/imgs/a3afdfe91a.jpg",price:160},{id:16,name:"007",imageUrl:"/e-commerce/imgs/feca636293.jpg",price:190},{id:17,name:"008",imageUrl:"/e-commerce/imgs/b08e0332eb.jpg",price:200}]},{id:3,title:"CCC",routeName:"CCC",items:[{id:18,name:"001",imageUrl:"/e-commerce/imgs/c4f3602613.jpg",price:125},{id:19,name:"002",imageUrl:"/e-commerce/imgs/f5ab426467.jpg",price:90},{id:20,name:"003",imageUrl:"/e-commerce/imgs/e18dd49832.jpg",price:90},{id:21,name:"004",imageUrl:"/e-commerce/imgs/215e9da1bf.jpg",price:165},{id:22,name:"005",imageUrl:"/e-commerce/imgs/44ca2f7a67.jpg",price:185}]},{id:4,title:"DDD",routeName:"DDD",items:[{id:23,name:"001",imageUrl:"/e-commerce/imgs/d31b185b71.jpg",price:25},{id:24,name:"002",imageUrl:"/e-commerce/imgs/0e8542743e.jpg",price:20},{id:25,name:"003",imageUrl:"/e-commerce/imgs/2d66fdfea8.jpg",price:80},{id:26,name:"004",imageUrl:"/e-commerce/imgs/4e64e8b20a.jpg",price:80},{id:27,name:"005",imageUrl:"/e-commerce/imgs/f9d9a1f2fb.jpg",price:45},{id:28,name:"006",imageUrl:"/e-commerce/imgs/85aa8c8e12.jpg",price:135},{id:29,name:"007",imageUrl:"/e-commerce/imgs/310d8e29ae.jpg",price:20}]},{id:5,title:"EEE",routeName:"EEE",items:[{id:30,name:"001",imageUrl:"/e-commerce/imgs/77be63144e.jpg",price:325},{id:31,name:"002",imageUrl:"/e-commerce/imgs/f118e26c73.jpg",price:20},{id:32,name:"003",imageUrl:"/e-commerce/imgs/93ea580ca2.jpg",price:25},{id:33,name:"004",imageUrl:"/e-commerce/imgs/6b882f09d7.jpg",price:25},{id:34,name:"005",imageUrl:"/e-commerce/imgs/f4b4b7bfdb.jpg",price:40},{id:35,name:"006",imageUrl:"/e-commerce/imgs/b1e8183e82.jpg",price:25}]}];function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var g,f=(g=function(e,r){return(g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t])})(e,r)},function(e,r){function t(){this.constructor=e}g(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)}),d=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t},y=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.state={collections:s},r}return f(r,e),r.prototype.render=function(){var e=this.state.collections;return i.a.createElement("div",{className:"shop-page"},e.map((function(e){var r=e.id,t=d(e,["id"]);return i.a.createElement(p,u({key:r},t))})))},r}(i.a.Component),b=[{title:"AAA",imageUrl:"/e-commerce/imgs/323fdee309.jpg",id:1,linkUrl:"shop/AAA"},{title:"BBB",imageUrl:"/e-commerce/imgs/489c6645c6.jpg",id:2,linkUrl:"shop/BBB"},{title:"CCC",imageUrl:"/e-commerce/imgs/9cc4fffe8c.jpg",id:3,linkUrl:"shop/CCC"},{title:"DDD",imageUrl:"/e-commerce/imgs/9d5d52049e.jpg",id:4,size:"large",linkUrl:"shop/DDD"},{title:"EEE",imageUrl:"/e-commerce/imgs/83d67c0904.jpg",id:5,size:"large",linkUrl:"shop/EEE"}],j=t(58),v=(t(84),t(10)),U=function(e){var r=e.title,t=e.imageUrl,n=e.size,c=e.linkUrl,a=Object(o.useHistory)();return i.a.createElement("div",{className:Object(j.a)("menu-item",n),onClick:function(){return a.push(v.PUBLIC_URL+"/"+c)}},i.a.createElement("div",{className:"background-image",style:{backgroundImage:"url("+t+")"}}),i.a.createElement("div",{className:"content"},i.a.createElement("h1",{className:"title"},r),i.a.createElement("span",{className:"subtitle"},"SHOP NOW")))};t(85);function h(){return(h=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var O=function(){var e=function(r,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t])})(r,t)};return function(r,t){function n(){this.constructor=r}e(r,t),r.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}(),E=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t},_=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.state={sections:b},r}return O(r,e),r.prototype.render=function(){var e=this.state.sections;return i.a.createElement("div",{className:"directory-menu"},e.map((function(e){var r=e.id,t=E(e,["id"]);return i.a.createElement(U,h({key:r},t))})))},r}(i.a.Component),w=(t(86),function(e){return i.a.createElement("div",{className:"homepage"},i.a.createElement(_,null))}),P=function(){var e=function(r,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t])})(r,t)};return function(r,t){function n(){this.constructor=r}e(r,t),r.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}(),C=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return P(r,e),r.prototype.render=function(){return console.log(v.PUBLIC_URL),i.a.createElement(o.BrowserRouter,null,i.a.createElement(o.Switch,null,i.a.createElement(o.Route,{path:v.PUBLIC_URL+"/",exact:!0},i.a.createElement(w,null)),i.a.createElement(o.Route,{path:v.PUBLIC_URL+"/shop",exact:!0},i.a.createElement(y,null))))},r}(i.a.Component);t(87);a.a.render(i.a.createElement(C,null),document.getElementById("root"))}});
//# sourceMappingURL=main.a3aaf4a752.js.map