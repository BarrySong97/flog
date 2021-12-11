import React, { FC, useState } from "react";
import {
  Card,
  Typography,
  Space,
  Button,
  Popconfirm,
  CardGroup,
  SplitButtonGroup,
  Dropdown,
  Modal,
} from "@douyinfe/semi-ui";
import ReactECharts from "echarts-for-react";
import { PlanchartData } from "../../../../services/plan";
import ChartEmpty from "../../../../components/chart-empty";
import {
  IconArrowRight,
  IconDelete,
  IconFolderOpen,
  IconTreeTriangleDown,
} from "@douyinfe/semi-icons";
const { Text, Title } = Typography;
export interface CardProps {
  title: string;
  chartData?: PlanchartData[];
  trainingDays: number;
  exerciseNumber: number;
  onDelete: () => void;
}
const PlanCard: FC<CardProps> = ({
  trainingDays,
  title,
  chartData,
  onDelete,
}) => {
  const option = {
    tooltip: {},
    color: ["#455dee", "#647afd"],
    xAxis: {
      type: "category",
      data: chartData?.map((v) => v.date) ?? [],
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
        data: chartData?.map((v) => v.trainingNum) ?? [],
        label: {
          show: true,
          position: "top",
        },
        type: "bar",
        barWidth: "80%",
      },
    ],
  };

  const renderChart = () => {
    console.log(chartData);

    return chartData?.length ? (
      <ReactECharts style={{ width: "100%" }} option={option} />
    ) : (
      <ChartEmpty
        title="懒狗是这样的"
        description="一次都没有训练"
        height={210}
      />
    );
  };

  return (
    <Card
      title={title}
      style={{
        width: 340,
        margin: " 0 0 16px 0",
        // backgroundColor: " #0093E9",
        // backgroundImage: "linear-gradient(160deg, #273172 0%, #222c5e 100%)",
      }}
      shadows="hover"
      header={
        <>
          <div className="flex justify-between items-center">
            <Title heading={6} style={{ margin: "8px 0" }}>
              {title}
            </Title>
            <div>
              <Text>训练天数: </Text>
              <Text strong>{trainingDays}</Text>
            </div>
          </div>
        </>
      }
      headerLine={false}
      footerStyle={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      footer={
        <>
          <Space>
            <Button icon={<IconArrowRight />} theme="solid" type="primary">
              进入计划
            </Button>

            <Dropdown
              render={
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => {
                      Modal.warning({
                        title: "确定结束计划",
                        content: "结束以后可以恢复",
                        onOk: () => {},
                      });
                    }}
                    type="tertiary"
                    icon={<IconFolderOpen />}
                  >
                    结束计划
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      Modal.warning({
                        title: "确定删除计划",
                        content: "该操作不可逆",
                        onOk: () => {
                          onDelete();
                        },
                      });
                    }}
                    type="danger"
                    icon={<IconDelete />}
                  >
                    删除计划
                  </Dropdown.Item>
                </Dropdown.Menu>
              }
              trigger="click"
              position="bottomRight"
            >
              <Button
                icon={<IconTreeTriangleDown />}
                iconPosition="right"
                theme="light"
                type="primary"
              >
                操作
              </Button>
            </Dropdown>

            {/* <Popconfirm title="确定是否要保存此修改？" content="此修改将不可逆">
              <Button theme="solid" type="tertiary">
                结束计划
              </Button>
            </Popconfirm> */}
          </Space>
        </>
      }
    >
      {renderChart()}
    </Card>
  );
};

export default PlanCard;
