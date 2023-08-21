import React, {ReactElement} from 'react';

import {Text} from '../simpleComponents/Text';
import {Button} from '../simpleComponents/Button';

interface UnderlinedButtonProps {
  text: string;
  fontSize: number;
  handleUnderlinedButtonFunction: () => void;
}

const UnderlinedButton: React.FC<UnderlinedButtonProps> = ({
  text,
  fontSize,
  handleUnderlinedButtonFunction,
}: UnderlinedButtonProps): ReactElement => {
  return (
    <Button onPress={handleUnderlinedButtonFunction}>
      <Text
        color={'#1A1B27'}
        fontWeight={'normal'}
        fontSize={fontSize}
        textDecorationLine={'underline'}>
        {text}
      </Text>
    </Button>
  );
};

export default UnderlinedButton;
