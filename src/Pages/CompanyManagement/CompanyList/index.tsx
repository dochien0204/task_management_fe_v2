import CompanyListApi from "./Infrastructure/Api/Api";
import CompanyListHandler from "./Presenter/Handler/Handler";
import MainUI from "./Presenter/View/UI";
import CompanyListService from "./Usecase/Service";

const CompanyListComponent = () => {
  const api = CompanyListApi();
  const service = CompanyListService(api);
  const handler = CompanyListHandler(service);

  return <MainUI handler={handler} />;
};

export default CompanyListComponent;
