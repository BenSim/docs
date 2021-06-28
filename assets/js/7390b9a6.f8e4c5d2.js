(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9858],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,w=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(w,o(o({ref:t},p),{},{components:n})):a.createElement(w,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9948:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],c={title:"cw721-base Spec",sidebar_position:2},s="Cw721 Basic",l={unversionedId:"cw-plus/cw721/cw721-base",id:"cw-plus/cw721/cw721-base",isDocsHomePage:!1,title:"cw721-base Spec",description:"cw721-basic source code//github.com/CosmWasm/cosmwasm-plus/blob/master/contracts/cw721-base/README.md",source:"@site/docs/cw-plus/cw721/cw721-base.md",sourceDirName:"cw-plus/cw721",slug:"/cw-plus/cw721/cw721-base",permalink:"/next/cw-plus/cw721/cw721-base",editUrl:"https://github.com/CosmWasm/docs/edit/main/docs/cw-plus/cw721/cw721-base.md",version:"current",sidebarPosition:2,frontMatter:{title:"cw721-base Spec",sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"cw721 Spec",permalink:"/next/cw-plus/cw721/spec"},next:{title:"Overview",permalink:"/next/cw-plus/general/overview"}},p=[{value:"Implementation",id:"implementation",children:[]},{value:"Importing this contract",id:"importing-this-contract",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cw721-basic"},"Cw721 Basic"),(0,i.kt)("p",null,"cw721-basic source code: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-plus/blob/master/contracts/cw721-base/README.md"},"https://github.com/CosmWasm/cosmwasm-plus/blob/master/contracts/cw721-base/README.md")),(0,i.kt)("p",null,"This is a basic implementation of a cw721 NFT contract. It implements\nthe ",(0,i.kt)("a",{parentName:"p",href:"/next/cw-plus/cw721/spec"},"cw721 spec")," and is designed to\nbe deployed as is, or imported into other contracts to easily build\ncw721-compatible NFTs with custom logic."),(0,i.kt)("p",null,"Implements:"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","cw721 Base"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Metadata extension"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Enumerable extension (AllTokens done, but not Tokens - requires ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/cosmwasm-plus/issues/81"},"#81"),")")),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"HandleMsg")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryMsg")," implementations follow the ",(0,i.kt)("a",{parentName:"p",href:"/next/cw-plus/cw721/spec"},"cw721 spec")," and are described there.\nBeyond that, we make a few additions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"InitMsg")," takes name and symbol (for metadata), as well as a ",(0,i.kt)("strong",{parentName:"li"},"Minter")," address. This is a special address that has full\npower to mint new NFTs (but not modify existing ones)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HandleMsg::Mint{token_id, owner, name, description, image}")," - creates a new token with given owner and metadata. It can only be called by\nthe Minter set in ",(0,i.kt)("inlineCode",{parentName:"li"},"init"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"QueryMsg::Minter{}")," - returns the minter address for this contract.")),(0,i.kt)("p",null,"It requires all tokens to have defined metadata in the standard format (with no extensions). For generic NFTs this may\noften be enough."),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"Minter")," can either be an external actor (eg. web server, using PubKey) or another contract. If you just want to customize\nthe minting behavior but not other functionality, you could extend this contract (importing code and wiring it together)\nor just create a custom contract as the owner and use that contract to Mint."),(0,i.kt)("h2",{id:"importing-this-contract"},"Importing this contract"),(0,i.kt)("p",null,"You can also import much of the logic of this contract to build another\ncw721-compliant contract, such as tradable names, crypto kitties,\nor tokenized real estate."),(0,i.kt)("p",null,"Basically, you just need to write your handle function and import\n",(0,i.kt)("inlineCode",{parentName:"p"},"cw721_base::contract::handle_transfer"),", etc and dispatch to them.\nThis allows you to use custom ",(0,i.kt)("inlineCode",{parentName:"p"},"HandleMsg")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryMsg")," with your additional\ncalls, but then use the underlying implementation for the standard cw721\nmessages you want to support. The same with ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryMsg"),". You will most\nlikely want to write a custom, domain-specific ",(0,i.kt)("inlineCode",{parentName:"p"},"init"),"."),(0,i.kt)("p",null,"For now, you can look at ",(0,i.kt)("a",{parentName:"p",href:"/next/cw-plus/cw20/cw20-staking-spec"},(0,i.kt)("inlineCode",{parentName:"a"},"cw20-staking")),'\nfor an example of how to "inherit" cw20 functionality and combine it with custom logic.\nThe process is similar for cw721.'))}m.isMDXComponent=!0}}]);