/*! For license information please see components-Input-TextArea-TextArea-stories.2d6fb5ea.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_3layer_ui_components=self.webpackChunkreact_3layer_ui_components||[]).push([[5482],{"./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.XA,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.zE,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Sw},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise(((resolve,reject)=>{__webpack_require__.e(1294).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.d)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.kQ,{context,docsParameter}))),element))).then(resolve)}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.H)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{DZ:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.DZ,Pd:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Pd,Tn:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Tn,VY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.VY,h1:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.h1,hE:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.hE,kL:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.kL,om:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.om,uY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.uY});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-R4NKYYJA.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/FormItem/FormItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>components_FormItem_FormItem});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),FormItem=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/FormItem/FormItem.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(FormItem.A,options);FormItem.A&&FormItem.A.locals&&FormItem.A.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function FormItem_FormItem_FormItem(props){const{validateStatus,message,validateObject,children,placeRight}=props,{validateStatusValue,messageValue}=react.useMemo((()=>validateObject?{validateStatusValue:validateObject.validateStatus,messageValue:validateObject.message}:{validateStatusValue:validateStatus,messageValue:message}),[message,validateObject,validateStatus]);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{className:classnames_default()("form-item__container",{[`form-item__container--${validateStatusValue}`]:validateStatusValue}),children:[(0,jsx_runtime.jsx)("div",{className:classnames_default()("form-item__content",{"justify-content-end":placeRight}),children}),(0,jsx_runtime.jsx)("div",{className:"form-item__message m-t--3xs",children:messageValue})]})})}FormItem_FormItem_FormItem.defaultProps={placeRight:!1};const components_FormItem_FormItem=FormItem_FormItem_FormItem;try{FormItem_FormItem_FormItem.displayName="FormItem",FormItem_FormItem_FormItem.__docgenInfo={description:"",displayName:"FormItem",props:{validateStatus:{defaultValue:null,description:"Show the status validation",name:"validateStatus",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"validating"'}]}},message:{defaultValue:null,description:"The validated message",name:"message",required:!1,type:{name:"ReactNode"}},placeRight:{defaultValue:{value:"false"},description:"Place content to the right",name:"placeRight",required:!1,type:{name:"boolean"}},validateObject:{defaultValue:null,description:"Pass object validated to display state of  children field",name:"validateObject",required:!1,type:{name:"ValidateObject"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FormItem/FormItem.tsx#FormItem"]={docgenInfo:FormItem_FormItem_FormItem.__docgenInfo,name:"FormItem",path:"src/components/FormItem/FormItem.tsx#FormItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/config/enum.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hv:()=>NUMBER_TYPE,Rs:()=>ValidateStatus,Xx:()=>NUMBER_BUTTON,fD:()=>ADVANCE_DATE_RANGE_TYPE,gb:()=>ActionFilterEnum,os:()=>TAG_STATUS,qi:()=>BORDER_TYPE,sE:()=>MODAL_SIZE,yV:()=>UPLOADTYPE_IMAGE});let BORDER_TYPE=function(BORDER_TYPE){return BORDER_TYPE[BORDER_TYPE.MATERIAL=0]="MATERIAL",BORDER_TYPE[BORDER_TYPE.BORDERED=1]="BORDERED",BORDER_TYPE[BORDER_TYPE.FLOAT_LABEL=2]="FLOAT_LABEL",BORDER_TYPE[BORDER_TYPE.NOT_BORDERED=3]="NOT_BORDERED",BORDER_TYPE}({}),ValidateStatus=function(ValidateStatus){return ValidateStatus.success="success",ValidateStatus.warning="warning",ValidateStatus.error="error",ValidateStatus.validating="validating",ValidateStatus}({}),NUMBER_BUTTON=function(NUMBER_BUTTON){return NUMBER_BUTTON.THREE="three",NUMBER_BUTTON.TWO="two",NUMBER_BUTTON}({}),ADVANCE_DATE_RANGE_TYPE=function(ADVANCE_DATE_RANGE_TYPE){return ADVANCE_DATE_RANGE_TYPE[ADVANCE_DATE_RANGE_TYPE.SHORT=0]="SHORT",ADVANCE_DATE_RANGE_TYPE[ADVANCE_DATE_RANGE_TYPE.INPUT=1]="INPUT",ADVANCE_DATE_RANGE_TYPE}({}),ActionFilterEnum=function(ActionFilterEnum){return ActionFilterEnum[ActionFilterEnum.ChangeAllField=0]="ChangeAllField",ActionFilterEnum[ActionFilterEnum.ChangeOneField=1]="ChangeOneField",ActionFilterEnum[ActionFilterEnum.ChangeSkipTake=2]="ChangeSkipTake",ActionFilterEnum[ActionFilterEnum.ChangeOrderType=3]="ChangeOrderType",ActionFilterEnum}({}),UPLOADTYPE_IMAGE=function(UPLOADTYPE_IMAGE){return UPLOADTYPE_IMAGE[UPLOADTYPE_IMAGE.IMAGE=0]="IMAGE",UPLOADTYPE_IMAGE[UPLOADTYPE_IMAGE.AVATAR=1]="AVATAR",UPLOADTYPE_IMAGE}({}),MODAL_SIZE=function(MODAL_SIZE){return MODAL_SIZE[MODAL_SIZE.SIZE_400=400]="SIZE_400",MODAL_SIZE[MODAL_SIZE.SIZE_600=600]="SIZE_600",MODAL_SIZE[MODAL_SIZE.SIZE_800=800]="SIZE_800",MODAL_SIZE[MODAL_SIZE.SIZE_1000=1e3]="SIZE_1000",MODAL_SIZE}({}),NUMBER_TYPE=function(NUMBER_TYPE){return NUMBER_TYPE.DECIMAL="DECIMAL",NUMBER_TYPE.LONG="LONG",NUMBER_TYPE}({}),TAG_STATUS=function(TAG_STATUS){return TAG_STATUS.SUCCESS="SUCCESS",TAG_STATUS.ERROR="ERROR",TAG_STATUS.INFO="INFO",TAG_STATUS.IN_PROGRESS="IN_PROGRESS",TAG_STATUS.DEFAULT="DEFAULT",TAG_STATUS}({})},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/FormItem/FormItem.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".form-item__container{position:relative;width:100%}.form-item__container .form-item__content{display:flex;flex-direction:row;width:100%}.form-item__container .form-item__content .form-item__item{width:100%}.form-item__container .form-item__message{line-height:16px;font-size:12px;color:#8c9093}.form-item__container .form-item__icon{height:auto;width:1.5rem;font-size:1.2rem;color:var(--color-white);display:flex;align-items:center;align-content:center;justify-content:center;margin-left:2px}.form-item__container.form-item__container--error .component__title{color:var(--palette-gray-70) !important}.form-item__container.form-item__container--error .form-item__content .form-item__icon,.form-item__container.form-item__container--error .form-item__content i.input-icon{color:#8c9093}.form-item__container.form-item__container--error .form-item__content .component__input,.form-item__container.form-item__container--error .form-item__content textarea,.form-item__container.form-item__container--error .form-item__content .input-tag__container,.form-item__container.form-item__container--error .form-item__content .ant-picker{background-color:var(--color-critical-blur);outline-color:var(--color-critical) !important;border-color:var(--color-critical) !important}.form-item__container.form-item__container--error .form-item__message{color:var(--color-critical) !important}.form-item__container.form-item__container--warning .component__title{color:var(--color-warning-high) !important}.form-item__container.form-item__container--warning .form-item__content .form-item__icon,.form-item__container.form-item__container--warning .form-item__content i.input-icon{color:var(--color-warning-high) !important}.form-item__container.form-item__container--warning .form-item__content .component__input,.form-item__container.form-item__container--warning .form-item__content textarea,.form-item__container.form-item__container--warning .form-item__content .input-tag__container,.form-item__container.form-item__container--warning .form-item__content .ant-picker{outline-color:var(--color-warning-high) !important;border-color:var(--color-warning-high) !important}.form-item__container.form-item__container--warning .form-item__message{color:var(--color-warning-high) !important}.form-item__container.form-item__container--success .component__title{color:var(--color-success-high) !important}.form-item__container.form-item__container--success .form-item__content .form-item__icon,.form-item__container.form-item__container--success .form-item__content i.input-icon{color:var(--color-success-high) !important}.form-item__container.form-item__container--success .form-item__content .component__input,.form-item__container.form-item__container--success .form-item__content textarea,.form-item__container.form-item__container--success .form-item__content .input-tag__container,.form-item__container.form-item__container--success .form-item__content .ant-picker{outline-color:var(--color-success-high) !important;border-color:var(--color-success-high) !important}.form-item__container.form-item__container--success .form-item__message{color:var(--color-success-high) !important}","",{version:3,sources:["webpack://./src/components/FormItem/FormItem.scss"],names:[],mappings:"AACA,sBACE,iBAAA,CACA,UAAA,CAEA,0CACE,YAAA,CACA,kBAAA,CACA,UAAA,CACA,2DACE,UAAA,CAIJ,0CACE,gBAAA,CACA,cAAA,CACA,aAAA,CAGF,uCACE,WAAA,CACA,YAAA,CACA,gBAAA,CACA,wBAAA,CACA,YAAA,CACA,kBAAA,CACA,oBAAA,CACA,sBAAA,CACA,eAAA,CAIA,oEACE,uCAAA,CAGA,0KAEE,aAAA,CAGF,qVAIE,2CAAA,CACA,8CAAA,CACA,6CAAA,CAIJ,sEACE,sCAAA,CAKF,sEACE,0CAAA,CAGA,8KAEE,0CAAA,CAGF,6VAIE,kDAAA,CACA,iDAAA,CAIJ,wEACE,0CAAA,CAKF,sEACE,0CAAA,CAGA,8KAEE,0CAAA,CAGF,6VAIE,kDAAA,CACA,iDAAA,CAIJ,wEACE,0CAAA",sourcesContent:["/* Style for FormValidation.tsx */\r\n.form-item__container {\r\n  position: relative;\r\n  width: 100%;\r\n\r\n  .form-item__content {\r\n    display: flex;\r\n    flex-direction: row;\r\n    width: 100%;\r\n    .form-item__item {\r\n      width: 100%;\r\n    }\r\n  }\r\n\r\n  .form-item__message {\r\n    line-height: 16px;\r\n    font-size: 12px;\r\n    color: #8C9093;\r\n  }\r\n\r\n  .form-item__icon {\r\n    height: auto;\r\n    width: 1.5rem;\r\n    font-size: 1.2rem;\r\n    color: var(--color-white);\r\n    display: flex;\r\n    align-items: center;\r\n    align-content: center;\r\n    justify-content: center;\r\n    margin-left: 2px;\r\n  }\r\n\r\n  &.form-item__container--error {\r\n    .component__title {\r\n      color: var(--palette-gray-70) !important;\r\n    }\r\n    .form-item__content {\r\n      .form-item__icon,\r\n      i.input-icon {\r\n        color: #8C9093;\r\n      }\r\n\r\n      .component__input,\r\n      textarea,\r\n      .input-tag__container,\r\n      .ant-picker {\r\n        background-color: var(--color-critical-blur);\r\n        outline-color: var(--color-critical) !important;\r\n        border-color: var(--color-critical) !important;\r\n      }\r\n    }\r\n\r\n    .form-item__message {\r\n      color: var(--color-critical) !important;\r\n    }\r\n  }\r\n\r\n  &.form-item__container--warning {\r\n    .component__title {\r\n      color: var(--color-warning-high) !important;\r\n    }\r\n    .form-item__content {\r\n      .form-item__icon,\r\n      i.input-icon {\r\n        color: var(--color-warning-high) !important;\r\n      }\r\n\r\n      .component__input,\r\n      textarea,\r\n      .input-tag__container,\r\n      .ant-picker {\r\n        outline-color: var(--color-warning-high) !important;\r\n        border-color: var(--color-warning-high) !important;\r\n      }\r\n    }\r\n\r\n    .form-item__message {\r\n      color: var(--color-warning-high) !important;\r\n    }\r\n  }\r\n\r\n  &.form-item__container--success {\r\n    .component__title {\r\n      color: var(--color-success-high) !important;\r\n    }\r\n    .form-item__content {\r\n      .form-item__icon,\r\n      i.input-icon {\r\n        color: var(--color-success-high) !important;\r\n      }\r\n\r\n      .component__input,\r\n      textarea,\r\n      .input-tag__container,\r\n      .ant-picker {\r\n        outline-color: var(--color-success-high) !important;\r\n        border-color: var(--color-success-high) !important;\r\n      }\r\n    }\r\n\r\n    .form-item__message {\r\n      color: var(--color-success-high) !important;\r\n    }\r\n  }\r\n}\r\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Input/TextArea/TextArea.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.text-area__wrapper{display:"flex";flex-direction:column;width:100%}.text-area__wrapper .text-area__label{width:100%;display:flex;justify-content:center}.text-area__wrapper .text-area__label label{font-size:14px;white-space:nowrap;color:var(--palette-base-neutral-10)}.text-area__wrapper .text-area__label .label__right{width:100%;display:flex;justify-content:flex-end;align-items:center}.text-area__wrapper .text-area__label .label__right span.input-text__count{color:var(--palette-base-blue-5)}.text-area__wrapper .text-area__container{position:relative;display:flex;flex-direction:column;justify-content:flex-end;align-items:end;width:inherit;outline:1px solid var(--palette-base-neutral-4);background-color:#f4f4f4;height:inherit;padding-right:10px}.text-area__wrapper .text-area__container .text-area__count{font-size:12px}.text-area__wrapper .text-area__container.text-area--bordered{border-radius:2px}.text-area__wrapper .text-area__container:hover:not(:focus-within){outline-color:var(--palette-base-neutral-4)}.text-area__wrapper .text-area__container:focus-within{outline:1.5px solid var(--color-primary);box-shadow:0px 0px 0px 4px #abbdfd}.text-area__wrapper .text-area__container.text-area--disabled{outline-color:var(--palette-base-neutral-4);background-color:var(--palette-base-neutral-3) !important}.text-area__wrapper .text-area__container.text-area--float:hover:not(:focus-within){outline-color:var(--palette-gray-100)}.text-area__wrapper .text-area__container.text-area--float:focus-within{box-shadow:none;outline:2px solid var(--color-primary)}.text-area__wrapper .text-area__container.text-area--float:focus-within .component__title{color:var(--color-primary)}.text-area__wrapper .text-area__container.text-area--white{background-color:var(--color-white)}.text-area__wrapper .text-area__container.text-area--material{outline:none;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom:1px solid var(--palette-gray-50);margin-bottom:-1px}.text-area__wrapper .text-area__container.text-area--material:hover{background-color:var(--palette-grayHover-10)}.text-area__wrapper .text-area__container.text-area--material:hover .component__input{background-color:var(--palette-grayHover-10)}.text-area__wrapper .text-area__container.text-area--material:hover .component__input.disabled-field{background-color:var(--palette-grayHover-10)}.text-area__wrapper .text-area__container.text-area--material:focus-within{outline:2px solid var(--color-primary);box-shadow:none;border:none}.text-area__wrapper .text-area__container.text-area--material:focus-within .input-tag__icon{color:var(--palette-gray-60)}.text-area__wrapper .text-area__container.text-area--material.text-area--disabled{box-shadow:none;background-color:var(--palette-grayHover-10);border-bottom:none}.text-area__wrapper .text-area__container .component__title{position:absolute;color:var(--palette-gray-60);transition:all .1s ease-out;padding:0 4px;z-index:200;top:12px;font-size:14px;left:12px}.text-area__wrapper .text-area__container .component__title.component__title--sm{top:5px}.text-area__wrapper .text-area__container .text-area__icon{position:absolute;right:.5rem;top:30%}.text-area__wrapper .text-area__container .text-area__icon:hover{opacity:.7}.text-area__wrapper .text-area__container span{font-size:14px;line-height:1rem;color:var(--palette-gray-60)}.text-area__wrapper .text-area__container textarea{font-family:inherit;padding:0;outline:none;border:none;width:inherit !important;font-size:14px;line-height:1rem;background-color:rgba(0,0,0,0)}.text-area__wrapper .text-area__container textarea::placeholder{color:var(--palette-gray-60)}.text-area__wrapper .text-area__container textarea:disabled::placeholder{color:var(--palette-gray-40)}.text-area__wrapper .text-area__container textarea:not(:placeholder-shown)+.component__title{top:0;left:8px;background-color:var(--color-white);transform:translateY(-50%) scale(0.9)}.text-area__wrapper .text-area__container textarea:focus+.component__title{top:0;left:8px;background-color:var(--color-white);transform:translateY(-50%) scale(0.9)}.text-area__wrapper .text-area__container textarea:focus::placeholder{color:rgba(0,0,0,0)}.form-item__container--error .text-area--material{border:1px solid}',"",{version:3,sources:["webpack://./src/components/Input/TextArea/TextArea.scss"],names:[],mappings:"AACA,oBACE,cAAA,CACA,qBAAA,CACA,UAAA,CAEA,sCACE,UAAA,CACA,YAAA,CACA,sBAAA,CAEA,4CACE,cAAA,CACA,kBAAA,CACA,oCAAA,CAGF,oDACE,UAAA,CACA,YAAA,CACA,wBAAA,CACA,kBAAA,CAEA,2EACE,gCAAA,CAIN,0CACE,iBAAA,CACA,YAAA,CACA,qBAAA,CACA,wBAAA,CACA,eAAA,CACA,aAAA,CACA,+CAAA,CACA,wBAAA,CACA,cAAA,CACA,kBAAA,CAEA,4DACE,cAAA,CAGF,8DACE,iBAAA,CAGF,mEACE,2CAAA,CAGF,uDACE,wCAAA,CACA,kCAAA,CAGF,8DACE,2CAAA,CACA,yDAAA,CAIA,oFACE,qCAAA,CAGF,wEACE,eAAA,CACA,sCAAA,CACA,0FACE,0BAAA,CAKN,2DACE,mCAAA,CAGF,8DACE,YAAA,CACA,2BAAA,CACA,4BAAA,CACA,8CAAA,CACA,kBAAA,CAEA,oEACE,4CAAA,CACA,sFACE,4CAAA,CAEF,qGACE,4CAAA,CAIJ,2EACE,sCAAA,CACA,eAAA,CACA,WAAA,CACA,4FACE,4BAAA,CAIJ,kFACE,eAAA,CACA,4CAAA,CACA,kBAAA,CAIJ,4DACE,iBAAA,CACA,4BAAA,CACA,2BAAA,CACA,aAAA,CACA,WAAA,CACA,QAAA,CACA,cAAA,CACA,SAAA,CAEA,iFACE,OAAA,CAIJ,2DACE,iBAAA,CACA,WAAA,CACA,OAAA,CACA,iEACE,UAAA,CAIJ,+CACE,cAAA,CACA,gBAAA,CACA,4BAAA,CAGF,mDACE,mBAAA,CACA,SAAA,CACA,YAAA,CACA,WAAA,CACA,wBAAA,CACA,cAAA,CACA,gBAAA,CACA,8BAAA,CAEA,gEACE,4BAAA,CAGF,yEACE,4BAAA,CAGF,6FACE,KAAA,CACA,QAAA,CACA,mCAAA,CACA,qCAAA,CAGF,2EACE,KAAA,CACA,QAAA,CACA,mCAAA,CACA,qCAAA,CAGF,sEACE,mBAAA,CAON,kDACE,gBAAA",sourcesContent:['/* Style for TextArea.tsx */\r\n.text-area__wrapper {\r\n  display: "flex";\r\n  flex-direction: column;\r\n  width: 100%;\r\n\r\n  .text-area__label {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n\r\n    label {\r\n      font-size: 14px;\r\n      white-space: nowrap;\r\n      color: var(--palette-base-neutral-10);\r\n    }\r\n\r\n    .label__right {\r\n      width: 100%;\r\n      display: flex;\r\n      justify-content: flex-end;\r\n      align-items: center;\r\n\r\n      span.input-text__count {\r\n        color: var(--palette-base-blue-5);\r\n      }\r\n    }\r\n  }\r\n  .text-area__container {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-end;\r\n    align-items: end;\r\n    width: inherit;\r\n    outline: 1px solid var(--palette-base-neutral-4);\r\n    background-color: #f4f4f4;\r\n    height: inherit;\r\n    padding-right: 10px;\r\n\r\n    .text-area__count {\r\n      font-size: 12px;\r\n    }\r\n\r\n    &.text-area--bordered {\r\n      border-radius: 2px;\r\n    }\r\n\r\n    &:hover:not(:focus-within) {\r\n      outline-color: var(--palette-base-neutral-4);\r\n    }\r\n\r\n    &:focus-within {\r\n      outline: 1.5px solid var(--color-primary);\r\n      box-shadow: 0px 0px 0px 4px (#ABBDFD);\r\n    }\r\n\r\n    &.text-area--disabled {\r\n      outline-color: var(--palette-base-neutral-4);\r\n      background-color: var(--palette-base-neutral-3) !important;\r\n    }\r\n\r\n    &.text-area--float {\r\n      &:hover:not(:focus-within) {\r\n        outline-color: var(--palette-gray-100);\r\n      }\r\n\r\n      &:focus-within {\r\n        box-shadow: none;\r\n        outline: 2px solid var(--color-primary);\r\n        .component__title {\r\n          color: var(--color-primary);\r\n        }\r\n      }\r\n    }\r\n\r\n    &.text-area--white {\r\n      background-color: var(--color-white);\r\n    }\r\n\r\n    &.text-area--material {\r\n      outline: none;\r\n      border-bottom-left-radius: 0;\r\n      border-bottom-right-radius: 0;\r\n      border-bottom: 1px solid var(--palette-gray-50);\r\n      margin-bottom: -1px;\r\n\r\n      &:hover {\r\n        background-color: var(--palette-grayHover-10);\r\n        .component__input {\r\n          background-color: var(--palette-grayHover-10);\r\n        }\r\n        .component__input.disabled-field {\r\n          background-color: var(--palette-grayHover-10);\r\n        }\r\n      }\r\n\r\n      &:focus-within {\r\n        outline: 2px solid var(--color-primary);\r\n        box-shadow: none;\r\n        border: none;\r\n        .input-tag__icon {\r\n          color: var(--palette-gray-60);\r\n        }\r\n      }\r\n\r\n      &.text-area--disabled {\r\n        box-shadow: none;\r\n        background-color: var(--palette-grayHover-10);\r\n        border-bottom: none;\r\n      }\r\n    }\r\n\r\n    .component__title {\r\n      position: absolute;\r\n      color: var(--palette-gray-60);\r\n      transition: all 0.1s ease-out;\r\n      padding: 0 4px;\r\n      z-index: 200;\r\n      top: 12px;\r\n      font-size: 14px;\r\n      left: 12px;\r\n\r\n      &.component__title--sm {\r\n        top: 5px;\r\n      }\r\n    }\r\n\r\n    .text-area__icon {\r\n      position: absolute;\r\n      right: 0.5rem;\r\n      top: 30%;\r\n      &:hover {\r\n        opacity: 0.7;\r\n      }\r\n    }\r\n\r\n    span {\r\n      font-size: 14px;\r\n      line-height: 1rem;\r\n      color: var(--palette-gray-60);\r\n    }\r\n\r\n    textarea {\r\n      font-family: inherit;\r\n      padding: 0;\r\n      outline: none;\r\n      border: none;\r\n      width: inherit !important;\r\n      font-size: 14px;\r\n      line-height: 1rem;\r\n      background-color: transparent;\r\n\r\n      &::placeholder {\r\n        color: var(--palette-gray-60);\r\n      }\r\n\r\n      &:disabled::placeholder {\r\n        color: var(--palette-gray-40);\r\n      }\r\n\r\n      &:not(:placeholder-shown) + .component__title {\r\n        top: 0;\r\n        left: 8px;\r\n        background-color: var(--color-white);\r\n        transform: translateY(-50%) scale(0.9);\r\n      }\r\n\r\n      &:focus + .component__title {\r\n        top: 0;\r\n        left: 8px;\r\n        background-color: var(--color-white);\r\n        transform: translateY(-50%) scale(0.9);\r\n      }\r\n\r\n      &:focus::placeholder {\r\n        color: transparent;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.form-item__container--error {\r\n  .text-area--material {\r\n    border: 1px solid;\r\n  }\r\n}\r\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/Input/TextArea/TextArea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextArea_stories});var dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),react=__webpack_require__("./node_modules/react/index.js"),FormItem=__webpack_require__("./src/components/FormItem/FormItem.tsx"),config_enum=__webpack_require__("./src/config/enum.ts"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),TextArea=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Input/TextArea/TextArea.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(TextArea.A,options);TextArea.A&&TextArea.A.locals&&TextArea.A.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function TextArea_TextArea_TextArea(props){const{action,label,isRequired,type,showCount,maxLength,value,disabled,placeHolder,className,bgColor="white",onChange,onEnter,onBlur,rows=3,cols}=props,[internalValue,setInternalValue]=react.useState(""),inputRef=react.useRef(null),handleChange=react.useCallback((event=>{event.target.value.replaceAll("\n","")?.length<=maxLength&&(setInternalValue(event.target.value),"function"==typeof onChange&&onChange(event.currentTarget.value))}),[onChange,maxLength]),handleKeyPress=react.useCallback((event=>{"Enter"===event.key&&"function"==typeof onEnter&&onEnter(event.currentTarget.value)}),[onEnter]),handleBlur=react.useCallback((event=>{const value=event.target.value;"function"==typeof onBlur&&onBlur(value)}),[onBlur]);return react.useEffect((()=>{setInternalValue(value||"")}),[value]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{className:classnames_default()("text-area__wrapper",className),children:[(0,jsx_runtime.jsxs)("div",{className:"text-area__label m-b--2xs p-l--3xs",children:[type!==config_enum.qi.FLOAT_LABEL&&label&&(0,jsx_runtime.jsxs)("label",{className:"component__title",children:[label,isRequired&&(0,jsx_runtime.jsx)("span",{className:"text-danger",children:" *"})]}),(0,jsx_runtime.jsx)("div",{className:"label__right",children:action&&(0,jsx_runtime.jsx)("span",{className:"m-l--3xs body-text--md color-link",style:{cursor:"pointer"},onClick:action.action,children:action.name})})]}),(0,jsx_runtime.jsxs)("div",{className:classnames_default()("component__input text-area__container p-l--2xs p-b--3xs p-t--3xs",{"text-area--white":"white"===bgColor,"text-area--disabled ":disabled,"text-area--material":type===config_enum.qi.MATERIAL,"text-area--bordered":type===config_enum.qi.BORDERED,"text-area--float":type===config_enum.qi.FLOAT_LABEL}),onClick:()=>{inputRef.current.focus()},children:[(0,jsx_runtime.jsx)("textarea",{value:internalValue,onChange:handleChange,onKeyDown:()=>handleKeyPress,onBlur:handleBlur,placeholder:type===config_enum.qi.FLOAT_LABEL&&label?" ":placeHolder,ref:inputRef,disabled,className:classnames_default()("component__input",{"disabled-field":disabled}),rows,cols}),showCount&&maxLength>0&&(0,jsx_runtime.jsxs)("span",{className:"text-area__count p-l--xs p-t--3xs body-text--xs",children:[internalValue.length,"/",maxLength]}),type===config_enum.qi.FLOAT_LABEL&&label&&(0,jsx_runtime.jsxs)("label",{className:"component__title",children:[label,isRequired&&(0,jsx_runtime.jsx)("span",{className:"text-danger",children:" *"})]})]})]})})}TextArea_TextArea_TextArea.defaultProps={label:"",type:config_enum.qi.BORDERED,isRequired:!1,prefix:"",disabled:!1,className:"",countWord:!1,maxLength:2e3};const Input_TextArea_TextArea=TextArea_TextArea_TextArea;try{TextArea_TextArea_TextArea.displayName="TextArea",TextArea_TextArea_TextArea.__docgenInfo={description:"",displayName:"TextArea",props:{label:{defaultValue:{value:""},description:"Label for current field",name:"label",required:!1,type:{name:"string"}},type:{defaultValue:{value:"BORDER_TYPE.BORDERED"},description:"Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL",name:"type",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"}]}},isRequired:{defaultValue:{value:"false"},description:"Show symbol * as required field",name:"isRequired",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"User-filled value",name:"value",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Not allow to handle change value",name:"disabled",required:!1,type:{name:"boolean"}},placeHolder:{defaultValue:null,description:"Placeholder of the component",name:"placeHolder",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Use to custom style the component",name:"className",required:!1,type:{name:"string"}},showCount:{defaultValue:null,description:"Boolean to show the lenght of value user-filled",name:"showCount",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:{value:"2000"},description:"Set maximum length of value",name:"maxLength",required:!1,type:{name:"number"}},action:{defaultValue:null,description:"Provide a custom action (onClick) to the component",name:"action",required:!1,type:{name:"TextAreaAction"}},bgColor:{defaultValue:null,description:'Custom background color for component: "white" || "gray"',name:"bgColor",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"gray"'}]}},onChange:{defaultValue:null,description:"Handle the change value of the field",name:"onChange",required:!1,type:{name:"(T: string) => void"}},onEnter:{defaultValue:null,description:"Handle onEnter action",name:"onEnter",required:!1,type:{name:"(T: string) => void"}},onBlur:{defaultValue:null,description:"Handle onBlur action",name:"onBlur",required:!1,type:{name:"(T: string) => void"}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"number"}},cols:{defaultValue:null,description:"",name:"cols",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/TextArea/TextArea.tsx#TextArea"]={docgenInfo:TextArea_TextArea_TextArea.__docgenInfo,name:"TextArea",path:"src/components/Input/TextArea/TextArea.tsx#TextArea"})}catch(__react_docgen_typescript_loader_error){}const TextArea_stories={title:"Input/TextArea",component:Input_TextArea_TextArea,tags:["autodocs"],subcomponents:{FormItem:FormItem.A},parameters:{controls:{expanded:!0},docs:{page:()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.hE,{}),(0,jsx_runtime.jsx)(dist.Pd,{}),(0,jsx_runtime.jsx)(dist.VY,{}),(0,jsx_runtime.jsx)(dist.Tn,{}),(0,jsx_runtime.jsx)(dist.VY,{}),(0,jsx_runtime.jsx)(dist.uY,{story:dist.h1}),(0,jsx_runtime.jsx)(dist.om,{})]})}},args:{label:"First Name",placeHolder:"Enter text",type:1},argTypes:{label:{control:"text"},placeHolder:{control:"text"},type:{control:{type:"radio",options:[config_enum.qi.MATERIAL,config_enum.qi.BORDERED,config_enum.qi.FLOAT_LABEL]}}}},Template=args=>{const[inputValue,setInputVal]=react.useState(),handleChangeValue=react.useCallback((value=>{setInputVal(value)}),[]);return(0,jsx_runtime.jsx)("div",{style:{width:"500px",padding:"10px"},children:(0,jsx_runtime.jsx)("div",{style:{margin:"15px 0"},children:(0,jsx_runtime.jsx)(FormItem.A,{message:"Helper",children:(0,jsx_runtime.jsx)(Input_TextArea_TextArea,{...args,label:args.label,value:inputValue,onChange:handleChangeValue,showCount:!0})})})})};Template.displayName="Template";const Default=Template.bind({}),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  const [inputValue, setInputVal] = React.useState();\n  const handleChangeValue = React.useCallback(value => {\n    setInputVal(value);\n  }, []);\n  return /*#__PURE__*/_jsx("div", {\n    style: {\n      width: "500px",\n      padding: "10px"\n    },\n    children: /*#__PURE__*/_jsx("div", {\n      style: {\n        margin: "15px 0"\n      },\n      children: /*#__PURE__*/_jsx(FormItem, {\n        message: "Helper",\n        children: /*#__PURE__*/_jsx(TextArea, {\n          ...args,\n          label: args.label,\n          value: inputValue,\n          onChange: handleChangeValue,\n          showCount: true\n        })\n      })\n    })\n  });\n}',...Default.parameters?.docs?.source}}}}}]);