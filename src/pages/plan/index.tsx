import { Button, CardGroup, SideSheet, Space } from "@douyinfe/semi-ui";
import React, { FC, useState } from "react";
import AddPlan from "./components/add-plan";
import PlanCard from "./components/card";

export interface PlanProps {}
const Plan: FC<PlanProps> = () => {
  const [visible, setVisible] = useState(false);
  const change = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <div className="mb-4 flex justify-start">
        <Space>
          <Button onClick={change} theme="solid" type="primary">
            添加计划
          </Button>
          <Button type="secondary">编辑计划列表</Button>
        </Space>
      </div>
      <CardGroup>
        {new Array(3).fill(null).map((v, idx) => (
          <PlanCard title="测试标题" />
        ))}
      </CardGroup>
      <SideSheet placement="bottom" title="滑动侧边栏" visible={visible} onCancel={change}>
        <AddPlan />
      </SideSheet>
    </div>
  );
};

export default Plan;
