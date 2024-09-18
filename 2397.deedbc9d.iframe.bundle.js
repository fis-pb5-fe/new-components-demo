(self.webpackChunkreact_3layer_ui_components=self.webpackChunkreact_3layer_ui_components||[]).push([[2397],{"./node_modules/ahooks/es/useDebounceFn/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>es_useDebounceFn});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),debounce=__webpack_require__("./node_modules/lodash/debounce.js"),debounce_default=__webpack_require__.n(debounce),react=__webpack_require__("./node_modules/react/index.js");const es_useLatest=function useLatest(value){var ref=(0,react.useRef)(value);return ref.current=value,ref};__webpack_require__("./node_modules/ahooks/es/utils/index.js");const es_useUnmount=function(fn){var fnRef=es_useLatest(fn);(0,react.useEffect)((function(){return function(){fnRef.current()}}),[])};const es_useDebounceFn=function useDebounceFn(fn,options){var _a,fnRef=es_useLatest(fn),wait=null!==(_a=null==options?void 0:options.wait)&&void 0!==_a?_a:1e3,debounced=(0,react.useMemo)((function(){return debounce_default()((function(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return fnRef.current.apply(fnRef,(0,tslib_es6.fX)([],(0,tslib_es6.zs)(args),!1))}),wait,options)}),[]);return es_useUnmount((function(){debounced.cancel()})),{run:debounced,cancel:debounced.cancel,flush:debounced.flush}}},"./node_modules/ahooks/es/utils/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Tn:()=>isFunction});var isFunction=function(value){return"function"==typeof value}},"./node_modules/antd/es/checkbox/style/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,gd:()=>getStyle});var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ant-design/cssinjs/es/index.js"),_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/antd/es/style/index.js"),_theme_internal__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ant-design/cssinjs-utils/es/index.js"),_theme_internal__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/antd/es/theme/util/genStyleUtils.js");const genCheckboxStyle=token=>{const{checkboxCls}=token,wrapperCls=`${checkboxCls}-wrapper`;return[{[`${checkboxCls}-group`]:Object.assign(Object.assign({},(0,_style__WEBPACK_IMPORTED_MODULE_1__.dF)(token)),{display:"inline-flex",flexWrap:"wrap",columnGap:token.marginXS,[`> ${token.antCls}-row`]:{flex:1}}),[wrapperCls]:Object.assign(Object.assign({},(0,_style__WEBPACK_IMPORTED_MODULE_1__.dF)(token)),{display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},[`& + ${wrapperCls}`]:{marginInlineStart:0},[`&${wrapperCls}-in-form-item`]:{'input[type="checkbox"]':{width:14,height:14}}}),[checkboxCls]:Object.assign(Object.assign({},(0,_style__WEBPACK_IMPORTED_MODULE_1__.dF)(token)),{position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",borderRadius:token.borderRadiusSM,alignSelf:"center",[`${checkboxCls}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0,[`&:focus-visible + ${checkboxCls}-inner`]:Object.assign({},(0,_style__WEBPACK_IMPORTED_MODULE_1__.jk)(token))},[`${checkboxCls}-inner`]:{boxSizing:"border-box",display:"block",width:token.checkboxSize,height:token.checkboxSize,direction:"ltr",backgroundColor:token.colorBgContainer,border:`${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.zA)(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,borderRadius:token.borderRadiusSM,borderCollapse:"separate",transition:`all ${token.motionDurationSlow}`,"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"25%",display:"table",width:token.calc(token.checkboxSize).div(14).mul(5).equal(),height:token.calc(token.checkboxSize).div(14).mul(8).equal(),border:`${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.zA)(token.lineWidthBold)} solid ${token.colorWhite}`,borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:`all ${token.motionDurationFast} ${token.motionEaseInBack}, opacity ${token.motionDurationFast}`}},"& + span":{paddingInlineStart:token.paddingXS,paddingInlineEnd:token.paddingXS}})},{[`\n        ${wrapperCls}:not(${wrapperCls}-disabled),\n        ${checkboxCls}:not(${checkboxCls}-disabled)\n      `]:{[`&:hover ${checkboxCls}-inner`]:{borderColor:token.colorPrimary}},[`${wrapperCls}:not(${wrapperCls}-disabled)`]:{[`&:hover ${checkboxCls}-checked:not(${checkboxCls}-disabled) ${checkboxCls}-inner`]:{backgroundColor:token.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${checkboxCls}-checked:not(${checkboxCls}-disabled):after`]:{borderColor:token.colorPrimaryHover}}},{[`${checkboxCls}-checked`]:{[`${checkboxCls}-inner`]:{backgroundColor:token.colorPrimary,borderColor:token.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:`all ${token.motionDurationMid} ${token.motionEaseOutBack} ${token.motionDurationFast}`}}},[`\n        ${wrapperCls}-checked:not(${wrapperCls}-disabled),\n        ${checkboxCls}-checked:not(${checkboxCls}-disabled)\n      `]:{[`&:hover ${checkboxCls}-inner`]:{backgroundColor:token.colorPrimaryHover,borderColor:"transparent"}}},{[checkboxCls]:{"&-indeterminate":{[`${checkboxCls}-inner`]:{backgroundColor:`${token.colorBgContainer} !important`,borderColor:`${token.colorBorder} !important`,"&:after":{top:"50%",insetInlineStart:"50%",width:token.calc(token.fontSizeLG).div(2).equal(),height:token.calc(token.fontSizeLG).div(2).equal(),backgroundColor:token.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}},[`&:hover ${checkboxCls}-inner`]:{backgroundColor:`${token.colorBgContainer} !important`,borderColor:`${token.colorPrimary} !important`}}}},{[`${wrapperCls}-disabled`]:{cursor:"not-allowed"},[`${checkboxCls}-disabled`]:{[`&, ${checkboxCls}-input`]:{cursor:"not-allowed",pointerEvents:"none"},[`${checkboxCls}-inner`]:{background:token.colorBgContainerDisabled,borderColor:token.colorBorder,"&:after":{borderColor:token.colorTextDisabled}},"&:after":{display:"none"},"& + span":{color:token.colorTextDisabled},[`&${checkboxCls}-indeterminate ${checkboxCls}-inner::after`]:{background:token.colorTextDisabled}}}]};function getStyle(prefixCls,token){const checkboxToken=(0,_theme_internal__WEBPACK_IMPORTED_MODULE_2__.oX)(token,{checkboxCls:`.${prefixCls}`,checkboxSize:token.controlInteractiveSize});return[genCheckboxStyle(checkboxToken)]}const __WEBPACK_DEFAULT_EXPORT__=(0,_theme_internal__WEBPACK_IMPORTED_MODULE_3__.OF)("Checkbox",((token,_ref)=>{let{prefixCls}=_ref;return[getStyle(prefixCls,token)]}))},"./node_modules/antd/es/locale/useLocale.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/antd/es/locale/context.js"),_en_US__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/locale/en_US.js");const __WEBPACK_DEFAULT_EXPORT__=(componentName,defaultLocale)=>{const fullLocale=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_context__WEBPACK_IMPORTED_MODULE_1__.A);return[react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{var _a;const locale=defaultLocale||_en_US__WEBPACK_IMPORTED_MODULE_2__.A[componentName],localeFromContext=null!==(_a=null==fullLocale?void 0:fullLocale[componentName])&&void 0!==_a?_a:{};return Object.assign(Object.assign({},"function"==typeof locale?locale():locale),localeFromContext||{})}),[componentName,defaultLocale,fullLocale]),react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{const localeCode=null==fullLocale?void 0:fullLocale.locale;return(null==fullLocale?void 0:fullLocale.exist)&&!localeCode?_en_US__WEBPACK_IMPORTED_MODULE_2__.A.locale:localeCode}),[fullLocale])]}},"./node_modules/lodash/_baseTrim.js":(module,__unused_webpack_exports,__webpack_require__)=>{var trimmedEndIndex=__webpack_require__("./node_modules/lodash/_trimmedEndIndex.js"),reTrimStart=/^\s+/;module.exports=function baseTrim(string){return string?string.slice(0,trimmedEndIndex(string)+1).replace(reTrimStart,""):string}},"./node_modules/lodash/_trimmedEndIndex.js":module=>{var reWhitespace=/\s/;module.exports=function trimmedEndIndex(string){for(var index=string.length;index--&&reWhitespace.test(string.charAt(index)););return index}},"./node_modules/lodash/debounce.js":(module,__unused_webpack_exports,__webpack_require__)=>{var isObject=__webpack_require__("./node_modules/lodash/isObject.js"),now=__webpack_require__("./node_modules/lodash/now.js"),toNumber=__webpack_require__("./node_modules/lodash/toNumber.js"),nativeMax=Math.max,nativeMin=Math.min;module.exports=function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=!1,maxing=!1,trailing=!0;if("function"!=typeof func)throw new TypeError("Expected a function");function invokeFunc(time){var args=lastArgs,thisArg=lastThis;return lastArgs=lastThis=void 0,lastInvokeTime=time,result=func.apply(thisArg,args)}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime;return void 0===lastCallTime||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&time-lastInvokeTime>=maxWait}function timerExpired(){var time=now();if(shouldInvoke(time))return trailingEdge(time);timerId=setTimeout(timerExpired,function remainingWait(time){var timeWaiting=wait-(time-lastCallTime);return maxing?nativeMin(timeWaiting,maxWait-(time-lastInvokeTime)):timeWaiting}(time))}function trailingEdge(time){return timerId=void 0,trailing&&lastArgs?invokeFunc(time):(lastArgs=lastThis=void 0,result)}function debounced(){var time=now(),isInvoking=shouldInvoke(time);if(lastArgs=arguments,lastThis=this,lastCallTime=time,isInvoking){if(void 0===timerId)return function leadingEdge(time){return lastInvokeTime=time,timerId=setTimeout(timerExpired,wait),leading?invokeFunc(time):result}(lastCallTime);if(maxing)return clearTimeout(timerId),timerId=setTimeout(timerExpired,wait),invokeFunc(lastCallTime)}return void 0===timerId&&(timerId=setTimeout(timerExpired,wait)),result}return wait=toNumber(wait)||0,isObject(options)&&(leading=!!options.leading,maxWait=(maxing="maxWait"in options)?nativeMax(toNumber(options.maxWait)||0,wait):maxWait,trailing="trailing"in options?!!options.trailing:trailing),debounced.cancel=function cancel(){void 0!==timerId&&clearTimeout(timerId),lastInvokeTime=0,lastArgs=lastCallTime=lastThis=timerId=void 0},debounced.flush=function flush(){return void 0===timerId?result:trailingEdge(now())},debounced}},"./node_modules/lodash/now.js":(module,__unused_webpack_exports,__webpack_require__)=>{var root=__webpack_require__("./node_modules/lodash/_root.js");module.exports=function(){return root.Date.now()}},"./node_modules/lodash/toNumber.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseTrim=__webpack_require__("./node_modules/lodash/_baseTrim.js"),isObject=__webpack_require__("./node_modules/lodash/isObject.js"),isSymbol=__webpack_require__("./node_modules/lodash/isSymbol.js"),reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;module.exports=function toNumber(value){if("number"==typeof value)return value;if(isSymbol(value))return NaN;if(isObject(value)){var other="function"==typeof value.valueOf?value.valueOf():value;value=isObject(other)?other+"":other}if("string"!=typeof value)return 0===value?value:+value;value=baseTrim(value);var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NaN:+value}},"./node_modules/rc-util/es/pickAttrs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>pickAttrs});var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),propList="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/),ariaPrefix="aria-",dataPrefix="data-";function match(key,prefix){return 0===key.indexOf(prefix)}function pickAttrs(props){var mergedConfig,ariaOnly=arguments.length>1&&void 0!==arguments[1]&&arguments[1];mergedConfig=!1===ariaOnly?{aria:!0,data:!0,attr:!0}:!0===ariaOnly?{aria:!0}:(0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.A)({},ariaOnly);var attrs={};return Object.keys(props).forEach((function(key){(mergedConfig.aria&&("role"===key||match(key,ariaPrefix))||mergedConfig.data&&match(key,dataPrefix)||mergedConfig.attr&&propList.includes(key))&&(attrs[key]=props[key])})),attrs}},"./node_modules/uuid/dist/esm-browser/v4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>esm_browser_v4});const esm_browser_native={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};var getRandomValues,rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&!(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}for(var byteToHex=[],i=0;i<256;++i)byteToHex.push((i+256).toString(16).slice(1));function unsafeStringify(arr,offset=0){return(byteToHex[arr[offset+0]]+byteToHex[arr[offset+1]]+byteToHex[arr[offset+2]]+byteToHex[arr[offset+3]]+"-"+byteToHex[arr[offset+4]]+byteToHex[arr[offset+5]]+"-"+byteToHex[arr[offset+6]]+byteToHex[arr[offset+7]]+"-"+byteToHex[arr[offset+8]]+byteToHex[arr[offset+9]]+"-"+byteToHex[arr[offset+10]]+byteToHex[arr[offset+11]]+byteToHex[arr[offset+12]]+byteToHex[arr[offset+13]]+byteToHex[arr[offset+14]]+byteToHex[arr[offset+15]]).toLowerCase()}const esm_browser_v4=function v4(options,buf,offset){if(esm_browser_native.randomUUID&&!buf&&!options)return esm_browser_native.randomUUID();var rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf){offset=offset||0;for(var i=0;i<16;++i)buf[offset+i]=rnds[i];return buf}return unsafeStringify(rnds)}}}]);