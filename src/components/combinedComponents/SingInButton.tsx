import React, {ReactElement} from 'react';

import {Block} from '../simpleComponents/Block';
import {Text} from '../simpleComponents/Text';
import {Button} from '../simpleComponents/Button';

interface SignInButtonProps {
  Icon: React.FC;
  text: string;
  handleSingIn: () => void;
}

const SignInButton: React.FC<SignInButtonProps> = ({
  Icon,
  text,
  handleSingIn,
}: SignInButtonProps): ReactElement => {
  return (
    <Button onPress={handleSingIn}>
      <Block
        height={'52px'}
        width={'100%'}
        bg={'#F2F3F6'}
        gap={12}
        borderRadius={'100px'}
        flexDirection={'row'}
        justifyContent={'center'}
        alignItems={'center'}>
        <Icon width={20} height={20} />
        <Text fontSize={15}>{`Sign in with ${text}!`}</Text>
      </Block>
    </Button>
  );
};

export default SignInButton;
