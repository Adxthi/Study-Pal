
//export default function NavigationBar() {
  /* return(
        <div className="nav-container">
            <nav className="nav">
                <a href="#home" className="nav-link">Home</a>
                <a href="#about" className="nav-link">About</a>
                <a href="contact" className="nav-link">Contact</a>
                <a href="login" className="nav-link">Login</a>
                <a href="register" className="nav-link">Register</a>
            </nav>
        </div>
    );*/

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg custom-navbar">
//         <div className="container d-flex justify-content-between">
//           <ul className="nav nav-tabs w-100 d-flex justify-content-between">
//             <li className="nav-item">
//               <a className="nav-link" href="#home">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#about">
//                 About
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#login">
//                 Login
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#contact">
//                 Contact
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#register">
//                 Register
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//       <section id="home">
//         <h2>Home Section</h2>
//         <p>Welcome to the home section.</p>
//       </section>
//       <section id="about">
//         <h2>About Section</h2>
//         <p>Learn more about us in this section.</p>
//         <p>
//           Welcome to Study Pal, your ultimate companion for all your learning
//           needs! At Study Pal, we are dedicated to providing students with
//           comprehensive study resources, engaging educational content, and
//           effective tools to enhance their learning experience. Our platform
//           offers a wide range of study materials, interactive quizzes, and
//           expert guidance to help you achieve academic success. Whether you're
//           preparing for exams, seeking homework help, or looking to deepen your
//           understanding of various subjects, Study Pal is here to support you
//           every step of the way. Join our community of learners and take your
//           education to the next level with Study Pal!
//         </p>
//         <a href="#home">
//           <button>Home</button>
//         </a>
//       </section>
//       <section id="login">
//         <h2>login Section</h2>
//         <p>login here.</p>
//         <a href="#home">
//           <button>Home</button>
//         </a>
//       </section>
//       <section id="contact">
//         <h2>Contact Section</h2>
//         <p>Get in touch with us.</p>
//         <a href="#home">
//           <button>Home</button>
//         </a>
//       </section>
//       <section id="register">
//         <h2>Register Section</h2>
//         <p>register here.</p>
//         <a href="#home">
//           <button>Home</button>
//         </a>
//       </section>
//     </div>
//   );
// }
//routes--just like switch, defines how many routes are needed
//link---works like anchor tag -- displays text that need to be represented, we use {to--- changes the url, its a prop} instead of href
//route--- which component should be presented when a particular link is clicked is managed by route. {exact-match the link to component},{path-same as to give same value},{element-represents the lement to be visible } are its props







import { Link,Route,Routes} from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Reg from "../pages/Reg";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import "../Assets/NavCss.css";

export default function NavigationBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container">
          <ul className="navbar-nav w-100 justify-content-around">
            <li className="nav-item active">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item active">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item active">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item active">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item active">
              <Link to="/register" className="nav-link">Register</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Reg />} />
      </Routes>
    </div>
  );
}

