import { UserRole } from "./UserRole";

export interface Permissions {

    canEditMedia: boolean;

    canEditSpecifications: boolean;

    canEditSEO: boolean;

    canEditPricing: boolean;

    canEditProjects: boolean;

    canPublish: boolean;

    canDelete: boolean;

    canManageUsers: boolean;

    canImportExcel: boolean;

}