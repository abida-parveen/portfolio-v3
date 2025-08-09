import type { ChangeEvent } from "react";

export default interface FormControlType {
  name: string;
  email: string;
  message: string;
}

export type InputChangeEvent = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

