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
import FormItem from "../../FormItem/FormItem";
import { BORDER_TYPE } from "../../../config/enum";
import InputView from "./InputView";
export default {
  title: "Input/InputView",
  component: InputView,
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
    maxLength: {
      control: "number",
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
          BORDER_TYPE.NOT_BORDERED,
        ],
      },
    },
  },
};

const Template: Story = (args) => {
  const [inputValue] = React.useState(
    "asfdsadasdfv asfdsadasdfv asfdsadasdfv asfdsadasdfv asfdsadasdfvasfdsadasdfv asfdsadasdfv asfdsadasdfv"
  );

  return (
    <div style={{ width: "300px", padding: "10px" }}>
      <div style={{ margin: "15px 0" }}>
        <FormItem>
          <InputView {...args} label="First Name" value={inputValue} />
        </FormItem>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
