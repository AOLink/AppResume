import React from 'react'
import { Button } from "@material-ui/core";

import './Button.css'
// const CustomButton = ({text, icon}) => {
//     return ( 
//        <Button onClick={() => { }} className="custom_btn" endIcon={icon ? (<div className="btn_icon_container" >{icon}</div>) : null}>
//             <span className="btn_textw">{text}</span>
//        </Button>
//     )
// }

 const DownloadButton = ({text, icon}) => {
     const endIcon = icon ? (<div className="btn_icon_container" >{icon}</div>) : null;
     return ( 
        <Button href="" className="custom_btn" endIcon={endIcon}>
            <span className="btn_text">{text}</span>
        </Button>
     )
 }

export default DownloadButton
