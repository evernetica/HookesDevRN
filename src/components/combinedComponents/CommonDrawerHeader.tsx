import React from 'react';

import {Block} from '../simpleComponents/Block';

import GoBackButton from '../../assets/icons/go-back.svg';
import Hookes from '../../assets/icons/HOOKES.svg';
import {Button} from '../simpleComponents/Button';
import {colors} from '../colors';

export const CommonDrawerHeader = ({
  hasBackButton,
  handleBackButtonPress,
  hasNext,
  handleNext,
  nextContent,
  hideTitle,
}) => {
  return (
    <Block
      flexDirection={'row'}
      bg={'white'}
      width={'100%'}
      justifyContent={'space-between'}
      alignItems={'center'}
      paddingVertical={'16px'}
      paddingHorizontal={'16px'}>
      <Block left={'16px'}>
        {hasBackButton && (
          <Button onPress={handleBackButtonPress}>
            <GoBackButton width={36} height={36} />
          </Button>
        )}
      </Block>

      {!hideTitle && <Hookes width={120} height={20} />}
      <Block>
        {hasNext && (
          <Button
            bg={colors.lightGrey}
            paddingVertical={10}
            paddingHorizontal={16}
            borderRadius={'16px'}
            onPress={handleNext}>
            {nextContent || <GoBackButton width={36} height={36} />}
          </Button>
        )}
      </Block>
    </Block>
  );
};
