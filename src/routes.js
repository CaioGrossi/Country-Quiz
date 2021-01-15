import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./pages/Landing";
import GuessCountry from "./pages/GuessCountry";
import GuessCapital from "./pages/GuessCapital";
import GuessPopulation from "./pages/GuessPopulation";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/guess-country" component={GuessCountry} />
        <Route path="/guess-capital" component={GuessCapital} />
        <Route path="/guess-population" component={GuessPopulation} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
