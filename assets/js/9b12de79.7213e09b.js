"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[4993],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),l=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(i.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return t?a.createElement(f,s(s({ref:n},p),{},{components:t})):a.createElement(f,s({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[u]="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7405:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=t(7462),r=(t(7294),t(3905));const o={},s="Routes",c={unversionedId:"Constants/Routes",id:"Constants/Routes",title:"Routes",description:"El c\xf3digo define los enlaces y la estructura de navegaci\xf3n de la aplicaci\xf3n a trav\xe9s de los objetos ROUTES_LINKS y ROUTES. Estos elementos permiten definir las rutas de cada secci\xf3n de la aplicaci\xf3n, as\xed como asociar \xedconos a cada secci\xf3n para una mejor visualizaci\xf3n y las sub-secciones dentro de cada secci\xf3n.",source:"@site/docs/Constants/Routes.mdx",sourceDirName:"Constants",slug:"/Constants/Routes",permalink:"/documentacion-frontend-budget/docs/Constants/Routes",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Constantes",permalink:"/documentacion-frontend-budget/docs/category/constantes"},next:{title:"Geo",permalink:"/documentacion-frontend-budget/docs/Constants/geo"}},i={},l=[],p={toc:l},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"routes"},"Routes"),(0,r.kt)("p",null,"El c\xf3digo define los enlaces y la estructura de navegaci\xf3n de la aplicaci\xf3n a trav\xe9s de los objetos ",(0,r.kt)("strong",{parentName:"p"},"ROUTES_LINKS")," y ",(0,r.kt)("strong",{parentName:"p"},"ROUTES"),". Estos elementos permiten definir las rutas de cada secci\xf3n de la aplicaci\xf3n, as\xed como asociar \xedconos a cada secci\xf3n para una mejor visualizaci\xf3n y las sub-secciones dentro de cada secci\xf3n."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"ROUTES_LINKS"))," es un objeto que define los enlaces ",(0,r.kt)("strong",{parentName:"li"},"(URLs)")," para diferentes secciones de la aplicaci\xf3n. Cada propiedad del objeto representa una secci\xf3n y su valor es la ruta asociada a esa secci\xf3n.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/constants/ROUTES.tsx"',title:'"/src/constants/ROUTES.tsx"'},"export const ROUTES_LINKS = {\n    view360: '360-view',\n    smartView: 'smart-view',\n    dashboard: 'dashboard',\n    revenue: 'revenue',\n    occupancy: 'occupancy',\n    adr: 'adr',\n    revPau: 'rev-pau',\n    budget: 'budget',\n}\n\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"ROUTES"))," es un arreglo de objetos que define las secciones de la aplicaci\xf3n junto con sus detalles. Cada objeto dentro del arreglo representa una secci\xf3n e incluye los siguientes campos:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"id: Identificador \xfanico de la secci\xf3n."),(0,r.kt)("li",{parentName:"ul"},"sectionTitle: T\xedtulo de la secci\xf3n."),(0,r.kt)("li",{parentName:"ul"},"Icon: Icono asociado a la secci\xf3n."),(0,r.kt)("li",{parentName:"ul"},"elements: Arreglo de elementos que componen la secci\xf3n. Cada elemento contiene un t\xedtulo y una ruta asociada.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/constants/ROUTES.tsx"',title:'"/src/constants/ROUTES.tsx"'},"type RoutesInfo = {\n    id: string\n    sectionTitle: string\n    Icon: ReactNode\n    elements: {\n        title: string\n        path: string\n    }[]\n}\n\nconst ROUTES: RoutesInfo[] = [\n    {\n        id: 'roi360',\n        sectionTitle: 'Roi 360\xb0',\n        Icon: <Roi360Icon />,\n        elements: [\n            {\n                title: 'Dashboard',\n                path: ROUTES_LINKS.dashboard,\n            },\n            {\n                title: 'Revenue',\n                path: ROUTES_LINKS.revenue,\n            },\n            {\n                title: 'Occupancy',\n                path: ROUTES_LINKS.occupancy,\n            },\n            {\n                title: 'ADR',\n                path: ROUTES_LINKS.adr,\n            }\n        ],\n    }\n]\n\n")),(0,r.kt)("admonition",{title:"IMPORTANTE!",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"En primeras instancias se hab\xeda pensado la aplicaci\xf3n RoiBi con diferentes secciones/pantallas. Por ese motivo se establecieron los par\xe1metros y las rutas para acceder a estas diferentes pantallas en el archivo ",(0,r.kt)("strong",{parentName:"p"},"ROUTES.tsx"),", para luego ser importadas en app.tsx en las ",(0,r.kt)("strong",{parentName:"p"},"rutas (Routes)")," predefinidas con react-router-dom.\nEl acceso a las diferentes secciones se realiza desde el ",(0,r.kt)("strong",{parentName:"p"},"sidebar")," y para conservar su funcionalidad (en caso de que RoiBi incorpore m\xe1s secciones), se opto por comentar el c\xf3digo y no eliminarlo.")))}d.isMDXComponent=!0}}]);