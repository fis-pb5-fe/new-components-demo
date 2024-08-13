import type { TabPaneProps as TabPanePropsAnt } from "antd/lib/tabs";
import "./Tabs.scss";
import TabPane  from "antd/lib/tabs/TabPane";
import React from "react";


function TabPaneItem(props: TabPanePropsAnt) {
  return <TabPane {...props} />;
}

export default TabPaneItem;
