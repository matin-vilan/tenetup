import { useState } from "react";
import Button from "@/components/UI/Atoms/Button/Button";
import Typography from "@/components/UI/Atoms/Typography/Typography";
import AddServiceModal from "@/components/UI/Organisms/AddServiceModal";
import ServiceCard from "@/components/UI/Molecules/ServiceCard/ServiceCard";
import { useServices } from "@/context/servicesContext";

const ServicePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { services, addService, removeService } = useServices();

  const hasServices = services.length > 0;

  return (
    <div className=" py-8 px-6">
      {hasServices ? (
        <>
          <div className="flex items-center justify-between mb-6">
            <Typography variant="h2">Your Services</Typography>
            <Button onClick={() => setIsModalOpen(true)}>
              Add New Service
              <span className="text-lg">+</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                serviceType={service.serviceType}
                hardDisk={service.hardDisk}
                bandwidth={service.bandwidth}
                emailAccount={
                  service.serviceType === "hosting"
                    ? service.emailAccount
                    : undefined
                }
                addonDomain={
                  service.serviceType === "hosting"
                    ? service.addonDomain
                    : undefined
                }
                ram={service.serviceType === "vps" ? service.ram : undefined}
                cpuCount={
                  service.serviceType === "vps" ? service.cpuCount : undefined
                }
                onDelete={removeService}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-full py-20">
          <div className="flex flex-col items-center gap-4 text-center">
            <Typography variant="h2">
              You haven't created any services yet.
            </Typography>
            <Typography variant="body">
              Add a new service to get started
            </Typography>
            <Button className="mt-4" onClick={() => setIsModalOpen(true)}>
              Add New Service
              <span className="text-lg">+</span>
            </Button>
          </div>
        </div>
      )}

      <AddServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={(data) => {
          addService(data);
        }}
      />
    </div>
  );
};

export default ServicePage;
