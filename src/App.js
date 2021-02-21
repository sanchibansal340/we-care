import { 
  Navbar, 
  ScrollToTop, 
  Home, 
  About, 
  Info, 
  Treatment, 
  Diet, 
  Quiz,
} from "./components/index";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop >
          <Navbar />
          <Switch>
            <Route 
              exact
              path="/"
              component={Home}
            />
            <Route 
              exact
              path="/about"
              component={About}
            />

            {/* Features */}
            <Route 
              exact
              path="/info"
              component={Info}
            />
            <Route 
              exact
              path="/treatment"
              component={Treatment}
            />
            <Route 
              exact
              path="/diet"
              component={Diet}
            />
            <Route 
              exact
              path="/quiz"
              component={Quiz}
            />

          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
