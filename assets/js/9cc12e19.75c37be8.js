"use strict";(self.webpackChunktypegraphql_prisma_website=self.webpackChunktypegraphql_prisma_website||[]).push([[566],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2767:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={title:"Exposing selected Prisma actions only",sidebar_label:"Exposing selected actions",sidebar_position:2},i=void 0,s={unversionedId:"advanced/exposing-actions",id:"advanced/exposing-actions",title:"Exposing selected Prisma actions only",description:"If you want to expose only certain Prisma actions, like findManyUser or createOneUser, you can import resolver classes only for them, instead of the whole model XYZCrudResolver.",source:"@site/../docs/advanced/exposing-actions.md",sourceDirName:"advanced",slug:"/advanced/exposing-actions",permalink:"/docs/advanced/exposing-actions",draft:!1,editUrl:"https://github.com/MichalLytek/typegraphql-prisma/edit/main/docs/../docs/advanced/exposing-actions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Exposing selected Prisma actions only",sidebar_label:"Exposing selected actions",sidebar_position:2},sidebar:"docs",previous:{title:"Exposing selected models",permalink:"/docs/advanced/exposing-models"},next:{title:"Hiding model fields",permalink:"/docs/advanced/hiding-field"}},l={},c=[],p={toc:c};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you want to expose only certain Prisma actions, like ",(0,o.kt)("inlineCode",{parentName:"p"},"findManyUser")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"createOneUser"),", you can import resolver classes only for them, instead of the whole model ",(0,o.kt)("inlineCode",{parentName:"p"},"XYZCrudResolver"),".\nThen you just have to put them into the ",(0,o.kt)("inlineCode",{parentName:"p"},"buildSchema"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{3-5,11-13}","{3-5,11-13}":!0},'import {\n  User,\n  FindManyUserResolver,\n  CreateUserResolver,\n  UserRelationsResolver,\n} from "@generated/type-graphql";\n\nconst schema = await buildSchema({\n  resolvers: [\n    CustomUserResolver,\n    FindManyUserResolver,\n    CreateUserResolver,\n    UserRelationsResolver,\n  ],\n  validate: false,\n});\n')))}d.isMDXComponent=!0}}]);