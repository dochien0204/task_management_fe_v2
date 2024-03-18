import CompanyActionsApi from "./Infrastructure/Api/Api";
import CompanyActionsHandler from "./Presenter/Handler/Handler";
import CompanyCreateComponent from "./Presenter/View/CompanyCreateComponent";
import CompanyActionsService from "./Usecase/Service";

const CompanyCreatePage = () => {
  const api = CompanyActionsApi();
  const service = CompanyActionsService(api);
  const handler = CompanyActionsHandler(service);

  return <CompanyCreateComponent handler={handler} />;
};

export default CompanyCreatePage;
