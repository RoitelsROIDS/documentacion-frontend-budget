"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[137],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>g});var t=a(7294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=t.createContext({}),c=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return a?t.createElement(g,i(i({ref:n},p),{},{components:a})):t.createElement(g,i({ref:n},p))}));function g(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4329:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=a(7462),o=(a(7294),a(3905));const r={},i="TopBar",l={unversionedId:"Components/Navigation/TopBar",id:"Components/Navigation/TopBar",title:"TopBar",description:"El componente TopBar se utiliza para mostrar la barra superior de la interfaz de usuario de la aplicaci\xf3n. Proporciona funcionalidades como cambiar el idioma, acceder al men\xfa de perfil del usuario y realizar acciones relacionadas con el perfil y la autenticaci\xf3n del usuario.",source:"@site/docs/Components/Navigation/TopBar.mdx",sourceDirName:"Components/Navigation",slug:"/Components/Navigation/TopBar",permalink:"/documentacion-frontend-budget/docs/Components/Navigation/TopBar",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Components/Navigation/TopBar.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SideBar",permalink:"/documentacion-frontend-budget/docs/Components/Navigation/SideBart"},next:{title:"BudgetScreen",permalink:"/documentacion-frontend-budget/docs/Components/Screens/BudgetScreen/"}},s={},c=[{value:"UserContext",id:"usercontext",level:2},{value:"Menu",id:"menu",level:2},{value:"Gu\xeda r\xe1pida",id:"gu\xeda-r\xe1pida",level:3},{value:"Centro de ayuda",id:"centro-de-ayuda",level:3},{value:"Logout",id:"logout",level:3},{value:"Selector de idioma",id:"selector-de-idioma",level:2}],p={toc:c},u="wrapper";function d(e){let{components:n,...a}=e;return(0,o.kt)(u,(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"topbar"},"TopBar"),(0,o.kt)("p",null,"El componente ",(0,o.kt)("strong",{parentName:"p"},"TopBar")," se utiliza para mostrar la barra superior de la interfaz de usuario de la aplicaci\xf3n. Proporciona funcionalidades como cambiar el idioma, acceder al men\xfa de perfil del usuario y realizar acciones relacionadas con el perfil y la autenticaci\xf3n del usuario."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"El archivo ",(0,o.kt)("strong",{parentName:"p"},"TopBar.tsx")," cuenta con su propio archivo de estilos ",(0,o.kt)("strong",{parentName:"p"},"TopBar.scss"),"\nCualquier modificaci\xf3n en base a los dise\xf1os debe realizarse en el correspondiente archivo .scss y no desde los estilos de los componentes.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"El componente debe ser importado dentro del archivo ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"NavigationContainer.tsx")))))),(0,o.kt)("h2",{id:"usercontext"},"UserContext"),(0,o.kt)("p",null,"El componente utiliza el contexto ",(0,o.kt)("inlineCode",{parentName:"p"},"UserContext")," para acceder al estado del usuario actual y la configuraci\xf3n del idioma. Esto permite cambiar el idioma de la aplicaci\xf3n, verificar la presecia del usuario y mostrar la imagen de perfil del usuario si ha iniciado sesi\xf3n."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"import UserContext from '../../contexts/UserContext'\n")),(0,o.kt)("h2",{id:"menu"},"Menu"),(0,o.kt)("p",null,"El prop\xf3sito del componente ",(0,o.kt)("strong",{parentName:"p"},"Menu")," en este c\xf3digo es mostrar un men\xfa de opciones relacionadas con el perfil del usuario. Cuando el usuario hace clic en el bot\xf3n de avatar en la barra superior, se abre el men\xfa y se muestran las diferentes opciones disponibles. Estas opciones pueden incluir acciones para aceder a informaci\xf3n de contacto, descarga de gu\xedas r\xe1pidas, acceso al centro de ayuda y cierre de sesi\xf3n."),(0,o.kt)("h3",{id:"gu\xeda-r\xe1pida"},"Gu\xeda r\xe1pida"),(0,o.kt)("p",null,"Elemento dentro del men\xfa que dispara un evento (abriendo en una nueva pesta\xf1a) al hacer click. La pensta\xf1a redirije al usuario a una pesta\xf1a para ",(0,o.kt)("strong",{parentName:"p"},"visualizar y descargar"),' el pdf "Gu\xeda r\xe1pida de RoiBi".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/components/navigation/TopBar.tsx"',title:'"/components/navigation/TopBar.tsx"'},"const handleDownloadGuiaRapida = () => {\n    if (locale === 'es') {\n        window.open('https://www.roitels.com/wp-content/uploads/2023/05/Guia-Rapida.pdf', '_blank');\n        handleClose();\n    } else {\n        window.open('https://www.roitels.com/wp-content/uploads/2023/05/Guia-Rapida.pdf', '_blank');\n        handleClose();\n    }\n}\n\n<Menu\n    className=\"user-menu\"\n    open={isProfileOpen}\n    onClose={handleClose}\n    anchorEl={profileMenuAnchorEl}\n    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}\n    PaperProps={{ sx: {width: '180px',},}}\n>\n    <MenuItem onClick={handleDownloadGuiaRapida}>Gu\xeda r\xe1pida</MenuItem>\n</Menu>\n")),(0,o.kt)("h3",{id:"centro-de-ayuda"},"Centro de ayuda"),(0,o.kt)("p",null,"Elemento dentro del men\xfa que dispara un evento (abriendo en una nueva pesta\xf1a) al hacer click. La pensta\xf1a redirije al usuario a una p\xe1gina anexa de RoiBi, para que este pueda realizar consultas al centro de ",(0,o.kt)("strong",{parentName:"p"},"soporte de usuarios"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/components/navigation/TopBar.tsx"',title:'"/components/navigation/TopBar.tsx"'},"const handleHelpCenterClick = () => {\n    window.open('https://revenuemanagementmexico.com/', '_blank');\n    handleClose();\n}\n\n<Menu\n    className=\"user-menu\"\n    open={isProfileOpen}\n    onClose={handleClose}\n    anchorEl={profileMenuAnchorEl}\n    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}\n    PaperProps={{ sx: {width: '180px',},}}\n>\n    <MenuItem onClick={handleHelpCenterClick}>Ayuda</MenuItem>\n</Menu>\n")),(0,o.kt)("h3",{id:"logout"},"Logout"),(0,o.kt)("p",null,"Elemento dentro del men\xfa que dispara un evento ",(0,o.kt)("strong",{parentName:"p"},"(cerrando la sesi\xf3n del usuario)")," al hacer click. La l\xf3gica de la funci\xf3n logout es importada del archivo ",(0,o.kt)("inlineCode",{parentName:"p"},"firebase.ts"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"import { logout } from '../../services/firebase'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/components/navigation/TopBar.tsx"',title:'"/components/navigation/TopBar.tsx"'},"<Menu\n    className=\"user-menu\"\n    open={isProfileOpen}\n    onClose={handleClose}\n    anchorEl={profileMenuAnchorEl}\n    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}\n    PaperProps={{ sx: {width: '180px',},}}\n>\n     <MenuItem onClick={logout}>Cerrar sesi\xf3n</MenuItem>\n</Menu>\n")),(0,o.kt)("h2",{id:"selector-de-idioma"},"Selector de idioma"),(0,o.kt)("p",null,"La aplicaci\xf3n cuenta con un ",(0,o.kt)("strong",{parentName:"p"},"controlador")," que se encarga de ",(0,o.kt)("strong",{parentName:"p"},"cambiar el idioma")," seleccionado por el usuario. Durante el proceso de cambio de idioma, se muestra un indicador de carga en la interfaz de usuario para informar al usuario que la operaci\xf3n est\xe1 en curso (y evitar cambios bruscos en el dise\xf1o cuando se renderizan nuevamente los componentes luego de cambiar de idioma)."),(0,o.kt)("p",null,"El controlador realiza las siguientes acciones:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Establece el estado ",(0,o.kt)("strong",{parentName:"li"},"loading")," en ",(0,o.kt)("strong",{parentName:"li"},"true")," utilizando la funci\xf3n ",(0,o.kt)("strong",{parentName:"li"},"setLoading"),". Esto indica que se est\xe1 realizando una operaci\xf3n o carga que requiere tiempo y que se debe mostrar un indicador de carga en la interfaz de usuario."),(0,o.kt)("li",{parentName:"ul"},"Despu\xe9s de un retraso de 1.5 segundos utilizando ",(0,o.kt)("strong",{parentName:"li"},"setTimeout"),", se ejecuta una funci\xf3n de retrollamada."),(0,o.kt)("li",{parentName:"ul"},"En la funci\xf3n de retrollamada, se utiliza la funci\xf3n ",(0,o.kt)("strong",{parentName:"li"},"setLocale")," para establecer el nuevo idioma seleccionado ",(0,o.kt)("strong",{parentName:"li"},"newLocale")," en el contexto de usuario ",(0,o.kt)("strong",{parentName:"li"},"(UserContext)"),". La propiedad ",(0,o.kt)("strong",{parentName:"li"},"locale")," se actualiza con el nuevo idioma, que se convierte a un tipo espec\xedfico ",(0,o.kt)("strong",{parentName:"li"},"('en' o 'es')"),"."),(0,o.kt)("li",{parentName:"ul"},"Por \xfaltimo se establece el estado ",(0,o.kt)("strong",{parentName:"li"},"loading")," en ",(0,o.kt)("strong",{parentName:"li"},"false")," utilizando ",(0,o.kt)("strong",{parentName:"li"},"setLoading"),", lo que indica que la operaci\xf3n de cambio de idioma ha finalizado y que el indicador de carga puede ocultarse.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/components/navigation/TopBar.tsx"',title:'"/components/navigation/TopBar.tsx"'},"const {user, locale, setLocale, setLoading } = useContext(UserContext)\n\nconst handleLocaleChange = (newLocale: string) => {\n    setLoading(true)\n    setTimeout(() => {\n        setLocale(newLocale as 'en' | 'es')\n        setLoading(false)\n    }, 1500)\n} \n\n// Controlador para versiones de escritorio y tablets\n<FormControl variant=\"outlined\" size=\"small\">\n    <Select\n        value={locale}\n        onChange={(e) => handleLocaleChange(e.target.value)}\n        inputProps={{\n            name: 'language',\n            id: 'language-select',\n        }}\n    >\n        <MenuItem value={'en'}>English</MenuItem>\n        <MenuItem value={'es'}>Espa\xf1ol</MenuItem>\n    </Select>\n</FormControl>\n\n// Controlador para versiones mobiles\n<ButtonGroup variant=\"text\">\n    <Button onClick={() => {            \n        handleLocaleChange('en')\n        handleClose()\n        }}>\n        English\n    </Button>\n    <Button\n        onClick={() => {\n            handleLocaleChange('es')\n            handleClose()\n        }}>\n        Espa\xf1ol\n    </Button>\n</ButtonGroup>\n\n")),(0,o.kt)("admonition",{title:"Importante",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"El controlador para cambiar de idioma difiere dependiendo del dispositivo en d\xf3nde se este ejecutando la aplicaci\xf3n.\nPara versiones de escritorio y tablets, el controlador es un componente ",(0,o.kt)("inlineCode",{parentName:"p"},"<FormControl>")," que se encuentra en el TopBar, mientras que en versiones mobiles el controlador es un componente ",(0,o.kt)("inlineCode",{parentName:"p"},"<ButtonGroup>")," que se encuentra dentro del componente ",(0,o.kt)("inlineCode",{parentName:"p"},"<Menu>"),".")))}d.isMDXComponent=!0}}]);