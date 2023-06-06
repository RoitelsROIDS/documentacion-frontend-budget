"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[7210],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>g});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),p=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(i.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return a?t.createElement(g,l(l({ref:n},c),{},{components:a})):t.createElement(g,l({ref:n},c))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8843:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var t=a(7462),r=(a(7294),a(3905));const o={},l="WorldMap",s={unversionedId:"Components/Screens/BudgetScreen/WorldMap",id:"Components/Screens/BudgetScreen/WorldMap",title:"WorldMap",description:"Este componente utiliza la biblioteca react-simple-maps para mostrar un mapa interactivo del mundo con diferentes colores en funci\xf3n de los valores proporcionados en la propiedad data. El objetivo principal del componente es visualizar datos geogr\xe1ficos y resaltar la informaci\xf3n relevante en el mapa.",source:"@site/docs/Components/Screens/BudgetScreen/WorldMap.mdx",sourceDirName:"Components/Screens/BudgetScreen",slug:"/Components/Screens/BudgetScreen/WorldMap",permalink:"/documentacion-frontend-budget/docs/Components/Screens/BudgetScreen/WorldMap",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PopupInfoCharts",permalink:"/documentacion-frontend-budget/docs/Components/Screens/BudgetScreen/PopupInfo"},next:{title:"LoginScreen",permalink:"/documentacion-frontend-budget/docs/Components/Screens/LoginScreen/"}},i={},p=[],c={toc:p},d="wrapper";function u(e){let{components:n,...a}=e;return(0,r.kt)(d,(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"worldmap"},"WorldMap"),(0,r.kt)("p",null,"Este componente utiliza la biblioteca ",(0,r.kt)("strong",{parentName:"p"},"react-simple-maps")," para mostrar un mapa interactivo del mundo con diferentes colores en funci\xf3n de los valores proporcionados en la propiedad data. El objetivo principal del componente es visualizar datos geogr\xe1ficos y resaltar la informaci\xf3n relevante en el mapa.\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"WorldMap"))," recibe un array de objetos en la propiedad data, donde cada objeto contiene informaci\xf3n de un pa\xeds y su respectivo valor. Utilizando estos datos, se colorea el mapa de acuerdo con los valores proporcionados ",(0,r.kt)("strong",{parentName:"p"},"(los cuales vienen de CountryDataTable)"),", lo que permite una visualizaci\xf3n r\xe1pida y comprensible de la distribuci\xf3n geogr\xe1fica de los datos."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"El componente se define como una funci\xf3n de componente con una ",(0,r.kt)("strong",{parentName:"li"},"interfaz Props")," para recibir la propiedad ",(0,r.kt)("strong",{parentName:"li"},"data")," que contiene los datos de los pa\xedses y sus valores. Dentro de la funci\xf3n, se desestructura la propiedad data para obtener su valor.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/components/screens/BudgetScreen/WorldMap.tsx"',title:'"/components/screens/BudgetScreen/WorldMap.tsx"'},"data: { country: Alpha2Code; value: number }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Luego se implementa el ",(0,r.kt)("inlineCode",{parentName:"li"},"useMemo")," para calcular el valor m\xe1ximo de los valores de ",(0,r.kt)("strong",{parentName:"li"},"data"),". Este valor se utiliza posteriormente para normalizar los colores en el mapa en funci\xf3n de los valores proporcionados. La funci\xf3n ",(0,r.kt)("strong",{parentName:"li"},"reducce")," se aplica a data para encontrar el valor m\xe1ximo y se actualiza cuando ",(0,r.kt)("strong",{parentName:"li"},"data")," cambia.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/components/screens/BudgetScreen/WorldMap.tsx"',title:'"/components/screens/BudgetScreen/WorldMap.tsx"'},"const maxReservationsValue: number = useMemo(\n    () => data.reduce((acc, item) => (item.value > acc ? item.value : acc), 0),\n    [data],\n)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Utiliza el componente ",(0,r.kt)("inlineCode",{parentName:"li"},"ComposableMap")," como el contenedor principal del mapa. ")),(0,r.kt)("admonition",{title:"Propiedades importantes de ComposableMap",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"projectionConfig:")," Esta propiedad configura la proyecci\xf3n del mapa. En el ejemplo, se establece la escala del mapa en 85 y se centra en las coordenadas ","[85, -70]",". Esto determina c\xf3mo se visualizar\xe1 el mapa en t\xe9rminos de tama\xf1o y posici\xf3n.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"viewBox:")," La propiedad viewBox establece el cuadro de vista del mapa, definiendo las coordenadas y el tama\xf1o del \xe1rea visible del mapa.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"projection:")," Esta propiedad especifica el tipo de proyecci\xf3n que se utilizar\xe1 para el mapa. En el ejemplo, se utiliza la proyecci\xf3n geoMercator, que es una proyecci\xf3n com\xfanmente utilizada para representar mapas del mundo.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dentro de ",(0,r.kt)("inlineCode",{parentName:"li"},"ComposableMap"),", se utiliza el componente ",(0,r.kt)("inlineCode",{parentName:"li"},"Geographies")," para mostrar las geometr\xedas de los pa\xedses en el mapa. Luego, dentro de Geographies, se utiliza el componente ",(0,r.kt)("inlineCode",{parentName:"li"},"Geography")," para representar cada pa\xeds en el mapa y asignarle un color basado en su valor correspondiente en data.\nEl atributo geography se utiliza para especificar la fuente de datos de las geograf\xedas. En este caso, ",(0,r.kt)("strong",{parentName:"li"},"GEOGRAPHY_URL")," es una variable que contiene la URL de la fuente de datos de las geograf\xedas.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/components/screens/BudgetScreen/WorldMap.tsx"',title:'"/components/screens/BudgetScreen/WorldMap.tsx"'},"return (\n    <ComposableMap\n        // color={'#E4E5E6'}\n        // stroke=\"#E4E5E6\"\n        projectionConfig={{\n            scale: 85,\n            center: [85, -70]\n        }}\n        viewBox=\"0 0 550 280\"\n        projection=\"geoMercator\"\n    >\n        <Geographies geography={GEOGRAPHY_URL}>\n            {({ geographies }) =>\n                geographies.map((geo) => {\n                    const countryId = geo.id\n                    const geoReservations: number = data.find((data) => data.country === countryId)?.value || 0\n                    const reservationsPercent = geoReservations / maxReservationsValue\n                    const finalPercent = 50 - Math.round(reservationsPercent * 20)\n                    return (\n                        <Geography\n                            key={geo.rsmKey}\n                            geography={geo}\n                            style={{\n                                default: {\n                                    fill: geoReservations > 0 ? `hsl(200deg 100% ${finalPercent}%)` : '#E6E6EA',\n                                    outline: 'none',\n                                    stroke: '#FFFFFF', \n                                    strokeWidth: 0.3, \n                                },\n                                hover: {\n                                    fill: geoReservations > 0 ? `hsl(200deg 100% ${finalPercent}%)` : '#E6E6EA',\n                                    outline: 'none',\n                                    stroke: '#FFFFFF', \n                                    strokeWidth: 0.3, \n                                },\n                                pressed: {\n                                    fill: geoReservations > 0 ? `hsl(200deg 100% ${finalPercent}%)` : '#E6E6EA',\n                                    outline: 'none',\n                                    stroke: '#FFFFFF', \n                                    strokeWidth: 0.3, \n                                },\n                            }}\n                        />\n                    )\n                })\n            }\n        </Geographies>\n    </ComposableMap>\n    )\n}\n")))}u.isMDXComponent=!0}}]);