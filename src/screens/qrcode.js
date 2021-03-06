import React,{Component} from 'react';
import { View, Text , StyleSheet , Image} from 'react-native';
import { RNCamera } from 'react-native-camera';

class QrcodeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._RNCameraRef = React.createRef();
}

barcodeRecognized = ({ data }) => {
  // let { activeThingID } = this.props.auth;
  // console.log({ activeThingID });
  // const isFromOnboarding = this.props.navigation.getParam('isFromOnboarding');
  console.warn(data);
      if(data !== null && data !== undefined && data[0]==='x'&& data[1]==='y'&& data[2]==='z'){
        alert("Access Granted!");
        this.props.navigation.navigate('DetaisListScreen');  
      }
      else{
        alert("Access Denined!");
        this.props.navigation.navigate('QrcodeScreen');
      }
};

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
               <Text>QR Scanning</Text>
               <RNCamera
                   ref={this._RNCameraRef}
                   type={RNCamera.Constants.Type.back}
                   captureAudio={false}
                  //  notAuthorizedView={<PendingView />}
                   style={styles.RNCameraStyles}
                   onBarCodeRead={this.barcodeRecognized} >
                   {/* <Image source={require('/Users/deulect/Desktop/Projects/qr_code_app/Assets/qr-boundaries copy.png')} style={styles.qrBoundaries} resizeMode='contain' /> */}

               </RNCamera>
      </View>
    );
  }
}

export default QrcodeScreen;
const styles = StyleSheet.create({
  RNCameraStyles: {   
    width: '70%',
    height: '40%', 
},
//   qrBoundaries: {
//     position: 'absolute',
//     alignSelf: 'center',
//     top: '10%',
//     width: '80%',
//     height: '80%'
// },
});