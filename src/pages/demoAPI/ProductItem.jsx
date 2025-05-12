import { Button, Col, Space, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product }) => {
    // console.log(product);
    const navigate = useNavigate();
    const handleViewDetail = () => {
        navigate(`/product-detail/${product?.id}`); // slug
    };
    return (
        <Space direction="vertical" size={24} className="w-full">
            <img src={product?.image} className="w-full h-80 object-contain rounded-2xl" />
            <Typography className="!text-2xl !font-semibold">{product?.name}</Typography>
            <Typography className="!text-lg !font-semibold">Gia: {product?.price}$</Typography>
            <Button className="w-full" size="large" onClick={handleViewDetail}>
                Xem chi tiet
            </Button>
        </Space>
    );
};

export default ProductItem;
