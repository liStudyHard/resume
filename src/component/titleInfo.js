import React from 'react';

import { Icon } from "antd";

class TitleInfo extends React.Component {
  render() {
      const prejectData = this.props.projectData;
      const Dec = prejectData.titleWrap.map(function(item) {
        if (item.dec) {
          return (
            <div className = "workTask">
              {item.dec}
              </div>
            )
          }
      });
      return (
        <div className = "explainWrap">
            <div className = "topTitle">
              <p className = "rightIco">
                <i className = {["iconfont" + " " + this.props.icon]}></i>
              </p>
              <span>{prejectData.title}</span>
            </div>
            {
              prejectData.titleWrap.map(function(item, index) {
                return (
                  <div className = "graduationWrap">
                    <div className = "graduation">
                      {
                        item.explain.map(function(xitem) {
                          return(
                            <div className = "specific">
                              <Icon type = {xitem.type} />
                              <span>{xitem.explainItem}</span>
                            </div>
                          )
                        })
                      }
                      </div>
                      {
                        index === 0 ? Dec[0] : Dec[1]
                      }
                    </div>
                )
              })
            }
        </div>
      )
  }
  shouldComponentUpdate(nextProps, nextState) {
    return false;  
  }
}

export default TitleInfo;