import { z } from "zod";

const requiredNumber = (
  fieldName: string,
  minValue: number,
  minMessage: string
) =>
  z
    .union([z.string(), z.number()])
    .refine((val) => val !== "" && val !== undefined && val !== null, {
      message: `${fieldName} is required`,
    })
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val), {
      message: `${fieldName} must be a valid number`,
    })
    .refine((val) => val >= minValue, {
      message: minMessage,
    });

const requiredPositiveNumber = (fieldName: string, message: string) =>
  z
    .union([z.string(), z.number()])
    .refine((val) => val !== "" && val !== undefined && val !== null, {
      message: `${fieldName} is required`,
    })
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val), {
      message: `${fieldName} must be a valid number`,
    })
    .refine((val) => val > 0, {
      message: message,
    });

export const hostingSchema = z.object({
  serviceType: z.literal("hosting"),
  hardDisk: requiredNumber("Hard Disk", 10, "Minimum 10GB required"),
  emailAccount: requiredNumber(
    "Email Account",
    1,
    "Minimum 1 account required"
  ),
  addonDomain: requiredNumber(
    "Addon Domain",
    0,
    "Minimum 0 (negative not allowed)"
  ),
  bandwidth: requiredNumber("Bandwidth", 0, "Minimum 0"),
});

export const vpsSchema = z.object({
  serviceType: z.literal("vps"),
  hardDisk: requiredNumber("Hard Disk", 20, "Minimum 20GB required"),
  ram: requiredPositiveNumber("RAM", "Must be positive, cannot be 0"),
  cpuCount: requiredNumber("CPU Count", 1, "Minimum 1 core required"),
  bandwidth: requiredNumber("Bandwidth", 0, "Minimum 0"),
});

export const serviceFormSchema = z.discriminatedUnion("serviceType", [
  hostingSchema,
  vpsSchema,
]);

export const getSchema = (serviceType: string | undefined) => {
  if (serviceType === "hosting") return hostingSchema;
  if (serviceType === "vps") return vpsSchema;
  return z.object({ serviceType: z.string() });
};
