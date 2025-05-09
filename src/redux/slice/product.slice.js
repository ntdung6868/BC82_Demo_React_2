import { createSlice, current } from "@reduxjs/toolkit";
import GioHang from "../../pages/LiftingStateUp/GioHang";
import { act } from "react";

const initialState = {
    products: [
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
    ],
    gioHang: [],
    checkExist: {},
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        themGioHang: (state, action) => {
            // khi bấm cần gửi thông tin sp lên
            // gửi toàn bộ thông tin sp lên redux
            // chỉ gửi mỗi id sản phẩm ==> tìm xem sp cần bỏ giỏ hàng bên trong
            // product ==> find  ==> thêm vào || + 1

            // const spGioHang = { ...action.payload, soLuong: 1 };
            // const checkExist = state.gioHang.findIndex((item) => item.maSP === spGioHang.maSP);

            // if (checkExist != -1) {
            //     state.gioHang[checkExist].soLuong += 1;
            // } else {
            //     state.gioHang = [...state.gioHang, spGioHang];
            // }

            // lấy maSP kiểm tra xem đã có sản phẩm hay chưa
            let check = state.checkExist[action.payload.maSP];

            if (check) {
                const index = state.gioHang.findIndex((item) => item.maSP === action.payload.maSP);
                state.gioHang[index].soLuong += 1;
            } else {
                const spGioHang = { ...action.payload, soLuong: 1 };
                state.gioHang = [...state.gioHang, spGioHang];
                // cập nhật checkExist
                state.checkExist[action.payload.maSP] = true;
            }
        },
        xoaGioHang: (state, action) => {
            // console.log("🚀 ~ action:", action);
            let check = state.checkExist[action.payload];
            if (check) {
                state.gioHang = state.gioHang.filter((item) => item.maSP !== action.payload);
                // xóa checkExist
                delete state.checkExist[action.payload];
            }
        },
        tangGiamSoLuong: (state, action) => {
            // console.log("🚀 ~ action:", action);
            const { maSP, amount } = action.payload;
            let check = state.checkExist[maSP];

            if (check) {
                const index = state.gioHang.findIndex((item) => item.maSP === maSP);
                const newSoLuong = state.gioHang[index].soLuong + amount;
                if (newSoLuong > 0) {
                    state.gioHang[index].soLuong = newSoLuong;
                } else {
                    state.gioHang = state.gioHang.filter((item) => item.maSP !== maSP);
                    delete state.checkExist[maSP];
                }
            }
        },
    },
});

export const { themGioHang, xoaGioHang, tangGiamSoLuong } = productSlice.actions;

export default productSlice.reducer;

// loaij bỏ phần tử trùng lặp cảu mảng
// [1,3,5,7,2,1,3,5,7,1] : => loại bỏ hết các phần tử trùng lặp
// duyệt vòng lặp ==> vòng lặp con ==> on2
//
