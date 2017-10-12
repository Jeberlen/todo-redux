import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

const App = () => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-sm-12 col-md-8" align="center">
        <AddTodo />
        <Footer />
      </div>
      <div className="col-sm-6 col-md-4">
        <VisibleTodoList />
      </div>
    </div>
  </div>
)

export default App
