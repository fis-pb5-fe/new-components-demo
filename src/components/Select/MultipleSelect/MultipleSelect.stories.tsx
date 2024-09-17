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
import { Model, ModelFilter } from "react-3layer-common";
import { Observable } from "rxjs";
import FormItem from "../../FormItem/FormItem";
import { BORDER_TYPE } from "./../../../config/enum";
import MultipleSelect from "./MultipleSelect";
const demoList = [
  { id: 1, name: "Ban hành chính", code: "FAD" },
  { id: 2, name: "Ban công nghệ thông tin", code: "FIM" },
  { id: 3, name: "Ban nhân sự", code: "FHR" },
  { id: 4, name: "Ban truyền thông", code: "FCC" },
  { id: 5, name: "Ban công nghệ", code: "FTI" },
  { id: 6, name: "Ban giám đốc", code: "BOD" },
  { id: 7, name: "Ban quản trị", code: "BOM" },
];

const list = [
  { id: 9, name: "Phòng Muti Media", code: "MEDIA" },
  { id: 10, name: "Phòng truyền thông", code: "PTT" },
];

const demoObservable = new Observable<Model[]>((observer) => {
  setTimeout(() => {
    observer.next(demoList);
  }, 1000);
});

const demoSearchFunc = (TModelFilter?: ModelFilter) => {
  return demoObservable;
};

class DemoFilter extends ModelFilter {
  public id: IdFilter = new IdFilter();
  public name: StringFilter = new StringFilter();
  public provinceId: IdFilter = new IdFilter();
}

export default {
  title: "Select/MultipleSelect",
  component: MultipleSelect,
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
  args:{
    label: "Đơn vị tổ chức",
    placeHolder:  "Chọn đơn vị",
    type: 1,
    maxLengthItem: 30,
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
  const [models, setModels] = React.useState<any[]>([]);

  const [selectModelFilter] = React.useState<DemoFilter>(new DemoFilter());

  const handleChangeModels = React.useCallback((listItem) => {
    setModels([...listItem]);
  }, []);

  return (
    <>
      <div style={{ margin: "10px", width: "300px" }}>
        <FormItem>
          <MultipleSelect
            {...args}
            values={models}
            placeHolder={"Select an option"}
            onChange={handleChangeModels}
            getList={demoSearchFunc}
            valueFilter={selectModelFilter}
            classFilter={DemoFilter}
            preferOptions={list}
            maxLengthItem={10}
            render={(item) => item?.code}
          ></MultipleSelect>
        </FormItem>
      </div>
    </>
  );
};

export const Default = Template.bind({});
