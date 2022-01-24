import React, { useState } from "react";
import {DatePicker, Space, Select, Input} from "antd";
import { useEffect } from "react/cjs/react.development";
import BookingApi from "../../../../api/apiBooking";
import { useStore, actions } from "../../../../globalState";
import {debounce} from '../../../../assets/helper/helper';
/**
 * @author
 * @function FilterOrder
 **/
export const FilterOrder = (props) => {
  //global state
  const [state,dispatch] = useStore()
  // const
  const {Search} = Input;
  const {RangePicker} = DatePicker;
  const {Option} = Select;
  const [resApi,setResApi] = useState([])

  //func

  function handleChange(value) {
    console.log(`${value}`); // select
  }
  const onSearch = (value) => {
    delay(value)
  }; //searchbtn
  const handleSeachChange = (e) => {
   setTimeout(()=>{
     let value = e.target.value
     delay(value)
   },500)
  };
  const search = (value)=>{
    dispatch(actions.changeSearchKeyword(value))
  }
  const delay = debounce(search, 500)

  const handleDateChange = (_, dateStr) => {
    console.log(dateStr[0], dateStr[1]); //date
  };

  // useEff
  useEffect(()=>{
    BookingApi.getAllRes()
    .then((response)=>{
      setResApi(response)
    })
    .catch(e=>{
      console.log(e.message);
    })
  },[])

  return (
    <Space size={"small"} wrap>
      <Space direction="vertical">
        <span style={{fontSize: "1.4rem"}}>Ngày đặt</span>
        <RangePicker className="filter__date" onChange={handleDateChange} />
      </Space>
      <Space direction="vertical">
        <span style={{fontSize: "1.4rem"}}>Quán ăn</span>
        <Select
          mode="multiple"
          allowClear
          style={{minWidth: "248px"}}
          placeholder="Lọc theo quán ăn"
          onChange={handleChange}
        >
          {
            resApi ? resApi.map((e)=>{
              return <Option key={e.name}>{e.name}</Option>
            }) : ""
          }
        </Select>
      </Space>
      <Space direction="vertical">
        <span style={{fontSize: "1.4rem"}}>Trạng thái</span>
        <Select
          mode="multiple"
          allowClear
          style={{minWidth: "248px"}}
          placeholder="Lọc theo trạng thái"
          onChange={handleChange}
        >
          <Option key={"Đã đặt"}>Đã đặt</Option>
          <Option key={"Chưa đặt"}>Chưa đặt</Option>
          <Option key={"Đã hủy"}>Đã hủy</Option>
        </Select>
      </Space>
      <Space direction="vertical">
        <span style={{fontSize: "1.4rem"}}>Tìm kiếm</span>
        <Search
          placeholder="Người dùng, quán ăn, món ăn"
          onSearch={onSearch}
          onChange={handleSeachChange}
          enterButton
          style={{minWidth: "248px"}}
        />
      </Space>
    </Space>
  );
};
