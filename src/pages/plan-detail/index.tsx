import { IconMinusCircle } from "@douyinfe/semi-icons";
import { Typography, Form, ArrayField, Button } from "@douyinfe/semi-ui";
import Section from "@douyinfe/semi-ui/lib/es/form/section";

import React, { FC, useMemo, useState } from "react";
import Charts from "./components/charts";

import ExerciseList from "./components/exercise";
import HistoryTrainning from "./components/history-trainning";

import "./index.scss";
export interface PlanDetailProps {}
const { Title } = Typography;

const PlanDetail: FC<PlanDetailProps> = () => {
  return (
    <div>
      <div contentEditable className="outline-none plan-detail-name mb-8">
        <Title heading={2}>计划名称</Title>
      </div>
      <Section text={"统计数据"}>
        <Charts />
      </Section>
      <Section text={"动作"}>
        <ExerciseList />
      </Section>
      <Section text={"记录"}>
        <HistoryTrainning />
      </Section>
    </div>
  );
};

export default PlanDetail;
