import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Block} from '../../../components/simpleComponents/Block';
import {Text} from '../../../components/simpleComponents/Text';
import BlackButton from '../../../components/combinedComponents/BlackButton';

import Hand from '../../../assets/icons/hand.svg';

const WelcomeInScreen = () => {
  const navigation = useNavigation();

  const handleEnterTheHookes = () => {
    navigation.navigate('Registration');
  };

  return (
    <Block
      justifyContent={'center'}
      alignItems={'center'}
      flex={1}
      bg={'white'}
      paddingHorizontal={'15px'}>
      <Hand height={120} width={120} />
      <Text
        marginBottom={10}
        marginTop={15}
        fontSize={32}
        fontWeight={'bold'}
        textAlign={'center'}>
        Welcome in
      </Text>
      <Text textAlign={'center'} fontSize={15} marginBottom={40}>
        Your new shopping assistant is ready to
        {'\n'}
        help you save.
      </Text>
      <BlackButton
        text={'Enter the Hookes'}
        handleButtonFunction={handleEnterTheHookes}
      />
    </Block>
  );
};

export default WelcomeInScreen;
