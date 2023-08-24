import React, {ReactElement} from 'react';

import {Text} from '../simpleComponents/Text';
import {Button} from '../simpleComponents/Button';

import {colors} from '../colors';

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
        color={colors.textBlack}
        fontWeight={'normal'}
        fontSize={fontSize}
        textDecorationLine={'underline'}>
        {text}
      </Text>
    </Button>
  );
};

export default UnderlinedButton;
