import { useState, type ReactNode } from "react";
import type { ServiceFormData } from "@/components/UI/Organisms/AddServiceModal/types";
import { ServiceContext, type Service } from "./ServiceContext";

export const ServiceProvider = ({ children }: { children: ReactNode }) => {
  const [services, setServices] = useState<Service[]>([]);

  const addService = (data: ServiceFormData) => {
    const newService: Service = {
      id: crypto.randomUUID(),
      createdAt: new Date(),
      serviceType: data.serviceType,
      hardDisk: data.hardDisk,
      bandwidth: data.bandwidth,
      ...(data.serviceType === "hosting" && {
        emailAccount: data.emailAccount,
        addonDomain: data.addonDomain,
      }),
      ...(data.serviceType === "vps" && {
        ram: data.ram,
        cpuCount: data.cpuCount,
      }),
    };
    setServices((prev) => [...prev, newService]);
  };

  const removeService = (id: string) => {
    setServices((prev) => prev.filter((service) => service.id !== id));
  };

  return (
    <ServiceContext.Provider value={{ services, addService, removeService }}>
      {children}
    </ServiceContext.Provider>
  );
};
