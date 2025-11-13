import { View, Text, FlatList, Switch } from 'react-native';
import style from './ListTodoStyle';
import ContextTodo from '../../contexts/ContextTodo';
import { useContext, useEffect } from 'react';
import { CheckBox, Button } from 'react-native-paper';

const Item = (props) => {

    console.log(props.article)
    return (
        <Text style={style.text}>{props.article.content}</Text>
    )

}

const CheckBoxTodo = (props) => {

    const contextTodo = useContext(ContextTodo);

    return (

        // <CheckBox
        //     status={props.article.active ? 'checked' : 'unchecked'}
        //     onPress={() => {contextTodo.toggleSwitch(props.article.id);
        //     }}
        // >

        // </CheckBox>

        // FONCTIONNE 
        <Switch
            trackColor={{ false: 'red', true: 'green' }}
            thumbColor={props.article.active ? 'green' : 'red'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => contextTodo.toggleSwitch(props.article.id)}
            value={props.article.active}
        />
    )
}

const DeleteBtn = (props) => {
    const contextTodo = useContext(ContextTodo);

    return (
        <Button style={style.button}
            icon="delete" mode="contained"
            onPress={() => contextTodo.deleteEntrie(props.article.id)}>
            X
        </Button>
    )
}

const ListTodo = () => {

    const contextTodo = useContext(ContextTodo);

    return (
        <View style={style.container}>

            <FlatList style={style.line}
                data={contextTodo.list}
                renderItem={({ item, index }) => {
                    return (
                        <View style={style.item}>
                            {/* <CheckBox article={item}></CheckBox> */}
                            <CheckBoxTodo article={item}></CheckBoxTodo>
                            <Item article={item} > </Item>
                            <DeleteBtn article={item} ></DeleteBtn>

                        </View>
                    )
                }}
                keyExtractor={item => item.id}
            >
            </FlatList>

        </View>
    )
}

export default ListTodo;