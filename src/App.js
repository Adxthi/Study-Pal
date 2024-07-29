import "./App.css";
// import Home from "../src/pages/Home.js";
import NavigationBar from "./components/NavigationBar.js";
import Header from "./components/Header.js";
//import PropsDemo from '../src/components/PropsDemo.js';
//import Counter from '../src/components/Counter.js'
//import ThemeProvider from "./Themes/ThemeProvider.js";
//import ThemeConsumer from "./Themes/ThemeConsumer.js";
//import Register from '../src/components/Register.js'
//import CRender from './components/ConditionalRendering';
//import Todo from "./components/Todo";
// import TableRendering from "./components/TableRendering"; 
// import AxiosTest from "./components/AxiosTest.js";
// import CounterApp from "./redux/CounterApp";

function App() {
  return (
    <div>
      {/* <Home /> */}
      {/*<Counter/>*/}
      {/*} <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider> */}
      {/* <Register/>*/}
      {/*<CRender />*/}
      {/*<Todo/>*/} 
      {/* <TableRendering/> */}
      <Header/>
      <NavigationBar/>
      {/* <CounterApp/> */}
      
    </div>
  );
}

export default App;
