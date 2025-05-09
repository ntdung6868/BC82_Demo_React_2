// rxslice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nguoiDung: {
        hoTen: "Dungx",
        tuoi: 22,
    },
};

const userSlice = createSlice({
    // đặt tên cho reducer
    name: "user",
    // thực hiện lưu trữ dữ liệu mặc định trên store
    initialState, // object literal
    // tạo các phương thức dispatch để thay đổi dữ liệu
    reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
