import axiosConfig from "../../../../Configs/Config";
import { ProjectParam } from "../../Entity/Entity";

const DashboardApi = () => {
  const getStatistics = async (): Promise<any> => {
    return { data: {} };
  };

  //get list project of user
  const getProjects = async (params: ProjectParam): Promise<any> => {
    const url = `project/list-project`;
    return await axiosConfig.get(url, { params });
  };

  return {
    getStatistics,
    getProjects,
  };
};

export default DashboardApi;
