import {Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import configureStore from './src/store/configureStore';
import placeDetailScreen from './src/screens/PlaceDetails/PlaceDetails';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';

const store = configureStore();

// register screen 
Navigation.registerComponent("myGallery.AuthScreen", () => AuthScreen,store, Provider);
Navigation.registerComponent("myGallery.SharePlaceScreen", () => SharePlaceScreen, store, Provider);
Navigation.registerComponent("myGallery.FindPlaceScreen", () => FindPlaceScreen, store, Provider);
Navigation.registerComponent("myGallery.PlaceDetailScreen", () => placeDetailScreen, store, Provider );
Navigation.registerComponent("myGallery.SideDrawer", () => SideDrawer, store, Provider );



// start app

Navigation.startSingleScreenApp({
  screen: {
    screen: "myGallery.AuthScreen",
    title: "Login"
  }

});





