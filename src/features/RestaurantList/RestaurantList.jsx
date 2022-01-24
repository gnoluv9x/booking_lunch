import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import queryString from "query-string";
import React, { useEffect, useState } from "react";
import RestaurantApi from "../../api/apiRestaurant";
import Loading from "../../components/Loading/Loading";
import Filters from "./Filters/Filters";
import RestaurantForm from "./RestaurantForm/RestaurantForm";
import "./RestaurantList.scss";
import RestaurantTable from "./Table/RestaurantTable";
import { useGlobalContext } from "../../Context/ListDishContext";
function RestaurantList(props) {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const { listRestaurant, setListRestaurant, listDish, setListDish } = useGlobalContext();

    const handleVisible = status => {
        setVisible(status);
    };

    const [listFilters, setListFilters] = useState({
        status: null,
        listmenu: [],
        search: "",
    });

    const handleFiltersChange = values => {
        setListFilters(prev => ({
            ...prev,
            ...values,
        }));
    };

    useEffect(() => {
        async function fetchListRestaurant() {
            try {
                const { data, status } = await RestaurantApi.getAll();
                if (status === 200) {
                    setListRestaurant(data);
                    setLoading(false);
                    const listMenuDish = data.map(item => item.setName);
                    const newList = Array.from(new Set(listMenuDish.flat(Infinity)));
                    setListDish(newList);
                }
            } catch (error) {
                throw new Error("Fail to fetch list of restaurants");
            }
        }

        fetchListRestaurant();
    }, []);

    useEffect(() => {
        console.log(queryString.stringify(listFilters, { arrayFormat: "none" }));
        // async function fetchRestaurantListFiltered() {
        //     try {
        //         const { data, status } = await RestaurantApi.get;
        //         if (status === 200) {
        //             setListRestaurant(data);
        //             setLoading(false);
        //         }
        //     } catch (error) {
        //         throw new Error("Fail to fetch list of restaurants");
        //     }
        // }
        // fetchRestaurantListFiltered();
    }, [listFilters]);

    return loading ? (
        <Loading />
    ) : (
        <section className="requirement">
            <Row span={24} gutter={24} className="requirement__filters">
                <Col span={15}>
                    <Filters onFilterChange={handleFiltersChange} filters={listFilters} />
                </Col>
                <Col span={4} offset={5} className="requirement__filters__searchBtn">
                    <Button
                        onClick={() => {
                            handleVisible(true);
                        }}
                        type="primary"
                        icon={<PlusOutlined />}
                        style={{ marginTop: "12px" }}
                    >
                        Thêm quán ăn
                    </Button>
                </Col>
            </Row>
            <Row span={24}>
                <RestaurantTable listRestaurant={listRestaurant} />
            </Row>
            <RestaurantForm visible={visible} handleVisible={handleVisible} />
        </section>
    );
}

export default RestaurantList;
