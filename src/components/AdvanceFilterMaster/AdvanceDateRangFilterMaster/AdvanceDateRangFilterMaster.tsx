import { Calendar, ChevronDown } from "@carbon/icons-react";
import type { RangePickerProps } from "antd/lib/date-picker";
import classNames from "classnames";
import DateRange from "@Components/Input/DateRange";
import InputSelect from "@Components/Input/InputSelect";
import { ADVANCE_DATE_RANGE_TYPE, BORDER_TYPE } from "@Configs/enum";
import React, { RefObject } from "react";
import { TFunction } from "i18next";
import { Model } from "react-3layer-common";
import { CommonService } from "@Services/common-service";
import "./AdvanceDateRangFilterMaster.scss";
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import isoWeek from 'dayjs/plugin/isoWeek';
import dayjs from "dayjs";
dayjs.extend(quarterOfYear);
dayjs.extend(isoWeek);
class ListDate extends Model {
  id?: number;
  name?: string;
  code?: string;
}
//
//
//
//
//
//Component này chưa được update sang DayJS
//
//
//
//
//
//

interface AdvanceDateRangeFilterMasterProps {
  /**Value [fromDate, toDate] users select*/
  value?: [dayjs.Dayjs, dayjs.Dayjs];
  /**Use to format the date selected*/
  dateFormat?: string[];
  /**Handle the change value of the component*/
  onChange?: (item?: any, value?: [dayjs.Dayjs, dayjs.Dayjs]) => void;
  /**Use to custom style the component*/
  className?: string;
  /**Not allow to handle change the component*/
  disabled?: boolean;
  /**Prop of DateRange Component*/
  typeCustomDate?: BORDER_TYPE;
  /**Control the size of the component*/
  isSmall?: boolean;
  /**Label for current field*/
  label?: string;
  /**Selected value of list value suggest*/
  activeItem?: any;
  /**Control the type of component: SHORT, INPUT */
  type?: ADVANCE_DATE_RANGE_TYPE;
  /**Prop of component InputSelect*/
  inputType?: BORDER_TYPE;
  /**Prop of component InputSelect*/
  placeHolderSelect?: string;
  /**Append this component to body*/
  appendToBody?: boolean;
  /**Provide a translate function*/
  translate?: TFunction;
  /**Placeholder of the component*/
  placeholder?: [string, string];
  /** Custom background color for component: "white" || "gray" */
  bgColor?: "white" | "gray";
}

const list: ListDate[] = [
  { id: 1, name: "general.filter.today", code: "today" },
  { id: 2, name: "general.filter.yesterday", code: "yesterday" },
  { id: 3, name: "general.filter.thisWeek", code: "thisweek" },
  { id: 4, name: "general.filter.lastWeek", code: "lastweek" },
  { id: 5, name: "general.filter.thisMonth", code: "thismonth" },
  { id: 6, name: "general.filter.lastMonth", code: "lastmonth" },
  { id: 7, name: "general.filter.thisQuarter", code: "thisquarter" },
  { id: 8, name: "general.filter.lastQuarter", code: "lastquarter" },
];

function AdvanceDateRangeFilterMaster(
  props: AdvanceDateRangeFilterMasterProps & RangePickerProps
) {
  const {
    value,
    onChange,
    label,
    className,
    disabled,
    appendToBody,
    typeCustomDate,
    isSmall,
    activeItem,
    placeholder,
    type,
    inputType,
    placeHolderSelect,
    bgColor,
    translate,
  } = props;

  const [isExpand, setExpand] = React.useState<boolean>(false);
  const [isExpandDate, setExpandDate] = React.useState<boolean>(false);

  const wrapperRef: RefObject<HTMLDivElement> = React.useRef<HTMLDivElement>(
    null
  );

  const selectListRef: RefObject<HTMLDivElement> = React.useRef<HTMLDivElement>(
    null
  );

  const panelRef = React.useRef(null);
  const listRef = React.useRef(null);
  const [appendToBodyStyle, setAppendToBodyStyle] = React.useState({});
 

  const formatDateFilter = React.useCallback((item: any): [dayjs.Dayjs, dayjs.Dayjs] => {
    if (item) {
      switch (item.id) {
        case 1:
          return [dayjs().startOf("day"), dayjs().endOf("day")]; //today

        case 2:
          return [
            dayjs().subtract(1, "day").startOf("day"),
            dayjs().subtract(1, "day").endOf("day"),
          ];

        case 3:
          return [dayjs().startOf("isoWeek"), dayjs().endOf("isoWeek")]; //thisweek

        case 4:
          return [
            dayjs().subtract(1, "weeks").startOf("isoWeek"),
            dayjs().subtract(1, "weeks").endOf("isoWeek"),
          ]; //lastweek

        case 5:
          return [dayjs().startOf("month"), dayjs().endOf("month")]; //thismonth

        case 6:
          return [
            dayjs().subtract(1, "months").startOf("month"),
            dayjs().subtract(1, "months").endOf("month"),
          ]; //lastmonth

        case 7: 
          return [dayjs().startOf("quarter"), dayjs().endOf("quarter")]; //thisquarter

        // case 7:
        //   const quarterNumber = moment().quarter();
        //   const quarterEndDate = moment()
        //     .quarter(quarterNumber)
        //     .endOf("quarter");
        //   const quarterStartDate = moment()
        //     .quarter(quarterNumber)
        //     .startOf("quarter");
        //   return [quarterStartDate, quarterEndDate]; //thisquarter

        case 8:
          // eslint-disable-next-line no-case-declarations
          const thisQuarter = dayjs().quarter();
          // eslint-disable-next-line no-case-declarations
          const lastQuarter = thisQuarter - 1;
          // eslint-disable-next-line no-var
          var lastQuarterStartDate, lastQuarterEndDate;
          if(lastQuarter){
            lastQuarterStartDate = dayjs().quarter(lastQuarter).startOf("quarter");
            lastQuarterEndDate = dayjs().quarter(lastQuarter).endOf("quarter");
          }else{
            lastQuarterStartDate = dayjs()
              .subtract(1, "year")
              .quarter(4)
              .startOf("quarter");
              lastQuarterEndDate = dayjs()
              .subtract(1, "year")
              .quarter(4)
              .endOf("quarter");
          }
          return [lastQuarterStartDate, lastQuarterEndDate]; //lastquarter
        default:
          return [null, null];
      }
    }
  }, []);

  const internalValue: [dayjs.Dayjs, dayjs.Dayjs] = React.useMemo(() => {
    return value && value.length > 0
      ? [
          typeof value[0] === "string"
            ? CommonService.toDayjsDate(value[0])
            : value[0],
          typeof value[1] === "string"
            ? CommonService.toDayjsDate(value[1])
            : value[1],
        ]
      : [null, null];
  }, [value]);

  const handleChange = React.useCallback(
    (values: [dayjs.Dayjs, dayjs.Dayjs], formatString: [string, string]) => {
      onChange(
        { id: 9, name: "general.filter.customDate", code: "customdate" },
        [values[0]?.startOf("day"), values[1]?.endOf("day")]
      );
    },
    [onChange]
  );

  const handleToggle = React.useCallback(
    async (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!disabled) {
        setExpand(true);
        setTimeout(() => {
          listRef.current.focus();
        }, 300);
      }
    },
    [disabled, listRef]
  );

  const handleCloseAdvanceFilterMaster = React.useCallback(() => {
    setExpand(false);
    if (internalValue[0] || internalValue[1]) {
      return;
    }
    setExpandDate(false);
  }, [internalValue]);

  const handleClickItem = React.useCallback(
    (item: Model) => (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const values = formatDateFilter(item);
      onChange(item, values);
      handleCloseAdvanceFilterMaster();
    },
    [formatDateFilter, handleCloseAdvanceFilterMaster, onChange]
  );

  const handleClickCustomDate = React.useCallback(() => {
    setExpandDate(true);
  }, []);

  const handleGetRef = React.useCallback(() => {
    return document.getElementsByClassName("date-range-master");
  }, []);

  const handleOpenChange = React.useCallback(() => {
    setTimeout(() => {
      panelRef.current = handleGetRef()[0];
    }, 100);
  }, [handleGetRef]);

  const handleKeyDown = React.useCallback(
    (event: any) => {
      switch (event.keyCode) {
        case 40:
          const firstItem = selectListRef.current
            .firstElementChild as HTMLElement;
          firstItem.focus();
          break;
        case 9:
          handleCloseAdvanceFilterMaster();
          break;
        default:
          return;
      }
    },
    [handleCloseAdvanceFilterMaster]
  );

  const handleMove = React.useCallback(
    (item: Model) => (event: any) => {
      switch (event.keyCode) {
        case 13:
          handleClickItem(item)(null);
          break;
        case 40:
          if (event.target.nextElementSibling !== null) {
            event.target.nextElementSibling.focus();
          }
          event.preventDefault();
          break;
        case 38:
          if (event.target.previousElementSibling !== null) {
            event.target.previousElementSibling.focus();
          }
          event.preventDefault();
          break;
      }
      return;
    },
    [handleClickItem]
  );

  CommonService.useClickOutsideMultiple(
    wrapperRef,
    panelRef,
    handleCloseAdvanceFilterMaster
  );

  const handleClearItem = React.useCallback(() => {
    onChange(null, [null, null]);
  }, [onChange]);

  const renderItem = React.useCallback(
    (currentItem: ListDate) => {
      if (currentItem) {
        return translate(currentItem?.name);
      }
      return null;
    },
    [translate]
  );

  React.useEffect(() => {
    if (isExpand && appendToBody) {
      const currentPosition = wrapperRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - currentPosition.bottom;
      if (spaceBelow <= 200) {
        setTimeout(() => {
          setAppendToBodyStyle({
            position: "fixed",
            bottom: spaceBelow + wrapperRef.current.clientHeight,
            left: currentPosition.left,
            maxWidth: wrapperRef.current.clientWidth,
          });
        }, 100);
      } else {
        setAppendToBodyStyle({
          position: "fixed",
          top: currentPosition.top + wrapperRef.current.clientHeight,
          left: currentPosition.left,
          maxWidth: wrapperRef.current.clientWidth,
        });
      }
    }
  }, [appendToBody, isExpand]);

  return (
    <div
      className={classNames(
        "advance-date-range-filter-master__wrapper",
        className
      )}
      ref={wrapperRef}
    >
      {type === ADVANCE_DATE_RANGE_TYPE.SHORT ? (
        <div
          className={classNames(
            "advance-date-range-filter-master__container p-l--sm p-t--xs p-r--xs p-b--xs",
            {
              "filter-bg": isExpand,
              "p-b---active": value && value?.length > 0 && value[0],
            }
          )}
          onClick={handleToggle}
        >
          <div
            className={classNames({
              "filter-active": value && value?.length > 0 && value[0],
            })}
          >
            <div className="advance-date-range-filter-master__title">
              <span className="filter-title"> {label}</span>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
      ) : (
        <div className="select__input" onClick={handleToggle}>
          <InputSelect
            value={activeItem} // value of input, event should change these on update
            placeHolder={placeHolderSelect}
            expanded={isExpand}
            disabled={disabled}
            onClear={handleClearItem}
            type={inputType}
            label={label}
            isSmall={isSmall}
            onKeyDown={handleKeyDown}
            render={renderItem}
            bgColor={bgColor}
            handlePressExpandedIcon={handleCloseAdvanceFilterMaster}
          />
        </div>
      )}

      {isExpand && (
        <div
          id="list-container"
          className={classNames("date-range-filter-master__list-container", {
            "date-range-filter-master__list-border":
              type === ADVANCE_DATE_RANGE_TYPE.SHORT,
            "": type === ADVANCE_DATE_RANGE_TYPE.INPUT,
          })}
          style={appendToBodyStyle}
          ref={listRef}
        >
          <div className="advance-date-range-master__list" ref={selectListRef}>
            {list.length > 0 &&
              list.map((item, index) => (
                <div
                  className={classNames(
                    "advance-date-range-filter__item p--xs",
                    { "filter__item--selected": item?.id === activeItem?.id }
                  )}
                  tabIndex={-1}
                  key={index}
                  onClick={handleClickItem(item)}
                  onKeyDown={handleMove(item)}
                >
                  <span className="advance-date-range-filter__text">
                    {translate ? translate(item?.name) : item?.code}
                  </span>
                </div>
              ))}
          </div>
          <div
            className={classNames("date-range-master__prefer-option p--xs", {
              "date-range-master__bg-primary": activeItem?.id === 9,
            })}
            onClick={handleClickCustomDate}
          >
            <Calendar size={16} />
            <span>
              {translate
                ? translate("general.filter.customDate")
                : "Custom Date"}
            </span>
          </div>
          {isExpandDate && (
            <>
              <DateRange
                {...props}
                label={""}
                typeCustomDate={typeCustomDate}
                isSmall={isSmall}
                onChange={handleChange}
                value={internalValue}
                getPopupContainer={
                  !appendToBody
                    ? () => document.getElementById("list-container")
                    : null
                }
                placeholder={placeholder}
                dropdownClassName="date-range-master"
                onOpenChange={handleOpenChange}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
}

AdvanceDateRangeFilterMaster.defaultProps = {
  dateFormat: ["DD/MM/YYYY", "YYYY/MM/DD"],
  placeholder: ["Từ ngày", "Đến ngày"],
  type: ADVANCE_DATE_RANGE_TYPE.SHORT,
  placeHolderSelect: "",
  appendToBody: false,
  bgColor: "white",
};

export default AdvanceDateRangeFilterMaster;
