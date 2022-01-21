import { Select } from "antd";
import { Option } from "antd/lib/mentions";
import React from "react";

function SelecMulti({ listData, placeholder }) {
    const children = [];
    listData.forEach((item, idx) => {
        children.push(<Option key={idx}>{item}</Option>);
    });

    function handleChange(value) {
        console.log(`Selected: ${value}`);
    }
    return (
        <Select
            mode="tags"
            placeholder={placeholder}
            maxTagCount={4}
            onChange={handleChange}
            defaultValue={[]}
            style={{ width: "100%" }}
        >
            {children}
        </Select>
    );
}

export default SelecMulti;
