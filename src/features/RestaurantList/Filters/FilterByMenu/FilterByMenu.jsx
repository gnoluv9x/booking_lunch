import { Form, Select } from "antd";
import React from "react";
import "./FilterByMenu.scss";

const { Option } = Select;

const FilterByMenu = props => {
    const [form] = Form.useForm();

    const onFinish = values => {
        console.log("Received values of form: ", values);
    };

    const listMenu = ["Bún bò", "Rau muống", "Thịt kho tàu", "Cơm"];

    const handleChange = value => {
        console.log(`Selected: ${value}`);
    };

    return (
        <Form
            form={form}
            name="advanced_search"
            className="ant-advanced-search-form filter-heading"
            onFinish={onFinish}
        >
            <Form.Item
                name="listMenu"
                label="Thực đơn"
                colon={false}
                labelCol={{ span: 24 }}
                style={{ fontWeight: 700 }}
            >
                <Select
                    mode="tags"
                    style={{ width: "100%", fontWeight: 400 }}
                    placeholder="Chọn món ăn"
                    onChange={handleChange}
                    maxTagCount={3}
                >
                    {listMenu.map((menu, idx) => (
                        <Option key={idx} style={{ fontWeight: 400 }}>
                            {menu}
                        </Option>
                    ))}
                </Select>
            </Form.Item>
        </Form>
    );
};

export default FilterByMenu;
