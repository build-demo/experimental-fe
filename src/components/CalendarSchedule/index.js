import React, { lazy, useState, Component } from "react";
import { Row, Col } from "antd";
import Zoom from "react-reveal/Zoom";
import { withTranslation } from "react-i18next";
import Calendar from 'react-calendar'
import moment from 'moment'
import axios from 'axios'


import './calendarStyle.css'
import * as S from "./styles";
import { config } from "../../config";
import { getParameterByName } from "../../lib/utils";
const Button = lazy(() => import("../../common/Button"));

const SvgIcon = lazy(() => import("../../common/SvgIcon"));

const Contact = ({ title, content, id, t }) => {

  const email = getParameterByName("email") || "ridhamsun@gmail.com"
  const mentorEmail = getParameterByName("mentorEmail") || "ridham.bhat@gmail.com"
  const [busyTimes, setBusyTime] = useState([])
  const [isDateSelected, setIsDateSelected] = useState(false)
  var selectedTimeForMeeting = {}
  const [busyTimeToShow, setBusyTimeToShow] = useState([{
    startTime: "Select a Date",
    endTime: "Select a Date"
  }])
  let ddd = new Date()
  ddd.setHours(0,0,0,0)
  const [value, onChange] = useState(ddd)
  const dateChange = (e) => {
    onChange(e)
    checkRightBusyTime()
  }

  const checkRightBusyTime = ()=>{
    let btts = [];
    let startOfDay = new Date(value)
    let todayDate = new Date()
    let todayTime = todayDate
    todayDate.setHours(0,0,0,0)
    let tenDayDate = new Date (todayDate.getTime()+ 11*24*60*60000)
    if(startOfDay>=todayTime && startOfDay <=tenDayDate)
    for(let i = 0; i<48 ; i++){
      let meetStartTime = new Date(startOfDay.getTime() + i * 30 * 60000)
      let meetEndTime = new Date(startOfDay.getTime() + (i * 30  + 25) * 60000 )
      let flag = true
      for(let j in busyTimes['busyTimes']){
        var minDate = new Date(busyTimes['busyTimes'][j]['start'])
        var maxDate = new Date(busyTimes['busyTimes'][j]['end'])
        if(((meetStartTime<minDate && meetEndTime<minDate) || (meetStartTime>maxDate && meetEndTime>maxDate))){
          continue;
        }
        else{
          flag = false;
          break;
        }
      }
      if(flag)
      btts.push({
        startTime: moment(meetStartTime).format('LT'), 
        endTime: moment(meetEndTime).format('LT')
      })
    }
    console.log(btts)
    setIsDateSelected(false)
    setBusyTimeToShow(btts)
  }
  
  const url = config.backendUrl + "/mentor/getMentorBusyTime"
  if(!busyTimes['busyTimes'])
  axios
    .post(url, {
      "email": email,
      "mentorEmail": mentorEmail
    })
    .then((response) => {
      console.log(response)
      setBusyTime(response['data'])
      checkRightBusyTime()
    });

  const CardList = ({timesBusy}) => {
    const [selectedId, onSelectionChange] = useState("")
    if(!timesBusy)
    return(<div></div>)
    return timesBusy.map((item, index) => {
      return (
        <div 
          key={index} 
          style={{margin:"20px", padding:"20px", textAlign:"center", verticalAlign: "middle", background:(selectedId===index)?"#288379AA":"#FFFFFF", borderRadius:"20px"}}
          onClick={(e)=>{
            selectedTimeForMeeting = item
            onSelectionChange(index)
          }}
        >
          <p style={{color:(selectedId===index)?"#FFFFFF":"#000000"}}><strong>Start Time : {item['startTime']}</strong></p>
          <p style={{color:(selectedId===index)?"#FFFFFF":"#000000"}}><strong>End Time : {item['endTime']}</strong></p>
        </div>
      )
    })
  }

  const [description, setDescription] = useState()

  const ScrollViewToShow = () => {
    if(!isDateSelected){
      return(
        <div style={{overflowY:"scroll", height:"400px", overflowX:"hidden", background:"#F6F6F6", borderRadius:"30px", alignItems:"center", padding:"20px"}}>
          <CardList timesBusy={busyTimeToShow}/> 
        </div>
      )
    }
    return(
      <div style={{height:"400px", overflowX:"hidden", background:"#F6F6F6", borderRadius:"30px", alignItems:"center", justifyItems:"center", padding:"20px", textAlign:"center"}}>
        <p style={{fontSize:"180%"}}><strong>Issue Description</strong></p>
        <textarea key="descriptionKey" type="text" style={{height:"80%", width:"90%", borderStyle:"none", borderRadius:"20px", padding:"30px", fontSize:"120%"}} value={description} onChange={ (e)=> {
          setDescription(e.target.value);}}/>
      </div>
    )
  }

  return (
    <S.ContactContainer id={id}>
      <S.Contact >
        <Row type="flex" justify="space-around">
          <div style={{marginBottom:"30px", display:"flex", justifyContent:"center", alignItems:"center"}}>
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
            <ScrollViewToShow />
            <div style={{marginTop:"30px"}}>
              <S.ButtonContainer>
                <Button name="submit" type="submit" onClick={(e)=>{
                  if(!isDateSelected){
                  if(selectedTimeForMeeting['startTime'].length>1)
                  {
                    let sod = new Date(value)
                    let st = selectedTimeForMeeting['startTime'].split(':')
                    let hr = parseInt(st[0])
                    let min = parseInt(st[1].substring(0,2))
                    if(st[1].substring(3) === "PM")
                    if(hr!==12)hr=hr+12
                    else if(hr===12)hr=hr-12
                    let mst = new Date (sod.getTime() + (hr*60+min) * 60000).toISOString()
                    let met = new Date (sod.getTime() + (hr*60+min+25) * 60000).toISOString()
                    config.selectedTimeForMeeting = {
                      startTime: mst,
                      endTime: met
                    }
                    console.log(selectedTimeForMeeting)
                    setIsDateSelected(true)
                  }}
                  else{
                    console.log(description)
                    console.log(config.selectedTimeForMeeting)
                    const meeturl = config.backendUrl + "/mentor/arrangeMeeting"
                    axios
                      .post(meeturl, {
                        "email": email,
                        "mentorEmail": mentorEmail,
                        "startTime": config.selectedTimeForMeeting['startTime'],
                        "endTime": config.selectedTimeForMeeting['endTime'],
                        "summary": "UnBlockMe Meeting",
                        "description": description
                      })
                      .then((response) => {
                        console.log(response)
                        setBusyTime(response['data'])
                        checkRightBusyTime()
                      });
                  }
                }}>
                  {t(isDateSelected?"Schedule":"Select")}
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
