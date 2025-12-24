import Button from "@/components/UI/Atoms/Button/Button";
import Select from "@/components/UI/Atoms/Select/Select";
import Input from "@/components/UI/Atoms/Input/Input";
import Alert from "@/components/UI/Atoms/Alert/Alert";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@/components/UI/Molecules/Modal";
import { useAddService } from "./useAddService";
import { SERVICE_OPTIONS, type ServiceFormData } from "./types";

interface AddServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (data: ServiceFormData) => void;
}

const AddServiceModal = ({
  isOpen,
  onClose,
  onSuccess,
}: AddServiceModalProps) => {
  const {
    register,
    handleSubmit,
    serviceType,
    serviceTypeRegister,
    currentFields,
    getFieldError,
    onSubmit,
    handleClose,
  } = useAddService({ onClose, onSuccess });

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalHeader onClose={handleClose}>Add New Service</ModalHeader>

      <ModalBody>
        <form id="service-form" onSubmit={handleSubmit(onSubmit)}>
          {!serviceType && (
            <Alert variant="info" className="mb-6">
              to create a new service please select service type
            </Alert>
          )}

          <Select
            label="select service type"
            options={SERVICE_OPTIONS}
            {...serviceTypeRegister}
          />

          {currentFields.length > 0 && (
            <div className="flex flex-col gap-4 mt-6">
              {currentFields.map((field) => (
                <Input
                  key={field.name}
                  label={field.label}
                  placeholder={field.placeholder}
                  hint={field.hint}
                  type={field.type}
                  required={field.required}
                  error={getFieldError(field.name)}
                  {...register(field.name)}
                />
              ))}
            </div>
          )}
        </form>
      </ModalBody>

      <ModalFooter>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" form="service-form" disabled={!serviceType}>
          Submit
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddServiceModal;
