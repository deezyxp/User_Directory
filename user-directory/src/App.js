import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import EmployeeTable from "./components/EmployeeTable";
import Wrapper from "./components/Wrapper";
import SearchFilter from "./components/SearchFilter"




function App() {

  return (
    <>

      <Header />
      <Wrapper>
        <SearchFilter />
        <EmployeeTable />
      </Wrapper>
      <Footer />

    </>
  )
}


export default App;