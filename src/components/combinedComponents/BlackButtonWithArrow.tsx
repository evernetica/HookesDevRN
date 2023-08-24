import React, {ReactElement} from 'react';

import {Text} from '../simpleComponents/Text';
import {Button} from '../simpleComponents/Button';

import ArrowRight from '../../assets/icons/arrow-right.svg';

import {colors} from '../colors';
import {Block} from '../simpleComponents/Block';

interface ButtonProps {
  text: string;
  handleButtonFunction: () => void;
}

const BlackButton: React.FC<ButtonProps> = ({
  text,
  handleButtonFunction,
}: ButtonProps): ReactElement => {
  return (
    <Button
      width={'100%'}
      height={'52px'}
      borderRadius={'100px'}
      justifyContent={'center'}
      bg={colors.blackButtonBackground}
      onPress={handleButtonFunction}>
      <Text fontWeight={'bold'} textAlign={'center'} color={colors.textWhite}>
        {text}
      </Text>
      <Block position={'absolute'} right={'16px'}>
        <ArrowRight width={24} height={24} />
      </Block>
    </Button>
  );
};

export default BlackButton;
