(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n.p+"static/media/header1.9090c304.jpg"},21:function(e,t,n){e.exports=n.p+"static/media/header2.46169cda.jpg"},22:function(e,t,n){e.exports=n.p+"static/media/header3.424fc018.jpg"},23:function(e,t,n){e.exports=n.p+"static/media/header4.c3b95639.jpg"},24:function(e,t,n){e.exports=n.p+"static/media/header5.4961d690.jpg"},26:function(e,t,n){e.exports=n(44)},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),l=n.n(c),o=(n(31),n(10)),u=n(11),i=n(13),m=n(12),s=n(8),p=(n(32),n(3)),f=n(1),d=(n(33),n(20)),E=n.n(d),h=n(21),v=n.n(h),b=n(22),g=n.n(b),y=n(23),w=n.n(y),j=n(24),k=n.n(j),x=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.e,null,r.a.createElement(f.c,{path:"/",exact:!0,render:function(){return r.a.createElement("img",{src:E.a,alt:"bikewallpaper"})}}),r.a.createElement(f.c,{path:"/products",render:function(){return r.a.createElement("img",{src:v.a,alt:"bikewallpaper"})}}),r.a.createElement(f.c,{path:"/contact",render:function(){return r.a.createElement("img",{src:g.a,alt:"bikewallpaper"})}}),r.a.createElement(f.c,{path:"/admin",render:function(){return r.a.createElement("img",{src:w.a,alt:"bikewallpaper"})}}),r.a.createElement(f.c,{render:function(){return r.a.createElement("img",{src:k.a,alt:"bikewallpaper"})}})))},z=(n(39),function(e){var t=e.title,n=e.author,a=e.text;return r.a.createElement("article",{className:"article"},r.a.createElement("h3",null,t),r.a.createElement("span",null,n),r.a.createElement("p",null,a))}),O=[{id:1,title:"Gravel czy szosa?",author:"Krzychu Mr\xf3z",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id leo ac purus efficitur imperdiet in nec orci. Morbi posuere lorem nunc, nec mollis metus consequat et. Curabitur a feugiat urna. Morbi tortor purus, condimentum vitae mollis at, iaculis non nunc."},{id:2,title:"Jak wypina\u0107 si\u0119 z SPD?",author:"Bartosz \u015awie\u017cy",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id leo ac purus efficitur imperdiet in nec orci. Morbi posuere lorem nunc, nec mollis metus consequat et. Curabitur a feugiat urna. Morbi tortor purus, condimentum vitae mollis at, iaculis non nunc."},{id:3,title:"Najpi\u0119kniejsze polskie szlaki rowerowe",author:"Mi\u0142osz Mozarella",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id leo ac purus efficitur imperdiet in nec orci. Morbi posuere lorem nunc, nec mollis metus consequat et. Curabitur a feugiat urna. Morbi tortor purus, condimentum vitae mollis at, iaculis non nunc."}],M=function(){var e=O.map(function(e){return r.a.createElement(z,Object.assign({key:e.id},e))});return r.a.createElement("div",null,e)},R=function(e){return r.a.createElement("article",{className:"product"},r.a.createElement("h1",null,e.id))},C=function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Strona produktu"),r.a.createElement(R,{id:t.params.id}),r.a.createElement(p.b,{to:"/products"},"Powr\xf3t do listy produkt\xf3w"))},N=(n(40),["gravel","szosa","mtb"]),S=function(){var e=N.map(function(e){return r.a.createElement("li",{key:e},r.a.createElement(p.b,{to:"/product/".concat(e)},e))});return r.a.createElement("div",{className:"products"},r.a.createElement("h2",null," Lista produkt\xf3w: "),r.a.createElement("div",null,r.a.createElement("ul",null,e)))};n(41);function B(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(s.a)(e);if(t){var r=Object(s.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(m.a)(this,n)}}var P=function(e){Object(i.a)(n,e);var t=B(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:"",isEmpty:!0},e.handleSubmit=function(t){t.preventDefault(),e.setState({value:"",isEmpty:!0})},e.handleChange=function(t){t.target.value.length>0?e.setState({value:t.target.value,isEmpty:!1}):e.setState({value:t.target.value,isEmpty:!0})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.value,n=e.isEmpty;return r.a.createElement("div",{className:"contact"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h3",null,"Napisz do nas!"),r.a.createElement("textarea",{value:t,onChange:this.handleChange,placeholder:"Wpisz wiadomo\u015b\u0107"}),r.a.createElement("button",null,"Wy\u015blij")),r.a.createElement(f.a,{when:!n,message:"Masz nie wype\u0142niony formularz. Czy na pewno chcesz opu\u015bci\u0107 t\u0119 stron\u0119"}))}}]),n}(a.Component),J=function(){return r.a.createElement(f.c,{render:function(){return r.a.createElement(f.b,{to:"/login"})}})},A=function(){return r.a.createElement("h1",null,"404 Page not found")},F=function(){return r.a.createElement("div",null,r.a.createElement("label",null,"Podaj login: ",r.a.createElement("input",{type:"text"})),r.a.createElement("br",null),r.a.createElement("label",null,"Podaj has\u0142o: ",r.a.createElement("input",{type:"password"})),r.a.createElement("br",null),r.a.createElement("button",null,"Zaloguj"))},L=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.e,null,r.a.createElement(f.c,{path:"/",exact:!0,component:M}),r.a.createElement(f.c,{path:"/products",component:S}),r.a.createElement(f.c,{path:"/product/:id",component:C}),r.a.createElement(f.c,{path:"/contact",component:P}),r.a.createElement(f.c,{path:"/admin",component:J}),r.a.createElement(f.c,{path:"/login",component:F}),r.a.createElement(f.c,{component:A})))},W=(n(42),function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Footer"),r.a.createElement(f.c,{path:"/",exact:!0,render:function(){return r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,"stronie g\u0142ownej"))}}),r.a.createElement(f.c,{path:"/:page",render:function(e){return r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.params.page))}}))}),q=(n(43),[{name:"start",path:"/",exact:!0},{name:"produkty",path:"/products"},{name:"kontakt",path:"/contact"},{name:"panel admina",path:"/admin"}]),D=function(){var e=q.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(p.c,{exact:!!e.exact&&e.exact,to:e.path},e.name))});return r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,e))};function G(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(s.a)(e);if(t){var r=Object(s.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(m.a)(this,n)}}var I=function(e){Object(i.a)(n,e);var t=G(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(x,null)),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(D,null)),r.a.createElement("section",{className:"page"},r.a.createElement(L,null))),r.a.createElement("footer",null,r.a.createElement(W,null))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.e1b8f8fc.chunk.js.map