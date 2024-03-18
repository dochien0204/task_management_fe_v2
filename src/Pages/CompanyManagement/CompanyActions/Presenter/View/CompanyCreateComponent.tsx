import React from "react";
import "../../../../../Assets/scss/company-actions.scss";
import HeaderComponent from "../../../../../Components/Header/Header";
import { CompanyActionsProps } from "../../Entity/Entity";
import CompanyFormComponent from "./CompanyForm";

const CompanyCreateComponent = ({ handler }: CompanyActionsProps) => {
  return (
    <>
      <HeaderComponent />
      <CompanyFormComponent handler={handler} action="create" />
    </>
  );
};

export default CompanyCreateComponent;
