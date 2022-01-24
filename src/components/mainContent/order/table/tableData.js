import React, { useState } from "react";
import {Space, Pagination} from "antd";
import {Table, Tag, Typography} from "antd";
import { useEffect } from "react/cjs/react.development";
/**
 * @author
 * @function TableOrder
 **/

export const TableOrder = (props) => {
  const {Text} = Typography;
  const {showDrawerEdit, onPageChange,dataApi, currentPage, setCurrentPage, total, pageSizeChange, pageSize, loadingTable} = props;
  const [data,setData] = useState([])
  const columns = [
    {
      title: "Người dùng",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Quán ăn",
      dataIndex: "restaurant",
      key: "restaurant",
    },
    {
      title: "Thực đơn",
      dataIndex: "menu",
      key: "menu",
      render: (menu) => (
        <>
          {menu.map((tag) => {
            return <Tag key={tag}>{tag}</Tag>;
          })}
        </>
      ),
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Trạng thái",
      key: "status",
      dataIndex: "status",
      render: (status) => (
        <>
          {status.map((tag) => {
            let color = tag === "Đã đặt" ? "green" : "#bfbfbf";
            if (tag === "Chưa đặt") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Hành động",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              showDrawerEdit(record);
            }}
          >
            Chỉnh sửa
          </a>
          <a>Chưa đặt</a>
          <Text type="danger" style={{cursor: "pointer"}}>
            Xóa
          </Text>
        </Space>
      ),
    },
  ];

  useEffect(()=>{
    if(dataApi && dataApi.length){
      setData(dataApi.map((e)=>{
        return {
          key:e.id,
          name:e.name,
          restaurant:e.restaurant,
          menu:e.menu,
          quantity:e.quantity,
          status:[e.status],
        }
      }))
    }
  },[dataApi])

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        style={{width: "100%"}}
        pagination={false}
        scroll={{x: 1000, y:450}}
        loading={loadingTable}
      />
      <div className="flex-box justify-end pagination-order">
        <Pagination
          showQuickJumper
          current={currentPage}
          total={total}
          onChange={onPageChange}
          showLessItems={true}
          responsive={true}
          pageSize={pageSize}
          onShowSizeChange={pageSizeChange}
        />
      </div>
    </>
  );
};
