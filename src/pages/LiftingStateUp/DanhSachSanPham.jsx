import React, { useState } from "react";
import SanPham from "./SanPham";
import ChiTietSanPham from "./ChiTietSanPham";
import { data } from "react-router-dom";
import GioHang from "./GioHang";

const products = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./src/assets/phones/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "/src/assets/phones/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraTruoc: "7 MP",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "/src/assets/phones/applephone.jpg",
  },
];

const DanhSachSanPham = () => {
  const [spChiTiet, setSpChiTiet] = useState({
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraTruoc: "7 MP",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./src/assets/phones/applephone.jpg",
  });

  let [gioHang, setGiohang] = useState([
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      giaBan: 27000000,
      hinhAnh: "./src/assets/phones/applephone.jpg",
      soLuong: 2,
    },
  ]);

  //state đặt ở đâu thì hàm xử lý setState sẽ nằm trên component đó
  const themGioHang = (spClick) => {
    //tạo ra sản phảm có số lượng
    const spGioHang = { ...spClick, soLuong: 1 };
    //khi người dùng thêm sp vào giỏ hàng:
    /**
     * th1: sản phẩm đã có trong giỏ hàng -> lấy ra và tăng số lượng
     * th2: sản phẩm chưa tồn trong giỏ hàng -> thêm vào mảng giỏ hàng
     */
    const sp = gioHang.find((item) => item.maSP === spGioHang.maSP);
    if (sp) {
      sp.soLuong += 1;
    } else {
      gioHang = [...gioHang, spGioHang];
    }
    let gioHangUpdate = [...gioHang];
    setGiohang(gioHangUpdate);
  };

  const xoaGioHang = (maSPClick) => {
    let gioHangUpdate = [...gioHang.filter((item) => item.maSP !== maSPClick)];
    setGiohang(gioHangUpdate);
  };

  const tangGiamSoLuong = (maSPClick, soLuong) => {
    //maSP, 1 hoặc -1
    //thay đổi số lượng(tìm ra và + hoặc - số lượng)
    console.log(maSPClick, soLuong);
    let sp = gioHang.find((item) => item.maSP === maSPClick);
    if (sp) {
      sp.soLuong += soLuong;
    }
    let gioHangUpdate = [...gioHang];
    setGiohang(gioHangUpdate);
  };

  return (
    <div className="container">
      <h3 className="text-center">Danh sách sản phẩm</h3>
      <GioHang
        gioHang={gioHang}
        xoaGioHang={xoaGioHang}
        tangGiamSoLuong={tangGiamSoLuong}
      />
      <div className="grid grid-cols-3">
        {products.map((sp, index) => {
          return (
            <SanPham
              key={index}
              sp={sp}
              handleChangeSp={setSpChiTiet}
              themGioHang={themGioHang}
            />
          );
        })}
      </div>

      <h3>Chi tiết sản phẩm</h3>
      <ChiTietSanPham spChiTiet={spChiTiet} />
    </div>
  );
};

export default DanhSachSanPham;
