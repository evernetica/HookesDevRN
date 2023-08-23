import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Block} from '../../../components/simpleComponents/Block';
import {Text} from '../../../components/simpleComponents/Text';
import UnderlinedButton from '../../../components/combinedComponents/UnderlinedButton';
import BlackButton from '../../../components/combinedComponents/BlackButton';
import Coupon from '../../../assets/icons/coupon.svg';

const TutorialAddToSafariScreen = () => {
  const navigation = useNavigation();

  const handleLogIn = () => {
    navigation.navigate('WelcomeInScreen');
  };

  const handleAddToSafari = () => {
    console.log('Added to Safari');
  };

  return (
    <Block
      paddingBottom={'20px'}
      justifyContent={'space-between'}
      flex={1}
      bg={'white'}
      paddingHorizontal={'15px'}>
      <Block flex={1} justifyContent={'center'} alignItems={'center'}>
        <Coupon height={120} width={120} />
        <Text
          marginBottom={10}
          marginTop={15}
          fontSize={32}
          fontWeight={'bold'}
          textAlign={'center'}>
          Save money automatically {'<$'}
        </Text>
        <Text textAlign={'center'} fontSize={15}>
          Automatically save on 40,000 sites while
          {'\n'}
          shopping on mobile, we’ve got you.
        </Text>
      </Block>
      <Block alignItems={'center'} justifyContent={'center'} gap={25}>
        <BlackButton
          text={'Add to Safari'}
          handleButtonFunction={handleAddToSafari}
        />
        <UnderlinedButton
          text={'No thanks'}
          fontSize={15}
          handleUnderlinedButtonFunction={handleLogIn}
        />
      </Block>
    </Block>
  );
};

export default TutorialAddToSafariScreen;
