import React, { FC, useMemo } from "react";
import ReactECharts from "echarts-for-react";
import { PlanchartData } from "../../../../services/plan";
import { getChartData } from "../../../../../mock/plan";
import * as echarts from "echarts/core";
export interface ChartsProps {
  type: "line" | "bar" | "heatMap" | "pie";
}
const colorList = [
  "#73DDFF",
  "#73ACFF",
  "#FDD56A",
  "#FDB36A",
  "#FD866A",
  "#9E87FF",
  "#58D5FF",
];

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
      top: "center",
      // left: 'center',
      right: "center",
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

  const pieOption = {
    title: {
      text: "pieChart",
      x: "center",
      y: "center",
      textStyle: {
        fontSize: 20,
      },
    },
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        type: "pie",
        center: ["50%", "50%"],
        radius: ["24%", "45%"],
        clockwise: true,
        avoidLabelOverlap: true,
        hoverOffset: 15,
        itemStyle: {
          normal: {
            color: function (params) {
              return colorList[params.dataIndex];
            },
          },
        },
        label: {
          show: true,
          position: "outside",
          formatter: "{a|{b}：{d}%}\n{hr|}",
          rich: {
            hr: {
              /*
            再次声明一下，大家在这里修改之后不要点击上面的保存！
    不要点击保存！不要点击保存！重要的事情说三遍！
    你的修改会覆盖我的原代码的！感谢理解！
                                --2020/8/4  by--suwanqing
                    */
              backgroundColor: "t",
              borderRadius: 3,
              width: 3,
              height: 3,
              padding: [3, 3, 0, -12],
            },
            a: {
              padding: [-30, 15, -20, 15],
            },
          },
        },
        labelLine: {
          normal: {
            length: 20,
            length2: 30,
            lineStyle: {
              width: 1,
            },
          },
        },
        data: [
          {
            name: "一月",
            value: 1.45,
          },
          {
            name: "二月",
            value: 2.93,
          },
          {
            name: "三月",
            value: 3.15,
          },
          {
            name: "四月",
            value: 4.78,
          },
          {
            name: "五月",
            value: 5.93,
          },
          {
            name: "六月",
            value: 5.73,
          },
        ],
      },
    ],
  };
  const whichOption = () => {
    switch (type) {
      case "line":
        return <ReactECharts style={{ width: "100%" }} option={lineOption} />;
      case "heatMap":
        return <ReactECharts style={{ width: "100%" }} option={heatOption} />;
      case "bar":
        return <ReactECharts style={{ width: "100%" }} option={barOption} />;
      case "pie":
        return <ReactECharts style={{ width: "100%" }} option={pieOption} />;
      default:
        break;
    }
  };
  return <div>{whichOption()}</div>;
};

export default Charts;
