"use strict";(self.webpackChunkelif_tech_test_frontend=self.webpackChunkelif_tech_test_frontend||[]).push([[781],{4781:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r,i,o,u,c,s,a,h,d,f,p,m=t(9439),l=t(2791),x=t(168),g=t(82),Z=g.ZP.div(r||(r=(0,x.Z)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n"]))),b=t(9434),v=function(n){return n.shops.items},j=function(n){return n.shops.isLoading},k=t(9775),w=g.ZP.ul(i||(i=(0,x.Z)(["\n  width: ","px;\n  min-height: 100vh;\n\n  padding: ","px;\n  color: ",";\n  background-color: ",";\n  font-size: ",";\n"])),(function(n){return n.theme.space[8]+100}),(function(n){return n.theme.space[5]-6}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.darkBackground}),(function(n){return n.theme.fontSizes.m})),P=g.ZP.li(o||(o=(0,x.Z)(["\n  margin-bottom: ","px;\n\n  padding: ","px;\n  border-bottom: "," ",";\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.colors.white})),_=g.ZP.label(u||(u=(0,x.Z)(["\n  width: 100%;\n  & input {\n    margin-right: ","px;\n  }\n"])),(function(n){return n.theme.space[3]})),z=t(184),S=function(n){var e=n.setVariant,t=(0,b.I0)(),r=(0,b.v9)(v),i=(0,b.v9)(j),o=(0,l.useState)(null),u=(0,m.Z)(o,2),c=u[0],s=u[1];(0,l.useEffect)((function(){t((0,k.N)())}),[t]),(0,l.useEffect)((function(){r&&r.length>0&&(s(r[0]._id),e(r[0]._id))}),[r,e]);var a=function(n){var t=n.target.value;s(t),e(t)};return r?(0,z.jsxs)(w,{children:[i&&(0,z.jsx)("h2",{children:"loading..."}),r.map((function(n){return(0,z.jsx)(P,{children:(0,z.jsxs)(_,{children:[(0,z.jsx)("input",{type:"radio",name:"shop",value:n._id,onChange:a,checked:c===n._id}),(0,z.jsx)("span",{children:n.name})]})},n._id)}))]}):null},y=t(5218),C=g.ZP.ul(c||(c=(0,x.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  height: 100vh;\n\n  padding: ","px;\n  font-size: ",";\n"])),(function(n){return n.theme.space[5]-6}),(function(n){return n.theme.fontSizes.m})),E=g.ZP.li(s||(s=(0,x.Z)(["\n  border: "," ",";\n  border-radius: ",";\n  padding: ","px;\n\n  width: ","px;\n\n  margin-bottom: ","px;\n  margin-right: ","px;\n"])),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.radii.md}),(function(n){return n.theme.space[5]-6}),(function(n){return n.theme.space[8]+44}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]})),I=g.ZP.div(a||(a=(0,x.Z)(["\n  width: 100%;\n  height: ","px;\n\n  border-radius: ",";\n  background-color: ",";\n"])),(function(n){return n.theme.space[7]+22}),(function(n){return n.theme.radii.md}),(function(n){return n.theme.colors.darkBackground})),B=g.ZP.div(h||(h=(0,x.Z)(["\n  padding: ","px 0px;\n  font-size: ",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.fontSizes.m})),V=g.ZP.h3(d||(d=(0,x.Z)(["\n  font-size: ",";\n  padding-bottom: ","px;\n"])),(function(n){return n.theme.fontSizes.ml}),(function(n){return n.theme.space[2]})),Y=g.ZP.p(f||(f=(0,x.Z)(["\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[2]})),q=g.ZP.button(p||(p=(0,x.Z)(["\n  padding: ","px;\n  border-radius: ",";\n  border-color: transparent;\n  background-color: ",";\n  color: ",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.white})),L=function(n){return n.menus.items},N=t(3060),U=t(3107),X=t(6834),$=function(n){var e=n.shopId,t=(0,b.I0)(),r=(0,b.v9)(X.d),i=(0,l.useState)(!1),o=(0,m.Z)(i,2),u=o[0],c=o[1];(0,l.useEffect)((function(){t((0,N.g)(e))}),[t,e]);(0,l.useEffect)((function(){u&&(y.ZP.error("You can order from only one shop"),c(!1))}),[u]);var s=(0,b.v9)(L);return s?(0,z.jsx)(C,{children:s.map((function(n,e){return(0,z.jsxs)(E,{children:[(0,z.jsxs)(I,{children:[n.photo&&(0,z.jsx)("img",{src:n.photo,alt:""}),"photo"]}),(0,z.jsxs)(B,{children:[(0,z.jsx)(V,{children:n.name}),(0,z.jsxs)(Y,{children:["Price: ",(0,z.jsxs)("b",{children:[n.price,"$"]})]}),(0,z.jsx)(q,{type:"button",onClick:function(){return function(n){if(r.find((function(e){return e.owner!==n.owner})))return c(!0),null;t((0,U.Xq)(n))}(n)},children:"BUY"})]})]},"".concat(n._id,"-").concat(e))}))}):null},A=function(){var n=(0,l.useState)(""),e=(0,m.Z)(n,2),t=e[0],r=e[1];return(0,z.jsxs)(Z,{children:[(0,z.jsx)(S,{setVariant:r}),(0,z.jsx)($,{shopId:t})]})}},6834:function(n,e,t){t.d(e,{d:function(){return r}});var r=function(n){return n.cart.items}}}]);
//# sourceMappingURL=781.d86a553f.chunk.js.map