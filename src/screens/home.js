import React,{Component} from 'react';
import { View, Text,Button} from 'react-native';
import DetaisListScreen from './detaislist'
import QrcodeScreen from './qrcode';
import FullDetaisScreen from './fulldetails';


class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Scan OR Code"
          onPress={() => this.props.navigation.navigate('QrcodeScreen')}
        />
        <Button
          title="View Logs"
          onPress={() => this.props.navigation.navigate('DetaisListScreen')}
        />   
      </View>
    );
  }
}



export default HomeScreen;