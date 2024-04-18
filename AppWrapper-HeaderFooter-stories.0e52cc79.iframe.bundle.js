"use strict";(self.webpackChunkjrgcomponents=self.webpackChunkjrgcomponents||[]).push([[748],{"./node_modules/@mui/material/AppBar/AppBar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>AppBar_AppBar});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),Paper=__webpack_require__("./node_modules/@mui/material/Paper/Paper.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.js");function getAppBarUtilityClass(slot){return(0,generateUtilityClass.Ay)("MuiAppBar",slot)}(0,generateUtilityClasses.A)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const _excluded=["className","color","enableColorOnDark","position"],joinVars=(var1,var2)=>var1?`${null==var1?void 0:var1.replace(")","")}, ${var2})`:var2,AppBarRoot=(0,styled.Ay)(Paper.A,{name:"MuiAppBar",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[`position${(0,capitalize.A)(ownerState.position)}`],styles[`color${(0,capitalize.A)(ownerState.color)}`]]}})((({theme,ownerState})=>{const backgroundColorDefault="light"===theme.palette.mode?theme.palette.grey[100]:theme.palette.grey[900];return(0,esm_extends.A)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===ownerState.position&&{position:"fixed",zIndex:(theme.vars||theme).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===ownerState.position&&{position:"absolute",zIndex:(theme.vars||theme).zIndex.appBar,top:0,left:"auto",right:0},"sticky"===ownerState.position&&{position:"sticky",zIndex:(theme.vars||theme).zIndex.appBar,top:0,left:"auto",right:0},"static"===ownerState.position&&{position:"static"},"relative"===ownerState.position&&{position:"relative"},!theme.vars&&(0,esm_extends.A)({},"default"===ownerState.color&&{backgroundColor:backgroundColorDefault,color:theme.palette.getContrastText(backgroundColorDefault)},ownerState.color&&"default"!==ownerState.color&&"inherit"!==ownerState.color&&"transparent"!==ownerState.color&&{backgroundColor:theme.palette[ownerState.color].main,color:theme.palette[ownerState.color].contrastText},"inherit"===ownerState.color&&{color:"inherit"},"dark"===theme.palette.mode&&!ownerState.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===ownerState.color&&(0,esm_extends.A)({backgroundColor:"transparent",color:"inherit"},"dark"===theme.palette.mode&&{backgroundImage:"none"})),theme.vars&&(0,esm_extends.A)({},"default"===ownerState.color&&{"--AppBar-background":ownerState.enableColorOnDark?theme.vars.palette.AppBar.defaultBg:joinVars(theme.vars.palette.AppBar.darkBg,theme.vars.palette.AppBar.defaultBg),"--AppBar-color":ownerState.enableColorOnDark?theme.vars.palette.text.primary:joinVars(theme.vars.palette.AppBar.darkColor,theme.vars.palette.text.primary)},ownerState.color&&!ownerState.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":ownerState.enableColorOnDark?theme.vars.palette[ownerState.color].main:joinVars(theme.vars.palette.AppBar.darkBg,theme.vars.palette[ownerState.color].main),"--AppBar-color":ownerState.enableColorOnDark?theme.vars.palette[ownerState.color].contrastText:joinVars(theme.vars.palette.AppBar.darkColor,theme.vars.palette[ownerState.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:"inherit"===ownerState.color?"inherit":"var(--AppBar-color)"},"transparent"===ownerState.color&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))})),AppBar_AppBar=react.forwardRef((function AppBar(inProps,ref){const props=(0,useThemeProps.A)({props:inProps,name:"MuiAppBar"}),{className,color="primary",enableColorOnDark=!1,position="fixed"}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),ownerState=(0,esm_extends.A)({},props,{color,position,enableColorOnDark}),classes=(ownerState=>{const{color,position,classes}=ownerState,slots={root:["root",`color${(0,capitalize.A)(color)}`,`position${(0,capitalize.A)(position)}`]};return(0,composeClasses.A)(slots,getAppBarUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(AppBarRoot,(0,esm_extends.A)({square:!0,component:"header",ownerState,elevation:4,className:(0,clsx.A)(classes.root,className,"fixed"===position&&"mui-fixed"),ref},other))}))},"./node_modules/@mui/material/Box/Box.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Box_Box});var createBox=__webpack_require__("./node_modules/@mui/system/esm/createBox.js"),ClassNameGenerator=__webpack_require__("./node_modules/@mui/utils/ClassNameGenerator/ClassNameGenerator.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),identifier=__webpack_require__("./node_modules/@mui/material/styles/identifier.js");const Box_boxClasses=(0,__webpack_require__("./node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.js").A)("MuiBox",["root"]),defaultTheme=(0,createTheme.A)(),Box_Box=(0,createBox.A)({themeId:identifier.A,defaultTheme,defaultClassName:Box_boxClasses.root,generateClassName:ClassNameGenerator.A.generate})},"./node_modules/@mui/material/Paper/Paper.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Paper_Paper});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/colorManipulator.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js");const styles_getOverlayAlpha=elevation=>{let alphaValue;return alphaValue=elevation<1?5.11916*elevation**2:4.5*Math.log(elevation+1)+2,(alphaValue/100).toFixed(2)};var useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.js");function getPaperUtilityClass(slot){return(0,generateUtilityClass.Ay)("MuiPaper",slot)}(0,generateUtilityClasses.A)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const _excluded=["className","component","elevation","square","variant"],PaperRoot=(0,styled.Ay)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[ownerState.variant],!ownerState.square&&styles.rounded,"elevation"===ownerState.variant&&styles[`elevation${ownerState.elevation}`]]}})((({theme,ownerState})=>{var _theme$vars$overlays;return(0,esm_extends.A)({backgroundColor:(theme.vars||theme).palette.background.paper,color:(theme.vars||theme).palette.text.primary,transition:theme.transitions.create("box-shadow")},!ownerState.square&&{borderRadius:theme.shape.borderRadius},"outlined"===ownerState.variant&&{border:`1px solid ${(theme.vars||theme).palette.divider}`},"elevation"===ownerState.variant&&(0,esm_extends.A)({boxShadow:(theme.vars||theme).shadows[ownerState.elevation]},!theme.vars&&"dark"===theme.palette.mode&&{backgroundImage:`linear-gradient(${(0,colorManipulator.X4)("#fff",styles_getOverlayAlpha(ownerState.elevation))}, ${(0,colorManipulator.X4)("#fff",styles_getOverlayAlpha(ownerState.elevation))})`},theme.vars&&{backgroundImage:null==(_theme$vars$overlays=theme.vars.overlays)?void 0:_theme$vars$overlays[ownerState.elevation]}))})),Paper_Paper=react.forwardRef((function Paper(inProps,ref){const props=(0,useThemeProps.A)({props:inProps,name:"MuiPaper"}),{className,component="div",elevation=1,square=!1,variant="elevation"}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),ownerState=(0,esm_extends.A)({},props,{component,elevation,square,variant}),classes=(ownerState=>{const{square,elevation,variant,classes}=ownerState,slots={root:["root",variant,!square&&"rounded","elevation"===variant&&`elevation${elevation}`]};return(0,composeClasses.A)(slots,getPaperUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(PaperRoot,(0,esm_extends.A)({as:component,ownerState,className:(0,clsx.A)(classes.root,className),ref},other))}))},"./node_modules/@mui/material/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Typography_Typography});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.js");function getTypographyUtilityClass(slot){return(0,generateUtilityClass.Ay)("MuiTypography",slot)}(0,generateUtilityClasses.A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const _excluded=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],TypographyRoot=(0,styled.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant],"inherit"!==ownerState.align&&styles[`align${(0,capitalize.A)(ownerState.align)}`],ownerState.noWrap&&styles.noWrap,ownerState.gutterBottom&&styles.gutterBottom,ownerState.paragraph&&styles.paragraph]}})((({theme,ownerState})=>(0,esm_extends.A)({margin:0},"inherit"===ownerState.variant&&{font:"inherit"},"inherit"!==ownerState.variant&&theme.typography[ownerState.variant],"inherit"!==ownerState.align&&{textAlign:ownerState.align},ownerState.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},ownerState.gutterBottom&&{marginBottom:"0.35em"},ownerState.paragraph&&{marginBottom:16}))),defaultVariantMapping={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},colorTransformations={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Typography_Typography=react.forwardRef((function Typography(inProps,ref){const themeProps=(0,useThemeProps.A)({props:inProps,name:"MuiTypography"}),color=(color=>colorTransformations[color]||color)(themeProps.color),props=(0,extendSxProp.A)((0,esm_extends.A)({},themeProps,{color})),{align="inherit",className,component,gutterBottom=!1,noWrap=!1,paragraph=!1,variant="body1",variantMapping=defaultVariantMapping}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),ownerState=(0,esm_extends.A)({},props,{align,color,className,component,gutterBottom,noWrap,paragraph,variant,variantMapping}),Component=component||(paragraph?"p":variantMapping[variant]||defaultVariantMapping[variant])||"span",classes=(ownerState=>{const{align,gutterBottom,noWrap,paragraph,variant,classes}=ownerState,slots={root:["root",variant,"inherit"!==ownerState.align&&`align${(0,capitalize.A)(align)}`,gutterBottom&&"gutterBottom",noWrap&&"noWrap",paragraph&&"paragraph"]};return(0,composeClasses.A)(slots,getTypographyUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(TypographyRoot,(0,esm_extends.A)({as:Component,ref,ownerState,className:(0,clsx.A)(classes.root,className)},other))}))},"./node_modules/@mui/system/esm/createBox.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createBox});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_mui_styled_engine__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/styled-engine/index.js"),_styleFunctionSx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js"),_styleFunctionSx__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),_useTheme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/system/esm/useTheme.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const _excluded=["className","component"];function createBox(options={}){const{themeId,defaultTheme,defaultClassName="MuiBox-root",generateClassName}=options,BoxRoot=(0,_mui_styled_engine__WEBPACK_IMPORTED_MODULE_2__.default)("div",{shouldForwardProp:prop=>"theme"!==prop&&"sx"!==prop&&"as"!==prop})(_styleFunctionSx__WEBPACK_IMPORTED_MODULE_3__.A);return react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Box(inProps,ref){const theme=(0,_useTheme__WEBPACK_IMPORTED_MODULE_4__.A)(defaultTheme),_extendSxProp=(0,_styleFunctionSx__WEBPACK_IMPORTED_MODULE_5__.A)(inProps),{className,component="div"}=_extendSxProp,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__.A)(_extendSxProp,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BoxRoot,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.A)({as:component,ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_8__.A)(className,generateClassName?generateClassName(defaultClassName):defaultClassName),theme:themeId&&theme[themeId]||theme},other))}))}},"./node_modules/@mui/system/esm/useMediaQuery/useMediaQuery.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{A:()=>useMediaQuery});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_mui_utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/useEnhancedEffect/useEnhancedEffect.js"),_useThemeProps__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/system/esm/useThemeProps/getThemeProps.js"),_useThemeWithoutDefault__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/system/esm/useThemeWithoutDefault.js");function useMediaQueryOld(query,defaultMatches,matchMedia,ssrMatchMedia,noSsr){const[match,setMatch]=react__WEBPACK_IMPORTED_MODULE_0__.useState((()=>noSsr&&matchMedia?matchMedia(query).matches:ssrMatchMedia?ssrMatchMedia(query).matches:defaultMatches));return(0,_mui_utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_1__.A)((()=>{let active=!0;if(!matchMedia)return;const queryList=matchMedia(query),updateMatch=()=>{active&&setMatch(queryList.matches)};return updateMatch(),queryList.addListener(updateMatch),()=>{active=!1,queryList.removeListener(updateMatch)}}),[query,matchMedia]),match}const maybeReactUseSyncExternalStore=(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2))).useSyncExternalStore;function useMediaQueryNew(query,defaultMatches,matchMedia,ssrMatchMedia,noSsr){const getDefaultSnapshot=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>defaultMatches),[defaultMatches]),getServerSnapshot=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{if(noSsr&&matchMedia)return()=>matchMedia(query).matches;if(null!==ssrMatchMedia){const{matches}=ssrMatchMedia(query);return()=>matches}return getDefaultSnapshot}),[getDefaultSnapshot,query,ssrMatchMedia,noSsr,matchMedia]),[getSnapshot,subscribe]=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{if(null===matchMedia)return[getDefaultSnapshot,()=>()=>{}];const mediaQueryList=matchMedia(query);return[()=>mediaQueryList.matches,notify=>(mediaQueryList.addListener(notify),()=>{mediaQueryList.removeListener(notify)})]}),[getDefaultSnapshot,matchMedia,query]);return maybeReactUseSyncExternalStore(subscribe,getSnapshot,getServerSnapshot)}function useMediaQuery(queryInput,options={}){const theme=(0,_useThemeWithoutDefault__WEBPACK_IMPORTED_MODULE_2__.A)(),supportMatchMedia="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches=!1,matchMedia=supportMatchMedia?window.matchMedia:null,ssrMatchMedia=null,noSsr=!1}=(0,_useThemeProps__WEBPACK_IMPORTED_MODULE_3__.A)({name:"MuiUseMediaQuery",props:options,theme});let query="function"==typeof queryInput?queryInput(theme):queryInput;query=query.replace(/^@media( ?)/m,"");return(void 0!==maybeReactUseSyncExternalStore?useMediaQueryNew:useMediaQueryOld)(query,defaultMatches,matchMedia,ssrMatchMedia,noSsr)}},"./src/AppWrapper/HeaderFooter.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Header:()=>Header,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_HeaderFooter__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/AppWrapper/HeaderFooter.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Application/Header & Footer",component:_HeaderFooter__WEBPACK_IMPORTED_MODULE_1__.A,tags:["autodocs"],argTypes:{height:{control:"text"}},parameters:{componentSubtitle:"A Sample Component",docs:{description:{component:"This component is meant to illustrate how to effectively document components."}},references:[]}};var Header=function Header(args){return __jsx(_HeaderFooter__WEBPACK_IMPORTED_MODULE_1__.A,args)};Header.displayName="Header",Header.args={},Header.parameters={...Header.parameters,docs:{...Header.parameters?.docs,source:{originalSource:"(args: HeaderFooterProps) => <HeaderFooterComponent {...args} />",...Header.parameters?.docs?.source}}};const __namedExportsOrder=["Header"]},"./src/AppWrapper/HeaderFooter.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>HeaderFooter});var C_Users_Jameson_Source_GT_Umbrella_jrg_jrg_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/system/esm/useMediaQuery/useMediaQuery.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/AppBar/AppBar.js"),_mui_material__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_Layout_CenterAlignedBox__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Layout/CenterAlignedBox.tsx"),process=__webpack_require__("./node_modules/process/browser.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,C_Users_Jameson_Source_GT_Umbrella_jrg_jrg_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function HeaderFooter(_ref){var _components$center,_process$env$NEXT_PUB,_ref$height=_ref.height,height=void 0===_ref$height?"3rem":_ref$height,_ref$footer=_ref.footer,footer=void 0!==_ref$footer&&_ref$footer,components=_ref.components,mobile=(0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.A)("(max-width:600px)");return __jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,{sx:_objectSpread({height,px:mobile?"0.25rem":"1rem",justifySelf:footer?"end":"unset"},footer?{borderBottom:"unset"}:{}),position:"static"},__jsx(_Layout_CenterAlignedBox__WEBPACK_IMPORTED_MODULE_2__.A,{left:null==components?void 0:components.left,center:null!==(_components$center=null==components?void 0:components.center)&&void 0!==_components$center?_components$center:!footer&&__jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.A,{variant:"subtitle1",fontWeight:"bolder",textAlign:"center"},null!==(_process$env$NEXT_PUB=process.env.NEXT_PUBLIC_APP_NAME)&&void 0!==_process$env$NEXT_PUB?_process$env$NEXT_PUB:"Application Name"),right:null==components?void 0:components.right}))}HeaderFooter.displayName="HeaderFooter";try{HeaderFooter.displayName="HeaderFooter",HeaderFooter.__docgenInfo={description:"",displayName:"HeaderFooter",props:{footer:{defaultValue:{value:"false"},description:"",name:"footer",required:!1,type:{name:"boolean"}},height:{defaultValue:{value:"3rem"},description:"",name:"height",required:!1,type:{name:"string"}},components:{defaultValue:null,description:"",name:"components",required:!1,type:{name:"CenterAlignedBoxProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/AppWrapper/HeaderFooter.tsx#HeaderFooter"]={docgenInfo:HeaderFooter.__docgenInfo,name:"HeaderFooter",path:"src/AppWrapper/HeaderFooter.tsx#HeaderFooter"})}catch(__react_docgen_typescript_loader_error){}},"./src/Layout/CenterAlignedBox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>CenterAlignedBox});var _mui_material__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/system/esm/useMediaQuery/useMediaQuery.js"),_mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),__jsx=__webpack_require__("./node_modules/next/dist/compiled/react/index.js").createElement;function CenterAlignedBox(_ref){var left=_ref.left,center=_ref.center,right=_ref.right,mobile=(0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.A)("(max-width:600px)");return __jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.A,{sx:{height:"100%",width:"100%",display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"space-between",alignItems:"center"}},__jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.A,{sx:{flex:"1 1 50%",display:"flex",alignItems:"center",minWidth:mobile?"unset":"25%"}},null!=left?left:" "),__jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.A,{sx:{flex:"0 0 auto",minWidth:mobile?"unset":"25%"}},null!=center?center:" "),__jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.A,{sx:{flex:"1 1 50%",display:"flex",justifyContent:"flex-end",alignItems:"center",minWidth:mobile?"unset":"25%"}},null!=right?right:" "))}CenterAlignedBox.displayName="CenterAlignedBox";try{CenterAlignedBox.displayName="CenterAlignedBox",CenterAlignedBox.__docgenInfo={description:"",displayName:"CenterAlignedBox",props:{left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"ReactNode"}},center:{defaultValue:null,description:"",name:"center",required:!1,type:{name:"ReactNode"}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Layout/CenterAlignedBox.tsx#CenterAlignedBox"]={docgenInfo:CenterAlignedBox.__docgenInfo,name:"CenterAlignedBox",path:"src/Layout/CenterAlignedBox.tsx#CenterAlignedBox"})}catch(__react_docgen_typescript_loader_error){}}}]);