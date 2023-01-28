import styled from 'styled-components'

export const StatList = styled.ul`
list-style: none;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 0;
padding-left: 0;
/* border: solid 2px;
border-color: rgb(139, 138, 138); */
/* gap: 20px; */
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
margin-bottom: 20px;
width: 50%;`

export const StatItem = styled.li`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
/* padding: 15px; */
width: 20%;
gap: 10px;
padding-top: 15px;
padding-bottom: 15px;
:nth-of-type(1) {
    background-color:#EC7063;
    border-radius: 8px 0px 0px 8px ;
    }
:nth-of-type(2) {
    background-color: #8E44AD;
    }
:nth-of-type(3) {
    background-color: #F1C40F;
    }
:nth-of-type(4) {
    background-color: #7DCEA0;
    }
:nth-of-type(5) {
    background-color:#EDBB99;
    border-radius: 0px 8px 8px 0px;
}`

export const Label = styled.span`
font-family: 'Oxygen'-apple-system;
font-size: 20px;
font-weight: 400;
color:white ;`

export const Percentage = styled.span`
font-family: 'Ubuntu', sans-serif;
font-size: 25px;
color:white;`