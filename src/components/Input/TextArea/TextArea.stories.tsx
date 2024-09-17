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
import React from "react";
import FormItem from "../../FormItem/FormItem";
import { BORDER_TYPE } from "./../../../config/enum";
import TextArea, { TextAreaProps } from "./TextArea";

export default {
  title: "Input/TextArea",
  component: TextArea,
  tags: ['autodocs'],
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
    label: "First Name",
    placeHolder: "Enter text",
    type: 1,
  },
  argTypes: {
    label: {
      control: "text",
    },
    placeHolder: {
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

const Template: Story = (args: TextAreaProps) => {
  const [inputValue, setInputVal] = React.useState();

  const handleChangeValue = React.useCallback((value) => {
    setInputVal(value);
  }, []);

  return (
    <div style={{ width: "244px", padding: "10px" }}>
      <div style={{ margin: "15px 0" }}>
        <FormItem message="Helper">
          <TextArea
            {...args}
            label={args.label}
            value={inputValue}
            onChange={handleChangeValue}
          />
        </FormItem>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
