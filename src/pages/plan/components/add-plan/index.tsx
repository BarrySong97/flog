import { ArrayField, Button, Col, Form, Row, Space } from "@douyinfe/semi-ui";
import Section from "@douyinfe/semi-ui/lib/es/form/section";
import React, { FC, useState } from "react";
import "./index.scss";
export interface AddPlanProps {}
const AddPlan: FC<AddPlanProps> = () => {
  const [menu, setMenu] = useState<any>([{ name: "脸部贴纸", type: "2D" }]);
  const { Select, InputNumber } = Form;
  return (
    <div className="addPlan">
      <Form>
        <ArrayField field="effects" initValue={menu}>
          {({ add, arrayFields, addWithInitValue }) => (
            <React.Fragment>
              <Section text={"基本信息"}>
                <Form.Input
                  field="name"
                  label="计划名称"
                  placeholder="输入名字"
                ></Form.Input>
              </Section>
              <Section text={"动作详情"}>
                {arrayFields.map(({ field, key, remove }, i) => (
                  <Space className="mr-4">
                    <Select
                      field="exercize"
                      label="动作名称"
                      style={{ width: "150px" }}
                      placeholder="请选择你的动作"
                    >
                      <Select.Option value="operate">运营</Select.Option>
                      <Select.Option value="rd">开发</Select.Option>
                      <Select.Option value="pm">产品</Select.Option>
                      <Select.Option value="ued">设计</Select.Option>
                    </Select>
                    <InputNumber
                      formatter={(value) => `${value}`.replace(/\D/g, "")}
                      min={0}
                      max={Number.MAX_SAFE_INTEGER}
                      field={"sets"}
                      label={`动作组数`}
                      suffix={"组"}
                      hideButtons
                    />
                    <InputNumber
                      formatter={(value) => `${value}`.replace(/\D/g, "")}
                      min={0}
                      max={Number.MAX_SAFE_INTEGER}
                      field={"per"}
                      label={`动作个数`}
                      suffix={"个"}
                      hideButtons
                    />
                  </Space>
                ))}
              </Section>
              <Button
                style={{ width: "100%", marginTop: 16 }}
                onClick={add}
                theme="light"
              >
                新增动作
              </Button>
            </React.Fragment>
          )}
        </ArrayField>
      </Form>
    </div>
  );
};

export default AddPlan;
