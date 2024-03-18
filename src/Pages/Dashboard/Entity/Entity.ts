import { DashboardHandler } from "../Presenter/Handler/HandlerImpl";

export interface DashboardProps {
  handler: DashboardHandler;
}

export interface StatisticsEntity {}

export interface ProjectEntity {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface ProjectListResponse {
  message: string;
  status: string;
  results: ProjectEntity[];
}

export interface ProjectParam {
  page: number;
  size: number;
  sortBy: string;
  sortType: string;
}
