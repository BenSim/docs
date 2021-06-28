(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[809],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=i,b=m["".concat(l,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(b,a(a({ref:t},u),{},{components:n})):r.createElement(b,a({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8493:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:1},l="Build Requirements",c={unversionedId:"testnets/build-requirements",id:"testnets/build-requirements",isDocsHomePage:!1,title:"Build Requirements",description:"For minimum system requirements instances with 2 processor CPU and 4GB memory is recommended.",source:"@site/docs/testnets/build-requirements.md",sourceDirName:"testnets",slug:"/testnets/build-requirements",permalink:"/next/testnets/build-requirements",editUrl:"https://github.com/CosmWasm/docs/edit/main/docs/testnets/build-requirements.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Comparison with Solidity Contracts",permalink:"/next/architecture/smart-contracts"},next:{title:"Joining Testnets",permalink:"/next/testnets/testnets"}},u=[{value:"Simplest",id:"simplest",children:[]},{value:"Bare Metal",id:"bare-metal",children:[{value:"Option 1 (preferred - build static binary using docker - Linux only)",id:"option-1-preferred---build-static-binary-using-docker---linux-only",children:[]},{value:"Option 2: (dev-style: dynamic binary - works on Linux and OSX)",id:"option-2-dev-style-dynamic-binary---works-on-linux-and-osx",children:[]}]}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"build-requirements"},"Build Requirements"),(0,o.kt)("p",null,"For minimum system requirements instances with 2 processor CPU and 4GB memory is recommended.\nBuilding code may require larger instances, especially if you want to build a static instance (recompile Rust code)."),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Node executable may vary between networks, and ",(0,o.kt)("a",{parentName:"p",href:"#option-1-preferred-build-static-binary-using-docker-linux-only"},"Option 1"),"\nmight become obsolete. Network details, configuration and informations can be found on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/testnets"},"CosmWasm/testnets"),". Please head over to the repo and explore before starting setting up a node."),(0,o.kt)("h2",{id:"simplest"},"Simplest"),(0,o.kt)("p",null,"Use docker image, or build locally: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://github.com/CosmWasm/wasmd/#dockerized"),"."),(0,o.kt)("h2",{id:"bare-metal"},"Bare Metal"),(0,o.kt)("h3",{id:"option-1-preferred---build-static-binary-using-docker---linux-only"},"Option 1 (preferred - build static binary using docker - Linux only)"),(0,o.kt)("p",null,"Constructing a ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmd")," is a tricky process and involves using Alpine Linux as a build environment and recompiling the Rust dependencies as static libs.\nUsing Dockerfile is suggested."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clone the project ",(0,o.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/CosmWasm/wasmd.git && cd wasmd"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Checkout to testnets version ",(0,o.kt)("inlineCode",{parentName:"p"},"git checkout vx.x.x"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Build docker image ",(0,o.kt)("inlineCode",{parentName:"p"},"docker build . -t wasmd-docker"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Extract the specific binaries from build environment:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"id=$(docker create wasmd-docker)\ndocker cp $id:/usr/bin/wasmd .\ndocker rm -v $id\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the static binaries on any bare metal Linux box"))),(0,o.kt)("h3",{id:"option-2-dev-style-dynamic-binary---works-on-linux-and-osx"},"Option 2: (dev-style: dynamic binary - works on Linux and OSX)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/CosmWasm/wasmd.git && cd wasmd")),(0,o.kt)("li",{parentName:"ol"},"Checkout to testnets version ",(0,o.kt)("inlineCode",{parentName:"li"},"git checkout vx.x.x")),(0,o.kt)("li",{parentName:"ol"},"Compile dev build: ",(0,o.kt)("inlineCode",{parentName:"li"},"make build")),(0,o.kt)("li",{parentName:"ol"},"Move to binary to desired location")))}m.isMDXComponent=!0}}]);