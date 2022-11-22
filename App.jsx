
// import './App.css';
// import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
// import Navbar from './components/Movieslist';
// import Addarticles from './components/Home';
// import Home from './components/Notfound';
// import Searchpage from './components/Addmovie';
// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar/>

//         <Switch>
//           <Route exact path="/">
//             <Home/>
//           </Route>

//           <Route path="/add">
//             <Addarticles/>
//           </Route>

//           <Route path="/search:searchVal">
//             <Searchpage/>
//           </Route>

//         </Switch>
      
//       </div>
//     </Router>
//   );
// }

// export default App;



// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import {BrowserRouter as Router , Route , Switch} from 'react-router-dom' 
// import Moviedetails from './components/Moviedetails';
// import Addmovie from './components/Added';
// import Searchpage from './components/Searchpage';
// import Wishlist from './components/Wishlist';
// import Update from './components/Update';
// import Notfound from './components/Notfound';

// function App() {

//   return (
//     <Router>
//       <div>  
      
//       <Navbar />
      
//       <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
          
//           <Route path="/moviedetails:id">
//             <Moviedetails />
//           </Route>
            
//           <Route path="/create">
//             <Addmovie />
//           </Route>

//           <Route path="/search:searchVal">
//             <Searchpage/>
//           </Route>

//           <Route path="/wish">
//             <Wishlist/>
//           </Route>

//           <Route path="/update:id">
//             <Update/>
//           </Route>

//           <Route path="*">
//             <Notfound/>
//           </Route>


//       </Switch>
      
      
//     </div>
//     </Router>
    
//   );
// }

// export default App;

// import React from 'react';
// import {useState} from 'react';
// import Header from './components/Header';
// import Form from './components/Form';
// import Addlist from './components/Addlist';
// import './App.css';

// function App() {
//   const [input,setInput]=useState("");
//   const [add,setAdd]=useState([]);
//   return (
//     <div className='container'>
//     <div className='app-wrapper'>
//       <div>
//     <Header />
//     </div>
//     <div>
//       <Form 
//       input={input}
//       setInput={setInput}
//       add={add}
//       setAdd={setAdd}/>
//     </div>
//     <div>
//       <Addlist add={add} setAdd={setAdd} />
//     </div>
//     </div>
//     </div>
//   )
// }

// export default App


import './App.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Addarticles from './components/Addarticles';
import Home from './components/Home';
import Searchpage from './components/Searchpage';
function App() {
  return (
    <Router>
      <div className="container">
        <div className='app-wrapper'>
          <div>
        <Navbar/>
        </div>
        </div>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          
        
          <Route path="/add">
            <Addarticles/>
          </Route>
          
          <Route path="/search:searchVal">
            <Searchpage/>
          </Route>

        </Switch>
      
      </div>
    </Router>
  );
}

export default App;