(this["webpackJsonpgithub-finder"]=this["webpackJsonpgithub-finder"]||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),s=n.n(r),l=(n(11),n(1)),i=n.n(l),o=n(5),u=n(2),b=(n(13),Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).client_id),m=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).secret_key,h="https://api.github.com/users/";var p=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(""),l=Object(u.a)(s,2),p=l[0],f=l[1];return Object(a.useEffect)((function(){var e=document.getElementById("alert"),t=document.getElementById("profile");function n(){return(n=Object(o.a)(i.a.mark((function n(){var a,c;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""===p){n.next=14;break}return n.next=3,fetch(h+String(p)+"?client_id=".concat(b,"&client_secret=").concat(m));case 3:if("OK"!==(a=n.sent).statusText){n.next=11;break}return n.next=7,a.json();case 7:c=n.sent,t.innerHTML='\n              <article class="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">\n               <div class="tc">\n              <img src='.concat(c.avatar_url,' class="br-100 h3 w3 dib" title=\'\' />\n              <h1  class="f3 user_header">').concat(c.login,'</h1>\n              <hr class="mw5 bb bw1 b--black-10" />\n              <h5 class="lh-copy measure center f6 black-70"> ').concat(c.bio,' </h5>\n            </div>\n            <h5 class="lh-copy measure center f5 black">Public Repos : ').concat(c.public_repos,' </h5>\n            <h5 class="lh-copy measure center f5 black-70"> Followers : ').concat(c.followers,' </h5>\n            <h5 class="lh-copy measure center f5 black-70"> Following : ').concat(c.following,' </h5>\n            <h5 class=" lh-copy measure center f5 black-70"> ').concat(c.bio,' </h5>\n            <a class="lh-copy center btn-know-more" href=').concat(c.html_url,"> Visit Profile  </a>\n          </article>"),n.next=12;break;case 11:"Not Found"===a.statusText?e.innerHTML='\n      <div class="flex items-center justify-center pa2 white">\n      <span class="lh-title ml3 f3">User not found</span>\n      </div>\n':e.innerHTML='\n    <div class="flex items-center justify-center pa2 white">\n    <span class="lh-title ml3 f2">Please check you internet connection!</span>\n    </div>\n';case 12:n.next=15;break;case 14:t.innerHTML="";case 15:case"end":return n.stop()}}),n)})))).apply(this,arguments)}t.innerHTML="",e.innerHTML="",function(){n.apply(this,arguments)}()}),[p]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"App_heading"},c.a.createElement("h1",null,"Github Finder")),c.a.createElement("div",{id:"alert"}),c.a.createElement("div",{className:"pa4-l"},c.a.createElement("form",{className:" mw7 center pa4 br2-ns "},c.a.createElement("fieldset",{className:"cf bn ma0 pa0"},c.a.createElement("div",{className:"cf"},c.a.createElement("input",{className:"f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns",placeholder:"Enter username",type:"text",name:"username",id:"username",onChange:function(e){return r(e.target.value)},value:n}),c.a.createElement("input",{className:"f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns",type:"submit",value:"Search",onClick:function(e){e.preventDefault(),f(n)}}))))),c.a.createElement("div",{id:"profile"}))};s.a.render(c.a.createElement(p,null),document.getElementById("root"))},6:function(e,t,n){e.exports=n(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.fddc0a39.chunk.js.map