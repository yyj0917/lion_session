import React, { useState } from "react";
import { NaverMap, Marker } from "react-naver-maps";

export const NaverMapAPI = (props) => {
    return (
        <NaverMap
            mapDivId={"maps-getting-started-uncontrolled"}
            style={{ width: "100%", height: "100%" }}
            center={{ lat: props.Latitude, lng: props.Longtitude }}
            defaultZoom={12}
            minZoom={12}
            enableWheelZoom={false}
            ncpClientId={process.env.mwfqp43ut7}
            submodules={["geocoder"]}
        >
            {props.zoom === 15 && (
                <Marker 
                    position={{ lat: props.Latitude, lng: props.Latitude }}
                    title={props.roadAddress}
                    clickable={true}
                />
            )}
        </NaverMap>
    );
};

export default NaverMapAPI;