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
import { ModelFilter } from "react-3layer-common";
import InputSearch from "./InputSearch";

class DemoFilter extends ModelFilter {
  id: IdFilter = new IdFilter();
  name: StringFilter = new StringFilter();
  code: StringFilter = new StringFilter();
}

export default {
  title: "Input/InputSearch",
  component: InputSearch,
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
    placeHolder: "Search...",
  },
  argTypes: {
    placeHolder: {
      control: "text",
    },
    argTypes: {
      placeHolder: {
        control: "text",
        defaultValue: "Search...",
      },
      value: {
        control: "text",
        defaultValue: "hello",
      },
    },
  },
};

const Template: Story = (args) => {
  return (
    <>
      <div
        style={{
          width: "400px",
          marginTop: 30,
          height: 500,
        }}
      >
        <InputSearch {...args} classFilter={DemoFilter} className="m-b--xl" />
      </div>
    </>
  );
};

export const Default = Template.bind({});
