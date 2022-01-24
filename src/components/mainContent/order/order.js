import React, {useState, useEffect} from "react";
import {Space, Form, message} from "antd";
import {FilterOrder} from "./filter/filter";
import {DrawerOrder} from "./drawer/drawer";
import {BtnOrderExprtImprt} from "./exportBtn/exportBtn";
import {TableOrder} from "./table/tableData";
import api from "../../../api/apiBooking";
import { useStore, } from "../../../globalState";
/**
 * @author
 * @function OrderPage
 **/

export const OrderPage = (props) => {
  // context
  const [state,dispatch] = useStore()
  const {filter} = state
  //   table
  const [dataTable, setDataTable] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [dataCurrentPage, setDataCurrentPage] = useState([]);
  const [loadingTable, setLoadingTable] = useState(true);
  // filter

  //   pagination
  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  const pageSizeChange = (current,size) => {
    setPageSize(size);
    console.log(size, current);
  };
  // drawer
  const [form] = Form.useForm();
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const [isEditting, setEditing] = useState(false);
  const showDrawerAdd = () => {
    setEditing(false);
    setVisibleDrawer(true);
    form.setFieldsValue({
      user: [],
      restaurant: "",
      mainOrder: "",
      subOrder: [],
      quantity: 0,
      status: "",
    });
  };
  const showDrawerEdit = (record) => {
    setEditing(true);
    setVisibleDrawer(true);
    console.log(record);
    form.setFieldsValue({
      user: [record.name],
      restaurant: record.restaurant,
      mainOrder: record.menu[0],
      subOrder: record.menu,
      quantity: record.quantity,
      status: record.status[0],
    });
  };

  const onDrawerClose = () => {
    setVisibleDrawer(false);
  };
  // form
  const onSubmit = (values) => {
    console.log("Success:", values);
    isEditting ? console.log("editing") : console.log("adding");
  };

  const onSubmitFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // useEffect
  useEffect(() => {
    setLoadingTable(true)
    api.getAll(filter).then((response) => {
      setCurrentPage(1)
      setDataCurrentPage(response);
      setTotal(response.length);
      setLoadingTable(false);
    }).catch(e=>{
      setLoadingTable(false);
      message.error(e.message)
    });
    return ()=>{
      message.destroy()
    }
  }, [filter]);

  useEffect(() => {
    setDataTable(dataCurrentPage.slice(0, currentPage * pageSize));
  }, [dataCurrentPage]);
  useEffect(() => {
    setDataTable(
      dataCurrentPage.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
      )
    );
  }, [currentPage, pageSize]);

  // useEffect(()=>{
  //   console.log(filter);
  // },[filter])

  return (
    <Space direction="vertical" size={"middle"} style={{width: "100%"}}>
      <DrawerOrder
        form={form}
        onDrawerClose={onDrawerClose}
        onSubmit={onSubmit}
        onSubmitFailed={onSubmitFailed}
        isEditting={isEditting}
        setEditing={setEditing}
        visibleDrawer={visibleDrawer}
        setVisibleDrawer={setVisibleDrawer}
      />
      {/* filter */}
      <FilterOrder />
      {/* add order,export list order */}
      <BtnOrderExprtImprt showDrawerAdd={showDrawerAdd} />
      {/* data table */}
      <TableOrder
        showDrawerEdit={showDrawerEdit}
        onPageChange={onPageChange}
        dataApi={dataTable}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        total={total}
        pageSize={pageSize}
        pageSizeChange={pageSizeChange}
        loadingTable={loadingTable}
      />
    </Space>
  );
};
