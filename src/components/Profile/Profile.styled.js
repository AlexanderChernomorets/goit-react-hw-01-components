import styled from 'styled-components'

export const Prof = styled.div`
display: block;
border:solid 5px;
border-color:rgb(139, 138, 138);
max-width: 350px;
margin-inline:auto ;
border-radius: 10px;
margin-top: 30px;
box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;`

export const Description = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 20px;`

export const Image = styled.img`
width: 250px;
height: 250px;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
border-radius: 50%;`

export const Name = styled.p`
font-family:'Franklin Gothic Medium', sans-serif;
font-size: 40px;
margin: 0;
padding-top: 10px;`

export const Tag = styled.p`
font-family: 'Lucida Sans',sans-serif;
font-size: 30px;
margin: 0;
padding-top: 10px;
color: darkgrey;`

export const Location = styled.p`
font-family:'Verdana', sans-serif ;
font-size: 25px;
margin: 0;
padding-top: 10px;
color: darkgrey;`

export const Stats = styled.ul`
list-style:none;
display: flex;
padding: 0;
margin-bottom: 0;
border-top:solid 5px;
border-color:rgb(139, 138, 138);`

export const StatsItem = styled.li`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 15px;
width: 33.33%;
background-color: rgb(202, 204, 205);

:not(:last-child){
    border-right:solid 5px;
    border-color:rgb(139, 138, 138);
}

:nth-of-type(1){
    border-radius: 0px 0px 0px 5px ;
}
:nth-of-type(3){
   
    border-radius: 0px 0px 5px 0px ;
}`

export const Quantity = styled.span`
font-family:'Franklin Gothic Medium', sans-serif;
font-size: 20px;`

export const SpecsItem = styled.span`
border: 2px solid rgba(0, 0, 0, 70%);
border-radius: 50%;
background: lavender;
display: flex;
height: 25px;
align-items: center;
justify-content: center;
width: 25px;`