import styled from "styled-components";

export const TransactionBody = styled.td`
text-align: center;
border: none;
padding: 10px 15px;
font-size: 14px;
vertical-align: top;

:first-child {
	border-radius: 8px 0 0 8px;
	text-transform: capitalize;
}
:last-child {
	border-radius: 0 8px 8px 0;
}`

export const TransactionRow = styled.tr`
:nth-child(even){
	background: #f3f3f3;
}`