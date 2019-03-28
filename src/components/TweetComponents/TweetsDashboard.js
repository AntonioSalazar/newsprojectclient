import React, {Component} from "react";
import { TwitterTimelineEmbed } from 'react-twitter-embed';


class Tweets extends Component {


  render(){
    return(
      <div >
          <TwitterTimelineEmbed 
            sourceType="profile"
            screenName="SinEmbargoMX"
            options={{height: 400}}
          />
        <TwitterTimelineEmbed 
            sourceType="profile"
            screenName="Pajaropolitico"
            options={{height: 400}}
          />
         <TwitterTimelineEmbed
            sourceType="profile"
            screenName="MXQnoticias"
            options={{height: 800}}
          />
      </div>  
    )
  }
}

export default Tweets;