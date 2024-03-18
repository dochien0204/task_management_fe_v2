import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterFormEntity } from "../../Entity/Entity";
import { RegisterUseCase } from "../../Usecase/ServiceImpl";

const DEFAULT_FORM_VALUE = {
  name: "",
  password: "",
  email: "",
  phone: "",
};

const RegisterHandler = (api: RegisterUseCase) => {
  const navigate = useNavigate();

  const [formValue, setFormValue] =
    useState<RegisterFormEntity>(DEFAULT_FORM_VALUE);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleRegister = async () => {
    await api.register(formValue);
    alert("Success");
    navigate("/");
  };

  return {
    formValue,

    handleInputChange,
    handleRegister,
  };
};

export default RegisterHandler;
