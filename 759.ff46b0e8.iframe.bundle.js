"use strict";(self.webpackChunkjrgcomponents=self.webpackChunkjrgcomponents||[]).push([[759],{"./node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist/Color-RQJUDNI5.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ColorControl:()=>ColorControl,default:()=>Color_default});var ColorSpace2,_chunk_GWAJ4KRU_mjs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist/chunk-GWAJ4KRU.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_colorful__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react-colorful/dist/index.mjs"),color_convert__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/color-convert/index.js"),color_convert__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(color_convert__WEBPACK_IMPORTED_MODULE_1__),lodash_throttle_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash/throttle.js"),lodash_throttle_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(lodash_throttle_js__WEBPACK_IMPORTED_MODULE_2__),_storybook_theming__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs"),_storybook_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/components/dist/index.mjs"),_storybook_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/icons/dist/index.mjs"),Wrapper=_storybook_theming__WEBPACK_IMPORTED_MODULE_3__.I4.div({position:"relative",maxWidth:250}),PickerTooltip=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_3__.I4)(_storybook_components__WEBPACK_IMPORTED_MODULE_4__.kR)({position:"absolute",zIndex:1,top:4,left:4}),TooltipContent=_storybook_theming__WEBPACK_IMPORTED_MODULE_3__.I4.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),Note=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_3__.I4)(_storybook_components__WEBPACK_IMPORTED_MODULE_4__._)((({theme})=>({fontFamily:theme.typography.fonts.base}))),Swatches=_storybook_theming__WEBPACK_IMPORTED_MODULE_3__.I4.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),SwatchColor=_storybook_theming__WEBPACK_IMPORTED_MODULE_3__.I4.div((({theme,active})=>({width:16,height:16,boxShadow:active?`${theme.appBorderColor} 0 0 0 1px inset, ${theme.textMutedColor}50 0 0 0 4px`:`${theme.appBorderColor} 0 0 0 1px inset`,borderRadius:theme.appBorderRadius}))),Swatch=({value,active,onClick,style,...props})=>{let backgroundImage=`linear-gradient(${value}, ${value}), url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>'), linear-gradient(#fff, #fff)`;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SwatchColor,{...props,active,onClick,style:{...style,backgroundImage}})},Input=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_3__.I4)(_storybook_components__WEBPACK_IMPORTED_MODULE_4__.lV.Input)((({theme})=>({width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:theme.typography.fonts.base}))),ToggleIcon=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_3__.I4)(_storybook_icons__WEBPACK_IMPORTED_MODULE_5__.MarkupIcon)((({theme})=>({position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:theme.input.color}))),ColorSpace=((ColorSpace2=ColorSpace||{}).RGB="rgb",ColorSpace2.HSL="hsl",ColorSpace2.HEX="hex",ColorSpace2),COLOR_SPACES=Object.values(ColorSpace),COLOR_REGEXP=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,RGB_REGEXP=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,HSL_REGEXP=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,HEX_REGEXP=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,SHORTHEX_REGEXP=/^\s*#?([0-9a-f]{3})\s*$/i,ColorPicker={hex:react_colorful__WEBPACK_IMPORTED_MODULE_6__.jI,rgb:react_colorful__WEBPACK_IMPORTED_MODULE_6__.p9,hsl:react_colorful__WEBPACK_IMPORTED_MODULE_6__.xp},fallbackColor={hex:"transparent",rgb:"rgba(0, 0, 0, 0)",hsl:"hsla(0, 0%, 0%, 0)"},stringToArgs=value=>{let match=value?.match(COLOR_REGEXP);if(!match)return[0,0,0,1];let[,x,y,z,a=1]=match;return[x,y,z,a].map(Number)},parseValue=value=>{if(!value)return;let valid=!0;if(RGB_REGEXP.test(value)){let[r,g,b,a]=stringToArgs(value),[h,s,l]=color_convert__WEBPACK_IMPORTED_MODULE_1___default().rgb.hsl([r,g,b])||[0,0,0];return{valid,value,keyword:color_convert__WEBPACK_IMPORTED_MODULE_1___default().rgb.keyword([r,g,b]),colorSpace:"rgb",rgb:value,hsl:`hsla(${h}, ${s}%, ${l}%, ${a})`,hex:`#${color_convert__WEBPACK_IMPORTED_MODULE_1___default().rgb.hex([r,g,b]).toLowerCase()}`}}if(HSL_REGEXP.test(value)){let[h,s,l,a]=stringToArgs(value),[r,g,b]=color_convert__WEBPACK_IMPORTED_MODULE_1___default().hsl.rgb([h,s,l])||[0,0,0];return{valid,value,keyword:color_convert__WEBPACK_IMPORTED_MODULE_1___default().hsl.keyword([h,s,l]),colorSpace:"hsl",rgb:`rgba(${r}, ${g}, ${b}, ${a})`,hsl:value,hex:`#${color_convert__WEBPACK_IMPORTED_MODULE_1___default().hsl.hex([h,s,l]).toLowerCase()}`}}let plain=value.replace("#",""),rgb=color_convert__WEBPACK_IMPORTED_MODULE_1___default().keyword.rgb(plain)||color_convert__WEBPACK_IMPORTED_MODULE_1___default().hex.rgb(plain),hsl=color_convert__WEBPACK_IMPORTED_MODULE_1___default().rgb.hsl(rgb),mapped=value;if(/[^#a-f0-9]/i.test(value)?mapped=plain:HEX_REGEXP.test(value)&&(mapped=`#${plain}`),mapped.startsWith("#"))valid=HEX_REGEXP.test(mapped);else try{color_convert__WEBPACK_IMPORTED_MODULE_1___default().keyword.hex(mapped)}catch{valid=!1}return{valid,value:mapped,keyword:color_convert__WEBPACK_IMPORTED_MODULE_1___default().rgb.keyword(rgb),colorSpace:"hex",rgb:`rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 1)`,hsl:`hsla(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%, 1)`,hex:mapped}},useColorInput=(initialValue,onChange)=>{let[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue||""),[color,setColor]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>parseValue(value))),[colorSpace,setColorSpace]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(color?.colorSpace||"hex");(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{let nextValue=initialValue||"",nextColor=parseValue(nextValue);setValue(nextValue),setColor(nextColor),setColorSpace(nextColor?.colorSpace||"hex")}),[initialValue]);let realValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>((value,color,colorSpace)=>{if(!value||!color?.valid)return fallbackColor[colorSpace];if("hex"!==colorSpace)return color?.[colorSpace]||fallbackColor[colorSpace];if(!color.hex.startsWith("#"))try{return`#${color_convert__WEBPACK_IMPORTED_MODULE_1___default().keyword.hex(color.hex)}`}catch{return fallbackColor.hex}let short=color.hex.match(SHORTHEX_REGEXP);if(!short)return HEX_REGEXP.test(color.hex)?color.hex:fallbackColor.hex;let[r,g,b]=short[1].split("");return`#${r}${r}${g}${g}${b}${b}`})(value,color,colorSpace).toLowerCase()),[value,color,colorSpace]),updateValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((update=>{let parsed=parseValue(update),v=parsed?.value||update||"";setValue(v),""===v&&(setColor(void 0),onChange(void 0)),parsed&&(setColor(parsed),setColorSpace(parsed.colorSpace),onChange(parsed.value))}),[onChange]),cycleColorSpace=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{let next=COLOR_SPACES.indexOf(colorSpace)+1;next>=COLOR_SPACES.length&&(next=0),setColorSpace(COLOR_SPACES[next]);let update=color?.[COLOR_SPACES[next]]||"";setValue(update),onChange(update)}),[color,colorSpace,onChange]);return{value,realValue,updateValue,color,colorSpace,cycleColorSpace}},id=value=>value.replace(/\s*/,"").toLowerCase(),ColorControl=({name,value:initialValue,onChange,onFocus,onBlur,presetColors,startOpen=!1})=>{let throttledOnChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(lodash_throttle_js__WEBPACK_IMPORTED_MODULE_2___default()(onChange,200),[onChange]),{value,realValue,updateValue,color,colorSpace,cycleColorSpace}=useColorInput(initialValue,throttledOnChange),{presets,addPreset}=((presetColors,currentColor,colorSpace)=>{let[selectedColors,setSelectedColors]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(currentColor?.valid?[currentColor]:[]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{void 0===currentColor&&setSelectedColors([])}),[currentColor]);let presets=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(presetColors||[]).map((preset=>"string"==typeof preset?parseValue(preset):preset.title?{...parseValue(preset.color),keyword:preset.title}:parseValue(preset.color))).concat(selectedColors).filter(Boolean).slice(-27)),[presetColors,selectedColors]),addPreset=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((color=>{color?.valid&&(presets.some((preset=>id(preset[colorSpace])===id(color[colorSpace])))||setSelectedColors((arr=>arr.concat(color))))}),[colorSpace,presets]);return{presets,addPreset}})(presetColors,color,colorSpace),Picker=ColorPicker[colorSpace];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(PickerTooltip,{startOpen,closeOnOutsideClick:!0,onVisibleChange:()=>addPreset(color),tooltip:react__WEBPACK_IMPORTED_MODULE_0__.createElement(TooltipContent,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Picker,{color:"transparent"===realValue?"#000000":realValue,onChange:updateValue,onFocus,onBlur}),presets.length>0&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(Swatches,null,presets.map(((preset,index)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_components__WEBPACK_IMPORTED_MODULE_4__.kR,{key:`${preset.value}-${index}`,hasChrome:!1,tooltip:react__WEBPACK_IMPORTED_MODULE_0__.createElement(Note,{note:preset.keyword||preset.value})},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Swatch,{value:preset[colorSpace],active:color&&id(preset[colorSpace])===id(color[colorSpace]),onClick:()=>updateValue(preset.value)}))))))},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Swatch,{value:realValue,style:{margin:4}})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Input,{id:(0,_chunk_GWAJ4KRU_mjs__WEBPACK_IMPORTED_MODULE_7__.Z)(name),value,onChange:e=>updateValue(e.target.value),onFocus:e=>e.target.select(),placeholder:"Choose color..."}),value?react__WEBPACK_IMPORTED_MODULE_0__.createElement(ToggleIcon,{onClick:cycleColorSpace}):null)},Color_default=ColorControl}}]);