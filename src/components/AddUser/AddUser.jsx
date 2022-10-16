import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AddEmployees, Avater,Boxx, Btn, BtnDiv, CenterDiv, Conteyner, Date, DateDiv, Div, Employees, FullInfo, FullName, InfoDiv, Label, LabelName, Logo, Main, Menu, MenuDefault, MuiGroupIcon, MuiPersonAddIcon, Name, NameDiv, Option, Paragrf, Position, PositionDiv, Radio, RadioDiv, Select, SelectDiv, TeamImage, Title, User } from './style'



//import Image
import UicLogo from '../../images/Logo.jpg'
import TeamImg from '../../images/UIC.jpg'



//import UicData
import UicData from '../../data/data'
import axios from 'axios'


const AddUser = () => {

  const navigation = useNavigate()

  const GoHome = ()=>{
    navigation('/')
  }

  const Goo = ()=> {
    navigation('/employees')
  }

  const GoInfo = ()=>{
    navigation('/info')
  }

  // useState
  const [name1, setName] = useState('')
  const [departament1, setDepartament] = useState('')
  const [position1, setPosition] = useState('')
  const [gender1, setGender] = useState('')
  const [birthday1, setBirthday] = useState('')

  ///////

  let DATAMAIN = new FormData()
  DATAMAIN.append('name', name1)
  DATAMAIN.append('departament' , departament1)
  DATAMAIN.append('position' , position1)
  DATAMAIN.append('gender' , gender1)
  DATAMAIN.append('date' , birthday1)


  // Goo Data

  const GooData = ()=> {
    axios.post(UicData,DATAMAIN)
    .then((res)=>{
      console.log(res);
    })
  }

  return (
    <Main>
      <CenterDiv>
        <Menu>
            <MenuDefault>
                <Logo onClick={GoHome} src={UicLogo} />
                <Employees>
                    <MuiGroupIcon onClick={Goo} />
                    <Label onClick={Goo} >Employees</Label>
                </Employees>
                <Employees>
                    <MuiPersonAddIcon />
                    <Label>Employees</Label>
                </Employees>
            </MenuDefault>
        </Menu>
        <InfoDiv>
          <Boxx>
            <Title>Add Employees</Title>
            <FullInfo>
              <NameDiv>
                <LabelName>Name</LabelName>
                <FullName value={name1} onChange={(e)=>setName(e.target.value)} />
              </NameDiv>
              <SelectDiv>
                <LabelName>Departament</LabelName>
                <Select value={departament1} onChange={(e)=>setDepartament(e.target.value)} >
                  <Option>Accounting</Option>
                  <Option>IT</Option>
                  <Option>Marketing</Option>
                </Select>
              </SelectDiv>
              <PositionDiv>
                <LabelName>Position</LabelName>
                <Position value={position1} onChange={(e)=>setPosition(e.target.value)} />
              </PositionDiv>
              <RadioDiv>
                <Div>
                  <Radio type='radio' value={gender1} onChange={(e)=>setGender(e.target.value)} /> <LabelName>Male</LabelName>
                </Div>
                <Div>
                  <Radio type='radio' value={gender1} onChange={(e)=>setGender(e.target.value)} /> <LabelName>Famele</LabelName>
                </Div>
              </RadioDiv>
              <DateDiv>
                <LabelName>Date of Birthday</LabelName>
                <Date type='date' value={birthday1} onChange={(e)=>setBirthday(e.target.value)} />
              </DateDiv>
              <BtnDiv>
                <Btn variant='contained' onClick={GooData} >Add Employees</Btn>
              </BtnDiv>
            </FullInfo>
          </Boxx>
        </InfoDiv>
      </CenterDiv>
    </Main>
  )
}

export default AddUser