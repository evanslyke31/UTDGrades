import React, { Component } from 'react';
import Courses from './components/Courses';
import CourseList from './data/courseList.json';
import uuid from 'uuid';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    courseResults: [],
    searchStr: '',
  }

  handleSearch = (e) => {

    this.setState({ searchStr: e.target.value });
    this.state.courseResults = [];

    var cmpStr = e.target.value;

    if (cmpStr.length > 1) {
      for (let i = 0; i < CourseList.length && this.state.courseResults.length < 50; i++) {

        var c = (CourseList[i].prof + CourseList[i].subj + CourseList[i].num + CourseList[i].sect)
          .replace(' ', '').replace(',', '');
        var isProperSub = true;
        for (let j = 0; j < cmpStr.split(' ').length; j++) {
          if (!c.toLowerCase()
            .includes(cmpStr.split(' ')[j].toLowerCase())) {
            isProperSub = false;
          }
        }
        if (isProperSub && this.state.courseResults.length < 50) {
          this.state.courseResults.push({
            id: uuid.v4(),
            str: c,
            prof: CourseList[i].prof,
            subj: CourseList[i].subj,
            num: CourseList[i].num,
            sect: CourseList[i].sect,
            grades: CourseList[i].grades
          });
        }

      }
    }

  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  delCourse = (id) => {
    this.setState({ courseResults: [...this.state.courseResults.filter(course => course.id !== id)] });
  }

  render() {
    return (
      <div className="App">

        <div className='searchheader'>
          <div className="title">
            UTD Grade Distributions
          </div>

          <form onSubmit={this.handleSubmit}>
            <input type="text" className='search'
              placeholder="e.g. CS 1337 e.g. Steven" value={this.state.searchStr} onChange={this.handleSearch} />
          </form>
        </div>

        <div className="wrapper">
          <div className="courses">
            <Courses courseResults={this.state.courseResults}
              delCourse={this.delCourse} />

          </div>
        </div>
      </div >
    );
  }
}

const courseStyle = {
  align: 'flex',
  justifyContent: 'center',
}

export default App;
