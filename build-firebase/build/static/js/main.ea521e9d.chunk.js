(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{117:function(e,t,n){},121:function(e,t,n){},123:function(e,t,n){},220:function(e,t,n){},221:function(e,t,n){},223:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n.n(c),s=n(9),o=n.n(s),i=(n(117),n(95)),l=n(96),d=n(103),j=n(101),u=n(273),h=n(11),b=n(253),f=n(256),p=n(258),O=n.p+"static/media/download.5610a71b.svg",x=n.p+"static/media/close.3d085550.svg",m=Object(b.a)((function(e){return{toolbar:{display:"flex",backgroundColor:"#ffffff",paddingLeft:4,alignItems:"center"},content:{flexGrow:1,cursor:"pointer","& img":{width:40,height:36}},image:{width:20,padding:14,cursor:"pointer"},appBar:{top:"auto",bottom:0},grow:{flexGrow:1}}}));var v=function(){var e=r.a.useState(!1),t=Object(h.a)(e,2),n=t[0],c=t[1],s=r.a.useState(null),o=Object(h.a)(s,2),i=o[0],l=o[1],d=m();return window.onload=function(){window.addEventListener("beforeinstallprompt",(function(e){if(e.preventDefault(),window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches||!0===window.navigator.standalone)return console.log("Already install"),!1;l(e),c(!0)}))},Object(a.jsx)(r.a.Fragment,{children:n&&Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(f.a,{position:"fixed",variant:"elevation",color:"transparent",className:d.appBar,children:Object(a.jsxs)(p.a,{className:d.toolbar,children:[Object(a.jsx)("div",{onClick:function(e){i?(i.prompt(),i.userChoice.then((function(e){"accepted"===e.outcome?console.log("User accepted the install prompt"):console.log("User dismissed the install prompt")}))):console.log("No eligible to install")},className:d.content,children:Object(a.jsxs)("div",{className:d.toolbar,children:[Object(a.jsx)("img",{alt:"download",src:O}),Object(a.jsx)("p",{children:"Install covid tracker"})]})}),Object(a.jsx)("img",{onClick:function(){c(!1)},alt:"close",src:x,className:d.image})]})})]})})},g=(n(121),n(20)),y=n.n(g),w=n(40),C=n(268),N=n(269),k=n(272),S=n(224),_=n(259),I=n(260),L=n(265),M=n(26);n(123);var T=function(e){var t=e.width,n=e.title,c=e.cases,r=e.total,s=e.active,o=e.isRed,i=Object(M.a)(e,["width","title","cases","total","active","isRed"]),l="xs"===t?{fontSize:"1.45rem"}:null;return Object(a.jsx)(_.a,{onClick:i.onClick,className:"infoBox ".concat(s&&"infoBox--selected"," ").concat(o&&"infoBox--red"),children:Object(a.jsxs)(I.a,{children:[Object(a.jsx)(S.a,{color:"textSecondary",gutterBottom:!0,children:n}),Object(a.jsx)("h2",{style:l,className:"infoBox__cases ".concat(!o&&"infoBox__cases--green"),children:c}),Object(a.jsxs)(S.a,{className:"infoBox__total",color:"textSecondary",children:[r," Total"]})]})})},D=n(41),R=n(13),B=n.n(R),F=n(102),A=n(274),E=n(261),P={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:300},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:400},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:2e3}},z=function(e){return P[e].half_op},U=function(e){return P[e].hex},W=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases",n=Object(F.a)(e);return n.sort((function(e,n){return e[t]>n[t]?-1:1})),n},Y=function(e){return e?"+".concat(B()(e).format("0.0a")):"+0"},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return Object(a.jsx)(A.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:P[t].hex,fillColor:P[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*P[t].multiplier,children:Object(a.jsx)(E.a,{children:Object(a.jsxs)("div",{className:"info-container",children:[Object(a.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(a.jsx)("div",{className:"info-name",children:e.country}),Object(a.jsxs)("div",{className:"info-confirmed",children:["Cases: ",B()(e.cases).format("0,0")]}),Object(a.jsxs)("div",{className:"info-recovered",children:["Recovered: ",B()(e.recovered).format("0,0")]}),Object(a.jsxs)("div",{className:"info-deaths",children:["Deaths: ",B()(e.deaths).format("0,0")]})]})})},t+""+e.country)}))},J=function(e){var t=new Date(parseInt(e.toString(),10)).toString("MM/dd/yy HH:mm:ss");return t.substr(0,t.indexOf("GMT"))},H=function(e,t){var n,a=[];for(var c in e[t]){if(n){var r={x:c,y:Math.abs(e[t][c]-n)};5e6!==r.y&&a.push(r)}e[t][c]-n!==5e6&&(n=e[t][c])}return a},q=n(262),V=n(271),Z=n(263),K=n(264),Q=n(266),X=n.p+"static/media/fullscreen.9a7f3595.svg",$={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return B()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,n){return B()(e).format("0a")}}}]}};var ee=function(e){var t=e.data,n=e.country,c=r.a.useState(!1),s=Object(h.a)(c,2),o=s[0],i=s[1],l=function(){i(!1)};return Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsx)(q.a,{style:{float:"right"},onClick:function(){i(!0)},children:Object(a.jsx)("img",{style:{width:18},src:X,alt:"fullscreen"})}),Object(a.jsxs)(V.a,{fullScreen:!0,open:o,onClose:l,children:[Object(a.jsxs)(Z.a,{children:[Object(a.jsx)(K.a,{style:{marginRight:-98,width:"100%"},children:n}),Object(a.jsx)(q.a,{onClick:l,children:Object(a.jsx)("img",{style:{width:18},src:x,alt:"close"})})]}),Object(a.jsx)(L.a,{}),Object(a.jsx)(Q.a,{children:Object(a.jsx)("div",{children:t&&Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsxs)(_.a,{variant:"outlined",style:{margin:10},children:[Object(a.jsx)(I.a,{children:Object(a.jsx)("div",{className:"app__information",children:Object(a.jsx)("h3",{style:{height:"min-content",alignSelf:"center",marginLeft:"1rem"},children:"Cases"})})}),Object(a.jsx)(L.a,{}),Object(a.jsx)("br",{}),Object(a.jsx)(D.Line,{data:{datasets:[{backgroundColor:z("cases"),borderColor:U("cases"),data:H(t,"cases")}]},options:$})]}),Object(a.jsxs)(_.a,{variant:"outlined",style:{margin:10},children:[Object(a.jsx)(I.a,{children:Object(a.jsx)("div",{className:"app__information",children:Object(a.jsx)("h3",{style:{height:"min-content",alignSelf:"center",marginLeft:"1rem"},children:"Recovered"})})}),Object(a.jsx)(L.a,{}),Object(a.jsx)("br",{}),Object(a.jsx)(D.Line,{data:{datasets:[{backgroundColor:z("recovered"),borderColor:U("recovered"),data:H(t,"recovered")}]},options:$})]}),Object(a.jsxs)(_.a,{variant:"outlined",style:{margin:10},children:[Object(a.jsx)(I.a,{children:Object(a.jsx)("div",{className:"app__information",children:Object(a.jsx)("h3",{style:{height:"min-content",alignSelf:"center",marginLeft:"1rem"},children:"Deaths"})})}),Object(a.jsx)(L.a,{}),Object(a.jsx)("br",{}),Object(a.jsx)(D.Line,{data:{datasets:[{backgroundColor:z("deaths"),borderColor:U("deaths"),data:H(t,"deaths")}]},options:$})]})]})})})]})]})},te={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return B()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,n){return B()(e).format("0a")}}}]}};var ne=function(e){var t=e.casesType,n=e.country,s=e.countryName,o=Object(c.useState)({}),i=Object(h.a)(o,2),l=i[0],d=i[1],j=Object(c.useState)(""),u=Object(h.a)(j,2),b=u[0],f=u[1],p=Object(c.useState)({}),O=Object(h.a)(p,2),x=O[0],m=O[1];return Object(c.useEffect)((function(){if(b!==n){(function(){var e=Object(w.a)(y.a.mark((function e(){var c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n&&"worldwide"!==n?"https://disease.sh/v3/covid-19/historical/".concat(n,"?lastdays=120"):"https://disease.sh/v3/covid-19/historical/all?lastdays=120",e.next=3,fetch(c).then((function(e){return e.json()})).then((function(e){n&&"worldwide"!==n&&(e=e.timeline),m(e),f(n);var a=H(e,t);d(a)})).catch((function(e){return Object(a.jsx)("p",{children:"No data found"})}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}else{var e=H(x,t);d(e)}}),[n]),Object(c.useEffect)((function(){if(b!==n){(function(){var e=Object(w.a)(y.a.mark((function e(){var c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n&&"worldwide"!==n?"https://disease.sh/v3/covid-19/historical/".concat(n,"?lastdays=120"):"https://disease.sh/v3/covid-19/historical/all?lastdays=120",e.next=3,fetch(c).then((function(e){return e.json()})).then((function(e){n&&"worldwide"!==n&&(e=e.timeline),m(e),f(n);var a=H(e,t);d(a)})).catch((function(e){return Object(a.jsx)("p",{children:"No data found"})}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}else{var e=H(x,t);d(e)}}),[t]),Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsx)("div",{className:"app_graph",children:(null===l||void 0===l?void 0:l.length)>0&&Object(a.jsx)(D.Line,{data:{datasets:[{backgroundColor:z(t),borderColor:U(t),data:l}]},options:te})}),Object(a.jsx)(ee,{country:s,data:x})]})};n(220);var ae=function(e){var t=e.countries,n=e.casesType,c=e.setCountryChange;return Object(a.jsx)("div",{className:"table",children:t.map((function(e){return Object(a.jsxs)("tr",{onClick:function(){return t=e.countryInfo.iso2,console.log("table clicked",t),void c(t);var t},className:"table-row",children:[Object(a.jsx)("td",{children:Object(a.jsxs)("div",{style:{display:"flex"},children:[Object(a.jsx)("img",{src:e.countryInfo.flag,className:"table-img",alt:e.country}),Object(a.jsx)("p",{children:e.country})]})}),Object(a.jsx)("td",{children:Object(a.jsx)("strong",{children:B()(e[n]).format("0,0")})})]},e.country)}))})},ce=n(267),re=n(275);n(221);var se=function(e){var t=e.countries,n=e.casesType,c=e.center,s=e.zoom,o=r.a.useState(c),i=Object(h.a)(o,2),l=i[0],d=i[1],j=r.a.useState(s),u=Object(h.a)(j,2),b=u[0],f=u[1];return r.a.useEffect((function(){d(c),34.80746===c[0]?f(3):f(4)}),[c]),Object(a.jsx)("div",{className:"map",children:Object(a.jsxs)(ce.a,{geoJSON:{color:"#000000"},scrollWheelZoom:!1,center:l,zoom:b,children:[Object(a.jsx)(re.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),G(t,n)]})},l)};n(222);var oe=function(e){var t=e.caseProp,n=e.width,s=Object(c.useState)("worldwide"),o=Object(h.a)(s,2),i=o[0],l=o[1],d=Object(c.useState)({}),j=Object(h.a)(d,2),u=j[0],b=j[1],f=Object(c.useState)([]),p=Object(h.a)(f,2),O=p[0],x=p[1],m=Object(c.useState)([]),v=Object(h.a)(m,2),g=v[0],M=v[1],D=Object(c.useState)([]),R=Object(h.a)(D,2),F=R[0],A=R[1],E=Object(c.useState)(t),P=Object(h.a)(E,2),z=P[0],U=P[1],G=Object(c.useState)([34.80746,-40.4796]),H=Object(h.a)(G,2),q=H[0],V=H[1],Z=Object(c.useState)("xs"===n?2:3),K=Object(h.a)(Z,2),Q=K[0],X=K[1];Object(c.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){b(e)}))}),[]),Object(c.useEffect)((function(){(function(){var e=Object(w.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),n=W(e);x(t),M(e),A(n)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var $=function(){var e=Object(w.a)(y.a.mark((function e(t){var n,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target&&t.target.value?t.target.value:t,l(n),a="worldwide"===n?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(n),e.next=5,fetch(a).then((function(e){return e.json()})).then((function(e){b(e);try{e.countryInfo.lat?V([e.countryInfo.lat,e.countryInfo.long]):V([34.80746,-40.4796])}catch(t){V([34.80746,-40.4796])}X("worldwide"===i?3:4)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsxs)("div",{className:"app__left",children:[Object(a.jsxs)("div",{className:"app__header",children:[Object(a.jsx)("h1",{children:"COVID-19 Tracker"}),Object(a.jsx)(C.a,{className:"app__dropdown",children:Object(a.jsxs)(N.a,{variant:"outlined",value:i,onChange:$,children:[Object(a.jsx)(k.a,{value:"worldwide",children:"Worldwide"}),O.map((function(e){return Object(a.jsx)(k.a,{value:e.value,children:e.name},e.value)}))]})})]}),Object(a.jsxs)("div",{className:"app__stats",children:[Object(a.jsx)(T,{onClick:function(e){return U("cases")},title:"Coronavirus Cases",isRed:!0,width:n,active:"cases"===z,cases:Y(u.todayCases),total:B()(u.cases).format("0,0")}),Object(a.jsx)(T,{onClick:function(e){return U("recovered")},title:"Recovered",width:n,active:"recovered"===z,cases:Y(u.todayRecovered),total:B()(u.recovered).format("0,0")}),Object(a.jsx)(T,{onClick:function(e){return U("deaths")},title:"Deaths",isRed:!0,width:n,active:"deaths"===z,cases:Y(u.todayDeaths),total:B()(u.deaths).format("0,0")})]}),u&&u.updated&&Object(a.jsx)("div",{children:Object(a.jsxs)(S.a,{style:{width:"fit-content",float:"right",marginTop:8},color:"textSecondary",children:["Last updated "," "+J(u.updated)]})}),Object(a.jsx)(se,{countries:g,casesType:z,center:q,zoom:Q}),"worldwide"!==i&&u.countryInfo&&Object(a.jsxs)(_.a,{style:{marginTop:"1rem",marginBottom:"1rem"},children:[Object(a.jsx)(I.a,{children:Object(a.jsxs)("div",{className:"app__information",style:{display:"flex"},children:[Object(a.jsx)("img",{style:{height:39,placeSelf:"center"},src:u.countryInfo.flag,alt:u.country}),Object(a.jsxs)("h3",{style:{height:"min-content",alignSelf:"center",marginLeft:"1rem"},children:[u.country," "," "+z]})]})}),Object(a.jsx)(L.a,{}),Object(a.jsx)("br",{}),Object(a.jsx)(ne,{classname:"app_graph",country:i,casesType:z,countryName:u.country})]})]}),"xs"===n&&Object(a.jsx)("br",{}),Object(a.jsx)(_.a,{className:"app__right",children:Object(a.jsx)(I.a,{children:Object(a.jsxs)("div",{className:"app__information",children:[Object(a.jsxs)("h3",{children:["Live ",z," by country"]}),Object(a.jsx)(ae,{setCountryChange:$,casesType:z,countries:F}),Object(a.jsxs)("h3",{children:["Worldwide new ",z]}),Object(a.jsx)(ne,{casesType:z,countryName:"worldwide"===i?"Worldwide":u.country})]})})})]})},ie=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).types=["cases","recovered","deaths"],e.state={type:e.types.includes(new URLSearchParams(window.location.search).get("type"))?new URLSearchParams(window.location.search).get("type"):"cases"},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)(oe,{caseProp:this.state.type,width:this.props.width}),"xs"===this.props.width&&Object(a.jsx)(v,{})]})}}]),n}(c.Component),le=Object(u.a)()(ie),de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,277)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(le,{})}),document.getElementById("root")),de()}},[[223,1,2]]]);