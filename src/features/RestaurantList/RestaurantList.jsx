import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Pagination, Row } from "antd";
import React, { useEffect, useState } from "react";
import RestaurantForm from "./RestaurantForm/RestaurantForm";
import FilterByMenu from "./Filters/FilterByMenu/FilterByMenu";
import FilterBySearch from "./Filters/FilterBySearch/FilterBySearch";
import FilterByStatus from "./Filters/FilterByStatus/FilterByStatus";
import RestaurantTable from "./Table/RestaurantTable";
import "./RestaurantList.scss";
import RestaurantApi from "../../api/apiRestaurant";
import Loading from "../../components/Loading/Loading";

function RestaurantList(props) {
    const [visible, setVisible] = useState(false);
    const [listRestaurant, setListRestaurant] = useState([]);
    const [loading, setLoading] = useState(true);

    function onChange(pageNumber) {
        console.log("Page: ", pageNumber);
    }
    const handleVisible = status => {
        setVisible(status);
    };

    useEffect(() => {
        async function fetchListRestaurant() {
            try {
                const res = await RestaurantApi.getAll();
                setListRestaurant(res);
                setLoading(false);
            } catch (error) {
                throw new Error("Fail to fetch list of restaurants");
            }
        }

        fetchListRestaurant();
    }, []);

    return loading ? (
        <Loading />
    ) : (
        <section className="requirement">
            <Row span={24} gutter={24} className="requirement__filters">
                <Col span={5}>
                    <FilterByStatus />
                </Col>
                <Col span={5}>
                    <FilterByMenu />
                </Col>
                <Col span={5}>
                    <FilterBySearch />
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
            <Row className="requirement__pagination">
                <Pagination showQuickJumper defaultCurrent={2} total={100} onChange={onChange} />
            </Row>
            <RestaurantForm visible={visible} handleVisible={handleVisible} />
        </section>
    );
}

export default RestaurantList;
