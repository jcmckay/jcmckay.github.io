(this.webpackJsonpkeyboard=this.webpackJsonpkeyboard||[]).push([[0],{12:function(e,t,n){e.exports=n(28)},17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(9),r=n.n(c),i=(n(17),n(3)),l=n(10),m=n(11),u=n(1),s=n.n(u),d=Object(a.createContext)({}),y=(d.Consumer,function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),c=n[0],r=n[1],l=Object(a.useState)(0),u=Object(i.a)(l,2),y=u[0],b=u[1];return o.a.createElement(d.Provider,{value:{captureNote:function(e){var t=(new Date).getTime()/1e3;0===c.length?(b(t),e.time=s.a.Time(0).toBarsBeatsSixteenths()):e.time=s.a.Time(t-y).toBarsBeatsSixteenths(),r([].concat(Object(m.a)(c),[e]))},captureStartTime:y,playbackNotes:c}},e.children)}),b=(n(19),function(e){var t=Object(a.useContext)(d),n=Object(a.useState)(),c=Object(i.a)(n,2),r=c[0],m=c[1],u=Object(a.useState)((new s.a.Synth).toMaster()),y=Object(i.a)(u,1)[0],b=e.color,k=e.note,T=e.style,f=function(){y.triggerAttack(k);var e=(new Date).getTime();m(e)},p=function(){y.triggerRelease();var e=E();t.captureNote({note:k,dur:e})},E=function(){return s.a.Time(((new Date).getTime()-r)/1e3).toNotation()};return l.isMobile?o.a.createElement("div",{className:"key ".concat(b),style:T,onTouchStart:f,onTouchEnd:p}):o.a.createElement("div",{className:"key ".concat(b),style:T,onMouseDown:f,onMouseUp:p})}),k=(n(20),function(e){return o.a.createElement("div",{className:"keyboard"},[{key:"C4"},{key:"C#4",color:"black",style:{left:"65px"}},{key:"D4"},{key:"Eb4",color:"black",style:{left:"200px"}},{key:"E4"},{key:"F4"},{key:"F#4",color:"black",style:{left:"432px"}},{key:"G4"},{key:"G#4",color:"black",style:{left:"551px"}},{key:"A4"},{key:"Bb4",color:"black",style:{left:"674px"}},{key:"B4"},{key:"C5"},{key:"C#5",color:"black",style:{left:"909px"}},{key:"D5"},{key:"Eb5",color:"black",style:{left:"1030px"}},{key:"E5"}].map((function(e){return o.a.createElement(b,{key:e.key,note:e.key,color:e.color,style:e.style})})))}),T=n(4),f=n(5),p=[{time:s.a.Time("0:0:0"),note:"D3",dur:"4n"},{time:s.a.Time("0:1:0"),note:"F3",dur:"8n."},{time:s.a.Time("0:1:3"),note:"D3",dur:"8n"},{time:s.a.Time("0:2:1"),note:"D3",dur:"16n"},{time:s.a.Time("0:2:2"),note:"G3",dur:"8n"},{time:s.a.Time("0:3:0"),note:"D3",dur:"8n"},{time:s.a.Time("0:3:2"),note:"C3",dur:"8n"},{time:s.a.Time("1:0:0"),note:"D3",dur:"4n"},{time:s.a.Time("1:1:0"),note:"A3",dur:"8n."},{time:s.a.Time("1:1:3"),note:"D3",dur:"8n"},{time:s.a.Time("1:2:1"),note:"D3",dur:"16n"},{time:s.a.Time("1:2:2"),note:"Bb3",dur:"8n"},{time:s.a.Time("1:3:0"),note:"A3",dur:"8n"},{time:s.a.Time("1:3:2"),note:"F3",dur:"8n"},{time:s.a.Time("2:0:0"),note:"D3",dur:"8n"},{time:s.a.Time("2:0:2"),note:"A3",dur:"8n"},{time:s.a.Time("2:1:0"),note:"D4",dur:"8n"},{time:s.a.Time("2:1:2"),note:"D3",dur:"16n"},{time:s.a.Time("2:1:3"),note:"C3",dur:"8n"},{time:s.a.Time("2:2:1"),note:"C3",dur:"16n"},{time:s.a.Time("2:2:2"),note:"A2",dur:"8n"},{time:s.a.Time("2:3:0"),note:"E3",dur:"8n"},{time:s.a.Time("2:3:2"),note:"D3",dur:"0:2:2"}],E=(n(26),function(e){var t=Object(a.useContext)(d),n=Object(a.useState)(),c=Object(i.a)(n,2),r=c[0],l=c[1],m=Object(a.useState)(),u=Object(i.a)(m,2),y=u[0],b=u[1],k=Object(a.useState)(p),E=Object(i.a)(k,2),v=E[0],g=E[1],j=Object(a.useState)((new s.a.Synth).toMaster()),O=Object(i.a)(j,1)[0];Object(a.useEffect)((function(){t.playbackNotes.length>0&&g(t.playbackNotes)}),[t.playbackNotes]),Object(a.useEffect)((function(){if(y&&y.length>0){y.start(0);var e=v[v.length-1];s.a.Transport.schedule((function(e){y.removeAll(),s.a.Transport.toggle(),l(!1)}),s.a.Time(e.time).toSeconds()+s.a.Time(e.dur).toSeconds()),s.a.Transport.toggle(),l(!0)}}),[y]);return o.a.createElement("div",{className:"controls"},o.a.createElement("div",null,r?o.a.createElement("div",{onClick:function(){y.removeAll(),s.a.Transport.toggle(),l(!1)}},o.a.createElement(T.a,{size:"lg",icon:f.c})):o.a.createElement("div",{onClick:function(){b(new s.a.Part((function(e,t){O.triggerAttackRelease(t.note,t.dur,e)}),v))}},o.a.createElement(T.a,{size:"lg",icon:f.b}))),o.a.createElement("div",{className:"record"},o.a.createElement(T.a,{size:"lg",color:"red",icon:f.a})))}),v=function(e){var t=Object(a.useContext)(d);return o.a.createElement("div",{className:"play-back-display"},t.playbackNotes.map((function(e,t){return o.a.createElement("div",{key:"note-".concat(e.note,"-").concat(t)},"Note: ".concat(e.note,", Duration: ").concat(e.dur,", Time: ").concat(e.time))})))},g=(n(27),function(){return o.a.createElement("div",{className:"App"},o.a.createElement(y,null,o.a.createElement(k,null),o.a.createElement(E,null),o.a.createElement(v,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[12,1,2]]]);
//# sourceMappingURL=main.8a2d4f86.chunk.js.map