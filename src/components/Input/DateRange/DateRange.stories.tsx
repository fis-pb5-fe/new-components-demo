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
import { BORDER_TYPE } from "../../../config/enum";
import DateRange from "./DateRange";

export default {
  title: "Input/DateRange",
  component: DateRange,
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
    label: "Ngày nhập hàng",
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
  const [value, setValue] = React.useState<[any, any]>([null, null]);

  const handleChange = React.useCallback((dateDayjs, dateString) => {
    setValue(dateDayjs);
  }, []);

  return (
    <div style={{ margin: "10px", width: "300px" }}>
      <DateRange {...args} onChange={handleChange} value={value} />
    </div>
  );
};

export const Default = Template.bind({});
