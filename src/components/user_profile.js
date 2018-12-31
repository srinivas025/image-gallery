import React, {Component} from 'react';
import { connect} from 'react-redux';
import {fetchProfile} from '../actions'

class Profile extends Component {

	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.fetchProfile();
	}

	render(){
		const {profile} = this.props;
		return(
			<div>
				<div className=''>
					<div className="col-4 text-center">

						<img className="img-responsive img-radius" src= {profile.items.avatar_url} />
						<h2 className="m-10">{profile.items.name}</h2>
						<p>{profile.items.login}</p>
						<p>{profile.items.bio}</p>
						<button className= "btn">Follow</button>
						<p>{profile.items.company}</p>
						<p>{profile.items.location}</p>
					</div>
				</div>
			</div>
			)
	}
}

function mapStateToProps(state){
  return{
    profile : state.profile
  }
}
export default connect(mapStateToProps, { fetchProfile })(Profile);