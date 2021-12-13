import React, { FC, useMemo } from 'react';
import ReactECharts from "echarts-for-react";
import { PlanchartData } from '../../../../services/plan';
import { getChartData } from '../../../../../mock/plan';
export interface ChartsProps {

}
const Charts: FC<ChartsProps> = () => {
  const chartData: PlanchartData[] = useMemo(() => getChartData(), []);
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
    // grid: {
    //   left: "15%",
    // },
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
        // barWidth: "80%",
      },
    ],
  };
  return (
    <div>
     <ReactECharts style={{ width: "100%" }} option={option} />
    </div>
  );
};

export default Charts;
