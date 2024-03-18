import {
  ProjectEntity,
  ProjectListResponse,
  ProjectParam,
  StatisticsEntity,
} from "../Entity/Entity";

export interface DashboardApi {
  getStatistics: () => Promise<any>;
  getProjects: (params: ProjectParam) => Promise<any>;
}

export interface DashboardUseCase {
  getStatistics: () => Promise<StatisticsEntity | undefined>;
  getProjects: (params: ProjectParam) => Promise<ProjectListResponse>;
}
