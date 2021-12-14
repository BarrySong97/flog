import {
  IconCalendar,
  IconClock,
  IconCopyAdd,
  IconHistogram,
  IconMinusCircle,
} from "@douyinfe/semi-icons";
import {
  Typography,
  Form,
  ArrayField,
  Button,
  SideSheet,
  Tabs,
  TabPane,
} from "@douyinfe/semi-ui";
import Section from "@douyinfe/semi-ui/lib/es/form/section";
import { useBoolean } from "ahooks";

import React, { FC, useMemo, useState } from "react";
import Charts from "./components/charts";

import ExerciseList from "./components/exercise";
import HistoryTrainning from "./components/history-trainning";

import "./index.scss";
export interface PlanDetailProps {}
const { Title } = Typography;

const PlanDetail: FC<PlanDetailProps> = () => {
  const [state, { toggle, setTrue, setFalse }] = useBoolean(false);
  return (
    <div>
      <div className="flex justify-between mb-8">
        <div
          contentEditable
          className=" flex items-center outline-none plan-detail-name "
        >
          <Title heading={2}>计划名称</Title>
        </div>
        <Button
          className="self-end"
          icon={<IconCopyAdd />}
          // onClick={change}
          onClick={() => {
            setTrue();
          }}
          theme="solid"
          type="primary"
        >
          动作列表
        </Button>
      </div>

      <Section text={"统计数据"}>
        <Tabs type="line">
          <TabPane
            tab={
              <span>
                <IconHistogram />
                训练量
              </span>
            }
            itemKey="1"
          >
            <Charts type="bar" />
          </TabPane>
          <TabPane
            tab={
              <span>
                <IconClock />
                训练时间
              </span>
            }
            itemKey="2"
          >
            <Charts type="line" />
          </TabPane>
          <TabPane
            tab={
              <span>
                <IconCalendar />
                训练频率
              </span>
            }
            itemKey="3"
          >
            <Charts type="heatMap" />
          </TabPane>
        </Tabs>
      </Section>
      {/* <Section text={"动作"}>
        <ExerciseList />
      </Section> */}
      <Section text={"历史记录"}>
        <HistoryTrainning />
      </Section>

      <SideSheet title="动作列表" visible={state} onCancel={setFalse}>
        <ExerciseList />
      </SideSheet>
    </div>
  );
};

export default PlanDetail;
