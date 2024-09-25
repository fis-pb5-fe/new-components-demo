"use strict";(self.webpackChunkreact_components_design_system=self.webpackChunkreact_components_design_system||[]).push([[4021],{"./src/components/Input/DateRange/DateRange.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Input_DateRange_DateRange});var date_picker=__webpack_require__("./node_modules/antd/es/date-picker/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),config_enum=__webpack_require__("./src/config/enum.ts"),react=__webpack_require__("./node_modules/react/index.js"),common_service=__webpack_require__("./src/services/common-service.ts"),bucket_1=__webpack_require__("./node_modules/@carbon/icons-react/es/generated/bucket-1.js"),bucket_3=__webpack_require__("./node_modules/@carbon/icons-react/es/generated/bucket-3.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),DateRange=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Input/DateRange/DateRange.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(DateRange.A,options);DateRange.A&&DateRange.A.locals&&DateRange.A.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const{RangePicker}=date_picker.A;function SuffixDateIcon(){return(0,jsx_runtime.jsx)("span",{className:classnames_default()("date-range__icon"),children:(0,jsx_runtime.jsx)(bucket_1.Vv,{size:16})})}function DateRange_DateRange_DateRange(props){const{value,dateFormat,onChange,typeCustomDate,label,isRequired,action,isSmall,disabled,placeholder,className,getPopupContainer,dropdownClassName,bgColor}=props,wrapperRef=react.useRef(null),dateRef=react.useRef(),internalValue=react.useMemo((()=>["string"==typeof value[0]?common_service.h.toDayjsDate(value[0]):value[0],"string"==typeof value[1]?common_service.h.toDayjsDate(value[1]):value[1]]),[value]),handleClearDate=react.useCallback((event=>{event.stopPropagation(),onChange([void 0,void 0])}),[onChange]);return(0,jsx_runtime.jsxs)("div",{className:classnames_default()("date-range__wrapper",className),ref:wrapperRef,children:[(0,jsx_runtime.jsxs)("div",{className:"date-range__label m-b--3xs",children:[typeCustomDate!==config_enum.qi.FLOAT_LABEL&&label&&(0,jsx_runtime.jsxs)("label",{className:classnames_default()("component__title",{"component__title--disabled":disabled}),children:[label,isRequired&&(0,jsx_runtime.jsx)("span",{className:"text-danger",children:" *"})]}),(0,jsx_runtime.jsx)("span",{style:{width:"100%"}}),action&&(0,jsx_runtime.jsx)("span",{className:"m-l--3xs body-text--md color-link",style:{cursor:"pointer"},onClick:action.action,children:action.name})]}),(0,jsx_runtime.jsxs)("div",{className:"date-range__container",children:[(0,jsx_runtime.jsx)(RangePicker,{...props,value:internalValue,style:{width:"100%"},allowClear:!1,format:dateFormat,placeholder,suffixIcon:(0,jsx_runtime.jsx)(SuffixDateIcon,{}),className:classnames_default()({"p-y--2xs":isSmall,"p-x--xs":isSmall,"p--xs":!isSmall,"date-range--sm":isSmall,"date-range--white":"white"===bgColor,"date-range--material":typeCustomDate===config_enum.qi.MATERIAL,"date-picker--bordered":typeCustomDate===config_enum.qi.BORDERED,"date-range--disabled ":disabled,"date-range--float":typeCustomDate===config_enum.qi.FLOAT_LABEL}),getPopupContainer,ref:dateRef,dropdownClassName}),typeCustomDate===config_enum.qi.FLOAT_LABEL&&label&&(0,jsx_runtime.jsxs)("label",{id:"component__title-id",className:classnames_default()("component__title component__title--normal",{"component__title--sm":isSmall,"component__title-up":internalValue&&internalValue?.length>0&&internalValue[0]}),children:[label,isRequired&&(0,jsx_runtime.jsx)("span",{className:"text-danger",children:" *"})]}),internalValue[0]&&!disabled&&(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("span",{className:classnames_default()("date-range__icon-wrapper",{"date-range__icon-wrapper--material":typeCustomDate===config_enum.qi.MATERIAL},{"date-range__icon-wrapper--disabled":disabled},{"date-range__icon-wrapper--sm":isSmall}),children:(0,jsx_runtime.jsx)(bucket_3.R9,{size:16,className:classnames_default()("date-range__icon-clear","m-l--2xs"),onClick:handleClearDate})})})]})]})}SuffixDateIcon.displayName="SuffixDateIcon",DateRange_DateRange_DateRange.displayName="DateRange",DateRange_DateRange_DateRange.defaultProps={dateFormat:["DD/MM/YYYY","YYYY/MM/DD"],label:"",isSmall:!1,typeCustomDate:config_enum.qi.BORDERED,isRequired:!1,disabled:!1,className:""};const Input_DateRange_DateRange=DateRange_DateRange_DateRange;try{DateRange_DateRange_DateRange.displayName="DateRange",DateRange_DateRange_DateRange.__docgenInfo={description:"",displayName:"DateRange",props:{label:{defaultValue:{value:""},description:"Label for current field",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"User-selected values",name:"value",required:!1,type:{name:"[Dayjs, Dayjs] & RangeValueType<Dayjs>"}},dateFormat:{defaultValue:{value:'["DD/MM/YYYY", "YYYY/MM/DD"]'},description:"Use to format the date selected",name:"dateFormat",required:!1,type:{name:"string[]"}},onChange:{defaultValue:null,description:"Handle the change value of the component",name:"onChange",required:!1,type:{name:"((value: [Dayjs, Dayjs], dateString?: [string, string]) => void) & ((dates: NoUndefinedRangeValueType<Dayjs>, dateStrings: [string, string]) => void)"}},typeCustomDate:{defaultValue:{value:"BORDER_TYPE.BORDERED"},description:"Control the style type of component: MATERIAL, BORDERED, FLOAT_LABEL",name:"typeCustomDate",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"}]}},isSmall:{defaultValue:{value:"false"},description:"Control the size of the component",name:"isSmall",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Not allow to handle change the component",name:"disabled",required:!1,type:{name:"boolean & (boolean | [boolean, boolean])"}},isRequired:{defaultValue:{value:"false"},description:"Show * as required field",name:"isRequired",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Use to custom style the component",name:"className",required:!1,type:{name:"string"}},action:{defaultValue:null,description:"Provide a custom action (onClick) to the component",name:"action",required:!1,type:{name:"DateRangeAction"}},placeholder:{defaultValue:null,description:"Placeholder of the component",name:"placeholder",required:!1,type:{name:"[string, string]"}},getPopupContainer:{defaultValue:null,description:"Return element Popup container",name:"getPopupContainer",required:!1,type:{name:"(() => HTMLElement) & ((node: HTMLElement) => HTMLElement)"}},dropdownClassName:{defaultValue:null,description:"Pass className to style for dropdown\n@deprecated `dropdownClassName` is deprecated which will be removed in next major\nversion.Please use `popupClassName` instead.",name:"dropdownClassName",required:!1,type:{name:"any"}},bgColor:{defaultValue:null,description:'Custom background color for component: "white" || "gray"',name:"bgColor",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"gray"'}]}},disabledTime:{defaultValue:null,description:"",name:"disabledTime",required:!1,type:{name:'(date: Dayjs, range: "start" | "end", info: { from?: Dayjs; }) => DisabledTimes'}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"PickerLocale"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"middle"'},{value:'"large"'}]}},bordered:{defaultValue:null,description:"@deprecated Use `variant` instead",name:"bordered",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"error"'},{value:'"warning"'}]}},variant:{defaultValue:{value:'"outlined"'},description:"@since 5.13.0",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outlined"'},{value:'"borderless"'},{value:'"filled"'}]}},popupClassName:{defaultValue:null,description:"",name:"popupClassName",required:!1,type:{name:"string"}},rootClassName:{defaultValue:null,description:"",name:"rootClassName",required:!1,type:{name:"string"}},popupStyle:{defaultValue:null,description:"",name:"popupStyle",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/DateRange/DateRange.tsx#DateRange"]={docgenInfo:DateRange_DateRange_DateRange.__docgenInfo,name:"DateRange",path:"src/components/Input/DateRange/DateRange.tsx#DateRange"})}catch(__react_docgen_typescript_loader_error){}},"./src/services/common-service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>CommonService});var react=__webpack_require__("./node_modules/react/index.js"),Subscription=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscription.js");class TreeNode{constructor(value){value?(this.key=value.id,this.item={...value},this.children=[],this.title=value.name,this.disabled=value.disabled):(this.title="",this.key=null,this.children=[],this.item={},this.disabled=!1)}}var dayjs_min=__webpack_require__("./node_modules/dayjs/dayjs.min.js"),dayjs_min_default=__webpack_require__.n(dayjs_min);const CommonService={useSubscription(){const subscription=react.useRef(new Subscription.yU).current;return react.useEffect((function(){return function cleanup(){subscription.unsubscribe()}}),[subscription]),[subscription]},useClickOutside(ref,callback){const handleClickOutside=react.useCallback((event=>{ref?.current&&!ref?.current?.contains(event.target)&&callback()}),[callback,ref]);react.useEffect((()=>(document.addEventListener("mousedown",handleClickOutside),function cleanup(){document.removeEventListener("mousedown",handleClickOutside)})),[callback,handleClickOutside,ref])},useClickOutsideMultiple(refFirst,ref,callback){const handleClickOutside=react.useCallback((event=>{refFirst?.current&&!refFirst?.current?.contains(event.target)&&(ref.current&&ref.current.contains(event.target)||callback())}),[callback,ref,refFirst]);react.useEffect((()=>(document.addEventListener("mousedown",handleClickOutside),function cleanup(){document.removeEventListener("mousedown",handleClickOutside)})),[callback,handleClickOutside,ref])},toDayjsDate:date=>dayjs_min_default()(date),isEmpty(obj){for(var key in obj)if(obj.hasOwnProperty(key))return!1;return!0},limitWord(input,max){if(input?.length>max){return(input=input.slice(0,max))+"..."}return input},useStateCallback(initialState){const[state,setState]=react.useState(initialState),cbRef=react.useRef(null),setStateCallback=react.useCallback(((state,cb)=>{cbRef.current=cb,setState(state)}),[]);return react.useEffect((()=>{cbRef.current&&(cbRef.current(state),cbRef.current=null)}),[state]),[state,setStateCallback]},uniqueArray:array=>array.reduce(((acc,current)=>acc.find((item=>item.id===current.id))?acc:acc.concat([current])),[]),arrayMove(arr,fromIndex,toIndex){var element=arr[fromIndex];arr.splice(fromIndex,1),arr.splice(toIndex,0,element)},buildTree(listItem,parent,keyNodes,tree){tree=void 0!==tree?tree:[],parent=void 0!==parent?parent:new TreeNode,keyNodes=void 0!==keyNodes?keyNodes:[];var children=listItem.filter((child=>child.parentId===parent.key)).map((currentItem=>new TreeNode(currentItem)));return children&&children.length&&(null===parent.key?tree=children:(parent.children=children,keyNodes.push(parent.key)),children.forEach((child=>{this.buildTree(listItem,child,keyNodes)}))),[tree,keyNodes]},listToTree(list){var node,i,map={},roots=[];for(i=0;i<list.length;i+=1)map[list[i].id]=i,list[i].children=[];for(i=0;i<list.length;i+=1)null!==(node=list[i]).parentId?list[map[node.parentId]].children.push(node):roots.push(node);return roots},setDisabledNode(nodeId,tree){var filteredNode=tree.filter((currentNode=>currentNode.key===nodeId))[0];if(filteredNode){let index=tree.indexOf(filteredNode);tree[index].disabled=!0,filteredNode.children&&filteredNode.children.length>0&&filteredNode.children.forEach((currentChildren=>{this.setDisabledNode(currentChildren.key,filteredNode.children)}))}else tree.forEach((currentTree=>{currentTree.children&&currentTree.children.length>0&&this.setDisabledNode(nodeId,currentTree.children)}))},setOnlySelectLeaf(tree){tree&&tree.length&&tree.forEach((currentNode=>{currentNode.item.hasChildren?(currentNode.disabled=!0,this.setOnlySelectLeaf(currentNode.children)):currentNode.disabled=!1}))}}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Input/DateRange/DateRange.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".date-range__wrapper{width:100%;position:relative}.date-range__wrapper .date-range__container{position:relative;width:100%}.date-range__wrapper .date-range__label{width:100%;display:flex;justify-content:space-between}.date-range__wrapper .date-range__label label{font-size:14px;color:var(--palette-base-neutral-7);white-space:nowrap}.date-range__wrapper .date-range__label .component__title--disabled{color:var(--palette-gray-40)}.date-range__wrapper .date-range__icon-wrapper{position:absolute;display:flex;height:1.5rem;width:2rem;top:.5rem;right:.5rem;box-sizing:border-box;background-color:var(--color-white);justify-content:flex-end;align-items:center}.date-range__wrapper .date-range__icon-wrapper.date-range__icon-wrapper--disabled{background-color:var(--palette-grayHover-10) !important}.date-range__wrapper .date-range__icon-wrapper.date-range__icon-wrapper--material{background-color:var(--palette-gray-10)}.date-range__wrapper .date-range__icon-wrapper.date-range__icon-wrapper--material .date-range__icon-clear:hover{cursor:pointer;opacity:.7}.date-range__wrapper .date-range__icon-wrapper.date-range__icon-wrapper--sm{top:.3rem !important}.date-range__wrapper .date-range__icon-wrapper .date-range__icon-clear{color:var(--palette-coolGray-50)}.date-range__wrapper .date-range__icon-wrapper .date-range__icon-clear:hover{cursor:pointer;color:var(--palette-coolGrayHover-50)}.date-range__wrapper .ant-picker{position:relative;display:flex;flex-direction:row;justify-content:center;align-items:center;width:100%;outline:1px solid var(--palette-base-neutral-4);border:none;height:40px;border-radius:0px;font-size:14px;background-color:#fff}.date-range__wrapper .ant-picker.date-picker--bordered{border-radius:2px}.date-range__wrapper .ant-picker .ant-picker-input input::placeholder{color:var(--palette-base-neutral-6)}.date-range__wrapper .ant-picker .ant-picker-input input:disabled::placeholder{color:var(--palette-base-neutral-6)}.date-range__wrapper .ant-picker:hover+.date-range__icon-wrapper--material,.date-range__wrapper .ant-picker:focus+.date-range__icon-wrapper--material{background-color:var(--palette-grayHover-10)}.date-range__wrapper .ant-picker:hover:not(.date-range--disabled){outline-color:var(--color-primary)}.date-range__wrapper .ant-picker:hover:not(.date-range--disabled)+.component__title{color:var(--color-primary)}.date-range__wrapper .ant-picker.date-range--disabled{outline-color:var(--palette-coolGray-30);background-color:var(--palette-gray-10)}.date-range__wrapper .ant-picker.date-range--disabled+.component__title{pointer-events:none}.date-range__wrapper .ant-picker.ant-picker--bordered{background-color:var(--color-white)}.date-range__wrapper .ant-picker.ant-picker-focused{box-shadow:none;outline:2px solid var(--color-primary)}.date-range__wrapper .ant-picker.date-range--sm{height:32px !important}.date-range__wrapper .ant-picker.date-range--white{background:var(--color-white)}.date-range__wrapper .ant-picker.date-range--white:hover+.date-range__icon-wrapper--material{background-color:var(--palette-grayHover-10)}.date-range__wrapper .ant-picker.date-range--float:hover:not(.date-range--disabled){outline-color:var(--palette-gray-100)}.date-range__wrapper .ant-picker.date-range--float:hover:not(.date-range--disabled)+.component__title{color:var(--palette-gray-100)}.date-range__wrapper .ant-picker.date-range--float.ant-picker-focused{box-shadow:none;outline:2px solid var(--color-primary)}.date-range__wrapper .ant-picker.date-range--float.ant-picker-focused+.component__title{color:var(--color-primary)}.date-range__wrapper .ant-picker.date-range--material{outline:none;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom:1px solid var(--palette-gray-50);margin-bottom:-1px}.date-range__wrapper .ant-picker.date-range--material .date-range-wrapper{background-color:var(--palette-gray-10)}.date-range__wrapper .ant-picker.date-range--material:hover{background-color:var(--palette-grayHover-10)}.date-range__wrapper .ant-picker.date-range--material.date-range--disabled{border-bottom:none;background-color:var(--palette-gray-10)}.date-range__wrapper .ant-picker.date-range--material.ant-picker-focused{border-bottom:none !important;box-shadow:none;outline:2px solid var(--color-primary)}.date-range__wrapper .date-range__container:has(.date-range--white){background-color:var(--color-white)}.date-range__wrapper .date-range__container:has(.date-range--white) .date-range__icon-wrapper--material{background-color:var(--color-white)}.date-range__wrapper .component__title--normal{position:absolute;color:var(--palette-gray-70);transition:all .1s ease-out;padding:0 4px;z-index:200;top:-1px;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;letter-spacing:.16px;left:8px;background-color:var(--color-white);transform:translateY(-50%) scale(0.9)}.form-item__container--error .date-range__icon-wrapper{background-color:var(--color-critical-blur)}.form-item__container--error .date-range--material+.date-range__icon-wrapper{background-color:var(--color-critical-blur) !important}.form-item__container--error .date-range--material+.date-range__icon-wrapper:hover{background-color:var(--palette-grayHover-10) !important}.form-item__container--error .date-range--material:hover+.date-range__icon-wrapper{background-color:var(--palette-grayHover-10) !important}.form-item__container--error .ant-picker.date-range--material{border-bottom:none}","",{version:3,sources:["webpack://./src/components/Input/DateRange/DateRange.scss"],names:[],mappings:"AACA,qBACE,UAAA,CACA,iBAAA,CAEA,4CACE,iBAAA,CACA,UAAA,CAGF,wCACE,UAAA,CACA,YAAA,CACA,6BAAA,CAEA,8CACE,cAAA,CACA,mCAAA,CACA,kBAAA,CAEF,oEACE,4BAAA,CAIJ,+CACE,iBAAA,CACA,YAAA,CACA,aAAA,CACA,UAAA,CACA,SAAA,CACA,WAAA,CACA,qBAAA,CACA,mCAAA,CACA,wBAAA,CACA,kBAAA,CACA,kFACE,uDAAA,CAEF,kFACE,uCAAA,CAEE,gHACE,cAAA,CACA,UAAA,CAIN,4EACE,oBAAA,CAGF,uEACE,gCAAA,CACA,6EACE,cAAA,CACA,qCAAA,CAKN,iCACE,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,kBAAA,CACA,UAAA,CACA,+CAAA,CACA,WAAA,CACA,WAAA,CACA,iBAAA,CACA,cAAA,CACA,qBAAA,CAEA,uDACE,iBAAA,CAKE,sEACE,mCAAA,CAEF,+EACE,mCAAA,CAOJ,sJACE,4CAAA,CAIJ,kEACE,kCAAA,CACA,oFACE,0BAAA,CAIJ,sDACE,wCAAA,CACA,uCAAA,CACA,wEACE,mBAAA,CAIJ,sDACE,mCAAA,CAGF,oDACE,eAAA,CACA,sCAAA,CAGF,gDACE,sBAAA,CAGF,mDACE,6BAAA,CAEE,6FACE,4CAAA,CAMJ,oFACE,qCAAA,CACA,sGACE,6BAAA,CAIJ,sEACE,eAAA,CACA,sCAAA,CACA,wFACE,0BAAA,CAKN,sDACE,YAAA,CACA,2BAAA,CACA,4BAAA,CACA,8CAAA,CACA,kBAAA,CACA,0EACE,uCAAA,CAEF,4DACE,4CAAA,CAEF,2EACE,kBAAA,CACA,uCAAA,CAEF,yEACE,6BAAA,CACA,eAAA,CACA,sCAAA,CAIN,oEACE,mCAAA,CACA,wGACE,mCAAA,CAGJ,+CACE,iBAAA,CACA,4BAAA,CACA,2BAAA,CACA,aAAA,CACA,WAAA,CACA,QAAA,CACA,iBAAA,CACA,kBAAA,CACA,cAAA,CACA,gBAAA,CACA,oBAAA,CACA,QAAA,CACA,mCAAA,CACA,qCAAA,CAKF,uDACE,2CAAA,CAEF,6EACE,sDAAA,CACA,mFACE,uDAAA,CAGJ,mFACE,uDAAA,CAEF,8DACE,kBAAA",sourcesContent:["/* Style for DatePicker.tsx */\r\n.date-range__wrapper {\r\n  width: 100%;\r\n  position: relative;\r\n\r\n  .date-range__container {\r\n    position: relative;\r\n    width: 100%;\r\n  }\r\n\r\n  .date-range__label {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n\r\n    label {\r\n      font-size: 14px;\r\n      color: var(--palette-base-neutral-7);\r\n      white-space: nowrap;\r\n    }\r\n    .component__title--disabled {\r\n      color: var(--palette-gray-40);\r\n    }\r\n  }\r\n\r\n  .date-range__icon-wrapper {\r\n    position: absolute;\r\n    display: flex;\r\n    height: 1.5rem;\r\n    width: 2rem;\r\n    top: 0.5rem;\r\n    right: 0.5rem;\r\n    box-sizing: border-box;\r\n    background-color: var(--color-white);\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    &.date-range__icon-wrapper--disabled {\r\n      background-color: var(--palette-grayHover-10) !important;\r\n    }\r\n    &.date-range__icon-wrapper--material {\r\n      background-color: var(--palette-gray-10);\r\n      .date-range__icon-clear {\r\n        &:hover {\r\n          cursor: pointer;\r\n          opacity: 0.7;\r\n        }\r\n      }\r\n    }\r\n    &.date-range__icon-wrapper--sm {\r\n      top: 0.3rem !important;\r\n    }\r\n\r\n    .date-range__icon-clear {\r\n      color: var(--palette-coolGray-50);\r\n      &:hover {\r\n        cursor: pointer;\r\n        color: var(--palette-coolGrayHover-50);\r\n      }\r\n    }\r\n  }\r\n\r\n  .ant-picker {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    outline: 1px solid var(--palette-base-neutral-4);\r\n    border: none;\r\n    height: 40px;\r\n    border-radius: 0px;\r\n    font-size: 14px;\r\n    background-color: #ffffff;\r\n\r\n    &.date-picker--bordered {\r\n      border-radius: 2px;\r\n    }\r\n\r\n    .ant-picker-input {\r\n      input {\r\n        &::placeholder {\r\n          color: var(--palette-base-neutral-6);\r\n        }\r\n        &:disabled::placeholder {\r\n          color: var(--palette-base-neutral-6);\r\n        }\r\n      }\r\n    }\r\n\r\n    &:hover,\r\n    &:focus {\r\n      & + .date-range__icon-wrapper--material {\r\n        background-color: var(--palette-grayHover-10);\r\n      }\r\n    }\r\n\r\n    &:hover:not(.date-range--disabled) {\r\n      outline-color: var(--color-primary);\r\n      & + .component__title {\r\n        color: var(--color-primary);\r\n      }\r\n    }\r\n\r\n    &.date-range--disabled {\r\n      outline-color: var(--palette-coolGray-30);\r\n      background-color: var(--palette-gray-10);\r\n      & + .component__title {\r\n        pointer-events: none;\r\n      }\r\n    }\r\n\r\n    &.ant-picker--bordered {\r\n      background-color: var(--color-white);\r\n    }\r\n\r\n    &.ant-picker-focused {\r\n      box-shadow: none;\r\n      outline: 2px solid var(--color-primary);\r\n    }\r\n\r\n    &.date-range--sm {\r\n      height: 32px !important;\r\n    }\r\n\r\n    &.date-range--white {\r\n      background: var(--color-white);\r\n      &:hover {\r\n        + .date-range__icon-wrapper--material {\r\n          background-color: var(--palette-grayHover-10);\r\n        }\r\n      }\r\n    }\r\n\r\n    &.date-range--float {\r\n      &:hover:not(.date-range--disabled) {\r\n        outline-color: var(--palette-gray-100);\r\n        & + .component__title {\r\n          color: var(--palette-gray-100);\r\n        }\r\n      }\r\n\r\n      &.ant-picker-focused {\r\n        box-shadow: none;\r\n        outline: 2px solid var(--color-primary);\r\n        & + .component__title {\r\n          color: var(--color-primary);\r\n        }\r\n      }\r\n    }\r\n\r\n    &.date-range--material {\r\n      outline: none;\r\n      border-bottom-left-radius: 0;\r\n      border-bottom-right-radius: 0;\r\n      border-bottom: 1px solid var(--palette-gray-50);\r\n      margin-bottom: -1px;\r\n      .date-range-wrapper {\r\n        background-color: var(--palette-gray-10);\r\n      }\r\n      &:hover {\r\n        background-color: var(--palette-grayHover-10);\r\n      }\r\n      &.date-range--disabled {\r\n        border-bottom: none;\r\n        background-color: var(--palette-gray-10);\r\n      }\r\n      &.ant-picker-focused {\r\n        border-bottom: none !important;\r\n        box-shadow: none;\r\n        outline: 2px solid var(--color-primary);\r\n      }\r\n    }\r\n  }\r\n  .date-range__container:has(.date-range--white) {\r\n    background-color: var(--color-white);\r\n    .date-range__icon-wrapper--material {\r\n      background-color: var(--color-white);\r\n    }\r\n  }\r\n  .component__title--normal {\r\n    position: absolute;\r\n    color: var(--palette-gray-70);\r\n    transition: all 0.1s ease-out;\r\n    padding: 0 4px;\r\n    z-index: 200;\r\n    top: -1px;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 14px;\r\n    line-height: 16px;\r\n    letter-spacing: 0.16px;\r\n    left: 8px;\r\n    background-color: var(--color-white);\r\n    transform: translateY(-50%) scale(0.9);\r\n  }\r\n}\r\n\r\n.form-item__container--error {\r\n  .date-range__icon-wrapper {\r\n    background-color: var(--color-critical-blur);\r\n  }\r\n  .date-range--material + .date-range__icon-wrapper {\r\n    background-color: var(--color-critical-blur) !important;\r\n    &:hover {\r\n      background-color: var(--palette-grayHover-10) !important;\r\n    }\r\n  }\r\n  .date-range--material:hover + .date-range__icon-wrapper {\r\n    background-color: var(--palette-grayHover-10) !important;\r\n  }\r\n  .ant-picker.date-range--material {\r\n    border-bottom: none;\r\n  }\r\n}\r\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);