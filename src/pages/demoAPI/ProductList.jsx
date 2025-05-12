import { Button, Col, Row, Skeleton, Space, Typography } from "antd";
import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import axios from "axios";
import { set } from "react-hook-form";

const ProductList = () => {
    const [count, setCount] = useState(0);
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

    /**
     * useEffect: nhận vào 2 tham số
     * 1. Hàm callback (callback function): hàm này sẽ được gọi khi component được render lần đầu tiên
     * 2. Mảng dependencies (dependencies array): mảng này chứa các giá trị mà khi thay đổi sẽ khiến hàm callback được gọi lại
     *
     * Cách hoạt động:
     * - Khi component được render lần đầy tiên, hàm callback sẽ được gọi
     * - Nếu mảng dependencies không rồng, hàm callback sẽ được gọi lại mỗi khi một trong các giá trị trong mảng thay đổi
     */

    // useEffect(() => {}, [count]);

    useEffect(() => {
        console.log("useEffect với mảng dependencies rỗng");
        handleFetchProducts();
    }, []);

    // console.log("hekko dũng nè");

    /**
     * Đối với mảng dependencies có giá trị là một biến (vd: count), thì hàm callback sẽ được gọi lại mỗi khi biến đó thay đồi
     * - Chạy sau khi component render lần đầu tiên và mỗi khi biến count thay đổi
     */

    const handleIncreaseCount = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        console.log("count da thay doi", count);
        document.title = `Gia tri count: ${count}`;
    }, [count]);

    /**
     * useEffect có cleanup function
     * - Chạy sau khi component render lần đầu tiên
     * - Chạy sau khi component render lại
     * - Chạy trước khi component bị unmount
     * - Chạy trước khi component bị xóa khỏi DOM
     * VD: xóa event listener, hủy timer, hủy request API
     */

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("component đã được render");
        }, 1000);
        return () => {
            console.log("component đã bị unmount");
            clearInterval (timer)
        };
    }, []);

    const handleFetchProducts = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get("https://apistore.cybersoft.edu.vn/api/Product");
            // console.log("🚀 ~ handleFetchProducts ~ response:", response);
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
            {/* <Col span={24}>
                <Button
                    size="large"
                    type="primary"
                    // onClick={handleFetchProducts}
                    loading={isLoading}
                    disabled={isLoading}
                >
                    Xem tat ca san pham
                </Button>
            </Col> */}

            <Col span={24}>
                <Button onClick={handleIncreaseCount}>Tang gia tri count len 1</Button>
                <Typography.Title level={3}>Gia tri count: {count}</Typography.Title>
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
