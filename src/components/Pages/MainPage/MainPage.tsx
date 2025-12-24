import { useState } from "react";
import Button from "@/components/UI/Atoms/Button/Button";
import Typography from "@/components/UI/Atoms/Typography/Typography";
import AddServiceModal from "@/components/UI/Organisms/AddServiceModal";

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-full py-20">
      <div className="flex flex-col items-center gap-4 text-center">
        <Typography variant="h2">
          You haven't created any services yet.
        </Typography>
        <Typography variant="body">Add a new service to get started</Typography>
        <Button className="mt-4" onClick={() => setIsModalOpen(true)}>
          Add New Service
          <span className="text-lg">+</span>
        </Button>
      </div>

      <AddServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={(data) => {
          console.log("Service created:", data);
        }}
      />
    </div>
  );
};

export default MainPage;
