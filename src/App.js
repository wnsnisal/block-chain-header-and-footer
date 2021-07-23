import './App.css';
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';
import Services from './Pages/Services';
import Contactus from './Pages/Contactus';
import Careers from './Pages/Careers';
import Blogs from './Pages/Blogs'
import Products from './Pages/Products';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import Theme from './helpers/Theme';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Aboutus" component={Aboutus} />
          <Route path="/Services" component={Services} />
          <Route path="/Blogs" component={Blogs} />
          <Route path="/Contactus" component={Contactus} />
          <Route path="/Careers" component={Careers} />
          <Route path="/Products" component={Products} />

        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>

  );
}

export default App;
