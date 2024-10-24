import React from 'react';
import { Button as NBButton, Text, NativeBaseProvider } from 'native-base';

// Functional Component with props
const Button = (props) => {
  return (
    <NativeBaseProvider>
    <NBButton
      onPress={props.onPress}
      bg="#dddddd"
      px={6}
      borderRadius={30}
      justifyContent="center"
    >
      <Text
        fontSize={16}
        textTransform="uppercase"
        fontWeight="bold"
        color="black"
      >
        {props.text}
      </Text>
    </NBButton>
    </NativeBaseProvider>
  );
};

export default Button;