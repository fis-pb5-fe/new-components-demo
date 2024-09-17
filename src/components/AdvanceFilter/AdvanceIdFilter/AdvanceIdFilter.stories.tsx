import React from "react";
import { Model, ModelFilter } from "react-3layer-common";
import { of } from "rxjs";
import { BORDER_TYPE } from "./../../../config/enum";
import AdvanceIdFilter from "./AdvanceIdFilter";
import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";
import { Story } from "@storybook/react";
import { IdFilter } from "react-3layer-advance-filters";
class DemoFilter extends ModelFilter {
  id: IdFilter = new IdFilter();
}

const demoListEnum = (TModelFilter?: ModelFilter) => {
  return of([
    {
      id: 1,
      name:
        "Option 2 very long one very long one Option 2 very long one very long one",
      code: "E1",
    },
    { id: 2, name: "Enum 2", code: "E2" },
    { id: 3, name: "Enum 3", code: "E3" },
    { id: 4, name: "Enum 4", code: "E4" },
    { id: 5, name: "Enum 5", code: "E5" },
  ]);
};

const list = [
  { id: 9, name: "Phòng Muti Media", code: "MEDIA" },
  { id: 10, name: "Phòng truyền thông", code: "PTT" },
];
export default {
  title: "AdvanceFilter/AdvanceIdFilter",
  component: AdvanceIdFilter,
  tags: ['autodocs'],
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
  args: {
    label: "Đơn vị tổ chức",
    placeHolder: "Chọn đơn vị",
    type: 1,
  },
  argTypes: {
    label: {
      control: "text",
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

  const [selectModelFilter] = React.useState<DemoFilter>(new DemoFilter());

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

  return (
    <div style={{ margin: "10px", width: "300px" }}>
      <div style={{ margin: "10px", width: "300px" }}>
        <AdvanceIdFilter
          {...args}
          value={selectModel}
          valueFilter={selectModelFilter}
          searchProperty={"name"}
          render={handleRenderModel}
          onChange={handleSetModel}
          getList={demoListEnum}
          classFilter={DemoFilter}
          preferOptions={list}
          appendToBody={true}
        />
      </div>
    </div>
  );
};

export const Default = Template.bind({});
