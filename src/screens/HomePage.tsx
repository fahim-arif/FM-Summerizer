import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import Pdf from 'react-native-pdf';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const HomePage = () => {
  const [fileUrl, setFileUrl] = React.useState<string>('');

  const selectDocument = async () => {
    try {
      const document = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
      });
      setFileUrl(document.uri);
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('User cancelled document picker');
      } else {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Pdf source={{uri: fileUrl}} style={{flex: 1, width: '100%'}} />
      <Button title="Select Document" onPress={selectDocument} />
    </View>
  );
};

export default HomePage;
