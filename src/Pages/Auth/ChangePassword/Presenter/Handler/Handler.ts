import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChangePasswordFormEntity } from "../../Entity/Entity";
import { ChangePasswordUseCase } from "../../Usecase/ServiceImpl";

const DEFAULT_FORM_VALUE = {
  newsPassword: "",
  confirmPassword: "",
};

const ChangePasswordHandler = (api: ChangePasswordUseCase) => {
  const navigate = useNavigate();

  const [formValue, setFormValue] =
    useState<ChangePasswordFormEntity>(DEFAULT_FORM_VALUE);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleChangePassword = async () => {
    await api.changePassword(formValue);
    alert("Password changed.");
    navigate("/");
  };

  return {
    formValue,

    handleInputChange,
    handleChangePassword,
  };
};

export default ChangePasswordHandler;
