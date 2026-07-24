export const RoleKey = {
  OWNER: "OWNER",
  SUPERADMIN: "SUPERADMIN",
  ADMIN: "ADMIN",
  USER: "USER",
} as const;

export type RoleKeyValue =
  (typeof RoleKey)[keyof typeof RoleKey];

export const SessionCookieName = "spedoSession";

export const SessionDurationDays = 7;

export const MaximumFailedLoginAttempts = 5;

export const LoginLockMinutes = 15;

export const AdministrativeRoleKeys: RoleKeyValue[] = [
  RoleKey.OWNER,
  RoleKey.SUPERADMIN,
  RoleKey.ADMIN,
];

export const PermanentDeleteRoleKeys: RoleKeyValue[] = [
  RoleKey.OWNER,
  RoleKey.SUPERADMIN,
];