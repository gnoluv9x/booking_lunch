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
    return (
        <>
            <Form
                form={form}
                name="advanced_search"
                className="ant-advanced-search-form filter-heading"
                onFinish={onFinish}
            >
                <Form.Item
                    name="range-time-picker"
                    label="Quán ăn"
                    colon={false}
                    labelCol={{ span: 24 }}
                    style={{ fontWeight: 700 }}
                >
                    <Select
                        mode="tags"
                        size={"default"}
                        placeholder="Please select"
                        defaultValue={["Quán 1", "Quán 2"]}
                        onChange={handleChange}
                        style={{ width: "100%" }}
                    >
                        {children}
                    </Select>
                </Form.Item>
            </Form>
        </>
    );
}

export default FilterByStatus;
