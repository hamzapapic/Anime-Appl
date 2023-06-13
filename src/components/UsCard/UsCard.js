import React from "react";
import "./UsCard.css";
// import GitHubIcon from '@mui/icons-material/GitHub';


export default function PersonCard(props){
    return(
            <div className="kartica">
                <div className="firstpart">
                    <img src={props.imageURL} alt={"profile_img"} className="img"/>
                    <h1>{props.fullName}</h1>
                    <h3>{props.location}</h3>
                </div>
                <div className="secondpart">
                    <p>{props.description}</p>
                    <a href={props.goToRep}  target="blank"  style={{color:"#FB2576"}}  className="github">
                        {/* <GitHubIcon fontSize="large"  */}
                        {/* // style={{ width: "100%", height: "100%" }}  */}
                        {/* /> */}
                    </a>
                </div>
            </div>    
    )
}