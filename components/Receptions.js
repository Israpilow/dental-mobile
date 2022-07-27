import React from 'react';
import styled from 'styled-components/native';
import { FontAwesome5 } from '@expo/vector-icons';

const Receptions = ({ time, price, user }) => {
  return (
    <Block>
      <DentBlock>
        <FontAwesome5 name="tooth" size={24} color="#A3A3A3" />
        <DentText>Зуб: {user.dent}</DentText>
      </DentBlock>

      <DentBlock>
        <FontAwesome5 name="tooth" size={24} color="#A3A3A3" />
        <DentText>Диагноз: {user.diagnosis}</DentText>
      </DentBlock>
      <ButtonBlock>
        <ButtonTime>
          <ButtonTimeText>{time}</ButtonTimeText>
        </ButtonTime>
        <ButtonPrice>
          <ButtonPriceText>{price} Р</ButtonPriceText>
        </ButtonPrice>
      </ButtonBlock>
    </Block>
  );
};

const ButtonPriceText = styled.Text`
  font-weight: 800;
  font-size: 14px;
  line-height: 17px;
  color: #61bb42;
`;

const ButtonPrice = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85px;
  height: 32px;
  border-radius: 18px;
  background: rgba(132, 210, 105, 0.21);
  margin-left: 25px;
`;

const ButtonTimeText = styled.Text`
  font-weight: 800;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
`;

const ButtonTime = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 205px;
  height: 32px;
  background: #4294ff;
  border-radius: 18px;
`;

const ButtonBlock = styled.View`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DentText = styled.Text`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  margin-left: 10px;
`;

const DentBlock = styled.View`
  flex-direction: row;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Block = styled.View`
  margin: 10px 0;
  padding: 20px;
  width: 100%;
  height: 170px;
  background: #ffffff;
  border-radius: 10px;
`;

export default Receptions;
