import React, { useRef, useState } from "react";
import { DrawerLayoutAndroid, StatusBar } from "react-native";
import { Box, NativeBaseProvider } from "native-base";
import Header from "./components/header";
import List from "./screens/list"; 
import Article from "./screens/article"; 

// Functional Component
const App = () => {
  // State Declaration
  const [page, setPage] = useState("list");
  // Ref Declaration
  const drawer = useRef(null);

  // Function to Change Page
  const changePage = (drawer, pageName) => {
    drawer.current.closeDrawer();
    setPage(pageName);
  };

  // Navigation Drawer
  const navigationView = () => (
    <Box safeArea flex={1} backgroundColor="#222222" padding={5}>
      <Button onPress={() => changePage(drawer, "list")} colorScheme="light">
        List
      </Button>
      <Button onPress={() => changePage(drawer, "article")} colorScheme="light">
        Article
      </Button>
      <Button onPress={() => drawer.current.closeDrawer()} colorScheme="light">
        Close
      </Button>
    </Box>
  );

  return (
    <NativeBaseProvider>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition="left"
        renderNavigationView={navigationView}
      >
        <StatusBar barStyle="light-content" backgroundColor="#AA0002" />
        <Box flex={1}>
          <Header drawer={drawer} />
          {page === "list" ? <List /> : page === "article" ? <Article /> : null}
        </Box>
      </DrawerLayoutAndroid>
    </NativeBaseProvider>
  );
};

export default App;
