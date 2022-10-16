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
    background-color: #a4c3b2 ;
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
    cursor: pointer;
`

export const EmployeeDiv = styled.div`
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
    transition: 1s;
    
    :hover{
    width: 250px;
    height: 100%;
    background-color: #606;
    transition: 1s;
    }

    &:hover ${EmployeeDiv}{
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
`

export const TopDiv = styled.div`
    width: 100%;
    height: 70px;
    box-shadow: 0px 0px  8px #666666;
    display: flex;
    align-items: center;
`

export const Paragrf = styled.h1`
    font-weight: 600;
    color: black;
    padding: 0px 0px 0px 20px;
`

// BottomDiv start //

export const BottomDiv = styled.div`
    width: 100%;
    height: calc(100% - 70px);
    overflow-y: scroll;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 25px;
    padding: 20px 0px 20px 0px;

    ::-webkit-scrollbar{
        width: 5px !important;
    }

    ::-webkit-scrollbar-thumb{
        background-color: gray;
        border-radius: 10px;
    }

`

export const Card = styled.div`
    width: 220px;
    height: 300px;
    box-shadow: 0px 0px 8px #656567;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const Name = styled.h1`
    font-weight: 600;
    color: black;
`

export const Departament = styled.h2`
    font-weight: 600;
    color: black;
`

export const Position = styled.h3`
    color: black;
    /* text-align: center; */
`

export const Gender = styled.h4`
    font-weight: 600;
    color: black;
`

export const Date = styled.h5`
    font-weight: 600;
    color: black;
`

export const BtnsDiv = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-around;
`

export const MuiButton = styled(Button)`
    height: 28px !important;
`


