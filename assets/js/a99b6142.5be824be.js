(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4403],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),u=l(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return n?r.createElement(f,i(i({ref:e},m),{},{components:n})):r.createElement(f,i({ref:e},m))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8823:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return m},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:5},c="Compatibility",l={unversionedId:"COMPATIBILITY",id:"COMPATIBILITY",isDocsHomePage:!1,title:"Compatibility",description:"Wasm VM can support one or more contract-VM interface versions. The interface",source:"@site/docs/05-COMPATIBILITY.md",sourceDirName:".",slug:"/COMPATIBILITY",permalink:"/docs/0.14/COMPATIBILITY",editUrl:"https://github.com/CosmWasm/docs/edit/main/docs/05-COMPATIBILITY.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Comparison with Solidity Contracts",permalink:"/docs/0.14/architecture/smart-contracts"},next:{title:"Migrating Contracts",permalink:"/docs/0.14/MIGRATING"}},m=[],p={toc:m};function u(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"compatibility"},"Compatibility"),(0,o.kt)("p",null,"Wasm VM can support one or more contract-VM interface versions. The interface\nversion is communicated by the contract via a Wasm export. This is the current\ncompatibility list:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"cosmwasm-std"),(0,o.kt)("th",{parentName:"tr",align:null},"cosmwasm-vm"),(0,o.kt)("th",{parentName:"tr",align:null},"x/wasm"),(0,o.kt)("th",{parentName:"tr",align:null},"@cosmjs/cosmwasm-stargate"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0.15"),(0,o.kt)("td",{parentName:"tr",align:null},"0.15"),(0,o.kt)("td",{parentName:"tr",align:null},"0.18"),(0,o.kt)("td",{parentName:"tr",align:null},"^0.25.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0.14"),(0,o.kt)("td",{parentName:"tr",align:null},"0.14"),(0,o.kt)("td",{parentName:"tr",align:null},"0.16-0.17"),(0,o.kt)("td",{parentName:"tr",align:null},"^0.25.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0.13"),(0,o.kt)("td",{parentName:"tr",align:null},"0.13"),(0,o.kt)("td",{parentName:"tr",align:null},"0.16"),(0,o.kt)("td",{parentName:"tr",align:null},"^0.24.0")))),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"cosmwasm-std")," version defines which contracts are compatible with this system. The wasm code uploaded must\nhave been compiled with one of the supported ",(0,o.kt)("inlineCode",{parentName:"p"},"cosmwasm-std"),' versions, or will be rejeted upon upload (with some error\nmessage about "contract too old?" or "contract too new?"). ',(0,o.kt)("inlineCode",{parentName:"p"},"cosmwasm-vm")," version defines the runtime used. It is a\nbreaking change to switch runtimes (you will need to organize a chain upgrade). As of ",(0,o.kt)("inlineCode",{parentName:"p"},"cosmwasm-vm 0.13")," we are\nusing ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wasmerio/wasmer/"},"wasmer")," 1.0, which is significantly more performant than the older versions.\n",(0,o.kt)("inlineCode",{parentName:"p"},"@cosmjs/cosmwasm-stargate")," follows the compatible ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmjs"},"CosmJS")," version."))}u.isMDXComponent=!0}}]);