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
// import { Tabs as TabsAntd } from "antd/lib";
import React from "react";
import TabPaneItem from "./TabPaneItem";
import Tabs from "./Tabs";


export default {
  title: "Tabs",
  component: Tabs,
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
    tabErrorKeys: {
      defaultValue: ["tabso1"],
    },
    mode: {},
  },
};
const Template: Story = (args) => {
  return (
    <>
      <div style={{ margin: "10px", width: "550px" }}>
        <Tabs {...args} tabErrorKeys={["tabso1"]}>
          <TabPaneItem tab="Tab 1" key={"tabso1"} >
            Content of Tab Pane 1
          </TabPaneItem>
          <TabPaneItem tab="Tab 2" key={"tabso2"}>
            Content of Tab Pane 2
          </TabPaneItem>
          <TabPaneItem tab="Tab 3" key={"tabso3"} className="ant-tabs-tab__child">
            Content of Tab Pane 3
          </TabPaneItem>
        </Tabs>

        <Tabs {...args}>
          <TabPaneItem tab="Tab 1" key="tabso1">
            Content of Tab Pane 1
          </TabPaneItem>
        </Tabs>
      </div>
    </>
  );
};

export const Default = Template.bind({});
