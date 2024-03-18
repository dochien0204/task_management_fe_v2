import { CompanyEntity } from "../../CompanyList/Entity/Entity";
import { CompanyActionsApi } from "./ServiceImpl";

const CompanyActionsService = (api: CompanyActionsApi) => {
  const getCompanyDetail = async (
    id: number
  ): Promise<CompanyEntity | undefined> => {
    try {
      const response = await api.getCompanyDetail(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getCompanyDetail,
  };
};

export default CompanyActionsService;
