import React, {ReactElement} from 'react';

import {Text} from '../simpleComponents/Text';
import {Button} from '../simpleComponents/Button';

import {colors} from '../colors';

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
    </Button>
  );
};

export default BlackButton;
