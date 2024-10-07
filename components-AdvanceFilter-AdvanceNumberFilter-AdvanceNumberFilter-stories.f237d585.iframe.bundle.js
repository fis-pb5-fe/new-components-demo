/*! For license information please see components-AdvanceFilter-AdvanceNumberFilter-AdvanceNumberFilter-stories.f237d585.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_components_design_system=self.webpackChunkreact_components_design_system||[]).push([[8448],{"./src/config/enum.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hv:()=>NUMBER_TYPE,Rs:()=>ValidateStatus,Xx:()=>NUMBER_BUTTON,fD:()=>ADVANCE_DATE_RANGE_TYPE,gb:()=>ActionFilterEnum,os:()=>TAG_STATUS,qi:()=>BORDER_TYPE,sE:()=>MODAL_SIZE,yV:()=>UPLOADTYPE_IMAGE});let BORDER_TYPE=function(BORDER_TYPE){return BORDER_TYPE[BORDER_TYPE.MATERIAL=0]="MATERIAL",BORDER_TYPE[BORDER_TYPE.BORDERED=1]="BORDERED",BORDER_TYPE[BORDER_TYPE.FLOAT_LABEL=2]="FLOAT_LABEL",BORDER_TYPE[BORDER_TYPE.NOT_BORDERED=3]="NOT_BORDERED",BORDER_TYPE}({}),ValidateStatus=function(ValidateStatus){return ValidateStatus.success="success",ValidateStatus.warning="warning",ValidateStatus.error="error",ValidateStatus.validating="validating",ValidateStatus}({}),NUMBER_BUTTON=function(NUMBER_BUTTON){return NUMBER_BUTTON.THREE="three",NUMBER_BUTTON.TWO="two",NUMBER_BUTTON}({}),ADVANCE_DATE_RANGE_TYPE=function(ADVANCE_DATE_RANGE_TYPE){return ADVANCE_DATE_RANGE_TYPE[ADVANCE_DATE_RANGE_TYPE.SHORT=0]="SHORT",ADVANCE_DATE_RANGE_TYPE[ADVANCE_DATE_RANGE_TYPE.INPUT=1]="INPUT",ADVANCE_DATE_RANGE_TYPE}({}),ActionFilterEnum=function(ActionFilterEnum){return ActionFilterEnum[ActionFilterEnum.ChangeAllField=0]="ChangeAllField",ActionFilterEnum[ActionFilterEnum.ChangeOneField=1]="ChangeOneField",ActionFilterEnum[ActionFilterEnum.ChangePageIndexPageSize=2]="ChangePageIndexPageSize",ActionFilterEnum[ActionFilterEnum.ChangeOrderType=3]="ChangeOrderType",ActionFilterEnum}({}),UPLOADTYPE_IMAGE=function(UPLOADTYPE_IMAGE){return UPLOADTYPE_IMAGE[UPLOADTYPE_IMAGE.IMAGE=0]="IMAGE",UPLOADTYPE_IMAGE[UPLOADTYPE_IMAGE.AVATAR=1]="AVATAR",UPLOADTYPE_IMAGE}({}),MODAL_SIZE=function(MODAL_SIZE){return MODAL_SIZE[MODAL_SIZE.SIZE_400=400]="SIZE_400",MODAL_SIZE[MODAL_SIZE.SIZE_600=600]="SIZE_600",MODAL_SIZE[MODAL_SIZE.SIZE_800=800]="SIZE_800",MODAL_SIZE[MODAL_SIZE.SIZE_1000=1e3]="SIZE_1000",MODAL_SIZE}({}),NUMBER_TYPE=function(NUMBER_TYPE){return NUMBER_TYPE.DECIMAL="DECIMAL",NUMBER_TYPE.LONG="LONG",NUMBER_TYPE}({}),TAG_STATUS=function(TAG_STATUS){return TAG_STATUS.SUCCESS="SUCCESS",TAG_STATUS.ERROR="ERROR",TAG_STATUS.INFO="INFO",TAG_STATUS.IN_PROGRESS="IN_PROGRESS",TAG_STATUS.DEFAULT="DEFAULT",TAG_STATUS}({})},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/AdvanceFilter/AdvanceNumberFilter/AdvanceNumberFilter.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".advance-number-filter__wrapper{display:flex;flex-direction:column;width:100%}.advance-number-filter__wrapper .advance-number-filter__label{width:100%;display:flex}.advance-number-filter__wrapper .advance-number-filter__label .component__title--disabled{color:var(--palette-gray-40)}.advance-number-filter__wrapper .advance-number-filter__label label{font-size:14px;color:var(--palette-base-neutral-7);white-space:nowrap}.advance-number-filter__wrapper .advance-number-filter__container{position:relative;display:flex;flex-direction:row;justify-content:center;align-items:center;width:100%;outline:1px solid var(--palette-coolGray-50);background-color:var(--palette-gray-10);height:40px}.advance-number-filter__wrapper .advance-number-filter__container.advance-number-filter__container--sm{height:32px !important}.advance-number-filter__wrapper .advance-number-filter__container.advance-number-filter__container--white{background-color:var(--color-white)}.advance-number-filter__wrapper .advance-number-filter__container:focus-within{outline:1.5px solid var(--color-primary);box-shadow:0px 0px 0px 4px var(--color-primary-blur)}.advance-number-filter__wrapper .advance-number-filter__container.advance-number-filter--disabled{outline-color:var(--palette-coolGray-30);background-color:var(--palette-gray-10)}.advance-number-filter__wrapper .advance-number-filter__container.advance-number-filter--disabled:hover{cursor:not-allowed}.advance-number-filter__wrapper .advance-number-filter__container.advance-number-filter--disabled span{color:var(--palette-gray-40)}.advance-number-filter__wrapper .advance-number-filter__container.advance-number-filter--disabled input{color:var(--palette-gray-40) !important}.advance-number-filter__wrapper .advance-number-filter__container.advance-number-filter--float:hover:not(.advance-number-filter--disabled):not(:focus-within){outline-color:var(--palette-gray-100)}.advance-number-filter__wrapper .advance-number-filter__container.advance-number-filter--float:focus-within{box-shadow:none;outline:2px solid var(--color-primary)}.advance-number-filter__wrapper .advance-number-filter__container.advance-number-filter--float:focus-within .component__title{color:var(--color-primary)}.advance-number-filter__wrapper .advance-number-filter__container.advance-number-filter--border{border-radius:2px}.advance-number-filter__wrapper .advance-number-filter__container.advance-number-filter--material{outline:none;border-bottom-left-radius:0;border-bottom-right-radius:0;box-shadow:inset 0px -1px 0px var(--palette-gray-50);margin-bottom:-1px}.advance-number-filter__wrapper .advance-number-filter__container.advance-number-filter--material:hover{background-color:var(--palette-grayHover-10)}.advance-number-filter__wrapper .advance-number-filter__container.advance-number-filter--material:hover .component__input{background-color:var(--palette-grayHover-10)}.advance-number-filter__wrapper .advance-number-filter__container.advance-number-filter--material:hover .component__input.disabled-field{background-color:var(--palette-gray-10)}.advance-number-filter__wrapper .advance-number-filter__container.advance-number-filter--material:focus-within{outline:2px solid var(--color-primary);box-shadow:none}.advance-number-filter__wrapper .advance-number-filter__container.advance-number-filter--material.advance-number-filter--disabled{box-shadow:none;background-color:var(--palette-gray-10)}.advance-number-filter__wrapper .advance-number-filter__container.advance-number-filter--material.advance-number-filter--float:focus-within{box-shadow:none;outline-width:2px}.advance-number-filter__wrapper .advance-number-filter__container .component__title{position:absolute;color:var(--palette-gray-60);transition:all .1s ease-out;padding:0 4px;z-index:200;top:9px;font-size:14px}.advance-number-filter__wrapper .advance-number-filter__container .component__title.component__title--normal{left:8px}.advance-number-filter__wrapper .advance-number-filter__container .component__title.component__title--sm{top:5px}.advance-number-filter__wrapper .advance-number-filter__container .component__title.component__title--prefix{left:41px}.advance-number-filter__wrapper .advance-number-filter__container .advance-number-filter__icon{display:flex;align-items:center}.advance-number-filter__wrapper .advance-number-filter__container span{font-size:14px;line-height:1rem;color:var(--palette-gray-60)}.advance-number-filter__wrapper .advance-number-filter__container input{font-family:inherit;padding:0;outline:none;border:none;width:100%;border-radius:4px;font-size:14px;line-height:1rem;background-color:rgba(0,0,0,0)}.advance-number-filter__wrapper .advance-number-filter__container input::placeholder{color:var(--palette-gray-60)}.advance-number-filter__wrapper .advance-number-filter__container input:disabled:hover{cursor:not-allowed}.advance-number-filter__wrapper .advance-number-filter__container input:disabled::placeholder{color:var(--palette-gray-40)}.advance-number-filter__wrapper .advance-number-filter__container input:not(:placeholder-shown)+.component__title{top:0;left:8px;background-color:var(--color-white);transform:translateY(-50%) scale(0.9)}.advance-number-filter__wrapper .advance-number-filter__container input:focus+.component__title{top:0;left:8px;background-color:var(--color-white);transform:translateY(-50%) scale(0.9)}.advance-number-filter__wrapper .advance-number-filter__container input:focus::placeholder{color:rgba(0,0,0,0)}.advance-number-filter__wrapper .advance-number-filter__container .input-icon__clear{display:flex;justify-content:center;align-items:center}.advance-number-filter__wrapper .advance-number-filter__container .input-icon__clear svg{color:var(--palette-coolGray-50)}.advance-number-filter__wrapper .advance-number-filter__container .input-icon__clear svg:hover{cursor:pointer;color:var(--palette-coolGrayHover-50)}.form-item__container.form-item__container--error .form-item__content .component__input.advance-number-filter--material{outline:1px solid;box-shadow:none !important}.form-item__container.form-item__container--error .form-item__content .component__input.advance-number-filter--material:focus-within{outline-color:var(--color-primary) !important;outline-width:2px}","",{version:3,sources:["webpack://./src/components/AdvanceFilter/AdvanceNumberFilter/AdvanceNumberFilter.scss"],names:[],mappings:"AACA,gCACE,YAAA,CACA,qBAAA,CACA,UAAA,CACA,8DACE,UAAA,CACA,YAAA,CAEA,0FACE,4BAAA,CAGF,oEACE,cAAA,CACA,mCAAA,CACA,kBAAA,CAIJ,kEACE,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,kBAAA,CACA,UAAA,CACA,4CAAA,CACA,uCAAA,CACA,WAAA,CAEA,uGACE,sBAAA,CAGF,0GACE,mCAAA,CAOF,+EACE,wCAAA,CACA,oDAAA,CAGF,kGACE,wCAAA,CACA,uCAAA,CACA,wGACE,kBAAA,CAGF,uGACE,4BAAA,CAGF,wGACE,uCAAA,CAKF,8JACE,qCAAA,CAEF,4GACE,eAAA,CACA,sCAAA,CACA,8HACE,0BAAA,CAKN,gGACE,iBAAA,CAGF,kGACE,YAAA,CACA,2BAAA,CACA,4BAAA,CACA,oDAAA,CACA,kBAAA,CAEA,wGACE,4CAAA,CACA,0HACE,4CAAA,CAEF,yIACE,uCAAA,CAIJ,+GACE,sCAAA,CACA,eAAA,CAGF,kIACE,eAAA,CACA,uCAAA,CAGF,4IACE,eAAA,CACA,iBAAA,CAIJ,oFACE,iBAAA,CACA,4BAAA,CACA,2BAAA,CACA,aAAA,CACA,WAAA,CACA,OAAA,CACA,cAAA,CAEA,6GACE,QAAA,CAEF,yGACE,OAAA,CAEF,6GACE,SAAA,CAIJ,+FACE,YAAA,CACA,kBAAA,CAGF,uEACE,cAAA,CACA,gBAAA,CACA,4BAAA,CAGF,wEACE,mBAAA,CACA,SAAA,CACA,YAAA,CACA,WAAA,CACA,UAAA,CACA,iBAAA,CACA,cAAA,CACA,gBAAA,CACA,8BAAA,CAEA,qFACE,4BAAA,CAIA,uFACE,kBAAA,CAEF,8FACE,4BAAA,CAIJ,kHACE,KAAA,CACA,QAAA,CACA,mCAAA,CACA,qCAAA,CAGF,gGACE,KAAA,CACA,QAAA,CACA,mCAAA,CACA,qCAAA,CAGF,2FACE,mBAAA,CAIJ,qFACE,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,yFACE,gCAAA,CACA,+FACE,cAAA,CACA,qCAAA,CAWF,wHACE,iBAAA,CACA,0BAAA,CACA,qIACE,6CAAA,CACA,iBAAA",sourcesContent:["/* Style for InputNumber.tsx */\r\n.advance-number-filter__wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  .advance-number-filter__label {\r\n    width: 100%;\r\n    display: flex;\r\n\r\n    .component__title--disabled {\r\n      color: var(--palette-gray-40);\r\n    }\r\n\r\n    label {\r\n      font-size: 14px;\r\n      color: var(--palette-base-neutral-7);\r\n      white-space: nowrap;\r\n    }\r\n  }\r\n\r\n  .advance-number-filter__container {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    outline: 1px solid var(--palette-coolGray-50);\r\n    background-color: var(--palette-gray-10);\r\n    height: 40px;\r\n\r\n    &.advance-number-filter__container--sm {\r\n      height: 32px !important;\r\n    }\r\n\r\n    &.advance-number-filter__container--white {\r\n      background-color: var(--color-white);\r\n    }\r\n\r\n    // &:hover {\r\n    //   outline-color: var(--color-primary);\r\n    // }\r\n\r\n    &:focus-within {\r\n      outline: 1.5px solid var(--color-primary);\r\n      box-shadow: 0px 0px 0px 4px var(--color-primary-blur);\r\n    }\r\n\r\n    &.advance-number-filter--disabled {\r\n      outline-color: var(--palette-coolGray-30);\r\n      background-color: var(--palette-gray-10);\r\n      &:hover {\r\n        cursor: not-allowed;\r\n      }\r\n\r\n      span {\r\n        color: var(--palette-gray-40);\r\n      }\r\n\r\n      input {\r\n        color: var(--palette-gray-40) !important;\r\n      }\r\n    }\r\n\r\n    &.advance-number-filter--float {\r\n      &:hover:not(.advance-number-filter--disabled):not(:focus-within) {\r\n        outline-color: var(--palette-gray-100);\r\n      }\r\n      &:focus-within {\r\n        box-shadow: none;\r\n        outline: 2px solid var(--color-primary);\r\n        .component__title {\r\n          color: var(--color-primary);\r\n        }\r\n      }\r\n    }\r\n\r\n    &.advance-number-filter--border {\r\n      border-radius: 2px;\r\n    }\r\n\r\n    &.advance-number-filter--material {\r\n      outline: none;\r\n      border-bottom-left-radius: 0;\r\n      border-bottom-right-radius: 0;\r\n      box-shadow: inset 0px -1px 0px var(--palette-gray-50);\r\n      margin-bottom: -1px;\r\n\r\n      &:hover {\r\n        background-color: var(--palette-grayHover-10);\r\n        .component__input {\r\n          background-color: var(--palette-grayHover-10);\r\n        }\r\n        .component__input.disabled-field {\r\n          background-color: var(--palette-gray-10);\r\n        }\r\n      }\r\n\r\n      &:focus-within {\r\n        outline: 2px solid var(--color-primary);\r\n        box-shadow: none;\r\n      }\r\n\r\n      &.advance-number-filter--disabled {\r\n        box-shadow: none;\r\n        background-color: var(--palette-gray-10);\r\n      }\r\n\r\n      &.advance-number-filter--float:focus-within {\r\n        box-shadow: none;\r\n        outline-width: 2px;\r\n      }\r\n    }\r\n\r\n    .component__title {\r\n      position: absolute;\r\n      color: var(--palette-gray-60);\r\n      transition: all 0.1s ease-out;\r\n      padding: 0 4px;\r\n      z-index: 200;\r\n      top: 9px;\r\n      font-size: 14px;\r\n\r\n      &.component__title--normal {\r\n        left: 8px;\r\n      }\r\n      &.component__title--sm {\r\n        top: 5px;\r\n      }\r\n      &.component__title--prefix {\r\n        left: 41px;\r\n      }\r\n    }\r\n\r\n    .advance-number-filter__icon {\r\n      display: flex;\r\n      align-items: center;\r\n    }\r\n\r\n    span {\r\n      font-size: 14px;\r\n      line-height: 1rem;\r\n      color: var(--palette-gray-60);\r\n    }\r\n\r\n    input {\r\n      font-family: inherit;\r\n      padding: 0;\r\n      outline: none;\r\n      border: none;\r\n      width: 100%;\r\n      border-radius: 4px;\r\n      font-size: 14px;\r\n      line-height: 1rem;\r\n      background-color: transparent;\r\n\r\n      &::placeholder {\r\n        color: var(--palette-gray-60);\r\n      }\r\n\r\n      &:disabled {\r\n        &:hover {\r\n          cursor: not-allowed;\r\n        }\r\n        &::placeholder {\r\n          color: var(--palette-gray-40);\r\n        }\r\n      }\r\n\r\n      &:not(:placeholder-shown) + .component__title {\r\n        top: 0;\r\n        left: 8px;\r\n        background-color: var(--color-white);\r\n        transform: translateY(-50%) scale(0.9);\r\n      }\r\n\r\n      &:focus + .component__title {\r\n        top: 0;\r\n        left: 8px;\r\n        background-color: var(--color-white);\r\n        transform: translateY(-50%) scale(0.9);\r\n      }\r\n\r\n      &:focus::placeholder {\r\n        color: transparent;\r\n      }\r\n    }\r\n\r\n    .input-icon__clear {\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      svg {\r\n        color: var(--palette-coolGray-50);\r\n        &:hover {\r\n          cursor: pointer;\r\n          color: var(--palette-coolGrayHover-50);\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.form-item__container {\r\n  &.form-item__container--error {\r\n    .form-item__content {\r\n      .component__input {\r\n        &.advance-number-filter--material {\r\n          outline: 1px solid;\r\n          box-shadow: none !important;\r\n          &:focus-within {\r\n            outline-color: var(--color-primary) !important;\r\n            outline-width: 2px;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/AdvanceFilter/AdvanceNumberFilter/AdvanceNumberFilter.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AdvanceNumberFilter_stories});var react=__webpack_require__("./node_modules/react/index.js"),config_enum=__webpack_require__("./src/config/enum.ts"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),bucket_3=__webpack_require__("./node_modules/@carbon/icons-react/es/generated/bucket-3.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),AdvanceNumberFilter=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/AdvanceFilter/AdvanceNumberFilter/AdvanceNumberFilter.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(AdvanceNumberFilter.A,options);AdvanceNumberFilter.A&&AdvanceNumberFilter.A.locals&&AdvanceNumberFilter.A.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function AdvanceNumberFilter_AdvanceNumberFilter_AdvanceNumberFilter(props){const{label,type,prefix,suffix,value,allowPositive,numberType,decimalDigit,isReverseSymb,placeHolder,className,disabled,min,max,isSmall,bgColor,onChange,onEnter,onBlur}=props,[internalValue,setInternalValue]=react.useState(""),inputRef=react.useRef(null),cursorPosition=react.useRef({selectionStart:0,selectionEnd:0}),buildRegex=react.useCallback((()=>{var regExDecimal="",regExString="";for(let i=1;i<=decimalDigit;i++)regExDecimal+="\\d";return regExString=isReverseSymb?"(\\d)(?=(?:\\d{3})+(?:,|$))|(,"+regExDecimal+"?)\\d*$":"(\\d)(?=(?:\\d{3})+(?:\\.|$))|(\\."+regExDecimal+"?)\\d*$",new RegExp(regExString,"g")}),[decimalDigit,isReverseSymb]),formatString=react.useCallback((inputValue=>{const newRegEx=buildRegex();return isReverseSymb?numberType===config_enum.Hv.DECIMAL?(inputValue=allowPositive?inputValue.replace(/[^0-9,-]/g,"").replace(",","x").replace(/,/g,"").replace("x",",").replace(/(?!^)-/g,""):inputValue.replace(/[^0-9,]/g,"").replace(",","x").replace(/,/g,"").replace("x",",")).replace(newRegEx,((m,s1,s2)=>s2||s1+".")):(inputValue=allowPositive?inputValue.replace(/[^0-9-]/g,"").replace(/(?!^)-/g,""):inputValue.replace(/[^0-9]/g,"")).replace(/\B(?=(\d{3})+(?!\d))/g,"."):numberType===config_enum.Hv.DECIMAL?(inputValue=allowPositive?inputValue.replace(/[^0-9.-]/g,"").replace(".","x").replace(/\./g,"").replace("x",".").replace(/(?!^)-/g,""):inputValue.replace(/[^0-9.]/g,"").replace(".","x").replace(/\./g,"").replace("x",".")).replace(newRegEx,((m,s1,s2)=>s2||s1+",")):(inputValue=allowPositive?inputValue.replace(/[^0-9-]/g,"").replace(/(?!^)-/g,""):inputValue.replace(/[^0-9]/g,"")).replace(/\B(?=(\d{3})+(?!\d))/g,",")}),[isReverseSymb,numberType,buildRegex,allowPositive]),parseNumber=react.useCallback((value=>{var number,stringValue;return value?(stringValue=isReverseSymb?(stringValue=value.replace(/[,.]/g,(m=>"."===m?",":"."))).replace(/,/g,""):value.replace(/,/g,""),numberType===config_enum.Hv.DECIMAL?[number=parseFloat(stringValue),"number"==typeof max&&number>max||"number"==typeof min&&number<min]:[number=parseInt(stringValue),"number"==typeof max&&number>max||"number"==typeof min&&number<min]):[void 0,!1]}),[numberType,isReverseSymb,min,max]),handleChange=react.useCallback((event=>{const{selectionEnd,selectionStart}=event.target,stringValue=formatString(event.target.value),[numberValue,isOutOfRange]=parseNumber(stringValue);if(!isOutOfRange){if("function"==typeof onChange){/[-,.]/g.test(Array.from(stringValue)[0])||onChange(numberValue)}setInternalValue(stringValue)}event.target.value.length<stringValue.length?(cursorPosition.current.selectionStart=selectionStart+1,cursorPosition.current.selectionEnd=selectionEnd+1):(cursorPosition.current.selectionStart=selectionStart,cursorPosition.current.selectionEnd=selectionEnd)}),[formatString,parseNumber,onChange]),handleClearInput=react.useCallback((event=>{setInternalValue(""),inputRef.current.focus(),"function"!=typeof onChange?"function"!=typeof onBlur?"function"!=typeof onEnter||onEnter(void 0):onBlur(void 0):onChange(void 0)}),[onBlur,onChange,onEnter]),handleKeyPress=react.useCallback((event=>{"Enter"===event.key&&"function"==typeof onEnter&&onEnter(parseNumber(event.currentTarget.value)[0])}),[onEnter,parseNumber]),handleBlur=react.useCallback((event=>{"function"==typeof onBlur&&onBlur(parseNumber(event.currentTarget.value)[0])}),[onBlur,parseNumber]);return react.useEffect((()=>{if(value){var stringValue=""+value;isReverseSymb&&(stringValue=stringValue.replace(/\./g,",")),setInternalValue(formatString(stringValue))}else setInternalValue("")}),[value,formatString,isReverseSymb]),(0,jsx_runtime.jsxs)("div",{className:classnames_default()("advance-number-filter__wrapper",className),children:[(0,jsx_runtime.jsx)("div",{className:"advance-number-filter__label m-b--3xs",children:type!==config_enum.qi.FLOAT_LABEL&&label&&(0,jsx_runtime.jsx)("label",{className:classnames_default()("component__title",{"component__title--disabled":disabled}),children:label})}),(0,jsx_runtime.jsxs)("div",{className:classnames_default()("component__input advance-number-filter__container p--xs",{"advance-number-filter__container--sm":isSmall,"advance-number-filter__container--white":"white"===bgColor,"py--2xs":isSmall,"px--xs":isSmall,"p--xs":!isSmall,"advance-number-filter--material":type===config_enum.qi.MATERIAL,"advance-number-filter--border":type===config_enum.qi.BORDERED,"advance-number-filter--disabled ":disabled,"advance-number-filter--float":type===config_enum.qi.FLOAT_LABEL}),onClick:()=>{inputRef.current.focus()},children:[prefix&&(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"string"==typeof prefix?(0,jsx_runtime.jsx)("span",{className:"p-r--2xs",children:prefix}):(0,jsx_runtime.jsx)("div",{className:"m-r--xs advance-number-filter__icon",children:prefix})}),(0,jsx_runtime.jsx)("input",{type:"text",value:internalValue,onChange:handleChange,onKeyDown:handleKeyPress,onBlur:handleBlur,placeholder:type===config_enum.qi.FLOAT_LABEL&&label?" ":placeHolder,ref:inputRef,disabled,className:classnames_default()("component__input",{"disabled-field":disabled}),min,max}),type===config_enum.qi.FLOAT_LABEL&&label&&(0,jsx_runtime.jsx)("label",{className:classnames_default()("component__title",{"component__title--normal":!prefix,"component__title--prefix":prefix,"component__title--sm":isSmall}),children:label}),internalValue&&!disabled&&(0,jsx_runtime.jsx)("div",{className:classnames_default()("input-icon__clear","m-l--2xs"),children:(0,jsx_runtime.jsx)(bucket_3.R9,{size:16,onClick:handleClearInput})}),suffix&&(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"string"==typeof suffix?(0,jsx_runtime.jsx)("span",{className:"body-text--md m-l--2xs",children:suffix}):(0,jsx_runtime.jsx)("div",{className:"m-l--2xs",children:suffix})})]})]})}AdvanceNumberFilter_AdvanceNumberFilter_AdvanceNumberFilter.displayName="AdvanceNumberFilter",AdvanceNumberFilter_AdvanceNumberFilter_AdvanceNumberFilter.defaultProps={label:"",type:config_enum.qi.MATERIAL,isSmall:!1,allowPositive:!1,isReverseSymb:!1,numberType:config_enum.Hv.LONG,decimalDigit:4,disabled:!1,prefix:"",bgColor:"white"};const AdvanceFilter_AdvanceNumberFilter_AdvanceNumberFilter=AdvanceNumberFilter_AdvanceNumberFilter_AdvanceNumberFilter;try{AdvanceNumberFilter_AdvanceNumberFilter_AdvanceNumberFilter.displayName="AdvanceNumberFilter",AdvanceNumberFilter_AdvanceNumberFilter_AdvanceNumberFilter.__docgenInfo={description:"",displayName:"AdvanceNumberFilter",props:{label:{defaultValue:{value:""},description:"Label for current field",name:"label",required:!1,type:{name:"string"}},type:{defaultValue:{value:"BORDER_TYPE.MATERIAL"},description:"Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL",name:"type",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"}]}},value:{defaultValue:null,description:"User-filled value",name:"value",required:!1,type:{name:"number"}},prefix:{defaultValue:{value:""},description:"Prefix for filter value",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"Suffix for filter value",name:"suffix",required:!1,type:{name:"ReactNode"}},allowPositive:{defaultValue:{value:"false"},description:"Allow values to be negative not",name:"allowPositive",required:!1,type:{name:"boolean"}},numberType:{defaultValue:{value:"NUMBER_TYPE.LONG"},description:"Provide an option set decimal number type for value filter",name:"numberType",required:!1,type:{name:"enum",value:[{value:'"DECIMAL"'},{value:'"LONG"'}]}},isReverseSymb:{defaultValue:{value:"false"},description:"Reverse symbol “.” and “,”",name:"isReverseSymb",required:!1,type:{name:"boolean"}},decimalDigit:{defaultValue:{value:"4"},description:"Provide a length of number behind the point (character)",name:"decimalDigit",required:!1,type:{name:"number"}},placeHolder:{defaultValue:null,description:"Placeholder of the component",name:"placeHolder",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Not allow to handle change filter",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Use to custom style the component",name:"className",required:!1,type:{name:"string"}},min:{defaultValue:null,description:"Min of the value number",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"Max of the value number",name:"max",required:!1,type:{name:"number"}},isSmall:{defaultValue:{value:"false"},description:"Control the size of the component",name:"isSmall",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Handle the change value filter of the component",name:"onChange",required:!1,type:{name:"(T: number) => void"}},onEnter:{defaultValue:null,description:"Handle onEnter action",name:"onEnter",required:!1,type:{name:"(T: number) => void"}},onBlur:{defaultValue:null,description:"Handle onBlur action",name:"onBlur",required:!1,type:{name:"(T: number) => void"}},bgColor:{defaultValue:{value:"white"},description:'Custom background color for component: "white" || "gray"',name:"bgColor",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"gary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AdvanceFilter/AdvanceNumberFilter/AdvanceNumberFilter.tsx#AdvanceNumberFilter"]={docgenInfo:AdvanceNumberFilter_AdvanceNumberFilter_AdvanceNumberFilter.__docgenInfo,name:"AdvanceNumberFilter",path:"src/components/AdvanceFilter/AdvanceNumberFilter/AdvanceNumberFilter.tsx#AdvanceNumberFilter"})}catch(__react_docgen_typescript_loader_error){}var dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");const AdvanceNumberFilter_stories={title:"AdvanceFilter/AdvanceNumberFilter",component:AdvanceFilter_AdvanceNumberFilter_AdvanceNumberFilter,tags:["autodocs"],parameters:{controls:{expanded:!0},docs:{page:()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.hE,{}),(0,jsx_runtime.jsx)(dist.Pd,{}),(0,jsx_runtime.jsx)(dist.VY,{}),(0,jsx_runtime.jsx)(dist.Tn,{}),(0,jsx_runtime.jsx)(dist.VY,{}),(0,jsx_runtime.jsx)(dist.uY,{story:dist.h1}),(0,jsx_runtime.jsx)(dist.om,{})]})}},args:{label:"Cân nặng",placeHolder:"Search...",prefix:"Mr.",suffix:"Kg",numberType:config_enum.Hv.LONG,type:1},argTypes:{label:{control:"text"},numberType:{control:{type:"radio",options:[config_enum.Hv.LONG,config_enum.Hv.DECIMAL]}},type:{control:{type:"radio",options:[config_enum.qi.MATERIAL,config_enum.qi.BORDERED,config_enum.qi.FLOAT_LABEL]}}}},Template=args=>{const[value,setValue]=react.useState(),handleChangeValue=react.useCallback((value=>{setValue(value)}),[]);return(0,jsx_runtime.jsx)("div",{style:{width:"300px",margin:"10px"},children:(0,jsx_runtime.jsx)("div",{style:{margin:"15px 0"},children:(0,jsx_runtime.jsx)(AdvanceFilter_AdvanceNumberFilter_AdvanceNumberFilter,{...args,value,onChange:handleChangeValue})})})};Template.displayName="Template";const Default=Template.bind({}),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  const [value, setValue] = React.useState();\n  const handleChangeValue = React.useCallback(value => {\n    setValue(value);\n  }, []);\n  return /*#__PURE__*/_jsx("div", {\n    style: {\n      width: "300px",\n      margin: "10px"\n    },\n    children: /*#__PURE__*/_jsx("div", {\n      style: {\n        margin: "15px 0"\n      },\n      children: /*#__PURE__*/_jsx(AdvanceNumberFilter, {\n        ...args,\n        value: value,\n        onChange: handleChangeValue\n      })\n    })\n  });\n}',...Default.parameters?.docs?.source}}}}}]);