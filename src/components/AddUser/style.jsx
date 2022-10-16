import styled from "styled-components";

//import MUI
import GroupIcon from '@mui/icons-material/Group';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Button } from "@mui/material";

export const Main = styled.div`
    width: 100%;
    height: 100vh;
`

export const CenterDiv = styled.div`
    width: 100%;
    height: 100%;
    background-color: #a4c3b2;
    display: flex;
`


export const MenuDefault = styled.div`
    width: 100%;
    height: 220px;
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const Logo = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
`

export const Employees = styled.div`
    width: 50px;
    height: 50px;
    /* border: 1px solid black; */
    `

export const MuiGroupIcon = styled(GroupIcon)`
    color: gray !important;
    font-size: 45px !important;
    cursor: pointer !important;
    `

export const MuiPersonAddIcon = styled(PersonAddIcon)`
    color: gray !important;
    font-size: 45px !important;
    cursor: pointer !important;
    `

export const Label = styled.label`
    color: gray;
    font-size: 23px;
    font-weight: 600;
    display: none;
    `

export const Menu = styled.div`
    width: 90px;
    height: 100%;
    background-color: #0E1621;
    border-radius: 0px 15px 15px 0px;
    transition: 0.5s;
    
    :hover{
    width: 250px;
    height: 100%;
    background-color: #606;
    transition: 0.5s;
    }

    &:hover ${Employees}{
        width: 190px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: 1s;

    }

    &:hover ${Label}{
        display: block;
    }
`

// InfoDiv Start //

export const InfoDiv = styled.div`
    width: calc(100% - 90px);
    height: 99%;
    display: flex;
    justify-content: center;
    align-items: centerc;
    /* border: 1px solid blue; */
`


// Box Start //

export const Boxx = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 0px 0px 50px 0px;
    box-shadow: 0px 0px 8px #909090;
`

export const Title = styled.h1`
    font-weight: 600;
    color: black;
`

export const FullInfo = styled.div`
    width: 400px;
    height: 520px;
    box-shadow: 0px 0px 8px #909090;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const NameDiv = styled.div`
    width:300px;
    height: 70px;
    /* border:1px solid red ; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const LabelName = styled.label`
    font-weight: 500;
`

export const FullName = styled.input`
    width: 300px;
    height: 40px;
    background-color: transparent;
    border-radius: 5px;
    outline: none;
    border: 1px solid gray;
    box-shadow: 0px 0px 8px #909090;
    padding: 10px;
    font-size: 16px;
`

export const SelectDiv = styled.div`
    width:300px;
    height: 70px;
    /* border:1px solid red ; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Select = styled.select`
    width: 300px;
    height: 40px;
    outline: none;
    border-radius: 5px;
    box-shadow: 0px 0px 8px #909090;
    background-color: transparent;
    padding: 10px;
    font-size: 16px;
    font-weight: 500;
`

export const Option = styled.option`
    background-color: #9fa7b0;
    color: black;
`

export const PositionDiv = styled.div`
    width:300px;
    height: 70px;
    /* border:1px solid red ; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Position = styled.input`
    width: 300px;
    height: 40px;
    background-color: transparent;
    border-radius: 5px;
    outline: none;
    border: 1px solid gray;
    box-shadow: 0px 0px 8px #909090;
    padding: 10px;
    font-size: 16px;
`

export const RadioDiv = styled.div`
    width:300px;
    height: 50px;
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
`

export const Radio = styled.input`
    width: 20px;
    height: 20px;
`

export const Div = styled.div`
    width: 85px;
    height: 50%;
    /* border: 1px solid gray; */
    display: flex;
`

export const DateDiv = styled.div`
    width:300px;
    height: 70px;
    /* border:1px solid red ; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Date = styled.input`
    width: 300px;
    height: 40px;
    background-color: transparent;
    border-radius: 5px;
    outline: none;
    border: 1px solid gray;
    box-shadow: 0px 0px 8px #909090;
    padding: 10px;
    font-size: 16px;
`

export const BtnDiv = styled.div`
    width:300px;
    height: 45px;
    /* border:1px solid red ; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Btn = styled(Button)`
    
`