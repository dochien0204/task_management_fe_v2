import { CompanyEntity } from "../Entity/Entity";

export interface CompanyListApi {
  getCompanyList: () => Promise<any>;
}

export interface CompanyListUseCase {
  getCompanyList: () => Promise<CompanyEntity[] | undefined>;
}
