import { CompanyEntity } from "../Entity/Entity";
import { CompanyListApi } from "./ServiceImpl";

const CompanyListService = (api: CompanyListApi) => {
  const getCompanyList = async (): Promise<CompanyEntity[] | undefined> => {
    try {
      const response = await api.getCompanyList();
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getCompanyList,
  };
};

export default CompanyListService;
