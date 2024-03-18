import { useEffect, useRef, useState } from "react";
import {
  ProjectEntity,
  ProjectParam,
  StatisticsEntity,
} from "../../Entity/Entity";
import { DashboardUseCase } from "../../Usecase/ServiceImpl";

const DashboardHandler = (api: DashboardUseCase) => {
  const [statistics, setStatistics] = useState<StatisticsEntity>({});
  const searchTimer = useRef<NodeJS.Timeout | null>(null);
  const [projectList, setProjectList] = useState<ProjectEntity[]>([]);
  const [params, setParams] = useState<ProjectParam>(() => {
    const defaultPaging: ProjectParam = {
      page: 1,
      size: 10,
      sortBy: "createdAt",
      sortType: "DESC",
    };

    return Object.assign(defaultPaging);
  });

  const getStatistics = async () => {
    const response = await api.getStatistics();
    setStatistics(response ?? {});
  };

  const getListProject = async () => {
    const response = await api.getProjects(params);

    setProjectList(
      response.results.map((project, index) => ({
        ...project,
        key: project.id,
        index: (params.page - 1) * params.size + index + 1,
      }))
    );
  };

  useEffect(() => {
    searchTimer.current = setTimeout(() => {
      getListProject();
    }, 300);

    return () => {
      if (searchTimer.current) {
        clearTimeout(searchTimer.current);
      }
    };
  }, [params]);

  return {
    statistics,
    projectList,

    getStatistics,
  };
};

export default DashboardHandler;
