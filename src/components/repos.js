import React, {Component} from 'react';
import { connect} from 'react-redux';
import {fetchRepos} from '../actions';
import RepoItem from './repo_item.js';


class Repos extends Component {

	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.fetchRepos();
	}

	render(){

		const {filteredItems, repos, categories} = this.props;
		console.log(categories);
		
		return(
			<div className="">
			
				<div className='col-8 '>
				{ repos.isFetching == true ? <h2> Fetching Repos </h2> : '' }
					<ul>
					{repos.didReceive && filteredItems.length > 0 ? filteredItems.map((item,index)=><RepoItem 
						key={item.id} 
						unique_id={item.id} 
						name={item.name}
						html_url={item.html_url}
						description={item.description}
						language={item.language}
						stars={item.stargazers_count}
						forks={item.forks}
						license={item.license}
						/>
						)
					 : <h2>Repository Not Found</h2>}
					</ul>
				</div>
				
			</div>
			)
	}
}


function mapStateToProps(state) {
    const repos = state.repos;
    const searchText = state.search.searchText;
    return {
        filteredItems: repos.items.filter((item) => item.name.toLowerCase().startsWith(searchText)),
        repos : repos
    };
}
export default connect(mapStateToProps, { fetchRepos })(Repos);