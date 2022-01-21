import { Button, Col, Form, Input, Row } from "antd";
import { UserOutlined, LockTwoTone } from "@ant-design/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sass/_Login.scss";
const RePassword = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const onFinish = (value) => {
    console.log("value", value);
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
          <h4 className="login__main__title">Đặt lại mật khẩu</h4>

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
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password
                prefix={<LockTwoTone />}
                placeholder="Mật khẩu mới"
              />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                span: 24,
              }}
              name="confirm password"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "The two password that you entered does  not match"
                    );
                  },
                }),
              ]}
              hasFeedback
            >
              <Input.Password
                prefix={<LockTwoTone />}
                placeholder="Xác nhận mật khẩu mới"
              />
            </Form.Item>
            <Form.Item
              {...buttonItemLayout}
              wrapperCol={{
                span: 24,
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Đặt lại mật khẩu
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};
export default RePassword;
