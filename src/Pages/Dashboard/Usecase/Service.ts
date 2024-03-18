import {
  ProjectEntity,
  ProjectListResponse,
  ProjectParam,
  StatisticsEntity,
} from "../Entity/Entity";
import { DashboardApi } from "./ServiceImpl";

const DashboardService = (api: DashboardApi) => {
  const getStatistics = async (): Promise<StatisticsEntity | undefined> => {
    try {
      const response = await api.getStatistics();
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getProjects = async (
    params: ProjectParam
  ): Promise<ProjectListResponse> => {
    try {
      const results = await api.getProjects(params);

      debugger;
      return results.data;
    } catch (error) {
      throw error;
    }
  };

  return {
    getStatistics,
    getProjects,
  };
};

export default DashboardService;
