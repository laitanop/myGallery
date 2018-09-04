import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetails from "./src/components/PlaceDetails/PlaceDetails";

export default class App extends Component {
  state = {
    places: [], 
    selectedPlace: null
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({key: Math.random(),
        name:placeName, 
        image: {
          uri: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"
        }
        })
      };
    });
  };

  placeSelectedHandler = key => {
   this.setState(prevState => {
     return {
       selectedPlace: prevState.places.find(place => {
         return place.key === key
       })
     };
   });
  
  }
placeDeletedHandler = () => {
 this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }), 
        selectedPlace: null
      }
    });
}
modalCloseHandler = () => {
  this.setState({
    selectedPlace: null
  })
}

  render() {
    return (
      <View style={styles.container}>
      <PlaceDetails selectedPlace={this.state.selectedPlace} onItemDeleted={this.placeDeletedHandler} onModalClose={this.modalCloseHandler} />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.state.places} onItemSelected={this.placeSelectedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
