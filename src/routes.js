import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./pages/Landing";
import GuessCountry from "./pages/GuessCountry";
import GuessCapital from "./pages/GuessCapital";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/guess-country" component={GuessCountry} />
        <Route path="/guess-capital" component={GuessCapital} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
