import {
  Button,
  Form,
  Input,
  Modal,
  Popconfirm,
  Select,
  Table,
  Tag,
} from "@douyinfe/semi-ui";
import { ColumnProps, RowSelection } from "@douyinfe/semi-ui/lib/es/table";
import Column from "@douyinfe/semi-ui/lib/es/table/Column";
import { useBoolean } from "ahooks";
import React, { FC, useEffect, useState } from "react";
import EditorCell from "../../components/editor-cell";
export interface ExerciseProps {}
const data = [
  {
    id: "1",
    name: "Semi Design 设计稿.fig",

    part: "肩",
  },
  {
    id: "2",
    name: "Semi Design 分享演示文稿",

    part: "背",
  },
  {
    id: "3",
    name: "设计文档",

    part: "腿",
  },
];
export interface Exercise {
  id: string;
  name: string;
  part: string;
}
const Exercise: FC<ExerciseProps> = () => {
  const [exerciseEditModalVisible, { toggle, setTrue, setFalse }] =
    useBoolean(false);

  const [addItem, setAddItem] = useState<Exercise>();
  const [rowSelection, setRowSelection] = useState<RowSelection<Exercise>>();
  const [tableData, setTableData] = useState<Exercise[]>(data);
  const [selectRowkeys, setSelectRowkeys] = useState<string[]>([]);
  const toggleRowSelection = () => {
    if (!rowSelection) {
      setRowSelection({
        width: 48,
        onChange: (selectedRowKeys, selectedRows) => {
          setSelectRowkeys(selectedRowKeys?.map((v) => String(v)) ?? []);
        },
      });
    } else {
      setRowSelection(undefined);
    }
  };

  const onDeleteRow = () => {
    const filter = tableData.filter((v) => !selectRowkeys?.includes(v.id));
    setTableData(filter);
  };
  const renderDeleteBtn = () => {
    return !!rowSelection ? (
      <Popconfirm
        title="确定是否要保存此修改？"
        onConfirm={onDeleteRow}
        content="此修改将不可逆"
      >
        <Button disabled={!selectRowkeys.length} type="danger">
          删除
        </Button>
      </Popconfirm>
    ) : (
      <></>
    );
  };

  const onInsert = (item?: Exercise) => {
    console.log(item);

    if (item) {
      setTableData([...tableData, Object.assign({}, item)]);

      setAddItem(undefined);
    }
  };

  const columns: ColumnProps<Exercise>[] = [
    {
      title: "动作名称",
      dataIndex: "name",
      key: "name",
      width: 500,
      onCell: (record) => ({
        className: " truncate hover:bg-red-700 cursor-pointer",
      }),
      render: (text, record) => (
        <EditorCell
          onChange={(v) => {
            if (record.name != v) {
              record.name = String(v);
              setTableData([...tableData]);
            }
          }}
          value={text}
        />
      ),
    },
    {
      title: "所属部位",
      dataIndex: "part",
      key: "part",
      filters: [
        {
          text: "背",
          value: "背",
        },
        {
          text: "肩",
          value: "肩",
        },
        {
          text: "腿",
          value: "腿",
        },
      ],
      onFilter: (value, record) => !!record?.part.includes(value),
      render: (text, record) => (
        <Select
          onChange={(v) => {
            record.part = String(v);
          }}
          allowCreate={true}
          filter={true}
          defaultValue={text}
          style={{ width: 120 }}
        >
          <Select.Option value="abc">背</Select.Option>
          <Select.Option value="hotsoon">胸</Select.Option>
          <Select.Option value="jianying">腿</Select.Option>
          <Select.Option value="xigua">肩</Select.Option>
        </Select>
      ),
    },
  ];
  const { Option } = Form.Select;
  return (
    <>
      <div className="flex mb-2">
        <Button style={{ marginRight: 4 }} onClick={setTrue}>
          添加
        </Button>
        <Button style={{ marginRight: 4 }} onClick={toggleRowSelection}>
          {!!rowSelection ? "取消多选" : "多选"}
        </Button>
        {renderDeleteBtn()}
      </div>
      <Table
        rowSelection={rowSelection}
        dataSource={tableData}
        rowKey="id"
        pagination={{
          pageSize: 15,
          total: tableData.length,
        }}
        columns={columns}
      ></Table>

      {exerciseEditModalVisible ? (
        <Modal
          title="添加动作"
          visible={exerciseEditModalVisible}
          onOk={() => {
            onInsert(addItem);
            setFalse();
          }}
          onCancel={() => setFalse()}
        >
          <Form
            layout="vertical"
            onValueChange={(values) => {
              values.id = Math.random().toString();
              setAddItem(values as any);
            }}
          >
            <Form.Input field="name" label="动作名称" />
            <Form.Select
              defaultActiveFirstOption
              field="part"
              label="动作部位"
              allowCreate={true}
              filter={true}
              style={{ width: "100%" }}
            >
              <Option value="abc">背</Option>
              <Option value="hotsoon">胸</Option>
              <Option value="jianying">腿</Option>
              <Option value="xigua">肩</Option>
            </Form.Select>
          </Form>
        </Modal>
      ) : (
        <> </>
      )}
    </>
  );
};

export default Exercise;
