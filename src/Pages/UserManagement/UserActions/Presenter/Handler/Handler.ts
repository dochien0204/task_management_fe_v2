import { ChangeEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  UserDetailFormEntity,
  UserPermissionEntity,
} from "../../Entity/Entity";
import { UserActionsUseCase } from "../../Usecase/ServiceImpl";

const DEFAULT_DETAIL_FORM_VALUE = {
  name: "",
  email: "",
  phone: "",
  address: "",
};

const UserActionsHandler = (api: UserActionsUseCase) => {
  const navigate = useNavigate();
  const routeParams = useParams();
  const userId = +(routeParams.id || "");

  const [userPermission, setUserPermission] = useState<UserPermissionEntity[]>(
    []
  );
  const [detailFormValue, setDetailFormValue] = useState<UserDetailFormEntity>(
    DEFAULT_DETAIL_FORM_VALUE
  );

  const getUserDetail = async () => {
    if (!userId) {
      return;
    }

    const response: any = await api.getUserDetail(userId);
    const { name, email, phone, address } =
      response ?? DEFAULT_DETAIL_FORM_VALUE;
    setDetailFormValue({
      name,
      email,
      phone,
      address,
    });
  };

  const getUserPermission = async () => {
    if (!userId) {
      return;
    }

    const response = await api.getUserPermission(userId);
    setUserPermission(response ?? []);
  };

  const updateUserDetail = async () => {
    alert("Updated");
    navigate("/users");
  };

  const handleDetailFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setDetailFormValue({
      ...detailFormValue,
      [name]: value,
    });
  };

  return {
    userPermission,
    detailFormValue,

    getUserDetail,
    getUserPermission,
    updateUserDetail,
    handleDetailFormChange,
  };
};

export default UserActionsHandler;
