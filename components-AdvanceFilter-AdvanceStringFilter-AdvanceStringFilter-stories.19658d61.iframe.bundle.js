/*! For license information please see components-AdvanceFilter-AdvanceStringFilter-AdvanceStringFilter-stories.19658d61.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_components_design_system=self.webpackChunkreact_components_design_system||[]).push([[568],{"./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.XA,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.zE,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Sw},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise(((resolve,reject)=>{__webpack_require__.e(1294).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.d)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.kQ,{context,docsParameter}))),element))).then(resolve)}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.H)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{DZ:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.DZ,Pd:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Pd,Tn:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Tn,VY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.VY,h1:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.h1,hE:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.hE,kL:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.kL,om:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.om,uY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.uY});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-R4NKYYJA.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/config/enum.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hv:()=>NUMBER_TYPE,Rs:()=>ValidateStatus,Xx:()=>NUMBER_BUTTON,fD:()=>ADVANCE_DATE_RANGE_TYPE,gb:()=>ActionFilterEnum,os:()=>TAG_STATUS,qi:()=>BORDER_TYPE,sE:()=>MODAL_SIZE,yV:()=>UPLOADTYPE_IMAGE});let BORDER_TYPE=function(BORDER_TYPE){return BORDER_TYPE[BORDER_TYPE.MATERIAL=0]="MATERIAL",BORDER_TYPE[BORDER_TYPE.BORDERED=1]="BORDERED",BORDER_TYPE[BORDER_TYPE.FLOAT_LABEL=2]="FLOAT_LABEL",BORDER_TYPE[BORDER_TYPE.NOT_BORDERED=3]="NOT_BORDERED",BORDER_TYPE}({}),ValidateStatus=function(ValidateStatus){return ValidateStatus.success="success",ValidateStatus.warning="warning",ValidateStatus.error="error",ValidateStatus.validating="validating",ValidateStatus}({}),NUMBER_BUTTON=function(NUMBER_BUTTON){return NUMBER_BUTTON.THREE="three",NUMBER_BUTTON.TWO="two",NUMBER_BUTTON}({}),ADVANCE_DATE_RANGE_TYPE=function(ADVANCE_DATE_RANGE_TYPE){return ADVANCE_DATE_RANGE_TYPE[ADVANCE_DATE_RANGE_TYPE.SHORT=0]="SHORT",ADVANCE_DATE_RANGE_TYPE[ADVANCE_DATE_RANGE_TYPE.INPUT=1]="INPUT",ADVANCE_DATE_RANGE_TYPE}({}),ActionFilterEnum=function(ActionFilterEnum){return ActionFilterEnum[ActionFilterEnum.ChangeAllField=0]="ChangeAllField",ActionFilterEnum[ActionFilterEnum.ChangeOneField=1]="ChangeOneField",ActionFilterEnum[ActionFilterEnum.ChangePageIndexPageSize=2]="ChangePageIndexPageSize",ActionFilterEnum[ActionFilterEnum.ChangeOrderType=3]="ChangeOrderType",ActionFilterEnum}({}),UPLOADTYPE_IMAGE=function(UPLOADTYPE_IMAGE){return UPLOADTYPE_IMAGE[UPLOADTYPE_IMAGE.IMAGE=0]="IMAGE",UPLOADTYPE_IMAGE[UPLOADTYPE_IMAGE.AVATAR=1]="AVATAR",UPLOADTYPE_IMAGE}({}),MODAL_SIZE=function(MODAL_SIZE){return MODAL_SIZE[MODAL_SIZE.SIZE_400=400]="SIZE_400",MODAL_SIZE[MODAL_SIZE.SIZE_600=600]="SIZE_600",MODAL_SIZE[MODAL_SIZE.SIZE_800=800]="SIZE_800",MODAL_SIZE[MODAL_SIZE.SIZE_1000=1e3]="SIZE_1000",MODAL_SIZE}({}),NUMBER_TYPE=function(NUMBER_TYPE){return NUMBER_TYPE.DECIMAL="DECIMAL",NUMBER_TYPE.LONG="LONG",NUMBER_TYPE}({}),TAG_STATUS=function(TAG_STATUS){return TAG_STATUS.SUCCESS="SUCCESS",TAG_STATUS.ERROR="ERROR",TAG_STATUS.INFO="INFO",TAG_STATUS.IN_PROGRESS="IN_PROGRESS",TAG_STATUS.DEFAULT="DEFAULT",TAG_STATUS}({})},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/AdvanceFilter/AdvanceStringFilter/AdvanceStringFilter.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".advance-string-filter__wrapper{display:flex;flex-direction:column;width:100%}.advance-string-filter__wrapper .advance-string-filter__label{width:100%;display:flex}.advance-string-filter__wrapper .advance-string-filter__label .component__title--disabled{color:var(--palette-gray-40)}.advance-string-filter__wrapper .advance-string-filter__label label{font-size:.75em;white-space:nowrap;color:var(--palette-gray-70)}.advance-string-filter__wrapper .advance-string-filter__label span.advance-string-filter__count{color:var(--palette-gray-60)}.advance-string-filter__wrapper .advance-string-filter__container{position:relative;display:flex;flex-direction:row;justify-content:center;align-items:center;width:100%;outline:1.5px solid var(--palette-coolGray-50);background-color:var(--palette-gray-10);border-radius:2px;height:40px}.advance-string-filter__wrapper .advance-string-filter__container.advance-string-filter__container--sm{height:32px !important}.advance-string-filter__wrapper .advance-string-filter__container.advance-string-filter__container--white{background-color:var(--color-white)}.advance-string-filter__wrapper .advance-string-filter__container:focus-within{outline:1.5px solid var(--color-primary);box-shadow:0px 0px 0px 4px var(--color-primary-blur)}.advance-string-filter__wrapper .advance-string-filter__container.advance-string-filter--disabled{outline-color:var(--palette-coolGray-30);background-color:var(--palette-gray-10)}.advance-string-filter__wrapper .advance-string-filter__container.advance-string-filter--disabled:hover{cursor:not-allowed}.advance-string-filter__wrapper .advance-string-filter__container.advance-string-filter--disabled span{color:var(--palette-gray-40)}.advance-string-filter__wrapper .advance-string-filter__container.advance-string-filter--disabled input{color:var(--palette-gray-40) !important}.advance-string-filter__wrapper .advance-string-filter__container.advance-string-filter--float:hover:not(.advance-string-filter--disabled):not(:focus-within){outline-color:var(--palette-gray-100);outline-offset:-1px}.advance-string-filter__wrapper .advance-string-filter__container.advance-string-filter--float:focus-within{box-shadow:none;outline:2px solid var(--color-primary)}.advance-string-filter__wrapper .advance-string-filter__container.advance-string-filter--float:focus-within .component__title{color:var(--color-primary)}.advance-string-filter__wrapper .advance-string-filter__container.advance-string-filter--material{outline:none;border-bottom-left-radius:0;border-bottom-right-radius:0;box-shadow:inset 0px -1px 0px var(--palette-gray-50);margin-bottom:-1px}.advance-string-filter__wrapper .advance-string-filter__container.advance-string-filter--material:hover{background-color:var(--palette-grayHover-10)}.advance-string-filter__wrapper .advance-string-filter__container.advance-string-filter--material:hover .component__input{background-color:var(--palette-grayHover-10)}.advance-string-filter__wrapper .advance-string-filter__container.advance-string-filter--material:hover .component__input.disabled-field{background-color:var(--palette-gray-10)}.advance-string-filter__wrapper .advance-string-filter__container.advance-string-filter--material:focus-within{outline:2px solid var(--color-primary);box-shadow:none}.advance-string-filter__wrapper .advance-string-filter__container.advance-string-filter--material.advance-string-filter--disabled{box-shadow:none;background-color:var(--palette-gray-10)}.advance-string-filter__wrapper .advance-string-filter__container.advance-string-filter--material.advance-string-filter--float:focus-within{box-shadow:none;outline-width:2px}.advance-string-filter__wrapper .advance-string-filter__container .component__title{position:absolute;color:var(--palette-gray-60);transition:all .1s ease-out;padding:0 4px;z-index:200;top:9px;font-size:14px}.advance-string-filter__wrapper .advance-string-filter__container .component__title.component__title--normal{left:8px}.advance-string-filter__wrapper .advance-string-filter__container .component__title.component__title--sm{top:5px}.advance-string-filter__wrapper .advance-string-filter__container .component__title.component__title--prefix{left:41px}.advance-string-filter__wrapper .advance-string-filter__container .advance-string-filter__icon{display:flex;align-items:center;color:var(--palette-gray-60)}.advance-string-filter__wrapper .advance-string-filter__container .advance-string-filter__string{white-space:nowrap}.advance-string-filter__wrapper .advance-string-filter__container span{font-size:14px;line-height:1rem;color:var(--palette-gray-60)}.advance-string-filter__wrapper .advance-string-filter__container input{font-family:inherit;padding:0;outline:none;border:none;width:100%;font-size:14px;line-height:1rem;background-color:rgba(0,0,0,0)}.advance-string-filter__wrapper .advance-string-filter__container input::placeholder{color:var(--palette-base-neutral-6)}.advance-string-filter__wrapper .advance-string-filter__container input:disabled:hover{cursor:not-allowed}.advance-string-filter__wrapper .advance-string-filter__container input:disabled::placeholder{color:var(--palette-base-neutral-6)}.advance-string-filter__wrapper .advance-string-filter__container input:not(:placeholder-shown)+.component__title{top:0;left:8px;background-color:var(--color-white);transform:translateY(-50%) scale(0.9)}.advance-string-filter__wrapper .advance-string-filter__container input:focus+.component__title{top:0;left:8px;background-color:var(--color-white);transform:translateY(-50%) scale(0.9)}.advance-string-filter__wrapper .advance-string-filter__container input:focus::placeholder{color:rgba(0,0,0,0)}.advance-string-filter__wrapper .advance-string-filter__container .input-icon__clear{display:flex;justify-content:center;align-items:center}.advance-string-filter__wrapper .advance-string-filter__container .input-icon__clear svg{color:var(--palette-coolGray-50)}.advance-string-filter__wrapper .advance-string-filter__container .input-icon__clear svg:hover{cursor:pointer;color:var(--palette-coolGrayHover-50)}.form-item__container.form-item__container--error .form-item__content .component__input.advance-string-filter--material{outline:1px solid;box-shadow:none !important}.form-item__container.form-item__container--error .form-item__content .component__input.advance-string-filter--material:focus-within{outline-color:var(--color-primary) !important;outline-width:2px}","",{version:3,sources:["webpack://./src/components/AdvanceFilter/AdvanceStringFilter/AdvanceStringFilter.scss"],names:[],mappings:"AACA,gCACE,YAAA,CACA,qBAAA,CACA,UAAA,CAEA,8DACE,UAAA,CACA,YAAA,CAEA,0FACE,4BAAA,CAGF,oEACE,eAAA,CACA,kBAAA,CACA,4BAAA,CAGF,gGACE,4BAAA,CAIJ,kEACE,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,kBAAA,CACA,UAAA,CACA,8CAAA,CACA,uCAAA,CACA,iBAAA,CACA,WAAA,CAEA,uGACE,sBAAA,CAGF,0GACE,mCAAA,CAOF,+EACE,wCAAA,CACA,oDAAA,CAGF,kGACE,wCAAA,CACA,uCAAA,CACA,wGACE,kBAAA,CAGF,uGACE,4BAAA,CAEF,wGACE,uCAAA,CAKF,8JACE,qCAAA,CACA,mBAAA,CAEF,4GACE,eAAA,CACA,sCAAA,CACA,8HACE,0BAAA,CAKN,kGACE,YAAA,CACA,2BAAA,CACA,4BAAA,CACA,oDAAA,CACA,kBAAA,CAEA,wGACE,4CAAA,CACA,0HACE,4CAAA,CAEF,yIACE,uCAAA,CAIJ,+GACE,sCAAA,CACA,eAAA,CAGF,kIACE,eAAA,CACA,uCAAA,CAGF,4IACE,eAAA,CACA,iBAAA,CAIJ,oFACE,iBAAA,CACA,4BAAA,CACA,2BAAA,CACA,aAAA,CACA,WAAA,CACA,OAAA,CACA,cAAA,CAEA,6GACE,QAAA,CAEF,yGACE,OAAA,CAEF,6GACE,SAAA,CAIJ,+FACE,YAAA,CACA,kBAAA,CACA,4BAAA,CAGF,iGACE,kBAAA,CAGF,uEACE,cAAA,CACA,gBAAA,CACA,4BAAA,CAGF,wEACE,mBAAA,CACA,SAAA,CACA,YAAA,CACA,WAAA,CACA,UAAA,CACA,cAAA,CACA,gBAAA,CACA,8BAAA,CAEA,qFACE,mCAAA,CAIA,uFACE,kBAAA,CAEF,8FACE,mCAAA,CAIJ,kHACE,KAAA,CACA,QAAA,CACA,mCAAA,CACA,qCAAA,CAGF,gGACE,KAAA,CACA,QAAA,CACA,mCAAA,CACA,qCAAA,CAGF,2FACE,mBAAA,CAIJ,qFACE,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,yFACE,gCAAA,CACA,+FACE,cAAA,CACA,qCAAA,CAWF,wHACE,iBAAA,CACA,0BAAA,CACA,qIACE,6CAAA,CACA,iBAAA",sourcesContent:["/* Style for InputText.tsx */\r\n.advance-string-filter__wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n\r\n  .advance-string-filter__label {\r\n    width: 100%;\r\n    display: flex;\r\n    \r\n    .component__title--disabled {\r\n      color: var(--palette-gray-40);\r\n    }\r\n\r\n    label {\r\n      font-size: 0.75em;\r\n      white-space: nowrap;\r\n      color: var(--palette-gray-70);\r\n    }\r\n\r\n    span.advance-string-filter__count {\r\n      color: var(--palette-gray-60);\r\n    }\r\n  }\r\n\r\n  .advance-string-filter__container {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    outline: 1.5px solid var(--palette-coolGray-50);\r\n    background-color: var(--palette-gray-10);\r\n    border-radius: 2px;\r\n    height: 40px;\r\n\r\n    &.advance-string-filter__container--sm {\r\n      height: 32px !important;\r\n    }\r\n\r\n    &.advance-string-filter__container--white {\r\n      background-color: var(--color-white);\r\n    }\r\n\r\n    // &:hover {\r\n    //   outline-color: var(--color-primary);\r\n    // }\r\n\r\n    &:focus-within {\r\n      outline: 1.5px solid var(--color-primary);\r\n      box-shadow: 0px 0px 0px 4px var(--color-primary-blur);\r\n    }\r\n\r\n    &.advance-string-filter--disabled {\r\n      outline-color: var(--palette-coolGray-30);\r\n      background-color: var(--palette-gray-10);\r\n      &:hover {\r\n        cursor: not-allowed;\r\n      }\r\n\r\n      span {\r\n        color: var(--palette-gray-40);\r\n      }\r\n      input {\r\n        color: var(--palette-gray-40) !important;\r\n      }\r\n    }\r\n\r\n    &.advance-string-filter--float {\r\n      &:hover:not(.advance-string-filter--disabled):not(:focus-within) {\r\n        outline-color: var(--palette-gray-100);\r\n        outline-offset: -1px;\r\n      }\r\n      &:focus-within {\r\n        box-shadow: none;\r\n        outline: 2px solid var(--color-primary);\r\n        .component__title {\r\n          color: var(--color-primary);\r\n        }\r\n      }\r\n    }\r\n\r\n    &.advance-string-filter--material {\r\n      outline: none;\r\n      border-bottom-left-radius: 0;\r\n      border-bottom-right-radius: 0;\r\n      box-shadow: inset 0px -1px 0px var(--palette-gray-50);\r\n      margin-bottom: -1px;\r\n\r\n      &:hover {\r\n        background-color: var(--palette-grayHover-10);\r\n        .component__input {\r\n          background-color: var(--palette-grayHover-10);\r\n        }\r\n        .component__input.disabled-field {\r\n          background-color: var(--palette-gray-10);\r\n        }\r\n      }\r\n\r\n      &:focus-within {\r\n        outline: 2px solid var(--color-primary);\r\n        box-shadow: none;\r\n      }\r\n\r\n      &.advance-string-filter--disabled {\r\n        box-shadow: none;\r\n        background-color: var(--palette-gray-10);\r\n      }\r\n\r\n      &.advance-string-filter--float:focus-within {\r\n        box-shadow: none;\r\n        outline-width: 2px;\r\n      }\r\n    }\r\n\r\n    .component__title {\r\n      position: absolute;\r\n      color: var(--palette-gray-60);\r\n      transition: all 0.1s ease-out;\r\n      padding: 0 4px;\r\n      z-index: 200;\r\n      top: 9px;\r\n      font-size: 14px;\r\n\r\n      &.component__title--normal {\r\n        left: 8px;\r\n      }\r\n      &.component__title--sm {\r\n        top: 5px;\r\n      }\r\n      &.component__title--prefix {\r\n        left: 41px;\r\n      }\r\n    }\r\n\r\n    .advance-string-filter__icon {\r\n      display: flex;\r\n      align-items: center;\r\n      color: var(--palette-gray-60);\r\n    }\r\n\r\n    .advance-string-filter__string {\r\n      white-space: nowrap;\r\n    }\r\n\r\n    span {\r\n      font-size: 14px;\r\n      line-height: 1rem;\r\n      color: var(--palette-gray-60);\r\n    }\r\n\r\n    input {\r\n      font-family: inherit;\r\n      padding: 0;\r\n      outline: none;\r\n      border: none;\r\n      width: 100%;\r\n      font-size: 14px;\r\n      line-height: 1rem;\r\n      background-color: transparent;\r\n\r\n      &::placeholder {\r\n        color: var(--palette-base-neutral-6);\r\n      }\r\n\r\n      &:disabled {\r\n        &:hover {\r\n          cursor: not-allowed;\r\n        }\r\n        &::placeholder {\r\n          color: var(--palette-base-neutral-6);\r\n        }\r\n      }\r\n\r\n      &:not(:placeholder-shown) + .component__title {\r\n        top: 0;\r\n        left: 8px;\r\n        background-color: var(--color-white);\r\n        transform: translateY(-50%) scale(0.9);\r\n      }\r\n\r\n      &:focus + .component__title {\r\n        top: 0;\r\n        left: 8px;\r\n        background-color: var(--color-white);\r\n        transform: translateY(-50%) scale(0.9);\r\n      }\r\n\r\n      &:focus::placeholder {\r\n        color: transparent;\r\n      }\r\n    }\r\n\r\n    .input-icon__clear {\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      svg {\r\n        color: var(--palette-coolGray-50);\r\n        &:hover {\r\n          cursor: pointer;\r\n          color: var(--palette-coolGrayHover-50);\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.form-item__container {\r\n  &.form-item__container--error {\r\n    .form-item__content {\r\n      .component__input {\r\n        &.advance-string-filter--material {\r\n          outline: 1px solid;\r\n          box-shadow: none !important;\r\n          &:focus-within {\r\n            outline-color: var(--color-primary) !important;\r\n            outline-width: 2px;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/AdvanceFilter/AdvanceStringFilter/AdvanceStringFilter.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AdvanceStringFilter_stories});var react=__webpack_require__("./node_modules/react/index.js"),config_enum=__webpack_require__("./src/config/enum.ts"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),bucket_3=__webpack_require__("./node_modules/@carbon/icons-react/es/generated/bucket-3.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),AdvanceStringFilter=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/AdvanceFilter/AdvanceStringFilter/AdvanceStringFilter.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(AdvanceStringFilter.A,options);AdvanceStringFilter.A&&AdvanceStringFilter.A.locals&&AdvanceStringFilter.A.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AdvanceStringFilter_AdvanceStringFilter_AdvanceStringFilter=react.forwardRef(((props,ref)=>{const{label,type,prefix,suffix,maxLength,value,disabled,placeHolder,className,isSmall,bgColor,onChange,onEnter,onBlur,onKeyDown}=props,[internalValue,setInternalValue]=react.useState(""),inputRef=react.useRef(null),handleChange=react.useCallback((event=>{(!maxLength||maxLength&&event.target.value.length<=maxLength)&&(setInternalValue(event.target.value),"function"==typeof onChange&&onChange(event.target.value))}),[onChange,maxLength]),handleClearInput=react.useCallback((event=>{setInternalValue(""),inputRef&&inputRef.current&&inputRef.current.focus(),"function"!=typeof onChange||onChange(null)}),[onChange]),handleKeyPress=react.useCallback((event=>{"Enter"===event.key&&"function"==typeof onEnter&&onEnter(event.currentTarget.value)}),[onEnter]),handleKeyDown=react.useCallback((event=>{"function"==typeof onKeyDown&&onKeyDown(event)}),[onKeyDown]),handleBlur=react.useCallback((event=>{"function"==typeof onBlur&&onBlur(event.currentTarget.value)}),[onBlur]);return react.useEffect((()=>{setInternalValue(value||"")}),[value]),(0,jsx_runtime.jsxs)("div",{className:classnames_default()("advance-string-filter__wrapper",className),children:[(0,jsx_runtime.jsx)("div",{className:"advance-string-filter__label m-b--3xs",children:type!==config_enum.qi.FLOAT_LABEL&&label&&(0,jsx_runtime.jsx)("label",{className:classnames_default()("component__title",{"component__title--disabled":disabled}),children:label})}),(0,jsx_runtime.jsxs)("div",{className:classnames_default()("component__input advance-string-filter__container",{"advance-string-filter__container--sm":isSmall,"advance-string-filter__container--white":"white"===bgColor,"p-y--2xs":isSmall,"p-x--xs":isSmall,"p--xs":!isSmall,"advance-string-filter--material":type===config_enum.qi.MATERIAL,"advance-string-filter--disabled ":disabled,"advance-string-filter--float":type===config_enum.qi.FLOAT_LABEL}),ref,onClick:()=>{inputRef.current.focus()},children:[prefix&&(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"string"==typeof prefix?(0,jsx_runtime.jsx)("span",{className:"p-r--2xs advance-string-filter__string",children:prefix}):(0,jsx_runtime.jsx)("div",{className:"m-r--xs advance-string-filter__icon",children:prefix})}),(0,jsx_runtime.jsx)("input",{type:"text",value:internalValue,onChange:handleChange,onKeyPress:handleKeyPress,onKeyDown:handleKeyDown,onBlur:handleBlur,placeholder:type===config_enum.qi.FLOAT_LABEL&&label?" ":placeHolder,ref:inputRef,disabled,className:classnames_default()("component__input",{"disabled-field":disabled})}),type===config_enum.qi.FLOAT_LABEL&&label&&(0,jsx_runtime.jsx)("label",{className:classnames_default()("component__title",{"component__title--normal":!prefix,"component__title--prefix":prefix,"component__title--sm":isSmall}),children:label}),internalValue&&!disabled&&(0,jsx_runtime.jsx)("div",{className:classnames_default()("input-icon__clear","m-l--2xs"),children:(0,jsx_runtime.jsx)(bucket_3.R9,{size:16,onClick:handleClearInput})}),suffix&&(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"string"==typeof suffix?(0,jsx_runtime.jsx)("span",{className:"body-text--md m-l--2xs",children:suffix}):(0,jsx_runtime.jsx)("div",{className:"m-l--2xs",children:suffix})})]})]})}));AdvanceStringFilter_AdvanceStringFilter_AdvanceStringFilter.displayName="AdvanceStringFilter",AdvanceStringFilter_AdvanceStringFilter_AdvanceStringFilter.defaultProps={label:"",isSmall:!1,type:config_enum.qi.BORDERED,prefix:"",disabled:!1,className:"",maxLength:0,bgColor:"white"};const AdvanceFilter_AdvanceStringFilter_AdvanceStringFilter=AdvanceStringFilter_AdvanceStringFilter_AdvanceStringFilter;try{ForwardRefExoticComponent.displayName="AdvanceStringFilter",ForwardRefExoticComponent.__docgenInfo={description:"",displayName:"AdvanceStringFilter",props:{label:{defaultValue:{value:""},description:"Label for current field",name:"label",required:!1,type:{name:"string"}},type:{defaultValue:{value:"BORDER_TYPE.BORDERED"},description:"Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL",name:"type",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"}]}},prefix:{defaultValue:{value:""},description:"Prefix for filter value",name:"prefix",required:!1,type:{name:"string | Element"}},suffix:{defaultValue:null,description:"Suffix for filter value",name:"suffix",required:!1,type:{name:"string | Element"}},value:{defaultValue:null,description:"User-filled value",name:"value",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Not allow to handle change filter",name:"disabled",required:!1,type:{name:"boolean"}},placeHolder:{defaultValue:null,description:"Placeholder of the component",name:"placeHolder",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Use to custom style the component",name:"className",required:!1,type:{name:"string"}},maxLength:{defaultValue:{value:"0"},description:"Set maximum length of value filter",name:"maxLength",required:!1,type:{name:"number"}},isSmall:{defaultValue:{value:"false"},description:"Control the size of the component",name:"isSmall",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Handle the change value filter of the component",name:"onChange",required:!1,type:{name:"(T: string) => void"}},onEnter:{defaultValue:null,description:"Handle onEnter action",name:"onEnter",required:!1,type:{name:"(T: string) => void"}},onBlur:{defaultValue:null,description:"Handle onBlur action",name:"onBlur",required:!1,type:{name:"(T: string) => void"}},onKeyDown:{defaultValue:null,description:"Handle onKeyDown action",name:"onKeyDown",required:!1,type:{name:"(event: any) => void"}},bgColor:{defaultValue:{value:"white"},description:'Custom background color for component: "white" || "gray"',name:"bgColor",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"gray"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AdvanceFilter/AdvanceStringFilter/AdvanceStringFilter.tsx#AdvanceStringFilter"]={docgenInfo:AdvanceStringFilter_AdvanceStringFilter_AdvanceStringFilter.__docgenInfo,name:"AdvanceStringFilter",path:"src/components/AdvanceFilter/AdvanceStringFilter/AdvanceStringFilter.tsx#AdvanceStringFilter"})}catch(__react_docgen_typescript_loader_error){}var dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");const AdvanceStringFilter_stories={title:"AdvanceFilter/AdvanceStringFilter",component:AdvanceFilter_AdvanceStringFilter_AdvanceStringFilter,tags:["autodocs"],parameters:{controls:{expanded:!0},docs:{page:()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.hE,{}),(0,jsx_runtime.jsx)(dist.Pd,{}),(0,jsx_runtime.jsx)(dist.VY,{}),(0,jsx_runtime.jsx)(dist.Tn,{}),(0,jsx_runtime.jsx)(dist.VY,{}),(0,jsx_runtime.jsx)(dist.uY,{story:dist.h1}),(0,jsx_runtime.jsx)(dist.om,{})]})}},args:{label:"First name",placeHolder:"Search...",prefix:"Mr.",suffix:"Kg",maxLength:100,type:1},argTypes:{label:{control:"text"},type:{control:{type:"radio",options:[config_enum.qi.MATERIAL,config_enum.qi.BORDERED,config_enum.qi.FLOAT_LABEL]}},onKeyDown:{}}},Template=args=>{const[inputValue,setInputVal]=react.useState(),handleChangeValue=react.useCallback((value=>{setInputVal(value)}),[]);return(0,jsx_runtime.jsx)("div",{style:{width:"300px",padding:"10px"},children:(0,jsx_runtime.jsx)("div",{style:{margin:"15px 0"},children:(0,jsx_runtime.jsx)(AdvanceFilter_AdvanceStringFilter_AdvanceStringFilter,{...args,value:inputValue,onChange:handleChangeValue})})})};Template.displayName="Template";const Default=Template.bind({}),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  const [inputValue, setInputVal] = React.useState();\n  const handleChangeValue = React.useCallback(value => {\n    setInputVal(value);\n  }, []);\n  return /*#__PURE__*/_jsx("div", {\n    style: {\n      width: "300px",\n      padding: "10px"\n    },\n    children: /*#__PURE__*/_jsx("div", {\n      style: {\n        margin: "15px 0"\n      },\n      children: /*#__PURE__*/_jsx(AdvanceStringFilter, {\n        ...args,\n        value: inputValue,\n        onChange: handleChangeValue\n      })\n    })\n  });\n}',...Default.parameters?.docs?.source}}}}}]);