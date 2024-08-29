import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Stories,
  Subtitle,
  Title,
} from "@storybook/blocks";
import { StoryFn } from "@storybook/react";
import React from "react";
import { StringFilter } from "react-3layer-advance-filters";
import { ModelFilter } from "react-3layer-commonn";
import Pagination from "./Pagination";
export class DemoFilter extends ModelFilter {
  name: StringFilter = new StringFilter();
  code: StringFilter = new StringFilter();
}
export default {
  title: "Table/Pagination",
  component: Pagination,
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
  // argTypes: {
  //   label: {
  //     control: "text",
  //   },
  //   type: {
  //     control: {
  //       type: "radio",
  //       options: [
  //         BORDER_TYPE.MATERIAL,
  //         BORDER_TYPE.BORDERED,
  //         BORDER_TYPE.FLOAT_LABEL,
  //       ],
  //     },
  //     defaultValue: 1,
  //   },
  // },
};
const Template: StoryFn = (args) => {
  const [filter, setFilter] = React.useState<DemoFilter>(new DemoFilter());

  const handlePagination = React.useCallback(
    (skip: number, take: number) => {
      setFilter({ ...filter, skip, take });
      // if (typeof handleSearch === "function") {
      //   handleSearch();
      // }
    },
    [filter, setFilter]
  );
  return (
    <div>
      <Pagination
        {...args}
        skip={filter.skip}
        take={filter.take}
        total={100}
        onChange={handlePagination}
      />
      <br />
      <Pagination
        {...args}
        skip={filter.skip}
        take={filter.take}
        total={100}
        onChange={handlePagination}
        canChangePageSize={false}
      />
    </div>
  );
};

export const Default = Template.bind({});
