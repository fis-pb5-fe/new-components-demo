import FormItem from "../FormItem";
import Drawer from "./Drawer";
import InputText from "../Input/InputText/InputText";
import {
  BORDER_TYPE,
  NUMBER_BUTTON,
  ValidateStatus,
} from "./../../config/enum";
import React from "react";
import AdvanceDateFilter from "../AdvanceFilter/AdvanceDateFilter/AdvanceDateFilter";
import AdvanceIdFilter from "../AdvanceFilter/AdvanceIdFilter/AdvanceIdFilter";
import { IdFilter, StringFilter } from "react-3layer-advance-filters";
import { of } from "rxjs";
import moment from "moment";
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
import { ModelFilter } from "react-3layer-commonn";


class DemoFilter extends ModelFilter {
  id: IdFilter = new IdFilter();
  name: StringFilter = new StringFilter();
  code: StringFilter = new StringFilter();
}

const demoListEnum = (TModelFilter?: ModelFilter) => {
  return of([
    {
      id: 1,
      name:
        "Option 2 very long one very long one Option 2 very long one very long one",
      code: "E1",
    },
    { id: 2, name: "Enum 2", code: "E2" },
    { id: 3, name: "Enum 3", code: "E3" },
    { id: 4, name: "Enum 4", code: "E4" },
    { id: 5, name: "Enum 5", code: "E5" },
  ]);
};
export default {
  title: "Drawer",
  component: Drawer,
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
    loading: false,
    visibleFooter: true,
    disableButton: false,
    numberButton: NUMBER_BUTTON.TWO,
    isHaveCloseIcon: true,
    size: "sm",
  },
  argTypes: {
    loading: {
      defaultValue: false,
    },

    visibleFooter: {
      defaultValue: true,
    },
    disableButton: {
      defaultValue: false,
    },
    numberButton: {
      defaultValue: NUMBER_BUTTON.TWO,
    },
    isHaveCloseIcon: {
      defaultValue: true,
    },
    size: {
      defaultValue: "sm",
    },
  },
};

const Template: Story = (args) => {
  const [visible, setVisible] = React.useState<boolean>(true);

  function handleClose() {
    setVisible(false);
  }
  function handleSave() {
    setVisible(false);
  }
  function handleCreate() {}
  function handleCancel() {
    setVisible(false);
  }

  return (
    <div>
      <button
        onClick={() => {
          setVisible(true);
        }}
      >
        show modal
      </button>

      <Drawer
        {...args}
        visible={visible}
        handleSave={handleSave}
        handleCancel={handleCancel}
        handleClose={handleClose}
        handleApplyNext={handleCreate}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <FormItem
            validateStatus={ValidateStatus.success}
            message={"Field required!"}
          >
            <InputText
              placeHolder={"Enter text..."}
              type={BORDER_TYPE.MATERIAL}
            />
          </FormItem>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 16,
          }}
        >
          <FormItem
            validateStatus={ValidateStatus.success}
            message={"Field required!"}
          >
            <InputText
              placeHolder={"Enter text..."}
              type={BORDER_TYPE.MATERIAL}
            />
          </FormItem>
        </div>
        <div
          style={{
            marginBottom: "16px",
            display: "flex",
            marginTop: 16,
          }}
        >
          <div style={{ paddingRight: 8, width: "50%" }}>
            <FormItem
              validateStatus={ValidateStatus.warning}
              message={"Field required!"}
            >
              <InputText placeHolder={"Enter text..."} />
            </FormItem>
          </div>

          <div style={{ paddingLeft: 8, width: "50%" }}>
            <FormItem
              validateStatus={ValidateStatus.warning}
              message={"Field required!"}
            >
              <InputText placeHolder={"Enter text..."} />
            </FormItem>
          </div>
        </div>
        <div
          style={{
            marginBottom: "16px",
            display: "flex",
          }}
        >
          <div style={{ paddingRight: 8, width: "50%" }}>
            <FormItem
              validateStatus={ValidateStatus.error}
              message={"Field required!"}
            >
              <InputText placeHolder={"Enter text..."} />
            </FormItem>
          </div>

          <div style={{ paddingLeft: 8, width: "50%" }}>
            <FormItem
              validateStatus={ValidateStatus.error}
              message={"Field required!"}
            >
              <InputText placeHolder={"Enter text..."} />
            </FormItem>
          </div>
        </div>
        <div
          style={{
            marginBottom: "16px",
            display: "flex",
          }}
        >
          <div style={{ paddingRight: 8, width: "50%" }}>
            <FormItem
              validateStatus={ValidateStatus.warning}
              message={"Field required!"}
            >
              <InputText placeHolder={"Enter text..."} />
            </FormItem>
          </div>

          <div style={{ paddingLeft: 8, width: "50%" }}>
            <FormItem
              validateStatus={ValidateStatus.warning}
              message={"Field required!"}
            >
              <InputText placeHolder={"Enter text..."} />
            </FormItem>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 16,
          }}
        >
          <div style={{ paddingRight: 8, width: "50%" }}>
            <FormItem
              validateStatus={ValidateStatus.success}
              message={"Field required!"}
            >
              <InputText
                placeHolder={"Enter text..."}
                type={BORDER_TYPE.MATERIAL}
              />
            </FormItem>
          </div>

          <div style={{ paddingLeft: 8, width: "50%" }}>
            <FormItem
              validateStatus={ValidateStatus.success}
              message={"Field required!"}
            >
              <InputText
                placeHolder={"Enter text..."}
                type={BORDER_TYPE.MATERIAL}
              />
            </FormItem>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 16,
          }}
        >
          <FormItem
            validateStatus={ValidateStatus.success}
            message={"Field required!"}
          >
            <InputText
              placeHolder={"Enter text..."}
              type={BORDER_TYPE.MATERIAL}
            />
          </FormItem>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 16,
          }}
        >
          <FormItem
            validateStatus={ValidateStatus.success}
            message={"Field required!"}
          >
            <InputText
              placeHolder={"Enter text..."}
              type={BORDER_TYPE.MATERIAL}
            />
          </FormItem>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 16,
          }}
        >
          <FormItem
            validateStatus={ValidateStatus.success}
            message={"Field required!"}
          >
            <InputText
              placeHolder={"Enter text..."}
              type={BORDER_TYPE.MATERIAL}
            />
          </FormItem>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 16,
          }}
        >
          <FormItem
            validateStatus={ValidateStatus.success}
            message={"Field required!"}
          >
            <InputText
              placeHolder={"Enter text..."}
              type={BORDER_TYPE.MATERIAL}
            />
          </FormItem>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 16,
          }}
        >
          <AdvanceIdFilter
            placeHolder={"Select Organization"}
            searchProperty={"name"}
            // onChange={() => {}}
            getList={demoListEnum}
            classFilter={DemoFilter}
            label={"Label"}
          />
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 16,
          }}
        >
          <AdvanceDateFilter
            onChange={() => {}}
            label="Ngày nhập hàng"
            placeholder={"Chọn ngày"}
            value={moment()}
          />
        </div>
      </Drawer>
    </div>
  );
};

export const Default = Template.bind({});
