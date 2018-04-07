import React from 'react';

import { Carousel } from 'antd';

class WorkInfo extends React.Component {
  render() {
    return (
    	<div className = 'explainWrap'>
    			<div className = 'topTitle'>
    				<p className = 'rightIco'>
    					<i class = {['iconfont' + ' ' + this.props.icon]}></i>
    				</p>
    				<span>{this.props.title}</span>
    			</div>
    	<Carousel className = "graduationWrap">
    	{
    		this.props.projectData.projectInfo.map(function(item) {
    			return (
    				<div>
    					{
    						item.wrokInfo.map(function(xitem) {
		      				return (
			      				<div>
											<span>{xitem.workName}</span>：
											{
												xitem.workdetail.map(function(xxitem, xxindex) {
													return (
														<span className = {xitem.workdetail.length > 1 ? 'special' : null}>{xitem.workdetail.length > 1 ? xxindex + 1 + '：' : null}{xxitem.itemInfo}</span>
													)
												})
											}
											
										</div>
		      				)
		      			})
    					}
    				</div>
    			)
    			
    		})
    	}
  		</Carousel>
  	</div>
		)
  }
   shouldComponentUpdate(nextProps, nextState) {
    return false;  
  }
}

export default WorkInfo;