import CardComponent from "../components/CardComponent";

export default function Home() {
  const prog = [
    {
      name: "Java",
      description: "Learn about Java, its syntax, and object-oriented programming concepts."
    },
    {
      name: "Python",
      description: "Discover Python, its simplicity, and its wide range of applications."
    },
    {
      name: "JavaScript",
      description: "Master JavaScript, the language of the web, and build interactive web applications."
    },
    {
      name:"SQL",
      description:"Master SQL, the database language used by most modern databases."
    }
  ];
  return (
    <section id="home">
    <div className="container mt-3">
      <div>
        <h1 style={{ textAlign: "center", fontSize: "4rem",fontFamily:'sans-serif',fontWeight:'bold',fontStyle:'italic'}}>Welcome to the Programming Language Study Hub</h1>
        <p style={{ textAlign: "center" , fontSize:'2rem',fontStyle:'italic',fontFamily:'sans-serif'}}>Explore different programming languages and enhance your coding skills.</p>
        <a className="btn btn-dark btn-lg" href="#java" role="button" style={{fontFamily:'sans-serif',fontWeight:'bold',fontStyle:'italic'}}>Get Started</a>
      </div>

      {
        prog.map(data=><CardComponent name={data.name} description={data.description}/>)
      }
      </div>
  </section>
  );
}

