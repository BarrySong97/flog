import { IconMinusCircle } from "@douyinfe/semi-icons";
import { ArrayField, Button, Form } from "@douyinfe/semi-ui";
import React, { FC, useMemo, useState } from "react";
import { getExerciseList } from "../../../../../mock/exercise";
import { Exercise } from "../../../../services/exercize";
export interface ExerciseProps {}
const { Select, InputNumber } = Form;
const ExerciseList: FC<ExerciseProps> = () => {
  const [exercises, setExercises] = useState<any>([
    { id: 1, sets: 4, per: 12, weight: 10 },
  ]);

  const exerciseList: Exercise[] = useMemo(() => getExerciseList(), []);
  return (
    <Form>
      <ArrayField field="exercisePlanList" initValue={exercises}>
        {({ field, add, arrayFields }) => (
          <React.Fragment>
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
  );
};

export default ExerciseList;
