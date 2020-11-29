import React from 'react';
import "./Widgets.css";

function Widgets() {
    return (
        <div className="widgets">
            <iframe
            // src="https://www.youtube.com/embed/Jlknj_wq8CQ"
            src="https://www.youtube.com/embed/DKCTMrNExAw"
            // src="https://www.cleverprogrammer.com/?fbclid=IwAR17lrMMVZMcznq6YHYNfg89gLtZ3rKDh0dnvjb7mQTfkUHic9IGVNTfxoI"
            width="340"
            height="50%"
            style={{border:"none", overflow:"hidden"}}
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media"
          
         
            >

            </iframe>
            
        </div>
    );
}

export default Widgets;
