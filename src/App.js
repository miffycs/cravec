import React, { Suspense, useLayoutEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

// Preloader
// const Preloader = React.lazy(() => import("./components/layouts/Preloader"));

// Pages
const Home = React.lazy(() => import("./components/pages/Home"));
const Hometwo = React.lazy(() => import("./components/pages/Hometwo"));
const Homethree = React.lazy(() => import("./components/pages/Homethree"));
const Homefour = React.lazy(() => import("./components/pages/Homefour"));
const Bloggrid = React.lazy(() => import("./components/pages/Bloggrid"));
const Bloglist = React.lazy(() => import("./components/pages/Bloglist"));
const Blogmasonry = React.lazy(() => import("./components/pages/Blogmasonry"));
const Blogfull = React.lazy(() => import("./components/pages/Blogfull"));
const Blogsingle = React.lazy(() => import("./components/pages/Blogsingle"));
const About = React.lazy(() => import("./components/pages/About"));
const Login = React.lazy(() => import("./components/pages/Login"));
const Register = React.lazy(() => import("./components/pages/Register"));
const Checkout = React.lazy(() => import("./components/pages/Checkout"));
const Cart = React.lazy(() => import("./components/pages/Cart"));
const Legal = React.lazy(() => import("./components/pages/Legal"));
const Menuone = React.lazy(() => import("./components/pages/Menuone"));
const Menutwo = React.lazy(() => import("./components/pages/Menutwo"));
const Menuitemone = React.lazy(() => import("./components/pages/Menuitemone"));
const Menuitemtwo = React.lazy(() => import("./components/pages/Menuitemtwo"));
const Locations = React.lazy(() => import("./components/pages/Locations"));
const Contact = React.lazy(() => import("./components/pages/Contact"));
const Error = React.lazy(() => import("./components/pages/Error"));

// Pages
// import Home from './components/pages/Home';
// import Hometwo from './components/pages/Hometwo';
// import Homethree from './components/pages/Homethree';
// import Homefour from './components/pages/Homefour';
// import Bloggrid from './components/pages/Bloggrid';
// import Bloglist from './components/pages/Bloglist';
// import Blogmasonry from './components/pages/Blogmasonry';
// import Blogfull from './components/pages/Blogfull';
// import Blogsingle from './components/pages/Blogsingle';
// import About from './components/pages/About';
// import Login from './components/pages/Login';
// import Register from './components/pages/Register';
// import Checkout from './components/pages/Checkout';
// import Cart from './components/pages/Cart';
// import Legal from './components/pages/Legal';
// import Menuone from './components/pages/Menuone';
// import Menutwo from './components/pages/Menutwo';
// import Menuitemone from './components/pages/Menuitemone';
// import Menuitemtwo from './components/pages/Menuitemtwo';
// import Locations from './components/pages/Locations';
// import Contact from './components/pages/Contact';
// import Error from './components/pages/Error';

const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children || null
})

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Page is loading... Be patient!!!</div>}>
        <ScrollToTop>
          {/* <Preloader /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home-v2" component={Hometwo} />
            <Route path="/home-v3" component={Homethree} />
            <Route path="/home-v4" component={Homefour} />
            <Route path="/blog-grid" exact component={Bloggrid} />
            <Route path="/blog/tag/:tagId" exact component={props => (<Bloggrid {...props} key={window.location.pathname} />)} />
            <Route path="/blog-list" component={Bloglist} />
            <Route path="/blog-masonry" component={Blogmasonry} />
            <Route path="/blog-full-width" component={Blogfull} />
            <Route path="/blog-single/:id" exact component={props => (<Blogsingle {...props} key={window.location.pathname} />)} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/cart" component={Cart} />
            <Route path="/legal" component={Legal} />
            <Route path="/menu-v1" component={Menuone} />
            <Route path="/menu-v2" component={Menutwo} />
            <Route path="/menu-item-v1/:id" exact component={props => (<Menuitemone {...props} key={window.location.pathname} />)} />
            <Route path="/menu-item-v2/:id" exact component={props => (<Menuitemtwo {...props} key={window.location.pathname} />)} />
            <Route path="/locations" component={Locations} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
        </ScrollToTop>
      </Suspense>
    </Router>
  );
}

export default App;
