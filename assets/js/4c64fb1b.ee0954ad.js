(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7862],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(t),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return t?r.createElement(m,c(c({ref:n},u),{},{components:t})):r.createElement(m,c({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9823:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),c=["components"],i={sidebar_position:3},l="Challenge",s={unversionedId:"lesson-2/challenge",id:"lesson-2/challenge",isDocsHomePage:!1,title:"Challenge",description:"Try deploying a cw20 token with few friends(or addresses you created) as initial balance owners to recent testnet.",source:"@site/dev-academy/lesson-2/03-challenge.md",sourceDirName:"lesson-2",slug:"/lesson-2/challenge",permalink:"/dev-academy/lesson-2/challenge",editUrl:"https://github.com/CosmWasm/docs/edit/main/dev-academy/lesson-2/03-challenge.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"devAcademy",previous:{title:"Basics of Smart Contract Interactions",permalink:"/dev-academy/lesson-2/interact"}},u=[],p={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"challenge"},"Challenge"),(0,a.kt)("p",null,"Try deploying a cw20 token with few friends(or addresses you created) as initial balance owners to recent testnet."))}f.isMDXComponent=!0}}]);