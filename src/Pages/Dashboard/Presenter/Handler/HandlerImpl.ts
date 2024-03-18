import { ProjectEntity, StatisticsEntity } from "../../Entity/Entity";

export interface DashboardHandler {
  statistics: StatisticsEntity;
  projectList: ProjectEntity[];

  getStatistics(): void;
}
