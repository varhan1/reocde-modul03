import React from 'react';
import { HStack, Pressable, Image, Box, NativeBaseProvider } from 'native-base';

// Functional Component with props
const Header = (props) => {
  return (
  
    <HStack
      bg="#AA0002"
      justifyContent="space-between"
      alignItems="center"
      px={3}
      pt={12}
      pb={3}
    >
      <Pressable onPress={() => props.drawer.current.openDrawer()}>
        <Image
          source={require('../assets/menu.png')}
          alt="menu"
          size={18}
        />
      </Pressable>
      <HStack space={3} alignItems="center">
        <Image
          source={require('../assets/facebook.png')}
          alt="facebook"
          size={6}
        />
        <Image
          source={require('../assets/youtube.png')}
          alt="youtube"
          size={6}
        />
        <Image
          source={require('../assets/twitter.png')}
          alt="twitter"
          size={6}
        />
        <Image
          source={require('../assets/search.png')}
          alt="search"
          size={6}
        />
      </HStack>
    </HStack>
   
  );
};

export default Header;