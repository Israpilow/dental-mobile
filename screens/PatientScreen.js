import React from 'react';
import { Text, SectionList, View } from 'react-native';
import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import GrayText from '../components/GrayText';
import Receptions from '../components/Receptions';
import SectionTitle from '../components/SectionTitle';
import PlusButton from '../components/PlusButton';

const DATA = [
  {
    title: 'Приемы',
    data: [
      {
        time: '11.10.2019 - 15:40',
        price: '1500',
        user: {
          dent: 12,
          diagnosis: 'пульпит',
        },
      },
      {
        time: '11.10.2019 - 15:40',
        price: '1500',
        user: {
          dent: 12,
          diagnosis: 'пульпит',
        },
      },
      {
        time: '11.10.2019 - 15:40',
        price: '1500',
        user: {
          dent: 12,
          diagnosis: 'пульпит',
        },
      },
      {
        time: '11.10.2019 - 15:40',
        price: '1500',
        user: {
          dent: 12,
          diagnosis: 'пульпит',
        },
      },
    ],
  },
];

const PatientScreen = ({ navigation }) => {
  return (
    <Container>
      <PatientFullName>{navigation.getParam('user').fullname}</PatientFullName>
      <GrayText>{navigation.getParam('user').phone}</GrayText>
      <ButtonBlock>
        <Button>
          <ButtonText>Формула зубов</ButtonText>
        </Button>
        <ButtonCall>
          <Ionicons name="call" size={22} color="white" />
        </ButtonCall>
      </ButtonBlock>

      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Receptions {...item} />}
        renderSectionHeader={({ section: { title } }) => <SectionTitle>{title}</SectionTitle>}
      />
      <PlusButton></PlusButton>
    </Container>
  );
};

const ButtonBlock = styled.View`
  margin: 20px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ButtonCall = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  background: #84d269;
  border-radius: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 270px;
  height: 45px;
  background: #2a86ff;
  border-radius: 40px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

const PatientFullName = styled.Text`
  font-size: 24px;
  font-weight: 800;
  line-height: 30px;
  margin-bottom: 5px;
`;

const Container = styled.View`
  padding: 25px;
  margin-bottom: 120px;
`;

PatientScreen.navigationOptions = {
  title: 'Карта пациента',
};

export default PatientScreen;
