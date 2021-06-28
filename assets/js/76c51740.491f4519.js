(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8540],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return t?a.createElement(k,o(o({ref:n},c),{},{components:t})):a.createElement(k,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3998:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=t(2122),i=t(9756),r=(t(7294),t(3905)),o=["components"],s={title:"cw721 Spec",sidebar_position:1},l="CW721 Spec: Non Fungible Tokens",p={unversionedId:"cw-plus/cw721/spec",id:"version-0.14/cw-plus/cw721/spec",isDocsHomePage:!1,title:"cw721 Spec",description:"cw721 package source code//github.com/CosmWasm/cosmwasm-plus/blob/master/packages/cw721/README.md",source:"@site/versioned_docs/version-0.14/cw-plus/cw721/spec.md",sourceDirName:"cw-plus/cw721",slug:"/cw-plus/cw721/spec",permalink:"/0.14/cw-plus/cw721/spec",editUrl:"https://github.com/CosmWasm/docs/edit/main/versioned_docs/version-0.14/cw-plus/cw721/spec.md",version:"0.14",sidebarPosition:1,frontMatter:{title:"cw721 Spec",sidebar_position:1}},c=[{value:"Base",id:"base",children:[{value:"Messages",id:"messages",children:[]},{value:"Queries",id:"queries",children:[]},{value:"Receiver",id:"receiver",children:[]}]},{value:"Metadata",id:"metadata",children:[{value:"Queries",id:"queries-1",children:[]}]},{value:"Enumerable",id:"enumerable",children:[{value:"Queries",id:"queries-2",children:[]}]}],d={toc:c};function u(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cw721-spec-non-fungible-tokens"},"CW721 Spec: Non Fungible Tokens"),(0,r.kt)("p",null,"cw721 package source code: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-plus/blob/master/packages/cw721/README.md"},"https://github.com/CosmWasm/cosmwasm-plus/blob/master/packages/cw721/README.md")),(0,r.kt)("p",null,"cw721 is a specification for non-fungible tokens based on CosmWasm.\nThe name and design is based on Ethereum's ERC721 standard,\nwith some enhancements. The types in here can be imported by\ncontracts that wish to implement this  spec, or by contracts that call\nto any standard cw721 contract."),(0,r.kt)("p",null,"The specification is split into multiple sections, a contract may only\nimplement some of this functionality, but must implement the base."),(0,r.kt)("h2",{id:"base"},"Base"),(0,r.kt)("p",null,"This handles ownership, transfers, and allowances. These must be supported\nas is by all cw721 contracts. Note that all tokens must have an owner,\nas well as an ID. The ID is an arbitrary string, unique within the contract."),(0,r.kt)("h3",{id:"messages"},"Messages"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TransferNft{recipient, token_id}")," -\nThis transfers ownership of the token to ",(0,r.kt)("inlineCode",{parentName:"p"},"recipient")," account. This is\ndesigned to send to an address controlled by a private key and ",(0,r.kt)("em",{parentName:"p"},"does not"),"\ntrigger any actions on the recipient if it is a contract."),(0,r.kt)("p",null,"Requires ",(0,r.kt)("inlineCode",{parentName:"p"},"token_id")," to point to a valid token, and ",(0,r.kt)("inlineCode",{parentName:"p"},"env.sender")," to be\nthe owner of it, or have an allowance to transfer it."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SendNft{contract, token_id, msg}")," -\nThis transfers ownership of the token to ",(0,r.kt)("inlineCode",{parentName:"p"},"contract")," account. ",(0,r.kt)("inlineCode",{parentName:"p"},"contract"),"\nmust be an address controlled by a smart contract, which implements\nthe cw721Receiver interface. The ",(0,r.kt)("inlineCode",{parentName:"p"},"msg")," will be passed to the recipient\ncontract, along with the token_id."),(0,r.kt)("p",null,"Requires ",(0,r.kt)("inlineCode",{parentName:"p"},"token_id")," to point to a valid token, and ",(0,r.kt)("inlineCode",{parentName:"p"},"env.sender")," to be\nthe owner of it, or have an allowance to transfer it."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Approve{spender, token_id, expires}")," - Grants permission to ",(0,r.kt)("inlineCode",{parentName:"p"},"spender")," to\ntransfer or send the given token. This can only be performed when\n",(0,r.kt)("inlineCode",{parentName:"p"},"env.sender")," is the owner of the given ",(0,r.kt)("inlineCode",{parentName:"p"},"token_id")," or an ",(0,r.kt)("inlineCode",{parentName:"p"},"operator"),".\nThere can multiple spender accounts per token, and they are cleared once\nthe token is transfered or sent."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Revoke{spender, token_id}")," - This revokes a previously granted permission\nto transfer the given ",(0,r.kt)("inlineCode",{parentName:"p"},"token_id"),". This can only be granted when\n",(0,r.kt)("inlineCode",{parentName:"p"},"env.sender")," is the owner of the given ",(0,r.kt)("inlineCode",{parentName:"p"},"token_id")," or an ",(0,r.kt)("inlineCode",{parentName:"p"},"operator"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ApproveAll{operator, expires}")," - Grant ",(0,r.kt)("inlineCode",{parentName:"p"},"operator")," permission to transfer or send\nall tokens owned by ",(0,r.kt)("inlineCode",{parentName:"p"},"env.sender"),". This approval is tied to the owner, not the\ntokens and applies to any future token that the owner receives as well."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RevokeAll{operator}")," - Revoke a previous ",(0,r.kt)("inlineCode",{parentName:"p"},"ApproveAll")," permission granted\nto the given ",(0,r.kt)("inlineCode",{parentName:"p"},"operator"),"."),(0,r.kt)("h3",{id:"queries"},"Queries"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"OwnerOf{token_id}")," - Returns the owner of the given token,\nas well as anyone with approval on this particular token.\nIf the token is unknown, returns an error. Return type is\n",(0,r.kt)("inlineCode",{parentName:"p"},"OwnerResponse{owner}"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ApprovedForAll{owner, include_expired}")," - List all operators that can\naccess all of  the owner's tokens. Return type is ",(0,r.kt)("inlineCode",{parentName:"p"},"ApprovedForAllResponse"),".\nIf ",(0,r.kt)("inlineCode",{parentName:"p"},"include_expired")," is set, show expired owners in the results, otherwise,\nignore them."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NumTokens{}")," - Total number of tokens issued"),(0,r.kt)("h3",{id:"receiver"},"Receiver"),(0,r.kt)("p",null,"The counter-part to ",(0,r.kt)("inlineCode",{parentName:"p"},"SendNft")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"ReceiveNft"),", which must be implemented by\nany contract that wishes to manage cw721 tokens. This is generally ",(0,r.kt)("em",{parentName:"p"},"not"),"\nimplemented by any cw721 contract."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ReceiveNft{sender, token_id, msg}")," - This is designed to handle ",(0,r.kt)("inlineCode",{parentName:"p"},"SendNft"),"\nmessages. The address of the contract is stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"env.sender"),"\nso it cannot be faked. The contract should ensure the sender matches\nthe token contract it expects to handle, and not allow arbitrary addresses."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sender")," is the original account requesting to move the token\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"msg")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Binary")," data that can be decoded into a contract-specific\nmessage. This can be empty if we have only one default action,\nor it may be a ",(0,r.kt)("inlineCode",{parentName:"p"},"ReceiveMsg")," variant to clarify the intention. For example,\nif I send to an exchange, I can specify the price I want to list the token\nfor."),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("h3",{id:"queries-1"},"Queries"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ContractInfo{}")," - This returns top-level metadata about the contract.\nNamely, ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"symbol"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NftInfo{token_id}")," - This returns metadata about one particular token.\nThe return value is based on ",(0,r.kt)("em",{parentName:"p"},"ERC721 Metadata JSON Schema"),", but directly\nfrom the contract, not as a Uri. Only the image link is a Uri."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AllNftInfo{token_id}")," - This returns the result of both ",(0,r.kt)("inlineCode",{parentName:"p"},"NftInfo"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"OwnerOf")," as one query as an optimization for clients, which may\nwant both info to display one NFT."),(0,r.kt)("h2",{id:"enumerable"},"Enumerable"),(0,r.kt)("h3",{id:"queries-2"},"Queries"),(0,r.kt)("p",null,"Pagination is acheived via ",(0,r.kt)("inlineCode",{parentName:"p"},"start_after")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"limit"),". Limit is a request\nset by the client, if unset, the contract will automatically set it to\n",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultLimit")," (suggested 10). If set, it will be used up to a ",(0,r.kt)("inlineCode",{parentName:"p"},"MaxLimit"),"\nvalue (suggested 30). Contracts can define other ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultLimit")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"MaxLimit"),"\nvalues without violating the cw721 spec, and clients should not rely on\nany particular values."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"start_after")," is unset, the query returns the first results, ordered by\nlexogaphically by ",(0,r.kt)("inlineCode",{parentName:"p"},"token_id"),". If ",(0,r.kt)("inlineCode",{parentName:"p"},"start_after")," is set, then it returns the\nfirst ",(0,r.kt)("inlineCode",{parentName:"p"},"limit")," tokens ",(0,r.kt)("em",{parentName:"p"},"after")," the given one. This allows straight-forward\npagination by taking the last result returned (a ",(0,r.kt)("inlineCode",{parentName:"p"},"token_id"),") and using it\nas the ",(0,r.kt)("inlineCode",{parentName:"p"},"start_after")," value in a future query."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Tokens{owner, start_after, limit}")," - List all token_ids that belong to a given owner.\nReturn type is ",(0,r.kt)("inlineCode",{parentName:"p"},"TokensResponse{tokens: Vec<token_id>}"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AllTokens{start_after, limit}")," - Requires pagination. Lists all token_ids controlled by\nthe contract."))}u.isMDXComponent=!0}}]);