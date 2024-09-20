"use strict";(self.webpackChunkreact_3layer_ui_components=self.webpackChunkreact_3layer_ui_components||[]).push([[713],{"./src/components/Input/InputNumber/InputNumber.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Input_InputNumber_InputNumber});var config_enum=__webpack_require__("./src/config/enum.ts"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),InputNumber=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Input/InputNumber/InputNumber.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(InputNumber.A,options);InputNumber.A&&InputNumber.A.locals&&InputNumber.A.locals;var icons_close=__webpack_require__("./src/assets/icons/close.svg"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function InputNumber_InputNumber_InputNumber(props){const{action,label,isRequired,type,prefix,suffix,value,allowNegative,numberType,decimalDigit,isReverseSymb,placeHolder,className,disabled,readOnly,min,max,isSmall,bgColor,onChange,onEnter,onBlur}=props,[internalValue,setInternalValue]=react.useState(""),inputRef=react.useRef(null),cursorPosition=react.useRef({selectionStart:0,selectionEnd:0}),buildRegex=react.useCallback((()=>{let regExDecimal="",regExString="";for(let i=1;i<=decimalDigit;i++)regExDecimal+="\\d";return regExString=isReverseSymb?"(\\d)(?=(?:\\d{3})+(?:,|$))|(,"+regExDecimal+"?)\\d*$":"(\\d)(?=(?:\\d{3})+(?:\\.|$))|(\\."+regExDecimal+"?)\\d*$",new RegExp(regExString,"g")}),[decimalDigit,isReverseSymb]),formatString=react.useCallback((inputValue=>{const newRegEx=buildRegex();return isReverseSymb?numberType===config_enum.Hv.DECIMAL?(inputValue=allowNegative?inputValue.replace(/^(-00)/gm,"-0").replace(/^(00)/gm,"0").replace(/[^0-9,-]/g,"").replace(",","x").replace(/,/g,"").replace("x",",").replace(/(?!^)-/g,""):inputValue.replace(/^(00)/gm,"0").replace(/[^0-9,]/g,"").replace(",","x").replace(/,/g,"").replace("x",",")).replace(newRegEx,((m,s1,s2)=>s2||s1+".")):(inputValue=allowNegative?inputValue.replace(/^(-00)/gm,"-0").replace(/^(00)/gm,"0").replace(/[^0-9-]/g,"").replace(/(?!^)-/g,""):inputValue.replace(/^(00)/gm,"0").replace(/[^0-9]/g,"")).replace(/\B(?=(\d{3})+(?!\d))/g,"."):numberType===config_enum.Hv.DECIMAL?(inputValue=allowNegative?inputValue.replace(/^(-00)/gm,"-0").replace(/^(00)/gm,"0").replace(/[^0-9.-]/g,"").replace(".","x").replace(/\./g,"").replace("x",".").replace(/(?!^)-/g,""):inputValue.replace(/^(00)/gm,"0").replace(/[^0-9.]/g,"").replace(".","x").replace(/\./g,"").replace("x",".")).replace(newRegEx,((m,s1,s2)=>s2||s1+",")):(inputValue=allowNegative?inputValue.replace(/^(-00)/gm,"-0").replace(/^(00)/gm,"0").replace(/[^0-9-]/g,"").replace(/(?!^)-/g,""):inputValue.replace(/^(00)/gm,"0").replace(/[^0-9]/g,"")).replace(/\B(?=(\d{3})+(?!\d))/g,",")}),[isReverseSymb,numberType,buildRegex,allowNegative]),parseNumber=react.useCallback((value=>{let isOutOfRange,number,stringValue;return value?(isReverseSymb?(stringValue=value.replace(/[,.]/g,(m=>"."===m?",":".")),stringValue=stringValue.replace(/,/g,"")):stringValue=value.replace(/,/g,""),numberType===config_enum.Hv.DECIMAL?(number=parseFloat(stringValue),isOutOfRange="number"==typeof max&&number>max||"number"==typeof min&&number<min,[number,isOutOfRange]):(number=parseInt(stringValue),isOutOfRange="number"==typeof max&&number>max||"number"==typeof min&&number<min,[number,isOutOfRange])):[void 0,!1]}),[numberType,isReverseSymb,min,max]),handleChange=react.useCallback((event=>{const{selectionEnd,selectionStart}=event.target,stringValue=formatString(event.target.value),[numberValue,isOutOfRange]=parseNumber(stringValue);if(!isOutOfRange){if("function"==typeof onChange){/[-,.]/g.test(Array.from(stringValue)[0])&&1===stringValue.length||/^(-0.?)/g.test(stringValue)&&stringValue.length<=3||onChange(numberValue)}setInternalValue(stringValue)}event.target.value.length<stringValue.length?(cursorPosition.current.selectionStart=selectionStart+1,cursorPosition.current.selectionEnd=selectionEnd+1):(cursorPosition.current.selectionStart=selectionStart,cursorPosition.current.selectionEnd=selectionEnd)}),[formatString,parseNumber,onChange]),handleClearInput=react.useCallback((()=>{setInternalValue(""),inputRef.current.focus(),"function"!=typeof onChange?"function"!=typeof onBlur?"function"!=typeof onEnter||onEnter(void 0):onBlur(void 0):onChange(void 0)}),[onBlur,onChange,onEnter]),handleKeyPress=react.useCallback((event=>{"Enter"===event.key&&"function"==typeof onEnter&&onEnter(parseNumber(event.currentTarget.value)[0])}),[onEnter,parseNumber]),handleBlur=react.useCallback((event=>{"function"==typeof onBlur&&onBlur(parseNumber(event.currentTarget.value)[0])}),[onBlur,parseNumber]);return react.useEffect((()=>{if(null!=value){let stringValue=""+value;isReverseSymb&&(stringValue=stringValue.replace(/\./g,",")),setInternalValue(formatString(stringValue))}else setInternalValue("");inputRef.current.selectionStart=cursorPosition.current.selectionStart,inputRef.current.selectionEnd=cursorPosition.current.selectionEnd}),[value,formatString,isReverseSymb]),(0,jsx_runtime.jsxs)("div",{className:classnames_default()("input-number__wrapper",className),children:[(0,jsx_runtime.jsxs)("div",{className:"input-number__label m-b--2xs p-l--3xs",children:[type!==config_enum.qi.FLOAT_LABEL&&label&&(0,jsx_runtime.jsxs)("label",{className:classnames_default()("component__title",{"component__title--disabled":disabled}),children:[label,isRequired&&(0,jsx_runtime.jsx)("span",{className:"text-danger",children:" *"})]}),action&&(0,jsx_runtime.jsx)("span",{className:"m-l--3xs body-text--md color-link",style:{cursor:"pointer"},onClick:action.action,children:action.name})]}),(0,jsx_runtime.jsxs)("div",{className:classnames_default()("component__input input-number__container",{"input-number__container--sm":isSmall,"input-number__container--white":"white"===bgColor,"p--2xs":isSmall,"p--xs":!isSmall,"input-number--material":type===config_enum.qi.MATERIAL,"input-number--bordered":type===config_enum.qi.BORDERED,"input-number--disabled ":disabled,"input-number--float":type===config_enum.qi.FLOAT_LABEL}),onClick:()=>{inputRef.current.focus()},children:[prefix&&(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"string"==typeof prefix?(0,jsx_runtime.jsx)("span",{className:"p-r--2xs input-text__string",children:prefix}):(0,jsx_runtime.jsx)("div",{className:"m-r--xs input-number__icon",children:prefix})}),(0,jsx_runtime.jsx)("input",{type:"text",value:internalValue,onChange:handleChange,onKeyDown:handleKeyPress,onBlur:handleBlur,placeholder:type===config_enum.qi.FLOAT_LABEL&&label?" ":placeHolder,ref:inputRef,disabled,className:classnames_default()("component__input",{"disabled-field":disabled}),readOnly}),type===config_enum.qi.FLOAT_LABEL&&label&&(0,jsx_runtime.jsxs)("label",{className:classnames_default()("component__title",{"component__title--normal":!prefix,"component__title--prefix":prefix,"component__title--sm":isSmall}),children:[label,isRequired&&(0,jsx_runtime.jsx)("span",{className:"text-danger",children:" *"})]}),internalValue&&!disabled&&!readOnly&&(0,jsx_runtime.jsx)("div",{className:classnames_default()("input-icon__clear","m-l--2xs"),children:(0,jsx_runtime.jsx)("img",{src:icons_close,alt:"",onClick:handleClearInput})}),suffix&&(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"string"==typeof suffix?(0,jsx_runtime.jsx)("span",{className:"body-text--md m-l--2xs input-text__string",children:suffix}):(0,jsx_runtime.jsx)("div",{className:"m-l--2xs input-text__icon",children:suffix})})]})]})}InputNumber_InputNumber_InputNumber.displayName="InputNumber",InputNumber_InputNumber_InputNumber.defaultProps={label:"",type:config_enum.qi.BORDERED,isSmall:!0,isRequired:!1,allowNegative:!1,isReverseSymb:!1,numberType:config_enum.Hv.LONG,decimalDigit:4,disabled:!1,readOnly:!1,prefix:"",bgColor:"white"};const Input_InputNumber_InputNumber=InputNumber_InputNumber_InputNumber;try{InputNumber_InputNumber_InputNumber.displayName="InputNumber",InputNumber_InputNumber_InputNumber.__docgenInfo={description:"",displayName:"InputNumber",props:{label:{defaultValue:{value:""},description:"Label for current field",name:"label",required:!1,type:{name:"string"}},isRequired:{defaultValue:{value:"false"},description:"Show symbol * as required field",name:"isRequired",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"BORDER_TYPE.BORDERED"},description:"Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL",name:"type",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"}]}},value:{defaultValue:null,description:"User-filled value",name:"value",required:!1,type:{name:"number"}},prefix:{defaultValue:{value:""},description:"Prefix for filter value",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"Suffix for filter value",name:"suffix",required:!1,type:{name:"ReactNode"}},allowNegative:{defaultValue:{value:"false"},description:"Allow value to be negative or not",name:"allowNegative",required:!1,type:{name:"boolean"}},numberType:{defaultValue:{value:"NUMBER_TYPE.LONG"},description:"Provide an option set decimal number type for value",name:"numberType",required:!1,type:{name:"enum",value:[{value:'"DECIMAL"'},{value:'"LONG"'}]}},isReverseSymb:{defaultValue:{value:"false"},description:"Reverse symbol “.” and “,”",name:"isReverseSymb",required:!1,type:{name:"boolean"}},decimalDigit:{defaultValue:{value:"4"},description:"Provide a length of number behind the point (character)",name:"decimalDigit",required:!1,type:{name:"number"}},placeHolder:{defaultValue:null,description:"Placeholder of the component",name:"placeHolder",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Not allow to handle change value",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"Read only field",name:"readOnly",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Use to custom style the component",name:"className",required:!1,type:{name:"string"}},min:{defaultValue:null,description:"Min of the value number",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"Max of the value number",name:"max",required:!1,type:{name:"number"}},action:{defaultValue:null,description:"Provide a custom action (onClick) to the component",name:"action",required:!1,type:{name:"InputNumberAction"}},isSmall:{defaultValue:{value:"true"},description:"Control the size of the component",name:"isSmall",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Handle the change value of the component",name:"onChange",required:!1,type:{name:"(T: number) => void"}},onEnter:{defaultValue:null,description:"Handle onEnter action",name:"onEnter",required:!1,type:{name:"(T: number) => void"}},onBlur:{defaultValue:null,description:"Handle onBlur action",name:"onBlur",required:!1,type:{name:"(T: number) => void"}},bgColor:{defaultValue:{value:"white"},description:'Custom background color for component: "white" || "gray"',name:"bgColor",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"gray"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/InputNumber/InputNumber.tsx#InputNumber"]={docgenInfo:InputNumber_InputNumber_InputNumber.__docgenInfo,name:"InputNumber",path:"src/components/Input/InputNumber/InputNumber.tsx#InputNumber"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Input/InputNumber/InputNumber.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".input-number__wrapper{display:flex;flex-direction:column;width:100%}.input-number__wrapper .input-number__label{width:100%;display:flex;justify-content:space-between}.input-number__wrapper .input-number__label label{font-size:14px;white-space:nowrap;color:var(--palette-base-neutral-10)}.input-number__wrapper .input-number__container{position:relative;display:flex;flex-direction:row;justify-content:center;align-items:center;width:100%;outline:1px solid var(--palette-base-neutral-4);background-color:#f4f4f4;height:40px}.input-number__wrapper .input-number__container.input-number--bordered{border-radius:2px}.input-number__wrapper .input-number__container.input-number__container--sm{height:32px !important}.input-number__wrapper .input-number__container.input-number__container--white{background-color:var(--color-white)}.input-number__wrapper .input-number__container:hover{outline-color:var(--palette-base-neutral-4)}.input-number__wrapper .input-number__container:focus-within{outline:1px solid var(--color-primary);box-shadow:0px 0px 0px 4px #abbdfd}.input-number__wrapper .input-number__container.input-number--disabled{outline-color:var(--palette-base-neutral-4);background-color:var(--palette-base-neutral-3)}.input-number__wrapper .input-number__container.input-number--disabled span{color:var(--palette-base-neutral-6)}.input-number__wrapper .input-number__container.input-number--disabled input{color:var(--palette-base-neutral-6) !important}.input-number__wrapper .input-number__container.input-number--disabled:hover{cursor:not-allowed}.input-number__wrapper .input-number__container.input-number--float:hover:not(.input-number--disabled):not(:focus-within){outline-color:var(--palette-gray-100)}.input-number__wrapper .input-number__container.input-number--float:focus-within{box-shadow:none;outline:2px solid var(--color-primary)}.input-number__wrapper .input-number__container.input-number--float:focus-within .component__title{color:var(--color-primary)}.input-number__wrapper .input-number__container.input-number--material{outline:none;border-bottom-left-radius:0;border-bottom-right-radius:0;box-shadow:inset 0px -1px 0px var(--palette-gray-50);margin-bottom:-1px}.input-number__wrapper .input-number__container.input-number--material:hover{background-color:var(--palette-grayHover-10)}.input-number__wrapper .input-number__container.input-number--material:hover .component__input{background-color:var(--palette-grayHover-10)}.input-number__wrapper .input-number__container.input-number--material:hover .component__input.disabled-field{background-color:var(--palette-gray-10)}.input-number__wrapper .input-number__container.input-number--material:focus-within{outline:2px solid var(--color-primary);box-shadow:none}.input-number__wrapper .input-number__container.input-number--material.input-number--disabled{box-shadow:none;background-color:var(--palette-gray-10)}.input-number__wrapper .input-number__container.input-number--material.input-number--float:focus-within{box-shadow:none;outline-width:2px}.input-number__wrapper .input-number__container .component__title{position:absolute;color:var(--palette-gray-60);transition:all .1s ease-out;padding:0 4px;z-index:200;top:9px;font-size:14px}.input-number__wrapper .input-number__container .component__title.component__title--normal{left:8px}.input-number__wrapper .input-number__container .component__title.component__title--sm{top:5px}.input-number__wrapper .input-number__container .component__title.component__title--prefix{left:41px}.input-number__wrapper .input-number__container .input-number__icon{display:flex;align-items:center;color:var(--palette-base-neutral-6)}.input-number__wrapper .input-number__container .input-text__string{white-space:nowrap;color:var(--palette-base-neutral-6)}.input-number__wrapper .input-number__container span{font-size:14px;line-height:1rem;color:var(--palette-base-neutral-10)}.input-number__wrapper .input-number__container input{font-family:inherit;padding:0;outline:none;border:none;width:100%;border-radius:4px;font-size:14px;line-height:1rem;background-color:rgba(0,0,0,0)}.input-number__wrapper .input-number__container input::placeholder{color:var(--palette-base-neutral-6)}.input-number__wrapper .input-number__container input:disabled::placeholder{color:var(--palette-base-neutral-6)}.input-number__wrapper .input-number__container input:disabled:hover{cursor:not-allowed}.input-number__wrapper .input-number__container input:not(:placeholder-shown)+.component__title{top:0;left:8px;background-color:var(--color-white);transform:translateY(-50%) scale(0.9)}.input-number__wrapper .input-number__container input:focus+.component__title{top:0;left:8px;background-color:var(--color-white);transform:translateY(-50%) scale(0.9)}.input-number__wrapper .input-number__container input:focus::placeholder{color:rgba(0,0,0,0)}.input-number__wrapper .input-number__container .input-icon__clear{display:flex;justify-content:center;align-items:center}.input-number__wrapper .input-number__container .input-icon__clear svg{color:var(--palette-base-neutral-6)}.input-number__wrapper .input-number__container .input-icon__clear svg:hover{cursor:pointer;color:var(--palette-base-neutral-6)}.form-item__container.form-item__container--error .form-item__content .component__input.input-number--material{outline:1px solid;box-shadow:none !important}.form-item__container.form-item__container--error .form-item__content .component__input.input-number--material:focus-within{outline-color:var(--color-primary) !important;outline-width:2px}","",{version:3,sources:["webpack://./src/components/Input/InputNumber/InputNumber.scss"],names:[],mappings:"AACA,uBACE,YAAA,CACA,qBAAA,CACA,UAAA,CACA,4CACE,UAAA,CACA,YAAA,CACA,6BAAA,CAMA,kDACE,cAAA,CACA,kBAAA,CACA,oCAAA,CAIJ,gDACE,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,kBAAA,CACA,UAAA,CACA,+CAAA,CACA,wBAAA,CACA,WAAA,CACA,uEACE,iBAAA,CAEF,4EACE,sBAAA,CAGF,+EACE,mCAAA,CAGF,sDACE,2CAAA,CAGF,6DACE,sCAAA,CACA,kCAAA,CAGF,uEACE,2CAAA,CACA,8CAAA,CAEA,4EACE,mCAAA,CAGF,6EACE,8CAAA,CAGF,6EACE,kBAAA,CAKF,0HACE,qCAAA,CAGF,iFACE,eAAA,CACA,sCAAA,CACA,mGACE,0BAAA,CAKN,uEACE,YAAA,CACA,2BAAA,CACA,4BAAA,CACA,oDAAA,CACA,kBAAA,CAEA,6EACE,4CAAA,CACA,+FACE,4CAAA,CAEF,8GACE,uCAAA,CAIJ,oFACE,sCAAA,CACA,eAAA,CAGF,8FACE,eAAA,CACA,uCAAA,CAGF,wGACE,eAAA,CACA,iBAAA,CAIJ,kEACE,iBAAA,CACA,4BAAA,CACA,2BAAA,CACA,aAAA,CACA,WAAA,CACA,OAAA,CACA,cAAA,CAEA,2FACE,QAAA,CAEF,uFACE,OAAA,CAEF,2FACE,SAAA,CAIJ,oEACE,YAAA,CACA,kBAAA,CACA,mCAAA,CAGF,oEACE,kBAAA,CACA,mCAAA,CAGF,qDACE,cAAA,CACA,gBAAA,CACA,oCAAA,CAGF,sDACE,mBAAA,CACA,SAAA,CACA,YAAA,CACA,WAAA,CACA,UAAA,CACA,iBAAA,CACA,cAAA,CACA,gBAAA,CACA,8BAAA,CAEA,mEACE,mCAAA,CAIA,4EACE,mCAAA,CAEF,qEACE,kBAAA,CAIJ,gGACE,KAAA,CACA,QAAA,CACA,mCAAA,CACA,qCAAA,CAGF,8EACE,KAAA,CACA,QAAA,CACA,mCAAA,CACA,qCAAA,CAGF,yEACE,mBAAA,CAIJ,mEACE,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,uEACE,mCAAA,CACA,6EACE,cAAA,CACA,mCAAA,CAUF,+GACE,iBAAA,CACA,0BAAA,CACA,4HACE,6CAAA,CACA,iBAAA",sourcesContent:["/* Style for InputNumber.tsx */\r\n.input-number__wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  .input-number__label {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n\r\n    // .component__title--disabled {\r\n    //   color: var(--palette-gray-40);\r\n    // }\r\n\r\n    label {\r\n      font-size: 14px;\r\n      white-space: nowrap;\r\n      color: var(--palette-base-neutral-10);\r\n    }\r\n  }\r\n\r\n  .input-number__container {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    outline: 1px solid var(--palette-base-neutral-4);\r\n    background-color: #f4f4f4;\r\n    height: 40px;\r\n    &.input-number--bordered {\r\n      border-radius: 2px;\r\n    }\r\n    &.input-number__container--sm {\r\n      height: 32px !important;\r\n    }\r\n\r\n    &.input-number__container--white {\r\n      background-color: var(--color-white);\r\n    }\r\n\r\n    &:hover {\r\n      outline-color: var(--palette-base-neutral-4);\r\n    }\r\n\r\n    &:focus-within {\r\n      outline: 1px solid var(--color-primary);\r\n      box-shadow: 0px 0px 0px 4px (#ABBDFD);\r\n    }\r\n\r\n    &.input-number--disabled {\r\n      outline-color: var(--palette-base-neutral-4);\r\n      background-color: var(--palette-base-neutral-3);\r\n\r\n      span {\r\n        color: var(--palette-base-neutral-6);\r\n      }\r\n\r\n      input {\r\n        color: var(--palette-base-neutral-6) !important;\r\n      }\r\n\r\n      &:hover {\r\n        cursor: not-allowed;\r\n      }\r\n    }\r\n\r\n    &.input-number--float {\r\n      &:hover:not(.input-number--disabled):not(:focus-within) {\r\n        outline-color: var(--palette-gray-100);\r\n      }\r\n\r\n      &:focus-within {\r\n        box-shadow: none;\r\n        outline: 2px solid var(--color-primary);\r\n        .component__title {\r\n          color: var(--color-primary);\r\n        }\r\n      }\r\n    }\r\n\r\n    &.input-number--material {\r\n      outline: none;\r\n      border-bottom-left-radius: 0;\r\n      border-bottom-right-radius: 0;\r\n      box-shadow: inset 0px -1px 0px var(--palette-gray-50);\r\n      margin-bottom: -1px;\r\n\r\n      &:hover {\r\n        background-color: var(--palette-grayHover-10);\r\n        .component__input {\r\n          background-color: var(--palette-grayHover-10);\r\n        }\r\n        .component__input.disabled-field {\r\n          background-color: var(--palette-gray-10);\r\n        }\r\n      }\r\n\r\n      &:focus-within {\r\n        outline: 2px solid var(--color-primary);\r\n        box-shadow: none;\r\n      }\r\n\r\n      &.input-number--disabled {\r\n        box-shadow: none;\r\n        background-color: var(--palette-gray-10);\r\n      }\r\n\r\n      &.input-number--float:focus-within {\r\n        box-shadow: none;\r\n        outline-width: 2px;\r\n      }\r\n    }\r\n\r\n    .component__title {\r\n      position: absolute;\r\n      color: var(--palette-gray-60);\r\n      transition: all 0.1s ease-out;\r\n      padding: 0 4px;\r\n      z-index: 200;\r\n      top: 9px;\r\n      font-size: 14px;\r\n\r\n      &.component__title--normal {\r\n        left: 8px;\r\n      }\r\n      &.component__title--sm {\r\n        top: 5px;\r\n      }\r\n      &.component__title--prefix {\r\n        left: 41px;\r\n      }\r\n    }\r\n\r\n    .input-number__icon {\r\n      display: flex;\r\n      align-items: center;\r\n      color: var(--palette-base-neutral-6);\r\n    }\r\n\r\n    .input-text__string {\r\n      white-space: nowrap;\r\n      color: var(--palette-base-neutral-6);\r\n    }\r\n\r\n    span {\r\n      font-size: 14px;\r\n      line-height: 1rem;\r\n      color: var(--palette-base-neutral-10);\r\n    }\r\n\r\n    input {\r\n      font-family: inherit;\r\n      padding: 0;\r\n      outline: none;\r\n      border: none;\r\n      width: 100%;\r\n      border-radius: 4px;\r\n      font-size: 14px;\r\n      line-height: 1rem;\r\n      background-color: transparent;\r\n\r\n      &::placeholder {\r\n        color: var(--palette-base-neutral-6);\r\n      }\r\n\r\n      &:disabled {\r\n        &::placeholder {\r\n          color: var(--palette-base-neutral-6);\r\n        }\r\n        &:hover {\r\n          cursor: not-allowed;\r\n        }\r\n      }\r\n\r\n      &:not(:placeholder-shown) + .component__title {\r\n        top: 0;\r\n        left: 8px;\r\n        background-color: var(--color-white);\r\n        transform: translateY(-50%) scale(0.9);\r\n      }\r\n\r\n      &:focus + .component__title {\r\n        top: 0;\r\n        left: 8px;\r\n        background-color: var(--color-white);\r\n        transform: translateY(-50%) scale(0.9);\r\n      }\r\n\r\n      &:focus::placeholder {\r\n        color: transparent;\r\n      }\r\n    }\r\n\r\n    .input-icon__clear {\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      svg {\r\n        color: var(--palette-base-neutral-6);\r\n        &:hover {\r\n          cursor: pointer;\r\n          color: var(--palette-base-neutral-6);\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n.form-item__container {\r\n  &.form-item__container--error {\r\n    .form-item__content {\r\n      .component__input {\r\n        &.input-number--material {\r\n          outline: 1px solid;\r\n          box-shadow: none !important;\r\n          &:focus-within {\r\n            outline-color: var(--color-primary) !important;\r\n            outline-width: 2px;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);