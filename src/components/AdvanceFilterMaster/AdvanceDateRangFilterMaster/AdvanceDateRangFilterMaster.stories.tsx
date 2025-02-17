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
import { useTranslation } from "react-i18next";
import { ADVANCE_DATE_RANGE_TYPE, BORDER_TYPE } from "../../../config/enum";
import AdvanceDateRangFilterMaster from "./AdvanceDateRangFilterMaster";

export default {
  title: "AdvanceFilterMaster/AdvanceDateRangFilterMaster",
  component: AdvanceDateRangFilterMaster,
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
    label: "Ngày giao hàng",
    placeHolder: ["Từ ngày", "Đến ngày"],
    type:  0,
    typeCustomDate:  1,
  },
  argTypes: {
    label: {
      control: "text",
    },
    typeCustomDate: {
      control: {
        type: "radio",
        options: [
          BORDER_TYPE.MATERIAL,
          BORDER_TYPE.BORDERED,
          BORDER_TYPE.FLOAT_LABEL,
        ],
      },
    },
    type: {
      control: {
        type: "radio",
        options: [ADVANCE_DATE_RANGE_TYPE.SHORT, ADVANCE_DATE_RANGE_TYPE.INPUT],
      },
    },
  },
};

const Template: Story = (args) => {
  const [translate] = useTranslation();
  const [value, setValue] = React.useState<[any, any]>([null, null]);
  const [item, setItem] = React.useState<any>(null);

  const handleChange = React.useCallback((item, dateDayjs) => {
    setValue(dateDayjs);
    setItem(item);
  }, []);

  return (
    <div style={{ margin: "10px", width: "300px" }}>
      <AdvanceDateRangFilterMaster
        {...args}
        onChange={handleChange}
        activeItem={item}
        value={value}
        translate={translate}
      />
    </div>
  );
};

export const Default = Template.bind({});
