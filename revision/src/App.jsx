import { useEffect, useState } from "react"
import Footer from "./components/Footer/Index"
import Navbar from "./components/Navbar/Index"
import Card from "./components/Card/Index";
import Form from "./components/Form/Index";
import { Route, Routes } from "react-router";
import About from "./components/About/Index";
import NotFound from "./components/NotFound/Index";


function App() {
  // let age =24;

  // const [age, setAge]=useState(24);
//   const [products, setProducts]=useState([
    
//     {title:"product1",price:100,desc:"jsdhfksf", 
//     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK-ppaVLmyFOyuEv746bCGO-0WzNxXMHqMpA&s"
//   },

// {title:"product2",price:2343,desc:"jsdhfksf", 
//     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK-ppaVLmyFOyuEv746bCGO-0WzNxXMHqMpA&s"
//   },
//   {title:"product3",price:433,desc:"fgfd", 
//     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK-ppaVLmyFOyuEv746bCGO-0WzNxXMHqMpA&s"
//   }

// ]);

// const [products, setProducts]= useState([]);
// const [age, setAge]=useState(18);

// let getProducts=async()=>{
// let data = await fetch('https://dummyjson.com/products');
// let response= await data.json()
// setProducts(response.products);
// console.log(response.products);

// }


// useEffect(
// ()=>{
// getProducts();
// },[]);

// useEffect(
// ()=>{
// getProducts();
// },[age]);


 return (
    <>
    <Navbar/>
    <main style={{minHeight: "80vh"}} className="container mt-5">
     {/* <h1>Age : {age}</h1>
     <button onClick={()=>{
     setAge(age +1)
      console.log(age);
     }}>Change Age</button> */}

{/* <h1>Products</h1>
<button onClick={()=>{
let product2={title:"product2",price:340};
setProducts([...products,product2]);
console.log(products);
}}>Add 2nd product</button> */}

{/* <div className="container">
  <div className="row">
{
  products.map((prod, index)=>{
return (<Card key={index} title={prod.title} price={prod.price} image={prod.thumbnail} desc={prod.desc}/>)

  })
}
  </div>
</div> */}

{/* <Form/> */}



 

    
   

<Routes>
  <Route path="/" element={<Form/>}/>
  <Route path="/about" element={<About/>}/>

  {/* Not found */}
  <Route path="/*" element={<NotFound/>}/>

</Routes>

 </main>


    <Footer/>
    </>
  )
}

export default App
