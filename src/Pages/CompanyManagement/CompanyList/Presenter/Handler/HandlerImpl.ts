import { CompanyEntity } from "../../Entity/Entity";

export interface CompanyListHandler {
  companyList: CompanyEntity[];

  getCompanyList(): void;
  deleteCompany(id: number): void;
  createCompany(): void;
  checkCompanyDetail(id: number): void;
  updateCompany(id: number): void;
}
