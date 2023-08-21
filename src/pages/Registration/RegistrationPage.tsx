import React, {useState} from 'react';
import {Alert, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useFormik} from 'formik';

import {Block} from '../../components/simpleComponents/Block';
import {Text} from '../../components/simpleComponents/Text';
import {Button} from '../../components/simpleComponents/Button';
import FormField from '../../components/simpleComponents/FormField';
import UnderlinedButton from '../../components/combinedComponents/UnderlinedButton';

import SignInButton from '../../components/combinedComponents/SingInButton';

import Google from '../../assets/icons/Google.svg';
import Apple from '../../assets/icons/Apple.svg';
import ArrowRight from '../../assets/icons/arrow-right.svg';

const RegistrationPage = () => {
  const [formFieldsStates, setFormFieldsStates] = useState([
    {isDataCorrect: true},
    {isDataCorrect: true},
  ]);
  const handleSingIn = () => {
    console.log('Sign In');
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password');
  };

  const handleSignUp = () => {
    console.log('Sign Up');
  };

  const formik = useFormik({
    initialValues: {email: '', password: ''},
    onSubmit: () => {
      Alert.alert('Successful login');
    },
    validate: values => {
      let errors = {};

      if (!values.email) {
        errors = 'Email is required';
        setFormFieldsStates(prevStates => [
          {isDataCorrect: false},
          prevStates[1],
        ]);
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors = 'Invalid email address';
        setFormFieldsStates(prevStates => [
          {isDataCorrect: false},
          prevStates[1],
        ]);
      } else {
        setFormFieldsStates(prevStates => [
          {isDataCorrect: true},
          prevStates[1],
        ]);
      }

      if (!values.password) {
        errors = 'Password is required';
        setFormFieldsStates(prevStates => [
          prevStates[0],
          {isDataCorrect: false},
        ]);
      } else {
        setFormFieldsStates(prevStates => [
          prevStates[0],
          {isDataCorrect: true},
        ]);
      }

      return errors;
    },
  });
  const handleLogin = async () => {
    if (Object.keys(formik.errors).length > 0) {
      Alert.alert('Please correct the invalid fields');
    } else {
      await formik.submitForm();
      console.log(formik.values.email);
      console.log(formik.values.password);
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.scrollContainer}
      keyboardShouldPersistTaps="handled">
      <Block
        flex={1}
        bg={'white'}
        paddingTop={'80px'}
        paddingHorizontal={'15px'}>
        <Text
          color={'#1A1B27'}
          textAlign={'center'}
          fontSize={26}
          fontWeight={'bold'}
          marginBottom={40}>
          Hi, Welcome Back!
        </Text>
        <Block gap={12}>
          <SignInButton
            text={'Google'}
            handleSingIn={handleSingIn}
            Icon={Google}
          />
          <SignInButton
            text={'Apple'}
            handleSingIn={handleSingIn}
            Icon={Apple}
          />
        </Block>
        <Block
          justifyContent={'center'}
          alignItems={'center'}
          paddingVertical={'24px'}
          flexDirection={'row'}
          gap={12}>
          <Block flex={1} height={'1px'} bg={'#E4E7ED'} />
          <Text color={'#6E6E73'} fontSize={12}>
            OR
          </Text>
          <Block flex={1} height={'1px'} bg={'#E4E7ED'} />
        </Block>
        <FormField
          header="Email address"
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          keyboardType="email-address"
          autoCapitalize="none"
          errorMessage={'Please enter email'}
          placeholder="Email address"
          isDataCorrect={formFieldsStates[0].isDataCorrect}
        />
        <FormField
          header="Password"
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          secureTextEntry={true}
          errorMessage={'Please enter password'}
          placeholder="Password"
          isDataCorrect={formFieldsStates[1].isDataCorrect}
        />
        <UnderlinedButton
          text={'Forgot Password'}
          fontSize={13}
          handleUnderlinedButtonFunction={handleForgotPassword}
        />
        <Block paddingVertical={'40px'}>
          <Button
            width={'100%'}
            height={'52px'}
            borderRadius={'100px'}
            justifyContent={'center'}
            bg={'#1A1B27'}
            onPress={handleLogin}>
            <Text fontWeight={'bold'} textAlign={'center'} color={'white'}>
              Log In
            </Text>
            <Block position={'absolute'} right={'16px'}>
              <ArrowRight width={24} height={24} />
            </Block>
          </Button>
        </Block>
        <Block
          width={'100%'}
          justifyContent={'center'}
          gap={8}
          flexDirection={'row'}>
          <Text fontSize={15} color={'#6E6E73'}>
            Not a member?
          </Text>
          <UnderlinedButton
            text={'Sign Up'}
            fontSize={15}
            handleUnderlinedButtonFunction={handleSignUp}
          />
        </Block>
      </Block>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
export default RegistrationPage;
