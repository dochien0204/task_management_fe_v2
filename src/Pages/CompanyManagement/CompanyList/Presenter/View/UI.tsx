import React from "react";
import "../../../../../Assets/scss/company-list.scss";
import HeaderComponent from "../../../../../Components/Header/Header";
import { CompanyListProps } from "../../Entity/Entity";

const MainUI = ({ handler }: CompanyListProps) => {
  React.useEffect(() => {
    handler.getCompanyList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HeaderComponent />
      <div className="company-list-container">
        <h1>COMPANY MANAGEMENT</h1>
        <button onClick={handler.createCompany}>Create Company</button>
        <div className="column-title">
          <div className="index">No.</div>
          <div className="name">Name</div>
          <div className="short-name">Short Name</div>
          <div className="website">Website</div>
          <div className="address">Address</div>
          <div className="phone">Phone</div>
          <div className="btn-group">Actions</div>
        </div>
        {handler.companyList.map((company, index) => (
          <div key={company.id} className="company">
            <div className="index">{index + 1}</div>
            <div className="name">{company.name}</div>
            <div className="short-name">{company.shortName}</div>
            <div className="website">{company.website}</div>
            <div className="address">{company.address}</div>
            <div className="phone">{company.phone}</div>
            <div className="btn-group">
              <button
                className="btn-detail"
                onClick={() => handler.checkCompanyDetail(company.id)}
              >
                Detail
              </button>
              <button
                className="btn-update"
                onClick={() => handler.updateCompany(company.id)}
              >
                Update
              </button>
              <button
                className="btn-delete"
                onClick={() => handler.deleteCompany(company.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainUI;
