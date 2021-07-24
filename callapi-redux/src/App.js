import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import Menu from './components/Menu';
import routes from './routes';


function App() {
  const showContentMenus = (routes) => {
    let result = ''
    if(routes.length > 0) {
      result = routes.map((route,index) => {
        return <Route path={route.path}
        exact={route.exact} key={index}
        component={route.component}
         />
      })
    }

    return result
  }

  return (
    <Router>
      <Menu />
      <div className="container">
        <div className="row">
          
          <Switch>
            {showContentMenus(routes)}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;