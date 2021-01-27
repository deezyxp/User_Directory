import React, { Component } from "react";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import Wrapper from './components/Wrapper/index'




function App() {

  return (
    <>

      <Header />
      <Wrapper>
        <EmployeeTable />
      </Wrapper>
      <Footer />

    </>
  )
}


export default App;