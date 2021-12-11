import { Exercise } from "./exercize";

export interface PlanListItem {
  id: string;
  name: string;
  exerciseNumber: number;
  trainingDays: number;
  coverChartData?: PlanchartData[];
}

export interface PlanchartData {
  date: string;
  trainingNum: number;
}

export interface AddPlanItem {
  name: string;
  exercisePlanList: ExercisePlanItem[];
}

export interface ExercisePlanItem {
  id: string;
  name: string;
  sets: number;
  per: number;
  weight: number;
}

export interface planDetail {
  id: string;
  name: string;
  exerciseNumber: number;
  trainingDays: number;
  coverChartData: Map<Date, number>;
  exercisePlanList: ExercisePlanItem[];
}
