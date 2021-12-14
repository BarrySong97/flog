import { IconMore } from "@douyinfe/semi-icons";
import { Avatar, Descriptions, Table, Tag } from "@douyinfe/semi-ui";
import React, { FC } from "react";
import ExerciseList from "../exercise";
export interface HistoryTrainningProps {}
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

const HistoryTrainning: FC<HistoryTrainningProps> = () => {
  const expandRowRender = (record, index) => {
    return <ExerciseList />;
  };

  return (
    <Table
      rowKey="name"
      columns={columns}
      dataSource={data}
      expandedRowRender={expandRowRender}
      pagination={false}
    />
  );
};

export default HistoryTrainning;
