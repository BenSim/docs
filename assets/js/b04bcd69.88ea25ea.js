(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1142],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4707:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],c={title:"cw20-bonding Spec",sidebar_position:4},s="CW20 Bonding curve",p={unversionedId:"cw-plus/cw20/cw20-bonding-spec",id:"cw-plus/cw20/cw20-bonding-spec",isDocsHomePage:!1,title:"cw20-bonding Spec",description:"cw20-bonding-curve source code//github.com/CosmWasm/cosmwasm-plus/tree/master/contracts/cw20-bonding",source:"@site/docs/cw-plus/cw20/cw20-bonding-spec.md",sourceDirName:"cw-plus/cw20",slug:"/cw-plus/cw20/cw20-bonding-spec",permalink:"/next/cw-plus/cw20/cw20-bonding-spec",editUrl:"https://github.com/CosmWasm/docs/edit/main/docs/cw-plus/cw20/cw20-bonding-spec.md",version:"current",sidebarPosition:4,frontMatter:{title:"cw20-bonding Spec",sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"cw20-base Tutorial",permalink:"/next/cw-plus/cw20/cw20-base-tutorial"},next:{title:"cw20-escrow Spec",permalink:"/next/cw-plus/cw20/cw20-escrow-spec"}},l=[{value:"Design",id:"design",children:[{value:"Math",id:"math",children:[]}]}],u={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cw20-bonding-curve"},"CW20 Bonding curve"),(0,i.kt)("p",null,"cw20-bonding-curve source code: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-plus/tree/master/contracts/cw20-bonding"},"https://github.com/CosmWasm/cosmwasm-plus/tree/master/contracts/cw20-bonding")),(0,i.kt)("p",null,"This builds on the ",(0,i.kt)("a",{parentName:"p",href:"/next/cw-plus/cw20/spec"},"Basic cw20 interface"),"\nas implemented in ",(0,i.kt)("a",{parentName:"p",href:"/next/cw-plus/cw20/cw20-base-spec"},(0,i.kt)("inlineCode",{parentName:"a"},"cw20-base"))),(0,i.kt)("p",null,"This serves three purposes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A usable and extensible contract for arbitrary bonding curves"),(0,i.kt)("li",{parentName:"ul"},"A demonstration of how to extend ",(0,i.kt)("inlineCode",{parentName:"li"},"cw20-base")," to add extra functionality"),(0,i.kt)("li",{parentName:"ul"},"A demonstration of the ",(0,i.kt)("a",{parentName:"li",href:"/next/cw-plus/cw20/spec#receiver"},"Receiver interface"))),(0,i.kt)("h2",{id:"design"},"Design"),(0,i.kt)("p",null,"There are two variants - accepting native tokens and accepting cw20 tokens\nas the ",(0,i.kt)("em",{parentName:"p"},"reserve")," token (this is the token that is input to the bonding curve)."),(0,i.kt)("p",null,"Minting: When the input is sent to the contract (either via ",(0,i.kt)("inlineCode",{parentName:"p"},"HandleMsg::Buy{}"),"\nwith native tokens, or via ",(0,i.kt)("inlineCode",{parentName:"p"},"HandleMsg::Receive{}")," with cw20 tokens),\nthose tokens remain on the contract and it issues it's own token to the\nsender's account (known as ",(0,i.kt)("em",{parentName:"p"},"supply")," token)."),(0,i.kt)("p",null,"Burning: We override the burn function to not only burn the requested tokens,\nbut also release a proper number of the input tokens to the account that burnt\nthe custom token"),(0,i.kt)("p",null,"Curves: ",(0,i.kt)("inlineCode",{parentName:"p"},"handle")," specifies a bonding function, which is sent to parameterize\n",(0,i.kt)("inlineCode",{parentName:"p"},"handle_fn")," (which does all the work). The curve is set when compiling\nthe contract. In fact many contracts can just wrap ",(0,i.kt)("inlineCode",{parentName:"p"},"cw20-bonding")," and\nspecify the custom curve parameter."),(0,i.kt)("p",null,"Read more about ",(0,i.kt)("a",{parentName:"p",href:"https://yos.io/2018/11/10/bonding-curves/"},"bonding curve math here")),(0,i.kt)("p",null,"Note: the first version only accepts native tokens as the"),(0,i.kt)("h3",{id:"math"},"Math"),(0,i.kt)("p",null,"Given a price curve ",(0,i.kt)("inlineCode",{parentName:"p"},"f(x)")," = price of the ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),"th token, we want to figure out\nhow to buy into and sell from the bonding curve. In fact we can look at\nthe total supply issued. let ",(0,i.kt)("inlineCode",{parentName:"p"},"F(x)")," be the integral of ",(0,i.kt)("inlineCode",{parentName:"p"},"f(x)"),". We have issued\n",(0,i.kt)("inlineCode",{parentName:"p"},"x")," tokens for ",(0,i.kt)("inlineCode",{parentName:"p"},"F(x)")," sent to the contract. Or, in reverse, if we send\n",(0,i.kt)("inlineCode",{parentName:"p"},"x")," tokens to the contract, it will mint ",(0,i.kt)("inlineCode",{parentName:"p"},"F^-1(x)")," tokens."),(0,i.kt)("p",null,"From this we can create some formulas. Assume we currently have issued ",(0,i.kt)("inlineCode",{parentName:"p"},"S"),"\ntokens in exchange for ",(0,i.kt)("inlineCode",{parentName:"p"},"N = F(S)")," input tokens. If someone sends us ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," tokens,\nhow much will we issue?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"F^-1(N+x) - F^-1(N)")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"F^-1(N+x) - S")),(0,i.kt)("p",null,"And if we sell ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," tokens, how much we will get out:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"F(S) - F(S-x)")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"N - F(S-x)")),(0,i.kt)("p",null,"Just one calculation each side. To be safe, make sure to round down and\nalways check against ",(0,i.kt)("inlineCode",{parentName:"p"},"F(S)")," when using ",(0,i.kt)("inlineCode",{parentName:"p"},"F^-1(S)")," to estimate how much\nshould be issued. This will also safely give us how many tokens to return."),(0,i.kt)("p",null,"There is built in support for safely ",(0,i.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/primitive.i128.html#method.checked_pow"},"raising i128 to an integer power"),".\nThere is also a crate to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/num-integer/0.1.43/num_integer/trait.Roots.html"},"provide nth-root of for all integers"),".\nWith these two, we can handle most math except for logs/exponents."),(0,i.kt)("p",null,"Compare this to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/7b7ff729b82ea73ea168e495d9c94cb901ae95ce/contracts/math/Power.sol"},"writing it all in solidity")),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("p",null,"Price Constant: ",(0,i.kt)("inlineCode",{parentName:"p"},"f(x) = k")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"F(x) = kx")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"F^-1(x) = x/k")),(0,i.kt)("p",null,"Price Linear: ",(0,i.kt)("inlineCode",{parentName:"p"},"f(x) = kx")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"F(x) = kx^2/2")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"F^-1(x) = (2x/k)^(0.5)")),(0,i.kt)("p",null,"Price Square Root: ",(0,i.kt)("inlineCode",{parentName:"p"},"f(x) = x^0.5")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"F(x) = x^1.5/1.5")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"F^-1(x) = (1.5*x)^(2/3)")),(0,i.kt)("p",null,"We will only implement these curves to start with, and leave it to others to import this with more complex curves,"))}d.isMDXComponent=!0}}]);