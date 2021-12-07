import React, { FC, useState } from "react";
import { Card, Typography, Space, Button, Popconfirm } from "@douyinfe/semi-ui";
import ReactECharts from "echarts-for-react";
import styles from "./index.scss";
export interface CardProps {}
const PlanCard: FC<CardProps> = () => {
  const { Text } = Typography;
  const [spacing, setSpacing] = useState(12);
  const { Title } = Typography;
  const option = {
    tooltip: {},
    color: ["#455dee", "#647afd"],
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed"],
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false, //隐藏X轴刻度
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        data: [
          {
            value: 120,
            itemStyle: {
              backgroundColor: "#455dee",
            },
          },
          {
            value: 200,
          },
          {
            value: 130,
          },
        ],
        type: "bar",
        barWidth: "80%",
      },
    ],
  };
  return (
    <div>
      <div className="mb-4 flex justify-end">
        <Space>
          <Button theme="solid" type="primary">
            添加计划
          </Button>
          <Button type="secondary">编辑计划</Button>
        </Space>
      </div>
      <Title style={{ margin: " 0 0 16px 0" }} heading={4}>
        2021-12 ~ 现在
      </Title>
      <Card
        style={{
          margin: " 0 0 16px 0",
          // backgroundColor: " #0093E9",
          // backgroundImage: "linear-gradient(160deg, #273172 0%, #222c5e 100%)",
        }}
        shadows="hover"
        headerLine={false}
        footerStyle={{ display: "flex", justifyContent: "flex-end" }}
        footer={
          <Space>
            <Popconfirm title="确定是否要保存此修改？" content="此修改将不可逆">
              <Button theme="solid" type="tertiary">
                结束计划
              </Button>
            </Popconfirm>
            <Button theme="solid" type="primary">
              进入计划
            </Button>
          </Space>
        }
      >
        <ReactECharts style={{ width: "40%" }} option={option} />
      </Card>
    </div>
  );
};

export default PlanCard;
