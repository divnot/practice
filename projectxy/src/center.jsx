import React from "react";
import Header from "./header";
import Footer from "./footer";



function Center1(){
    return(
        <>

        <Header/>
        <Outlet/>
        <Footer/>
        
        
        
        </>
    )
}

export default Center1;