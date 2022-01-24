import { Select } from "antd";
import React from "react";

const { Option } = Select;

function SelecMulti({ listData, placeholder, selectKey }) {
    const children = [];
    listData.forEach((item, idx) => {
        children.push(
            <Option key={idx} value={item}>
                {item}
            </Option>
        );
    });

    function handleChange(value) {
        console.log(`Selected: ${value}`);
        console.log(`Selected: ${selectKey}`);
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
