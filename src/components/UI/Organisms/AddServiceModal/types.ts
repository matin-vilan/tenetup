import { z } from "zod";
import { hostingSchema, vpsSchema, serviceFormSchema } from "./validations";

export type HostingFormData = z.infer<typeof hostingSchema>;
export type VPSFormData = z.infer<typeof vpsSchema>;
export type ServiceFormData = z.infer<typeof serviceFormSchema>;

export const SERVICE_OPTIONS = [
  { value: "hosting", label: "Hosting" },
  { value: "vps", label: "VPS" },
];

export interface FieldConfig {
  name: string;
  label: string;
  placeholder: string;
  hint: string;
  type?: "text" | "number";
  required?: boolean;
}
