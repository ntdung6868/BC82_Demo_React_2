import { Button, Col, Row, Skeleton, Space, Typography } from "antd";
import React, { useState } from "react";
import ProductItem from "./ProductItem";
import axios from "axios";
import { set } from "react-hook-form";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // const handleFetchProducts = () => {
    //     setIsLoading(true);
    //     axios
    //         .get("https://apistore.cybersoft.edu.vn/api/Product")
    //         .then((response) => {
    //             const data = response.data.content;
    //             setProducts(data);
    //             console.log("Products data:", response.data.content);
    //         })
    //         .catch((error) => {
    //             console.error("Loi ket noi API:", error);
    //             alert("Loi ket noi API");
    //         })
    //         .finally(() => {
    //             console.log("Ket thuc goi api");
    //             setIsLoading(false);
    //         });
    // };

    const handleFetchProducts = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get("https://apistore.cybersoft.edu.vn/api/Product");
            console.log("🚀 ~ handleFetchProducts ~ response:", response);
            const data = response.data.content;
            setProducts(data);
        } catch (error) {
            console.error("Loi ket noi API:", error);
            alert("Loi ket noi API");
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <Row gutter={[48, 48]}>
            <Col span={24}>
                <Button
                    size="large"
                    type="primary"
                    onClick={handleFetchProducts}
                    loading={isLoading}
                    disabled={isLoading}
                >
                    Xem tat ca san pham
                </Button>
            </Col>
            {isLoading && (
                <>
                    {Array.from({ length: 6 }).map((_, index) => {
                        return (
                            <Col span={8} key={index}>
                                <Skeleton.Node active={true} style={{ width: 470, height: 490 }}></Skeleton.Node>
                            </Col>
                        );
                    })}
                </>
            )}
            {!isLoading &&
                products.map((item) => (
                    <Col span={8} key={item.id}>
                        <ProductItem product={item} />
                    </Col>
                ))}
        </Row>
    );
};

export default ProductList;
