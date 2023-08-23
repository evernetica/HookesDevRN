import React, {useEffect, useState} from 'react';
import {Animated} from 'react-native';

import {Block} from '../../../components/simpleComponents/Block';
import {colors} from '../../../components/colors';

const ProgressBar = ({current, total}) => {
  const [progress] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(progress, {
      toValue: current,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, [current]);

  const progressAnim = progress.interpolate({
    inputRange: [0, total],
    outputRange: ['20%', '100%'],
  });

  const barWidth = {
    width: progressAnim,
  };

  return (
    <Block width={'100%'} height={'3px'} backgroundColor={colors.greyBorder}>
      <Animated.View
        style={[
          {
            width: '10%',
            height: '100%',
            backgroundColor: colors.textBlack,
          },
          barWidth,
        ]}
      />
    </Block>
  );
};

export default ProgressBar;
