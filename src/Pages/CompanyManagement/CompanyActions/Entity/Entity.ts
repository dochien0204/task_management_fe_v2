import { CompanyActionsHandler } from "../Presenter/Handler/HandlerImpl";

export interface CompanyActionsProps {
  handler: CompanyActionsHandler;
}

export interface CompanyFormProps {
  handler: CompanyActionsHandler;
  action: "create" | "detail" | "update";
}

export interface CompanyDetailFormEntity {
  name: string;
  shortName: string;
  website: string;
  address: string;
  phone?: string;
}
