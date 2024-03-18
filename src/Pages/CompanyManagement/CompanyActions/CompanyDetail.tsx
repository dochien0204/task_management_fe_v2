import CompanyActionsApi from "./Infrastructure/Api/Api";
import CompanyActionsHandler from "./Presenter/Handler/Handler";
import CompanyDetailComponent from "./Presenter/View/CompanyDetailComponent";
import CompanyActionsService from "./Usecase/Service";

const CompanyDetailPage = () => {
  const api = CompanyActionsApi();
  const service = CompanyActionsService(api);
  const handler = CompanyActionsHandler(service);

  return <CompanyDetailComponent handler={handler} />;
};

export default CompanyDetailPage;
