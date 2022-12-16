import React, { Fragment } from "react";
import InputTodo from "./components/inputTodo";
import ListTodo from "./components/listTodo";
// import EditTodo from "./components/EditTodo"; 

//components
const App = () => {
  return ( <Fragment>
      <div className = 'container'>
        <InputTodo/>
        {/* <EditTodo/> */}
        <ListTodo/>
        </div>
        </Fragment >
          )

                  };
export default App;
