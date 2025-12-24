import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getSchema } from "./validations";
import { type ServiceFormData, type FieldConfig } from "./types";

const FIELDS = {
  hardDisk: (placeholder: string, hint: string): FieldConfig => ({
    name: "hardDisk",
    label: "Hard Disk(GB)",
    placeholder,
    hint,
    type: "number",
    required: true,
  }),
  bandwidth: (placeholder: string): FieldConfig => ({
    name: "bandwidth",
    label: "Bandwidth (GB)",
    placeholder,
    hint: "can be -1 or bigger than 1, zero not allowed",
    type: "number",
    required: true,
  }),
  emailAccount: {
    name: "emailAccount",
    label: "Email Account",
    placeholder: "10",
    hint: "Number of email accounts",
    type: "number",
    required: true,
  } as FieldConfig,
  addonDomain: {
    name: "addonDomain",
    label: "Addon Domain",
    placeholder: "10",
    hint: "Minimum 0",
    type: "number",
    required: true,
  } as FieldConfig,
  ram: {
    name: "ram",
    label: "RAM (GB)",
    placeholder: "16",
    hint: "Cannot be 0, must be positive",
    type: "number",
    required: true,
  } as FieldConfig,
  cpuCount: {
    name: "cpuCount",
    label: "CPU Count",
    placeholder: "10",
    hint: "Number of CPU cores",
    type: "number",
    required: true,
  } as FieldConfig,
};

const FORM_FIELDS: Record<string, FieldConfig[]> = {
  hosting: [
    FIELDS.hardDisk("50", "Recommended >= 10GB"),
    FIELDS.emailAccount,
    FIELDS.addonDomain,
    FIELDS.bandwidth("100"),
  ],
  vps: [
    FIELDS.hardDisk("100", "Minimum 20GB"),
    FIELDS.ram,
    FIELDS.cpuCount,
    FIELDS.bandwidth("200"),
  ],
};

interface UseAddServiceProps {
  onSuccess?: (data: ServiceFormData) => void;
  onClose: () => void;
}

export const useAddService = ({ onSuccess, onClose }: UseAddServiceProps) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    clearErrors,
    formState: { errors },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = useForm<any>({
    resolver: (values, context, options) => {
      const schema = getSchema(values.serviceType);
      return zodResolver(schema)(values, context, options);
    },
  });

  const serviceType = useWatch({ control, name: "serviceType" });

  // Custom register for serviceType with onChange handler
  const serviceTypeRegister = {
    ...register("serviceType"),
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => {
      register("serviceType").onChange(e);
      clearErrors();
    },
  };

  const onSubmit = (data: unknown) => {
    console.log({ data });
    onSuccess?.(data as ServiceFormData);
    handleClose();
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const currentFields = serviceType ? FORM_FIELDS[serviceType] ?? [] : [];

  const getFieldError = (fieldName: string) => {
    return (errors[fieldName] as { message?: string } | undefined)?.message;
  };

  return {
    register,
    handleSubmit,
    serviceType,
    serviceTypeRegister,
    currentFields,
    getFieldError,
    onSubmit,
    handleClose,
  };
};
