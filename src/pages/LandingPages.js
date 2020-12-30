import React, { Component } from 'react'
import { connect } from "react-redux";

import Header from "parts/Header";
import Hero from "parts/Hero"
import MostPicked from 'parts/MostPicked'
import Categories from 'parts/Categories'
import Testimony from 'parts/Testimony'
import Footer from 'parts/Footer'

import { fetchPage }from 'store/action/page'

class LandingPages extends  Component {
 constructor(props) {
   super(props);
   this.refMostPicked = React.createRef();
 }

 componentDidMount() {
  window.title = "Staycation | Home";
  window.scrollTo(0, 0);

  if(!this.props.page.LandingPages)
    this.props.fetchPage(`/landing-page`, "LandingPages");
}

 render() {
  const { page } = this.props


  if(!page.hasOwnProperty("LandingPages")) return null;

   return (
     <>
      <Header {...this.props}></Header>
      <Hero  refMostPicked={this.refMostPicked} data={page.LandingPages.hero}/>
      <MostPicked refMostPicked={this.refMostPicked} data={page.LandingPages.mostPicked} />
      <Categories data={page.LandingPages.category}></Categories>
      <Testimony data={page.LandingPages.testimonial}></Testimony>
      <Footer />
     </>
   );
 }
}

const mapStateToProps = (state) => ({
  page: state.page,
})

export default connect(mapStateToProps, { fetchPage })(LandingPages)