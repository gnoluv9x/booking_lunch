import { Form, Select } from "antd";
import { Option } from "antd/lib/mentions";
import React from "react";
import "./FilterByStatus.scss";

FilterByStatus.propTypes = {};

function FilterByStatus(props) {
    const [form] = Form.useForm();
    const onFinish = values => {
        console.log("Received values of form: ", values);
    };

    const children = [];
    for (let i = 10; i < 10; i++) {
        console.log(i.toString(36) + i);
        children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }
    function handleChange(value) {
        console.log(`Selected: ${value}`);
    }
    function onChange(value) {
        console.log(`selected ${value}`);
    }

    function onSearch(val) {
        console.log("search:", val);
    }
    return (
        <>
            <Form
                form={form}
                name="advanced_search"
                className="ant-advanced-search-form filter-heading"
                onFinish={onFinish}
            >
                <Form.Item
                    name="status"
                    label="Trạng thái"
                    colon={false}
                    labelCol={{ span: 24 }}
                    style={{ fontWeight: 700 }}
                >
                    <Select
                        showSearch
                        style={{ fontWeight: 400 }}
                        placeholder="Chọn một hoạt động"
                        optionFilterProp="children"
                        onChange={handleChange}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="active">Hoạt động</Option>
                        <Option value="locking">Tạm khoá</Option>
                    </Select>
                </Form.Item>
            </Form>
        </>
    );
}

export default FilterByStatus;
