import React from 'react';

const RepoItem = (props)=>{
	return(
		[
			<li key={props.unique_id} className="border-t-b">
				<div>
					<h2 key={props.unique_id}><a href={props.html_url}>{props.name}</a></h2>
					<p>{props.description}</p>
				</div>
				<div className="m-10">
					<span className="font-small">{props.language}</span>
					<span className="font-small">stars: {props.stars ? props.stars : '0'}</span>
					<span className="font-small">forks: {props.forks ? props.forks : '0'}</span>
					
				</div>
			</li>
		]

		)
}

export default RepoItem;