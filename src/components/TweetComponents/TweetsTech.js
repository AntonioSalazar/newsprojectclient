import React, {Component} from "react";
import { TwitterTimelineEmbed } from 'react-twitter-embed';


class TweetsTech extends Component {


  render(){
    return(
      <div>
          <TwitterTimelineEmbed 
            sourceType="profile"
            screenName="TechCrunch"
            options={{height: 400}}
          />
        <TwitterTimelineEmbed 
            sourceType="profile"
            screenName="InfobaeTecno"
            options={{height: 400}}
          />
         <TwitterTimelineEmbed
            sourceType="profile"
            screenName="elpais_tec"
            options={{height: 800}}
          />
      </div>  
    )
  }
}

export default TweetsTech;