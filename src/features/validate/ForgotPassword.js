import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import { UserOutlined, LockTwoTone } from "@ant-design/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  const [isActive, setIsActive] = useState(false);
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
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
          <h4 className="login__main__title">Quên mật khẩu</h4>
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
                ]}
              >
                <Input
                  prefix={<UserOutlined style={{ color: "#1890ff" }} />}
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                {...buttonItemLayout}
                wrapperCol={{
                  span: 24,
                }}
              >
                <Button type="primary" style={{ width: "100%" }}>
                  Đặt lại
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
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined style={{ color: "#1890ff" }} />}
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                {...buttonItemLayout}
                wrapperCol={{
                  span: 24,
                }}
              >
                <Button type="primary" style={{ width: "100%" }}>
                  Đặt lại
                </Button>
              </Form.Item>
            </Form>
          )}
        </div>
      </Col>
    </Row>
  );
};
export default ForgotPassword;
