require('./resume.less');

import React from 'React';

import ReactDOM from 'react-dom';

import { Icon,  Progress} from 'antd';


import Simulation from '../JSON/simulation.js';

import WorkInfo from '../component/workInfo.js';

import TitleInfo from '../component/titleInfo.js';

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

const [iconIntention, iconEdu, iconWork, iconEva, iconProject] = ['icon-gongzuoyixiang', 'icon-12', 'icon-gongzuojingyan', 'icon-ziwopingjia', 'icon-xiangmujingyan'];

const iconList = ['icon-pashan', 'icon-huwaiyundong', 'icon-dianshiji', 'icon-qipai1'];

class Resume extends React.Component {
	constructor(props) {
		super(props);
	}
	
  leftContentRender = () => {
  	const leftWrap = Simulation.leftWrap[0];
		return (
      <div className = 'leftContent'>
  			<div className = 'topInfo'>
      			<img className = 'imgLogo' src = {require('../img/logo.jpg')}/>
      			<span>{leftWrap.bizName}</span>
      	</div>
      	<div className = 'sectionInfo'>
      			<div className = {['iconInfo' + ' ' + 'comonStyle']}>
      				<Icon type = 'user' />
      				<Icon type = 'environment-o' />
      				<Icon type = 'phone' />
      				<Icon type = 'mail' />
      			</div>
      			<div className = {['detailInfo'+ ' ' + 'comonStyle']}>
      			{
      				leftWrap.ownInfo.map(function(item) {
      					return (
      						<span>{item.ownDetail}</span>
      					)
      				})
      			}
      			</div>

      	</div>
      	{
      		leftWrap.detailInfo.map(function(item) {
      			return (
      				<div className = 'skillInfo'>
		      			<div className = 'skillTitle'>
		      				<div className = 'iconBorder'>
		      				<Icon type = 'tool' />
		      				</div>
		      				<span>{item.skillName}</span>
		      			</div>
		      			<div className = 'skillDetail' style = {{ width: 130 }}>
			      			{
			      				item.skillWrap.map(function(xitem) {
			      					return (
			      						<div>
										    	<div>{xitem.skillDetail}</div>
										    	<div className = 'skillText'>
											    	 <Progress percent = {xitem.masterSit} size = 'small' showInfo = {false} className = 'progress' />
											    	 <span>{xitem.mastetText}</span>
										    	 </div>
								    		</div>
			      					)
			      				})
			      			}
							  </div>
							</div>
      			)
      		})
      	}
    		{
    			leftWrap.hobbyWrap.map(function(item, index) {
    				return (
    					<div className = 'skillInfo'>
								<div className = 'skillTitle'>
			    				<div className = 'iconBorder'>
			    				<Icon type='heart' />
			    				</div>
			    				<span>{item.hobbyName}</span>
			    			</div>
			    			<div class = 'hobbyWrap'>
			    			{
			    				item.hobbyList.map(function(xitem, xindex) {
			    				return (
			    					<div className = 'hobby'>
				      				<div>
					      				<span className = {['iconfont' + ' ' + iconList[xindex]]}></span>
					      			</div>
					      			<span>{xitem.itemHobby}</span>
				      			</div>	
			    					)
			    				})
			    			}
			      		</div>
							</div>
    				)
    			})
    		}
			</div>
		)
  }

  render() {
    return (
      <div className = 'mod'>

      	{this.leftContentRender()}
      	<div className = 'rightContent'>
      		<TitleInfo projectData = {Simulation.titleInfo[0]}  icon = {iconIntention} />
      		<WorkInfo projectData={Simulation} title = {Simulation.projectInfo[0].title} icon = { iconProject}/>
      		<TitleInfo projectData = {Simulation.titleInfo[1]} icon = {iconEdu} />
      		<TitleInfo projectData = {Simulation.titleInfo[2]} icon = {iconWork} />
      		<TitleInfo projectData = {Simulation.titleInfo[3]} icon = {iconEva} />
      	</div>
      </div>
    );
  }

  componentWillMount() {
  	
  }
  componentDidMount() {
  	
  }
  shouldComponentUpdate(nextProps, nextState) {
  	return false;	
  }
}


export default Resume;
