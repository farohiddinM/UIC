import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AddEmployees, CenterDiv, Employees, InfoDiv, Label, Logo, Main, Menu, MenuDefault, MuiGroupIcon, MuiPersonAddIcon, TeamImage } from './styled'

//import Image
import UicLogo from '../../images/Logo.jpg'
import TeamImg from '../../images/UIC.jpg'

const Home = () => {

  const navigation = useNavigate()

  const Goo = ()=> {
    navigation('/employees')
  }

  const Add = ()=> {
    navigation('/adduser')
  }

  return (
    <Main>
      <CenterDiv>
        <Menu>
            <MenuDefault>
                <Logo src={UicLogo} />
                <Employees>
                    <MuiGroupIcon onClick={Goo} />
                    <Label onClick={Goo} >Employees</Label>
                </Employees>
                <Employees>
                    <MuiPersonAddIcon onClick={Add} />
                    <Label onClick={Add}>Employees</Label>
                </Employees>
            </MenuDefault>
        </Menu>
        <InfoDiv>
            <TeamImage src={TeamImg} />
        </InfoDiv>
      </CenterDiv>
    </Main>
  )
}

export default Home