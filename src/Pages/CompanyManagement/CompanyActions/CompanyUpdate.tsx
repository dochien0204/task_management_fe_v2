import CompanyActionsApi from "./Infrastructure/Api/Api";
import CompanyActionsHandler from "./Presenter/Handler/Handler";
import CompanyUpdateComponent from "./Presenter/View/CompanyUpdateComponent";
import CompanyActionsService from "./Usecase/Service";

const CompanyUpdatePage = () => {
  const api = CompanyActionsApi();
  const service = CompanyActionsService(api);
  const handler = CompanyActionsHandler(service);

  return <CompanyUpdateComponent handler={handler} />;
};

export default CompanyUpdatePage;
