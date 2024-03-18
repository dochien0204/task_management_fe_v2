const AXIOS_TIMEOUT_REQUEST = 5000;

const STORAGE_KEYS = {
  TOKEN: "token",
};

enum RoleCode {
  SYSTEM_ADMIN = "sys_administrator",
  COMPANY_ADMIN = "administrator",
  USER = "employee",
}

enum ActiveCode {
  ACTIVE = "user_active",
}

enum Permission {
  NONE,
  GRANT,
  DENY,
  INHERIT,
}

export {
  AXIOS_TIMEOUT_REQUEST,
  STORAGE_KEYS,
  RoleCode,
  ActiveCode,
  Permission,
};
