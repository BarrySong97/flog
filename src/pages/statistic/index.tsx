import {
  DatePicker,
  Descriptions,
  Select,
  Space,
  Tag,
} from "@douyinfe/semi-ui";
import Section from "@douyinfe/semi-ui/lib/es/form/section";
import React, { FC } from "react";
import Charts from "../plan-detail/components/charts";
export interface StatisticProps {}
const Statistic: FC<StatisticProps> = () => {
  const data = [
    { key: "平均训练时间", value: "61min" },
    { key: "平均训练频率", value: "3天" },
    { key: "今年训练天数", value: "168天" },
  ];
  const style = {
    // boxShadow: "var(--semi-shadow-elevated)",
    backgroundColor: "var(--semi-color-bg-2)",

    // padding: "10px",
    // margin: "0 0px 20px",
    // width: "200px",
  };
  return (
    <div>
      <div className="flex justify-between mb-4">
        <Space>
          <Select defaultValue="abc" style={{ width: 120 }}>
            <Select.Option value="abc">2021年</Select.Option>
            <Select.Option value="hotsoon">2022年</Select.Option>
          </Select>

          <DatePicker
            type="dateRange"
            density="compact"
            style={{ width: 260 }}
          />
        </Space>

        <Descriptions size="small" row data={data} style={style} />
      </div>
      <Section text={"训练频率"}>
        <Charts type="heatMap" />
      </Section>
      <Section text={"训练部位分布"}>
        <Charts type="pie" />
      </Section>
      <Section text={"训练量"}>
        <Charts type="bar" />
      </Section>
      <Section text={"训练时间走势"}>
        <Charts type="line" />
      </Section>
    </div>
  );
};

export default Statistic;
