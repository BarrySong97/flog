import React, { FC } from "react";
import { Empty } from "@douyinfe/semi-ui";
import {
  IllustrationConstruction,
  IllustrationConstructionDark,
} from "@douyinfe/semi-illustrations";
export interface ChartEmptyProps {
  height?: number;
  title?: string;
  description?: string;
}
const ChartEmpty: FC<ChartEmptyProps> = ({
  height = 150,
  title = "没有title",
  description = "没有description",
}) => {
  return (
    <Empty
      image={
        <IllustrationConstruction style={{ width: 150, height: height }} />
      }
      darkModeImage={
        <IllustrationConstructionDark style={{ width: 150, height: 150 }} />
      }
      title={title}
      description={description}
    />
  );
};

export default ChartEmpty;
