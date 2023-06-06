"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[289],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,g=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return t?a.createElement(g,s(s({ref:n},d),{},{components:t})):a.createElement(g,s({ref:n},d))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2636:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=t(7462),r=(t(7294),t(3905));const i={},s="BackendServices",o={unversionedId:"Servicios/BackendServices",id:"Servicios/BackendServices",title:"BackendServices",description:"La clase BackendServices se utiliza para interactuar con el backend de la aplicaci\xf3n y realizar diversas operaciones, como obtener informaci\xf3n del usuario, obtener datos relacionados con el presupuesto, enviar c\xf3digos de CloudBeds, entre otros.",source:"@site/docs/Servicios/BackendServices.mdx",sourceDirName:"Servicios",slug:"/Servicios/BackendServices",permalink:"/documentacion-frontend-budget/docs/Servicios/BackendServices",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Servicios",permalink:"/documentacion-frontend-budget/docs/category/servicios"},next:{title:"Firebase Authentication",permalink:"/documentacion-frontend-budget/docs/Servicios/firebase"}},c={},l=[{value:"Configuraci\xf3n de la instancia Axios",id:"configuraci\xf3n-de-la-instancia-axios",level:2},{value:"Obtener informaci\xf3n del usuario",id:"obtener-informaci\xf3n-del-usuario",level:2},{value:"Obtener datos/m\xe9tricas para la pantalla BudgetScreen",id:"obtener-datosm\xe9tricas-para-la-pantalla-budgetscreen",level:2},{value:"Obtener la ra\xedz del backend",id:"obtener-la-ra\xedz-del-backend",level:2},{value:"Enviar c\xf3digo de CloudBeds al backend",id:"enviar-c\xf3digo-de-cloudbeds-al-backend",level:2}],d={toc:l},u="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"backendservices"},"BackendServices"),(0,r.kt)("p",null,"La clase ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"BackendServices"))," se utiliza para interactuar con el backend de la aplicaci\xf3n y realizar diversas operaciones, como obtener informaci\xf3n del usuario, obtener datos relacionados con el presupuesto, enviar c\xf3digos de CloudBeds, entre otros.\nBackendServices se encarga de encapsular los servicios del backend, los cu\xe1les est\xe1n basados en la biblioteca ",(0,r.kt)("strong",{parentName:"p"},"Axios"),", que proporciona una forma conveniente de realizar peticiones ",(0,r.kt)("strong",{parentName:"p"},"HTTP/HTTPS"),"."),(0,r.kt)("h2",{id:"configuraci\xf3n-de-la-instancia-axios"},"Configuraci\xf3n de la instancia Axios"),(0,r.kt)("p",null,"En el constructor de la clase ",(0,r.kt)("strong",{parentName:"p"},"BackendServices"),", se crea una instancia de Axios utilizando ",(0,r.kt)("strong",{parentName:"p"},"axios.create()"),". Esta instancia se configura con la URL base del backend de la aplicaci\xf3n ",(0,r.kt)("strong",{parentName:"p"},"(process.env.REACT_APP_BACKEND_URL)"),", un tiempo de espera de 8000 ms y un encabezado de autorizaci\xf3n que incluye el token de autenticaci\xf3n."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/services/BackendServices.tsx"',title:'"/src/services/BackendServices.tsx"'},"private instance: Axios\n\nconstructor(token: string) {\n    this.instance = axios.create({\n        baseURL: process.env.REACT_APP_BACKEND_URL,\n        timeout: 8000,\n        headers: { Authorization: `Bearer ${token}` },\n    })\n}\n\n")),(0,r.kt)("h2",{id:"obtener-informaci\xf3n-del-usuario"},"Obtener informaci\xf3n del usuario"),(0,r.kt)("p",null,"El m\xe9todo ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"getUserInfo"))," realiza una solicitud ",(0,r.kt)("strong",{parentName:"p"},"GET al endpoint /user/info")," para obtener la informaci\xf3n del usuario. Utiliza la instancia de Axios creada previamente y devuelve la respuesta obtenida."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/services/BackendServices.tsx"',title:'"/src/services/BackendServices.tsx"'},"getUserInfo = async () => {\n    return await this.instance.get('/user/info')\n}\n\n")),(0,r.kt)("h2",{id:"obtener-datosm\xe9tricas-para-la-pantalla-budgetscreen"},"Obtener datos/m\xe9tricas para la pantalla BudgetScreen"),(0,r.kt)("p",null,"El m\xe9todo ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"getBudgetScreen"))," realiza una solicitud ",(0,r.kt)("strong",{parentName:"p"},"GET al endpoint /budget")," para obtener los datos de la pantalla de presupuesto. Puede recibir un objeto filters opcional que se utiliza como par\xe1metros de consulta en la solicitud. Si no se proporcionan filtros, se realiza una solicitud GET sin par\xe1metros adicionales. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/services/BackendServices.tsx"',title:'"/src/services/BackendServices.tsx"'},"getBudgetScreen = async (filters?: BudgetQuery) => {\n    const response = await this.instance.get(\"/budget\", {params: filters}) \n    if (!filters) {\n        return await this.instance.get('/budget')\n    }\n    return response\n}\n\n")),(0,r.kt)("h2",{id:"obtener-la-ra\xedz-del-backend"},"Obtener la ra\xedz del backend"),(0,r.kt)("p",null,"El m\xe9todo ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"getRoot"))," realiza una solicitud ",(0,r.kt)("strong",{parentName:"p"},"GET al endpoint ra\xedz")," del backend. Incluye una cabecera de tipo de contenido 'text/plain' en la solicitud. Devuelve la respuesta obtenida."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/services/BackendServices.tsx"',title:'"/src/services/BackendServices.tsx"'},"getRoot = async () => {\n    return await this.instance.get('/', { headers: { 'Content-type': 'text/plain' } })\n}\n\n")),(0,r.kt)("h2",{id:"enviar-c\xf3digo-de-cloudbeds-al-backend"},"Enviar c\xf3digo de CloudBeds al backend"),(0,r.kt)("p",null,"El m\xe9todo ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"sendCloudBedsCodeBackend"))," env\xeda un c\xf3digo que traen los clientes de CloudBeds hacia el backend. Si el c\xf3digo no est\xe1 presente, la funci\xf3n se detiene. Realiza una solicitud ",(0,r.kt)("strong",{parentName:"p"},"GET al endpoint /redirect/roibi")," con el c\xf3digo como par\xe1metro. Si la respuesta tiene un estado 200, redirige al usuario a la p\xe1gina de inicio de sesi\xf3n exitosa."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/services/BackendServices.tsx"',title:'"/src/services/BackendServices.tsx"'},"sendCloudBedsCodeBackend = async (code: string | null) => {\n    if (!code) return;\n\n    const response = await this.instance.get(\n        `${process.env.REACT_APP_BACKEND_URL}/redirect/roibi?code=${code}`\n    );\n    \n    if (response.status === 200) {\n        window.location.href = `${process.env.REACT_APP_BACKEND_URL}/login/success`\n    }\n}\n\n")))}p.isMDXComponent=!0}}]);