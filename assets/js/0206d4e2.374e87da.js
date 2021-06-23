(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2056],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return l},kt:function(){return u}});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=o.createContext({}),p=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,d=m["".concat(i,".").concat(u)]||m[u]||h[u]||r;return a?o.createElement(d,c(c({ref:t},l),{},{components:a})):o.createElement(d,c({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var p=2;p<r;p++)c[p]=a[p];return o.createElement.apply(null,c)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9677:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return p},default:function(){return h}});var o=a(2122),n=a(9756),r=(a(7294),a(3905)),c=["components"],s={sidebar_position:1},i={unversionedId:"community/hall-of-fame",id:"version-0.14/community/hall-of-fame",isDocsHomePage:!1,title:"Hall of Fame",description:"**Here we present yout the CosmWasm hall of fame! Kudos the contributors for their effort in making these amazing projects!**",source:"@site/versioned_docs/version-0.14/community/hall-of-fame.md",sourceDirName:"community",slug:"/community/hall-of-fame",permalink:"/0.14/community/hall-of-fame",editUrl:"https://github.com/CosmWasm/docs/edit/main/versioned_docs/version-0.14/community/hall-of-fame.md",version:"0.14",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"CHANGELOG",permalink:"/0.14/learn/CHANGELOG"},next:{title:"CW1 Spec: Proxy Contracts",permalink:"/0.14/cw-plus/cw1/intro"}},p=[{value:"NFT Marketplace by BlockScape",id:"nft-marketplace-by-blockscape",children:[]},{value:"Clawback Account",id:"clawback-account",children:[]},{value:"Random Beacon",id:"random-beacon",children:[]},{value:"Sophon",id:"sophon",children:[]}],l={toc:p};function h(e){var t=e.components,s=(0,n.Z)(e,c);return(0,r.kt)("wrapper",(0,o.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Here we present yout the CosmWasm hall of fame! Kudos the contributors for their effort in making these amazing projects!")),"\nLet's give them the visibility and fame they deserve:"),(0,r.kt)("h2",{id:"nft-marketplace-by-blockscape"},"NFT Marketplace by BlockScape"),(0,r.kt)("p",null,"Article: ",(0,r.kt)("a",{parentName:"p",href:"https://devpost.com/software/nft-marketplace"},"https://devpost.com/software/nft-marketplace")),(0,r.kt)("p",null,"Won ",(0,r.kt)("strong",{parentName:"p"},"1st place in Galileo Awards"),"(Most creative dAppchain using Cosmos SDK & Tendermint, with option to use IBC) and 3rd place in Gringotts Awards.\n",(0,r.kt)("img",{src:a(6534).Z})),(0,r.kt)("p",null,"The NFT marketplace provides a generic platform for selling and buying CW721 tokens with CW20 tokens. People can put their tokens up for sale and buy tokens from other sellers.\nWe have already seen a couple of example implementations of trading NFTs between two accounts, but all of them were on a per-contract basis. That means that for each trade, there was a separate contract which made it hard to know which tokens were actually up for sale and which token was used. This leads us to the idea of providing one central place to put tokens up for sale for maximum visibility of token sales.\nThe project demonstrates CosmWasm contract interaction very well by using 3 deployed contracts on the chain. You can see how the team implemented a custom cw721 contract here. The team contributed to the NFT contract by developing a typescript helper client. Also, the project has Keplr wallet integrated."),(0,r.kt)("p",null,"Demo: ",(0,r.kt)("a",{parentName:"p",href:"https://hackatom.blockscape.network/home"},"https://hackatom.blockscape.network/home")),(0,r.kt)("p",null,"Repo: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/BlockscapeNetwork/hackatom_v"},"https://github.com/BlockscapeNetwork/hackatom_v")),(0,r.kt)("h2",{id:"clawback-account"},"Clawback Account"),(0,r.kt)("p",null,"Article: ",(0,r.kt)("a",{parentName:"p",href:"https://devpost.com/software/clawback-account-in-cosmwasm"},"https://devpost.com/software/clawback-account-in-cosmwasm")),(0,r.kt)("p",null,"Won the ",(0,r.kt)("strong",{parentName:"p"},"1st place in Gaia Awards"),"(Best go-to-market project for Cosmos Hub)\nInspired by Bitcoin Vaults.\nThe code quality of this project is top-tier. This was evidenced by very extensive contract unit tests.\nIt\u2019s a prototype contract code for \u201cclawbacks\u201d of native and CW20 tokens. A clawback works as follows:\nThere is a \u201cholder\u201d key/account, a \u201cbackup\u201d key/account, and a \u201cclawback period\u201d (which determines when the clawback expires).\nWithin a \u201cclawback period\u201d, \u201cholder\u201d can transfer to \u201cholders\u201d / other clawbacks (provided their terms match the outgoing contract: they have the same \u201cbackup\u201d, \u201cclawback period\u201d is at least as long, and they support the same tokens) or refresh the clawback duration. After the clawback period expires, the \u201cholder\u201d can withdraw the tokens.\nWithin a \u201cclawback period\u201d, \u201cbackup\u201d can transfer to another holder, refresh the clawback duration or burn the tokens / destroy the contract."),(0,r.kt)("p",null,"Presentation: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/13aEcVFhjQFKo9bGjHe0V9HiHnqbM7eGSHbDB27Psa24/edit?usp=sharing"},"https://docs.google.com/presentation/d/13aEcVFhjQFKo9bGjHe0V9HiHnqbM7eGSHbDB27Psa24/edit?usp=sharing")),(0,r.kt)("p",null,"Repo: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/13aEcVFhjQFKo9bGjHe0V9HiHnqbM7eGSHbDB27Psa24/edit?usp=sharing"},"https://github.com/tomtau/hackatom")),(0,r.kt)("h2",{id:"random-beacon"},"Random Beacon"),(0,r.kt)("p",null,"Article: ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/confio/when-your-blockchain-needs-to-roll-the-dice-ed9da121f590"},"https://medium.com/confio/when-your-blockchain-needs-to-roll-the-dice-ed9da121f590")),(0,r.kt)("p",null,"Distributed random number generator by Simon Warta."),(0,r.kt)("p",null,"In drand, random beacons are distributed via HTTP, Gossipsub, Tor or Twitter. Such network sources cannot be accessed by a blockchain directly. However, we can create a CosmWasm smart contract which allows storing random beacons on chain. Using cross-contract queries, other contracts can then read those random values and use them in their logic."),(0,r.kt)("p",null,"Repo: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/confio/rand"},"https://github.com/confio/rand")),(0,r.kt)("h2",{id:"sophon"},"Sophon"),(0,r.kt)("p",null,"Article: ",(0,r.kt)("a",{parentName:"p",href:"https://devpost.com/software/sophon"},"https://devpost.com/software/sophon")),(0,r.kt)("p",null,"Won ",(0,r.kt)("strong",{parentName:"p"},"3rd place on Gaia Award."),"\nJust as ",(0,r.kt)("a",{parentName:"p",href:"https://yearn.finance/"},"yearn.finance")," on Ethereum can optimize DeFi\u2019s operations, the team thought a smart contract on CosmWasm could optimize Staking\u2019s operations.\nWhen funds are deposited into a contract, it will delegate the funds to the validator with the highest interest rate per Redelegate."),(0,r.kt)("p",null,"Repo: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Ninja-Chain/sophon"},"https://github.com/Ninja-Chain/sophon")))}h.isMDXComponent=!0},6534:function(e,t,a){"use strict";t.Z=a.p+"assets/images/nft_marketplace-5d4c3eb29e95bb6c4f230bf34debc0a3.jpeg"}}]);