import { Button, Form, Input, Select } from "antd";
import { Option } from "antd/lib/mentions";
import React from "react";
import "./FilterBySearch.scss";

FilterBySearch.propTypes = {};

function FilterBySearch(props) {
    const [form] = Form.useForm();

    const onFinish = e => {
        console.log("Received values of form: ", e.target.value);
    };

    return (
        <>
            <Form
                form={form}
                name="advanced_search"
                className="ant-advanced-search-form filter-heading"
                onFinish={onFinish}
            >
                <Form.Item
                    name="search"
                    label="Tìm kiếm"
                    colon={false}
                    labelCol={{ span: 24 }}
                    style={{ fontWeight: 700 }}
                >
                    <Input onChange={onFinish} placeholder="Tên, địa chỉ, số điện thoại" />
                </Form.Item>
            </Form>
        </>
    );
}

export default FilterBySearch;
