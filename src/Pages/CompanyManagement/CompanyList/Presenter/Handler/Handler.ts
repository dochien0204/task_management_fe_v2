import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CompanyEntity } from "../../Entity/Entity";
import { CompanyListUseCase } from "../../Usecase/ServiceImpl";

const CompanyListHandler = (api: CompanyListUseCase) => {
  const navigate = useNavigate();

  const [companyList, setCompanyList] = useState<CompanyEntity[]>([]);

  const getCompanyList = async () => {
    const response = await api.getCompanyList();
    setCompanyList(response ?? []);
  };

  const deleteCompany = async (id: number) => {
    const companyIndex = companyList.findIndex((company) => company.id === id);
    const newCompanyList = [...companyList];
    newCompanyList.splice(companyIndex, 1);
    setCompanyList(newCompanyList);
  };

  const createCompany = async () => {
    navigate(`/company/create`);
  };

  const checkCompanyDetail = async (id: number) => {
    navigate(`/company/${id}`);
  };

  const updateCompany = async (id: number) => {
    navigate(`/company/update/${id}`);
  };

  return {
    companyList,

    getCompanyList,
    deleteCompany,
    createCompany,
    checkCompanyDetail,
    updateCompany,
  };
};

export default CompanyListHandler;
