import DashboardApi from "./Infrastructure/Api/Api";
import DashboardHandler from "./Presenter/Handler/Handler";
import MainUI from "./Presenter/View/UI";
import DashboardService from "./Usecase/Service";

const DashboardComponent = () => {
  const api = DashboardApi();
  const service = DashboardService(api);
  const handler = DashboardHandler(service);

  return <MainUI handler={handler} />;
};

export default DashboardComponent;
