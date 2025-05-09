import { Button, Col, Space, Typography } from "antd";
import React from "react";

const ProductItem = ({ product }) => {
    return (
        <Space direction="vertical" size={24} className="w-full">
            <img src={product?.image} className="w-full h-80 object-contain rounded-2xl" />
            <Typography className="!text-2xl !font-semibold">{product?.name}</Typography>
            <Typography className="!text-lg !font-semibold">Gia: {product?.price}$</Typography>
            <Button className="w-full" size="large">
                Xem chi tiet
            </Button>
        </Space>
    );
};

export default ProductItem;
