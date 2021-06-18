(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5071:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],c={title:"CW2 Spec"},s={unversionedId:"cw-plus/cw2/Spec",id:"cw-plus/cw2/Spec",isDocsHomePage:!1,title:"CW2 Spec: Contract Info for Migration",description:"Repo link//github.com/CosmWasm/cosmwasm-plus/tree/master/packages/cw2",source:"@site/docs/cw-plus/cw2/Spec.md",sourceDirName:"cw-plus/cw2",slug:"/cw-plus/cw2/Spec",permalink:"/0.14/cw-plus/cw2/Spec",editUrl:"https://github.com/CosmWasm/docs/edit/main/docs/cw-plus/cw2/Spec.md",version:"current",frontMatter:{title:"CW2 Spec"},sidebar:"defaultSidebar",previous:{title:"CW1 Whitelist",permalink:"/0.14/cw-plus/cw1/cw1-whitelist"},next:{title:"CW3 Spec: MultiSig/Voting Contracts",permalink:"/0.14/cw-plus/cw3/spec"}},l=[{value:"Data structures",id:"data-structures",children:[]},{value:"Queries",id:"queries",children:[]}],p={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Repo link: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-plus/tree/master/packages/cw2"},"https://github.com/CosmWasm/cosmwasm-plus/tree/master/packages/cw2")),(0,o.kt)("p",null,"Most of the CW",(0,o.kt)("em",{parentName:"p"}," specs are focused on the "),"public interfaces",(0,o.kt)("em",{parentName:"p"},"\nof the contract. The APIs used for ",(0,o.kt)("inlineCode",{parentName:"em"},"HandleMsg")," or ",(0,o.kt)("inlineCode",{parentName:"em"},"QueryMsg"),".\nHowever, when we wish to migrate from contract A to contract B,\ncontract B needs to be aware somehow of how the "),"state was encoded*."),(0,o.kt)("p",null,"Generally we use Singletons and Buckets to store the state, but\nif I upgrade to a ",(0,o.kt)("inlineCode",{parentName:"p"},"cw20-with-bonding-curve")," contract, it will only\nwork properly if I am migrating from a ",(0,o.kt)("inlineCode",{parentName:"p"},"cw20-base")," contract. But how\ncan the new contract know what format the data was stored."),(0,o.kt)("p",null,"This is where cw2 comes in. It specifies on special Singleton to\nbe stored on disk by all contracts on ",(0,o.kt)("inlineCode",{parentName:"p"},"init"),". When the ",(0,o.kt)("inlineCode",{parentName:"p"},"migrate"),"\nfunction is called, then the new contract can read that data and\nsee if this is an expected contract we can migrate from. And also\ncontain extra version information if we support multiple migrate\npaths."),(0,o.kt)("h3",{id:"data-structures"},"Data structures"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Required")),(0,o.kt)("p",null,"All cw2-compliant contracts must store the following data:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"key: ",(0,o.kt)("inlineCode",{parentName:"li"},"\\x00\\x0dcontract_info"),' (length prefixed "contract_info" using Singleton pattern)'),(0,o.kt)("li",{parentName:"ul"},"data: Json-serialized ",(0,o.kt)("inlineCode",{parentName:"li"},"ContractVersion"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'pub struct ContractVersion {\n    /// contract is a globally unique identifier for the contract.\n    /// it should build off standard namespacing for whichever language it is in,\n    /// and prefix it with the registry we use.\n    /// For rust we prefix with `crates.io:`, to give us eg. `crates.io:cw20-base`\n    pub contract: String,\n    /// version is any string that this implementation knows. It may be simple counter "1", "2".\n    /// or semantic version on release tags "v0.6.2", or some custom feature flag list.\n    /// the only code that needs to understand the version parsing is code that knows how to\n    /// migrate from the given contract (and is tied to it\'s implementation somehow)\n    pub version: String,\n}\n')),(0,o.kt)("p",null,"Thus, an serialized example may looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "contract": "crates.io:cw20-base",\n    "version": "v0.1.0"\n}\n')),(0,o.kt)("h3",{id:"queries"},"Queries"),(0,o.kt)("p",null,'Since the state is well defined, we do not need to support any "smart queries".\nWe do provide a helper to construct a "raw query" to read the ContractInfo\nof any cw2-compliant contract.'))}u.isMDXComponent=!0}}]);