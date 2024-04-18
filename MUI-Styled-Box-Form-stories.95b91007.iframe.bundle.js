"use strict";(self.webpackChunkjrgcomponents=self.webpackChunkjrgcomponents||[]).push([[949],{"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}__webpack_require__.d(__webpack_exports__,{A:()=>_slicedToArray})},"./node_modules/@mui/material/Box/Box.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Box_Box});var createBox=__webpack_require__("./node_modules/@mui/system/esm/createBox.js"),ClassNameGenerator=__webpack_require__("./node_modules/@mui/utils/ClassNameGenerator/ClassNameGenerator.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),identifier=__webpack_require__("./node_modules/@mui/material/styles/identifier.js");const Box_boxClasses=(0,__webpack_require__("./node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.js").A)("MuiBox",["root"]),defaultTheme=(0,createTheme.A)(),Box_Box=(0,createBox.A)({themeId:identifier.A,defaultTheme,defaultClassName:Box_boxClasses.root,generateClassName:ClassNameGenerator.A.generate})},"./node_modules/@mui/system/esm/createBox.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createBox});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_mui_styled_engine__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/styled-engine/index.js"),_styleFunctionSx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js"),_styleFunctionSx__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),_useTheme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/system/esm/useTheme.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const _excluded=["className","component"];function createBox(options={}){const{themeId,defaultTheme,defaultClassName="MuiBox-root",generateClassName}=options,BoxRoot=(0,_mui_styled_engine__WEBPACK_IMPORTED_MODULE_2__.default)("div",{shouldForwardProp:prop=>"theme"!==prop&&"sx"!==prop&&"as"!==prop})(_styleFunctionSx__WEBPACK_IMPORTED_MODULE_3__.A);return react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Box(inProps,ref){const theme=(0,_useTheme__WEBPACK_IMPORTED_MODULE_4__.A)(defaultTheme),_extendSxProp=(0,_styleFunctionSx__WEBPACK_IMPORTED_MODULE_5__.A)(inProps),{className,component="div"}=_extendSxProp,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__.A)(_extendSxProp,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BoxRoot,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.A)({as:component,ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_8__.A)(className,generateClassName?generateClassName(defaultClassName):defaultClassName),theme:themeId&&theme[themeId]||theme},other))}))}},"./src/MUI/Styled/Box/Form.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TestForm:()=>TestForm,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Form_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Field=__webpack_require__("./src/MUI/Styled/FormControl/Field.tsx"),__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var Form=function Form(_ref){var initialFields=_ref.fields,_React$useState=react.useState(initialFields),_React$useState2=(0,slicedToArray.A)(_React$useState,2),fields=_React$useState2[0],setFields=_React$useState2[1];return __jsx(Box.A,{component:"form"},Object.entries(fields).map((function(_ref2){var _ref3=(0,slicedToArray.A)(_ref2,2),id=_ref3[0],fieldProps=_ref3[1];return __jsx(Field.A,(0,esm_extends.A)({key:id},fieldProps,{nameID:id,onChange:function onChange(e){return function handleChange(id,value){var updatedFields=_objectSpread(_objectSpread({},fields),{},(0,defineProperty.A)({},id,_objectSpread(_objectSpread({},fields[id]),{},{value})));setFields(updatedFields)}(id,e.target.value)}}))})))};Form.displayName="Form";const Box_Form=Form;try{Form.displayName="Form",Form.__docgenInfo={description:"",displayName:"Form",props:{fields:{defaultValue:null,description:"",name:"fields",required:!0,type:{name:"{ [id: string]: FieldProps; }"}},messages:{defaultValue:null,description:"",name:"messages",required:!0,type:{name:"Message[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/MUI/Styled/Box/Form.tsx#Form"]={docgenInfo:Form.__docgenInfo,name:"Form",path:"src/MUI/Styled/Box/Form.tsx#Form"})}catch(__react_docgen_typescript_loader_error){}var console=__webpack_require__("./node_modules/console-browserify/index.js"),Form_stories_jsx=react.createElement;const Form_stories={title:"Components/Form",component:Box_Form};var TestForm={render:function render(args){return Form_stories_jsx(Box_Form,args)},args:{fields:{username:{nameID:"username",label:"Username",type:"text",value:"",placeholder:"Enter your username",onChange:function onChange(){return console.log("Username changed")},messages:[]},password:{nameID:"password",label:"Password",type:"password",value:"",placeholder:"Enter your password",onChange:function onChange(){return console.log("Password changed")},messages:[]},accountType:{nameID:"accountType",label:"Account Type",type:"select",value:"",items:[{value:"personal",label:"Personal"},{value:"business",label:"Business"}],onChange:function onChange(){return console.log("Account Type changed")},messages:[]},agreeTerms:{nameID:"agreeTerms",label:"Agree to Terms",type:"checkbox",value:"false",onChange:function onChange(){return console.log("Agree to Terms changed")},messages:[]}},messages:[]}};TestForm.parameters={...TestForm.parameters,docs:{...TestForm.parameters?.docs,source:{originalSource:"{\n  render: args => <Form {...args} />,\n  args: {\n    fields: {\n      username: {\n        nameID: 'username',\n        label: 'Username',\n        type: 'text',\n        value: '',\n        placeholder: 'Enter your username',\n        // Provide a no-op function or simple console log for onChange\n        onChange: () => console.log('Username changed'),\n        messages: []\n      },\n      password: {\n        nameID: 'password',\n        label: 'Password',\n        type: 'password',\n        value: '',\n        placeholder: 'Enter your password',\n        // Provide a no-op function or simple console log for onChange\n        onChange: () => console.log('Password changed'),\n        messages: []\n      },\n      accountType: {\n        nameID: 'accountType',\n        label: 'Account Type',\n        type: 'select',\n        value: '',\n        items: [{\n          value: 'personal',\n          label: 'Personal'\n        }, {\n          value: 'business',\n          label: 'Business'\n        }],\n        // Provide a no-op function or simple console log for onChange\n        onChange: () => console.log('Account Type changed'),\n        messages: []\n      },\n      agreeTerms: {\n        nameID: 'agreeTerms',\n        label: 'Agree to Terms',\n        type: 'checkbox',\n        value: 'false',\n        // Provide a no-op function or simple console log for onChange\n        onChange: () => console.log('Agree to Terms changed'),\n        messages: []\n      }\n    },\n    messages: [\n      // Define any initial form-wide messages here\n    ]\n  }\n}",...TestForm.parameters?.docs?.source}}};const __namedExportsOrder=["TestForm"]},"./src/MUI/Styled/FormControl/Field.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>FormControl_Field});var FormControl=__webpack_require__("./node_modules/@mui/material/FormControl/FormControl.js"),FormLabel=__webpack_require__("./node_modules/@mui/material/FormLabel/FormLabel.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),Collapse=__webpack_require__("./node_modules/@mui/material/Collapse/Collapse.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),FormGroup=__webpack_require__("./node_modules/@mui/material/FormGroup/FormGroup.js"),FormControlLabel=__webpack_require__("./node_modules/@mui/material/FormControlLabel/FormControlLabel.js"),Checkbox=__webpack_require__("./node_modules/@mui/material/Checkbox/Checkbox.js"),__jsx=react.createElement;function CheckField(props){return __jsx(FormGroup.A,{key:"field"},__jsx(FormControlLabel.A,{control:__jsx(Checkbox.A,{required:!0,id:props.id}),label:null==props.helperText?props.label:props.helperText}))}CheckField.displayName="CheckField";try{CheckField.displayName="CheckField",CheckField.__docgenInfo={description:"",displayName:"CheckField",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/MUI/Styled/Input/CheckField.tsx#CheckField"]={docgenInfo:CheckField.__docgenInfo,name:"CheckField",path:"src/MUI/Styled/Input/CheckField.tsx#CheckField"})}catch(__react_docgen_typescript_loader_error){}var MultiCheckField_jsx=react.createElement;function MultiCheckField(props){return MultiCheckField_jsx(FormGroup.A,{key:"field"}," ",props.items.map((function(item,index){return MultiCheckField_jsx(FormControlLabel.A,{key:index,control:MultiCheckField_jsx(Checkbox.A,{id:item.replace(/[\W_]+/g,"")}),label:item})})))}MultiCheckField.displayName="MultiCheckField";try{MultiCheckField.displayName="MultiCheckField",MultiCheckField.__docgenInfo={description:"",displayName:"MultiCheckField",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/MUI/Styled/Input/MultiCheckField.tsx#MultiCheckField"]={docgenInfo:MultiCheckField.__docgenInfo,name:"MultiCheckField",path:"src/MUI/Styled/Input/MultiCheckField.tsx#MultiCheckField"})}catch(__react_docgen_typescript_loader_error){}var TextField=__webpack_require__("./node_modules/@mui/material/TextField/TextField.js"),PasswordField_jsx=react.createElement;function PasswordField(props){return PasswordField_jsx(TextField.A,{key:"field",fullWidth:!0,id:props.id,label:null==props.helperText?props.label:props.helperText,variant:"outlined",type:"password",required:!0})}PasswordField.displayName="PasswordField";try{PasswordField.displayName="PasswordField",PasswordField.__docgenInfo={description:"",displayName:"PasswordField",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/MUI/Styled/Input/PasswordField.tsx#PasswordField"]={docgenInfo:PasswordField.__docgenInfo,name:"PasswordField",path:"src/MUI/Styled/Input/PasswordField.tsx#PasswordField"})}catch(__react_docgen_typescript_loader_error){}var RadioGroup=__webpack_require__("./node_modules/@mui/material/RadioGroup/RadioGroup.js"),Radio=__webpack_require__("./node_modules/@mui/material/Radio/Radio.js"),SelectField_jsx=react.createElement;function SelectField(props){var _props$items;return SelectField_jsx(RadioGroup.A,{key:"field","aria-labelledby":props.id,id:props.id,name:props.id,defaultValue:0},null===(_props$items=props.items)||void 0===_props$items?void 0:_props$items.map((function(item,index){var _item$value,_item$value2,_item$label;return SelectField_jsx(FormControlLabel.A,{key:index,id:(null!==(_item$value=item.value)&&void 0!==_item$value?_item$value:item).replace(/[\W_]+/g,""),value:null!==(_item$value2=item.value)&&void 0!==_item$value2?_item$value2:item,control:SelectField_jsx(Radio.A,null),label:null!==(_item$label=item.label)&&void 0!==_item$label?_item$label:item})})))}SelectField.displayName="SelectField";try{SelectField.displayName="SelectField",SelectField.__docgenInfo={description:"",displayName:"SelectField",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/MUI/Styled/Input/SelectField.tsx#SelectField"]={docgenInfo:SelectField.__docgenInfo,name:"SelectField",path:"src/MUI/Styled/Input/SelectField.tsx#SelectField"})}catch(__react_docgen_typescript_loader_error){}var TextField_jsx=react.createElement;function TextField_TextField(props){var _props$helperText;return TextField_jsx(TextField.A,{key:"field",fullWidth:!0,id:props.id,label:null!==(_props$helperText=props.helperText)&&void 0!==_props$helperText?_props$helperText:props.label,variant:"outlined",required:!0})}TextField_TextField.displayName="TextField";try{TextField_TextField.displayName="TextField",TextField_TextField.__docgenInfo={description:"",displayName:"TextField",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/MUI/Styled/Input/TextField.tsx#TextField"]={docgenInfo:TextField_TextField.__docgenInfo,name:"TextField",path:"src/MUI/Styled/Input/TextField.tsx#TextField"})}catch(__react_docgen_typescript_loader_error){}var TimeField_jsx=react.createElement;function TimeField(props){return TimeField_jsx(TextField.A,{key:"field",fullWidth:!0,required:!0,id:props.id,label:props.label,type:"time",defaultValue:props.defaultValue?props.defaultValue:"02:00"})}TimeField.displayName="TimeField";try{TimeField.displayName="TimeField",TimeField.__docgenInfo={description:"",displayName:"TimeField",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/MUI/Styled/Input/TimeField.tsx#TimeField"]={docgenInfo:TimeField.__docgenInfo,name:"TimeField",path:"src/MUI/Styled/Input/TimeField.tsx#TimeField"})}catch(__react_docgen_typescript_loader_error){}var Field_jsx=react.createElement,Field=function Field(_ref){var nameID=_ref.nameID,label=_ref.label,description=_ref.description,value=_ref.value,onChange=_ref.onChange,_ref$placeholder=_ref.placeholder,placeholder=void 0===_ref$placeholder?"":_ref$placeholder,_ref$messages=_ref.messages,messages=void 0===_ref$messages?[]:_ref$messages,_ref$type=_ref.type,type=void 0===_ref$type?"text":_ref$type,items=_ref.items;return Field_jsx(FormControl.A,{required:!0,fullWidth:!0,sx:{my:"1rem"}},Field_jsx(FormLabel.A,{id:nameID,htmlFor:nameID},label),description&&Field_jsx(Typography.A,{variant:"body1",gutterBottom:!0},description),function renderInputcomponent(){switch(type){case"text":default:return Field_jsx(TextField_TextField,{id:nameID,value,onChange,placeholder});case"password":return Field_jsx(PasswordField,{id:nameID,value,onChange,placeholder});case"select":return Field_jsx(SelectField,{id:nameID,value,onChange,items});case"time":return Field_jsx(TimeField,{id:nameID,value,onChange});case"checkbox":return Field_jsx(CheckField,{id:nameID,value,onChange});case"radio":return Field_jsx(MultiCheckField,{id:nameID,value,onChange,items})}}(),Field_jsx(Collapse.A,{in:messages.length>0},messages.map((function(message,index){return Field_jsx(Alert,{key:index,severity:message.level,sx:{mt:1}},message.value)}))))};Field.displayName="Field";const FormControl_Field=Field;try{Field.displayName="Field",Field.__docgenInfo={description:"",displayName:"Field",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},validate:{defaultValue:null,description:"",name:"validate",required:!1,type:{name:"(value: string) => boolean"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"password"'},{value:'"select"'},{value:'"time"'},{value:'"date"'},{value:'"datetime"'},{value:'"checkbox"'},{value:'"radio"'}]}},items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"{ value: string; label: string; }[]"}},nameID:{defaultValue:null,description:"",name:"nameID",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"any"}},messages:{defaultValue:{value:"[]"},description:"",name:"messages",required:!1,type:{name:"Message[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/MUI/Styled/FormControl/Field.tsx#Field"]={docgenInfo:Field.__docgenInfo,name:"Field",path:"src/MUI/Styled/FormControl/Field.tsx#Field"})}catch(__react_docgen_typescript_loader_error){}}}]);