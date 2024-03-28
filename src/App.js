import Fooditem from "./components/FoodItem/Fooditem";
import Yourbill from "./components/YourBill/Yourbill";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/fooditem">
            <Fooditem/>
          </Route>
          <Route exact path="/yourbill">
            <Yourbill/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
