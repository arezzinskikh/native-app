import * as React from "react";
import { Appbar, DarkTheme } from "react-native-paper";

const HeaderAppbar = () => {
  const _goBack = () => console.log("Went back");

  const _handleSearch = () => console.log("Searching");

  const _handleMore = () => console.log("Shown more");

  return (
    <Appbar.Header theme={theme}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Native App ver 0.1.0" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};

const theme = {
  ...DarkTheme,
  roundness: 2,
};

export default HeaderAppbar;
