"use strict";(self.webpackChunktypegraphql_prisma_website=self.webpackChunktypegraphql_prisma_website||[]).push([[370],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7190:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={title:"Installation",sidebar_position:1},o=void 0,l={unversionedId:"basics/installation",id:"basics/installation",title:"Installation",description:"Be aware that due to usage of some ES2019 and newer Node.js features, you also have to use Node.js v12.4.0 or newer.",source:"@site/../docs/basics/installation.md",sourceDirName:"basics",slug:"/basics/installation",permalink:"/docs/basics/installation",draft:!1,editUrl:"https://github.com/MichalLytek/typegraphql-prisma/edit/main/docs/../docs/basics/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Installation",sidebar_position:1},sidebar:"docs",previous:{title:"Basics",permalink:"/docs/category/basics"},next:{title:"Configuration",permalink:"/docs/basics/configuration"}},p={},s=[{value:"TypeGraphQL",id:"typegraphql",level:3},{value:"<code>typegraphql-prisma</code> generator",id:"typegraphql-prisma-generator",level:3},{value:"Additional dependencies",id:"additional-dependencies",level:3},{value:"TypeScript configuration",id:"typescript-configuration",level:3}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Be aware that due to usage of some ES2019 and newer Node.js features, you also have to use ",(0,r.kt)("strong",{parentName:"p"},"Node.js v12.4.0 or newer"),".")),(0,r.kt)("h3",{id:"typegraphql"},"TypeGraphQL"),(0,r.kt)("p",null,"First of all, you should perform all the steps described in the TypeGraphQL installation instruction:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://typegraphql.com/docs/installation.html"},"https://typegraphql.com/docs/installation.html")),(0,r.kt)("h3",{id:"typegraphql-prisma-generator"},(0,r.kt)("inlineCode",{parentName:"h3"},"typegraphql-prisma")," generator"),(0,r.kt)("p",null,"After that, you have to install the generator, as a dev dependency:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm i -D typegraphql-prisma\n")),(0,r.kt)("p",null,"Furthermore, ",(0,r.kt)("inlineCode",{parentName:"p"},"typegraphql-prisma")," requires Prisma to work properly, so please install Prisma dependencies if you don't have it already installed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm i -D prisma\n$ npm i @prisma/client\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Be aware that ",(0,r.kt)("inlineCode",{parentName:"p"},"typegraphql-prisma")," is designed to work with a selected versions of ",(0,r.kt)("inlineCode",{parentName:"p"},"prisma"),"."),(0,r.kt)("p",{parentName:"admonition"},"Please make sure you use ",(0,r.kt)("inlineCode",{parentName:"p"},"prisma")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@prisma/client")," of version matching ",(0,r.kt)("inlineCode",{parentName:"p"},"~4.1.0"),".\nOtherwise, the runtime check will report an error when you run the generator.")),(0,r.kt)("h3",{id:"additional-dependencies"},"Additional dependencies"),(0,r.kt)("p",null,"You also need to install the GraphQL Scalars library (to support the Prisma ",(0,r.kt)("inlineCode",{parentName:"p"},"Json"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"BigInt")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Byte")," types):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm i graphql-scalars\n")),(0,r.kt)("p",null,"In order to properly support the aggregate and group by queries, the ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-fields")," package is used, so it also has to be installed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm i graphql-fields @types/graphql-fields\n")),(0,r.kt)("p",null,"Finally, please also install the ",(0,r.kt)("inlineCode",{parentName:"p"},"tslib")," package, which is required for ",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced/additional-decorators"},"applying the additional decorators")," properly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm i tslib\n")),(0,r.kt)("h3",{id:"typescript-configuration"},"TypeScript configuration"),(0,r.kt)("p",null,"As prisma emits multiple files, make sure you have your tsconfig set properly to ",(0,r.kt)("inlineCode",{parentName:"p"},'"module": "commonjs"'),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"{4}","{4}":!0},'{\n  "compilerOptions": {\n    "target": "es2018",\n    "module": "commonjs",\n    "lib": ["es2018", "esnext.asynciterable"],\n    "experimentalDecorators": true,\n    "emitDecoratorMetadata": true\n  }\n}\n')),(0,r.kt)("p",null,"Otherwise you may experience runtime errors like ",(0,r.kt)("inlineCode",{parentName:"p"},"ReferenceError: Cannot access 'BankAccountWhereInput' before initialization"),".\nIt's because those generated files rely on each other, so ",(0,r.kt)("inlineCode",{parentName:"p"},"commonjs")," is needed to handle that cyclic imports."))}d.isMDXComponent=!0}}]);