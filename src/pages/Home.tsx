import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not 
    if (newTaskTitle !== '') {
      setTasks([...tasks, {id: new Date().getTime(), title: newTaskTitle, done: false}])
    }
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    const newTaskList = tasks.map(item => {
      if (item.id === id) {
        return {
          ...item,
          done: true
        }
      }
      return item
    })

    setTasks(newTaskList)
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    const newTaskList = tasks.filter(item => item.id !== id)
    setTasks(newTaskList)
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}