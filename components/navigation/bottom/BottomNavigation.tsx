import * as React from "react";
import { Text, View, Image, SafeAreaView } from "react-native";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import CameraScreen from "../../camera/CameraScreen";

class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Image
          fadeDuration={1000}
          source={{
            width: 200,
            height: 150,
            uri:
              "https://i.picsum.photos/id/1004/5616/3744.jpg?hmac=Or7EJnz-ky5bsKa9_frdDcDCR9VhCP8kMnbZV6-WOrY",
          }}
        />
        <Image
          fadeDuration={1000}
          source={{
            width: 200,
            height: 150,
            uri:
              "https://i.picsum.photos/id/1010/5184/3456.jpg?hmac=7SE0MNAloXpJXDxio2nvoshUx9roGIJ_5pZej6qdxXs",
          }}
        />
        <Image
          fadeDuration={1000}
          source={{
            width: 200,
            height: 150,
            uri:
              "https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY",
          }}
        />
        <Image
          blurRadius={10}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 150,
            uri:
              "https://i.picsum.photos/id/1008/5616/3744.jpg?hmac=906z84ml4jhqPMsm4ObF9aZhCRC-t2S_Sy0RLvYWZwY",
          }}
        />
      </SafeAreaView>
    );
  }
}
class ProfileScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}
class ImageScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Image Screen</Text>
      </View>
    );
  }
}
class CartScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Cart Screen</Text>
      </View>
    );
  }
}

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={"ios-home"} />
          </View>
        ),
      },
    },
    Camera: {
      screen: CameraScreen,
      navigationOptions: {
        tabBarLabel: "Camera",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={"camera"} />
          </View>
        ),
      },
    },
    Image: {
      screen: ImageScreen,
      navigationOptions: {
        tabBarLabel: "History",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={"ios-images"}
            />
          </View>
        ),
      },
    },
    Cart: {
      screen: CartScreen,
      navigationOptions: {
        tabBarLabel: "Cart",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={"ios-cart"} />
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: "Home",
    activeColor: "#fff",
    inactiveColor: "#fff",
    barStyle: { backgroundColor: "#000000" },
  }
);

export default createAppContainer(TabNavigator);
