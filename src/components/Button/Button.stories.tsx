import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary as PrimaryStory,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";
import { Story } from "@storybook/react";
import React from "react";
import Button from "./Button";
import classNames from "classnames";
import Fpt from "../../assets/icons/Fpt";

export default {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <PrimaryStory />
          <Stories includePrimary />
          <ArgsTable story={PRIMARY_STORY} />
        </>
      ),
    },
  },
  args: {
    size: "lg",
  },

  argTypes: {
    className: {},
    size: {
      control: {
        type: "radio",
        options: [
          // "btn--sx",
          "sm",
          // "btn--md",
          "lg",
          // "btn--xl",
          // "btn--2xl",
        ],
      },
      description: "",
    },
    type: {},
    loading: {},
    htmlType: {},
    disabled: {},
    onClick: {},
    icon: {},
  },
};

const Template: Story = (args) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const handleOnClick = React.useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {" "}
      <div className="m--2xs">Size 24px</div>
      <div style={{ width: 500, height: 40, display: "flex", alignItems:"center" }}>
        <Button
          {...args}
          className={classNames("m-l--2xs", args?.className)}
          loading={loading}
          onClick={handleOnClick}
          size="sm"
          icon={<Fpt />}
          iconPlace="both"
        >
          Button
        </Button>

        <Button
          {...args}
          className={classNames("m-l--2xs", args?.className)}
          size="sm"
          loading={loading}
          onClick={handleOnClick}
          icon={<Fpt />}
          iconPlace="left"
        >
          {"Button"}
        </Button>
        <Button
          {...args}
          className={classNames("m-l--2xs", args?.className)}
          loading={loading}
          size="sm"
          onClick={handleOnClick}
          icon={<Fpt />}
          iconPlace="right"
        >
          {"Button"}
        </Button>
        <Button
          {...args}
          className={classNames("m-l--2xs", args?.className)}
          loading={loading}
          onClick={handleOnClick}
          size="sm"
          icon={<Fpt />}
          iconPlace="both"
          disabled
        >
          Button
        </Button>
      </div>
      <div className="m--2xs">Size 32px</div>
      <div style={{ width: 500, height: 40, display: "flex", alignItems:"center" }}>
        <Button
          {...args}
          className={classNames("m-l--2xs", args?.className)}
          loading={loading}
          onClick={handleOnClick}
          icon={<Fpt />}
          iconPlace="both"
        >
          <div>Button</div>
        </Button>
        <Button
          {...args}
          className={classNames("m-l--2xs", args?.className)}
          loading={loading}
          onClick={handleOnClick}
          icon={<Fpt />}
          iconPlace="left"
        >
          Button
        </Button>
        <Button
          {...args}
          className={classNames("m-l--2xs", args?.className)}
          loading={loading}
          onClick={handleOnClick}
          icon={<Fpt />}
          iconPlace="right"
        >
          Button
        </Button>
        <Button
          {...args}
          className={classNames("m-l--2xs", args?.className)}
          loading={loading}
          onClick={handleOnClick}
          icon={<Fpt />}
          iconPlace="both"
          disabled
        >
          <div>Button</div>
        </Button>
      </div>
    </div>
  );
};

export const NormalButton = Template.bind({});
NormalButton.parameters = {
  docs: {
    description: {
      story: "Some story **markdown**",
    },
  },
};

export const Link = Template.bind({});
Link.args = {
  ...NormalButton.args,
  type: "link",
};
Link.parameters = {
  docs: {
    description: {
      story: "Some story **markdown**",
    },
  },
};

export const IconButton = Template.bind({});
IconButton.args = {
  ...NormalButton.args,
  type: "icon-only-primary",
};
IconButton.parameters = {
  docs: {
    description: {
      story: "Some story **markdown**",
    },
  },
};
