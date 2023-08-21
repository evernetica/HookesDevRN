import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Block} from '../simpleComponents/Block';

import GoBackButton from '../../assets/icons/go-back.svg';
import Hookes from '../../assets/icons/HOOKES.svg';

const DrawerHeader = ({navigation}) => {
  return (
    <Block
      flexDirection={'row'}
      bg={'white'}
      justifyContent={'center'}
      alignItems={'flex-end'}
      // height={'90px'}
    >
      <Block
        flexDirection={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        width={'100%'}>
        <Block position={'absolute'} left={'16px'}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <GoBackButton width={36} height={36} />
          </TouchableOpacity>
        </Block>
        <Hookes width={120} height={20} />
      </Block>
    </Block>
  );
};

export default DrawerHeader;
