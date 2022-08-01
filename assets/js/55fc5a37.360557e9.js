"use strict";(self.webpackChunktypegraphql_prisma_website=self.webpackChunktypegraphql_prisma_website||[]).push([[444],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,f=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"Changing exposed model type field name",sidebar_label:"Renaming field",sidebar_position:7},o=void 0,l={unversionedId:"advanced/renaming-field",id:"advanced/renaming-field",title:"Changing exposed model type field name",description:"You can also change the name of the model type fields exposed in GraphQL Schema.",source:"@site/../docs/advanced/renaming-field.md",sourceDirName:"advanced",slug:"/advanced/renaming-field",permalink:"/docs/advanced/renaming-field",draft:!1,editUrl:"https://github.com/MichalLytek/typegraphql-prisma/edit/main/docs/../docs/advanced/renaming-field.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Changing exposed model type field name",sidebar_label:"Renaming field",sidebar_position:7},sidebar:"docs",previous:{title:"Renaming model",permalink:"/docs/advanced/renaming-model"},next:{title:"Unchecked scalars input",permalink:"/docs/advanced/unchecked-scalars"}},p={},s=[],d={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can also change the name of the model type fields exposed in GraphQL Schema.\nTo achieve this, just put the ",(0,a.kt)("inlineCode",{parentName:"p"},"@TypeGraphQL.field")," doc line above the model field definition in ",(0,a.kt)("inlineCode",{parentName:"p"},"schema.prisma")," file, e.g:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-prisma",metastring:"{3}","{3}":!0},'model User {\n  id     Int     @default(autoincrement()) @id\n  /// @TypeGraphQL.field(name: "emailAddress")\n  email  String  @unique\n  posts  Post[]\n}\n')),(0,a.kt)("p",null,"This will result in the following GraphQL schema representation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"{3}","{3}":!0},"type User {\n  id: Int!\n  emailAddress: String!\n  posts: [Post!]!\n}\n")),(0,a.kt)("p",null,"All generated CRUD and relations resolvers fully support this feature and they map under the hood the original prisma property to the renamed field exposed in schema."),(0,a.kt)("p",null,"The same goes to the resolvers input types - they will also be emitted with changed field name, e.g.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"{2}","{2}":!0},"input UserCreateInput {\n  emailAddress: String!\n  posts: PostCreateManyWithoutAuthorInput\n}\n")),(0,a.kt)("p",null,"The emitted input type classes automatically map the provided renamed field values from GraphQL query into proper Prisma input properties out of the box."))}c.isMDXComponent=!0}}]);