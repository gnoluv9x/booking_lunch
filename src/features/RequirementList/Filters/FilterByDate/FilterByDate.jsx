import React from "react";
import { LineOutlined } from "@ant-design/icons";
import { DatePicker, Form } from "antd";
import moment from "moment";
import "./FilterByDate.scss";

const { RangePicker } = DatePicker;

const FilterByDate = () => {
    const [form] = Form.useForm();
    const dateFormat = "YYYY/MM/DD";

    const onFinish = values => {
        console.log("Received values of form: ", values);
    };

    return (
        <Form
            form={form}
            name="advanced_search"
            className="ant-advanced-search-form filter-heading"
            onFinish={onFinish}
        >
            <Form.Item
                name="range-time-picker"
                label="Ngày đặt"
                colon={false}
                labelCol={{ span: 24 }}
                style={{ fontWeight: 700 }}
            >
                <RangePicker
                    name="range-time-picker"
                    span={24}
                    defaultValue={[
                        moment("2015/01/01", dateFormat),
                        moment("2015/01/01", dateFormat),
                    ]}
                    format={dateFormat}
                    separator={<LineOutlined style={{ fontSize: 10 }} />}
                />
            </Form.Item>
        </Form>
    );
};
export default FilterByDate;
