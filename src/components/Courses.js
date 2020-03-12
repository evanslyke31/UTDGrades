import React, { Component } from 'react';
import CourseItem from './CourseItem';
import PropTypes from 'prop-types';
import uuid from 'uuid';

class Courses extends Component {
	render() {
		if (this.props.courseResults) {
			return this.props.courseResults.map((course) => (
				<CourseItem key={course.id}
					course={course}
					prof={course.prof}
					subj={course.subj}
					num={course.num}
					sect={course.sect}
					grades={course.grades}
					delCourse={this.props.delCourse} />
			));
		} else {
			return [];
		}
	}
}

Courses.propTypes = {
	courseList: PropTypes.array.isRequired
}

export default Courses;
