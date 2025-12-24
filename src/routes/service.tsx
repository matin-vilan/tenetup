import ServicePage from "@/components/Pages/ServicePage";
import { ServiceProvider } from "@/context/servicesContext";

const Service = () => {
  return (
    <ServiceProvider>
      <ServicePage />
    </ServiceProvider>
  );
};

export default Service;
