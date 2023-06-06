"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[1826],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(g,i(i({ref:n},p),{},{components:t})):a.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5037:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const o={},i="NavigationContainer",s={unversionedId:"Components/Navigation/NavigationContainer",id:"Components/Navigation/NavigationContainer",title:"NavigationContainer",description:"Este componente se encarga de manejar la estructura y el comportamiento de la navegaci\xf3n en la interfaz de usuario. Proporciona una barra superior (TopBar), una barra lateral (SideBar) y el contenido principal de la aplicaci\xf3n. La finalidad de este c\xf3digo es organizar",source:"@site/docs/Components/Navigation/NavigationContainer.mdx",sourceDirName:"Components/Navigation",slug:"/Components/Navigation/NavigationContainer",permalink:"/documentacion-frontend-budget/docs/Components/Navigation/NavigationContainer",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RoiBarChart",permalink:"/documentacion-frontend-budget/docs/Components/Commons/RoiBarChart"},next:{title:"SideBar",permalink:"/documentacion-frontend-budget/docs/Components/Navigation/SideBart"}},l={},c=[{value:"TopBar y SideBar",id:"topbar-y-sidebar",level:2},{value:"Import NavigationContainer",id:"import-navigationcontainer",level:2}],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"navigationcontainer"},"NavigationContainer"),(0,r.kt)("p",null,"Este componente se encarga de manejar la estructura y el comportamiento de la navegaci\xf3n en la interfaz de usuario. Proporciona una barra superior ",(0,r.kt)("strong",{parentName:"p"},"(TopBar)"),", una barra lateral ",(0,r.kt)("strong",{parentName:"p"},"(SideBar)")," y el contenido principal de la aplicaci\xf3n. La finalidad de este c\xf3digo es organizar\ny controlar la navegaci\xf3n y la apariencia de la interfaz de usuario, permitiendo la interacci\xf3n con diferentes elementos y componentes de la aplicaci\xf3n."),(0,r.kt)("h2",{id:"topbar-y-sidebar"},"TopBar y SideBar"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NavigationContainer")," establece una renderizaci\xf3n condicional de los elementos TopBar, SideBar y el contenido principal, dependiendo del estado de la aplicaci\xf3n y del dispositivo utilizado\n(a trav\xe9s del ",(0,r.kt)("inlineCode",{parentName:"p"},"hook useIsMobile")," para determinar si la aplicaci\xf3n se est\xe1 ejecutando en un dispositivo m\xf3vil, y seg\xfan esta condici\xf3n, se muestra o no la barra lateral).\nAdem\xe1s el componente utiliza el ",(0,r.kt)("inlineCode",{parentName:"p"},"context UserContext")," para obtener informaci\xf3n del usuario y verificar si el usuario est\xe1 cargando o si la autenticaci\xf3n ha sido exitosa. Dependiendo de estas condiciones, se muestra el contenido principal o se devuelve null si no hay hijos definidos."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/components/navigation/NavigationContainer.tsx" {1,4-6,11} showLineNumbers',title:'"/components/navigation/NavigationContainer.tsx"',"{1,4-6,11}":!0,showLineNumbers:!0},"type Props = {\n    children?: JSX.Element\n}\n\nconst NavigationContainer: FC<Props> = (props) => {\n    const { user, userLoading } = useContext(UserContext)\n    const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false)\n    const isMobile = useIsMobile();\n    const onSideBarOpenToggle = () => {\n        setIsSideBarOpen((state) => !state)\n    }\n    const { children } = props\n    if (!children) return null\n\n    if (userLoading || !user) return children\n\n    return (\n        <>\n            <TopBar isSideBarOpen={isSideBarOpen} business={business} />\n            {!isMobile && <SideBar onToggleOpen={onSideBarOpenToggle} open={isSideBarOpen} business={business} />}\n            <div\n                className={classnames('main-content', {\n                    'open-sidebar': isSideBarOpen,\n                    'mobile': isMobile,\n                    'desktop': !isMobile\n                })}\n            >\n                {children}\n            </div>\n        </>\n    )\n}\n")),(0,r.kt)("h2",{id:"import-navigationcontainer"},"Import NavigationContainer"),(0,r.kt)("p",null,"El componente debe ser importado e implementado de manera global en la aplicaci\xf3n."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/App.tsx"',title:'"/src/App.tsx"'},'return (\n    <>\n        <CssBaseline />\n        <IntlProvider locale={locale} messages={loadLocaleData(locale)}>\n            <UserContext.Provider value={{ user: userInfo, userLoading, backendServices, locale, setLocale, loading, setLoading }}>\n                <BrowserRouter>\n                    <NavigationContainer>\n                        <Routes>\n                            <Route path="/" element={<PrivateRoute element={<BudgetScreen userInfo={userInfo} />} />} />\n                            <Route path="login" element={<LoginScreen />} />\n                        </Routes>\n                    </NavigationContainer>\n                </BrowserRouter>\n            </UserContext.Provider>\n        </IntlProvider>\n    </>\n)\n')))}u.isMDXComponent=!0}}]);