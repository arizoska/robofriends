import React, {Component} from 'react';
import CardList from './cardList';
import {robots} from './robots';
import SearchBox from './searchBox'
import './app.css'

class App extends Component {
	constructor () {
		super();
		this.state = {
			robots: robots,
			searchField: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({searchField: event.target.value})
	}

	render () {
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		})

		return (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<CardList robots = {filteredRobots} />
			</div>
		) 
	}
}

export default App;