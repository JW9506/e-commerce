!function(e){function t(t){for(var r,o,i=t[0],l=t[1],u=t[2],p=0,f=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);f.length;)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={0:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/e-commerce";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=l;c.push([188,1]),n()}({0:function(e,t,n){e.exports=n(21)(33)},1:function(e,t,n){e.exports=n(21)(0)},10:function(e,t){e.exports={isProduction:!0,PUBLIC_URL:"/e-commerce",TITLE:"E-Commerce!",StripePublishableKey:"pk_test_ypXYc9KSNPnBLHLUYbRQ52gq00emed72k7",firebaseConfig:{apiKey:"AIzaSyA4PqScp3b44D9FefYpicx8nRhkLWx1dMk",authDomain:"e-commerce-69886.firebaseapp.com",databaseURL:"https://e-commerce-69886.firebaseio.com",projectId:"e-commerce-69886",storageBucket:"e-commerce-69886.appspot.com",messagingSenderId:"241854286400",appId:"1:241854286400:web:d9a056ca886f32e692ada5",measurementId:"G-70321NYLGD"}}},117:function(e,t,n){e.exports=n(21)(13)},138:function(e,t,n){},14:function(e,t,n){e.exports=n(21)(1)},140:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){},143:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){},148:function(e,t,n){},149:function(e,t,n){},151:function(e,t,n){},152:function(e,t,n){},153:function(e,t,n){},172:function(e,t,n){},173:function(e,t,n){},180:function(e,t,n){},181:function(e,t,n){},182:function(e,t,n){},183:function(e,t,n){},187:function(e,t,n){},188:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(62),o=n.n(c),i=n(9),l=(n(49),n(94),n(130),n(7)),u=(n(20),n(59),n(138),function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}),s=function(e){var t=e.children;return a.a.createElement("div",{className:"spinner-overlay"},t)},p=function(e){var t=e.children;return a.a.createElement("div",{className:"spinner-container"},t)},f=function(e){return function(t){var n=t.isLoading,r=u(t,["isLoading"]);return a.a.createElement(a.a.Fragment,null,n?a.a.createElement(s,null,a.a.createElement(p,null)):a.a.createElement(e,r))}},m=(n(25),n(60),n(47),n(26),n(40));n(140);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var d,h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},y=function(e){var t=e.children,n=e.isGoogleSignIn,r=e.inverted,c=h(e,["children","isGoogleSignIn","inverted"]);return a.a.createElement("button",b({className:Object(m.a)("custom-button",n&&"google-sign-in",r&&"inverted")},c),t)},v=function(e){return{type:"ADD_ITEM",payload:e}},E=(n(141),Object(l.b)(null,(function(e){return{addItem:function(t){return e(v(t))}}}))((function(e){var t=e.item,n=e.addItem,r=t.name,c=t.price,o=t.imageUrl;return a.a.createElement("div",{className:"collection-item"},a.a.createElement("div",{className:"image",style:{backgroundImage:"url("+o+")"}}),a.a.createElement("div",{className:"collection-footer"},a.a.createElement("span",{className:"name"},r),a.a.createElement("span",{className:"price"},c)),a.a.createElement(y,{inverted:!0,onClick:function(){return n(t)}},"add to cart"))}))),O=(n(142),function(e){var t=e.collection,n=t.title,r=t.items;return a.a.createElement("div",{className:"collection-preview"},a.a.createElement("h1",{className:"title"},n),a.a.createElement("div",{className:"preview"},r.filter((function(e,t){return t<4})).map((function(e){return a.a.createElement(E,{key:e.id,item:e})}))))}),g=n(8),w=(n(143),n(144),function(e){return e.shop}),j=Object(g.a)(w,(function(e){return e.collections})),_=Object(g.a)(j,(function(e){return Object.keys(e).map((function(t){return e[t]}))})),S=Object(g.a)(w,(function(e){return e.isFetching})),C=Object(g.b)({collections:_}),N=Object(l.b)(C)((function(e){var t=e.collections;return a.a.createElement("div",{className:"collection-overview"},t.map((function(e){return a.a.createElement(O,{key:e.id,collection:e})})))})),I=Object(g.b)({isLoading:S}),k=Object(l.b)(I)(f(N)),P=(n(145),Object(l.b)((function(e){return{getCollection:function(t){return function(e){return Object(g.a)(j,(function(t){return t[e]}))}(t)(e)}}}))((function(e){var t=e.getCollection,n=Object(i.useRouteMatch)(),r=t(n.params.collectionId);return a.a.createElement("div",{className:"collection-page"},a.a.createElement("h2",{className:"title"},n.params.collectionId),a.a.createElement("div",{className:"items"},r&&r.items.map((function(e){return a.a.createElement(E,{key:e.id,item:e})}))))}))),U=Object(g.b)({isLoading:S}),T=Object(l.b)(U)(f(P)),L=(d=function(e,t){return(d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}d(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),x=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return L(t,e),t.prototype.componentDidMount=function(){(0,this.props.fetchCollectionsStartAsync)()},t.prototype.render=function(){var e=this.props.match;return a.a.createElement("div",{className:"shop-page"},a.a.createElement(i.Route,{exact:!0,path:""+e.path},a.a.createElement(k,null)),a.a.createElement(i.Route,{path:e.path+"/:collectionId"},a.a.createElement(T,null)))},t}(a.a.Component),R=Object(i.withRouter)(Object(l.b)(null,(function(e){return{fetchCollectionsStartAsync:function(){return e({type:"FETCH_COLLECTIONS_START"})}}}))(x)),A=(n(146),n(10)),G=function(e){var t=e.title,n=e.imageUrl,r=e.size,c=e.linkUrl,o=Object(i.useHistory)();return a.a.createElement("div",{className:Object(m.a)("menu-item",r),onClick:function(){return o.push(A.PUBLIC_URL+"/"+c)}},a.a.createElement("div",{className:"background-image",style:{backgroundImage:"url("+n+")"}}),a.a.createElement("div",{className:"content"},a.a.createElement("h1",{className:"title"},t),a.a.createElement("span",{className:"subtitle"},"SHOP NOW")))},D=(n(147),Object(g.a)((function(e){return e.directory}),(function(e){return e.sections})));function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var B=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},M=Object(g.b)({sections:D}),H=Object(l.b)(M)((function(e){var t=e.sections;return a.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.id,n=B(e,["id"]);return a.a.createElement(G,F({key:t},n))})))})),q=(n(148),function(e){return a.a.createElement("div",{className:"homepage"},a.a.createElement(H,null))}),K=n(64),Y=(n(149),n(106),function(e){return e.cart}),W=Object(g.a)([Y],(function(e){return e.hidden})),z=Object(g.a)([Y],(function(e){return e.cartItems})),Q=Object(g.a)([z],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),V=Object(g.a)([z],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),X=(n(151),Object(l.b)((function(e){return{itemCount:Q(e)}}),(function(e){return{toggleCartHidden:function(){return e({type:"TOGGLE_CART_HIDDEN"})}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return a.a.createElement("div",{className:"cart-icon",onClick:t},a.a.createElement(K.b,null),a.a.createElement("span",{className:"item-count"},n))}))),J=(n(152),n(153),function(e){var t=e.item,n=t.imageUrl,r=t.price,c=t.name,o=t.quantity;return a.a.createElement("div",{className:"cart-item"},a.a.createElement("img",{src:n,alt:"item"}),a.a.createElement("div",{className:"item-details"},a.a.createElement("span",{className:"name"},c),a.a.createElement("span",{className:"price"},o," x $",r)))}),$=Object(g.b)({cartItems:z}),Z=Object(l.b)($,(function(e){return{toggleHidden:function(){return e({type:"TOGGLE_CART_HIDDEN"})}}}))((function(e){var t=e.cartItems,n=e.toggleHidden,r=Object(i.useHistory)();return a.a.createElement("div",{className:"cart-dropdown"},a.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return a.a.createElement(J,{key:e.id,item:e})})):a.a.createElement("div",{className:"empty-message"},"Your cart is empty")),a.a.createElement(y,{onClick:function(){r.push(A.PUBLIC_URL+"/checkout"),n()}},"GO TO CHECKOUT"))})),ee=Object(g.a)([function(e){return e.user}],(function(e){return e.currentUser})),te=function(e){return{type:"SIGN_IN_SUCCESS",payload:e}},ne=function(e){return{type:"SIGN_IN_FAILURE",payload:e}},re=Object(g.b)({currentUser:ee,hidden:W}),ae=Object(l.b)(re,(function(e){return{signOutStart:function(){return e({type:"SIGN_OUT_START"})}}}))((function(e){var t=e.currentUser,n=e.hidden,r=e.signOutStart;return a.a.createElement("div",{className:"header"},a.a.createElement(i.Link,{to:A.PUBLIC_URL+"/",className:"logo-container"},a.a.createElement(K.a,{className:"logo"})),a.a.createElement("div",{className:"options"},a.a.createElement(i.Link,{to:A.PUBLIC_URL+"/shop",className:"option"},"shop"),a.a.createElement(i.Link,{to:A.PUBLIC_URL+"/contact",className:"option"},"contact"),t?a.a.createElement("span",{onClick:r,className:"option"},"sign out"):a.a.createElement(i.Link,{to:A.PUBLIC_URL+"/signin",className:"option"},"sign in"),a.a.createElement(X,null)),!n&&a.a.createElement(Z,null))}));n(31),n(32),n(28),n(33),n(81),n(34),n(35),n(172),n(173);function ce(){return(ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var oe=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},ie=function(e){var t=e.handleChange,n=e.value,r=e.label,c=oe(e,["handleChange","value","label"]);return a.a.createElement("div",{className:"group"},a.a.createElement("input",ce({className:"form-input",value:n,onChange:t},c)),r&&a.a.createElement("label",{htmlFor:r,className:Object(m.a)(n&&"shrink","form-input-label")},r))},le=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),ue=function(e,t,n,r){return new(n||(n=Promise))((function(a,c){function o(e){try{l(r.next(e))}catch(e){c(e)}}function i(e){try{l(r.throw(e))}catch(e){c(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}l((r=r.apply(e,t||[])).next())}))},se=function(e,t){var n,r,a,c,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(c){return function(i){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&c[0]?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===c[0]||2===c[0])){o=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){o.label=c[1];break}if(6===c[0]&&o.label<a[1]){o.label=a[1],a=c;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(c);break}a[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(e,o)}catch(e){c=[6,e],r=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}},pe=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={email:"",password:""},t.handleSubmit=function(e){return ue(t,void 0,void 0,(function(){var t,n,r,a;return se(this,(function(c){return e.preventDefault(),t=this.props.emailSignInStart,n=this.state,r=n.email,a=n.password,t(r,a),[2]}))}))},t.handleChange=function(e){var n,r=e.target,a=r.name,c=r.value;t.setState(((n={})[a]=c,n))},t}return le(t,e),t.prototype.render=function(){var e=this.state,t=e.email,n=e.password,r=this.props.googleSignInStart;return a.a.createElement("div",{className:"sign-in"},a.a.createElement("h2",{className:"title"},"I already have an account"),a.a.createElement("span",{className:"title"},"Sign in with your email and password"),a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement(ie,{handleChange:this.handleChange,value:t,id:"email",type:"email",name:"email",label:"email",required:!0}),a.a.createElement(ie,{handleChange:this.handleChange,value:n,id:"password",type:"password",name:"password",label:"password",required:!0}),a.a.createElement("div",{className:"buttons"},a.a.createElement(y,{type:"submit"},"sign in"),a.a.createElement(y,{type:"button",onClick:r,isGoogleSignIn:!0},"sign in with google"))))},t}(a.a.Component),fe=Object(l.b)(null,(function(e){return{googleSignInStart:function(){return e({type:"GOOGLE_SIGN_IN_START"})},emailSignInStart:function(t,n){return e({type:"EMAIL_SIGN_IN_START",payload:{email:t,password:n}})}}}))(pe),me=n(41),be=n.n(me),de=(n(174),n(178),function(){return(de=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)}),he=function(e,t,n,r){return new(n||(n=Promise))((function(a,c){function o(e){try{l(r.next(e))}catch(e){c(e)}}function i(e){try{l(r.throw(e))}catch(e){c(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}l((r=r.apply(e,t||[])).next())}))},ye=function(e,t){var n,r,a,c,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(c){return function(i){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&c[0]?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===c[0]||2===c[0])){o=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){o.label=c[1];break}if(6===c[0]&&o.label<a[1]){o.label=a[1],a=c;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(c);break}a[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(e,o)}catch(e){c=[6,e],r=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}};be.a.initializeApp(A.firebaseConfig);var ve=be.a.firestore(),Ee=be.a.auth(),Oe=new be.a.auth.GoogleAuthProvider;Oe.setCustomParameters({prompt:"select_account"});function ge(e,t){return he(this,void 0,void 0,(function(){var n,r,a,c,o;return ye(this,(function(i){switch(i.label){case 0:return e?[4,(n=ve.doc("users/"+e.uid)).get()]:[2];case 1:if(i.sent().exists)return[3,5];r=e.displayName,a=e.email,c=(new Date).toISOString(),i.label=2;case 2:return i.trys.push([2,4,,5]),[4,n.set(de({displayName:r,email:a,createdAt:c},t))];case 3:return i.sent(),[3,5];case 4:return o=i.sent(),console.log("Firestore saving error:",o.message),[3,5];case 5:return[2,n]}}))}))}be.a,n(180);var we=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),je=function(e,t,n,r){return new(n||(n=Promise))((function(a,c){function o(e){try{l(r.next(e))}catch(e){c(e)}}function i(e){try{l(r.throw(e))}catch(e){c(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}l((r=r.apply(e,t||[])).next())}))},_e=function(e,t){var n,r,a,c,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(c){return function(i){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&c[0]?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===c[0]||2===c[0])){o=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){o.label=c[1];break}if(6===c[0]&&o.label<a[1]){o.label=a[1],a=c;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(c);break}a[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(e,o)}catch(e){c=[6,e],r=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}},Se=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={displayName:"",email:"",password:"",confirmPassword:""},t.handleSubmit=function(e){return je(t,void 0,void 0,(function(){var t,n,r,a,c,o;return _e(this,(function(i){switch(i.label){case 0:if(e.preventDefault(),t=this.state,n=t.displayName,r=t.email,a=t.password,c=t.confirmPassword,a!==c)return[2,alert("password don't match")];i.label=1;case 1:return i.trys.push([1,4,,5]),[4,Ee.createUserWithEmailAndPassword(r,a)];case 2:return[4,ge(i.sent().user,{displayName:n})];case 3:return i.sent(),this.setState({displayName:"",email:"",password:"",confirmPassword:""}),[3,5];case 4:return o=i.sent(),console.error(new Error(o.code+": "+o.message)),[3,5];case 5:return[2]}}))}))},t.handleChange=function(e){var n,r=e.target,a=r.name,c=r.value;t.setState(((n={})[a]=c,n))},t}return we(t,e),t.prototype.render=function(){var e=this.state,t=e.displayName,n=e.email,r=e.password,c=e.confirmPassword;return a.a.createElement("div",{className:"sign-up"},a.a.createElement("h2",{className:"title"},"I do not have an account"),a.a.createElement("span",null,"Sign up with your email and password"),a.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},a.a.createElement(ie,{type:"text",name:"displayName",value:t,label:"Display Name",handleChange:this.handleChange,required:!0}),a.a.createElement(ie,{type:"email",name:"email",value:n,label:"email",handleChange:this.handleChange,required:!0}),a.a.createElement(ie,{type:"password",name:"password",value:r,label:"password",handleChange:this.handleChange,required:!0}),a.a.createElement(ie,{type:"password",name:"confirmPassword",value:c,label:"Confirm Password",handleChange:this.handleChange,required:!0}),a.a.createElement(y,{type:"submit"},"sign up")))},t}(a.a.Component),Ce=(n(181),function(e){return a.a.createElement("div",{className:"sign-in-and-sign-up"},a.a.createElement(fe,null),a.a.createElement(Se,null))}),Ne=(n(182),n(183),Object(l.b)(null,(function(e){return{clearItemFromCart:function(t){return e({type:"CLEAR_ITEM_FROM_CART",payload:t})},addItem:function(t){return e(v(t))},removeItem:function(t){return e({type:"REMOVE_ITEM",payload:t})}}}))((function(e){var t=e.cartItem,n=e.clearItemFromCart,r=e.addItem,c=e.removeItem,o=t.name,i=t.imageUrl,l=t.price,u=t.quantity;return a.a.createElement("div",{className:"checkout-item"},a.a.createElement("div",{className:"image-container"},a.a.createElement("img",{src:i,alt:"item"})),a.a.createElement("span",{className:"name"},o),a.a.createElement("span",{className:"quantity"},a.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"❮"),a.a.createElement("span",{className:"value"},u),a.a.createElement("div",{className:"arrow",onClick:function(){return r(t)}},"❯")),a.a.createElement("span",{className:"price"},l),a.a.createElement("div",{className:"remove-button",onClick:function(){return n(t)}},"✕"))}))),Ie=n(119),ke=n.n(Ie),Pe=function(e){var t=e.price,n=100*t;return a.a.createElement(ke.a,{token:function(e){alert("Payment Successful")},stripeKey:A.StripePublishableKey,label:"Pay Now",name:"E-Commerce!",billingAddress:!0,shippingAddress:!0,description:"Your total is $"+t,amount:n,panelLabel:"Pay Now"})},Ue=Object(g.b)({cartItems:z,cartTotal:V}),Te=Object(l.b)(Ue)((function(e){var t=e.cartItems,n=e.cartTotal;return a.a.createElement("div",{className:"checkout-page"},a.a.createElement("div",{className:"checkout-header"},a.a.createElement("div",{className:"header-block"},a.a.createElement("span",null,"Product")),a.a.createElement("div",{className:"header-block"},a.a.createElement("span",null,"Description")),a.a.createElement("div",{className:"header-block"},a.a.createElement("span",null,"Quantity")),a.a.createElement("div",{className:"header-block"},a.a.createElement("span",null,"Price")),a.a.createElement("div",{className:"header-block"},a.a.createElement("span",null,"Remove"))),t.map((function(e){return a.a.createElement(Ne,{key:e.id,cartItem:e})})),a.a.createElement("div",{className:"total"},a.a.createElement("span",null,"TOTAL: $",n)),a.a.createElement("div",{className:"test-warning"},"*Use 4242 4242 4242 4242 with any EXP any CVC code to test"),a.a.createElement(Pe,{price:n}))})),Le=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),xe=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Le(t,e),t.prototype.componentDidMount=function(){(0,this.props.checkUserSession)()},t.prototype.render=function(){var e=this.props.currentUser;return a.a.createElement(a.a.Fragment,null,a.a.createElement(ae,null),a.a.createElement(i.Switch,null,a.a.createElement(i.Route,{path:A.PUBLIC_URL+"/",exact:!0},a.a.createElement(q,null)),a.a.createElement(i.Route,{path:A.PUBLIC_URL+"/shop"},a.a.createElement(R,null)),a.a.createElement(i.Route,{path:A.PUBLIC_URL+"/checkout"},a.a.createElement(Te,null)),a.a.createElement(i.Route,{path:A.PUBLIC_URL+"/signin",exact:!0},e?a.a.createElement(i.Redirect,{to:A.PUBLIC_URL+"/"}):a.a.createElement(Ce,null))))},t}(a.a.Component),Re=Object(g.b)({currentUser:ee}),Ae=Object(l.b)(Re,(function(e){return{checkUserSession:function(){return e({type:"CHECK_USER_SESSION"})}}}))(xe),Ge=n(17),De=n(85),Fe=n(120),Be=n.n(Fe),Me=n(121),He=n.n(Me),qe=n(123),Ke=function(){return(Ke=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},Ye={currentUser:null,error:null},We=(n(186),function(){return(We=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)}),ze=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),a=0;for(t=0;t<n;t++)for(var c=arguments[t],o=0,i=c.length;o<i;o++,a++)r[a]=c[o];return r},Qe=function(e,t){var n=e.find((function(e){return e.id===t.id}));return n&&1===n.quantity?e.filter((function(e){return e.id!==t.id})):n?e.map((function(e){return e.id===t.id?We(We({},e),{quantity:e.quantity-1}):e})):e},Ve=function(){return(Ve=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},Xe={hidden:!0,cartItems:[]},Je={sections:[{title:"AAA",imageUrl:"https://i.ibb.co/NsQF0b4/AAA.jpg",id:1,linkUrl:"shop/AAA"},{title:"BBB",imageUrl:"https://i.ibb.co/T8kWYbx/BBB.jpg",id:2,linkUrl:"shop/BBB"},{title:"CCC",imageUrl:"https://i.ibb.co/0Dq6xn9/CCC.jpg",id:3,linkUrl:"shop/CCC"},{title:"DDD",imageUrl:"https://i.ibb.co/wcnmQdr/DDD.jpg",id:4,size:"large",linkUrl:"shop/DDD"},{title:"EEE",imageUrl:"https://i.ibb.co/87J3Z3h/EEE.jpg",id:5,size:"large",linkUrl:"shop/EEE"}]},$e=function(){return($e=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},Ze={collections:{},isFetching:!1},et=n(6),tt=function(e,t){var n,r,a,c,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(c){return function(i){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&c[0]?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===c[0]||2===c[0])){o=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){o.label=c[1];break}if(6===c[0]&&o.label<a[1]){o.label=a[1],a=c;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(c);break}a[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(e,o)}catch(e){c=[6,e],r=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}};function nt(){var e,t,n,r;return tt(this,(function(a){switch(a.label){case 0:return a.trys.push([0,3,,5]),[4,ve.collection("collections").get()];case 1:return e=a.sent(),t=e.docs.map((function(e){var t=e.data(),n=t.title,r=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:r}})),n=t.reduce((function(e,t){return e[t.title]=t,e}),{}),[4,Object(et.c)((o=n,{type:"FETCH_COLLECTIONS_SUCCESS",payload:o}))];case 2:return a.sent(),[3,5];case 3:return r=a.sent(),[4,Object(et.c)((c=r.message,{type:"FETCH_COLLECTIONS_FAILURE",payload:c}))];case 4:return a.sent(),[3,5];case 5:return[2]}var c,o}))}function rt(){return tt(this,(function(e){switch(e.label){case 0:return[4,Object(et.d)("FETCH_COLLECTIONS_START",nt)];case 1:return e.sent(),[2]}}))}function at(){return tt(this,(function(e){switch(e.label){case 0:return[4,Object(et.a)([Object(et.b)(rt)])];case 1:return e.sent(),[2]}}))}var ct=function(){return(ct=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},ot=function(e,t){var n,r,a,c,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(c){return function(i){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&c[0]?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===c[0]||2===c[0])){o=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){o.label=c[1];break}if(6===c[0]&&o.label<a[1]){o.label=a[1],a=c;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(c);break}a[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(e,o)}catch(e){c=[6,e],r=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}};function it(e){var t,n;return ot(this,(function(r){switch(r.label){case 0:return r.trys.push([0,4,,6]),[4,Object(et.b)(ge,e)];case 1:return[4,r.sent().get()];case 2:return t=r.sent(),[4,Object(et.c)(te(ct({id:t.id},t.data())))];case 3:return r.sent(),[3,6];case 4:return n=r.sent(),[4,Object(et.c)(ne(n))];case 5:return r.sent(),[3,6];case 6:return[2]}}))}function lt(){var e,t;return ot(this,(function(n){switch(n.label){case 0:return n.trys.push([0,4,,6]),[4,Ee.signInWithPopup(Oe)];case 1:return(e=n.sent().user)?[4,it(e)]:[3,3];case 2:n.sent(),n.label=3;case 3:return[3,6];case 4:return t=n.sent(),[4,Object(et.c)(ne(t))];case 5:return n.sent(),[3,6];case 6:return[2]}}))}function ut(e){var t,n,r=e.payload,a=r.email,c=r.password;return ot(this,(function(e){switch(e.label){case 0:return e.trys.push([0,4,,5]),[4,Ee.signInWithEmailAndPassword(a,c)];case 1:return(t=e.sent().user)?[4,it(t)]:[3,3];case 2:e.sent(),e.label=3;case 3:return[3,5];case 4:return n=e.sent(),Object(et.c)(ne(n)),[3,5];case 5:return[2]}}))}function st(){var e,t;return ot(this,(function(n){switch(n.label){case 0:return n.trys.push([0,3,,5]),[4,new Promise((function(e,t){var n=Ee.onAuthStateChanged((function(t){n(),e(t)}),t)}))];case 1:return(e=n.sent())?[4,it(e)]:[2];case 2:return n.sent(),[3,5];case 3:return t=n.sent(),[4,Object(et.c)(ne(t))];case 4:return n.sent(),[3,5];case 5:return[2]}}))}function pt(){var e;return ot(this,(function(t){switch(t.label){case 0:return t.trys.push([0,3,,5]),[4,Ee.signOut()];case 1:return t.sent(),[4,Object(et.c)({type:"SIGN_OUT_SUCCESS"})];case 2:return t.sent(),[3,5];case 3:return e=t.sent(),[4,Object(et.c)((n=e,{type:"SIGN_OUT_FAILURE",payload:n}))];case 4:return t.sent(),[3,5];case 5:return[2]}var n}))}function ft(){return ot(this,(function(e){switch(e.label){case 0:return[4,Object(et.d)("GOOGLE_SIGN_IN_START",lt)];case 1:return e.sent(),[2]}}))}function mt(){return ot(this,(function(e){switch(e.label){case 0:return[4,Object(et.d)("EMAIL_SIGN_IN_START",ut)];case 1:return e.sent(),[2]}}))}function bt(){return ot(this,(function(e){switch(e.label){case 0:return[4,Object(et.d)("CHECK_USER_SESSION",st)];case 1:return e.sent(),[2]}}))}function dt(){return ot(this,(function(e){switch(e.label){case 0:return[4,Object(et.d)("SIGN_OUT_START",pt)];case 1:return e.sent(),[2]}}))}function ht(){return ot(this,(function(e){switch(e.label){case 0:return[4,Object(et.a)([Object(et.b)(ft),Object(et.b)(mt),Object(et.b)(bt),Object(et.b)(dt)])];case 1:return e.sent(),[2]}}))}var yt=function(e,t){var n,r,a,c,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(c){return function(i){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&c[0]?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===c[0]||2===c[0])){o=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){o.label=c[1];break}if(6===c[0]&&o.label<a[1]){o.label=a[1],a=c;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(c);break}a[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(e,o)}catch(e){c=[6,e],r=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}};function vt(){return yt(this,(function(e){switch(e.label){case 0:return[4,Object(et.c)({type:"CLEAR_CART"})];case 1:return e.sent(),[2]}}))}function Et(){return yt(this,(function(e){switch(e.label){case 0:return[4,Object(et.d)("SIGN_OUT_SUCCESS",vt)];case 1:return e.sent(),[2]}}))}function Ot(){return yt(this,(function(e){switch(e.label){case 0:return[4,Object(et.a)([Object(et.b)(Et)])];case 1:return e.sent(),[2]}}))}var gt=function(e,t){var n,r,a,c,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(c){return function(i){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&c[0]?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===c[0]||2===c[0])){o=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){o.label=c[1];break}if(6===c[0]&&o.label<a[1]){o.label=a[1],a=c;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(c);break}a[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(e,o)}catch(e){c=[6,e],r=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}},wt=Object(Ge.c)({user:function(e,t){switch(void 0===e&&(e=Ye),t.type){case"SIGN_IN_SUCCESS":return Ke(Ke({},e),{currentUser:t.payload,error:null});case"SIGN_OUT_SUCCESS":return Ke(Ke({},e),{currentUser:null,error:null});case"SIGN_OUT_FAILURE":case"SIGN_IN_FAILURE":return Ke(Ke({},e),{error:t.payload});default:return e}},cart:function(e,t){switch(void 0===e&&(e=Xe),t.type){case"TOGGLE_CART_HIDDEN":return Ve(Ve({},e),{hidden:!e.hidden});case"ADD_ITEM":return Ve(Ve({},e),{cartItems:(n=e.cartItems,r=t.payload,n.find((function(e){return e.id===r.id}))?n.map((function(e){return e.id===r.id?We(We({},e),{quantity:e.quantity+1}):e})):ze(n,[We(We({},r),{quantity:1})]))});case"REMOVE_ITEM":return Ve(Ve({},e),{cartItems:Qe(e.cartItems,t.payload)});case"CLEAR_ITEM_FROM_CART":return Ve(Ve({},e),{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case"CLEAR_CART":return Ve(Ve({},e),{cartItems:[]});default:return e}var n,r},directory:function(e,t){return void 0===e&&(e=Je),t.type,e},shop:function(e,t){switch(void 0===e&&(e=Ze),t.type){case"FETCH_COLLECTIONS_START":return $e($e({},e),{isFetching:!0});case"FETCH_COLLECTIONS_SUCCESS":return $e($e({},e),{isFetching:!1,collections:t.payload});case"FETCH_COLLECTIONS_FAILURE":return $e($e({},e),{isFetching:!1,errorMessage:t.payload});default:return e}}}),jt={key:"root",storage:Be.a,whitelist:["cart"]},_t=Object(qe.a)(),St=!A.isProduction&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ge.d,Ct=[!A.isProduction&&He.a,_t].filter(Boolean),Nt=Object(Ge.e)(Object(De.a)(jt,wt),St(Ge.a.apply(void 0,Ct)));_t.run((function(){return gt(this,(function(e){switch(e.label){case 0:return[4,Object(et.a)([Object(et.b)(at),Object(et.b)(ht),Object(et.b)(Ot)])];case 1:return e.sent(),[2]}}))}));var It=Object(De.b)(Nt),kt=n(122);n(187);o.a.render(a.a.createElement(l.a,{store:Nt},a.a.createElement(i.BrowserRouter,null,a.a.createElement(kt.a,{persistor:It},a.a.createElement(Ae,null)))),document.getElementById("root"))},21:function(e,t){e.exports=react_a553beb22a},27:function(e,t,n){e.exports=n(21)(6)},36:function(e,t,n){e.exports=n(21)(30)},62:function(e,t,n){e.exports=n(21)(23)},83:function(e,t,n){e.exports=n(21)(18)},9:function(e,t,n){e.exports=n(21)(27)},97:function(e,t,n){e.exports=n(21)(8)}});
//# sourceMappingURL=main.6dac8a138d.js.map