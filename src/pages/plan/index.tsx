import { IconCopyAdd } from "@douyinfe/semi-icons";
import { Button, CardGroup, SideSheet, Space } from "@douyinfe/semi-ui";
import React, { FC, useMemo, useState } from "react";
import { getPlanList } from "../../../mock/plan";
import { AddPlanItem, PlanListItem } from "../../services/plan";
import AddPlan from "./components/add-plan";
import PlanCard from "./components/card";

export interface PlanProps {}
const Plan: FC<PlanProps> = () => {
  const [visible, setVisible] = useState(false);
  const change = () => {
    setVisible(!visible);
  };
  const [planList, setPlanList] = useState<Array<PlanListItem>>(() =>
    getPlanList()
  );

  const onAddPlan = (item: AddPlanItem) => {
    setPlanList([
      ...planList,
      {
        ...item,
        id: Math.random().toString(),
        coverChartData: [],
        exerciseNumber: item.exercisePlanList.length,
        trainingDays: 0,
      },
    ]);
  };

  const onDeletePlan = (id: string) => {
    setPlanList(planList.filter((v) => v.id !== id));
  };

  return (
    <div>
      <div className="mb-4 flex justify-start">
        <Space>
          <Button
            icon={<IconCopyAdd />}
            onClick={change}
            theme="solid"
            type="primary"
          >
            添加计划
          </Button>
        </Space>
      </div>
      <CardGroup>
        {planList.map((v) => (
          <PlanCard
            onDelete={() => {
              onDeletePlan(v.id);
            }}
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
        <AddPlan
          onAddPlan={(item) => {
            change();
            onAddPlan(item);
          }}
        />
      </SideSheet>
    </div>
  );
};

export default Plan;
