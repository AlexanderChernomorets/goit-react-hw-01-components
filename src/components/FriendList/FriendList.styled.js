import styled from 'styled-components';

export const FriendsList = styled.ul`
  list-style: none;

  max-width: 300px;
  padding-left: 0;
  margin-inline: auto;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  // justify-content: space-between;
  width: auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 7px;
  :not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Avatar = styled.img`
  box-shadow: hwb(0 0% 100% / 0.349) 0px 5px 15px;
  padding: 10px;
  border-radius: 15%;
  margin-left: 20px;
  background-color: #d6f9fa;
`;

export const Name = styled.p`
  font-family: 'Copperplate', fantasy;
  font-size: 20px;
  margin-left: 25px;
  letter-spacing: 2px;
`;

export const SpecsItem = styled.span`
  border: 1px solid rgba(0, 0, 0, 50%);
  display: flex;
  height: 25px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 25px;
  margin-left: 10px;
  background-color: ${props => (props.isOnline ? '	lawngreen' : 'orangered')};
`;
