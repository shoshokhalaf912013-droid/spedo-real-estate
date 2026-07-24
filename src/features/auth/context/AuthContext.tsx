"use client";

import { createContext } from "react";

export interface AuthUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  permissions: string[];
}

export interface AuthContextValue {
  user: AuthUser | null;
  authenticated: boolean;
  loading: boolean;
  refresh: () => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext =
  createContext<AuthContextValue | null>(null);