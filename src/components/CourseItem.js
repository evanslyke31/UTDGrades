import React, { Component } from 'react'
import Chart from './Chart';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

class CourseItem extends Component {

	render() {
		return (
			<div className="box">
				{this.props.prof}
				<Button variant="danger" onClick={this.props.delCourse.bind(this, this.props.course.id)} style=
					{btnStyle}>X</Button>
				<Chart grades={this.props.grades} />
			</div>
		)
	}
}

CourseItem.propTypes = {
	course: PropTypes.array.isRequired
}

const btnStyle = {
	padding: '2px 7px',
	float: 'right',
	fontSize: '13px',
}


export default CourseItem
