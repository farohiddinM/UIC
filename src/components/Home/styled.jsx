import styled from "styled-components";

//import MUI
import GroupIcon from '@mui/icons-material/Group';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export const Main = styled.div`
    width: 100%;
    height: 100vh;
`

export const CenterDiv = styled.div`
    width: 100%;
    height: 100%;
    background-color: #171717;
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
    /* border: 1px solid blue; */
`

export const TeamImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`