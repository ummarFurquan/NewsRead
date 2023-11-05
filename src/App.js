import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/about'; 
import Weather from './components/weather'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
export default class App extends Component {
  pageSize = 15;

    state = {
      progress: 0
    }
  

  setProgress = (progress) =>  {
    this.setState({ progress: progress })
    }
  
  render() {

    return (
      <>
        <div>
          <Router>
            <Navbar />



            <LoadingBar
             color="#FF0000"
             height={4}
            progress={this.state.progress} />
            <Routes>

              <Route path="/" element={<News setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country="in" category="General"/>}></Route>

              <Route path="/Business" element={<News setProgress={this.setProgress}  key="business" pageSize={this.pageSize} country="in" category="Business"/>}></Route>

              <Route path="/Entertainment" element={<News setProgress={this.setProgress}  key="entertainment"pageSize={this.pageSize}country="in"category="Entertainment"/>}></Route>

              <Route path="/General" element={<News setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country="in" category="General"/>}></Route>

              <Route path="/Health" element={<News setProgress={this.setProgress}  key="health" pageSize={this.pageSize} country="in" category="Health"/>}></Route>

              <Route path="/Science" element={<News setProgress={this.setProgress}  key="science" pageSize={this.pageSize} country="in" category="Science"/>}></Route>

              <Route path="/Sports" element={<News setProgress={this.setProgress}  key="sports" pageSize={this.pageSize} country="in" category="Sports"/>}></Route>

              <Route path="/Technology" element={<News setProgress={this.setProgress}  key="technology" pageSize={this.pageSize} country="in" category="Technology"/>}></Route>
              
              <Route path="/weather" element={<Weather setProgress={this.setProgress}/>}></Route>
              
              <Route path="/about" element={<About/>}></Route>



            </Routes>

          </Router>
           
        </div>

      
      </>
    );
  }
}

