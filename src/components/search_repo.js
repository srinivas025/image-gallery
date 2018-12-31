import React, {Component} from 'react';
import { connect} from 'react-redux';
import {searchRepo} from '../actions'

class SearchRepo extends Component {

	constructor(props){
		super(props);


		this.handleChange = this.handleChange.bind(this);
	}

	
	componentDidMount(){

	}
	handleChange = (e)=>{
		e.preventDefault();

		this.props.searchRepo(e.target.value);
		
	}

	render(){
		const {profile} = this.props;
		return(
			<div>
				<div className=''>
					<div className="col-8">
						<input className="full-width"
							placeholder="Search Repos..."
							value={this.props.searchTerm}
							onChange={this.handleChange}
						/>
					</div>
				</div>
			</div>
			)
	}
}
function mapStateToProps(state){
	return {
		searchTerm : state.search.searchText
	}
} 

export default connect(mapStateToProps,{searchRepo})(SearchRepo);