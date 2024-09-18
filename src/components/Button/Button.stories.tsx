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
import iconFpt from "../../assets/icons/fpt.svg";

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
      <div style={{ width: 500 }}>
        <Button
          {...args}
          className={classNames("m-l--2xl", args?.className)}
          loading={loading}
          onClick={handleOnClick}
          size="sm"
          iconLeft={<img src={iconFpt} alt="icon" />}
          iconRight={<img src={iconFpt} alt="icon" />}
        >
          Button
        </Button>
        <Button
          {...args}
          className={classNames("m-l--2xl", args?.className)}
          size="sm"
          loading={loading}
          onClick={handleOnClick}
          iconLeft={<img src={iconFpt} alt="icon" />}
        >
          {"Button"}
        </Button>
        <Button
          {...args}
          className={classNames("m-l--2xl", args?.className)}
          loading={loading}
          size="sm"
          onClick={handleOnClick}
          iconRight={<img src={iconFpt} alt="icon" />}
        >
          {"Button"}
        </Button>
      </div>
      <div className="m--2xs">Size 32px</div>
      <div style={{ width: 500 }}>
        <Button
          {...args}
          className={classNames("m-l--2xl", args?.className)}
          loading={loading}
          onClick={handleOnClick}
          iconLeft={<img src={iconFpt} alt="icon" />}
          iconRight={<img src={iconFpt} alt="icon" />}
        >
          <div>Button</div>
        </Button>
        <Button
          {...args}
          className={classNames("m-l--2xl", args?.className)}
          loading={loading}
          onClick={handleOnClick}
          iconLeft={<img src={iconFpt} alt="icon" />}
        >
          Button
        </Button>
        <Button
          {...args}
          className={classNames("m-l--2xl", args?.className)}
          loading={loading}
          onClick={handleOnClick}
          iconRight={<img src={iconFpt} alt="icon" />}
        >
          Button
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

export const Ghost = Template.bind({});
Ghost.args = {
  ...NormalButton.args,
  type: "ghost",
};
Ghost.parameters = {
  docs: {
    description: {
      story: "Some story **markdown**",
    },
  },
};
export const Bleed = Template.bind({});
Bleed.args = {
  ...NormalButton.args,
  type: "bleed-primary",
};
Bleed.parameters = {
  docs: {
    description: {
      story: "Some story **markdown**",
    },
  },
};

export const LinkPlainButton = Template.bind({});
LinkPlainButton.args = {
  ...NormalButton.args,
  type: "link-plain",
};
LinkPlainButton.parameters = {
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
