import React from 'react'
import TaskForm from '../containers/TaskForm/TaskForm'
import Layout from '../Layout/Layout'

const AddTask = () => {
  return (
    <>
    <Layout
    title={"Create Tasks"} component={<TaskForm/>} />
    </>
  )
}

export default AddTask