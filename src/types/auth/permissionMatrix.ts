import { UserRole } from "@/types/auth/UserRole";
import type { Permissions } from "@/types/auth/Permissions";

export const permissionMatrix:
Record<UserRole, Permissions> = {

    [UserRole.Visitor]: {

        canEditMedia: false,

        canEditSpecifications: false,

        canEditSEO: false,

        canEditPricing: false,

        canEditProjects: false,

        canPublish: false,

        canDelete: false,

        canManageUsers: false,

        canImportExcel: false,

    },

    [UserRole.Agent]: {

        canEditMedia: false,

        canEditSpecifications: false,

        canEditSEO: false,

        canEditPricing: false,

        canEditProjects: false,

        canPublish: false,

        canDelete: false,

        canManageUsers: false,

        canImportExcel: false,

    },

    [UserRole.SalesManager]: {

        canEditMedia: true,

        canEditSpecifications: false,

        canEditSEO: false,

        canEditPricing: true,

        canEditProjects: false,

        canPublish: false,

        canDelete: false,

        canManageUsers: false,

        canImportExcel: false,

    },

    [UserRole.ProjectManager]: {

        canEditMedia: true,

        canEditSpecifications: true,

        canEditSEO: true,

        canEditPricing: true,

        canEditProjects: true,

        canPublish: true,

        canDelete: false,

        canManageUsers: false,

        canImportExcel: true,

    },

    [UserRole.SuperAdmin]: {

        canEditMedia: true,

        canEditSpecifications: true,

        canEditSEO: true,

        canEditPricing: true,

        canEditProjects: true,

        canPublish: true,

        canDelete: true,

        canManageUsers: true,

        canImportExcel: true,

    },

    [UserRole.Owner]: {

        canEditMedia: true,

        canEditSpecifications: true,

        canEditSEO: true,

        canEditPricing: true,

        canEditProjects: true,

        canPublish: true,

        canDelete: true,

        canManageUsers: true,

        canImportExcel: true,

    }

};