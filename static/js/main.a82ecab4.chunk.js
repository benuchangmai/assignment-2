(this["webpackJsonpassignment-react"]=this["webpackJsonpassignment-react"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),i=n.n(c),o=(n(12),n(1)),l=n(2),u=n(4),s=n(3),b=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).addStyling=function(){return e.props.tab.id==e.props.activeTab?{backgroundColor:"gray"}:{backgroundColor:"white"}},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"tab",style:this.addStyling(),onClick:this.props.changeTab.bind(this,this.props.tab.id)},r.a.createElement("h2",null,this.props.tab.title))}}]),n}(a.Component),h=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return this.props.tabs.map((function(t){return r.a.createElement(b,{tab:t,changeTab:e.props.changeTab,activeTab:e.props.activeTab})}))}}]),n}(a.Component),p=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Home"))}}]),n}(a.Component),m=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Images"))}}]),n}(a.Component),v=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Videos"))}}]),n}(a.Component),d=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Projects"))}}]),n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).displayContent=function(){var t=e.props.activeTab;return 1==t?r.a.createElement(p,null):2==t?r.a.createElement(m,null):3==t?r.a.createElement(v,null):r.a.createElement(d,null)},e}return Object(l.a)(n,[{key:"render",value:function(){return this.displayContent()}}]),n}(a.Component),j=(n(13),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={activeTab:1},e.changeTab=function(t){e.setState({activeTab:t})},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"nav-bar"},r.a.createElement(h,{tabs:[{id:1,title:"Home"},{id:2,title:"Images"},{id:3,title:"Videos"},{id:4,title:"Projects"}],changeTab:this.changeTab,activeTab:this.state.activeTab})),r.a.createElement("div",{className:"main-body"},r.a.createElement(f,{activeTab:this.state.activeTab})))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.a82ecab4.chunk.js.map