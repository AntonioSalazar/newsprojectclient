import React, {Component} from "react";
import { TwitterTimelineEmbed } from 'react-twitter-embed';


class TweetsSports extends Component {


  render(){
    return(
      <div>
          <TwitterTimelineEmbed 
            sourceType="profile"
            screenName="PGJDF_CDMX"
            options={{height: 400}}
          />
        <TwitterTimelineEmbed 
            sourceType="profile"
            screenName="MetroCDMX"
            options={{height: 400}}
          />
         <TwitterTimelineEmbed
            sourceType="profile"
            screenName="Aire_CDMX"
            options={{height: 800}}
          />
      </div>  
    )
  }
}

export default TweetsSports;