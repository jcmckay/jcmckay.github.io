(this.webpackJsonpkeyboard=this.webpackJsonpkeyboard||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(3),r=n.n(c),l=(n(10),n(1)),s=(n(12),function(e){var t=e.color,n=e.onKeyPress,o=e.onKeyRelease,c=e.style;return l.isMobile||l.MobileView?a.a.createElement("div",{className:"key ".concat(t),style:c,onTouchStart:n,onTouchEnd:o}):a.a.createElement("div",{className:"key ".concat(t),style:c,onMouseDown:n,onMouseUp:o})}),i=n(4),y=n.n(i),k=(n(13),function(e){var t=(new y.a.Synth).toMaster(),n=function(){t.triggerRelease()};return a.a.createElement("div",{className:"keyboard"},[{key:"C4"},{key:"C#4",color:"black",style:{left:"65px"}},{key:"D4"},{key:"Eb4",color:"black",style:{left:"200px"}},{key:"E4"},{key:"F4"},{key:"F#4",color:"black",style:{left:"440px"}},{key:"G4"},{key:"G#4",color:"black",style:{left:"570px"}},{key:"A4"},{key:"Bb4",color:"black",style:{left:"700px"}},{key:"B4"},{key:"C5"}].map((function(e){return a.a.createElement(s,{key:e.key,color:e.color,style:e.style,onKeyPress:function(){return function(e){t.triggerAttack(e)}(e.key)},onKeyRelease:n})})))}),u=(n(14),function(){return a.a.createElement("div",{className:"App"},a.a.createElement(k,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.b8510c54.chunk.js.map