import { ChangeEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CompanyDetailFormEntity } from "../../Entity/Entity";
import { CompanyActionsUseCase } from "../../Usecase/ServiceImpl";

const DEFAULT_DETAIL_FORM_VALUE = {
  name: "",
  shortName: "",
  website: "",
  address: "",
  phone: "",
};

const CompanyActionsHandler = (api: CompanyActionsUseCase) => {
  const navigate = useNavigate();
  const routeParams = useParams();
  const companyId = +(routeParams.id || "");

  const [detailFormValue, setDetailFormValue] =
    useState<CompanyDetailFormEntity>(DEFAULT_DETAIL_FORM_VALUE);

  const getCompanyDetail = async () => {
    if (!companyId) {
      return;
    }

    const response = await api.getCompanyDetail(companyId);
    const { name, shortName, website, phone, address } =
      response ?? DEFAULT_DETAIL_FORM_VALUE;
    setDetailFormValue({
      name,
      shortName,
      website,
      phone,
      address,
    });
  };

  const updateCompanyDetail = async () => {
    alert("Updated");
    navigate("/companies");
  };

  const handleDetailFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setDetailFormValue({
      ...detailFormValue,
      [name]: value,
    });
  };

  return {
    detailFormValue,

    getCompanyDetail,
    updateCompanyDetail,
    handleDetailFormChange,
  };
};

export default CompanyActionsHandler;
