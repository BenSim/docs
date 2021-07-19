(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6354],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2025:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],s={title:"CW20 ICS20",sidebar_position:3},c="CW20 ICS20",l={unversionedId:"ibc/cw20-ics20",id:"ibc/cw20-ics20",isDocsHomePage:!1,title:"CW20 ICS20",description:"Specification",source:"@site/docs/04-ibc/03-cw20-ics20.md",sourceDirName:"04-ibc",slug:"/ibc/cw20-ics20",permalink:"/docs/0.14/ibc/cw20-ics20",editUrl:"https://github.com/CosmWasm/docs/edit/main/docs/04-ibc/03-cw20-ics20.md",version:"current",sidebarPosition:3,frontMatter:{title:"CW20 ICS20",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"IBC Relayer",permalink:"/docs/0.14/ibc/relayer"},next:{title:"CHANGELOG",permalink:"/docs/0.14/CHANGELOG"}},u=[{value:"Specification",id:"specification",children:[{value:"Workflow",id:"workflow",children:[]},{value:"Messages",id:"messages",children:[]},{value:"Queries",id:"queries",children:[]},{value:"IBC Responses",id:"ibc-responses",children:[]}]},{value:"Demonstration",id:"demonstration",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cw20-ics20"},"CW20 ICS20"),(0,o.kt)("h2",{id:"specification"},"Specification"),(0,o.kt)("p",null,"This is an ",(0,o.kt)("em",{parentName:"p"},"IBC Enabled")," contract that allows us to send CW20 tokens from one chain over the standard ICS20 protocol to\nthe bank module of another chain. In short, it let's us send our custom CW20 tokens with IBC and use them just like\nnative tokens on other chains."),(0,o.kt)("p",null,"It is only designed to send tokens and redeem previously sent tokens. It will not mint tokens belonging to assets\noriginating on the foreign chain. This is different than the Golang ",(0,o.kt)("inlineCode",{parentName:"p"},"ibctransfer")," module, but we properly implement\nICS20 and respond with an error message... let's hope the Go side handles this correctly."),(0,o.kt)("h3",{id:"workflow"},"Workflow"),(0,o.kt)("p",null,"The contract starts with minimal state. It just stores a default timeout in seconds for all packets it sends. Most\nimportantly it binds a local IBC port to enable channel connections."),(0,o.kt)("p",null,"An external party first needs to make one or more channels using this contract as one endpoint. It will use standard\nics20 unordered channels for the version negotiation. Once established, it manages a list of known channels. You can use\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/confio/ts-relayer"},"ts-relayer")," ",(0,o.kt)("inlineCode",{parentName:"p"},"ibc-setup ics20")," command to create these."),(0,o.kt)("p",null,"After there is at least one channel, you can send any CW20 token to this contract via the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-plus/blob/master/packages/cw20/README.md#receiver"},"receiver pattern"),". The receive\nmessage must contain the channel to send over and the remote address to send to. It may optionally include a custom\ntimeout."),(0,o.kt)("h3",{id:"messages"},"Messages"),(0,o.kt)("p",null,"It only accepts CW20ReceiveMsg from a cw20 contract. The data sent along with that message must be a JSON-serialized\nTransferMsg:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct TransferMsg {\n  /// The local channel to send the packets on\n  pub channel: String,\n  /// The remote address to send to\n  /// Don't use HumanAddress as this will likely have a different Bech32 prefix than we use\n  /// and cannot be validated locally\n  pub remote_address: String,\n  /// How long the packet lives in seconds. If not specified, use default_timeout\n  pub timeout: Option<u64>,\n}\n")),(0,o.kt)("p",null,"In addition, it supports directly sending native tokens via ",(0,o.kt)("inlineCode",{parentName:"p"},"ExecuteMsg::Transfer(TransferMsg)"),". You must send ",(0,o.kt)("em",{parentName:"p"},"exactly\none")," coin denom along with the transfer message, and that amount will be transfered to the remote host."),(0,o.kt)("h3",{id:"queries"},"Queries"),(0,o.kt)("p",null,"Queries only make sense relative to the established channels of this contract."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Port{}")," - returns the port ID this contract has bound, so you can create channels. This info can be queried via wasmd\ncontract info query, but we expose another query here for convenience."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ListChannels{}")," - returns a (currently unpaginated) list of all channels that have been created on this contract.\nReturns their local channelId along with some basic metadata, like the remote port/channel and the connection they run\non top of."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Channel{id}")," - returns more detailed information on one specific channel. In addition to the information available in\nthe list view, it returns the current outstanding balance on that channel, as well as the total amount that has ever\nbeen sent on the channel.")),(0,o.kt)("h3",{id:"ibc-responses"},"IBC Responses"),(0,o.kt)("p",null,"These are defined by the ICS20 spec."),(0,o.kt)("p",null,"Notably, each Channel has a balance of tokens sent over that channel. If an incoming transfer request comes in for a\ndenom it does not know, or for a balance larger than we have sent, we will return an error in the acknowledgement\npacket."),(0,o.kt)("h2",{id:"demonstration"},"Demonstration"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Under Development")))}p.isMDXComponent=!0}}]);