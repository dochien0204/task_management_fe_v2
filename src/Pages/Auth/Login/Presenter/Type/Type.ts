import { Company, Group, Role, Status } from "../../../../../Common/Interface";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
  company: Company;
  group: Group;
  role: Role;
  status: Status;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  userId: number;
  username: string;
}

export interface UserSliceType {
  data: User;
}
