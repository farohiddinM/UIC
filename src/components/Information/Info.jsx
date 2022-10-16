import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AddEmployees, Avater,Boxx, Btn, BtnDiv, CenterDiv, Conteyner, Date, DateDiv, Datee, Departament, Div, Employees, FullInfo, FullName, Gender, InfoDiv, Label, LabelName, Logo, Main, Menu, MenuDefault, MuiGroupIcon, MuiPersonAddIcon, Name, NameDiv, Option, Paragrf, Position, PositionDiv, Positions, Radio, RadioDiv, Select, SelectDiv, TeamImage, Title, User } from './styled'

//import Image
import UicLogo from '../../images/Logo.jpg'
import MAvatar from '../../images/MAvatar.png'


const Info = () => {

  const navigation = useNavigate()

  const Goo = ()=> {
    navigation('/employees')
  }

  
  const GoHome = ()=>{
    navigation('/')
  }

  const Add = ()=> {
    navigation('/adduser')
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
                    <MuiPersonAddIcon onClick={Add} />
                    <Label onClick={Add} >Employees</Label>
                </Employees>
            </MenuDefault>
        </Menu>
        <InfoDiv>
          <Conteyner>
            <User>
              <Avater src={MAvatar} />
              <Name>Wob Voka</Name>
              <Departament>Accounting</Departament>
              <Positions>Senior position</Positions>
              <Gender>Famele</Gender>
              <Datee>02.02.2020</Datee>
            </User>
          </Conteyner>
          <Boxx>
            <Title>Full Information Edite</Title>
            <FullInfo>
              <NameDiv>
                <LabelName>Name</LabelName>
                <FullName  label="Outlined" variant="outlined" />
              </NameDiv>
              <SelectDiv>
                <LabelName>Departament</LabelName>
                <Select>
                  <Option>Accounting</Option>
                  <Option>IT</Option>
                  <Option>Marketing</Option>
                </Select>
              </SelectDiv>
              <PositionDiv>
                <LabelName>Position</LabelName>
                <Position />
              </PositionDiv>
              <RadioDiv>
                <Div>
                  <Radio type='radio' /> <LabelName>Male</LabelName>
                </Div>
                <Div>
                  <Radio type='radio' /> <LabelName>Famele</LabelName>
                </Div>
              </RadioDiv>
              <DateDiv>
                <LabelName>Date of Birthday</LabelName>
                <Date type='date' />
              </DateDiv>
              <BtnDiv>
                <Btn variant='contained'>Edite</Btn>
              </BtnDiv>
            </FullInfo>
          </Boxx>
        </InfoDiv>
      </CenterDiv>
    </Main>
  )
}

export default Info