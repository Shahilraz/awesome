import React from "react";
import reactDom from "react-dom";
import "./index.css";
import Card from "./Card";
import Sdata from "./Sdata";

function ncard(val,index) {
    console.log(val);
    return (
        <Card
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link}
        />
    );
}
reactDom.render(
    <>
        <h1 className="heading_style">Netflix Movie collection</h1>
        {Sdata.map(ncard)}

    </>
    ,
    document.getElementById('root'));

