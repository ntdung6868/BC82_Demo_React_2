import React from "react";
import { Input, Button, Space, Form } from "antd";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

const schema = yup.object().shape({
    username: yup.string().required("Username is required").matches(emailRegex, "Invalid email address"),
    password: yup
        .string()
        .required("Password is required")
        .matches(
            passwordRegex,
            "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        ),
    confirmPassword: yup
        .string()
        .required("Confirm Password is required")
        .oneOf([yup.ref("password")], "Passwords must match"),
});

const DemoReactHookForm = () => {
    const { handleSubmit, control, formState } = useForm({
        defaultValues: {
            username: "",
            password: "",
            confirmPassword: "",
        },
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const onSubmit = (formValue) => {
        console.log("🚀 ~ onSubmit ~ formValue:", formValue);
    };

    return (
        <div>
            <Form onFinish={handleSubmit(onSubmit)}>
                <Space direction="vertical">
                    <Form.Item
                        validateStatus={formState.errors.username ? "error" : ""}
                        help={formState.errors.username?.message}
                    >
                        <Controller
                            control={control}
                            name="username"
                            render={({ field }) => {
                                return <Input placeholder="Username" {...field} />;
                            }}
                        />
                    </Form.Item>

                    {/* {formState.errors?.username && (
                        <p className="text-red-500 text-sm">{formState.errors.username.message}</p>
                    )} */}
                    {/* <Input type="text" placeholder="Username" {...register("username")} /> */}
                    {/* <Input.Password type="password" placeholder="Password" {...register("password")} /> */}
                    <Form.Item
                        validateStatus={formState.errors.password ? "error" : ""}
                        help={formState.errors.password?.message}
                    >
                        <Controller
                            control={control}
                            name="password"
                            render={({ field }) => {
                                return <Input.Password placeholder="Password" {...field} />;
                            }}
                        />
                    </Form.Item>
                    {/* {formState.errors?.password && (
                        <p className="text-red-500 text-sm">{formState.errors.password.message}</p>
                    )} */}
                    <Form.Item
                        validateStatus={formState.errors.confirmPassword ? "error" : ""}
                        help={formState.errors.confirmPassword?.message}
                    >
                        <Controller
                            control={control}
                            name="confirmPassword"
                            render={({ field }) => {
                                return <Input.Password placeholder="Confirm Password" {...field} />;
                            }}
                        />
                    </Form.Item>
                    {/* {formState.errors?.confirmPassword && (
                        <p className="text-red-500 text-sm">{formState.errors.confirmPassword.message}</p>
                    )} */}
                    <Button type="primary" htmlType="submit" disabled={!formState.isValid}>
                        Login
                    </Button>
                </Space>
            </Form>
        </div>
    );
};

export default DemoReactHookForm;
