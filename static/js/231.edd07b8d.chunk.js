"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[231],{6356:function(n,t,e){e.d(t,{z:function(){return o}});var r,i=e(168),o=e(4313).ZP.button(r||(r=(0,i.Z)(["\n  padding: 8px 16px;\n  font-size: ","px;\n  display: inline-block;\n  border: 1px solid ",";\n  border-radius: 4px;\n  background-color: ",";\n  color: ",";\n  font-weight: ",";\n  cursor: pointer;\n\n  transition: transform 200ms;\n\n  :active {\n    transform: translateY(2px);\n  }\n"])),(function(n){return n.theme.fontSizes[2]}),(function(n){return n.theme.colors.gray}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.fontWeights.heading}))},5009:function(n,t,e){e.d(t,{X:function(){return o}});var r,i=e(168),o=e(4313).ZP.p(r||(r=(0,i.Z)(["\n  margin-bottom: 16px;\n"])))},1730:function(n,t,e){e.d(t,{$:function(){return o}});var r,i=e(168),o=e(4313).ZP.section(r||(r=(0,i.Z)(["\n  padding: 32px;\n"])))},2231:function(n,t,e){e.r(t),e.d(t,{default:function(){return P}});var r,i,o,a,c=e(885),u=e(1730),s=e(2791),f=e(6731),p=e(470),d=e(6356),l=e(3969),h=e(168),m=e(4313),v=m.ZP.p(r||(r=(0,h.Z)(["\n  margin-bottom: 10px;\n  font-size: ","px;\n  font-weight: ",";\n"])),(function(n){return n.theme.fontSizes[4]}),(function(n){return n.theme.fontWeights.heading})),g=m.ZP.p(i||(i=(0,h.Z)(["\n  margin-bottom: 10px;\n  font-size: ","px;\n  font-weight: ",";\n"])),(function(n){return n.theme.fontSizes[2]}),(function(n){return n.theme.fontWeights.heading})),x=e(5009),Z=e(3386);function w(n){var t=n.movieInfo,e=t.posterUrl,r=t.title,i=t.releaseYear,o=t.userScore,a=t.genresList,c=t.overview;return(0,Z.BX)("div",{sx:{display:"flex",mt:24,mb:24,gap:24},children:[(0,Z.tZ)("div",{sx:{minWidth:"fit-content"},children:(0,Z.tZ)("img",{src:e,alt:"".concat(r," movie poster")})}),(0,Z.BX)("div",{sx:{maxWidth:800},children:[(0,Z.BX)(v,{children:[r," (",i,")"]}),(0,Z.BX)(g,{children:["User Score ",o,"%"]}),(0,Z.tZ)(g,{children:"Overview:"}),(0,Z.tZ)(x.X,{children:c}),(0,Z.tZ)(g,{children:"Genres:"}),(0,Z.tZ)(x.X,{children:a})]})]})}var b=m.ZP.ul(o||(o=(0,h.Z)(["\n  display: flex;\n  gap: 32px;\n  margin: 10px 0;\n"]))),j=(0,m.ZP)(f.OL)(a||(a=(0,h.Z)(["\n  color: inherit;\n  font-size: ","px;\n  font-weight: ",";\n  text-decoration: none;\n\n  &.active {\n    color: ",";\n  }\n"])),(function(n){return n.theme.fontSizes[3]}),(function(n){return n.theme.fontWeights.heading}),(function(n){return n.theme.colors.secondary})),k=e(184);function y(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("h2",{children:"Additional information:"}),(0,k.jsxs)(b,{children:[(0,k.jsx)("li",{children:(0,k.jsx)(j,{to:"cast",children:"Cast"})}),(0,k.jsx)("li",{children:(0,k.jsx)(j,{to:"reviews",children:"Review"})})]})]})}function P(){var n,t,e=(0,s.useState)({}),r=(0,c.Z)(e,2),i=r[0],o=r[1],a=(0,p.UO)().id,h=(0,p.TH)(),m=(0,s.useRef)(null!==(n=null===(t=h.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/");return(0,s.useEffect)((function(){var n=new AbortController;return l.t2(a,n).then(o).catch((function(n){return console.log("get movie info error - ",n)})),function(){n.abort()}}),[a]),(0,k.jsxs)(u.$,{children:[(0,k.jsx)(f.rU,{to:m.current,children:(0,k.jsx)(d.z,{type:"button",children:"Go back"})}),i.title&&(0,k.jsx)(w,{movieInfo:i}),(0,k.jsx)(y,{}),(0,k.jsx)(s.Suspense,{fallback:(0,k.jsx)("div",{children:"Loading subpage..."}),children:(0,k.jsx)(p.j3,{})})]})}},3969:function(n,t,e){e.d(t,{Df:function(){return p},M1:function(){return h},t2:function(){return l},tx:function(){return m},vw:function(){return d}});var r=e(8683),i=e(5861),o=e(4687),a=e.n(o),c=e(1044),u=e(157),s="https://image.tmdb.org/t/p/w300";c.ZP.defaults.baseURL="https://api.themoviedb.org/3";var f={api_key:"e8f4d647cde955cba1306001955cfd97"},p=function(){var n=(0,i.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/trending/movie/week",{params:f,signal:t.signal});case 2:return e=n.sent,n.abrupt("return",v(e.data.results));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,i.Z)(a().mark((function n(t,e){var i,o;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=(0,r.Z)((0,r.Z)({},f),{},{query:t}),n.next=3,c.ZP.get("/search/movie",{params:i,signal:e.signal});case 3:return o=n.sent,n.abrupt("return",v(o.data.results));case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),l=function(){var n=(0,i.Z)(a().mark((function n(t,e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(t),{params:f,signal:e.signal});case 2:return r=n.sent,n.abrupt("return",g(r.data));case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),h=function(){var n=(0,i.Z)(a().mark((function n(t,e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(t,"/credits"),{params:f,signal:e.signal});case 2:return r=n.sent,n.abrupt("return",x(r.data.cast));case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),m=function(){var n=(0,i.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(t,"/reviews"),{params:f});case 2:return e=n.sent,n.abrupt("return",Z(e.data.results));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(n){return n.map((function(n){return{id:n.id,title:n.title}}))},g=function(n){var t=n.poster_path,e=n.title,r=n.release_date,i=n.vote_average,o=n.genres,a=n.overview,c=o.map((function(n){return n.name})).join(", "),f=Math.floor(10*i),p=parseInt(r);return{posterUrl:t?s+t:u,title:e,releaseYear:p,userScore:f,genresList:c,overview:a}},x=function(n){return n.map((function(n){var t=n.id,e=n.name,r=n.character,i=n.profile_path;return{id:t,name:e,character:r,fotoURL:i?s+i:u}}))},Z=function(n){return n.map((function(n){return{id:n.id,author:n.author,content:n.content}}))}},157:function(n,t,e){n.exports=e.p+"static/media/no-photo.ff6b45f84f644dc5106a.jpg"}}]);
//# sourceMappingURL=231.edd07b8d.chunk.js.map