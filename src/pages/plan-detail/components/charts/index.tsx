import React, { FC, useMemo } from "react";
import ReactECharts from "echarts-for-react";
import { PlanchartData } from "../../../../services/plan";
import { getChartData } from "../../../../../mock/plan";
import * as echarts from "echarts/core";
export interface ChartsProps {
  type: "line" | "bar" | "heatMap";
}
const Charts: FC<ChartsProps> = ({ type }) => {
  const chartData: PlanchartData[] = useMemo(() => getChartData(), []);
  const barOption = {
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

  const lineOption = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        smooth: true,
      },
    ],
  };
  function getVirtulData() {
    var today = echarts.number.parseDate(new Date());
    var dayTime = 3600 * 24 * 1000;
    var thatday = today - dayTime * 365;

    var data = [];
    for (var time = thatday; time < today; time += dayTime) {
      data.push([
        echarts.format.formatTime("yyyy-MM-dd", time),
        Math.floor(Math.random() * 10000),
      ]);
    }
    return {
      data,
      today: echarts.format.formatTime("yyyy-MM-dd", today),
      thatday: echarts.format.formatTime("yyyy-MM-dd", thatday),
    };
  }

  const heatOption = {
    visualMap: {
      min: 0,
      max: 10000,
      inRange: {
        color: ["#1890FF"],
      },
      show: false,
    },
    backgroundColor: "#fff",
    calendar: {
      top:'center',
      // left: 'center',
      right: 'center',
      cellSize: [14, 14],
      range: [getVirtulData()["thatday"], getVirtulData()["today"]],
      itemStyle: {
        borderColor: "#fff",
        borderWidth: 4,
      },
      splitLine: {
        show: false,
      },
      yearLabel: { show: false },
    },
     grid: {
      top: "15%",
    },
    series: {
      type: "heatmap",
      coordinateSystem: "calendar",
      data: getVirtulData()["data"],
    },
  };
  const whichOption = () => {
    switch (type) {
      case "line":
        return <ReactECharts style={{ width: "100%" }} option={lineOption} />;
      case "heatMap":
        return <ReactECharts style={{ width: "100%" }} option={heatOption} />;
      case "bar":
        return <ReactECharts style={{ width: "100%" }} option={barOption} />;
      default:
        break;
    }
  };
  return <div>{whichOption()}</div>;
};

export default Charts;
