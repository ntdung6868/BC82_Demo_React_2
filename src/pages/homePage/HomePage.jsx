import React, { useState } from "react";
import Header from "../../components/Header";
import useMyQuery from "../../hooks/useMyQuery";
import { Button, Modal } from "antd";
import useOpen from "../../hooks/useOpen";

const HomePage = () => {
  const { data, isLoading, error } = useMyQuery("/QuanLyPhim/LayDanhSachBanner");
  // console.log("Data:", data);

  const { isModalOpen, showModal, handleCancel, handleOk } = useOpen();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default HomePage;
