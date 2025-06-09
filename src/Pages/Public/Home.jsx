import Card from "./Card";
import Footer from "./Footer";
import Navbar from "../../Routes/Navbar";

function Home(){

    return (
        <>
       <div>
       
        <Navbar/>
        </div>
        <div></div>
        <div className="card">
        <Card/>
        <Card/>
        <Card/>
        </div>
        
        <div>
        <Footer/>
        </div>     
        </>
    )
}

export default Home;