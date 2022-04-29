import React from "react";
import DescriptionWithLink from "../../shared/description_with_link";

const Planet = (props) => {

    return (
        <div onClick={props.clickOnPlanet}>
            <h4>{props.name} </h4>
            <DescriptionWithLink description={props.description} link={props.link}/>
        </div>
    )
}

export default Planet;
