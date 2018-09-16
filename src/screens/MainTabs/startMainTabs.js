import { Navigation } from 'react-native-navigation';


const startTabs = () => {
    Navigation.startTabBasedApp({
        tabs: [
            {
                screen: "myGallery.FindPlaceScreen", 
                label: "Find Place",
                title: "Find Place"
            }, 
            {
                screen: "myGallery.SharePlaceScreen", 
                label: "Share Place",
                title: "Share Place"
            }
        ]
    })
}
 
export default startTabs;
