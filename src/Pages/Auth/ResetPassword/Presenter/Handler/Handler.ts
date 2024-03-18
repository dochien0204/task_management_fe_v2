import { ChangeEvent, useState } from "react";
import { ResetPasswordFormEntity } from "../../Entity/Entity";
import { ResetPasswordUseCase } from "../../Usecase/ServiceImpl";

const DEFAULT_FORM_VALUE = {
  email: "",
};

const ResetPasswordHandler = (api: ResetPasswordUseCase) => {
  const [formValue, setFormValue] =
    useState<ResetPasswordFormEntity>(DEFAULT_FORM_VALUE);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleResetPassword = async () => {
    await api.resetPassword(formValue);
    alert("Please check your email.");
  };

  return {
    formValue,

    handleInputChange,
    handleResetPassword,
  };
};

export default ResetPasswordHandler;
