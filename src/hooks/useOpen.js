import { useState } from "react";

const useOpen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    showModal,
    handleOk,
    handleCancel,
  };
};

export default useOpen;
