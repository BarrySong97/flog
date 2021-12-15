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
  Space,
  Table,
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
const data = [
  {
    key: "1",
    name: "Semi Design 设计稿.fig",
    nameIconSrc:
      "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/figma-icon.png",
    size: "2M",
    owner: "姜鹏志",
    updateTime: "2020-02-02 05:13",
    avatarBg: "grey",
  },
  {
    key: "2",
    name: "Semi Design 分享演示文稿",
    nameIconSrc:
      "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png",
    size: "2M",
    owner: "郝宣",
    updateTime: "2020-01-17 05:31",
    avatarBg: "red",
  },
  {
    key: "3",
    name: "设计文档",
    nameIconSrc:
      "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png",
    size: "34KB",
    owner: "Zoey Edwards",
    updateTime: "2020-01-26 11:01",
    avatarBg: "light-blue",
  },
];

const columns = [
  {
    title: "训练日期",
    width: 500,
    dataIndex: "name",
    render: () => {
      return `2020-01-01`;
    },
  },
  {
    title: "训练量",
    dataIndex: "size",
    render: () => {
      return 2000;
    },
  },
  {
    title: "训练时间",
    dataIndex: "owner",
    render: () => {
      return `1:15`;
    },
  },
];
const PlanDetail: FC<PlanDetailProps> = () => {
  const [state, { toggle, setTrue, setFalse }] = useBoolean(false);
  const [tableData, setTableData] = useState(data);
  const expandRowRender = (record, index) => {
    return <ExerciseList />;
  };

  const onAdd = () => {
    setTableData([...tableData, tableData[0]]);
  };
  const scroll = { y: 400, x: 900 };
  const style = { width: "100%" };
  return (
    <div>
      <div className="flex justify-between mb-8">
        <div
          contentEditable
          className=" flex items-center outline-none plan-detail-name "
        >
          <Title heading={2}>计划名称</Title>
        </div>

        <Space className=" self-end">
          <Button onClick={() => onAdd()} theme="solid" type="primary">
            添加记录
          </Button>
          <Button
            // onClick={change}
            onClick={() => {
              setTrue();
            }}
            theme="solid"
            type="primary"
          >
            动作列表
          </Button>
        </Space>
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
        <Table
          rowKey="name"
          columns={columns}
          dataSource={tableData}
          expandedRowRender={expandRowRender}
          pagination={false}
          scroll={scroll}
          style={style}
        />
      </Section>

      <SideSheet title="动作列表" visible={state} onCancel={setFalse}>
        <ExerciseList />
      </SideSheet>
    </div>
  );
};

export default PlanDetail;
