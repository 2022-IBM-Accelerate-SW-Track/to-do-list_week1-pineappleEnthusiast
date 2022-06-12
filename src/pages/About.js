import React, { Component } from 'react';

import "./About.css";
  
export default class About extends Component {
  render() {
    return (
      <div>

        {/* picture */}
        <div class="split left">
          <div className="centered">
          </div>
        </div>
        
        {/* details */}
        <div className="split right">
          <div className="centered">

            <div>
              <h2 class="title">
                <span class="title-word title-word-1">Hi! </span>
                <span class="title-word title-word-2">I'm </span>
                <span class="title-word title-word-3">Saloni </span>
                <span class="title-word title-word-4">Modi. </span>
              </h2>
            </div>

            <div className="brief_description">
              I'm a CS-Biochemistry double major in the Turing Scholars Honors program at UT Austin. I like Shrek. My name rhymes
              with 17 types of pasta (there's 350 officially recognized names total). 
            </div>
          </div>
        </div>
      </div>
    )
  }
}