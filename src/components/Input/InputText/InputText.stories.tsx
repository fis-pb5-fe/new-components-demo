import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";
import type { Meta } from "@storybook/react";
import React from "react";
import FormItem from "../../FormItem/FormItem";
import InputText from "./InputText";

export default {
  title: "Input/InputText",
  component: InputText,
  subcomponent: FormItem,
  tags: ["autodocs"],
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
    label: "First Name",
    placeHolder: "Enter text",
    type: 1,
    prefix: "",
    suffix: "Kg",
  },
  argTypes: {
    label: {
      control: "text",
    },
    placeHolder: {
      control: "text",
    },
    // type: {
    //   control: {
    //     type: "radio",
    //     options: [
    //       BORDER_TYPE.MATERIAL,
    //       BORDER_TYPE.BORDERED,
    //       BORDER_TYPE.FLOAT_LABEL,
    //     ],
    //   },
    // },
    isSmall: {
      control: {
        type: "radio",
      },
      options: [true, false],
    },
    isRequired: {
      control: {
        type: "radio",
      },
      options: [true, false],
    },
    value: { control: "text" },
    prefix: { control: "text" },
    suffix: { control: "text" },
    disabled: {},

    action: {},

    onChange: {},
    onBlur: {},
    onEnter: {},
    onKeyDown: {},
    className: {},
  },
} as Meta<typeof InputText>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template = (args: any) => {
  const [value, setValue] = React.useState();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChangeValue = React.useCallback((value: any) => {
    setValue(value);
  }, []);
  console.log("args", args);

  return (
    <div style={{ width: "300px", margin: "10px" }}>
      <div style={{ margin: "15px 0" }}>
        <FormItem message={"Hint Text"}>
          <InputText
            {...args}
            value={value}
            onChange={handleChangeValue}
            action={{
              name: "Button",
              action: () => {
                console.log("hehee");
              },
            }}
          />
        </FormItem>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
