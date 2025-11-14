/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, useColorScheme, FlatList, Text, ImageBackground, StyleSheet } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import InputTodo from './components/InputTodo/InputTodo/InputTodo';
import SubmitTodo from './components/SubmitTodo/SubmitTodo';
import ListTodo from './components/ListTodo/ListTodo';
import { useState } from 'react';
import ContextTodo from './contexts/ContextTodo';
import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage';

const storage = new MMKVLoader().initialize();
// const image = { url: './components/Stockage/chat.jpg' }
const styles = StyleSheet.create({

  image: {
    flex: 1,
    justifyContent: 'center',
  }


});
function App() {
  const isDarkMode = useColorScheme() === 'dark';
  // const [list, setList] = useState([]);
  const [list, setList] = useMMKVStorage('list', storage, []);
  const [textInput, setTextInput] = useState('');

  const handleSubmit = () => {
    let item;
    // console.log(list)
    if (list.length > 0) {
      item = {
        id: (list[list.length - 1].id + 1),
        content: textInput,
        active: false
      }

    } else {
      item = {
        id: 0,
        content: textInput,
        active: false
      }

    }
    setList([...list, item]);
  }

  // const toggleSwitch = (id) => {
  //   console.log('>>> toogleSwitch', id)
  //   const listTmp = list.map((item) => {
  //     if (item.id === id) {
  //       item.active = !item.active
  //     }
  //     return item;
  //   })
  //   setList(listTmp);
  // }

  const toggleSwitch = (id) => setList(list.map(item => id === item.id ? { ...item, active: !item.active } : item))


  // const deleteEntrie = (id) => {
  //   console.log('>>> deleteEntrie')
  //   let indexTmp;
  //   const listTmp = list.map((item) => {

  //     if (item.id === id) {
  //       console.log('>>> ToDelete', item)
  //       indexTmp = id
  //     }
  //     return item;


  //   })
  //   listTmp.splice(indexTmp, 1);
  //   setList(listTmp)
  //   console.log('>table1', list)
  //   console.log('>table2', listTmp)
  // }
const deleteEntrie = (id) => setList(list.filter(item => item.id !== id))
  // const deleteEntrie = (id) => setList(list.map(item => item.id !== id && item).filter(n => n))

  // let indexTmp;


  // const deleteEntrie = (id,indexTmp) => setList(list.map(item => id === item.id ? { ...item, indexTmp: item.id } : item).splice(indexTmp, 1))
  //filter remplace le Tmp / splice
  return (
    <SafeAreaProvider >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView >
        {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> */}

        <ContextTodo.Provider value={
          {
            list: list,
            setList: setList,
            textInput: textInput,
            setTextInput: setTextInput,
            handleSubmit: handleSubmit,
            toggleSwitch: toggleSwitch,
            deleteEntrie: deleteEntrie
          }}>

          <Text style={{ textAlign: 'center', padding: 10, fontSize: 28, color: 'black', backgroundColor: '' }}>Ma liste📋😺</Text>
          <InputTodo></InputTodo>
          <SubmitTodo></SubmitTodo>
          <ListTodo></ListTodo>

        </ContextTodo.Provider>
        {/* </ImageBackground> */}

      </SafeAreaView>
    </SafeAreaProvider>
  );
}



export default App;
