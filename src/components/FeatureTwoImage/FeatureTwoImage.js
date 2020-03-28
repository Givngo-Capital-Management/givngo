import React from 'react'
import './FeatureTwoImage.scss'

export default function FeatureTwoImage({urls, position, srcset_param}) {
  return (
    <div className="section">
      <div className="div-part-1">
        <div className="div-wrap-1">
          <div className="text-box" style={position==="left" ? {paddingLeft: "100px", marginLeft: "auto"}:{paddingRight: "100px"}}>
            <h1 className="heading-1">The donation sensation</h1>
            <p className="paragraph-1">Ginvgo’s mission is to help nonprofits and charities raise donations. We have built a platform so people can quickly learn about a cause or charity and then donate and support. We have eliminated as many steps as possible in the donation process which generates the highest conversions possible.</p>
          </div>
          <div className="image-wrap">
            <img 
              src={urls[0]} 
              width="1280" 
              srcset={srcset_param}
              sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, 96vw" 
              alt="" 
              className="image-1">
            </img>
          </div>
        </div>
      </div>
      <div className="div-part-2" style={position==="left" ? {justifyContent: "flex-start"}:{justifyContent: "flex-end"}}>
        <div className="image" style={{backgroundImage: "url(" + urls[1] + ")"}}></div>
      </div>
    </div>
  );
}