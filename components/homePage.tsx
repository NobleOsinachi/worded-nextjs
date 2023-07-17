import BlogFooter from "./blogFooter";
import CallToAction from "./callToAction";
import Carousel from "./carousel";
import Footer from "./footer";
import Navbar from "./navbar";
import Statistics from "./statistics";

export default function HomePage() {
    return (

        <div className="HomePage">

            <h1>HomePage</h1>

            <Navbar />

            {/* <Carousel /> */}

            <Statistics />

            <CallToAction />

            <BlogFooter />

            <Footer />

        </div>

    );
}



// import * as React from 'react'; import { Component } from 'react'; interface HomePageProps { } interface HomePageState { } class HomePage extends React.Component<HomePageProps, HomePageState> { state = { name: "" }; render() { return ( <h1>HomePage</h1> ); } } export default HomePage;
