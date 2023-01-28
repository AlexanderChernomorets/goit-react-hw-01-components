import styled from "styled-components";

export const Table = styled.table`
width: 70%;
border: none;
margin-bottom: 20px;
border-color: transparent;
/* box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px; */
margin-top: 40px;
margin-bottom: 50px;
margin-inline:auto;
`

export const TableHead = styled.th`
font-weight: bold;
text-align: center;
border: none;
padding: 10px 15px;
background: #3ADEE1;
font-size: 14px;
color: white;
:first-child {
	border-radius: 8px 0 0 8px;
}
:last-child {
	border-radius: 0 8px 8px 0;
}`