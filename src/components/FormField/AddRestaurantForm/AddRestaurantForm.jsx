import { Form, Input, Modal, Radio } from "antd";
import React from "react";
import AddCoupleDish from "../AddCoupleDish/AddCoupleDish";
import "./AddRestaurantForm.scss";

const AddRestaurantForm = ({ visible, onCreate, onCancel, title }) => {
    const [form] = Form.useForm();

    const handleFormData = values => {
        console.log(values);
    };
    const onFinish =(value)=>{
        console.log(value);
    }
    return (
        <Modal
            visible={visible}
            title={title}
            okText="Xác nhận"
            cancelText="Cancel"
            onCancel={onCancel}
            className="require-form"
            onOk={() => {
                form.validateFields()
                    .then(values => {
                        form.resetFields();
                        handleFormData(values);
                    })
                    .catch(info => {
                        console.log("Validate Failed:", info);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{
                    status: "active",
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="name"
                    label="Tên quán ăn"
                    rules={[
                        {
                            required: true,
                            message: "Bạn chưa nhập tên quán ăn!",
                        },
                    ]}
                    style={{ marginBottom: "5px" }}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="address"
                    label="Địa chỉ"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập địa chỉ quán ăn!",
                        },
                    ]}
                    style={{ marginBottom: "5px" }}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="contact"
                    label="Liên hệ"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập liên hệ của quán ăn!",
                        },
                    ]}
                    style={{ marginBottom: "5px" }}
                >
                    <Input />
                </Form.Item>
                <Form.Item name="dish">
                    <AddCoupleDish />
                </Form.Item>

                <Form.Item
                    name="status"
                    label="Trạng thái"
                    className="collection-create-form_last-form-item"
                >
                    <Radio.Group>
                        <Radio value="active">Hoạt động</Radio>
                        <Radio value="locking">Tạm khoá</Radio>
                    </Radio.Group>
                </Form.Item>
            </Form>
        </Modal>
    );
};
export default AddRestaurantForm;
