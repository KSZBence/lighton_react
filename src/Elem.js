import './Elem.css';
import React, { useState } from 'react';

export default function Elem(props){
    const [style, setStyle] = useState();

    function clickHandler(){
        console.log("nice click");
        if (style !== "z") {
            setStyle("z")
        }else{setStyle("p")}
    }

    props.szin(style)

    return(
        <div className={style+" lampa"} onClick={clickHandler}></div>
    )
    
}