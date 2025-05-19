import { Button, Flex, Form, Input, Space, Typography } from "antd";
import React, { use, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import loginApi from "../../apis/auth";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { handleSubmit, control, formState } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      console.log("Login success:", data);
      // localStorage.setItem
      localStorage.setItem("user", JSON.stringify(data));
      // toast
      // lưu lên redux
      // chuyển trang cho user về trang chủ hoặc trang admin
      navigate("/");
    },
    onError: (error) => {
      console.error("Login error:", error);
      alert("Đăng nhập thất bại");
    },
  });

  const onSubmit = (formValue) => {
    // console.log(formValue);
    mutate(formValue);
  };

  if (localStorage.getItem("user")) {
    return <Navigate to="/" />;
  }

  return (
    <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
      <Flex justify="center" align="center" className="h-screen">
        <Space direction="vertical" className="w-1/3 shadow-2xl p-5 rounded-xl">
          <Typography.Title level={3} className="text-center">
            Login
          </Typography.Title>
          <Form.Item label="Username" name="taiKhoan">
            <Controller
              control={control}
              name="taiKhoan"
              render={({ field }) => {
                return <Input size="large" placeholder="Vui lòng nhập tên đăng nhập!" {...field} />;
              }}
            ></Controller>
          </Form.Item>
          <Form.Item label="Password" name="matKhau">
            <Controller
              control={control}
              name="matKhau"
              render={({ field }) => {
                return <Input.Password size="large" placeholder="Vui lòng nhập mật khẩu!" {...field} />;
              }}
            ></Controller>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full" loading={isPending}>
              Đăng nhập
            </Button>
          </Form.Item>
        </Space>
      </Flex>
    </Form>
  );
};

export default Login;
