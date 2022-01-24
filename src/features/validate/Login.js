import { LockTwoTone, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import userApi from "../../api/userApi";
import "./sass/_Login.scss";
const Login = () => {
    const [isActive, setIsActive] = useState(false);
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState("horizontal");

    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };
    const onFinish = async value => {
        delete value["remember"];
        const result = await userApi.login(value);
    };
    const formItemLayout =
        formLayout === "horizontal"
            ? {
                  labelCol: {
                      span: 4,
                  },
                  wrapperCol: {
                      span: 14,
                  },
              }
            : null;
    const buttonItemLayout =
        formLayout === "horizontal"
            ? {
                  wrapperCol: {
                      span: 14,
                      offset: 4,
                  },
              }
            : null;

    return (
        <Row className="container__layout login">
            <Col sm={0} xl={12}>
                <div className="login__left"></div>
            </Col>
            <Col xl={12} sm={24}>
                <div className="login__main">
                    <h4 className="login__main__title">Đăng nhập</h4>
                    <Row className="tab__active">
                        <Col
                            span={12}
                            className={`login__main__ldap ${isActive ? "active" : ""}`}
                            onClick={() => setIsActive(!isActive)}
                        >
                            LDAP
                        </Col>
                        <Col
                            span={12}
                            className={`login__main__internal ${!isActive ? "active" : ""}`}
                            onClick={() => setIsActive(!isActive)}
                        >
                            Internal
                        </Col>
                    </Row>
                    {isActive && (
                        <Form
                            {...formItemLayout}
                            layout={formLayout}
                            form={form}
                            initialValues={{
                                layout: formLayout,
                                remember: true,
                            }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                wrapperCol={{
                                    span: 24,
                                }}
                                className="user-name"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your username!",
                                    },
                                    { whitespace: true },
                                    { min: 6 },
                                ]}
                                hasFeedback
                            >
                                <Input prefix={<UserOutlined style={{ color: "#1890ff" }} />} />
                            </Form.Item>
                            <Form.Item
                                wrapperCol={{
                                    span: 24,
                                }}
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your password!",
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input.Password prefix={<LockTwoTone />} />
                            </Form.Item>
                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                wrapperCol={{
                                    span: 24,
                                }}
                            >
                                <Checkbox>Ghi nhớ đăng nhập</Checkbox>
                            </Form.Item>
                            <nav className="forgot-password" style={{ color: "#1890ff" }}>
                                <Link to="/forgotPassword">Quên mật khẩu?</Link>
                            </nav>
                            <Form.Item
                                {...buttonItemLayout}
                                wrapperCol={{
                                    span: 24,
                                }}
                            >
                                <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                                    Đăng nhập
                                </Button>
                            </Form.Item>
                        </Form>
                    )}
                    {!isActive && (
                        <Form
                            {...formItemLayout}
                            layout={formLayout}
                            form={form}
                            initialValues={{
                                layout: formLayout,
                                remember: true,
                            }}
                        >
                            <Form.Item
                                wrapperCol={{
                                    span: 24,
                                }}
                                className="user-name"
                                name="user name"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your username!",
                                    },
                                    { whitespace: true },
                                    { min: 6 },
                                ]}
                                hasFeedback
                            >
                                <Input prefix={<UserOutlined style={{ color: "#1890ff" }} />} />
                            </Form.Item>
                            <Form.Item
                                wrapperCol={{
                                    span: 24,
                                }}
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your password!",
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input.Password prefix={<LockTwoTone />} />
                            </Form.Item>
                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                wrapperCol={{
                                    span: 24,
                                }}
                            >
                                <Checkbox>Ghi nhớ đăng nhập</Checkbox>
                            </Form.Item>
                            <nav className="forgot-password" style={{ color: "#1890ff" }}>
                                <Link to="/forgotPassword">Quên mật khẩu?</Link>
                            </nav>
                            <Form.Item
                                {...buttonItemLayout}
                                wrapperCol={{
                                    span: 24,
                                }}
                            >
                                <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                                    Đăng nhập
                                </Button>
                            </Form.Item>
                        </Form>
                    )}
                </div>
            </Col>
        </Row>
    );
};
export default Login;
