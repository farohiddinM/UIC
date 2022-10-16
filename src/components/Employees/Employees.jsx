import React from 'react'
import { useNavigate } from 'react-router-dom'
import {  AddEmployees, Avatar, BottomDiv, Card, CenterDiv, Departament, EmployeeDiv, Position, InfoDiv, Label, Logo, Main, Menu, MenuDefault, MuiButton, MuiGroupIcon, MuiPersonAddIcon, Name, Paragrf, TeamImage, TopDiv, Gender, Date, BtnsDiv  } from './styled'


//import Image
import UicLogo from '../../images/Logo.jpg'
import MAvatar from '../../images/MAvatar.png'


const Employees = () => {

  const navigate = useNavigate()
  
  const GoHome = ()=>{
    navigate('/')
  }

  const GoInfo = ()=>{
    navigate('/info')
  }

  const Add = ()=> {
    navigate('/adduser')
  }
  
  return (
    <Main>
      <CenterDiv>
        <Menu>
            <MenuDefault>
                <Logo onClick={GoHome} src={UicLogo} />
                <EmployeeDiv>
                    <MuiGroupIcon/>
                    <Label>Employee</Label>
                </EmployeeDiv>
                <EmployeeDiv>
                    <MuiPersonAddIcon onClick={Add} />
                    <Label onClick={Add} >Employee</Label>
                </EmployeeDiv>
            </MenuDefault>
        </Menu>
        <InfoDiv>
          <TopDiv>
            <Paragrf>Uic Group</Paragrf>
          </TopDiv>
          <BottomDiv>
            <Card>
              <Name>John Karl</Name>
              <Departament>Accounting</Departament>
              <Position>Senior position</Position>
              <Gender>Male</Gender>
              <Date>02.02.2020</Date>
              <BtnsDiv>
              <MuiButton variant='contained' color='error' onClick={GoInfo} >Delete</MuiButton>
              <MuiButton variant='contained' color='success' onClick={GoInfo} >Edite</MuiButton>
              </BtnsDiv>
            </Card>
            <Card>
              <Name>John Karl</Name>
              <Departament>Accounting</Departament>
              <Position>Senior position</Position>
              <Gender>Male</Gender>
              <Date>02.02.2020</Date>
              <BtnsDiv>
              <MuiButton variant='contained' color='error' onClick={GoInfo} >Delete</MuiButton>
              <MuiButton variant='contained' color='success' onClick={GoInfo} >Edite</MuiButton>
              </BtnsDiv>
            </Card>
            <Card>
              <Name>John Karl</Name>
              <Departament>Accounting</Departament>
              <Position>Senior position</Position>
              <Gender>Male</Gender>
              <Date>02.02.2020</Date>
              <BtnsDiv>
              <MuiButton variant='contained' color='error' onClick={GoInfo} >Delete</MuiButton>
              <MuiButton variant='contained' color='success' onClick={GoInfo} >Edite</MuiButton>
              </BtnsDiv>
            </Card>
            <Card>
              <Name>John Karl</Name>
              <Departament>Accounting</Departament>
              <Position>Senior position</Position>
              <Gender>Male</Gender>
              <Date>02.02.2020</Date>
              <BtnsDiv>
              <MuiButton variant='contained' color='error' onClick={GoInfo} >Delete</MuiButton>
              <MuiButton variant='contained' color='success' onClick={GoInfo} >Edite</MuiButton>
              </BtnsDiv>
            </Card>
            <Card>
              <Name>John Karl</Name>
              <Departament>Accounting</Departament>
              <Position>Senior position</Position>
              <Gender>Male</Gender>
              <Date>02.02.2020</Date>
              <BtnsDiv>
              <MuiButton variant='contained' color='error' onClick={GoInfo} >Delete</MuiButton>
              <MuiButton variant='contained' color='success' onClick={GoInfo} >Edite</MuiButton>
              </BtnsDiv>
            </Card>
            <Card>
              <Name>John Karl</Name>
              <Departament>Accounting</Departament>
              <Position>Senior position</Position>
              <Gender>Male</Gender>
              <Date>02.02.2020</Date>
              <BtnsDiv>
              <MuiButton variant='contained' color='error' onClick={GoInfo} >Delete</MuiButton>
              <MuiButton variant='contained' color='success' onClick={GoInfo} >Edite</MuiButton>
              </BtnsDiv>
            </Card>
            <Card>
              <Name>John Karl</Name>
              <Departament>Accounting</Departament>
              <Position>Senior position</Position>
              <Gender>Male</Gender>
              <Date>02.02.2020</Date>
              <BtnsDiv>
              <MuiButton variant='contained' color='error' onClick={GoInfo} >Delete</MuiButton>
              <MuiButton variant='contained' color='success' onClick={GoInfo} >Edite</MuiButton>
              </BtnsDiv>
            </Card>
            <Card>
              <Name>John Karl</Name>
              <Departament>Accounting</Departament>
              <Position>Senior position</Position>
              <Gender>Male</Gender>
              <Date>02.02.2020</Date>
              <BtnsDiv>
              <MuiButton variant='contained' color='error' onClick={GoInfo} >Delete</MuiButton>
              <MuiButton variant='contained' color='success' onClick={GoInfo} >Edite</MuiButton>
              </BtnsDiv>
            </Card>
            <Card>
              <Name>John Karl</Name>
              <Departament>Accounting</Departament>
              <Position>Senior position</Position>
              <Gender>Male</Gender>
              <Date>02.02.2020</Date>
              <BtnsDiv>
              <MuiButton variant='contained' color='error' onClick={GoInfo} >Delete</MuiButton>
              <MuiButton variant='contained' color='success' onClick={GoInfo} >Edite</MuiButton>
              </BtnsDiv>
            </Card>
            <Card>
              <Name>John Karl</Name>
              <Departament>Accounting</Departament>
              <Position>Senior position</Position>
              <Gender>Male</Gender>
              <Date>02.02.2020</Date>
              <BtnsDiv>
              <MuiButton variant='contained' color='error' onClick={GoInfo} >Delete</MuiButton>
              <MuiButton variant='contained' color='success' onClick={GoInfo} >Edite</MuiButton>
              </BtnsDiv>
            </Card>
          </BottomDiv>
        </InfoDiv>
      </CenterDiv>
    </Main>
  )
}

export default Employees