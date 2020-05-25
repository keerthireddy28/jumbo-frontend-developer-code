import React, { useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import MovieDetailsScreen from "./screens/MovieDetailsScreen";

const initialState = {
  moviesList: [],
};

export const AppContext = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_MOVIES":
      return {
        moviesList: action.payload,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ appState: state, appDispatch: dispatch }}>
      <Router>
        <Switch>
          <Route path="/movieDetails/:id" component={MovieDetailsScreen} />
          <Route path="/" component={HomeScreen} />
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
