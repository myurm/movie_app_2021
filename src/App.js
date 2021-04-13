import React from "react";
import { BrowserRouter as Router,  Route, Switch } from "react-router-dom";
import main from "./components/views/main"

function App() {
  return(
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={main} />
        </Switch>
      </Router>
    </>
  )
}

export default App;