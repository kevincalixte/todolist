import { View, TextInput  } from 'react-native';
import { useContext } from 'react';
import ContextTodo from '../../../contexts/ContextTodo'
import style from './InputTodoStyle';

const InputTodo = (props) => {
    const contextTodo = useContext(ContextTodo);
    
    return (
        <View>
            <TextInput style={style.input} 
            placeholder='Ajouter à la liste...' 
            onChangeText={contextTodo.setTextInput} 
            value={contextTodo.textInput}></TextInput>
        </View>
    )
}

export default InputTodo;