import React from "react";
import "../../../../../Assets/scss/company-actions.scss";
import HeaderComponent from "../../../../../Components/Header/Header";
import { CompanyActionsProps } from "../../Entity/Entity";
import CompanyFormComponent from "./CompanyForm";

const CompanyUpdateComponent = ({ handler }: CompanyActionsProps) => {
  return (
    <>
      <HeaderComponent />
      <CompanyFormComponent handler={handler} action="update" />
    </>
  );
};

export default CompanyUpdateComponent;
