"use strict";(self.webpackChunktypegraphql_prisma_website=self.webpackChunktypegraphql_prisma_website||[]).push([[908],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),g=a,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"Configuration",sidebar_position:2},o=void 0,p={unversionedId:"basics/configuration",id:"basics/configuration",title:"Configuration",description:"Creating generator block",source:"@site/../docs/basics/configuration.md",sourceDirName:"basics",slug:"/basics/configuration",permalink:"/docs/basics/configuration",draft:!1,editUrl:"https://github.com/MichalLytek/typegraphql-prisma/edit/main/docs/../docs/basics/configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Configuration",sidebar_position:2},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/basics/installation"},next:{title:"Usage",permalink:"/docs/basics/usage"}},l={},s=[{value:"Creating generator block",id:"creating-generator-block",level:2},{value:"Changing output folder",id:"changing-output-folder",level:2},{value:"Emitting transpiled code",id:"emitting-transpiled-code",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"creating-generator-block"},"Creating generator block"),(0,a.kt)("p",null,"After installation, you need to update your ",(0,a.kt)("inlineCode",{parentName:"p"},"schema.prisma")," file and then add a new generator section below the ",(0,a.kt)("inlineCode",{parentName:"p"},"client")," one:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-prisma",metastring:"{10-12}","{10-12}":!0},'datasource postgres {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\n\ngenerator client {\n  provider = "prisma-client-js"\n}\n\ngenerator typegraphql {\n  provider = "typegraphql-prisma"\n}\n')),(0,a.kt)("p",null,"Then run ",(0,a.kt)("inlineCode",{parentName:"p"},"npx prisma generate")," - this will emit the generated TypeGraphQL classes to the ",(0,a.kt)("inlineCode",{parentName:"p"},"@generated/type-graphql")," folder inside ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,a.kt)("h2",{id:"changing-output-folder"},"Changing output folder"),(0,a.kt)("p",null,"When you want to emit the generated files into a different folder, you can configure the default output folder via the ",(0,a.kt)("inlineCode",{parentName:"p"},"output")," config option, e.g.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-prisma",metastring:"{3}","{3}":!0},'generator typegraphql {\n  provider = "typegraphql-prisma"\n  output   = "../prisma/generated/type-graphql"\n}\n')),(0,a.kt)("h2",{id:"emitting-transpiled-code"},"Emitting transpiled code"),(0,a.kt)("p",null,"By default, when the output path contains ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),", the generated code is transpiled - consist of ",(0,a.kt)("inlineCode",{parentName:"p"},"*.js")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"*.d.ts")," files that are ready to use (import) in your code."),(0,a.kt)("p",null,"However, if you explicitly choose some other (non ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),") folder in ",(0,a.kt)("inlineCode",{parentName:"p"},"output")," config, the generated code will be emitted as a raw TS source code files which you can just use and import like your other source code files."),(0,a.kt)("p",null,"You can overwrite that behavior by explicitly setting ",(0,a.kt)("inlineCode",{parentName:"p"},"emitTranspiledCode")," config option:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-prisma",metastring:"{4}","{4}":!0},'generator typegraphql {\n  provider           = "typegraphql-prisma"\n  output             = "../prisma/generated/type-graphql"\n  emitTranspiledCode = true\n}\n')))}u.isMDXComponent=!0}}]);