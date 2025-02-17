import React from "react";
import { IdFilter, StringFilter } from "react-3layer-advance-filters";
import { Model, ModelFilter } from "react-3layer-common";
import { Observable, Subscription } from "rxjs";
import AdvanceMultipleIdFilterMaster from "./AdvanceMultipleIdFilterMaster";
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

const demoObservable = new Observable<Model[]>((observer) => {
  setTimeout(() => {
    observer.next([
      { id: 4, name: "Ban hành chính", code: "FAD" },
      {
        id: 1,
        name: "Ban công nghệ thông tin Ban công nghệ thông tin",
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

const list = [
  { id: 9, name: "Phòng Muti Media", code: "MEDIA" },
  { id: 10, name: "Phòng truyền thông", code: "PTT" },
];

class DemoFilter extends ModelFilter {
  id: IdFilter = new IdFilter();
  name: StringFilter = new StringFilter();
  code: StringFilter = new StringFilter();
}

const filterValue = new DemoFilter();
filterValue.id.in = [10, 9, 4, 6];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const demoSearchFunc = (TModelFilter?: ModelFilter) => {
  return demoObservable;
};

export default {
  title: "AdvanceFilterMaster/AdvanceMultipleIdFilterMaster",
  component: AdvanceMultipleIdFilterMaster,
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
    placeHolder: "Chọn đơn vị",
    maxLength: 200,
    maxLengthItem:30,
  },
  argTypes: {
    label: {
      control: "text",
    },
    placeHolder: {
    },
  },
};

const Template: Story = (args) => {
  const [filter, setFilter] = React.useState(new DemoFilter());

  React.useEffect(() => {
    const subscription = new Subscription();
    if (!filter.id.in) {
      setFilter({
        ...filter,
        id: { in: [10, 9, 4, 6] },
      });
    }
    return function cleanup() {
      subscription.unsubscribe();
    };
  }, [filter]);

  const handleChangeFilter = React.useCallback(
    (listItemm, ids) => {
      setFilter({ ...filter, id: { in: ids } });
    },
    [filter]
  );

  return (
    <div style={{ margin: "10px", width: "250px" }}>
      <AdvanceMultipleIdFilterMaster
        {...args}
        values={filter?.id?.in}
        classFilter={DemoFilter}
        searchProperty={"name"}
        onChange={handleChangeFilter}
        getList={demoSearchFunc}
        preferOptions={list}
      />
    </div>
  );
};

export const Default = Template.bind({});
