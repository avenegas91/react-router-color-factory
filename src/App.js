import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Colors from "./Colors";
import Color from "./Color";
import NewColorForm from "./NewColorForm";

const App = () => {
  const [colors, setColors] = useState(['red', 'blue', 'yellow'])
  const addColor = (color) => {
    setColors([...colors, color])
  }

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path = "/colors">
            <Colors colors={colors} />
          </Route>
          <Route exact path = "/colors/new" >
            <NewColorForm addColor={addColor} />
          </Route>
          <Route exact path = "/colors/:color">
            <Color colors={colors}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;