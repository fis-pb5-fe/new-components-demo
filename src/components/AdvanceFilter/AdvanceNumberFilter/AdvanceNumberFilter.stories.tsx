import React from "react";
import { BORDER_TYPE, NUMBER_TYPE } from "./../../../config/enum";
import AdvanceNumberFilter from "./AdvanceNumberFilter";
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

export default {
  title: "AdvanceFilter/AdvanceNumberFilter",
  component: AdvanceNumberFilter,
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
    label: "Cân nặng",
    placeHolder:"Search...",
    prefix:  "Mr.",
    suffix: "Kg",
    numberType: NUMBER_TYPE.LONG,
    type: 1,
    
  },
  argTypes: {
    label: {
      control: "text",
    },
    numberType: {
      control: {
        type: "radio",
        options: [NUMBER_TYPE.LONG, NUMBER_TYPE.DECIMAL],
      },
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
  const [value, setValue] = React.useState();

  const handleChangeValue = React.useCallback((value) => {
    setValue(value);
  }, []);

  return (
    <div style={{ width: "300px", margin: "10px" }}>
      <div style={{ margin: "15px 0" }}>
        <AdvanceNumberFilter
          {...args}
          value={value}
          onChange={handleChangeValue}
        />
      </div>
    </div>
  );
};

export const Default = Template.bind({});
