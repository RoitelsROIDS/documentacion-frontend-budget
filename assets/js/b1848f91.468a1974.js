"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[7210],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(g,s(s({ref:n},p),{},{components:t})):a.createElement(g,s({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8843:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const o={},s="WorldMap",l={unversionedId:"Components/Screens/BudgetScreen/WorldMap",id:"Components/Screens/BudgetScreen/WorldMap",title:"WorldMap",description:"Este componente utiliza la biblioteca react-simple-maps para mostrar un mapa interactivo del mundo con diferentes colores en funci\xf3n de los valores proporcionados en la propiedad data. El objetivo principal del componente es visualizar datos geogr\xe1ficos y resaltar la informaci\xf3n relevante en el mapa.",source:"@site/docs/Components/Screens/BudgetScreen/WorldMap.mdx",sourceDirName:"Components/Screens/BudgetScreen",slug:"/Components/Screens/BudgetScreen/WorldMap",permalink:"/documentacion-frontend-budget/docs/Components/Screens/BudgetScreen/WorldMap",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Components/Screens/BudgetScreen/WorldMap.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PopupInfoCharts",permalink:"/documentacion-frontend-budget/docs/Components/Screens/BudgetScreen/PopupInfo"},next:{title:"LoginScreen",permalink:"/documentacion-frontend-budget/docs/Components/Screens/LoginScreen/"}},i={},c=[],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"worldmap"},"WorldMap"),(0,r.kt)("p",null,"Este componente utiliza la biblioteca ",(0,r.kt)("strong",{parentName:"p"},"react-simple-maps")," para mostrar un mapa interactivo del mundo con diferentes colores en funci\xf3n de los valores proporcionados en la propiedad data. El objetivo principal del componente es visualizar datos geogr\xe1ficos y resaltar la informaci\xf3n relevante en el mapa.\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"WorldMap"))," recibe un array de objetos en la propiedad data, donde cada objeto contiene informaci\xf3n de un pa\xeds y su respectivo valor. Utilizando estos datos, se colorea el mapa de acuerdo con los valores proporcionados ",(0,r.kt)("strong",{parentName:"p"},"(los cuales vienen de CountryDataTable)"),", lo que permite una visualizaci\xf3n r\xe1pida y comprensible de la distribuci\xf3n geogr\xe1fica de los datos."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"El componente se define como una funci\xf3n de componente con una ",(0,r.kt)("strong",{parentName:"li"},"interfaz Props")," para recibir la propiedad ",(0,r.kt)("strong",{parentName:"li"},"data")," que contiene los datos de los pa\xedses y sus valores. Dentro de la funci\xf3n, se desestructura la propiedad data para obtener su valor.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/components/screens/BudgetScreen/WorldMap.tsx"',title:'"/components/screens/BudgetScreen/WorldMap.tsx"'},"data: { country: Alpha2Code; value: number }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Luego se implementa el ",(0,r.kt)("inlineCode",{parentName:"li"},"useMemo")," para calcular el valor m\xe1ximo de los valores de ",(0,r.kt)("strong",{parentName:"li"},"data"),". Este valor se utiliza posteriormente para normalizar los colores en el mapa en funci\xf3n de los valores proporcionados. La funci\xf3n ",(0,r.kt)("strong",{parentName:"li"},"reducce")," se aplica a data para encontrar el valor m\xe1ximo y se actualiza cuando ",(0,r.kt)("strong",{parentName:"li"},"data")," cambia.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/components/screens/BudgetScreen/WorldMap.tsx"',title:'"/components/screens/BudgetScreen/WorldMap.tsx"'},"const maxReservationsValue: number = useMemo(\n    () => data.reduce((acc, item) => (item.value > acc ? item.value : acc), 0),\n    [data],\n)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Utiliza el componente ",(0,r.kt)("inlineCode",{parentName:"li"},"ComposableMap")," como el contenedor principal del mapa. Dentro de ",(0,r.kt)("inlineCode",{parentName:"li"},"ComposableMap"),", se utiliza el componente ",(0,r.kt)("inlineCode",{parentName:"li"},"Geographies")," para mostrar las geometr\xedas de los pa\xedses en el mapa. Luego, dentro de Geographies, se utiliza el componente ",(0,r.kt)("inlineCode",{parentName:"li"},"Geography")," para representar cada pa\xeds en el mapa y asignarle un color basado en su valor correspondiente en data.\nEl atributo geography se utiliza para especificar la fuente de datos de las geograf\xedas. En este caso, ",(0,r.kt)("strong",{parentName:"li"},"GEOGRAPHY_URL")," es una variable que contiene la URL de la fuente de datos de las geograf\xedas.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/components/screens/BudgetScreen/WorldMap.tsx"',title:'"/components/screens/BudgetScreen/WorldMap.tsx"'},"return (\n    <ComposableMap\n        // color={'#E4E5E6'}\n        // stroke=\"#E4E5E6\"\n        projectionConfig={{\n            scale: 85,\n            center: [85, -70]\n        }}\n        viewBox=\"0 0 550 280\"\n        projection=\"geoMercator\"\n    >\n        <Geographies geography={GEOGRAPHY_URL}>\n            {({ geographies }) =>\n                geographies.map((geo) => {\n                    const countryId = geo.id\n                    const geoReservations: number = data.find((data) => data.country === countryId)?.value || 0\n                    const reservationsPercent = geoReservations / maxReservationsValue\n                    const finalPercent = 50 - Math.round(reservationsPercent * 20)\n                    return (\n                        <Geography\n                            key={geo.rsmKey}\n                            geography={geo}\n                            style={{\n                                default: {\n                                    fill: geoReservations > 0 ? `hsl(200deg 100% ${finalPercent}%)` : '#E6E6EA',\n                                    outline: 'none',\n                                    stroke: '#FFFFFF', \n                                    strokeWidth: 0.3, \n                                },\n                                hover: {\n                                    fill: geoReservations > 0 ? `hsl(200deg 100% ${finalPercent}%)` : '#E6E6EA',\n                                    outline: 'none',\n                                    stroke: '#FFFFFF', \n                                    strokeWidth: 0.3, \n                                },\n                                pressed: {\n                                    fill: geoReservations > 0 ? `hsl(200deg 100% ${finalPercent}%)` : '#E6E6EA',\n                                    outline: 'none',\n                                    stroke: '#FFFFFF', \n                                    strokeWidth: 0.3, \n                                },\n                            }}\n                        />\n                    )\n                })\n            }\n        </Geographies>\n    </ComposableMap>\n    )\n}\n")))}u.isMDXComponent=!0}}]);