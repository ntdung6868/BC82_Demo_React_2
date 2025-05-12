import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  // console.log("🚀 ~ ProductDetail ~ params:", params);
  useEffect(() => {
    // Gọi api lấy thông tin sản phẩm theo id

    if (id) {
      console.log("Lay thong tin san pham co id:", id);
    }
  }, [id]);
  return <div>Lay thong tin product co id {id} tu url</div>;
};

export default ProductDetail;
