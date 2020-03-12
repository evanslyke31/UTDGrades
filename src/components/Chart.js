import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class Chart extends Component {
	constructor(props) {
		super(props);
		const ordered = {};
		Object.keys(props.grades).sort().forEach(function (key) {
			ordered[key] = props.grades[key];
		});
		var gradeAmt = [];
		Object.keys(ordered).map(function (key) { gradeAmt.push(ordered[key]) })
		this.state = {
			chartData: {
				labels: Object.keys(ordered),
				datasets: [
					{
						label: '',
						data: gradeAmt,
						backgroundColor: [
							'rgba(0,255,0.6)',
							'rgba(0,255,85,.6)',
							'rgba(0,255,170,.6)',
							'rgba(0,255,255,.6)',
							'rgba(0,170,255,.6)',
							'rgba(0,85,255,.6)',
							'rgba(0,0,255,.6)',
							'rgba(85,0,255,.6)',
							'rgba(170,0,255,.6)',
							'rgba(255,0,255,.6)',
							'rgba(255,0,170,.6)',
							'rgba(255,0,85,.6)',
							'rgba(255,0,0,.6)',
							'rgba(255,255,0,.6)',
						]
					}
				]
			}
		}
	}

	render() {
		return (
			<div className="chart">
				<Bar style={barStyle}
					data={this.state.chartData}
					options={{
						title: {
							display: false
						},
						legend: {
							display: false
						},
						maintainAspectRatio: true
					}}
				/>
			</div>
		)
	}
}

const barStyle = {
	bottom: '4px',
}

export default Chart
