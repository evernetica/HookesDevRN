import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Alert, StyleSheet} from 'react-native';
import {useFormik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Block} from '../../components/simpleComponents/Block';
import {Text} from '../../components/simpleComponents/Text';
import {Button} from '../../components/simpleComponents/Button';
import FormField from '../../components/simpleComponents/FormField';
import UnderlinedButton from '../../components/combinedComponents/UnderlinedButton';

import {colors} from '../../components/colors';

import ArrowRight from '../../assets/icons/arrow-right.svg';
import {CommonDrawerHeader} from '../../components/combinedComponents/CommonDrawerHeader';

const CreateAnAccountPage = () => {
  const [formFieldsStates, setFormFieldsStates] = useState([
    {isDataCorrect: true},
    {isDataCorrect: true},
    {isDataCorrect: true},
  ]);
  const navigation = useNavigation();

  const handleLogIn = () => {
    navigation.navigate('Registration');
  };

  const formik = useFormik({
    initialValues: {name: '', email: '', password: ''},
    onSubmit: () => {
      Alert.alert('Sign Up');
    },
    validate: values => {
      let errors = {};

      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.password) {
        errors.password = 'Password is required';
      }

      if (!values.name) {
        errors.name = 'Name is required';
      }

      setFormFieldsStates([
        {isDataCorrect: !errors.name},
        {isDataCorrect: !errors.email},
        {isDataCorrect: !errors.password},
      ]);

      return errors;
    },
  });
  const handleLogin = async () => {
    if (Object.keys(formik.errors).length > 0) {
      Alert.alert('Please correct the invalid fields');
    } else {
      await formik.submitForm();
      console.log(formik.values.name);
      console.log(formik.values.email);
      console.log(formik.values.password);
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.scrollContainer}
      keyboardShouldPersistTaps="handled">
      <CommonDrawerHeader
        hasBackButton={undefined}
        handleBackButtonPress={undefined}
        hasNext={undefined}
        handleNext={undefined}
        nextContent={undefined}
        hideTitle={undefined}
      />
      <Block
        flex={1}
        bg={'white'}
        paddingTop={'80px'}
        paddingHorizontal={'15px'}>
        <Text
          color={colors.textBlack}
          textAlign={'center'}
          fontSize={26}
          fontWeight={'bold'}
          marginBottom={40}>
          Create an account!
        </Text>
        <FormField
          header="Enter name"
          value={formik.values.name}
          onChangeText={formik.handleChange('name')}
          onBlur={formik.handleBlur('name')}
          errorMessage={'Please enter your name'}
          placeholder="Enter name"
          isDataCorrect={formFieldsStates[0].isDataCorrect}
        />
        <FormField
          header="Email address"
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          keyboardType="email-address"
          autoCapitalize="none"
          errorMessage={'Please enter email'}
          placeholder="Email address"
          isDataCorrect={formFieldsStates[1].isDataCorrect}
        />
        <FormField
          header="Password"
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          secureTextEntry={true}
          errorMessage={'Please enter password'}
          placeholder="Password"
          isDataCorrect={formFieldsStates[2].isDataCorrect}
        />
        <Block paddingVertical={'40px'}>
          <Button
            width={'100%'}
            height={'52px'}
            borderRadius={'100px'}
            justifyContent={'center'}
            bg={colors.blackButtonBackground}
            onPress={handleLogin}>
            <Text
              fontWeight={'bold'}
              textAlign={'center'}
              color={colors.textWhite}>
              Sign Up
            </Text>
            <Block position={'absolute'} right={'16px'}>
              <ArrowRight width={24} height={24} />
            </Block>
          </Button>
        </Block>
        <Block
          width={'100%'}
          justifyContent={'center'}
          gap={5}
          flexDirection={'row'}>
          <Text fontSize={15} color={colors.textGrey}>
            Already have an account?
          </Text>
          <UnderlinedButton
            text={'Log in'}
            fontSize={15}
            handleUnderlinedButtonFunction={handleLogIn}
          />
        </Block>
      </Block>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    fontFamily: 'Inter',
    justifyContent: 'center',
  },
});
export default CreateAnAccountPage;
