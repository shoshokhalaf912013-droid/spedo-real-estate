const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

const RoleKey = {
  OWNER: "OWNER",
  SUPERADMIN: "SUPERADMIN",
  ADMIN: "ADMIN",
  USER: "USER",
};

const PermissionKey = {
  DASHBOARDVIEW: "DASHBOARDVIEW",

  PROPERTYVIEW: "PROPERTYVIEW",
  PROPERTYCREATE: "PROPERTYCREATE",
  PROPERTYEDIT: "PROPERTYEDIT",
  PROPERTYARCHIVE: "PROPERTYARCHIVE",
  PROPERTYRESTORE: "PROPERTYRESTORE",
  PROPERTYDELETE: "PROPERTYDELETE",

  PROJECTVIEW: "PROJECTVIEW",
  PROJECTCREATE: "PROJECTCREATE",
  PROJECTEDIT: "PROJECTEDIT",
  PROJECTARCHIVE: "PROJECTARCHIVE",
  PROJECTRESTORE: "PROJECTRESTORE",
  PROJECTDELETE: "PROJECTDELETE",

  MEDIAVIEW: "MEDIAVIEW",
  MEDIACREATE: "MEDIACREATE",
  MEDIAEDIT: "MEDIAEDIT",
  MEDIAARCHIVE: "MEDIAARCHIVE",
  MEDIADELETE: "MEDIADELETE",

  CONTENTVIEW: "CONTENTVIEW",
  CONTENTCREATE: "CONTENTCREATE",
  CONTENTEDIT: "CONTENTEDIT",
  CONTENTARCHIVE: "CONTENTARCHIVE",
  CONTENTDELETE: "CONTENTDELETE",

  CUSTOMERVIEW: "CUSTOMERVIEW",
  CUSTOMERCREATE: "CUSTOMERCREATE",
  CUSTOMEREDIT: "CUSTOMEREDIT",
  CUSTOMERARCHIVE: "CUSTOMERARCHIVE",
  CUSTOMERDELETE: "CUSTOMERDELETE",

  COMPANYVIEW: "COMPANYVIEW",
  COMPANYCREATE: "COMPANYCREATE",
  COMPANYEDIT: "COMPANYEDIT",
  COMPANYARCHIVE: "COMPANYARCHIVE",
  COMPANYDELETE: "COMPANYDELETE",

  USERVIEW: "USERVIEW",
  USERCREATE: "USERCREATE",
  USEREDIT: "USEREDIT",
  USERACTIVATE: "USERACTIVATE",
  USERDEACTIVATE: "USERDEACTIVATE",
  USERROLEMANAGE: "USERROLEMANAGE",
  USERDELETE: "USERDELETE",

  SETTINGSVIEW: "SETTINGSVIEW",
  SETTINGSMANAGE: "SETTINGSMANAGE",

  AUDITLOGVIEW: "AUDITLOGVIEW",
};

const permissions = [
  {
    key: PermissionKey.DASHBOARDVIEW,
    name: "View dashboard",
    description: "Access the administration dashboard",
  },

  {
    key: PermissionKey.PROPERTYVIEW,
    name: "View properties",
    description: "View property records",
  },
  {
    key: PermissionKey.PROPERTYCREATE,
    name: "Create properties",
    description: "Create new property records",
  },
  {
    key: PermissionKey.PROPERTYEDIT,
    name: "Edit properties",
    description: "Edit existing property records",
  },
  {
    key: PermissionKey.PROPERTYARCHIVE,
    name: "Archive properties",
    description: "Archive property records",
  },
  {
    key: PermissionKey.PROPERTYRESTORE,
    name: "Restore properties",
    description: "Restore archived property records",
  },
  {
    key: PermissionKey.PROPERTYDELETE,
    name: "Delete properties permanently",
    description: "Permanently delete property records",
  },

  {
    key: PermissionKey.PROJECTVIEW,
    name: "View projects",
    description: "View project records",
  },
  {
    key: PermissionKey.PROJECTCREATE,
    name: "Create projects",
    description: "Create new project records",
  },
  {
    key: PermissionKey.PROJECTEDIT,
    name: "Edit projects",
    description: "Edit existing project records",
  },
  {
    key: PermissionKey.PROJECTARCHIVE,
    name: "Archive projects",
    description: "Archive project records",
  },
  {
    key: PermissionKey.PROJECTRESTORE,
    name: "Restore projects",
    description: "Restore archived project records",
  },
  {
    key: PermissionKey.PROJECTDELETE,
    name: "Delete projects permanently",
    description: "Permanently delete project records",
  },

  {
    key: PermissionKey.MEDIAVIEW,
    name: "View media",
    description: "View media records",
  },
  {
    key: PermissionKey.MEDIACREATE,
    name: "Create media",
    description: "Upload and create media records",
  },
  {
    key: PermissionKey.MEDIAEDIT,
    name: "Edit media",
    description: "Edit media records",
  },
  {
    key: PermissionKey.MEDIAARCHIVE,
    name: "Archive media",
    description: "Archive media records",
  },
  {
    key: PermissionKey.MEDIADELETE,
    name: "Delete media permanently",
    description: "Permanently delete media records",
  },

  {
    key: PermissionKey.CONTENTVIEW,
    name: "View content",
    description: "View website content",
  },
  {
    key: PermissionKey.CONTENTCREATE,
    name: "Create content",
    description: "Create website content",
  },
  {
    key: PermissionKey.CONTENTEDIT,
    name: "Edit content",
    description: "Edit website content",
  },
  {
    key: PermissionKey.CONTENTARCHIVE,
    name: "Archive content",
    description: "Archive website content",
  },
  {
    key: PermissionKey.CONTENTDELETE,
    name: "Delete content permanently",
    description: "Permanently delete website content",
  },

  {
    key: PermissionKey.CUSTOMERVIEW,
    name: "View customers",
    description: "View customer records",
  },
  {
    key: PermissionKey.CUSTOMERCREATE,
    name: "Create customers",
    description: "Create customer records",
  },
  {
    key: PermissionKey.CUSTOMEREDIT,
    name: "Edit customers",
    description: "Edit customer records",
  },
  {
    key: PermissionKey.CUSTOMERARCHIVE,
    name: "Archive customers",
    description: "Archive customer records",
  },
  {
    key: PermissionKey.CUSTOMERDELETE,
    name: "Delete customers permanently",
    description: "Permanently delete customer records",
  },

  {
    key: PermissionKey.COMPANYVIEW,
    name: "View companies",
    description: "View company records",
  },
  {
    key: PermissionKey.COMPANYCREATE,
    name: "Create companies",
    description: "Create company records",
  },
  {
    key: PermissionKey.COMPANYEDIT,
    name: "Edit companies",
    description: "Edit company records",
  },
  {
    key: PermissionKey.COMPANYARCHIVE,
    name: "Archive companies",
    description: "Archive company records",
  },
  {
    key: PermissionKey.COMPANYDELETE,
    name: "Delete companies permanently",
    description: "Permanently delete company records",
  },

  {
    key: PermissionKey.USERVIEW,
    name: "View users",
    description: "View user records",
  },
  {
    key: PermissionKey.USERCREATE,
    name: "Create users",
    description: "Create administration users",
  },
  {
    key: PermissionKey.USEREDIT,
    name: "Edit users",
    description: "Edit user records",
  },
  {
    key: PermissionKey.USERACTIVATE,
    name: "Activate users",
    description: "Activate disabled user accounts",
  },
  {
    key: PermissionKey.USERDEACTIVATE,
    name: "Deactivate users",
    description: "Deactivate active user accounts",
  },
  {
    key: PermissionKey.USERROLEMANAGE,
    name: "Manage user roles",
    description: "Change roles assigned to users",
  },
  {
    key: PermissionKey.USERDELETE,
    name: "Delete users permanently",
    description: "Permanently delete user accounts",
  },

  {
    key: PermissionKey.SETTINGSVIEW,
    name: "View settings",
    description: "View platform settings",
  },
  {
    key: PermissionKey.SETTINGSMANAGE,
    name: "Manage settings",
    description: "Change platform settings",
  },

  {
    key: PermissionKey.AUDITLOGVIEW,
    name: "View audit logs",
    description: "View platform activity logs",
  },
];

const adminPermissionKeys = [
  PermissionKey.DASHBOARDVIEW,

  PermissionKey.PROPERTYVIEW,
  PermissionKey.PROPERTYCREATE,
  PermissionKey.PROPERTYEDIT,
  PermissionKey.PROPERTYARCHIVE,
  PermissionKey.PROPERTYRESTORE,

  PermissionKey.PROJECTVIEW,
  PermissionKey.PROJECTCREATE,
  PermissionKey.PROJECTEDIT,
  PermissionKey.PROJECTARCHIVE,
  PermissionKey.PROJECTRESTORE,

  PermissionKey.MEDIAVIEW,
  PermissionKey.MEDIACREATE,
  PermissionKey.MEDIAEDIT,
  PermissionKey.MEDIAARCHIVE,

  PermissionKey.CONTENTVIEW,
  PermissionKey.CONTENTCREATE,
  PermissionKey.CONTENTEDIT,
  PermissionKey.CONTENTARCHIVE,

  PermissionKey.CUSTOMERVIEW,
  PermissionKey.CUSTOMERCREATE,
  PermissionKey.CUSTOMEREDIT,
  PermissionKey.CUSTOMERARCHIVE,

  PermissionKey.COMPANYVIEW,
  PermissionKey.COMPANYCREATE,
  PermissionKey.COMPANYEDIT,
  PermissionKey.COMPANYARCHIVE,

  PermissionKey.USERVIEW,
];

async function createRoles() {
  const roles = [
    {
      key: RoleKey.OWNER,
      name: "Owner",
      description: "Platform owner with full administrative permissions",
      isProtected: true,
    },
    {
      key: RoleKey.SUPERADMIN,
      name: "Super Admin",
      description: "Full administrator with the same permissions as the owner",
      isProtected: true,
    },
    {
      key: RoleKey.ADMIN,
      name: "Admin",
      description: "Operational administrator without permanent deletion access",
      isProtected: true,
    },
    {
      key: RoleKey.USER,
      name: "User",
      description: "Standard public platform user",
      isProtected: true,
    },
  ];

  const createdRoles = {};

  for (const role of roles) {
    createdRoles[role.key] = await prisma.role.upsert({
      where: {
        key: role.key,
      },
      update: {
        name: role.name,
        description: role.description,
        isProtected: role.isProtected,
      },
      create: role,
    });
  }

  return createdRoles;
}

async function createPermissions() {
  const createdPermissions = {};

  for (const permission of permissions) {
    createdPermissions[permission.key] = await prisma.permission.upsert({
      where: {
        key: permission.key,
      },
      update: {
        name: permission.name,
        description: permission.description,
      },
      create: permission,
    });
  }

  return createdPermissions;
}

async function replaceRolePermissions(
  roleId,
  permissionKeys,
  createdPermissions
) {
  await prisma.rolePermission.deleteMany({
    where: {
      roleId,
    },
  });

  if (permissionKeys.length === 0) {
    return;
  }

  await prisma.rolePermission.createMany({
    data: permissionKeys.map((permissionKey) => ({
      roleId,
      permissionId: createdPermissions[permissionKey].id,
    })),
  });
}

async function createRolePermissions(createdRoles, createdPermissions) {
  const allPermissionKeys = permissions.map((permission) => permission.key);

  await replaceRolePermissions(
    createdRoles[RoleKey.OWNER].id,
    allPermissionKeys,
    createdPermissions
  );

  await replaceRolePermissions(
    createdRoles[RoleKey.SUPERADMIN].id,
    allPermissionKeys,
    createdPermissions
  );

  await replaceRolePermissions(
    createdRoles[RoleKey.ADMIN].id,
    adminPermissionKeys,
    createdPermissions
  );

  await replaceRolePermissions(
    createdRoles[RoleKey.USER].id,
    [],
    createdPermissions
  );
}

function getOwnerConfiguration() {
  const email = process.env.OWNEREMAIL?.trim().toLowerCase();
  const password = process.env.OWNERPASSWORD;
  const firstName = process.env.OWNERFIRSTNAME?.trim() || "SPEDO";
  const lastName = process.env.OWNERLASTNAME?.trim() || "Owner";

  if (!email) {
    throw new Error("OWNEREMAIL is missing from the .env file.");
  }

  if (!password) {
    throw new Error("OWNERPASSWORD is missing from the .env file.");
  }

  if (password.length < 12) {
    throw new Error("OWNERPASSWORD must contain at least 12 characters.");
  }

  return {
    email,
    password,
    firstName,
    lastName,
  };
}

async function createOwner(ownerRole) {
  const ownerConfiguration = getOwnerConfiguration();

  const passwordHash = await bcrypt.hash(ownerConfiguration.password, 12);

  const owner = await prisma.user.upsert({
    where: {
      email: ownerConfiguration.email,
    },
    update: {
      firstName: ownerConfiguration.firstName,
      lastName: ownerConfiguration.lastName,
      passwordHash,
      roleId: ownerRole.id,
      isActive: true,
      emailVerifiedAt: new Date(),
      failedLoginCount: 0,
      lockedUntil: null,
    },
    create: {
      firstName: ownerConfiguration.firstName,
      lastName: ownerConfiguration.lastName,
      email: ownerConfiguration.email,
      passwordHash,
      roleId: ownerRole.id,
      isActive: true,
      emailVerifiedAt: new Date(),
    },
  });

  return owner;
}

async function main() {
  console.log("Starting SPEDO database seed...");

  const createdRoles = await createRoles();
  const createdPermissions = await createPermissions();

  await createRolePermissions(createdRoles, createdPermissions);

  const owner = await createOwner(createdRoles[RoleKey.OWNER]);

  console.log("SPEDO database seed completed successfully.");
  console.log(`Owner account created or updated: ${owner.email}`);
}

main()
  .catch((error) => {
    console.error("SPEDO database seed failed.");
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });