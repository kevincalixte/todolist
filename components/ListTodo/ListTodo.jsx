import { View, Text, FlatList } from 'react-native';
import style from './ListTodoStyle';
import ContextTodo from '../../contexts/ContextTodo';
import { useContext, useEffect } from 'react';

const Item = (props) => {
    console.log(props.article)
    return (
        <Text>{props.article.content}</Text>
    )

}
const ListTodo = () => {
    const contextTodo = useContext(ContextTodo);

    return (
        <View style={style.container}>

            <FlatList
                data={contextTodo.list}
                renderItem={({item}) => <Item article={item}></Item>}
                keyExtractor={item => item.id}
            >
            </FlatList>

        </View>
    )
}

export default ListTodo;