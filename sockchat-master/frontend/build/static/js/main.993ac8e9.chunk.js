(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,n){e.exports=n(69)},36:function(e,t,n){},65:function(e,t){},69:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),c=n(28),a=n.n(c),u=(n(36),n(12)),i=n(29),s=n.n(i),l=n(30),m=n.n(l),f=function(){var e=Object(o.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(o.useState)([]),i=Object(u.a)(a,2),l=i[0],f=i[1],d=Object(o.useRef)();return Object(o.useEffect)(function(){d.current=s()(window.location.host,{transports:["websocket"]}),d.current.on("messages",function(e){window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"}),f(function(t){return t.concat(e)}),document.querySelector("form").scrollIntoView(!1)})},[]),Object(o.useEffect)(function(){var e=function(){var e=l.length?l[l.length-1].id:null;d.current.emit("getMessages",e)};return d.current.on("connect",e),function(){return d.current.removeListener("connect",e)}},[l]),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=n.trim();t&&(d.current.emit("messages",t),c(""),document.querySelector("form").scrollIntoView(!1))}},l.map(function(e){var t=e.id,n=e.text,o=e.createdAt;return r.a.createElement("div",{className:"message",key:t},r.a.createElement("div",null,n,r.a.createElement("span",{className:"timestamp"},m()(o).format("hh:mm"))))}),r.a.createElement("input",{value:n,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0438 Enter",onChange:function(e){return c(e.target.value)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.993ac8e9.chunk.js.map