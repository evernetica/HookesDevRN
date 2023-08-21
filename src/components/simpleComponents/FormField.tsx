import React, {FC, useState} from 'react';

import styled from 'styled-components/native';

import {Block} from './Block';
import {Button} from './Button';
import {Text} from './Text';
import {
  ActivityIndicator,
  NativeSyntheticEvent,
  Platform,
  TextInputChangeEventData,
  TextInputProps,
} from 'react-native';

import {PaddingTypes} from '../../types/PaddingTypes';
import {PaddingStyle} from './PaddingStyle';
import Eye from '../../icons/open-eye.svg';
import EyeClosed from '../../icons/closed-eye.svg';
import ErrorCircle from '../../icons/error-circle.svg';

type TextInputType = {
  header: string;
  width?: string;
  color?: string;
  value?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  bg?: string;
  onChangeText: (textValue: string) => void;
  placeholder?: string;
  isLoading?: boolean;
  paddingHorizontal?: string;
  paddingVertical?: string;
  keyboardType?: TextInputProps['keyboardType'];
  secureTextEntry?: boolean;
  autoCapitalize?: TextInputProps['autoCapitalize'];
  onBlur?: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  errorMessage?: string | false | undefined;
  isDataCorrect: boolean;
} & PaddingTypes;

const StyledSimpleInput = styled.TextInput<Omit<TextInputType, 'header'>>`
  width: ${({width}): string | undefined => `${width || '100%'}`};
  ${({fontWeight}): string | undefined =>
    fontWeight && `font-weight: ${fontWeight}`};
  color: ${({color}): string => color || 'black'};
  background-color: ${({bg}): string => bg || 'transparent'};
  font-size: ${({fontSize}): string => fontSize || '14px'};
  font-family: ${({fontFamily}): string => fontFamily || 'Helvetica'};
  ${({paddingHorizontal}): string | undefined =>
    paddingHorizontal && `padding-horizontal: ${paddingHorizontal}`};
  ${({paddingVertical}): string | undefined =>
    paddingVertical && `padding-vertical: ${paddingVertical}`};
  &::placeholder {
    color: #6e6e73;
  }
  ${PaddingStyle};
`;

const FormField: FC<TextInputType> = ({
  onChangeText,
  value,
  isLoading,
  keyboardType,
  secureTextEntry,
  autoCapitalize,
  isDataCorrect,
  errorMessage,
  ...rest
}) => {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(secureTextEntry);

  const toggleSecureTextEntry = () => {
    setIsSecureTextEntry(!isSecureTextEntry);
  };

  return (
    <Block paddingBottom={'12px'}>
      <Block
        flexDirection={'column'}
        height={'52px'}
        borderRadius={'100px'}
        borderColor={isDataCorrect ? '#E4E7ED' : '#FF2727'}
        justifyContent={'center'}
        alignItems={'center'}
        borderWidth={'1px'}>
        <Block
          paddingHorizontal={'8px'}
          flexDirection={'row'}
          alignItems={'center'}>
          {isLoading && <ActivityIndicator size={'small'} />}
        </Block>
        <Block
          flexDirection={'row'}
          paddingHorizontal={'16px'}
          paddingVertical={'14px'}>
          <StyledSimpleInput
            value={value}
            fontSize={'15px'}
            fontWeight={'400'}
            paddingRight={25}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            secureTextEntry={isSecureTextEntry}
            autoCapitalize={autoCapitalize}
            {...rest}
          />
          {secureTextEntry && (
            <Block
              height={'100%'}
              top={'14px'}
              right={'16px'}
              position={'absolute'}>
              <Button
                height={'100%'}
                justifyContent={'center'}
                onPress={toggleSecureTextEntry}>
                {isSecureTextEntry ? (
                  <EyeClosed width={24} height={24} fill={'#000'} />
                ) : (
                  <Eye width={24} height={24} fill={'#000'} />
                )}
              </Button>
            </Block>
          )}
        </Block>
      </Block>
      {!isDataCorrect && (
        <Block flexDirection={'row'} gap={3} paddingTop={'3px'}>
          <ErrorCircle height={16} />
          <Text color="red" marginLeft="16px">
            {errorMessage}
          </Text>
        </Block>
      )}
    </Block>
  );
};

export default FormField;
