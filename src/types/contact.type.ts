import type { ChangeEvent } from "react";

export interface FormControlType {
  name: string;
  email: string;
  message: string;
}

export interface errorType {
  data?: {
    validationErrors?: {
      name?: string;
      email?: string;
      message?: string;
    };
  };
}

export interface ContactDataType {
  id: number;
  text: string[];
  iconLight: string;
  iconDark: string;
  link: string;
}

export type FormChangeEvent = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;
