import { createContext } from "react";
import type { ServiceFormData } from "@/components/UI/Organisms/AddServiceModal/types";

export interface Service {
  id: string;
  createdAt: Date;
  serviceType: "hosting" | "vps";
  hardDisk: number;
  bandwidth: number;
  emailAccount?: number;
  addonDomain?: number;
  ram?: number;
  cpuCount?: number;
}

export interface ServiceContextType {
  services: Service[];
  addService: (data: ServiceFormData) => void;
  removeService: (id: string) => void;
}

export const ServiceContext = createContext<ServiceContextType | null>(null);
