"use strict";(self.webpackChunkelif_tech_test_frontend=self.webpackChunkelif_tech_test_frontend||[]).push([[975],{5975:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r=t(9439),i=t(2791),u=t(9434),c=function(n){return n.shops.items},s=t(9775),o=t(184),f=function(n){var e=n.setVariant,t=(0,u.I0)(),f=(0,u.v9)(c),l=(0,i.useState)(null),a=(0,r.Z)(l,2),d=a[0],h=a[1];(0,i.useEffect)((function(){t((0,s.N)())}),[t]),(0,i.useEffect)((function(){f&&f.length>0&&(h(f[0]._id),e(f[0]._id))}),[f,e]);var p=function(n){var t=n.target.value;h(t),e(t)};return f?(0,o.jsx)("ul",{children:f.map((function(n){return(0,o.jsx)("li",{children:(0,o.jsxs)("label",{children:[(0,o.jsx)("input",{type:"radio",name:"shop",value:n._id,onChange:p,checked:d===n._id}),n.name]})},n._id)}))}):null},l=t(5218),a=function(n){return n.menus.items},d=t(3060),h=t(3107),p=t(6834),j=function(n){var e=n.shopId,t=(0,u.I0)(),c=(0,u.v9)(p.d),s=(0,i.useState)(!1),f=(0,r.Z)(s,2),j=f[0],v=f[1];(0,i.useEffect)((function(){t((0,d.g)(e))}),[t,e]);(0,i.useEffect)((function(){j&&(l.ZP.error("You can order from only one shop"),v(!1))}),[j]);var x=(0,u.v9)(a);return x?(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("ul",{children:x.map((function(n,e){return(0,o.jsxs)("li",{children:[(0,o.jsxs)("div",{children:[n.photo&&(0,o.jsx)("img",{src:n.photo,alt:""}),"photo"]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:n.name}),(0,o.jsxs)("p",{children:["Price: ",n.price,"$"]}),(0,o.jsx)("button",{type:"button",onClick:function(){return function(n){if(c.find((function(e){return e.owner!==n.owner})))return v(!0),null;t((0,h.Xq)(n))}(n)},children:"BUY"})]})]},"".concat(n._id,"-").concat(e))}))})}):null},v=function(){var n=(0,i.useState)(""),e=(0,r.Z)(n,2),t=e[0],u=e[1];return(0,o.jsxs)("div",{children:[(0,o.jsx)(f,{setVariant:u}),(0,o.jsx)(j,{shopId:t})]})}},6834:function(n,e,t){t.d(e,{d:function(){return r}});var r=function(n){return n.cart.items}}}]);
//# sourceMappingURL=975.fa845f20.chunk.js.map