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
import DatePicker from "./DatePicker";
import { Dayjs } from "dayjs";
export default {
  title: "Input/DatePicker",
  component: DatePicker,
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
      defaultValue: 1,
    },
  },
};

const Template: Story = (args) => {
  const [value, setValue] = React.useState<Dayjs>();

  const handleChange = React.useCallback((dateDayjs, dateString) => {
    setValue(dateDayjs);
  }, []);

  return (
    <div style={{ margin: "10px", width: "300px" }}>
      <DatePicker
        {...args}
        label="Ngày nhập hàng"
        placeholder={"Enter text..."}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export const Default = Template.bind({});
