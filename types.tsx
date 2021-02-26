export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Done: undefined;
  ToDo: undefined;
  AddNew: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type MiddleTabParamList = {
  AddNewToDoScreen: undefined;
};

export type ToDoEntry = {
    "id": string,
    "createdAt": string,
    "avatar": string,
    "task": string,
    "done": boolean,
    "completedAt": string,
    "name": string,
    "location": string,
    "startsAt": string
}