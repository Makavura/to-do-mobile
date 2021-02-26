import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Text, View } from '../components/Themed';
import { Image, ScrollView } from 'react-native';
import axios from 'axios';
import { ToDoEntry } from '../types';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default function TabOneScreen() {

  const BASE_URL = 'https://6038aac64e3a9b0017e93a19.mockapi.io';

  const [todos, setTodo] = useState([
    [
      {
        "id": "1",
        "createdAt": "2021-02-25T19:00:37.812Z",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/jomarmen/128.jpg",
        "task": "Developer California",
        "done": true,
        "completedAt": "2021-12-05T06:03:44.560Z",
        "name": "Dr. Curtis Satterfield",
        "location": "2591 Volkman Road",
        "startsAt": "2021-07-17T02:29:52.516Z",
        "email": "Neha.Hessel13@hotmail.com",
        "phone": "(345) 515-0937 x814"
      },
      {
        "id": "2",
        "createdAt": "2021-02-25T14:57:06.460Z",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/nellleo/128.jpg",
        "task": "Savings Account",
        "done": true,
        "completedAt": "2021-12-24T15:49:36.232Z",
        "name": "Mrs. Kattie Leannon",
        "location": "892 Zoila Squares",
        "startsAt": "2021-09-16T04:47:12.706Z",
        "email": "Sarah11@yahoo.com",
        "phone": "1-219-268-0259"
      },
      {
        "id": "3",
        "createdAt": "2021-02-26T05:31:40.157Z",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bungiwan/128.jpg",
        "task": "Soap turquoise",
        "done": true,
        "completedAt": "2021-11-27T14:58:11.942Z",
        "name": "Randal Bartell",
        "location": "76522 McClure Drive",
        "startsAt": "2021-08-12T05:06:17.588Z",
        "email": "Dudley.Nader55@gmail.com",
        "phone": "452.635.9106 x539"
      },
    ]
  ]);
  const [hasTodos, setHasTodos] = useState(false);
  const getToDosFromApi = () => {
    axios.get(`${BASE_URL}/todos`)
      .then(function (response) {
        const newTodos = [...todos, response.data];
        setTodo(newTodos);
        setHasTodos(true);
      })
      .catch(function (error) {
        console.log(error);
      })
  };


  React.useEffect(() => {
    console.log(todos.length, 'TITS', todos)
    if (todos.length == 0) {
      getToDosFromApi();
    } else {
      setTimeout(() => {
        console.log(todos, hasTodos)
      }, 1000)
    }
  })

  const filterToDos = () => {

  }

  const toDoList = todos[0].map((todo, index) => {
    return (
      <TouchableOpacity
        key={index}
      >
        <Card>
          <Card.Title>{todo.name}</Card.Title>
          <Card.Divider />

          <Text style={{ marginBottom: 10 }}>
            {todo.task}
          </Text>
          <Button
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title='Initiate task' />

        </Card>
      </TouchableOpacity>
    )
  })

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* { 
        hasTodos && ({ toDoList})
        } */}
        {toDoList}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
