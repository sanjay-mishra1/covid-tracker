(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{139:function(e,t,a){},165:function(e,t,a){},169:function(e,t,a){},171:function(e,t,a){},267:function(e,t,a){},290:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),r=a.n(c),s=a(13),i=a.n(s),o=(a(165),a(57)),l=a(58),d=a(63),u=a(62),j=a(359),b=a(7),h=a(324),f=a(326),p=a(327),m=a.p+"static/media/download.5610a71b.svg",x=a.p+"static/media/close.3d085550.svg",O=Object(h.a)((function(e){return{toolbar:{display:"flex",backgroundColor:"#ffffff",paddingLeft:4,alignItems:"center"},content:{flexGrow:1,cursor:"pointer","& img":{width:40,height:36}},image:{width:20,padding:14,cursor:"pointer"},appBar:{top:"auto",bottom:0},grow:{flexGrow:1}}}));var v=function(){var e=r.a.useState(!1),t=Object(b.a)(e,2),a=t[0],c=t[1],s=r.a.useState(null),i=Object(b.a)(s,2),o=i[0],l=i[1],d=O();return window.onload=function(){window.addEventListener("beforeinstallprompt",(function(e){if(e.preventDefault(),window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches||!0===window.navigator.standalone)return console.log("Already install"),!1;l(e),c(!0)}))},Object(n.jsx)(r.a.Fragment,{children:a&&Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(f.a,{position:"fixed",variant:"elevation",color:"transparent",className:d.appBar,children:Object(n.jsxs)(p.a,{className:d.toolbar,children:[Object(n.jsx)("div",{onClick:function(e){o?(o.prompt(),o.userChoice.then((function(e){"accepted"===e.outcome&&c(!1)}))):console.log("No eligible to install")},className:d.content,children:Object(n.jsxs)("div",{className:d.toolbar,children:[Object(n.jsx)("img",{alt:"download",src:m}),Object(n.jsx)("p",{children:"Install covid tracker"})]})}),Object(n.jsx)("img",{onClick:function(){c(!1)},alt:"close",src:x,className:d.image})]})})]})})},y=(a(169),a(15)),g=a.n(y),w=a(22),C=a(78),N=a(328),S=a(329),k=a(41);a(171);var T=function(e){var t=e.width,a=e.title,c=e.cases,r=e.total,s=e.active,i=e.isRed,o=Object(k.a)(e,["width","title","cases","total","active","isRed"]),l="xs"===t?{fontSize:"1.45rem"}:null;return Object(n.jsx)(N.a,{onClick:o.onClick,className:"infoBox ".concat(s&&"infoBox--selected"," ").concat(i&&"infoBox--red"),children:Object(n.jsxs)(S.a,{children:[Object(n.jsx)(C.a,{color:"textSecondary",gutterBottom:!0,children:a}),Object(n.jsx)("h2",{style:l,className:"infoBox__cases ".concat(!i&&"infoBox__cases--green"),children:c}),Object(n.jsxs)(C.a,{className:"infoBox__total",color:"textSecondary",children:[r," Total"]})]})})},_=a(31),R=a(9),E=a.n(R),I=a(53),D=a(360),L=a(330),A="#0095ff",F={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:300},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:400},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:2e3}},M=function(e){return F[e].half_op},B=function(e){return F[e].hex},P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases",a=Object(I.a)(e);return a.sort((function(e,a){return e[t]>a[t]?-1:1})),a},U=function(e){return e?"+".concat(E()(e).format("0.0a")):"+0"},W=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases",a=arguments.length>2?arguments[2]:void 0;return e.map((function(e){return Object(n.jsx)(D.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:a===e.countryInfo.iso2?A:F[t].hex,fillColor:F[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*F[t].multiplier,children:Object(n.jsx)(L.a,{children:Object(n.jsxs)("div",{className:"info-container",children:[Object(n.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(n.jsx)("div",{className:"info-name",children:e.country}),Object(n.jsxs)("div",{className:"info-confirmed",children:["Cases: ",E()(e.cases).format("0,0")]}),Object(n.jsxs)("div",{className:"info-recovered",children:["Recovered: ",E()(e.recovered).format("0,0")]}),Object(n.jsxs)("div",{className:"info-deaths",children:["Deaths: ",E()(e.deaths).format("0,0")]})]})})},t+""+e.country)}))},z=function(e){var t=new Date(parseInt(e.toString(),10)).toString("MM/dd/yy HH:mm:ss");return t.substr(0,t.indexOf("GMT"))},H=function(e,t,a){var n={};"default"===t?n.default=e:n=e;var c,r=[];for(var s in n[t]){if(c){var i=Math.abs(n[t][s]-c),o={x:s,y:i};(i<=1e6||a)&&r.push(o)}c=n[t][s]}return r},Y=a(331),G=a(332),V=a(356),q=a(333),J=a.p+"static/media/fullscreen.9a7f3595.svg",K=a.p+"static/media/download_icon.4fc10be1.svg",Z=["January","February","March","April","May","June","July","August","Septembar","Octobar","November","December"],$=function(e){var t=e.split("/");return Z[t[0]-1]+" 20"+t[2]};var Q=function(e){var t=e.data,a=e.caseType,c=e.countryName,s=e.id,i=e.type,o=void 0===i?"default":i;return Object(n.jsx)(r.a.Fragment,{children:t&&Object.keys(t).length>0?Object(n.jsxs)("div",{children:[Object(n.jsx)(_.HorizontalBar,{options:{tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return E()(e.value).format("0,0")}}}},data:function(){try{var e,n={};for(var c in t[a])if(e){var r=$(c),s=t[a][c]-e;n[r]=n[r]?n[r]+s:s,e=t[a][c]}else e=t[a][c];return{labels:Object.keys(n),datasets:[{label:a,backgroundColor:M(a),borderColor:B(a),borderWidth:1,hoverBackgroundColor:M(a),hoverBorderColor:B(a),data:Object.values(n)}]}}catch(i){}}(),id:s}),"default"===o&&Object(n.jsxs)(r.a.Fragment,{children:[" ",Object(n.jsx)(Y.a,{onClick:function(){var e=document.createElement("a");e.download=c+"covid-19 ",e.href=document.getElementById(s).toDataURL(),e.click()},children:Object(n.jsx)("img",{style:{width:18},src:K,alt:"download"})}),Object(n.jsx)(re,{data:t,type:"custom-bar",id:"".concat(s,"-full"),country:c})]})]}):Object(n.jsx)("p",{className:"error-message",children:"No data found"})})},X=a(47),ee=a(116),te=a.n(ee);var ae=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).chartRef=r.a.createRef(),n}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(){this.myChart.data.labels=this.props.data.map((function(e){return e.label})),this.myChart.data.datasets[0].data=this.props.data.map((function(e){return e.value})),this.myChart.update()}},{key:"componentDidMount",value:function(){var e=this.props.data;this.myChart=new te.a(this.chartRef.current,{type:"doughnut",options:{tooltips:{mode:"point",intersect:!1,callbacks:{label:function(t,a){return" "+E()(e[t.index].value).format("+0,0")}}}},data:{labels:this.props.data.map((function(e){return e.label})),datasets:[{data:this.props.data.map((function(e){return e.value})),backgroundColor:this.props.colors}]}})}},{key:"render",value:function(){return Object(n.jsx)("canvas",{id:this.props.id,ref:this.chartRef})}}]),a}(r.a.Component),ne=function(e){var t=e.pieData,a=e.countryName,c=(e.country,e.id),s=t.title?t:{id:c,data:[{label:"Active",value:t[0]},{label:"Deaths",value:t[1]},{label:"Recovered",value:t[2]},{label:"Critical",value:t[3]}],title:["Active","Deaths","Recovered","Critical"],colors:["rgb(204, 16, 52)","rgb(251, 68, 67)","rgb(125, 215, 29)","#ffeb3b"]};return Object(n.jsx)(r.a.Fragment,{children:Object(n.jsx)("div",{className:"app_graph",children:Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)("br",{}),Object(n.jsx)(ae,Object(X.a)({},s)),!t.title&&Object(n.jsxs)(r.a.Fragment,{children:[" ",Object(n.jsx)(Y.a,{onClick:function(){var e=document.createElement("a");e.download=a+"covid-19 ",e.href=document.getElementById(c).toDataURL(),e.click()},children:Object(n.jsx)("img",{style:{width:18},src:K,alt:"download"})}),Object(n.jsx)(re,{data:s,cardTitle:"Covid overall status",type:"custom-pie",country:a})]})]})})})},ce={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return E()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return E()(e).format("0a")}}}]}};var re=function(e){var t=e.data,a=e.country,c=e.id,s=e.type,i=void 0===s?"default":s,o=e.defaultColorType,l=void 0===o?"cases":o,d=e.cardTitle,u=r.a.useState(!1),j=Object(b.a)(u,2),h=j[0],f=j[1],p=function(){f(!1)},m=function(e){var t,n=document.createElement("a");n.download=(t=e,c.includes("global")?"worldwide "+t:("worldwide"===a?"global ":a)+" "+t),n.href=document.getElementById(c+"-"+e).toDataURL(),n.click()},O=function(e,t){return Object(n.jsxs)(N.a,{variant:"outlined",style:{margin:10,maxHeight:"70%"},children:[Object(n.jsx)(S.a,{style:{padding:0},children:Object(n.jsxs)("div",{className:"app__information graph-head",children:[Object(n.jsxs)("h3",{style:{height:"min-content",alignSelf:"center",marginLeft:"1rem",flex:1.9},children:[d,e.substring(0,1).toUpperCase()+e.substring(1)]}),Object(n.jsx)(Y.a,{style:{height:40},onClick:function(){return m(e)},children:Object(n.jsx)("img",{style:{width:18},src:K,alt:"download"})})]})}),Object(n.jsx)(G.a,{}),Object(n.jsx)("br",{}),t]},e)},v=["cases","recovered","deaths"];return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(Y.a,{style:{float:"right"},onClick:function(){f(!0)},children:Object(n.jsx)("img",{style:{width:18},src:J,alt:"fullscreen"})}),Object(n.jsxs)(V.a,{fullScreen:!0,open:h,onClose:p,children:[Object(n.jsxs)("div",{style:{display:"flex"},children:[Object(n.jsx)("p",{style:{placeSelf:"center",flex:"0.9 100%",margin:16,fontSize:"x-large"},children:a}),Object(n.jsx)(Y.a,{style:{height:"fit-content",placeSelf:"center"},onClick:p,children:Object(n.jsx)("img",{style:{width:18},src:x,alt:"close"})})]}),Object(n.jsx)(G.a,{}),Object(n.jsx)(q.a,{children:Object(n.jsx)("div",{children:t&&(i.includes("custom")?i.includes("bar")?Object(n.jsx)(r.a.Fragment,{children:v.map((function(e){return O(e,Object(n.jsx)(Q,{className:"app_graph",country:a,caseType:e,data:t,id:c+"-"+e,type:"custom",casesType:e,countryName:a}))}))}):i.includes("line")?O("",Object(n.jsx)(_.Line,{id:c+"-",data:{datasets:[{backgroundColor:M(l),borderColor:B(l),data:t}]},options:ce})):i.includes("pie")?O(" ",Object(n.jsx)(ne,{pieData:t,id:c+"-"})):void 0:v.map((function(e){return O(e,Object(n.jsx)(_.Line,{id:c+"-"+e,data:{datasets:[{backgroundColor:M(e),borderColor:B(e),data:H(t,e)}]},options:ce}))})))})})]})]})},se=a(334),ie=a(335),oe=a(148),le=a(353),de=a(336),ue=a(355),je=a.p+"static/media/edit.e965ddf9.svg",be=a.p+"static/media/remove.7c2d8e7e.svg",he=a.p+"static/media/add.6fa7e393.svg";var fe=function(e){var t=e.days,a=e.handleMonthClick,c=r.a.useState(!1),s=Object(b.a)(c,2),i=s[0],o=s[1],l=r.a.useState(0),d=Object(b.a)(l,2),u=d[0],j=d[1],h=r.a.useState(!1),f=Object(b.a)(h,2),p=f[0],m=f[1],x=r.a.useState(t),O=Object(b.a)(x,2),v=O[0],y=O[1],g=function(e,t){0===t||1===t?j(t):(""===(t=e.target.value).trim()||/^\d+$/.test(t)&&parseInt(t)>0)&&(0===u&&parseInt(t)<1e3||1===u&&parseInt(t)<=36)&&y(t.trim())},w=function(e){a(e),m(!1)};return Object(n.jsxs)("div",{style:{margin:10,display:"flex",justifyContent:"space-between"},children:[Object(n.jsx)(se.a,{onClick:function(){return w("120")},style:{textTransform:"none",borderRadius:25},variant:"120"!==t&&120!==t||p?"outlined":"contained",color:"120"!==t&&120!==t||p?"default":"primary",children:"4 months"}),Object(n.jsx)(se.a,{onClick:function(){return w("30")},style:{textTransform:"none",borderRadius:25},variant:"30"!==t||p?"outlined":"contained",color:"30"!==t||p?"default":"primary",children:"1 month"}),Object(n.jsx)(se.a,{onClick:function(){return o(!0)},style:{textTransform:"none",borderRadius:25},variant:p?"contained":"outlined",color:p?"primary":"default",startIcon:p?Object(n.jsx)("img",{src:je,alt:"custom time"}):null,children:p?0===u?t+" D":t/30+" M":"Custom"}),Object(n.jsxs)(V.a,{onClose:function(){return o(!1)},"aria-labelledby":"simple-dialog-title",open:i,children:[Object(n.jsx)(ie.a,{id:"simple-dialog-title",children:"Set custom time"}),Object(n.jsxs)(oe.a,{square:!0,children:[Object(n.jsxs)(le.a,{value:u,indicatorColor:"primary",centered:!0,textColor:"primary",onChange:g,"aria-label":"disabled tabs example",children:[Object(n.jsx)(de.a,{label:"Days"}),Object(n.jsx)(de.a,{label:"Months"})]}),Object(n.jsx)(G.a,{}),Object(n.jsxs)(q.a,{children:[Object(n.jsx)("br",{}),0===u?Object(n.jsxs)("div",{className:"custom-day-input",children:[Object(n.jsx)(ue.a,{style:{textAlign:"center",paddingRight:20,paddingTop:4},value:v,onChange:g,children:Object(n.jsx)("input",{type:"number",id:"custom-input"})}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]}):Object(n.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(n.jsx)("img",{style:{width:30},src:he,className:"icon-button",onClick:function(){try{if(v>=36){var e=parseInt(document.getElementById("custom-input").value);y(e<=36?e+1:1)}else y(v+1)}catch(t){y(1)}},alt:"add months"}),Object(n.jsx)("input",{value:v>0&&v<=36?v:v/30>0?parseInt(v/30):1,type:"number",id:"custom-input",disabled:!0,style:{width:93,paddingTop:4,textAlign:"center",fontSize:"larger"}}),Object(n.jsx)("img",{style:{width:30},src:be,className:"icon-button",onClick:function(){try{if(v<=1){var e=parseInt(document.getElementById("custom-input").value);y(e>1?e-1:12)}else y(v-1)}catch(t){y(12)}},alt:"decrease months"})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(se.a,{fullWidth:!0,variant:"contained",color:"primary",onClick:function(){var e=v;0!==u&&(e=30*v),y(e),a(e),o(!1),m(!0)},children:"Done"})]})]})]})]})},pe={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!0,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return E()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return E()(e).format("0a")}}}]}};var me=function(e){var t=e.casesType,a=e.country,s=e.countryName,i=e.id,o=e.setGlobalData,l=Object(c.useState)({}),d=Object(b.a)(l,2),u=d[0],j=d[1],h=Object(c.useState)(""),f=Object(b.a)(h,2),p=f[0],m=f[1],x=Object(c.useState)({}),O=Object(b.a)(x,2),v=O[0],y=O[1],C=Object(c.useState)("120"),N=Object(b.a)(C,2),S=N[0],k=N[1];Object(c.useEffect)((function(){if(p!==a){(function(){var e=Object(w.a)(g.a.mark((function e(){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a&&"worldwide"!==a?"https://disease.sh/v3/covid-19/historical/".concat(a,"?lastdays=120"):"https://disease.sh/v3/covid-19/historical/all?lastdays=120",e.next=3,fetch(c).then((function(e){return e.json()})).then((function(e){if(e.hasOwnProperty("message"))j(null);else{a&&"worldwide"!==a&&(e=e.timeline),y(e),m(a),o&&o(e);var n=H(e,t);j(n)}})).catch((function(e){return Object(n.jsx)("p",{children:"No data found"})}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}else{var e=H(v,t);j(e)}}),[a]),Object(c.useEffect)((function(){if(p!==a)T(120);else{var e=H(v,t);j(e)}}),[t]);var T=function(){var e=Object(w.a)(g.a.mark((function e(c){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(c),r=a&&"worldwide"!==a?"https://disease.sh/v3/covid-19/historical/".concat(a,"?lastdays=").concat(c):"https://disease.sh/v3/covid-19/historical/all?lastdays=".concat(c),e.next=4,fetch(r).then((function(e){return e.json()})).then((function(e){if(e.hasOwnProperty("message"))j(null);else{a&&"worldwide"!==a&&(e=e.timeline),y(e),o&&o(e),m(a);var n=H(e,t);j(n)}})).catch((function(e){return j(null),Object(n.jsx)("p",{children:"No data found"})}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)(r.a.Fragment,{children:u&&u.length>0?Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsxs)("div",{className:"app_graph",children:[Object(n.jsx)(fe,{days:S,handleMonthClick:T}),Object(n.jsx)(_.Line,{id:i,data:{datasets:[{backgroundColor:M(t),borderColor:B(t),data:u}]},options:pe})]}),Object(n.jsx)(Y.a,{onClick:function(){var e=document.createElement("a");e.download=i.includes("global")?"worldwide "+t:("worldwide"===a?"global ":s)+" "+t,e.href=document.getElementById(i).toDataURL(),e.click()},children:Object(n.jsx)("img",{style:{width:18},src:K,alt:"download"})}),Object(n.jsx)(re,{country:s,data:v,id:"fullgraph-"+i})]}):Object(n.jsx)("p",{className:"error-message",children:"No data found"})})},xe=(a(139),a(151)),Oe=a.p+"static/media/search.9ecf77d3.svg",ve=Object(h.a)((function(e){return{root:{padding:"2px 4px",display:"flex",alignItems:"center"},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}}));function ye(e){var t=e.setFilterText,a=e.filterText,c=ve();return Object(n.jsxs)(oe.a,{component:"form",className:c.root,children:[Object(n.jsx)(Y.a,{className:c.iconButton,"aria-label":"menu",children:Object(n.jsx)("img",{src:Oe,alt:"Search",style:{width:16}})}),Object(n.jsx)(xe.a,{className:c.input,onChange:function(e){t(e.target.value)},value:a,placeholder:"Search Country",inputProps:{"aria-label":"search country"}}),Object(n.jsx)(Y.a,{className:c.iconButton,"aria-label":"search",disabled:!0}),Object(n.jsx)(G.a,{className:c.divider,orientation:"vertical"}),Object(n.jsx)(Y.a,{color:"primary",className:c.iconButton,"aria-label":"directions",onClick:function(){t("")},children:Object(n.jsx)("img",{src:x,alt:"remove",style:{width:16}})})]})}var ge=function(e){var t=e.countries,a=e.casesType,c=e.setCountryChange,s=r.a.useState(""),i=Object(b.a)(s,2),o=i[0],l=i[1],d=r.a.useState(Object(I.a)(t)),u=Object(b.a)(d,2),j=u[0],h=u[1];return r.a.useEffect((function(){h(Object(I.a)(t))}),[t]),r.a.useEffect((function(){h(""!==o?t.filter((function(e){return e.country.toUpperCase().startsWith(o.toUpperCase())})):t.map((function(e){return e})))}),[o]),Object(n.jsxs)(N.a,{variant:"outlined",children:[Object(n.jsx)(ye,{setFilterText:l,filterText:o}),Object(n.jsx)("div",{className:"table",children:j.map((function(e){return Object(n.jsxs)("tr",{onClick:function(){return t=e.countryInfo.iso2,void c(t);var t},className:"table-row",children:[Object(n.jsx)("td",{children:Object(n.jsxs)("div",{style:{display:"flex"},children:[Object(n.jsx)("img",{src:e.countryInfo.flag,className:"table-img",alt:e.country}),Object(n.jsx)("p",{children:e.country})]})}),Object(n.jsx)("td",{children:Object(n.jsx)("strong",{children:E()(e[a]).format("0,0")})})]},e.country)}))})]})},we=a(341),Ce=a(361);a(267);var Ne=function(e){var t=e.countries,a=e.casesType,c=e.center,s=e.zoom,i=e.selectedCountry,o=e.width,l=r.a.useState(c),d=Object(b.a)(l,2),u=d[0],j=d[1],h=r.a.useState(s),f=Object(b.a)(h,2),p=f[0],m=f[1];return r.a.useEffect((function(){j(c),34.80746===c[0]?m(3):m(4)}),[c]),Object(n.jsx)("div",{className:"map",style:"xs"===o?{height:345}:null,children:Object(n.jsxs)(we.a,{scrollWheelZoom:!1,center:u,zoom:p,children:[Object(n.jsx)(Ce.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),W(t,a,i)]})},u)},Se=(a(268),a(339)),ke=a(352),Te=a(342),_e=a(343);var Re=function(e){var t=e.country,a=e.onCountryChange,c=e.countries,s=r.a.useState(""),i=Object(b.a)(s,2),o=i[0],l=i[1],d=r.a.useState(Object(I.a)(c)),u=Object(b.a)(d,2),j=u[0],h=u[1];return r.a.useEffect((function(){h(c)}),[c]),r.a.useEffect((function(){h(""!==o?c.filter((function(e){return null!==e.value&&e.name.toUpperCase().startsWith(o.toUpperCase())})):c)}),[o]),Object(n.jsx)(Se.a,{className:"app__dropdown",children:Object(n.jsxs)(ke.a,{className:"menu",variant:"outlined",defaultValue:"worldwide",value:t,onChange:a,onClose:function(){l("")},children:[Object(n.jsx)(ye,{filterText:o,setFilterText:l}),Object(n.jsx)(Te.a,{className:"menu-item",value:"worldwide",children:Object(n.jsx)(_e.a,{children:"Worldwide"})},"worldwide"),j.map((function(e){return Object(n.jsx)(Te.a,{className:"menu-item",value:e.value,children:Object(n.jsx)(_e.a,{children:e.name})},e.name)}))]})})},Ee=a(350),Ie=a(348),De=a(349),Le=a(346),Ae=a(347),Fe=a(344),Me=a(345),Be=a(358);function Pe(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}function Ue(e,t){return"desc"===e?function(e,a){return Pe(e,a,t)}:function(e,a){return-Pe(e,a,t)}}function We(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))}function ze(e){var t=e.classes,a=e.order,c=e.orderBy,r=e.onRequestSort,s=e.headCells;return Object(n.jsx)(Fe.a,{children:Object(n.jsxs)(Me.a,{children:[Object(n.jsx)(Le.a,{padding:"default",children:"#"}),s.map((function(e,s){return Object(n.jsx)(Le.a,{align:"center",padding:"default",sortDirection:c===e.id&&a,children:Object(n.jsxs)(Be.a,{active:c===e.id,direction:c===e.id?a:"asc",onClick:(i=e.id,function(e){r(e,i)}),children:[e.label,c===e.id?Object(n.jsx)("span",{className:t.visuallyHidden,children:"desc"===a?"sorted descending":"sorted ascending"}):null]})},e.id);var i}))]})})}var He=Object(h.a)((function(e){return{root:{marginLeft:12,marginRight:29},paper:{width:"100%",marginBottom:e.spacing(2),margin:10},table:{minWidth:750,height:500},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1},container:{height:500}}}));function Ye(e){var t=e.rows,a=e.headers,c=e.country,s=He(),i=r.a.useState("asc"),o=Object(b.a)(i,2),l=o[0],d=o[1],u=r.a.useState("calories"),j=Object(b.a)(u,2),h=j[0],f=j[1];return Object(n.jsx)("div",{className:s.root,children:Object(n.jsxs)(oe.a,{variant:"outlined",className:s.paper,children:[Object(n.jsxs)("h3",{className:"card-title",children:[c," "," States"]}),Object(n.jsx)(G.a,{}),Object(n.jsx)(Ae.a,{className:s.container,children:Object(n.jsxs)(Ie.a,{stickyHeader:!0,className:s.table,"aria-labelledby":"tableTitle",size:"medium","aria-label":"enhanced table",children:[Object(n.jsx)(ze,{classes:s,order:l,orderBy:h,headCells:a,onRequestSort:function(e,t){d(h===t&&"asc"===l?"desc":"asc"),f(t)},rowCount:t.length}),Object(n.jsx)(De.a,{children:We(t,Ue(l,h)).map((function(e,t){return Object(n.jsxs)(Me.a,{hover:!0,role:"checkbox",tabIndex:-1,children:[Object(n.jsx)(Le.a,{component:"th",id:t,align:"center",children:t+1}),Object(n.jsx)(Le.a,{style:{color:a[0].color},align:"center",children:e.province}),Object(n.jsx)(Le.a,{style:{color:a[1].color},align:"center",children:E()(e.confirmed).format("0,0")}),Object(n.jsx)(Le.a,{style:{color:a[2].color},align:"center",children:E()(e.confirmed_diff).format("0,0")}),Object(n.jsx)(Le.a,{style:{color:a[3].color},align:"center",children:E()(e.active).format("0,0")}),Object(n.jsx)(Le.a,{style:{color:a[4].color},align:"center",children:E()(e.deaths).format("0,0")}),Object(n.jsx)(Le.a,{style:{color:a[5].color},align:"center",children:E()(e.deaths_diff).format("0,0")}),Object(n.jsxs)(Le.a,{style:{color:a[6].color},align:"center",children:[E()(e.Case_Fatality_Rate).format("0,0"),"%"]}),Object(n.jsx)(Le.a,{style:{color:a[7].color},align:"center",children:E()(e.recovered).format("0,0")}),Object(n.jsxs)(Le.a,{style:{color:a[8].color},align:"center",children:[E()(e.Recovery_Proporation).format("0,0"),"%"]})]},t)}))})]})})]})})}var Ge=function(e){var t=e.countryName,a=e.countryShortName,c=r.a.useState(""),s=Object(b.a)(c,2),i=s[0],o=(s[1],r.a.useState({})),l=Object(b.a)(o,2),d=l[0],u=l[1],j=r.a.useState([]),h=Object(b.a)(j,2),f=h[0],p=(h[1],r.a.useState()),m=Object(b.a)(p,2),x=m[0],O=m[1],v=function(e){if(!e||e.length<=1)u({});else{var t={keys:[{label:"STATE",color:"#000000",id:"province"},{label:"TOTAL CASES",color:"rgb(204, 16, 52)",id:"confirmed"},{label:"NEW CASES",color:"rgb(204, 16, 52)",id:"confirmed_diff"},{label:"ACTIVE CASES",color:"rgb(204, 16, 52)",id:"active"},{label:"TOTAL DEATHS",color:"rgb(251, 68, 67)",id:"deaths"},{label:"NEW DEATHS",color:"rgb(251, 68, 67)",id:"deaths_diff"},{label:"CASE FATALITY RATE",color:"#000000",id:"Case_Fatality_Rate"},{label:"TOTAL RECOVERED",color:"rgb(0 201 25)",id:"recovered"},{label:"RECOVERY PERCENTAGE",color:"#000000",id:"Recovery_Proporation"}],values:[]};e.forEach((function(e){return t.values.push(y(e))})),u(t)}},y=function(e){var t={};return t.province=e.province,t.confirmed=e.confirmed,t.confirmed_diff=e.confirmed_diff,t.active=e.active,t.deaths=e.deaths,t.deaths_diff=e.deaths_diff,t.Case_Fatality_Rate=e.Case_Fatality_Rate,t.recovered=e.recovered,t.Recovery_Proporation=e.Recovery_Proporation,t};return r.a.useEffect((function(){x!==t?(O(t),function(){var e=Object(w.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://vaccovid.live/api/api-covid-data/provinces-report-iso-based/".concat(a),e.next=3,fetch(t).then((function(e){return e.json()})).then((function(e){v(e)})).catch((function(e){return Object(n.jsx)("p",{children:"No data found"})}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()):u(d)}),[t]),r.a.useEffect((function(){u(""!==i?f.filter((function(e){return e.country.toUpperCase().startsWith(i.toUpperCase())})):f.map((function(e){return e})))}),[i]),Object(n.jsx)(r.a.Fragment,{children:Object.keys(d).length>0&&Object(n.jsx)(Ye,{headers:d.keys,rows:d.values,country:t})})},Ve={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!0,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return E()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return E()(e).format("0a")}}}]}};var qe=function(e){var t=e.country,a=e.countryName,s=e.id,i=e.setGlobalData,o=Object(c.useState)({}),l=Object(b.a)(o,2),d=l[0],u=l[1],j=Object(c.useState)(""),h=Object(b.a)(j,2),f=h[0],p=h[1],m=Object(c.useState)({}),x=Object(b.a)(m,2),O=x[0],v=x[1],y=Object(c.useState)("120"),C=Object(b.a)(y,2),N=C[0],S=C[1];Object(c.useEffect)((function(){if(f!==t)k(N);else{var e=H(O,"default");u(e)}}),[t]),Object(c.useEffect)((function(){k(N)}),[N]);var k=function(){var e=Object(w.a)(g.a.mark((function e(a){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="worldwide"!==t?"\n    https://disease.sh/v3/covid-19/vaccine/coverage/countries/".concat(t,"?lastdays=").concat(N):"https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=".concat(N),e.next=3,fetch(c).then((function(e){return e.json()})).then((function(e){"worldwide"!==t&&(e=e.timeline),v(e),i&&i(e),p(t);var a=H(e,"default",!0);u(a)})).catch((function(e){return Object(n.jsx)("p",{children:"No data found"})}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)("div",{className:"app_graph",children:d.length>0?Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(fe,{days:N,handleMonthClick:function(e){S(e)}}),Object(n.jsx)("br",{}),Object(n.jsx)(_.Line,{id:s,data:{datasets:[{backgroundColor:M("recovered"),borderColor:B("recovered"),data:d}]},options:Ve})]}):Object(n.jsx)("p",{className:"error-message",children:"No data found"})}),Object(n.jsx)(Y.a,{onClick:function(){var e=document.createElement("a");e.download=s.includes("global")?"worldwide vaccination for last "+N+" days":("worldwide"===t?"global ":a)+" for last "+N+" days",e.href=document.getElementById(s).toDataURL(),e.click()},children:Object(n.jsx)("img",{style:{width:18},src:K,alt:"download"})}),Object(n.jsx)(re,{country:a,type:"custom-line",data:d,cardTitle:"Vaccination",caseType:"",defaultColorType:"recovered",id:"vaccinegraph-"+s})]})};var Je=function(e){var t=e.country,a=e.countryInfo,c=e.width,s=e.casesType,i=r.a.useState({}),o=Object(b.a)(i,2),l=o[0],d=o[1];return Object(n.jsx)(r.a.Fragment,{children:"worldwide"!==t&&a.countryInfo&&Object(n.jsxs)(N.a,{style:{marginTop:"1rem",marginBottom:"xs"===c?"1rem":"0",marginLeft:"xs"!==c?35:0,marginRight:"xs"!==c?37:0},children:[Object(n.jsxs)("div",{style:{display:"flex"},children:[Object(n.jsx)("img",{style:{marginRight:13,maxHeight:106},src:a.countryInfo.flag,alt:a.country}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{style:{marginTop:-5,marginLeft:0,padding:0},className:"card-title",children:a.country}),Object(n.jsxs)(Ee.a,{container:!0,spacing:3,children:[Object(n.jsxs)(Ee.a,{item:!0,children:[Object(n.jsx)(C.a,{component:"span",color:"textSecondary",children:"Active"})," ",Object(n.jsx)(C.a,{component:"span",children:E()(a.active).format("0,0")})," "]}),Object(n.jsxs)(Ee.a,{item:!0,children:[Object(n.jsx)(C.a,{component:"span",color:"textSecondary",children:"Critical"})," ",Object(n.jsx)(C.a,{component:"span",children:E()(a.critical).format("0,0")})," "]}),Object(n.jsxs)(Ee.a,{item:!0,children:[Object(n.jsx)(C.a,{component:"span",color:"textSecondary",children:"Tests"})," ",Object(n.jsx)(C.a,{component:"span",children:E()(a.tests).format("0,0")})," "]}),Object(n.jsxs)(Ee.a,{item:!0,children:[Object(n.jsx)(C.a,{component:"span",color:"textSecondary",children:"Active Per Million"})," ",Object(n.jsx)(C.a,{component:"span",children:E()(a.activePerOneMillion).format("0,0")})," "]}),Object(n.jsxs)(Ee.a,{item:!0,children:[Object(n.jsx)(C.a,{component:"span",color:"textSecondary",children:"Deaths per Million"})," ",Object(n.jsx)(C.a,{component:"span",children:E()(a.deathsPerOneMillion).format("0,0")})," "]}),Object(n.jsxs)(Ee.a,{item:!0,children:[Object(n.jsx)(C.a,{component:"span",color:"textSecondary",children:"Test per Million"})," ",Object(n.jsx)(C.a,{component:"span",children:E()(a.testsPerOneMillion).format("0,0")})," "]}),Object(n.jsxs)(Ee.a,{item:!0,children:[Object(n.jsx)(C.a,{component:"span",color:"textSecondary",children:"Recovered per Million"})," ",Object(n.jsx)(C.a,{component:"span",children:E()(a.recoveredPerOneMillion).format("0,0")})," "]})]})]})]}),Object(n.jsx)(G.a,{}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{className:"countryinfo",style:"lg"!==c?{flexDirection:"column"}:null,children:[Object(n.jsxs)(N.a,{className:"app__information",style:{flex:".5",margin:20},variant:"outlined",children:[Object(n.jsxs)("h3",{style:{height:"min-content",alignSelf:"center",marginLeft:"1rem"},children:[a.country," "," "+s]}),Object(n.jsx)(G.a,{}),Object(n.jsx)("br",{}),Object(n.jsx)(me,{classname:"app_graph",country:t,setGlobalData:d,id:"country-graph",casesType:s,countryName:a.country})]}),Object(n.jsxs)(N.a,{style:{flex:".5",margin:20},className:"app__information",variant:"outlined",children:[Object(n.jsx)("h3",{style:{height:"min-content",alignSelf:"center",marginLeft:"1rem"},children:"Vaccination"}),Object(n.jsx)(G.a,{}),Object(n.jsx)("br",{}),Object(n.jsx)(qe,{classname:"app_graph",country:t,countryInfo:a,id:"".concat(a.country,"-vaccine-graph"),casesType:s,countryName:a.country})]})]}),Object(n.jsxs)("div",{className:"countryinfo",style:"lg"!==c?{flexDirection:"column"}:null,children:[Object(n.jsxs)(N.a,{style:{flex:".5",margin:20},className:"app__information",variant:"outlined",children:[Object(n.jsx)("h3",{style:{height:"min-content",alignSelf:"center",marginLeft:"1rem"},children:"Covid overall status"}),Object(n.jsx)(G.a,{}),Object(n.jsx)("br",{}),Object(n.jsx)(ne,{classname:"app_graph",country:t,pieData:[a.active,a.deaths,a.recovered,a.critical,a.tests],id:"".concat(a.country,"-pie-graph"),casesType:s,countryName:a.country})]}),Object(n.jsxs)(N.a,{style:{flex:".5",margin:20},className:"app__information",variant:"outlined",children:[Object(n.jsx)("h3",{style:{height:"min-content",alignSelf:"center",marginLeft:"1rem"},children:"Covid Intensity"}),Object(n.jsx)(G.a,{}),Object(n.jsx)("br",{}),Object(n.jsx)(Q,{className:"app_graph",country:t,caseType:s,data:l,id:"-".concat(a.country,"-intencity-graph"),casesType:s,countryName:a.country})]})]}),Object(n.jsx)(Ge,{countryName:a.country,countryShortName:a.countryInfo.iso3})]})})},Ke=a(340),Ze=a(89),$e=a(351),Qe=a(146),Xe=a.n(Qe),et=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleClick=function(){var t=e.props.news.url;"self"===Object(Ze.a)(e)?window.location.href="/".concat(t):window.open(t,"_blank")},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.news,r=a.title,s=a.urlToImage,i=a.type,o=a.source,l="self"!==i?Object(n.jsx)(c.Fragment,{children:Object(n.jsx)("img",{className:t.image,src:s,alt:o.name})}):null;return Object(n.jsxs)(Te.a,{onClick:this.handleClick,button:!0,children:["xs"===this.props.width&&l,Object(n.jsx)(_e.a,{children:Object(n.jsx)(C.a,{style:{paddingLeft:"xs"===this.props.width?13:5,paddingRight:5},variant:"body2",children:r})}),Object(n.jsx)($e.a,{children:"xs"!==this.props.width&&l})]})}}]),a}(c.Component),tt=Xe()((function(e){return{image:{width:100,borderRadius:"10%",height:60},item:{marginTop:10,marginBottom:10},horizontalDivider:{borderColor:"#eff1f3",marginLeft:-17,marginRight:-17,width:"183%",marginTop:-1,borderTop:"0px solid #eff1f3"}}}))(et);var at=function(e){var t=e.country,a=e.caseType,c=e.countryName,s=e.language,i=r.a.useState([]),o=Object(b.a)(i,2),l=o[0],d=o[1];r.a.useEffect((function(){u()}),[t,a]);var u=function(){var e=Object(w.a)(g.a.mark((function e(){var a,c,r=arguments;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>0&&void 0!==r[0]&&r[0],c="https://newsapi.org/v2/top-headlines?language=".concat(s||"en").concat("worldwide"===t||a?"":"&country=".concat(t),"&q=covid&apiKey=ec112318dada4c66a9a8ddc5ab5435b8"),e.next=4,fetch(c).then((function(e){return e.json()})).then((function(e){e.totalResults>0?d(e.articles):a||u(!0)})).catch((function(e){return Object(n.jsx)("p",{children:"No data found"})}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{children:l.length>0&&Object(n.jsxs)(N.a,{children:[Object(n.jsx)(S.a,{children:Object(n.jsxs)(C.a,{variant:"h6",children:["Latest covid news"," ","worldwide"===t?"worldwide":"in "+c]})}),Object(n.jsx)(G.a,{}),Object(n.jsx)(Ke.a,{children:l.map((function(e,t){return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(tt,{news:e},t),t!==l.length-1&&Object(n.jsx)(G.a,{style:{marginLeft:-16,marginRight:-16}})]},t)}))})]})})};var nt=function(e){var t=e.caseProp,a=e.width,s=Object(c.useState)("worldwide"),i=Object(b.a)(s,2),o=i[0],l=i[1],d=Object(c.useState)({}),u=Object(b.a)(d,2),j=u[0],h=u[1],f=Object(c.useState)([]),p=Object(b.a)(f,2),m=p[0],x=p[1],O=Object(c.useState)([]),v=Object(b.a)(O,2),y=v[0],k=v[1],_=Object(c.useState)([]),R=Object(b.a)(_,2),I=R[0],D=R[1],L=Object(c.useState)(t),A=Object(b.a)(L,2),F=A[0],M=A[1],B=Object(c.useState)([34.80746,-40.4796]),W=Object(b.a)(B,2),H=W[0],Y=W[1],G=Object(c.useState)("xs"===a?2:3),V=Object(b.a)(G,2),q=V[0],J=V[1];Object(c.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){h(e)}))}),[]),Object(c.useEffect)((function(){(function(){var e=Object(w.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=P(e);x(t),k(e),D(a)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var K=function(){var e=Object(w.a)(g.a.mark((function e(t){var n,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target&&t.target.value?t.target.value:t,l(n),c="worldwide"===n?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(n),e.next=5,fetch(c).then((function(e){return e.json()})).then((function(e){h(e);try{e.countryInfo.lat?Y([e.countryInfo.lat,e.countryInfo.long]):Y([34.80746,-40.4796])}catch(t){Y([34.80746,-40.4796])}J("worldwide"===o?"xs"===a?2:3:"xs"===a?2:4)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsxs)("div",{className:"home",children:[Object(n.jsxs)("div",{className:"app__left",children:[Object(n.jsxs)("div",{className:"app__header",children:[Object(n.jsx)("h1",{children:"COVID-19 Tracker"}),Object(n.jsx)(Re,{countries:m,country:o,onCountryChange:K})]}),Object(n.jsxs)("div",{className:"app__stats",children:[Object(n.jsx)(T,{onClick:function(e){return M("cases")},title:"Coronavirus Cases",isRed:!0,width:a,active:"cases"===F,cases:U(j.todayCases),total:E()(j.cases).format("0,0")}),Object(n.jsx)(T,{onClick:function(e){return M("recovered")},title:"Recovered",width:a,active:"recovered"===F,cases:U(j.todayRecovered),total:E()(j.recovered).format("0,0")}),Object(n.jsx)(T,{onClick:function(e){return M("deaths")},title:"Deaths",isRed:!0,width:a,active:"deaths"===F,cases:U(j.todayDeaths),total:E()(j.deaths).format("0,0")})]}),j&&j.updated&&Object(n.jsx)("div",{children:Object(n.jsxs)(C.a,{style:{width:"fit-content",float:"right",marginTop:8},color:"textSecondary",children:["Last updated "," "+z(j.updated)]})}),Object(n.jsx)(Ne,{countries:y,casesType:F,center:H,zoom:q,width:a,selectedCountry:o})]}),"xs"===a&&Object(n.jsx)("br",{}),"xs"===a&&Object(n.jsx)(Je,{casesType:F,country:o,countryInfo:j,width:a}),Object(n.jsx)(N.a,{className:"app__right",children:Object(n.jsx)(S.a,{children:Object(n.jsxs)("div",{className:"app__information",children:[Object(n.jsxs)("h3",{children:["Live ",F," by country"]}),Object(n.jsx)(ge,{setCountryChange:K,casesType:F,countries:I}),Object(n.jsxs)("h3",{children:["Worldwide new ",F]}),Object(n.jsx)(me,{id:"global-graph",casesType:F,countryName:"worldwide"===o?"Worldwide":j.country})]})})})]}),"xs"!==a&&Object(n.jsx)(Je,{casesType:F,country:o,countryInfo:j,width:a}),Object(n.jsx)("div",{style:{marginTop:"1rem",marginBottom:"xs"===a?"1rem":"0",marginLeft:"xs"!==a?35:20,marginRight:"xs"!==a?37:20},children:Object(n.jsx)(at,{country:o,countryName:j.country,caseType:F})}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{})]})},ct=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).types=["cases","recovered","deaths"],e.state={type:e.types.includes(new URLSearchParams(window.location.search).get("type"))?new URLSearchParams(window.location.search).get("type"):"cases"},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)(nt,{caseProp:this.state.type,width:this.props.width}),"xs"===this.props.width&&Object(n.jsx)(v,{})]})}}]),a}(c.Component),rt=Object(j.a)()(ct),st=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,363)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(rt,{})}),document.getElementById("root")),st()}},[[290,1,2]]]);