/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class IU extends Component {



  render () {
    let iuImg = '';
    if (this.props.type === 'one') {
      iuImg=require('./assets/iu.jpg');
    } else if (this.props.type === 'two') {
      iuImg = require('./assets/iu2.jpg')
    }
    return (
      <View>
        <Image source = {iuImg} style={{width : 100, height : 100}}/>
        <Button title = {'나의 주소출력'} />

      </View>
    )
  }
}

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Hello world</Text>
      <IU type = 'one' />
      <IU type = 'two' />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex : 1, //전체영역?
    justifyContent : 'center', //세로영역에서 센터
    alignItems : 'center' //가로 영역에서 센터 
  },
   hello : {
     color : 'red'
   }
});

export default App;
