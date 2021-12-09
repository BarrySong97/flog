import React, { FC, useState } from "react";
import {
  Card,
  Typography,
  Space,
  Button,
  Popconfirm,
  CardGroup,
} from "@douyinfe/semi-ui";
import ReactECharts from "echarts-for-react";
import { PlanchartData } from "../../../../services/plan";
const { Text, Title } = Typography;
export interface CardProps {
  title: string;
  chartData: PlanchartData[];
  trainingDays: number;
  exerciseNumber: number;
}
const PlanCard: FC<CardProps> = ({
  trainingDays,
  title,
  chartData,
  exerciseNumber,
}) => {
  const option = {
    tooltip: {},
    color: ["#455dee", "#647afd"],
    xAxis: {
      type: "category",
      data: chartData.map((v) => v.date),
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
    grid: {
      left: "15%",
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        formatter: function (value: string) {
          return Math.floor(Number(value) / 1000) + "k";
        },
      },
    },
    series: [
      {
        data: chartData.map((v) => v.trainingNum),
        label: {
          show: true,
          position: "top",
        },
        type: "bar",
        barWidth: "80%",
      },
    ],
  };
  return (
    <Card
      title={title}
      style={{
        width: 400,
        margin: " 0 0 16px 0",
        // backgroundColor: " #0093E9",
        // backgroundImage: "linear-gradient(160deg, #273172 0%, #222c5e 100%)",
      }}
      shadows="hover"
      header={
        <div className="flex justify-between items-center">
          <Title heading={6} style={{ margin: "8px 0" }}>
            {title}
          </Title>
          <div>
            <Text>已训练天数: </Text>
            <Text strong>{trainingDays}</Text>
          </div>
        </div>
      }
      headerLine={false}
      footerStyle={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      footer={
        <>
          <div>
            <Text>训练动作: </Text>
            <Text strong>{exerciseNumber}</Text>
          </div>
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
        </>
      }
    >
      <ReactECharts style={{ width: "100%" }} option={option} />
    </Card>
  );
};

export default PlanCard;
