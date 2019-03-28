import React, {Component} from "react";
import { TwitterTimelineEmbed } from 'react-twitter-embed';


class TweetsScience extends Component {


  render(){
    return(
      <div>
          <TwitterTimelineEmbed 
            sourceType="profile"
            screenName="Conacyt_MX"
            options={{height: 800}}
          />
        <TwitterTimelineEmbed 
            sourceType="profile"
            screenName="UNAM_MX"
            options={{height: 800}}
          />
      </div>  
    )
  }
}

export default TweetsScience;