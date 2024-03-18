import { CompanyEntity } from "../../CompanyList/Entity/Entity";

export interface CompanyActionsApi {
  getCompanyDetail: (id: number) => Promise<any>;
}

export interface CompanyActionsUseCase {
  getCompanyDetail: (id: number) => Promise<CompanyEntity | undefined>;
}
