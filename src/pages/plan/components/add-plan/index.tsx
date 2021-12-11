import { IconMinusCircle } from "@douyinfe/semi-icons";
import {
  ArrayField,
  Button,
  Col,
  Form,
  Row,
  Space,
  Toast,
} from "@douyinfe/semi-ui";
import Section from "@douyinfe/semi-ui/lib/es/form/section";
import React, { FC, useState } from "react";
import { getExerciseList } from "../../../../../mock/exercise";
import { AddPlanItem, ExercisePlanItem } from "../../../../services/plan";
import { Exercise } from "../../../exercise";
import "./index.scss";
export interface AddPlanProps {
  onAddPlan: (plan: AddPlanItem) => void;
}
const AddPlan: FC<AddPlanProps> = ({ onAddPlan }) => {
  const [exercises, setExercises] = useState<any>([
    { id: 1, sets: 4, per: 12, weight: 10 },
  ]);
  const { Select, InputNumber } = Form;
  const exerciseList: Exercise[] = getExerciseList();
  const handleSubmit = (values: AddPlanItem) => {
    console.log(values);
    if (values.exercisePlanList?.length) {
      const isExerciseValid = values.exercisePlanList.every(
        (item: ExercisePlanItem) =>
          item.per && item.sets && item.id && item.weight
      );

      if (!isExerciseValid) {
        Toast.warning("动作名称不能为空或者组数和个数不能为空");
      } else {
        onAddPlan(values);
      }
    } else {
      Toast.warning("至少有一个动作");
    }
  };
  return (
    <div className="addPlan">
      <Form onSubmit={(values: any) => handleSubmit(values)}>
        <Section text={"基本信息"}>
          <Form.Input
            field={"name"}
            rules={[{ required: true, message: "请输入名称" }]}
            label="计划名称"
            placeholder="输入名字"
          ></Form.Input>
        </Section>
        <ArrayField field="exercisePlanList" initValue={exercises}>
          {({ field, add, arrayFields }) => (
            <React.Fragment>
              <Section text={"动作详情"}>
                {arrayFields.map(({ field, key, remove }, i) => (
                  <div
                    key={key}
                    style={{ width: 400, display: "flex" }}
                    className="justify-between items-center"
                  >
                    <Select
                      field={`${field}[id]`}
                      label="动作名称"
                      style={{ width: 120 }}
                      rules={[{ required: true, message: "请输入名称" }]}
                      placeholder="动作"
                    >
                      {exerciseList.map((v) => (
                        <Select.Option key={v.id} value={v.id}>
                          {v.name}
                        </Select.Option>
                      ))}
                    </Select>
                    <InputNumber
                      formatter={(value) => `${value}`.replace(/\D/g, "")}
                      min={0}
                      max={Number.MAX_SAFE_INTEGER}
                      field={`${field}[sets]`}
                      label={`动作组数`}
                      suffix={"组"}
                      style={{ width: 75 }}
                      hideButtons
                    />
                    <InputNumber
                      formatter={(value) => `${value}`.replace(/\D/g, "")}
                      min={0}
                      max={Number.MAX_SAFE_INTEGER}
                      field={`${field}[per]`}
                      style={{ width: 75 }}
                      label={`动作个数`}
                      suffix={"个"}
                      hideButtons
                    />
                    <InputNumber
                      formatter={(value) => `${value}`.replace(/\D/g, "")}
                      min={0}
                      max={Number.MAX_SAFE_INTEGER}
                      field={`${field}[weight]`}
                      style={{ width: 75 }}
                      label={`动作重量`}
                      suffix={"kg"}
                      hideButtons
                    />
                    <Button
                      type="danger"
                      theme="borderless"
                      style={{ marginTop: 24 }}
                      icon={<IconMinusCircle />}
                      onClick={remove}
                    ></Button>
                  </div>
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
        <Button
          htmlType="submit"
          theme="solid"
          type="primary"
          style={{ width: "100%", marginTop: 16 }}
        >
          提交
        </Button>
      </Form>
    </div>
  );
};

export default AddPlan;
