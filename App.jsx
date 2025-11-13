/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, useColorScheme, FlatList } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import InputTodo from './components/InputTodo/InputTodo/InputTodo';
import SubmitTodo from './components/SubmitTodo/SubmitTodo';
import ListTodo from './components/ListTodo/ListTodo';
import { useState } from 'react';
import ContextTodo from './contexts/ContextTodo';

function App() {

  const isDarkMode = useColorScheme() === 'dark';
  const [list, setList] = useState([]);
  const [textInput, setTextInput] = useState('');

  const handleSubmit = () => {
    let item;
    console.log(list)
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
  
  return (
    <SafeAreaProvider >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView>

        <ContextTodo.Provider value={
          {
            list: list,
            setList: setList,
            textInput: textInput,
            setTextInput: setTextInput,
            handleSubmit: handleSubmit
          }}>

          <InputTodo></InputTodo>
          <SubmitTodo></SubmitTodo>
          <ListTodo></ListTodo>

        </ContextTodo.Provider>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}



export default App;
