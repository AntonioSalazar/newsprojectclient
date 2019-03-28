import React, {Component} from "react";
import { TwitterTimelineEmbed } from 'react-twitter-embed';


class TweetsSports extends Component {


  render(){
    return(
      <div>
          <TwitterTimelineEmbed 
            sourceType="profile"
            screenName="FOXDeportes"
            options={{height: 400}}
          />
        <TwitterTimelineEmbed 
            sourceType="profile"
            screenName="FOXDeportes"
            options={{height: 400}}
          />
         <TwitterTimelineEmbed
            sourceType="profile"
            screenName="joserra_espn"
            options={{height: 800}}
          />
      </div>  
    )
  }
}

export default TweetsSports;