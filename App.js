import {Navigation } from 'react-native-navigation';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";


// register screen 
Navigation.registerComponent("myGallery.AuthScreen", () => AuthScreen);
Navigation.registerComponent("myGallery.SharePlaceScreen", () => SharePlaceScreen);
Navigation.registerComponent("myGallery.FindPlaceScreen", () => FindPlaceScreen);


// start app

Navigation.startSingleScreenApp({
  screen: {
    screen: "myGallery.AuthScreen",
    title: "Login"
  }

});









// import React, { Component } from "react";
// import { StyleSheet, View } from "react-native";
// import { connect } from "react-redux";

// import PlaceInput from "./src/components/PlaceInput/PlaceInput";
// import PlaceList from "./src/components/PlaceList/PlaceList";
// import PlaceDetails from "./src/components/PlaceDetails/PlaceDetails";
// import {
//   addPlace,
//   deletePlace,
//   selectPlace,
//   deselectPlace
// } from "./src/store/actions/index";

// class App extends Component {
//   placeAddedHandler = placeName => {
//     this.props.onAddPlace(placeName);
//   };

//   placeDeletedHandler = () => {
//     this.props.onDeletePlace();
//   };

//   modalClosedHandler = () => {
//     this.props.onDeselectPlace();
//   };

//   placeSelectedHandler = key => {
//     this.props.onSelectPlace(key);
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <PlaceDetails
//           selectedPlace={this.props.selectedPlace}
//           onItemDeleted={this.placeDeletedHandler}
//           onModalClosed={this.modalClosedHandler}
//         />
//         <PlaceInput onPlaceAdded={this.placeAddedHandler} />
//         <PlaceList
//           places={this.props.places}
//           onItemSelected={this.placeSelectedHandler}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 26,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "flex-start"
//   }
// });

// const mapStateToProps = state => {
//   return {
//     places: state.places.places,
//     selectedPlace: state.places.selectedPlace
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddPlace: name => dispatch(addPlace(name)),
//     onDeletePlace: () => dispatch(deletePlace()),
//     onSelectPlace: key => dispatch(selectPlace(key)),
//     onDeselectPlace: () => dispatch(deselectPlace())
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
