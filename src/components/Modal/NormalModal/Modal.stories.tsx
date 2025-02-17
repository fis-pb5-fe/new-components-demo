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
import Button from "../../Button/Button";
import FormItem from "../../FormItem";
import InputText from "../../Input/InputText/InputText";
import {
  BORDER_TYPE,
  MODAL_SIZE,
  ValidateStatus,
} from "./../../../config/enum";
import Modal from "./Modal";
export type LoadingType = "default" | "submitting" | "submitted" | "error";

export default {
  title: "Modal",
  component: Modal,
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
    title: "Thông tin chi tiết",
    size: MODAL_SIZE.SIZE_520,
  },
  argTypes: {
    title: {
      description: "/**Title of the modal*/",
      control: "text",
    },

    size: {
      control: {
        type: "radio",
        options: [
          MODAL_SIZE.SIZE_320,
          MODAL_SIZE.SIZE_520,
          MODAL_SIZE.SIZE_720,
          MODAL_SIZE.SIZE_1200,
          MODAL_SIZE.SIZE_1024,
        ],
      },
    },
  },
};

const Template: Story = (args) => {
  const [visible, setVisible] = React.useState<boolean>(false);
  const [loadingType, setLoadingType] = React.useState<LoadingType>("default");
  let i = 0;
  const handleOnClick = React.useCallback(() => {
    setLoadingType("submitting");
    setTimeout(() => {
      if (i % 2 === 0) {
        setLoadingType("submitted");
      } else {
        setLoadingType("error");
      }
      i++;
      setTimeout(() => {
        setLoadingType("default");
      }, 1000);
    }, 2000);
  }, [i]);
  // function handleSave() {
  //   setVisible(false);
  // }

  function handleCancel() {
    setVisible(false);
  }

  return (
    <div>
      <Button
        type="primary"
        className="btn btn--sm"
        onClick={() => {
          setVisible(true);
        }}
      >
        show modal
      </Button>
      <Modal
        open={visible}
        handleSave={handleOnClick}
        handleApplyNext={handleOnClick}
        handleCancel={handleCancel}
        title="Modal Title"
        loadingType={loadingType}
        visibleFooter={true}
        {...args}
      >
        <div
          style={{
            marginBottom: "16px",
            marginTop: 16,
          }}
        >
          <FormItem
            validateStatus={ValidateStatus.error}
            message={"Field required!"}
          >
            <InputText placeHolder={"Enter text..."} />
          </FormItem>
        </div>
        <div style={{ marginBottom: "16px" }}>
          <FormItem
            validateStatus={ValidateStatus.warning}
            message={"Field required!"}
          >
            <InputText placeHolder={"Enter text..."} />
          </FormItem>
        </div>
        <div>
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
      </Modal>
    </div>
  );
};

export const Default = Template.bind({});
