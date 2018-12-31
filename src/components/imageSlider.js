import React, {Component} from 'react';
import { connect} from 'react-redux';
import {fetchRepos, fetchCategories} from '../actions';
import RepoItem from './repo_item.js';

const LeftArrow = (props) => {
  return (
    <div className="backArrow arrow" onClick={props.goToPrevSlide}>
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
    </div>
  );
}


const RightArrow = (props) => {
  return (
    <div className="nextArrow arrow" onClick={props.goToNextSlide}>
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
    </div>
  );
}

class ImageSlider extends Component {

	constructor(props){
		super(props);
		this.state = {
			currentIndex: [0,0,0,0,0,0],
			cat:0,
      		translateValue: [0,0,0,0,0,0],
      		singleCat :[0,0,0,0,0,0]
		}
		

	}

	componentDidMount(){
		this.props.fetchCategories();
	}

	goToPrevSlide = (cat) => {
    console.log('index is '+cat);
  	let currentIndex = this.state.currentIndex;
    let translateValue = this.state.translateValue;
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if(this.state.currentIndex[cat] === 0) {
    	return
    }
    
    currentIndex[cat] = currentIndex[cat]-1;
    translateValue[cat] = translateValue[cat] + (this.slideWidth()/5);
    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: currentIndex,
        translateValue: translateValue,
      cat:cat
    }),function(){
    	console.log(this.state.translateValue)
    });
  }

  goToNextSlide = (cat) => {
  	console.log('index is '+cat);
  	let currentIndex = this.state.currentIndex;
    let translateValue = this.state.translateValue;
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if(this.state.currentIndex[cat] === (this.props.categories.items[cat].models.length)/2) {
    	console.log("inside last");
    	currentIndex[cat] = 0;
    	translateValue[cat] = 0;
      return this.setState(prevState=>({
        currentIndex: currentIndex,
        translateValue: translateValue,
        cat:cat
      }))
    }
    
    currentIndex[cat] = currentIndex[cat]+1;
    translateValue[cat] = translateValue[cat] + -(this.slideWidth()/(this.props.categories.items[cat].models.length/2)+40);
    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: currentIndex,
        translateValue: translateValue,
      cat:cat
    }),function(){
    	console.log(this.state.translateValue)
    });
  }

  slideWidth = () => {
     return document.querySelector('#rig').clientWidth
  }

  setCatIndex = (i) =>{
  	let singleCat = this.state.singleCat;
  	singleCat.push(i);
  	this.setState({
  		singleCat : singleCat
  	})

  }

  translateStyle = (i) => {
			return{
			transform: `translate(${this.state.translateValue[i]}px)`,
			transition : `transform ease-out 0.45s`,
			animationFillMode: 'forwards'
			}
		}
	noTranslate = (i) => {
		return {
			transform: `translate(${this.state.translateValue[i]}px)`,
			transition : `transform ease-out 0.45s`,
			animationFillMode: 'forwards',
			animationPlayState: 'paused'
		}
	}

		renderCategories = () =>{
		const {filteredItems, repos, categories} = this.props;
			return categories.items.map((c,i) => {
				// this.setCatIndex(i);
				return (
					<div className="slider">
						<div id= "rig">
							<h2>Category : {c.name} </h2>
							<ul className="slider-wrapper" style={this.state.cat == i ? this.translateStyle(i) : this.noTranslate(i) }>
								{c.models.map((p,index) => {
									return(
									<li className="rig-cell slide">
										<a href="#">
								            <img className="rig-img" src={p.thumb} />
								            <span className="rig-overlay"></span>
								            <span className="rig-text">{p.name}</span>
								        </a>
									</li>
									)
								})}
								
							</ul>
							
						</div>
						<LeftArrow
				         goToPrevSlide={()=>this.goToPrevSlide(i)} cat = {i}
				        />

				        <RightArrow
				         goToNextSlide={()=>this.goToNextSlide(i)} cat = {i}
				        />
					</div>
				)
			})
		}

	render(){

		const {filteredItems, repos, categories} = this.props;
		console.log(categories);
		
		return(
			<div className="">
				{this.renderCategories()}
			</div>
			)
	}
}


function mapStateToProps(state) {
    const categories = state.categories;
    return {
        categories
    };
}
export default connect(mapStateToProps, {fetchCategories })(ImageSlider);