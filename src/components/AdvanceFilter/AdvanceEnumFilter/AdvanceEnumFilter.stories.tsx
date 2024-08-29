import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";
import { Story } from "@storybook/react";
import React from "react";
import { IdFilter, StringFilter } from "react-3layer-advance-filters";
import { Observable } from "rxjs";
import FormItem from "../../FormItem/FormItem";
import { BORDER_TYPE } from "./../../../config/enum";
import AdvanceEnumFilter from "./AdvanceEnumFilter";
import { Model, ModelFilter } from "react-3layer-commonn";

class DemoFilter extends ModelFilter {
  id: IdFilter = new IdFilter();
  name: StringFilter = new StringFilter();
  code: StringFilter = new StringFilter();
}

const demoObservable = new Observable<Model[]>((observer) => {
  setTimeout(() => {
    observer.next([
      { id: 4, name: "Ban hành chính", code: "FAD" },
      {
        id: 1,
        name:
          "Ban công nghệ thông tin Ban công nghệ thông tin Ban công nghệ thông tin Ban công nghệ thông tin",
        code: "FIM",
      },
      { id: 2, name: "Ban nhân sự", code: "FHR" },
      { id: 3, name: "Ban tài chính", code: "FAF" },
      { id: 5, name: "Ban đời sống", code: "DSS" },
      { id: 6, name: "Ban nội vụ", code: "DUH" },
      { id: 7, name: "Ban lao động", code: "FJIP" },
      { id: 8, name: "Ban thể thao", code: "FJUI" },
    ]);
  }, 1000);
});

const demoSearchFunc = () => {
  return demoObservable;
};

export default {
  title: "AdvanceFilter/AdvanceEnumFilter",
  component: AdvanceEnumFilter,
  subcomponents: { FormItem },
  parameters: {
    controls: { expanded: true },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Description />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
  args:{
    label: "Đơn vị tổ chức",
    placeHolder: "Chọn đơn vị",
    type: 1,
  },
  argTypes: {
    label: {
      control: "text",
    },
    placeHolder: {
    },
    type: {
      control: {
        type: "radio",
        options: [
          BORDER_TYPE.MATERIAL,
          BORDER_TYPE.BORDERED,
          BORDER_TYPE.FLOAT_LABEL,
        ],
      },
    },
  },
};

const Template: Story = (args) => {
  const [selectModel, setSelectModel] = React.useState<Model>({
    id: 0,
    name: "Option 2",
    code: "FAD",
  });

  const [multifilter, setFilter] = React.useState(new DemoFilter());

  const [list, setList] = React.useState<[]>([]);

  const handleSetModel = React.useCallback((...[, item]) => {
    setSelectModel(item);
  }, []);

  const handleRenderModel = React.useCallback((item: Model) => {
    if (item) {
      return item.name;
    } else {
      return "";
    }
  }, []);

  const handleChangeFilter = React.useCallback(
    (list, ids) => {
      setFilter({ ...multifilter, id: { in: ids } });
      setList(list);
    },
    [multifilter]
  );

  return (
    <div style={{ margin: "10px", width: "300px" }}>
      <div style={{ margin: "10px", width: "300px" }}>
        <AdvanceEnumFilter
          {...args}
          value={selectModel}
          render={handleRenderModel}
          onChange={handleSetModel}
          getList={demoSearchFunc}
          onChangeMultiple={handleChangeFilter} // if type is multiple pass this props
          listValue={list} // if type is multiple pass this prop
        />
      </div>
    </div>
  );
};

export const Default = Template.bind({});
