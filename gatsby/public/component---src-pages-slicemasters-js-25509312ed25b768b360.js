(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Njg2:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p})),a.d(t,"query",(function(){return u}));var r=a("Wbzz"),n=a("q1tI"),i=a.n(n),o=a("9eSz"),s=a.n(o),l=a("vOnD"),c=l.b.div.withConfig({displayName:"Pagination__PaginationStyles",componentId:"sc-1g15gau-0"})(["display:flex;align-content:center;align-items:center;justify-items:center;border:1px solid var(--grey);margin:2rem 0;border-radius:5px;text-align:center;& > *{padding:1rem;flex:1;border-right:1px solid var(--grey);&[aria-current],&.current{color:var(--red);}&[disabled]{pointer-events:none;color:var(--grey);}}"]);function m(e){var t=e.pageSize,a=e.totalCount,n=e.currentPage,o=(e.skip,e.base),s=Math.ceil(a/t),l=n-1,m=n+1,d=n<s,g=n>1,p=Array.from({length:s});return i.a.createElement(c,null,i.a.createElement(r.a,{disabled:!g,to:o+"/"+l},"← Prev"),p.map((function(e,t){return i.a.createElement(r.a,{className:1===n&&0===t?"current":"",to:o+"/"+(t>0?t+1:"")},t+1)})),i.a.createElement(r.a,{disabled:!d,to:o+"/"+m},"Next →"))}var d=l.b.div.withConfig({displayName:"slicemasters__SliceMasterGrid",componentId:"sc-1ghrt1m-0"})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:2rem;"]),g=l.b.div.withConfig({displayName:"slicemasters__PersonGrid",componentId:"sc-1ghrt1m-1"})(["a{text-decoration:none;}.gatsby-image-wrapper{height:400px;}h2{transform:rotate(-2deg);text-align:center;font-size:4rem;margin-bottom:-2rem;position:relative;z-index:2;}.description{background:var(--yellow);padding:1rem;margin:2rem;margin-top:-6rem;z-index:2;position:relative;transform:rotate(1deg);text-align:center;}"]);function p(e){var t=e.data,a=e.pageContext,n=t.sliceMasters.nodes;return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,{base:"/slicemasters",pageSize:parseInt("2"),totalCount:t.sliceMasters.totalCount,currentPage:a.currentPage||1,skip:a.skip}),i.a.createElement(d,null,n.map((function(e){return i.a.createElement(g,{key:e.id},i.a.createElement(r.a,{to:"slicemaster/"+e.slug.current},i.a.createElement("h2",null,i.a.createElement("span",{className:"mark"},e.name))),i.a.createElement(s.a,{fluid:e.image.asset.fluid}),i.a.createElement("p",{className:"description"},e.description))}))))}var u="3716629812"}}]);
//# sourceMappingURL=component---src-pages-slicemasters-js-25509312ed25b768b360.js.map