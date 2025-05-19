import fetcher from "./fetcher";

const loginApi = async (data) => {
  try {
    const response = await fetcher.post("/QuanLyNguoiDung/DangNhap", data);
    return response.data.content;
  } catch (error) {
    throw Error(error);
  }
};
export default loginApi;
