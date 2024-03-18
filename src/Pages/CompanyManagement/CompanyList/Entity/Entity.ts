import { CompanyListHandler } from "../Presenter/Handler/HandlerImpl";

export interface CompanyListProps {
  handler: CompanyListHandler;
}

export interface CompanyEntity {
  id: number;
  name: string;
  shortName: string;
  website: string;
  address: string;
  phone: string;
}
