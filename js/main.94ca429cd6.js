!function(e){function t(t){for(var r,o,i=t[0],l=t[1],u=t[2],f=0,p=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);p.length;)p.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={0:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/e-commerce";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=l;c.push([179,1]),n()}({0:function(e,t,n){e.exports=n(21)(33)},1:function(e,t,n){e.exports=n(21)(0)},10:function(e,t){e.exports={isProduction:!0,PUBLIC_URL:"/e-commerce",TITLE:"E-Commerce!",StripePublishableKey:"pk_test_ypXYc9KSNPnBLHLUYbRQ52gq00emed72k7",firebaseConfig:{apiKey:"AIzaSyA4PqScp3b44D9FefYpicx8nRhkLWx1dMk",authDomain:"e-commerce-69886.firebaseapp.com",databaseURL:"https://e-commerce-69886.firebaseio.com",projectId:"e-commerce-69886",storageBucket:"e-commerce-69886.appspot.com",messagingSenderId:"241854286400",appId:"1:241854286400:web:d9a056ca886f32e692ada5",measurementId:"G-70321NYLGD"}}},112:function(e,t,n){e.exports=n(21)(13)},126:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},13:function(e,t,n){e.exports=n(21)(1)},130:function(e,t,n){},131:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){},137:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){},163:function(e,t,n){},164:function(e,t,n){},165:function(e,t,n){},166:function(e,t,n){},167:function(e,t,n){},168:function(e,t,n){},178:function(e,t,n){},179:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(60),o=n.n(c),i=n(9),l=n(7),u=(n(17),n(57),n(126),function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}),s=function(e){var t=e.children;return a.a.createElement("div",{className:"spinner-overlay"},t)},f=function(e){var t=e.children;return a.a.createElement("div",{className:"spinner-container"},t)},p=function(e){return function(t){var n=t.isLoading,r=u(t,["isLoading"]);return a.a.createElement(a.a.Fragment,null,n?a.a.createElement(s,null,a.a.createElement(f,null)):a.a.createElement(e,r))}},m=(n(25),n(58),n(46),n(20),n(40));n(128);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},h=function(e){var t=e.children,n=e.isGoogleSignIn,r=e.inverted,c=d(e,["children","isGoogleSignIn","inverted"]);return a.a.createElement("button",b({className:Object(m.a)("custom-button",n&&"google-sign-in",r&&"inverted")},c),t)},y=function(e){return{type:"ADD_ITEM",payload:e}},v=(n(129),Object(l.b)(null,(function(e){return{addItem:function(t){return e(y(t))}}}))((function(e){var t=e.item,n=e.addItem,r=t.name,c=t.price,o=t.imageUrl;return a.a.createElement("div",{className:"collection-item"},a.a.createElement("div",{className:"image",style:{backgroundImage:"url("+o+")"}}),a.a.createElement("div",{className:"collection-footer"},a.a.createElement("span",{className:"name"},r),a.a.createElement("span",{className:"price"},c)),a.a.createElement(h,{inverted:!0,onClick:function(){return n(t)}},"add to cart"))}))),E=(n(130),function(e){var t=e.collection,n=t.title,r=t.items;return a.a.createElement("div",{className:"collection-preview"},a.a.createElement("h1",{className:"title"},n),a.a.createElement("div",{className:"preview"},r.filter((function(e,t){return t<4})).map((function(e){return a.a.createElement(v,{key:e.id,item:e})}))))}),O=n(8),g=(n(131),n(132),function(e){return e.shop}),w=Object(O.a)(g,(function(e){return e.collections})),S=Object(O.a)(w,(function(e){return Object.keys(e).map((function(t){return e[t]}))})),j=Object(O.a)(g,(function(e){return e.isFetching})),N=Object(O.b)({collections:S}),I=Object(l.b)(N)((function(e){var t=e.collections;return a.a.createElement("div",{className:"collection-overview"},t.map((function(e){return a.a.createElement(E,{key:e.id,collection:e})})))})),C=Object(O.b)({isLoading:j}),_=Object(l.b)(C)(p(I)),U=(n(133),Object(l.b)((function(e){return{getCollection:function(t){return function(e){return Object(O.a)(w,(function(t){return t[e]}))}(t)(e)}}}))((function(e){var t=e.getCollection,n=Object(i.useRouteMatch)(),r=t(n.params.collectionId);return a.a.createElement("div",{className:"collection-page"},a.a.createElement("h2",{className:"title"},n.params.collectionId),a.a.createElement("div",{className:"items"},r&&r.items.map((function(e){return a.a.createElement(v,{key:e.id,item:e})}))))}))),k=Object(O.b)({isLoading:j}),T=Object(l.b)(k)(p(U)),P=Object(l.b)(null,(function(e){return{fetchCollectionsStartAsync:function(){return e({type:"FETCH_COLLECTIONS_START"})}}}))((function(e){var t=e.fetchCollectionsStartAsync;Object(r.useEffect)((function(){t()}),[t]);var n=Object(i.useRouteMatch)();return a.a.createElement("div",{className:"shop-page"},a.a.createElement(i.Route,{exact:!0,path:""+n.path},a.a.createElement(_,null)),a.a.createElement(i.Route,{path:n.path+"/:collectionId"},a.a.createElement(T,null)))})),L=(n(134),n(10)),R=function(e){var t=e.title,n=e.imageUrl,r=e.size,c=e.linkUrl,o=Object(i.useHistory)();return a.a.createElement("div",{className:Object(m.a)("menu-item",r),onClick:function(){return o.push(L.PUBLIC_URL+"/"+c)}},a.a.createElement("div",{className:"background-image",style:{backgroundImage:"url("+n+")"}}),a.a.createElement("div",{className:"content"},a.a.createElement("h1",{className:"title"},t),a.a.createElement("span",{className:"subtitle"},"SHOP NOW")))},x=(n(135),Object(O.a)((function(e){return e.directory}),(function(e){return e.sections})));function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var G=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},D=Object(O.b)({sections:x}),F=Object(l.b)(D)((function(e){var t=e.sections;return a.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.id,n=G(e,["id"]);return a.a.createElement(R,A({key:t},n))})))})),B=(n(136),function(e){return a.a.createElement("div",{className:"homepage"},a.a.createElement(F,null))}),H=n(62),M=(n(137),n(101),function(e){return e.cart}),q=Object(O.a)([M],(function(e){return e.hidden})),K=Object(O.a)([M],(function(e){return e.cartItems})),Y=Object(O.a)([K],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),W=Object(O.a)([K],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),z=(n(139),Object(l.b)((function(e){return{itemCount:Y(e)}}),(function(e){return{toggleCartHidden:function(){return e({type:"TOGGLE_CART_HIDDEN"})}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return a.a.createElement("div",{className:"cart-icon",onClick:t},a.a.createElement(H.b,null),a.a.createElement("span",{className:"item-count"},n))}))),Q=(n(140),n(141),function(e){var t=e.item,n=t.imageUrl,r=t.price,c=t.name,o=t.quantity;return a.a.createElement("div",{className:"cart-item"},a.a.createElement("img",{src:n,alt:"item"}),a.a.createElement("div",{className:"item-details"},a.a.createElement("span",{className:"name"},c),a.a.createElement("span",{className:"price"},o," x $",r)))}),V=Object(O.b)({cartItems:K}),X=Object(l.b)(V,(function(e){return{toggleHidden:function(){return e({type:"TOGGLE_CART_HIDDEN"})}}}))((function(e){var t=e.cartItems,n=e.toggleHidden,r=Object(i.useHistory)();return a.a.createElement("div",{className:"cart-dropdown"},a.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return a.a.createElement(Q,{key:e.id,item:e})})):a.a.createElement("div",{className:"empty-message"},"Your cart is empty")),a.a.createElement(h,{onClick:function(){r.push(L.PUBLIC_URL+"/checkout"),n()}},"GO TO CHECKOUT"))})),J=Object(O.a)([function(e){return e.user}],(function(e){return e.currentUser})),$=function(e){return{type:"SIGN_IN_SUCCESS",payload:e}},Z=function(e){return{type:"SIGN_IN_FAILURE",payload:e}},ee=function(e,t){return{type:"SIGN_UP_SUCCESS",payload:{user:e,additionalData:t}}},te=Object(O.b)({currentUser:J,hidden:q}),ne=Object(l.b)(te,(function(e){return{signOutStart:function(){return e({type:"SIGN_OUT_START"})}}}))((function(e){var t=e.currentUser,n=e.hidden,r=e.signOutStart;return a.a.createElement("div",{className:"header"},a.a.createElement(i.Link,{to:L.PUBLIC_URL+"/",className:"logo-container"},a.a.createElement(H.a,{className:"logo"})),a.a.createElement("div",{className:"options"},a.a.createElement(i.Link,{to:L.PUBLIC_URL+"/shop",className:"option"},"shop"),a.a.createElement(i.Link,{to:L.PUBLIC_URL+"/contact",className:"option"},"contact"),t?a.a.createElement("span",{onClick:r,className:"option"},"sign out"):a.a.createElement(i.Link,{to:L.PUBLIC_URL+"/signin",className:"option"},"sign in"),a.a.createElement(z,null)),!n&&a.a.createElement(X,null))}));n(29),n(30),n(28),n(31),n(79),n(32),n(33),n(163),n(164);function re(){return(re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ae=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},ce=function(e){var t=e.handleChange,n=e.value,r=e.label,c=ae(e,["handleChange","value","label"]);return a.a.createElement("div",{className:"group"},a.a.createElement("input",re({className:"form-input",value:n,onChange:t},c)),r&&a.a.createElement("label",{htmlFor:r,className:Object(m.a)(n&&"shrink","form-input-label")},r))},oe=function(){return(oe=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},ie=function(e,t,n,r){return new(n||(n=Promise))((function(a,c){function o(e){try{l(r.next(e))}catch(e){c(e)}}function i(e){try{l(r.throw(e))}catch(e){c(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}l((r=r.apply(e,t||[])).next())}))},le=function(e,t){var n,r,a,c,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(c){return function(i){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&c[0]?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===c[0]||2===c[0])){o=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){o.label=c[1];break}if(6===c[0]&&o.label<a[1]){o.label=a[1],a=c;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(c);break}a[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(e,o)}catch(e){c=[6,e],r=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}},ue=Object(l.b)(null,(function(e){return{googleSignInStart:function(){return e({type:"GOOGLE_SIGN_IN_START"})},emailSignInStart:function(t,n){return e({type:"EMAIL_SIGN_IN_START",payload:{email:t,password:n}})}}}))((function(e){var t=e.emailSignInStart,n=e.googleSignInStart,c=Object(r.useState)({email:"",password:""}),o=c[0],i=c[1],l=o.email,u=o.password,s=function(e){var t,n=e.target,r=n.name,a=n.value;i(oe(oe({},o),((t={})[r]=a,t)))};return a.a.createElement("div",{className:"sign-in"},a.a.createElement("h2",{className:"title"},"I already have an account"),a.a.createElement("span",{className:"title"},"Sign in with your email and password"),a.a.createElement("form",{onSubmit:function(e){return ie(void 0,void 0,void 0,(function(){return le(this,(function(n){return e.preventDefault(),t(l,u),[2]}))}))}},a.a.createElement(ce,{handleChange:s,value:l,id:"email",type:"email",name:"email",label:"email",required:!0}),a.a.createElement(ce,{handleChange:s,value:u,id:"password",type:"password",name:"password",label:"password",required:!0}),a.a.createElement("div",{className:"buttons"},a.a.createElement(h,{type:"submit"},"sign in"),a.a.createElement(h,{type:"button",onClick:n,isGoogleSignIn:!0},"sign in with google"))))})),se=(n(165),function(){return(se=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)}),fe=function(e,t,n,r){return new(n||(n=Promise))((function(a,c){function o(e){try{l(r.next(e))}catch(e){c(e)}}function i(e){try{l(r.throw(e))}catch(e){c(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}l((r=r.apply(e,t||[])).next())}))},pe=function(e,t){var n,r,a,c,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(c){return function(i){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&c[0]?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===c[0]||2===c[0])){o=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){o.label=c[1];break}if(6===c[0]&&o.label<a[1]){o.label=a[1],a=c;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(c);break}a[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(e,o)}catch(e){c=[6,e],r=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}},me=Object(l.b)(null,(function(e){return{signUpStart:function(t){return e(function(e){return{type:"SIGN_UP_START",payload:e}}(t))}}}))((function(e){var t=e.signUpStart,n=Object(r.useState)({displayName:"",email:"",password:"",confirmPassword:""}),c=n[0],o=n[1],i=c.displayName,l=c.email,u=c.password,s=c.confirmPassword,f=function(e){var t,n=e.target,r=n.name,a=n.value;o(se(se({},c),((t={})[r]=a,t)))};return a.a.createElement("div",{className:"sign-up"},a.a.createElement("h2",{className:"title"},"I do not have an account"),a.a.createElement("span",null,"Sign up with your email and password"),a.a.createElement("form",{className:"sign-up-form",onSubmit:function(e){return fe(void 0,void 0,void 0,(function(){return pe(this,(function(n){return e.preventDefault(),u!==s?[2,alert("password don't match")]:(t({displayName:i,email:l,password:u,confirmPassword:s}),[2])}))}))}},a.a.createElement(ce,{type:"text",name:"displayName",value:i,label:"Display Name",handleChange:f,required:!0}),a.a.createElement(ce,{type:"email",name:"email",value:l,label:"email",handleChange:f,required:!0}),a.a.createElement(ce,{type:"password",name:"password",value:u,label:"password",handleChange:f,required:!0}),a.a.createElement(ce,{type:"password",name:"confirmPassword",value:s,label:"Confirm Password",handleChange:f,required:!0}),a.a.createElement(h,{type:"submit"},"sign up")))})),be=(n(166),function(e){return a.a.createElement("div",{className:"sign-in-and-sign-up"},a.a.createElement(ue,null),a.a.createElement(me,null))}),de=(n(167),n(168),Object(l.b)(null,(function(e){return{clearItemFromCart:function(t){return e({type:"CLEAR_ITEM_FROM_CART",payload:t})},addItem:function(t){return e(y(t))},removeItem:function(t){return e({type:"REMOVE_ITEM",payload:t})}}}))((function(e){var t=e.cartItem,n=e.clearItemFromCart,r=e.addItem,c=e.removeItem,o=t.name,i=t.imageUrl,l=t.price,u=t.quantity;return a.a.createElement("div",{className:"checkout-item"},a.a.createElement("div",{className:"image-container"},a.a.createElement("img",{src:i,alt:"item"})),a.a.createElement("span",{className:"name"},o),a.a.createElement("span",{className:"quantity"},a.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"❮"),a.a.createElement("span",{className:"value"},u),a.a.createElement("div",{className:"arrow",onClick:function(){return r(t)}},"❯")),a.a.createElement("span",{className:"price"},l),a.a.createElement("div",{className:"remove-button",onClick:function(){return n(t)}},"✕"))}))),he=n(114),ye=n.n(he),ve=function(e){var t=e.price,n=100*t;return a.a.createElement(ye.a,{token:function(e){alert("Payment Successful")},stripeKey:L.StripePublishableKey,label:"Pay Now",name:"E-Commerce!",billingAddress:!0,shippingAddress:!0,description:"Your total is $"+t,amount:n,panelLabel:"Pay Now"})},Ee=Object(O.b)({cartItems:K,cartTotal:W}),Oe=Object(l.b)(Ee)((function(e){var t=e.cartItems,n=e.cartTotal;return a.a.createElement("div",{className:"checkout-page"},a.a.createElement("div",{className:"checkout-header"},a.a.createElement("div",{className:"header-block"},a.a.createElement("span",null,"Product")),a.a.createElement("div",{className:"header-block"},a.a.createElement("span",null,"Description")),a.a.createElement("div",{className:"header-block"},a.a.createElement("span",null,"Quantity")),a.a.createElement("div",{className:"header-block"},a.a.createElement("span",null,"Price")),a.a.createElement("div",{className:"header-block"},a.a.createElement("span",null,"Remove"))),t.map((function(e){return a.a.createElement(de,{key:e.id,cartItem:e})})),a.a.createElement("div",{className:"total"},a.a.createElement("span",null,"TOTAL: $",n)),a.a.createElement("div",{className:"test-warning"},"*Use 4242 4242 4242 4242 with any EXP any CVC code to test"),a.a.createElement(ve,{price:n}))})),ge=Object(O.b)({currentUser:J}),we=Object(l.b)(ge,(function(e){return{checkUserSession:function(){return e({type:"CHECK_USER_SESSION"})}}}))((function(e){var t=e.currentUser,n=e.checkUserSession;return Object(r.useEffect)((function(){n()}),[n]),a.a.createElement(a.a.Fragment,null,a.a.createElement(ne,null),a.a.createElement(i.Switch,null,a.a.createElement(i.Route,{path:L.PUBLIC_URL+"/",exact:!0},a.a.createElement(B,null)),a.a.createElement(i.Route,{path:L.PUBLIC_URL+"/shop"},a.a.createElement(P,null)),a.a.createElement(i.Route,{path:L.PUBLIC_URL+"/checkout"},a.a.createElement(Oe,null)),a.a.createElement(i.Route,{path:L.PUBLIC_URL+"/signin",exact:!0},t?a.a.createElement(i.Redirect,{to:L.PUBLIC_URL+"/"}):a.a.createElement(be,null))))})),Se=n(16),je=n(83),Ne=n(115),Ie=n.n(Ne),Ce=n(116),_e=n.n(Ce),Ue=n(118),ke=function(){return(ke=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},Te={currentUser:null,error:null},Pe=(n(171),function(){return(Pe=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)}),Le=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),a=0;for(t=0;t<n;t++)for(var c=arguments[t],o=0,i=c.length;o<i;o++,a++)r[a]=c[o];return r},Re=function(e,t){var n=e.find((function(e){return e.id===t.id}));return n&&1===n.quantity?e.filter((function(e){return e.id!==t.id})):n?e.map((function(e){return e.id===t.id?Pe(Pe({},e),{quantity:e.quantity-1}):e})):e},xe=function(){return(xe=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},Ae={hidden:!0,cartItems:[]},Ge={sections:[{title:"AAA",imageUrl:"https://i.ibb.co/NsQF0b4/AAA.jpg",id:1,linkUrl:"shop/AAA"},{title:"BBB",imageUrl:"https://i.ibb.co/T8kWYbx/BBB.jpg",id:2,linkUrl:"shop/BBB"},{title:"CCC",imageUrl:"https://i.ibb.co/0Dq6xn9/CCC.jpg",id:3,linkUrl:"shop/CCC"},{title:"DDD",imageUrl:"https://i.ibb.co/wcnmQdr/DDD.jpg",id:4,size:"large",linkUrl:"shop/DDD"},{title:"EEE",imageUrl:"https://i.ibb.co/87J3Z3h/EEE.jpg",id:5,size:"large",linkUrl:"shop/EEE"}]},De=function(){return(De=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},Fe={collections:{},isFetching:!1},Be=n(5),He=n(41),Me=n.n(He),qe=(n(172),n(176),function(){return(qe=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)}),Ke=function(e,t,n,r){return new(n||(n=Promise))((function(a,c){function o(e){try{l(r.next(e))}catch(e){c(e)}}function i(e){try{l(r.throw(e))}catch(e){c(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}l((r=r.apply(e,t||[])).next())}))},Ye=function(e,t){var n,r,a,c,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(c){return function(i){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&c[0]?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===c[0]||2===c[0])){o=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){o.label=c[1];break}if(6===c[0]&&o.label<a[1]){o.label=a[1],a=c;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(c);break}a[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(e,o)}catch(e){c=[6,e],r=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}};Me.a.initializeApp(L.firebaseConfig);var We=Me.a.firestore(),ze=Me.a.auth(),Qe=new Me.a.auth.GoogleAuthProvider;Qe.setCustomParameters({prompt:"select_account"});function Ve(e,t){return Ke(this,void 0,void 0,(function(){var n,r,a,c,o;return Ye(this,(function(i){switch(i.label){case 0:return e?[4,(n=We.doc("users/"+e.uid)).get()]:[2];case 1:if(i.sent().exists)return[3,5];r=e.displayName,a=e.email,c=(new Date).toISOString(),i.label=2;case 2:return i.trys.push([2,4,,5]),[4,n.set(qe({displayName:r,email:a,createdAt:c},t))];case 3:return i.sent(),[3,5];case 4:return o=i.sent(),console.log("Firestore saving error:",o.message),[3,5];case 5:return[2,n]}}))}))}Me.a;var Xe=function(e,t){var n,r,a,c,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(c){return function(i){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&c[0]?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===c[0]||2===c[0])){o=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){o.label=c[1];break}if(6===c[0]&&o.label<a[1]){o.label=a[1],a=c;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(c);break}a[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(e,o)}catch(e){c=[6,e],r=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}};function Je(){var e,t,n,r;return Xe(this,(function(a){switch(a.label){case 0:return a.trys.push([0,3,,5]),[4,We.collection("collections").get()];case 1:return e=a.sent(),t=e.docs.map((function(e){var t=e.data(),n=t.title,r=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:r}})),n=t.reduce((function(e,t){return e[t.title]=t,e}),{}),[4,Object(Be.c)((o=n,{type:"FETCH_COLLECTIONS_SUCCESS",payload:o}))];case 2:return a.sent(),[3,5];case 3:return r=a.sent(),[4,Object(Be.c)((c=r.message,{type:"FETCH_COLLECTIONS_FAILURE",payload:c}))];case 4:return a.sent(),[3,5];case 5:return[2]}var c,o}))}function $e(){return Xe(this,(function(e){switch(e.label){case 0:return[4,Object(Be.d)("FETCH_COLLECTIONS_START",Je)];case 1:return e.sent(),[2]}}))}function Ze(){return Xe(this,(function(e){switch(e.label){case 0:return[4,Object(Be.a)([Object(Be.b)($e)])];case 1:return e.sent(),[2]}}))}var et=function(){return(et=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},tt=function(e,t){var n,r,a,c,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(c){return function(i){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&c[0]?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===c[0]||2===c[0])){o=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){o.label=c[1];break}if(6===c[0]&&o.label<a[1]){o.label=a[1],a=c;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(c);break}a[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(e,o)}catch(e){c=[6,e],r=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}};function nt(e,t){var n,r;return tt(this,(function(a){switch(a.label){case 0:return a.trys.push([0,4,,6]),[4,Object(Be.b)(Ve,e,t)];case 1:return[4,a.sent().get()];case 2:return n=a.sent(),[4,Object(Be.c)($(et({id:n.id},n.data())))];case 3:return a.sent(),[3,6];case 4:return r=a.sent(),[4,Object(Be.c)(Z(r))];case 5:return a.sent(),[3,6];case 6:return[2]}}))}function rt(){var e,t;return tt(this,(function(n){switch(n.label){case 0:return n.trys.push([0,4,,6]),[4,ze.signInWithPopup(Qe)];case 1:return(e=n.sent().user)?[4,nt(e)]:[3,3];case 2:n.sent(),n.label=3;case 3:return[3,6];case 4:return t=n.sent(),[4,Object(Be.c)(Z(t))];case 5:return n.sent(),[3,6];case 6:return[2]}}))}function at(e){var t,n,r=e.payload,a=r.email,c=r.password;return tt(this,(function(e){switch(e.label){case 0:return e.trys.push([0,4,,5]),[4,ze.signInWithEmailAndPassword(a,c)];case 1:return(t=e.sent().user)?[4,nt(t)]:[3,3];case 2:e.sent(),e.label=3;case 3:return[3,5];case 4:return n=e.sent(),Object(Be.c)(Z(n)),[3,5];case 5:return[2]}}))}function ct(){var e,t;return tt(this,(function(n){switch(n.label){case 0:return n.trys.push([0,3,,5]),[4,new Promise((function(e,t){var n=ze.onAuthStateChanged((function(t){n(),e(t)}),t)}))];case 1:return(e=n.sent())?[4,nt(e)]:[2];case 2:return n.sent(),[3,5];case 3:return t=n.sent(),[4,Object(Be.c)(Z(t))];case 4:return n.sent(),[3,5];case 5:return[2]}}))}function ot(){var e;return tt(this,(function(t){switch(t.label){case 0:return t.trys.push([0,3,,5]),[4,ze.signOut()];case 1:return t.sent(),[4,Object(Be.c)({type:"SIGN_OUT_SUCCESS"})];case 2:return t.sent(),[3,5];case 3:return e=t.sent(),[4,Object(Be.c)((n=e,{type:"SIGN_OUT_FAILURE",payload:n}))];case 4:return t.sent(),[3,5];case 5:return[2]}var n}))}function it(e){var t,n,r,a,c,o=e.payload;return tt(this,(function(e){switch(e.label){case 0:t=o.email,n=o.password,r=o.displayName,e.label=1;case 1:return e.trys.push([1,5,,7]),[4,ze.createUserWithEmailAndPassword(t,n)];case 2:return(a=e.sent().user)?[4,Object(Be.c)(ee(a,{displayName:r}))]:[3,4];case 3:e.sent(),e.label=4;case 4:return[3,7];case 5:return c=e.sent(),[4,Object(Be.c)((i=c,{type:"SIGN_UP_FAILURE",payload:i}))];case 6:return e.sent(),[3,7];case 7:return[2]}var i}))}function lt(){return tt(this,(function(e){switch(e.label){case 0:return[4,Object(Be.d)("GOOGLE_SIGN_IN_START",rt)];case 1:return e.sent(),[2]}}))}function ut(){return tt(this,(function(e){switch(e.label){case 0:return[4,Object(Be.d)("EMAIL_SIGN_IN_START",at)];case 1:return e.sent(),[2]}}))}function st(){return tt(this,(function(e){switch(e.label){case 0:return[4,Object(Be.d)("CHECK_USER_SESSION",ct)];case 1:return e.sent(),[2]}}))}function ft(){return tt(this,(function(e){switch(e.label){case 0:return[4,Object(Be.d)("SIGN_OUT_START",ot)];case 1:return e.sent(),[2]}}))}function pt(){return tt(this,(function(e){switch(e.label){case 0:return[4,Object(Be.d)("SIGN_UP_SUCCESS",nt)];case 1:return e.sent(),[2]}}))}function mt(){return tt(this,(function(e){switch(e.label){case 0:return[4,Object(Be.d)("SIGN_UP_START",it)];case 1:return e.sent(),[2]}}))}function bt(){return tt(this,(function(e){switch(e.label){case 0:return[4,Object(Be.a)([Object(Be.b)(lt),Object(Be.b)(ut),Object(Be.b)(st),Object(Be.b)(ft),Object(Be.b)(mt),Object(Be.b)(pt)])];case 1:return e.sent(),[2]}}))}var dt=function(e,t){var n,r,a,c,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(c){return function(i){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&c[0]?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===c[0]||2===c[0])){o=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){o.label=c[1];break}if(6===c[0]&&o.label<a[1]){o.label=a[1],a=c;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(c);break}a[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(e,o)}catch(e){c=[6,e],r=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}};function ht(){return dt(this,(function(e){switch(e.label){case 0:return[4,Object(Be.c)({type:"CLEAR_CART"})];case 1:return e.sent(),[2]}}))}function yt(){return dt(this,(function(e){switch(e.label){case 0:return[4,Object(Be.d)("SIGN_OUT_SUCCESS",ht)];case 1:return e.sent(),[2]}}))}function vt(){return dt(this,(function(e){switch(e.label){case 0:return[4,Object(Be.a)([Object(Be.b)(yt)])];case 1:return e.sent(),[2]}}))}var Et=function(e,t){var n,r,a,c,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(c){return function(i){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&c[0]?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===c[0]||2===c[0])){o=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){o.label=c[1];break}if(6===c[0]&&o.label<a[1]){o.label=a[1],a=c;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(c);break}a[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(e,o)}catch(e){c=[6,e],r=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}},Ot=Object(Se.c)({user:function(e,t){switch(void 0===e&&(e=Te),t.type){case"SIGN_IN_SUCCESS":return ke(ke({},e),{currentUser:t.payload,error:null});case"SIGN_OUT_SUCCESS":return ke(ke({},e),{currentUser:null,error:null});case"SIGN_OUT_FAILURE":case"SIGN_IN_FAILURE":case"SIGN_UP_FAILURE":return ke(ke({},e),{error:t.payload});default:return e}},cart:function(e,t){switch(void 0===e&&(e=Ae),t.type){case"TOGGLE_CART_HIDDEN":return xe(xe({},e),{hidden:!e.hidden});case"ADD_ITEM":return xe(xe({},e),{cartItems:(n=e.cartItems,r=t.payload,n.find((function(e){return e.id===r.id}))?n.map((function(e){return e.id===r.id?Pe(Pe({},e),{quantity:e.quantity+1}):e})):Le(n,[Pe(Pe({},r),{quantity:1})]))});case"REMOVE_ITEM":return xe(xe({},e),{cartItems:Re(e.cartItems,t.payload)});case"CLEAR_ITEM_FROM_CART":return xe(xe({},e),{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case"CLEAR_CART":return xe(xe({},e),{cartItems:[]});default:return e}var n,r},directory:function(e,t){return void 0===e&&(e=Ge),t.type,e},shop:function(e,t){switch(void 0===e&&(e=Fe),t.type){case"FETCH_COLLECTIONS_START":return De(De({},e),{isFetching:!0});case"FETCH_COLLECTIONS_SUCCESS":return De(De({},e),{isFetching:!1,collections:t.payload});case"FETCH_COLLECTIONS_FAILURE":return De(De({},e),{isFetching:!1,errorMessage:t.payload});default:return e}}}),gt={key:"root",storage:Ie.a,whitelist:["cart"]},wt=Object(Ue.a)(),St=!L.isProduction&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Se.d,jt=[!L.isProduction&&_e.a,wt].filter(Boolean),Nt=Object(Se.e)(Object(je.a)(gt,Ot),St(Se.a.apply(void 0,jt)));wt.run((function(){return Et(this,(function(e){switch(e.label){case 0:return[4,Object(Be.a)([Object(Be.b)(Ze),Object(Be.b)(bt),Object(Be.b)(vt)])];case 1:return e.sent(),[2]}}))}));var It=Object(je.b)(Nt),Ct=n(117);n(178);o.a.render(a.a.createElement(l.a,{store:Nt},a.a.createElement(i.BrowserRouter,null,a.a.createElement(Ct.a,{persistor:It},a.a.createElement(we,null)))),document.getElementById("root"))},21:function(e,t){e.exports=react_a553beb22a},26:function(e,t,n){e.exports=n(21)(6)},34:function(e,t,n){e.exports=n(21)(30)},60:function(e,t,n){e.exports=n(21)(23)},81:function(e,t,n){e.exports=n(21)(18)},84:function(e,t,n){e.exports=n(21)(8)},9:function(e,t,n){e.exports=n(21)(27)}});
//# sourceMappingURL=main.94ca429cd6.js.map