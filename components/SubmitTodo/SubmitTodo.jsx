import { View, TouchableOpacity, Text } from 'react-native';
import { useContext } from 'react';
import ContextTodo from '../../contexts/ContextTodo'
import style from './SubmitTodoStyle';

const SubmitTodo = (props) => {
    const contextTodo = useContext(ContextTodo);

    return (
        <View style={style.container}>
            <TouchableOpacity style={style.button} onPress={contextTodo.handleSubmit}>
                <Text style={style.buttonText}>Valider</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SubmitTodo;