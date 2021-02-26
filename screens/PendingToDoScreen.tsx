import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';
import { useState } from 'react';
import axios from 'axios';
import { TouchableOpacity } from 'react-native';

export default function PendingToDoScreen() {

  const BASE_URL = 'https://6038aac64e3a9b0017e93a19.mockapi.io';

  const [todos, setTodo] = useState([
    [
      {
        "id": "4",
        "createdAt": "2021-02-26T08:29:08.040Z",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/imomenui/128.jpg",
        "task": "Operative override",
        "done": false,
        "completedAt": "2021-08-05T22:40:51.820Z",
        "name": "Kaitlin Wilkinson IV",
        "location": "6098 Theo Hollow",
        "startsAt": "2021-07-01T03:52:49.295Z",
        "email": "Murl.Weber@yahoo.com",
        "phone": "1-564-275-3707 x10700"
      },
      {
        "id": "5",
        "createdAt": "2021-02-25T10:54:22.206Z",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/BroumiYoussef/128.jpg",
        "task": "Park cutting-edge",
        "done": false,
        "completedAt": "2021-04-18T04:05:10.624Z",
        "name": "Otho Cole",
        "location": "035 Pacocha Mills",
        "startsAt": "2021-11-20T11:20:22.667Z",
        "email": "Irma69@hotmail.com",
        "phone": "(336) 019-3870 x050"
      },
      {
        "id": "6",
        "createdAt": "2021-02-25T12:30:13.083Z",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/andrewabogado/128.jpg",
        "task": "open-source",
        "done": true,
        "completedAt": "2022-01-29T12:40:11.929Z",
        "name": "Javon Wolf",
        "location": "978 Sophia Walks",
        "startsAt": "2022-01-20T21:16:26.526Z",
        "email": "Chaya_Conn51@yahoo.com",
        "phone": "982-143-8689 x2194"
      },
    ]
  ]);

  const getToDosFromApi = () => {
    axios.get(`${BASE_URL}/todos`)
      .then(function (response) {
        const newTodos = [...todos, response.data];
        setTodo(newTodos);
      })
      .catch(function (error) {
        console.log(error);
      })
  };

  const toDoList = todos[0].map((todo, index) => {
    return (
      <TouchableOpacity
        key={index}
      >
        <Card >
          <Card.Title>{todo.name}</Card.Title>
          <Card.Divider />
          <Text style={{ marginBottom: 10 }}>
            {todo.task}
          </Text>
          <Button
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title='mark task as complete' />
        </Card>
      </TouchableOpacity>
    )
  })

  React.useEffect(() => {
    if (todos.length == 0) {
      getToDosFromApi();
    } else {
      setTimeout(() => {
      }, 1000)
    }
  })

  return (
    <View style={styles.container}>
      <ScrollView>
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
