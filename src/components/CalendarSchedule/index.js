import React, { lazy, useState, Component } from "react";
import { Row, Col } from "antd";
import Zoom from "react-reveal/Zoom";
import { withTranslation } from "react-i18next";
import Calendar from 'react-calendar'
import moment from 'moment'
import axios from 'axios'


import './calendarStyle.css'
import * as S from "./styles";
const Button = lazy(() => import("../../common/Button"));

const SvgIcon = lazy(() => import("../../common/SvgIcon"));

const Contact = ({ title, content, id, t }) => {

  const mentorMail = "ridham.bhat@gmail.com"
  const [busyTimes, setBusyTime] = useState([
    {startTime: "cwe1", endTime: "ercw"},
    {startTime: "cwe2", endTime: "ercw"},
    {startTime: "cwe3", endTime: "ercw"},
    {startTime: "cwe4", endTime: "ercw"},
    {startTime: "cwe5", endTime: "ercw"},
    {startTime: "cwe6", endTime: "ercw"},
  ])
  // axios
  //   .post(url, {
  //     ...values,
  //   })
  //   .then((response) => {
  //     console.log(response)
  //     setBusyTime(response.data)
  //   });
  // }

  const [value, onChange] = useState(new Date())
  const dateChange = (e) => {
    var pickedDate = new Date(e)
    onChange(e)
  }

  const makeId = (length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const CardList = ({timesBusy}) => {
    const [selectedId, onSelectionChange] = useState("")
    return timesBusy.map((item, index) => {
      return (
        <div 
          key={index} 
          style={{margin:"20px", padding:"20px", textAlign:"center", verticalAlign: "middle", background:(selectedId===index)?"#005500":"#FFFFFF", borderRadius:"20px"}}
          onClick={(e)=>{
            onSelectionChange(index)
          }}
        >
          <p >Start Time : {item['startTime']}</p>
          <p>End Time : {item['endTime']}</p>
        </div>
      )
    })
  }

  return (
    <S.ContactContainer id={id}>
      <S.Contact style={{marginTop:"90px"}}>
        <Row type="flex" justify="space-around">
          <div style={{marginBottom:"30px"}}>
            <h1>Schedule Meeting</h1>
          </div>
        </Row>
        <Row type="flex" justify="space-between" align="middle">
          <Col lg={12} md={11} sm={24}>
            <Row type="flex" gutter={20} style={{paddingBottom: "50px"}}>
                <SvgIcon src="logo.svg" width="100" height="100" viewBox="0 0 100 100"/>
                <h1 style={{padding: "30px"}}>UnBlock Me</h1>
            </Row>
            <Calendar
              onChange={dateChange}
              value={value}
              className="react-calendar"
            />
          </Col>
          <Col lg={12} md={12} sm={24}>
            <div style={{overflowY:"scroll", height:"400px", overflowX:"hidden", background:"#F6F6F6", borderRadius:"30px"}}>
              <CardList timesBusy={busyTimes}/> 
              <S.ButtonContainer>
              <Button name="submit" type="submit">
                {t("Submit")}
              </Button>
              </S.ButtonContainer>
            </div>
          </Col>
        </Row>
      </S.Contact>
    </S.ContactContainer>
  );
};

export default withTranslation()(Contact);
