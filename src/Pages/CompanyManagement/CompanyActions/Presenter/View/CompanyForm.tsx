import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CompanyFormProps } from "../../Entity/Entity";

const CompanyFormComponent = ({ handler, action }: CompanyFormProps) => {
  const navigate = useNavigate();
  const [readonly, setReadonly] = useState<boolean>(false);
  const [adminList, setAdminList] = useState<string[]>([]);

  const title = {
    create: "CREATE NEW COMPANY",
    detail: "COMPANY DETAIL",
    update: "UPDATE COMPANY",
  };

  const addNewAdmin = () => {
    setAdminList([...adminList, ""]);
  };

  const deleteAdmin = (index: number) => {
    const newList = [...adminList];
    newList.splice(index, 1);
    setAdminList(newList);
  };

  const onChangeAdmin = (value: string, index: number) => {
    const newList = [...adminList];
    newList[index] = value;
    setAdminList(newList);
  };

  React.useEffect(() => {
    handler.getCompanyDetail();
    setReadonly(action === "detail");
    if (action !== "create") {
      setAdminList(["admin1@company.com", "admin2@company.com"]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="company-form-container">
      <div className="page-title">
        <h1>{title[action]}</h1>
        <button className="btn-back" onClick={() => navigate("/companies")}>
          Back
        </button>
      </div>

      <div className="company-info">
        <form onSubmit={handler.updateCompanyDetail}>
          <div className="detail-item">
            <label htmlFor="name">Company Name</label>
            <input
              type="text"
              name="name"
              value={handler.detailFormValue.name}
              onChange={handler.handleDetailFormChange}
              placeholder="Company Name"
              required
              readOnly={readonly}
            />
          </div>
          <div className="detail-item">
            <label htmlFor="shortName">Short Name</label>
            <input
              type="text"
              name="shortName"
              value={handler.detailFormValue.shortName}
              onChange={handler.handleDetailFormChange}
              placeholder="Company Short Name"
              required
              readOnly={readonly}
            />
          </div>
          <div className="detail-item">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              name="website"
              value={handler.detailFormValue.website}
              onChange={handler.handleDetailFormChange}
              placeholder="Website"
              required
              readOnly={readonly}
            />
          </div>
          <div className="detail-item">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              value={handler.detailFormValue.address}
              onChange={handler.handleDetailFormChange}
              placeholder="Address"
              readOnly={readonly}
            />
          </div>
          <div className="detail-item">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              value={handler.detailFormValue.phone}
              onChange={handler.handleDetailFormChange}
              placeholder="Phone number"
              readOnly={readonly}
            />
          </div>
          <div className="detail-item">
            <label>Company Admins</label>
            <div className="admin-list">
              {adminList.map((admin, index) => (
                <div key={index} className="admin">
                  <input
                    type="text"
                    value={admin}
                    onChange={(e) => onChangeAdmin(e.target.value, index)}
                    placeholder="name@domain.com"
                    readOnly={readonly}
                  />
                  {!readonly && (
                    <button type="button" onClick={() => deleteAdmin(index)}>
                      Delete
                    </button>
                  )}
                </div>
              ))}
              {!readonly && (
                <button type="button" onClick={addNewAdmin}>
                  Add new admin
                </button>
              )}
            </div>
          </div>

          {!readonly && <button type="submit">Save</button>}
        </form>
      </div>
    </div>
  );
};

export default CompanyFormComponent;
