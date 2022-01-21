import React from "react";
import AddRestaurantForm from "../../../components/FormField/AddRestaurantForm/AddRestaurantForm";
import "./RestaurantForm.scss";
const title = "Thêm quán ăn";

const RestaurantForm = ({ visible, handleVisible }) => {
    const handleValueRequireForm = values => {
        console.log("Received values of form: ", values);
    };

    return (
        <div>
            <AddRestaurantForm
                title={title}
                visible={visible}
                onCreate={handleValueRequireForm}
                onCancel={() => handleVisible(false)}
            />
        </div>
    );
};

export default RestaurantForm;
