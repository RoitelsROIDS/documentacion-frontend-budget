"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[2375],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>g});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?t.createElement(g,c(c({ref:n},u),{},{components:r})):t.createElement(g,c({ref:n},u))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7480:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=r(7462),a=(r(7294),r(3905));const o={},c="LoadingScreen",i={unversionedId:"Components/Screens/BudgetScreen/LoadingScreen",id:"Components/Screens/BudgetScreen/LoadingScreen",title:"LoadingScreen",description:"Este componente tiene la finalidad de mostrar una pantalla de carga mientras se realiza alguna tarea en segundo plano, como cargar datos o procesar informaci\xf3n. La pantalla de carga est\xe1 dise\xf1ada para proporcionar una experiencia visual agradable y mantener informado al usuario de que se est\xe1 llevando a cabo una tarea.",source:"@site/docs/Components/Screens/BudgetScreen/LoadingScreen.mdx",sourceDirName:"Components/Screens/BudgetScreen",slug:"/Components/Screens/BudgetScreen/LoadingScreen",permalink:"/documentacion-frontend-budget/docs/Components/Screens/BudgetScreen/LoadingScreen",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Components/Screens/BudgetScreen/LoadingScreen.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FiltersBar",permalink:"/documentacion-frontend-budget/docs/Components/Screens/BudgetScreen/FiltersBar"},next:{title:"PopupInfoCharts",permalink:"/documentacion-frontend-budget/docs/Components/Screens/BudgetScreen/PopupInfo"}},s={},l=[],u={toc:l},d="wrapper";function p(e){let{components:n,...r}=e;return(0,a.kt)(d,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"loadingscreen"},"LoadingScreen"),(0,a.kt)("p",null,"Este componente tiene la finalidad de mostrar una pantalla de carga mientras se realiza alguna tarea en segundo plano, como cargar datos o procesar informaci\xf3n. La pantalla de carga est\xe1 dise\xf1ada para proporcionar una experiencia visual agradable y mantener informado al usuario de que se est\xe1 llevando a cabo una tarea.\nEl componente LoadingScreen utiliza la biblioteca Material-UI para renderizar un indicador de progreso circular, junto con un logotipo de presupuesto en la parte superior de la pantalla. Esta combinaci\xf3n crea una visualizaci\xf3n atractiva y personalizada para la pantalla de carga."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/components/screens/BudgetScreen/LoadingScreen.tsx"',title:'"/components/screens/BudgetScreen/LoadingScreen.tsx"'},"import React, { FunctionComponent } from 'react'\nimport { CircularProgress } from '@mui/material'\nimport loadingBudgetLogo from '../../../assets/loading-budget-logo.svg'\n\nconst LoadingScreen: FunctionComponent = () => {\n    return (\n        <div\n            style={{\n                height: 'calc(100vh - var(--topbar-height))',\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'center',\n                flexDirection: 'column',\n            }}\n        >\n            <img style={{ maxWidth: '300px' }} src={loadingBudgetLogo} /> <CircularProgress />\n        </div>\n    )\n}\n\n")))}p.isMDXComponent=!0}}]);