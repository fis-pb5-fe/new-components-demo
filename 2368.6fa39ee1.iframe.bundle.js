"use strict";(self.webpackChunkreact_components_design_system=self.webpackChunkreact_components_design_system||[]).push([[2368],{"./node_modules/@carbon/icons-react/es/Icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.indexOf(n)>=0)continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}__webpack_require__.d(__webpack_exports__,{A:()=>Icon});var _excluded=["width","height","viewBox"],_excluded2=["tabindex"],defaultAttributes={focusable:"false",preserveAspectRatio:"xMidYMid meet"};function getAttributes(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},width=_ref.width,height=_ref.height,_ref$viewBox=_ref.viewBox,viewBox=void 0===_ref$viewBox?"0 0 ".concat(width," ").concat(height):_ref$viewBox,attributes=_objectWithoutProperties(_ref,_excluded),tabindex=attributes.tabindex,rest=_objectWithoutProperties(attributes,_excluded2),iconAttributes=_objectSpread2(_objectSpread2(_objectSpread2({},defaultAttributes),rest),{},{width,height,viewBox});return iconAttributes["aria-label"]||iconAttributes["aria-labelledby"]||iconAttributes.title?(iconAttributes.role="img",null!=tabindex&&(iconAttributes.focusable="true",iconAttributes.tabindex=tabindex)):iconAttributes["aria-hidden"]=!0,iconAttributes}var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react=__webpack_require__("./node_modules/react/index.js");const Icon=react.forwardRef((function Icon(_ref,ref){let{className,children,tabIndex,xmlns="http://www.w3.org/2000/svg",preserveAspectRatio="xMidYMid meet",...rest}=_ref;const{tabindex,...attrs}=getAttributes({...rest,tabindex:tabIndex}),props=attrs;return className&&(props.className=className),null!=tabindex&&(props.tabIndex="number"==typeof tabindex?tabindex:Number(tabIndex)),ref&&(props.ref=ref),xmlns&&(props.xmlns=xmlns),preserveAspectRatio&&(props.preserveAspectRatio=preserveAspectRatio),react.createElement("svg",props,children)}));Icon.displayName="Icon",Icon.propTypes={"aria-hidden":prop_types_default().oneOfType([prop_types_default().bool,prop_types_default().oneOf(["true","false"])]),"aria-label":prop_types_default().string,"aria-labelledby":prop_types_default().string,children:prop_types_default().node,className:prop_types_default().string,height:prop_types_default().oneOfType([prop_types_default().number,prop_types_default().string]),preserveAspectRatio:prop_types_default().string,tabIndex:prop_types_default().oneOfType([prop_types_default().number,prop_types_default().string]),viewBox:prop_types_default().string,width:prop_types_default().oneOfType([prop_types_default().number,prop_types_default().string]),xmlns:prop_types_default().string}},"./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.XA,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.zE,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Sw},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise(((resolve,reject)=>{__webpack_require__.e(1294).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.d)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.kQ,{context,docsParameter}))),element))).then(resolve)}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.H)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DZ:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.DZ,Pd:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Pd,Tn:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Tn,VY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.VY,h1:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.h1,hE:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.hE,kL:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.kL,om:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.om,uY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.uY});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-R4NKYYJA.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/antd/es/_util/wave/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>wave});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),isVisible=__webpack_require__("./node_modules/rc-util/es/Dom/isVisible.js"),es_ref=__webpack_require__("./node_modules/rc-util/es/ref.js"),context=__webpack_require__("./node_modules/antd/es/config-provider/context.js"),reactNode=__webpack_require__("./node_modules/antd/es/_util/reactNode.js"),genStyleUtils=__webpack_require__("./node_modules/antd/es/theme/util/genStyleUtils.js");const genWaveStyle=token=>{const{componentCls,colorPrimary}=token;return{[componentCls]:{position:"absolute",background:"transparent",pointerEvents:"none",boxSizing:"border-box",color:`var(--wave-color, ${colorPrimary})`,boxShadow:"0 0 0 0 currentcolor",opacity:.2,"&.wave-motion-appear":{transition:[`box-shadow 0.4s ${token.motionEaseOutCirc}`,`opacity 2s ${token.motionEaseOutCirc}`].join(","),"&-active":{boxShadow:"0 0 0 6px currentcolor",opacity:0},"&.wave-quick":{transition:[`box-shadow ${token.motionDurationSlow} ${token.motionEaseInOut}`,`opacity ${token.motionDurationSlow} ${token.motionEaseInOut}`].join(",")}}}}},style=(0,genStyleUtils.Or)("Wave",(token=>[genWaveStyle(token)]));var es=__webpack_require__("./node_modules/rc-util/es/index.js"),raf=__webpack_require__("./node_modules/rc-util/es/raf.js"),useToken=__webpack_require__("./node_modules/antd/es/theme/useToken.js"),wave_interface=__webpack_require__("./node_modules/antd/es/_util/wave/interface.js"),rc_motion_es=__webpack_require__("./node_modules/rc-motion/es/index.js"),render=__webpack_require__("./node_modules/rc-util/es/React/render.js");function isValidWaveColor(color){return color&&"#fff"!==color&&"#ffffff"!==color&&"rgb(255, 255, 255)"!==color&&"rgba(255, 255, 255, 1)"!==color&&function isNotGrey(color){const match=(color||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return!(match&&match[1]&&match[2]&&match[3]&&match[1]===match[2]&&match[2]===match[3])}(color)&&!/rgba\((?:\d*, ){3}0\)/.test(color)&&"transparent"!==color}function validateNum(value){return Number.isNaN(value)?0:value}const WaveEffect=props=>{const{className,target,component}=props,divRef=react.useRef(null),[color,setWaveColor]=react.useState(null),[borderRadius,setBorderRadius]=react.useState([]),[left,setLeft]=react.useState(0),[top,setTop]=react.useState(0),[width,setWidth]=react.useState(0),[height,setHeight]=react.useState(0),[enabled,setEnabled]=react.useState(!1),waveStyle={left,top,width,height,borderRadius:borderRadius.map((radius=>`${radius}px`)).join(" ")};function syncPos(){const nodeStyle=getComputedStyle(target);setWaveColor(function getTargetWaveColor(node){const{borderTopColor,borderColor,backgroundColor}=getComputedStyle(node);return isValidWaveColor(borderTopColor)?borderTopColor:isValidWaveColor(borderColor)?borderColor:isValidWaveColor(backgroundColor)?backgroundColor:null}(target));const isStatic="static"===nodeStyle.position,{borderLeftWidth,borderTopWidth}=nodeStyle;setLeft(isStatic?target.offsetLeft:validateNum(-parseFloat(borderLeftWidth))),setTop(isStatic?target.offsetTop:validateNum(-parseFloat(borderTopWidth))),setWidth(target.offsetWidth),setHeight(target.offsetHeight);const{borderTopLeftRadius,borderTopRightRadius,borderBottomLeftRadius,borderBottomRightRadius}=nodeStyle;setBorderRadius([borderTopLeftRadius,borderTopRightRadius,borderBottomRightRadius,borderBottomLeftRadius].map((radius=>validateNum(parseFloat(radius)))))}if(color&&(waveStyle["--wave-color"]=color),react.useEffect((()=>{if(target){const id=(0,raf.A)((()=>{syncPos(),setEnabled(!0)}));let resizeObserver;return"undefined"!=typeof ResizeObserver&&(resizeObserver=new ResizeObserver(syncPos),resizeObserver.observe(target)),()=>{raf.A.cancel(id),null==resizeObserver||resizeObserver.disconnect()}}}),[]),!enabled)return null;const isSmallComponent=("Checkbox"===component||"Radio"===component)&&(null==target?void 0:target.classList.contains(wave_interface.D));return react.createElement(rc_motion_es.Ay,{visible:!0,motionAppear:!0,motionName:"wave-motion",motionDeadline:5e3,onAppearEnd:(_,event)=>{var _a;if(event.deadline||"opacity"===event.propertyName){const holder=null===(_a=divRef.current)||void 0===_a?void 0:_a.parentElement;(0,render.v)(holder).then((()=>{null==holder||holder.remove()}))}return!1}},((_ref,ref)=>{let{className:motionClassName}=_ref;return react.createElement("div",{ref:(0,es_ref.K4)(divRef,ref),className:classnames_default()(className,motionClassName,{"wave-quick":isSmallComponent}),style:waveStyle})}))},wave_WaveEffect=(target,info)=>{var _a;const{component}=info;if("Checkbox"===component&&!(null===(_a=target.querySelector("input"))||void 0===_a?void 0:_a.checked))return;const holder=document.createElement("div");holder.style.position="absolute",holder.style.left="0px",holder.style.top="0px",null==target||target.insertBefore(holder,null==target?void 0:target.firstChild),(0,render.X)(react.createElement(WaveEffect,Object.assign({},info,{target})),holder)},wave_useWave=(nodeRef,className,component)=>{const{wave}=react.useContext(context.QO),[,token,hashId]=(0,useToken.Ay)(),showWave=(0,es._q)((event=>{const node=nodeRef.current;if((null==wave?void 0:wave.disabled)||!node)return;const targetNode=node.querySelector(`.${wave_interface.D}`)||node,{showEffect}=wave||{};(showEffect||wave_WaveEffect)(targetNode,{className,token,component,event,hashId})})),rafId=react.useRef();return event=>{raf.A.cancel(rafId.current),rafId.current=(0,raf.A)((()=>{showWave(event)}))}};const wave=props=>{const{children,disabled,component}=props,{getPrefixCls}=(0,react.useContext)(context.QO),containerRef=(0,react.useRef)(null),prefixCls=getPrefixCls("wave"),[,hashId]=style(prefixCls),showWave=wave_useWave(containerRef,classnames_default()(prefixCls,hashId),component);if(react.useEffect((()=>{const node=containerRef.current;if(!node||1!==node.nodeType||disabled)return;const onClick=e=>{!(0,isVisible.A)(e.target)||!node.getAttribute||node.getAttribute("disabled")||node.disabled||node.className.includes("disabled")||node.className.includes("-leave")||showWave(e)};return node.addEventListener("click",onClick,!0),()=>{node.removeEventListener("click",onClick,!0)}}),[disabled]),!react.isValidElement(children))return null!=children?children:null;const ref=(0,es_ref.f3)(children)?(0,es_ref.K4)(children.ref,containerRef):containerRef;return(0,reactNode.Ob)(children,{ref})}},"./node_modules/antd/es/_util/wave/interface.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>TARGET_CLS});const TARGET_CLS=`${__webpack_require__("./node_modules/antd/es/config-provider/context.js").yH}-wave-target`},"./node_modules/antd/es/config-provider/DisabledContext.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,X:()=>DisabledContextProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const DisabledContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(!1),DisabledContextProvider=_ref=>{let{children,disabled}=_ref;const originDisabled=react__WEBPACK_IMPORTED_MODULE_0__.useContext(DisabledContext);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(DisabledContext.Provider,{value:null!=disabled?disabled:originDisabled},children)},__WEBPACK_DEFAULT_EXPORT__=DisabledContext},"./node_modules/antd/es/config-provider/hooks/useCSSVarCls.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _theme_internal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/antd/es/theme/useToken.js");const __WEBPACK_DEFAULT_EXPORT__=prefixCls=>{const[,,,,cssVar]=(0,_theme_internal__WEBPACK_IMPORTED_MODULE_0__.Ay)();return cssVar?`${prefixCls}-css-var`:""}},"./node_modules/rc-checkbox/es/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rc-util/es/hooks/useMergedState.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_excluded=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"];const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((function(props,ref){var _props$prefixCls=props.prefixCls,prefixCls=void 0===_props$prefixCls?"rc-checkbox":_props$prefixCls,className=props.className,style=props.style,checked=props.checked,disabled=props.disabled,_props$defaultChecked=props.defaultChecked,defaultChecked=void 0!==_props$defaultChecked&&_props$defaultChecked,_props$type=props.type,type=void 0===_props$type?"checkbox":_props$type,title=props.title,onChange=props.onChange,inputProps=(0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__.A)(props,_excluded),inputRef=(0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),holderRef=(0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),_useMergedState=(0,rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_1__.A)(defaultChecked,{value:checked}),_useMergedState2=(0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.A)(_useMergedState,2),rawValue=_useMergedState2[0],setRawValue=_useMergedState2[1];(0,react__WEBPACK_IMPORTED_MODULE_2__.useImperativeHandle)(ref,(function(){return{focus:function focus(options){var _inputRef$current;null===(_inputRef$current=inputRef.current)||void 0===_inputRef$current||_inputRef$current.focus(options)},blur:function blur(){var _inputRef$current2;null===(_inputRef$current2=inputRef.current)||void 0===_inputRef$current2||_inputRef$current2.blur()},input:inputRef.current,nativeElement:holderRef.current}}));var classString=classnames__WEBPACK_IMPORTED_MODULE_0___default()(prefixCls,className,(0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__.A)((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__.A)({},"".concat(prefixCls,"-checked"),rawValue),"".concat(prefixCls,"-disabled"),disabled));return react__WEBPACK_IMPORTED_MODULE_2__.createElement("span",{className:classString,title,style,ref:holderRef},react__WEBPACK_IMPORTED_MODULE_2__.createElement("input",(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.A)({},inputProps,{className:"".concat(prefixCls,"-input"),ref:inputRef,onChange:function handleChange(e){disabled||("checked"in props||setRawValue(e.target.checked),null==onChange||onChange({target:(0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__.A)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__.A)({},props),{},{type,checked:e.target.checked}),stopPropagation:function stopPropagation(){e.stopPropagation()},preventDefault:function preventDefault(){e.preventDefault()},nativeEvent:e.nativeEvent}))},disabled,checked:!!rawValue,type})),react__WEBPACK_IMPORTED_MODULE_2__.createElement("span",{className:"".concat(prefixCls,"-inner")}))}))},"./node_modules/rc-util/es/React/render.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var react_dom__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{X:()=>render,v:()=>unmount});var createRoot,_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js"),_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react_dom__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-dom/index.js"),fullClone=(0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.A)({},react_dom__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react_dom__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react_dom__WEBPACK_IMPORTED_MODULE_0__,2))),version=fullClone.version,reactRender=fullClone.render,unmountComponentAtNode=fullClone.unmountComponentAtNode;try{Number((version||"").split(".")[0])>=18&&(createRoot=fullClone.createRoot)}catch(e){}function toggleWarning(skip){var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fullClone.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED&&"object"===(0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__.A)(__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)&&(__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint=skip)}var MARK="__rc_react_root__";function render(node,container){createRoot?function modernRender(node,container){toggleWarning(!0);var root=container[MARK]||createRoot(container);toggleWarning(!1),root.render(node),container[MARK]=root}(node,container):function legacyRender(node,container){reactRender(node,container)}(node,container)}function modernUnmount(_x){return _modernUnmount.apply(this,arguments)}function _modernUnmount(){return(_modernUnmount=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.A)((0,_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_4__.A)().mark((function _callee(container){return(0,_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_4__.A)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.abrupt("return",Promise.resolve().then((function(){var _container$MARK;null===(_container$MARK=container[MARK])||void 0===_container$MARK||_container$MARK.unmount(),delete container[MARK]})));case 1:case"end":return _context.stop()}}),_callee)})))).apply(this,arguments)}function legacyUnmount(container){unmountComponentAtNode(container)}function unmount(_x2){return _unmount.apply(this,arguments)}function _unmount(){return(_unmount=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.A)((0,_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_4__.A)().mark((function _callee2(container){return(0,_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_4__.A)().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(void 0===createRoot){_context2.next=2;break}return _context2.abrupt("return",modernUnmount(container));case 2:legacyUnmount(container);case 3:case"end":return _context2.stop()}}),_callee2)})))).apply(this,arguments)}}}]);