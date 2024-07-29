import { useEffect, useState } from "react";
import axios from "axios";

export default function AxiosTest() {
  const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";


  const [post,setPost]=useState({
    title:"in the heart of the sea",
    // body:"its a good movie" ,
  });
//get
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios
//         .get(apiUrl)
//         .then((response) => {
//           console.log(response.data);
//           setPost(response.data);
//         })
//         .catch((error ) =>console.error(error)).finally(()=>console.log("data rereived successfully"));
//     };
//     fetchData();
//   });
//post
// useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios
//         .post(apiUrl,post)
//         .then((response) => {
//           console.log(response.data);
//          // setPost(response.data);
//          alert("data posted successfully")
//         })
//         .catch((error ) =>console.error(error))
//         .finally(()=>console.log("data rereived successfully"));
//     };
//     fetchData();
//   },[post]);

//update
// useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios
//         .update(apiUrl)
//         .then((response) => {
//           console.log(response.data);
          
//         })
//         .catch((error ) =>console.error(error)).finally(()=>console.log("data updated successfully"));
//     };
//     fetchData();
//   });

//delete
useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .delete(apiUrl)
        .then((response) => {
          console.log(response.data);
          
        })
        .catch((error ) =>console.error(error)).finally(()=>console.log("data deleted successfully"));
    };
    fetchData();
  });

  return (
    <div>
        {/* <h1>Axios post</h1> */}
      {/* <h2>Axios</h2>
      <ul>
        {post.map((item) =>(
            <div key={item.id}>
                <div className="card w-25 p-3 m-3">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            </div>
            </div>
        )
            
        )}
      </ul> */}
    </div>
  );
}
