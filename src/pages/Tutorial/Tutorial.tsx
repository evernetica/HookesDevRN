import React, {useMemo, useState} from 'react';

import {Block} from '../../components/simpleComponents/Block';
import {CommonDrawerHeader} from '../../components/combinedComponents/CommonDrawerHeader';
import {Text} from '../../components/simpleComponents/Text';
import {colors} from '../../components/colors';
import {Image} from '../../components/simpleComponents/Image';
import ArrowRight from '../../assets/icons/arrow-right.svg';
import {tutorialStepsData} from './tutorialConsts';
import {Button} from '../../components/simpleComponents/Button';
import ProgressBar from './components/ProgressBar';
import {useNavigation} from '@react-navigation/native';

const Tutorial = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigation = useNavigation();
  const nextContent = useMemo(() => (
    <Text fontWeight={'bold'} fontSize={13} color={colors.textBlack}>
      Skip
    </Text>
  ));

  const pageData = useMemo(() => tutorialStepsData[currentStep], [currentStep]);
  const handlePress = () => {
    if (currentStep < tutorialStepsData.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  const handleBack = () => {
    console.log('currentStep');
    if (currentStep >= 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    navigation.navigate('Registration');
  };

  return (
    <Block bg={'white'} height={'100%'}>
      <CommonDrawerHeader
        hasBackButton={currentStep !== 0}
        handleBackButtonPress={handleBack}
        hideTitle
        nextContent={nextContent}
        hasNext
        handleNext={handleSkip}
      />
      <ProgressBar current={currentStep} total={tutorialStepsData.length} />

      <Block
        width={'100%'}
        flex={1}
        // bg={colors.lightGrey}
        justifyContent={'center'}
        alignItems={'center'}
        paddingVertical={40}
        paddingHorizontal={60}>
        <Image
          source={pageData.image}
          width={'100%'}
          height={'100%'}
          resizeMode={'auto'}
        />
      </Block>

      <Block
        position={'absolute'}
        bottom={'0px'}
        left={'0px'}
        width={'100%'}
        paddingHorizontal={'16px'}
        backgroundColor={'white'}
        borderTopWidth={'1px'}
        borderTopColor={colors.greyBorder}>
        <Block alignItems={'center'} paddingTop={'20px'}>
          <Text color={colors.textBlack} fontSize={34} fontWeight={800}>
            {pageData.title}
          </Text>
          <Text
            color={colors.textBlack}
            fontSize={15}
            fontWeight={400}
            textAlign={'center'}
            lineHeight={'32px'}
            marginTop={'16'}>
            {pageData.description}
          </Text>

          <Button
            bg={colors.textBlack}
            width={'100%'}
            paddingVertical={'14px'}
            borderRadius={'100px'}
            justifyContent={'space-between'}
            alignItems={'center'}
            flexDirection={'row'}
            paddingHorizontal={'16px'}
            marginTop={'32px'}
            onPress={handlePress}>
            <Block width={'24px'} />

            <Text color={'white'} fontSize={15} fontWeight={500}>
              Continue
            </Text>
            <ArrowRight />
          </Button>
        </Block>
      </Block>
    </Block>
  );
};

export default Tutorial;
