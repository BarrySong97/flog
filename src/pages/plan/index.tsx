import { Button, CardGroup, SideSheet, Space } from "@douyinfe/semi-ui";
import React, { FC, useMemo, useState } from "react";
import { getPlanList } from "../../../mock/plan";
import { planListItem } from "../../services/plan";
import AddPlan from "./components/add-plan";
import PlanCard from "./components/card";

export interface PlanProps {}
const Plan: FC<PlanProps> = () => {
  const [visible, setVisible] = useState(false);
  const change = () => {
    setVisible(!visible);
  };

  const data: planListItem[] = useMemo(() => getPlanList().list, []);
  console.log(data);

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
        {data.map((v) => (
          <PlanCard
            key={v.id}
            exerciseNumber={v.exerciseNumber}
            trainingDays={v.trainingDays}
            chartData={v.coverChartData}
            title={v.name}
          />
        ))}
      </CardGroup>
      <SideSheet
        placement="right"
        title="滑动侧边栏"
        visible={visible}
        onCancel={change}
      >
        <AddPlan />
      </SideSheet>
    </div>
  );
};

export default Plan;
