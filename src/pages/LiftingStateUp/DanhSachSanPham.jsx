import React, { useState } from "react";
import SanPham from "./SanPham";
import ChiTietSanPham from "./ChiTietSanPham";
import GioHang from "./GioHang";
import { useDispatch, useSelector } from "react-redux";
import { themGioHang, xoaGioHang, tangGiamSoLuong } from "./../../redux/slice/product.slice";

const DanhSachSanPham = () => {
    const { products, gioHang } = useSelector((state) => state.productSlice);
    // console.log("🚀 ~ dataRedux ~ dataRedux:", dataRedux);
    const dispatch = useDispatch();

    // const tangGiamSoLuong = (maSPClick, soLuong) => {
    //     //maSP, 1 hoặc -1
    //     //thay đổi số lượng(tìm ra và + hoặc - số lượng)
    //     console.log(maSPClick, soLuong);
    //     let sp = gioHang.find((item) => item.maSP === maSPClick);
    //     if (sp) {
    //         sp.soLuong += soLuong;
    //     }
    //     let gioHangUpdate = [...gioHang];
    //     setGiohang(gioHangUpdate);
    // };

    return (
        <div className="container">
            <h3 className="text-center">Danh sách sản phẩm</h3>
            <GioHang
                gioHang={gioHang}
                xoaGioHang={(maSP) => {
                    dispatch(xoaGioHang(maSP));
                }}
                tangGiamSoLuong={(action) => {
                    dispatch(tangGiamSoLuong(action));
                }}
            />
            <div className="grid grid-cols-3">
                {products.map((sp, index) => {
                    return (
                        <SanPham
                            key={index}
                            sp={sp}
                            // handleChangeSp={setSpChiTiet}
                            themGioHang={(sp) => {
                                dispatch(themGioHang(sp));
                            }}
                        />
                    );
                })}
            </div>

            <h3>Chi tiết sản phẩm</h3>
            <ChiTietSanPham spChiTiet={products[0]} />
        </div>
    );
};

export default DanhSachSanPham;
