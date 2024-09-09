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
import FormItem from "../../FormItem/FormItem";
import TimePicker from "./TimePicker";
import { Dayjs } from "dayjs";

export default {
  title: "Input/TimePicker",
  component: TimePicker,
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
    label: "Ngày nhập kho",
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
      <FormItem>
        <TimePicker
          label="Ngày nhập hàng"
          placeholder={"Enter text..."}
          onChange={handleChange}
          value={value}
        />
      </FormItem>
    </div>
  );
};

export const Default = Template.bind({});
