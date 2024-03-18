import { ChangeEvent } from "react";
import { CompanyDetailFormEntity } from "../../Entity/Entity";

export interface CompanyActionsHandler {
  detailFormValue: CompanyDetailFormEntity;

  getCompanyDetail(): void;
  updateCompanyDetail(): void;
  handleDetailFormChange(e: ChangeEvent<HTMLInputElement>): void;
}
