import './App.css';
import Header from './container/Header'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ProductListing from './container/ProductListing'
import ProductDetails from './container/ProductDetails'

function App() {
  return (
   <>
  <Router>
<Header/>
<Switch>
  <Route path='/' exact component={ProductListing} />
  <Route path='/product/:productID' component={ProductDetails} />
  <Route>404 not found!</Route>
</Switch>

</Router>
   </>
  );
}

export default App;
