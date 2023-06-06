"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[893],{3905:(e,n,r)=>{r.d(n,{Zo:()=>m,kt:()=>g});var a=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=a.createContext({}),c=function(e){var n=a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},m=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(r),p=t,g=u["".concat(l,".").concat(p)]||u[p]||d[p]||o;return r?a.createElement(g,s(s({ref:n},m),{},{components:r})):a.createElement(g,s({ref:n},m))}));function g(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:t,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4164:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(7462),t=(r(7294),r(3905));const o={},s="LoginForm",i={unversionedId:"Components/Screens/LoginScreen/LoginForm",id:"Components/Screens/LoginScreen/LoginForm",title:"LoginForm",description:"LoginForm es un componente de formulario de inicio de sesi\xf3n utilizando la biblioteca Material-UI . El formulario est\xe1 dise\xf1ado para permitir a los usuarios iniciar sesi\xf3n ingresando su correo electr\xf3nico y contrase\xf1a. Proporciona opciones para recordar al usuario y tambi\xe9n muestra un mensaje de error si se ingresan credenciales incorrectas.",source:"@site/docs/Components/Screens/LoginScreen/LoginForm.mdx",sourceDirName:"Components/Screens/LoginScreen",slug:"/Components/Screens/LoginScreen/LoginForm",permalink:"/documentacion-frontend-budget/docs/Components/Screens/LoginScreen/LoginForm",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LoginScreen",permalink:"/documentacion-frontend-budget/docs/Components/Screens/LoginScreen/"},next:{title:"Constantes",permalink:"/documentacion-frontend-budget/docs/category/constantes"}},l={},c=[{value:"Interfaz de usuario",id:"interfaz-de-usuario",level:2},{value:"L\xf3gica y funcionamiento",id:"l\xf3gica-y-funcionamiento",level:2},{value:"Estado del componente",id:"estado-del-componente",level:3},{value:"onChange y onSubmit",id:"onchange-y-onsubmit",level:3},{value:"handleRememberMeChange",id:"handleremembermechange",level:3},{value:"handleSubmit",id:"handlesubmit",level:3}],m={toc:c},u="wrapper";function d(e){let{components:n,...r}=e;return(0,t.kt)(u,(0,a.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"loginform"},"LoginForm"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"LoginForm")," es un componente de formulario de inicio de sesi\xf3n utilizando la biblioteca Material-UI . El formulario est\xe1 dise\xf1ado para permitir a los usuarios iniciar sesi\xf3n ingresando su correo electr\xf3nico y contrase\xf1a. Proporciona opciones para recordar al usuario y tambi\xe9n muestra un mensaje de error si se ingresan credenciales incorrectas."),(0,t.kt)("admonition",{type:"info"},(0,t.kt)("ol",{parentName:"admonition"},(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"El archivo ",(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("inlineCode",{parentName:"strong"},"LoginForm.tsx"))," cuenta con su propio archivo de estilos ",(0,t.kt)("strong",{parentName:"p"},"LoginScreen.scss"),"\nCualquier modificaci\xf3n en base a los dise\xf1os debe realizarse en el correspondiente archivo .scss y no desde los estilos de los componentes.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"El componente debe ser importado dentro del archivo ",(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("inlineCode",{parentName:"strong"},"LoginScreen.tsx")))))),(0,t.kt)("h2",{id:"interfaz-de-usuario"},"Interfaz de usuario"),(0,t.kt)("p",null,"El c\xf3digo proporciona una estructura de formulario de inicio de sesi\xf3n con campos de entrada para correo electr\xf3nico y contrase\xf1a, as\xed como opciones para recordar al usuario y recuperar la contrase\xf1a.\nUtiliza componentes de Material-UI como: "),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"<TextField> <Button> <FormControl> <FormControlLabel> <FormHelperText>\n<Checkbox> <InputAdornment> <IconButton> <FormHelperText>\n")),(0,t.kt)("h2",{id:"l\xf3gica-y-funcionamiento"},"L\xf3gica y funcionamiento"),(0,t.kt)("h3",{id:"estado-del-componente"},"Estado del componente"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"userNameAndPass:")," Es un estado que almacena el correo electr\xf3nico y la contrase\xf1a ingresados por el usuario."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"showPassword:")," Es un estado que controla la visibilidad de la contrase\xf1a."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"rememberMe:")," Es un estado que indica si se debe recordar al usuario o no."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"errorMessage:")," Es un estado que almacena el mensaje de error en caso de que las credenciales sean incorrectas.")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/components/screens/LoginScreen/LoginForm.tsx"',title:'"/components/screens/LoginScreen/LoginForm.tsx"'},"\nconst [userNameAndPass, setUserNameAndPass] = useState<{ email?: string; password?: string }>({\n    email: undefined,\n    password: undefined,\n});\n  \nconst [showPassword, setShowPassword] = useState(false);\n\nconst [rememberMe, setRememberMe] = useState(false);\n\nconst [errorMessage, setErrorMessage] = useState<string | null>(null);\n")),(0,t.kt)("h3",{id:"onchange-y-onsubmit"},"onChange y onSubmit"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"La funci\xf3n ",(0,t.kt)("strong",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"strong"},"onChange"))," se utiliza para manejar los cambios en los campos de entrada de correo electr\xf3nico y contrase\xf1a. Actualiza el estado ",(0,t.kt)("strong",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"strong"},"userNameAndPass"))," con los valores ingresados por el usuario."),(0,t.kt)("li",{parentName:"ul"},"La funci\xf3n ",(0,t.kt)("strong",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"strong"},"onSubmit")),' se llama cuando el usuario hace clic en el bot\xf3n "Sign in". Verifica si se han ingresado tanto el correo electr\xf3nico como la contrase\xf1a. Si alguno de los dos est\xe1 faltando, se establece un mensaje de error correspondiente. Luego, llama a la funci\xf3n ',(0,t.kt)("strong",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"strong"},"loginWithUserAndPass"))," pasando el correo electr\xf3nico y la contrase\xf1a ingresados.")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/components/screens/LoginScreen/LoginForm.tsx"',title:'"/components/screens/LoginScreen/LoginForm.tsx"'},"const onChange = (key: 'email' | 'password', event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {\n    setUserNameAndPass((prevUser) => ({\n    ...prevUser,\n    [key]: event.target.value,\n    }));\n};\n\nconst onSubmit = () => {\n    if (!userNameAndPass.email || !userNameAndPass.password) {\n        setErrorMessage(\"Please enter email and password\");\n        return;\n    }\n\n    loginWithUserAndPass(userNameAndPass as { email: string; password: string }).catch(()=>{\n        setErrorMessage(\"Usuario y/o contrase\xf1a incorrecta\");\n    })\n}; \n")),(0,t.kt)("h3",{id:"handleremembermechange"},"handleRememberMeChange"),(0,t.kt)("p",null,"La funci\xf3n ",(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("inlineCode",{parentName:"strong"},"handleRememberMeChange")),' se utiliza para manejar los cambios en la casilla de verificaci\xf3n "Remember me". Actualiza el estado rememberMe seg\xfan el estado de la casilla de verificaci\xf3n.'),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/components/screens/LoginScreen/LoginForm.tsx"',title:'"/components/screens/LoginScreen/LoginForm.tsx"'},"const handleRememberMeChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n    setRememberMe(event.target.checked);\n};\n")),(0,t.kt)("h3",{id:"handlesubmit"},"handleSubmit"),(0,t.kt)("p",null,"La funci\xf3n ",(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("inlineCode",{parentName:"strong"},"handleSubmit"))," se ejecuta cuando se env\xeda el formulario. Previene el comportamiento de env\xedo predeterminado y se puede usar para realizar validaciones adicionales antes de enviar los datos del formulario al servidor."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/components/screens/LoginScreen/LoginForm.tsx"',title:'"/components/screens/LoginScreen/LoginForm.tsx"'},"const handleSubmit = (event: React.FormEvent) => {\n    event.preventDefault();\n    // Funci\xf3n para validar las credenciales del usuario y redirigir al usuario a Budget\n};\n")))}d.isMDXComponent=!0}}]);