import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import Appointment from '../components/Appointment';
import SectionTitle from '../components/SectionTitle';
import PlusButton from '../components/PlusButton';

const DATA = [
  {
    title: '11 июня',
    data: [
      {
        time: '12:30',
        diagnosis: 'пульпит',
        user: {
          phone: '+7 (900) 242-23-23',
          avatar:
            'https://sun9-41.userapi.com/s/v1/ig2/Da1YVFcHMeWtu9nPktX2MO-N0hNrfpqMhXrGa4kUvLVqBc5pEg1L12t1cf9r-E47XeUQ4V6P_L1m_XYTyGCggO0P.jpg?size=607x1080&quality=95&type=album',
          fullname: 'Анжела Матиева',
        },
      },
      {
        time: '16:30',
        diagnosis: 'пульпит',
        user: {
          phone: '+7 (900) 322-25-43',
          avatar:
            'https://sun9-41.userapi.com/s/v1/ig2/Da1YVFcHMeWtu9nPktX2MO-N0hNrfpqMhXrGa4kUvLVqBc5pEg1L12t1cf9r-E47XeUQ4V6P_L1m_XYTyGCggO0P.jpg?size=607x1080&quality=95&type=album',
          fullname: 'Вася Пупкин',
        },
      },
    ],
  },
  {
    title: '13 июня',
    data: [
      {
        time: '14:20',
        diagnosis: 'удаление зуба',
        active: true,
        user: {
          phone: '+7 (900) 788-78-45',
          avatar: 'https://i.pinimg.com/736x/b1/3b/81/b13b81d79fe91e35008feeaf4c5b04d7.jpg',
          fullname: 'Андрей Андефайвович',
        },
      },
      {
        time: '17:30',
        diagnosis: 'пульпит',
        user: {
          phone: '+7 (900) 567-53-67',
          avatar:
            'https://sun9-41.userapi.com/s/v1/ig2/Da1YVFcHMeWtu9nPktX2MO-N0hNrfpqMhXrGa4kUvLVqBc5pEg1L12t1cf9r-E47XeUQ4V6P_L1m_XYTyGCggO0P.jpg?size=607x1080&quality=95&type=album',
          fullname: 'Пиксель Пёрфёктович',
        },
      },
    ],
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Appointment navigate={navigation.navigate} item={item} />}
        renderSectionHeader={({ section: { title } }) => <SectionTitle>{title}</SectionTitle>}
      />
      <PlusButton></PlusButton>
    </Container>
  );
};

HomeScreen.navigationOptions = {
  title: 'Пациенты',
};

const Container = styled.View`
  flex: 1;
`;

export default HomeScreen;
