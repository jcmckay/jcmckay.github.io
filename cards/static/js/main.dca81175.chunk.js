(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(a,e,s){a.exports={card:"styles_card__3WJZI","card-back":"styles_card-back__2sAnw",left:"styles_left__3hqJH",right:"styles_right__3Vciy",center:"styles_center__LMhxQ","display-number":"styles_display-number__2teax",suit:"styles_suit__2iCz0","special-card":"styles_special-card__16u26"}},10:function(a,e,s){a.exports={"discard-pile":"styles_discard-pile__lx5pu"}},14:function(a,e,s){a.exports=s(25)},19:function(a,e,s){},25:function(a,e,s){"use strict";s.r(e);var t=s(0),l=s.n(t),u=s(6),i=s.n(u),n=(s(19),s(7)),c=s(8),d=s(11),r=s(9),o=s(12),p=[{value:1,displayValue:"A",suit:"spades"},{value:2,displayValue:"2",suit:"spades"},{value:3,displayValue:"3",suit:"spades"},{value:4,displayValue:"4",suit:"spades"},{value:5,displayValue:"5",suit:"spades"},{value:6,displayValue:"6",suit:"spades"},{value:7,displayValue:"7",suit:"spades"},{value:8,displayValue:"8",suit:"spades"},{value:9,displayValue:"9",suit:"spades"},{value:10,displayValue:"10",suit:"spades"},{value:11,displayValue:"J",suit:"spades"},{value:12,displayValue:"Q",suit:"spades"},{value:13,displayValue:"K",suit:"spades"},{value:1,displayValue:"A",suit:"clubs"},{value:2,displayValue:"2",suit:"clubs"},{value:3,displayValue:"3",suit:"clubs"},{value:4,displayValue:"4",suit:"clubs"},{value:5,displayValue:"5",suit:"clubs"},{value:6,displayValue:"6",suit:"clubs"},{value:7,displayValue:"7",suit:"clubs"},{value:8,displayValue:"8",suit:"clubs"},{value:9,displayValue:"9",suit:"clubs"},{value:10,displayValue:"10",suit:"clubs"},{value:11,displayValue:"J",suit:"clubs"},{value:12,displayValue:"Q",suit:"clubs"},{value:13,displayValue:"K",suit:"clubs"},{value:1,displayValue:"A",suit:"hearts"},{value:2,displayValue:"2",suit:"hearts"},{value:3,displayValue:"3",suit:"hearts"},{value:4,displayValue:"4",suit:"hearts"},{value:5,displayValue:"5",suit:"hearts"},{value:6,displayValue:"6",suit:"hearts"},{value:7,displayValue:"7",suit:"hearts"},{value:8,displayValue:"8",suit:"hearts"},{value:9,displayValue:"9",suit:"hearts"},{value:10,displayValue:"10",suit:"hearts"},{value:11,displayValue:"J",suit:"hearts"},{value:12,displayValue:"Q",suit:"hearts"},{value:13,displayValue:"K",suit:"hearts"},{value:1,displayValue:"A",suit:"diamonds"},{value:2,displayValue:"2",suit:"diamonds"},{value:3,displayValue:"3",suit:"diamonds"},{value:4,displayValue:"4",suit:"diamonds"},{value:5,displayValue:"5",suit:"diamonds"},{value:6,displayValue:"6",suit:"diamonds"},{value:7,displayValue:"7",suit:"diamonds"},{value:8,displayValue:"8",suit:"diamonds"},{value:9,displayValue:"9",suit:"diamonds"},{value:10,displayValue:"10",suit:"diamonds"},{value:11,displayValue:"J",suit:"diamonds"},{value:12,displayValue:"Q",suit:"diamonds"},{value:13,displayValue:"K",suit:"diamonds"}],v=s(4),y=s.n(v);function m(){return l.a.createElement("div",{className:y.a["empty-deck"]},"X")}function V(a){var e=a.cards,s=a.onDiscard;return e.length>0?l.a.createElement("div",{className:y.a.deck,onClick:s}):l.a.createElement(m,null)}var b=s(13),h=s(2);var f=s(1),_=s.n(f);function E(){return l.a.createElement("div",{className:_.a["card-back"]})}function k(a){var e=a.suit,s=a.displayValue,u=a.value,i=function(){var a=Object(t.useState)(!1),e=Object(h.a)(a,2),s=e[0],l=e[1],u=Object(t.useState)({x:0,y:0}),i=Object(h.a)(u,2),n=i[0],c=i[1],d=Object(t.useState)(null),r=Object(h.a)(d,2),o=r[0],p=r[1],v=Object(t.useState)(0),y=Object(h.a)(v,2),m=y[0],V=y[1],b=function(a){l(!1),V(0),a.stopPropagation(),a.preventDefault()},f=function(a){s&&(c({x:a.pageX-o.x,y:a.pageY-o.y}),a.stopPropagation(),a.preventDefault())};return Object(t.useEffect)(function(){return document.addEventListener("mousemove",f),document.addEventListener("mouseup",b),function(){document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",b)}},[s]),[{position:"absolute",left:n.x+"px",top:n.y+"px",zIndex:m},function(a){0===a.button&&(l(!0),V(1),p({x:a.pageX-n.x,y:a.pageY-n.y}),a.stopPropagation(),a.preventDefault())}]}(),n=Object(h.a)(i,2),c=n[0],d=n[1],r=Object(t.useState)(!0),o=Object(h.a)(r,2),p=o[0],v=o[1],y={hearts:"\u2665",diamonds:"\u2666",spades:"\u2660",clubs:"\u2663"},m=["diamonds","hearts"].includes(e)?"red":"black";return l.a.createElement("div",{className:_.a.card,style:Object(b.a)({color:m},c),onMouseDown:d,onDoubleClick:function(){v(!p)}},p?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.left},l.a.createElement("div",{className:_.a["display-number"]},"".concat(s))),l.a.createElement("div",{className:_.a.center},u<=10?Array.from(Array(u),function(a,s){return l.a.createElement("div",{key:a+e+s,className:_.a.suit,style:{width:"".concat(u<4?100:50,"%")}},y[e])}):l.a.createElement("div",{className:_.a["special-card"]},s)),l.a.createElement("div",{className:_.a.right},l.a.createElement("div",{className:_.a["display-number"]},"".concat(s)))):l.a.createElement(E,null))}var g=s(10),O=s.n(g);function j(a){var e=a.cards;return l.a.createElement("div",{className:O.a["discard-pile"]},e.map(function(a,e){var s=a.value+a.suit+e;return l.a.createElement(k,{key:s,displayValue:a.displayValue,value:a.value,suit:a.suit})}))}var w=s(3),x=s.n(w);var N=function(a){function e(){var a,s;Object(n.a)(this,e);for(var t=arguments.length,l=new Array(t),u=0;u<t;u++)l[u]=arguments[u];return(s=Object(d.a)(this,(a=Object(r.a)(e)).call.apply(a,[this].concat(l)))).state={discards:[],cards:function(a){for(var e=a.length-1;e>0;e--){var s=Math.floor(Math.random()*(e+1)),t=[a[s],a[e]];a[e]=t[0],a[s]=t[1]}return a}(p)},s.handleDiscard=function(){s.setState(function(a){return{discards:a.discards.concat(a.cards[a.cards.length-1]),cards:a.cards.slice(0,-1)}})},s}return Object(o.a)(e,a),Object(c.a)(e,[{key:"render",value:function(){return l.a.createElement("div",{className:x.a.app},l.a.createElement("div",{className:x.a.instructions},l.a.createElement("h3",null,"Instructions:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Click the deck to draw a card(s)"),l.a.createElement("li",null,"Click and drag a drawn card"),l.a.createElement("li",null,"Double click a card to flip it over"))),l.a.createElement("div",{className:x.a["deck-container"]},l.a.createElement(V,{cards:this.state.cards,onDiscard:this.handleDiscard}),l.a.createElement(j,{cards:this.state.discards})))}}]),e}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(a){a.unregister()})},3:function(a,e,s){a.exports={app:"App_app__3Fp9x","deck-container":"App_deck-container__Wt6Bt",instructions:"App_instructions__VqLyO"}},4:function(a,e,s){a.exports={deck:"styles_deck__Gy2PK","empty-deck":"styles_empty-deck__1Q2OI"}}},[[14,2,1]]]);
//# sourceMappingURL=main.dca81175.chunk.js.map