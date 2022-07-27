import React from 'react';
import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons';

const PlusButton = () => {
  return (
    <PlusButtonWrapper
      style={{
        shadowColor: '#2a86ff',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
      }}>
      <Ionicons name="ios-add" size={32} color="white" />
    </PlusButtonWrapper>
  );
};

const PlusButtonWrapper = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background: #2a86ff;
  position: absolute;
  right: 25px;
  bottom: 25px;
  z-index: 10;
`;

export default PlusButton;
