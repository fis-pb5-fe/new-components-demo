"use strict";(self.webpackChunkreact_3layer_ui_components=self.webpackChunkreact_3layer_ui_components||[]).push([[7731],{"./src/components/AdvanceFilterMaster/AdvanceDateRangFilterMaster/AdvanceDateRangFilterMaster.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>AdvanceFilterMaster_AdvanceDateRangFilterMaster_AdvanceDateRangFilterMaster});var bucket_2=__webpack_require__("./node_modules/@carbon/icons-react/es/generated/bucket-2.js"),bucket_1=__webpack_require__("./node_modules/@carbon/icons-react/es/generated/bucket-1.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),DateRange=__webpack_require__("./src/components/Input/DateRange/DateRange.tsx"),InputSelect=__webpack_require__("./src/components/Input/InputSelect/index.ts"),config_enum=__webpack_require__("./src/config/enum.ts"),react=__webpack_require__("./node_modules/react/index.js"),common_service=(__webpack_require__("./node_modules/react-3layer-common/index.js"),__webpack_require__("./src/services/common-service.ts")),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),AdvanceDateRangFilterMaster=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/AdvanceFilterMaster/AdvanceDateRangFilterMaster/AdvanceDateRangFilterMaster.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(AdvanceDateRangFilterMaster.A,options);AdvanceDateRangFilterMaster.A&&AdvanceDateRangFilterMaster.A.locals&&AdvanceDateRangFilterMaster.A.locals;var quarterOfYear=__webpack_require__("./node_modules/dayjs/plugin/quarterOfYear.js"),quarterOfYear_default=__webpack_require__.n(quarterOfYear),isoWeek=__webpack_require__("./node_modules/dayjs/plugin/isoWeek.js"),isoWeek_default=__webpack_require__.n(isoWeek),dayjs_min=__webpack_require__("./node_modules/dayjs/dayjs.min.js"),dayjs_min_default=__webpack_require__.n(dayjs_min),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");dayjs_min_default().extend(quarterOfYear_default()),dayjs_min_default().extend(isoWeek_default());const list=[{id:1,name:"general.filter.today",code:"today"},{id:2,name:"general.filter.yesterday",code:"yesterday"},{id:3,name:"general.filter.thisWeek",code:"thisweek"},{id:4,name:"general.filter.lastWeek",code:"lastweek"},{id:5,name:"general.filter.thisMonth",code:"thismonth"},{id:6,name:"general.filter.lastMonth",code:"lastmonth"},{id:7,name:"general.filter.thisQuarter",code:"thisquarter"},{id:8,name:"general.filter.lastQuarter",code:"lastquarter"}];function AdvanceDateRangeFilterMaster(props){const{value,onChange,label,className,disabled,appendToBody,typeCustomDate,isSmall,activeItem,placeholder,type,inputType,placeHolderSelect,bgColor,translate}=props,[isExpand,setExpand]=react.useState(!1),[isExpandDate,setExpandDate]=react.useState(!1),wrapperRef=react.useRef(null),selectListRef=react.useRef(null),panelRef=react.useRef(null),listRef=react.useRef(null),[appendToBodyStyle,setAppendToBodyStyle]=react.useState({}),formatDateFilter=react.useCallback((item=>{if(item)switch(item.id){case 1:return[dayjs_min_default()().startOf("day"),dayjs_min_default()().endOf("day")];case 2:return[dayjs_min_default()().subtract(1,"day").startOf("day"),dayjs_min_default()().subtract(1,"day").endOf("day")];case 3:return[dayjs_min_default()().startOf("isoWeek"),dayjs_min_default()().endOf("isoWeek")];case 4:return[dayjs_min_default()().subtract(1,"weeks").startOf("isoWeek"),dayjs_min_default()().subtract(1,"weeks").endOf("isoWeek")];case 5:return[dayjs_min_default()().startOf("month"),dayjs_min_default()().endOf("month")];case 6:return[dayjs_min_default()().subtract(1,"months").startOf("month"),dayjs_min_default()().subtract(1,"months").endOf("month")];case 7:return[dayjs_min_default()().startOf("quarter"),dayjs_min_default()().endOf("quarter")];case 8:const lastQuarter=dayjs_min_default()().quarter()-1;var lastQuarterStartDate,lastQuarterEndDate;return lastQuarter?(lastQuarterStartDate=dayjs_min_default()().quarter(lastQuarter).startOf("quarter"),lastQuarterEndDate=dayjs_min_default()().quarter(lastQuarter).endOf("quarter")):(lastQuarterStartDate=dayjs_min_default()().subtract(1,"year").quarter(4).startOf("quarter"),lastQuarterEndDate=dayjs_min_default()().subtract(1,"year").quarter(4).endOf("quarter")),[lastQuarterStartDate,lastQuarterEndDate];default:return[null,null]}}),[]),internalValue=react.useMemo((()=>value&&value.length>0?["string"==typeof value[0]?common_service.h.toDayjsDate(value[0]):value[0],"string"==typeof value[1]?common_service.h.toDayjsDate(value[1]):value[1]]:[null,null]),[value]),handleChange=react.useCallback(((values,formatString)=>{onChange({id:9,name:"general.filter.customDate",code:"customdate"},[values[0]?.startOf("day"),values[1]?.endOf("day")])}),[onChange]),handleToggle=react.useCallback((async event=>{disabled||(setExpand(!0),setTimeout((()=>{listRef.current.focus()}),300))}),[disabled,listRef]),handleCloseAdvanceFilterMaster=react.useCallback((()=>{setExpand(!1),internalValue[0]||internalValue[1]||setExpandDate(!1)}),[internalValue]),handleClickItem=react.useCallback((item=>event=>{const values=formatDateFilter(item);onChange(item,values),handleCloseAdvanceFilterMaster()}),[formatDateFilter,handleCloseAdvanceFilterMaster,onChange]),handleClickCustomDate=react.useCallback((()=>{setExpandDate(!0)}),[]),handleGetRef=react.useCallback((()=>document.getElementsByClassName("date-range-master")),[]),handleOpenChange=react.useCallback((()=>{setTimeout((()=>{panelRef.current=handleGetRef()[0]}),100)}),[handleGetRef]),handleKeyDown=react.useCallback((event=>{switch(event.keyCode){case 40:selectListRef.current.firstElementChild.focus();break;case 9:handleCloseAdvanceFilterMaster();break;default:return}}),[handleCloseAdvanceFilterMaster]),handleMove=react.useCallback((item=>event=>{switch(event.keyCode){case 13:handleClickItem(item)(null);break;case 40:null!==event.target.nextElementSibling&&event.target.nextElementSibling.focus(),event.preventDefault();break;case 38:null!==event.target.previousElementSibling&&event.target.previousElementSibling.focus(),event.preventDefault()}}),[handleClickItem]);common_service.h.useClickOutsideMultiple(wrapperRef,panelRef,handleCloseAdvanceFilterMaster);const handleClearItem=react.useCallback((()=>{onChange(null,[null,null])}),[onChange]),renderItem=react.useCallback((currentItem=>currentItem?translate(currentItem?.name):null),[translate]);return react.useEffect((()=>{if(isExpand&&appendToBody){const currentPosition=wrapperRef.current.getBoundingClientRect(),spaceBelow=window.innerHeight-currentPosition.bottom;spaceBelow<=200?setTimeout((()=>{setAppendToBodyStyle({position:"fixed",bottom:spaceBelow+wrapperRef.current.clientHeight,left:currentPosition.left,maxWidth:wrapperRef.current.clientWidth})}),100):setAppendToBodyStyle({position:"fixed",top:currentPosition.top+wrapperRef.current.clientHeight,left:currentPosition.left,maxWidth:wrapperRef.current.clientWidth})}}),[appendToBody,isExpand]),(0,jsx_runtime.jsxs)("div",{className:classnames_default()("advance-date-range-filter-master__wrapper",className),ref:wrapperRef,children:[type===config_enum.fD.SHORT?(0,jsx_runtime.jsx)("div",{className:classnames_default()("advance-date-range-filter-master__container p-l--sm p-t--xs p-r--xs p-b--xs",{"filter-bg":isExpand,"p-b---active":value&&value?.length>0&&value[0]}),onClick:handleToggle,children:(0,jsx_runtime.jsx)("div",{className:classnames_default()({"filter-active":value&&value?.length>0&&value[0]}),children:(0,jsx_runtime.jsxs)("div",{className:"advance-date-range-filter-master__title",children:[(0,jsx_runtime.jsxs)("span",{className:"filter-title",children:[" ",label]}),(0,jsx_runtime.jsx)(bucket_2.yQ,{size:16})]})})}):(0,jsx_runtime.jsx)("div",{className:"select__input",onClick:handleToggle,children:(0,jsx_runtime.jsx)(InputSelect.A,{value:activeItem,placeHolder:placeHolderSelect,expanded:isExpand,disabled,onClear:handleClearItem,type:inputType,label,isSmall,onKeyDown:handleKeyDown,render:renderItem,bgColor,handlePressExpandedIcon:handleCloseAdvanceFilterMaster})}),isExpand&&(0,jsx_runtime.jsxs)("div",{id:"list-container",className:classnames_default()("date-range-filter-master__list-container",{"date-range-filter-master__list-border":type===config_enum.fD.SHORT,"":type===config_enum.fD.INPUT}),style:appendToBodyStyle,ref:listRef,children:[(0,jsx_runtime.jsx)("div",{className:"advance-date-range-master__list",ref:selectListRef,children:list.length>0&&list.map(((item,index)=>(0,jsx_runtime.jsx)("div",{className:classnames_default()("advance-date-range-filter__item p--xs",{"filter__item--selected":item?.id===activeItem?.id}),tabIndex:-1,onClick:handleClickItem(item),onKeyDown:handleMove(item),children:(0,jsx_runtime.jsx)("span",{className:"advance-date-range-filter__text",children:translate?translate(item?.name):item?.code})},index)))}),(0,jsx_runtime.jsxs)("div",{className:classnames_default()("date-range-master__prefer-option p--xs",{"date-range-master__bg-primary":9===activeItem?.id}),onClick:handleClickCustomDate,children:[(0,jsx_runtime.jsx)(bucket_1.Vv,{size:16}),(0,jsx_runtime.jsx)("span",{children:translate?translate("general.filter.customDate"):"Custom Date"})]}),isExpandDate&&(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(DateRange.A,{...props,label:"",typeCustomDate,isSmall,onChange:handleChange,value:internalValue,getPopupContainer:appendToBody?null:()=>document.getElementById("list-container"),placeholder,dropdownClassName:"date-range-master",onOpenChange:handleOpenChange})})]})]})}AdvanceDateRangeFilterMaster.displayName="AdvanceDateRangeFilterMaster",AdvanceDateRangeFilterMaster.defaultProps={dateFormat:["DD/MM/YYYY","YYYY/MM/DD"],placeholder:["Từ ngày","Đến ngày"],type:config_enum.fD.SHORT,placeHolderSelect:"",appendToBody:!1,bgColor:"white"};const AdvanceFilterMaster_AdvanceDateRangFilterMaster_AdvanceDateRangFilterMaster=AdvanceDateRangeFilterMaster;try{AdvanceDateRangeFilterMaster.displayName="AdvanceDateRangeFilterMaster",AdvanceDateRangeFilterMaster.__docgenInfo={description:"",displayName:"AdvanceDateRangeFilterMaster",props:{value:{defaultValue:null,description:"Value [fromDate, toDate] users select",name:"value",required:!1,type:{name:"[Dayjs, Dayjs] & RangeValueType<Dayjs>"}},dateFormat:{defaultValue:{value:'["DD/MM/YYYY", "YYYY/MM/DD"]'},description:"Use to format the date selected",name:"dateFormat",required:!1,type:{name:"string[]"}},onChange:{defaultValue:null,description:"Handle the change value of the component",name:"onChange",required:!1,type:{name:"((item?: any, value?: [Dayjs, Dayjs]) => void) & ((dates: NoUndefinedRangeValueType<Dayjs>, dateStrings: [string, string]) => void)"}},className:{defaultValue:null,description:"Use to custom style the component",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Not allow to handle change the component",name:"disabled",required:!1,type:{name:"boolean & (boolean | [boolean, boolean])"}},typeCustomDate:{defaultValue:null,description:"Prop of DateRange Component",name:"typeCustomDate",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"}]}},isSmall:{defaultValue:null,description:"Control the size of the component",name:"isSmall",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Label for current field",name:"label",required:!1,type:{name:"string"}},activeItem:{defaultValue:null,description:"Selected value of list value suggest",name:"activeItem",required:!1,type:{name:"any"}},type:{defaultValue:{value:"ADVANCE_DATE_RANGE_TYPE.SHORT"},description:"Control the type of component: SHORT, INPUT",name:"type",required:!1,type:{name:"never"}},inputType:{defaultValue:null,description:"Prop of component InputSelect",name:"inputType",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"}]}},placeHolderSelect:{defaultValue:{value:""},description:"Prop of component InputSelect",name:"placeHolderSelect",required:!1,type:{name:"string"}},appendToBody:{defaultValue:{value:"false"},description:"Append this component to body",name:"appendToBody",required:!1,type:{name:"boolean"}},translate:{defaultValue:null,description:"Provide a translate function",name:"translate",required:!1,type:{name:'TFunction<"translation", undefined> & ("yes" | "no")'}},placeholder:{defaultValue:{value:'["Từ ngày", "Đến ngày"]'},description:"Placeholder of the component",name:"placeholder",required:!1,type:{name:"[string, string]"}},bgColor:{defaultValue:{value:"white"},description:'Custom background color for component: "white" || "gray"',name:"bgColor",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"gray"'}]}},disabledTime:{defaultValue:null,description:"",name:"disabledTime",required:!1,type:{name:'(date: Dayjs, range: "start" | "end", info: { from?: Dayjs; }) => DisabledTimes'}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"PickerLocale"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"middle"'},{value:'"large"'}]}},bordered:{defaultValue:null,description:"@deprecated Use `variant` instead",name:"bordered",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"error"'},{value:'"warning"'}]}},variant:{defaultValue:{value:'"outlined"'},description:"@since 5.13.0",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outlined"'},{value:'"borderless"'},{value:'"filled"'}]}},dropdownClassName:{defaultValue:null,description:"@deprecated `dropdownClassName` is deprecated which will be removed in next major\nversion.Please use `popupClassName` instead.",name:"dropdownClassName",required:!1,type:{name:"string"}},popupClassName:{defaultValue:null,description:"",name:"popupClassName",required:!1,type:{name:"string"}},rootClassName:{defaultValue:null,description:"",name:"rootClassName",required:!1,type:{name:"string"}},popupStyle:{defaultValue:null,description:"",name:"popupStyle",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AdvanceFilterMaster/AdvanceDateRangFilterMaster/AdvanceDateRangFilterMaster.tsx#AdvanceDateRangeFilterMaster"]={docgenInfo:AdvanceDateRangeFilterMaster.__docgenInfo,name:"AdvanceDateRangeFilterMaster",path:"src/components/AdvanceFilterMaster/AdvanceDateRangFilterMaster/AdvanceDateRangFilterMaster.tsx#AdvanceDateRangeFilterMaster"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Input/InputSelect/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_InputSelect__WEBPACK_IMPORTED_MODULE_0__.A});var _InputSelect__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Input/InputSelect/InputSelect.tsx")},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/AdvanceFilterMaster/AdvanceDateRangFilterMaster/AdvanceDateRangFilterMaster.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".advance-date-range-filter-master__wrapper{position:relative;width:100%}.advance-date-range-filter-master__wrapper .advance-date-range-filter-master__container{width:fit-content;cursor:pointer}.advance-date-range-filter-master__wrapper .advance-date-range-filter-master__container.filter-bg{background-color:var(--palette-gray-30)}.advance-date-range-filter-master__wrapper .advance-date-range-filter-master__container.filter-bg:hover{background-color:var(--palette-gray-30)}.advance-date-range-filter-master__wrapper .advance-date-range-filter-master__container.p-b---active{padding-bottom:11px !important}.advance-date-range-filter-master__wrapper .advance-date-range-filter-master__container .filter-active{color:var(--color-primary)}.advance-date-range-filter-master__wrapper .advance-date-range-filter-master__container .filter-active span{border-bottom:1px solid var(--color-primary)}.advance-date-range-filter-master__wrapper .advance-date-range-filter-master__container:hover{background:#e5e5e5}.advance-date-range-filter-master__wrapper .advance-date-range-filter-master__container .filter__icon{font-size:16px}.advance-date-range-filter-master__wrapper .advance-date-range-filter-master__container .advance-date-range-filter-master__title{font-style:normal;font-weight:normal;font-size:14px;line-height:16px;display:flex;align-items:center;letter-spacing:.16px}.advance-date-range-filter-master__wrapper .advance-date-range-filter-master__container .advance-date-range-filter-master__title .filter-title{margin-right:7px}.advance-date-range-filter-master__wrapper .date-range__icon-wrapper{top:29% !important}.advance-date-range-filter-master__wrapper .date-range-filter-master__list-container{min-width:288px;width:100%;height:auto;position:absolute;z-index:999;margin-top:2px}.advance-date-range-filter-master__wrapper .date-range-filter-master__list-container.date-range-filter-master__list-border{border:2px solid var(--color-primary)}.advance-date-range-filter-master__wrapper .date-range-filter-master__list-container .advance-date-range-master__list{background-color:#f4f4f4;width:100%;overflow-y:auto;max-height:160px}.advance-date-range-filter-master__wrapper .date-range-filter-master__list-container .advance-date-range-filter__item{position:relative;display:flex;align-items:center;justify-content:space-between;font-size:14px;line-height:16px;cursor:pointer}.advance-date-range-filter-master__wrapper .date-range-filter-master__list-container .advance-date-range-filter__item:hover,.advance-date-range-filter-master__wrapper .date-range-filter-master__list-container .advance-date-range-filter__item:focus{background-color:#e5e5e5}.advance-date-range-filter-master__wrapper .date-range-filter-master__list-container .advance-date-range-filter__item:focus-visible{outline:none}.advance-date-range-filter-master__wrapper .date-range-filter-master__list-container .advance-date-range-filter__item.filter__item--selected{background-color:var(--palette-grayHover-10);display:flex;justify-content:space-between}.advance-date-range-filter-master__wrapper .date-range-filter-master__list-container .date-range-master__prefer-option{box-shadow:inset 0px 1px 0px #e1e3e5;background:#f4f4f4;font-style:normal;font-weight:normal;display:flex;align-items:center;line-height:16px;display:flex;align-items:center;letter-spacing:.32px;color:var(--color-primary);cursor:pointer}.advance-date-range-filter-master__wrapper .date-range-filter-master__list-container .date-range-master__prefer-option span{font-size:14px;line-height:16px;margin-left:6px}.advance-date-range-filter-master__wrapper .date-range-filter-master__list-container .date-range-master__prefer-option i{font-size:14px}.advance-date-range-filter-master__wrapper .date-range-filter-master__list-container .date-range-master__prefer-option:hover,.advance-date-range-filter-master__wrapper .date-range-filter-master__list-container .date-range-master__prefer-option:focus{background-color:var(--color-primary);color:var(--color-white)}.advance-date-range-filter-master__wrapper .date-range-filter-master__list-container .date-range-master__prefer-option.date-range-master__bg-primary{background-color:var(--color-primary);color:var(--color-white)}.advance-date-range-filter-master__wrapper .date-range-filter-master__list-container .advance-date-range-filter__text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.advance-date-range-filter-master__wrapper .date-range-filter-master__list-container .ant-picker--material{padding:1rem !important;border-radius:0 !important;border-bottom:1px solid var(--color-border);background:none !important;box-shadow:none !important}.advance-date-range-filter-master__wrapper .date-range-filter-master__list-container .ant-picker--material:hover,.advance-date-range-filter-master__wrapper .date-range-filter-master__list-container .ant-picker--material:focus{border-bottom:2px solid !important}.advance-date-range-filter-master__wrapper .date-range__wrapper.ant-picker{width:288px}","",{version:3,sources:["webpack://./src/components/AdvanceFilterMaster/AdvanceDateRangFilterMaster/AdvanceDateRangFilterMaster.scss"],names:[],mappings:"AAEA,2CACI,iBAAA,CACA,UAAA,CACA,wFACI,iBAAA,CACA,cAAA,CACA,kGACI,uCAAA,CACA,wGACI,uCAAA,CAIR,qGACI,8BAAA,CAEJ,uGACI,0BAAA,CACA,4GACI,4CAAA,CAGR,8FACI,kBAAA,CAEJ,sGACI,cAAA,CAEJ,iIACI,iBAAA,CACA,kBAAA,CACA,cAAA,CACA,gBAAA,CACA,YAAA,CACA,kBAAA,CACA,oBAAA,CACA,+IACI,gBAAA,CAIZ,qEACI,kBAAA,CAGJ,qFACI,eAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,WAAA,CACA,cAAA,CACA,2HACI,qCAAA,CAGJ,sHACI,wBA3DM,CA4DN,UAAA,CACA,eAAA,CACA,gBAAA,CAGJ,sHACI,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,cAAA,CACA,gBAAA,CACA,cAAA,CACA,wPAEI,wBAAA,CAEJ,oIACI,YAAA,CAEJ,6IACI,4CAAA,CACA,YAAA,CACA,6BAAA,CAIR,uHACI,oCAAA,CACA,kBAzFM,CA0FN,iBAAA,CACA,kBAAA,CACA,YAAA,CACA,kBAAA,CACA,gBAAA,CACA,YAAA,CACA,kBAAA,CACA,oBAAA,CACA,0BAAA,CACA,cAAA,CACA,4HACI,cAAA,CACA,gBAAA,CACA,eAAA,CAEJ,yHACI,cAAA,CAIJ,0PAEI,qCAAA,CACA,wBAAA,CAEJ,qJACI,qCAAA,CACA,wBAAA,CAGR,sHACI,kBAAA,CACA,eAAA,CACA,sBAAA,CAGJ,2GACI,uBAAA,CACA,0BAAA,CACA,2CAAA,CACA,0BAAA,CACA,0BAAA,CACA,kOAEI,kCAAA,CAKR,2EACI,WAAA",sourcesContent:["$backgound-color: #f4f4f4;\r\n/* Style for DatePicker.tsx */\r\n.advance-date-range-filter-master__wrapper {\r\n    position: relative;\r\n    width: 100%;\r\n    .advance-date-range-filter-master__container {\r\n        width: fit-content;\r\n        cursor: pointer;\r\n        &.filter-bg {\r\n            background-color: var(--palette-gray-30);\r\n            &:hover {\r\n                background-color: var(--palette-gray-30);\r\n            }\r\n        }\r\n\r\n        &.p-b---active {\r\n            padding-bottom: 11px !important;\r\n        }\r\n        .filter-active {\r\n            color: var(--color-primary);\r\n            span {\r\n                border-bottom: 1px solid var(--color-primary);\r\n            }\r\n        }\r\n        &:hover {\r\n            background: #e5e5e5;\r\n        }\r\n        .filter__icon {\r\n            font-size: 16px;\r\n        }\r\n        .advance-date-range-filter-master__title {\r\n            font-style: normal;\r\n            font-weight: normal;\r\n            font-size: 14px;\r\n            line-height: 16px;\r\n            display: flex;\r\n            align-items: center;\r\n            letter-spacing: 0.16px;\r\n            .filter-title {\r\n                margin-right: 7px;\r\n            }\r\n        }\r\n    }\r\n    .date-range__icon-wrapper {\r\n        top: 29% !important;\r\n    }\r\n\r\n    .date-range-filter-master__list-container {\r\n        min-width: 288px;\r\n        width: 100%;\r\n        height: auto;\r\n        position: absolute;\r\n        z-index: 999;\r\n        margin-top: 2px;\r\n        &.date-range-filter-master__list-border {\r\n            border: 2px solid var(--color-primary);\r\n        }\r\n\r\n        .advance-date-range-master__list {\r\n            background-color: $backgound-color;\r\n            width: 100%;\r\n            overflow-y: auto;\r\n            max-height: 160px;\r\n        }\r\n\r\n        .advance-date-range-filter__item {\r\n            position: relative;\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: space-between;\r\n            font-size: 14px;\r\n            line-height: 16px;\r\n            cursor: pointer;\r\n            &:hover,\r\n            &:focus {\r\n                background-color: #e5e5e5;\r\n            }\r\n            &:focus-visible {\r\n                outline: none;\r\n            }\r\n            &.filter__item--selected {\r\n                background-color: var(--palette-grayHover-10);\r\n                display: flex;\r\n                justify-content: space-between;\r\n            }\r\n           \r\n        }\r\n        .date-range-master__prefer-option {\r\n            box-shadow: inset 0px 1px 0px #e1e3e5;\r\n            background: $backgound-color;\r\n            font-style: normal;\r\n            font-weight: normal;\r\n            display: flex;\r\n            align-items: center;\r\n            line-height: 16px;\r\n            display: flex;\r\n            align-items: center;\r\n            letter-spacing: 0.32px;\r\n            color: var(--color-primary);\r\n            cursor: pointer;\r\n            span {\r\n                font-size: 14px;\r\n                line-height: 16px;\r\n                margin-left: 6px;\r\n            }\r\n            i {\r\n                font-size: 14px;\r\n            }\r\n\r\n           \r\n            &:hover,\r\n            &:focus {\r\n                background-color: var(--color-primary);\r\n                color: var(--color-white);\r\n            }\r\n            &.date-range-master__bg-primary {\r\n                background-color: var(--color-primary);\r\n                color: var(--color-white);\r\n            }\r\n        }\r\n        .advance-date-range-filter__text {\r\n            white-space: nowrap;\r\n            overflow: hidden;\r\n            text-overflow: ellipsis;\r\n        }\r\n\r\n        .ant-picker--material {\r\n            padding: 1rem !important;\r\n            border-radius: 0 !important;\r\n            border-bottom: 1px solid var(--color-border);\r\n            background: none !important;\r\n            box-shadow: none !important;\r\n            &:hover,\r\n            &:focus {\r\n                border-bottom: 2px solid !important;\r\n            }\r\n        }\r\n    }\r\n    .date-range__wrapper {\r\n        &.ant-picker {\r\n            width: 288px;\r\n        }\r\n    }\r\n}\r\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);