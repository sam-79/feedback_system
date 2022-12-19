import React from 'react';
import Spinner from 'react-bootstrap/Spinner';


function LoadingScreen(props ) {
    return (
        <div
            style={{
                position: "fixed",
                display: `${props.animating ? "block" : "none"}`,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "#00000059",
                width: "100%",
                height: "100%",
                zIndex: 3
            }}
        >
            <div style={{ position: "absolute", top: "50%", left: "50%", translateX: "-50%", translateY: "-50%" }}
            >
                <Spinner animation="border" variant="primary" />
            </div>
        </div>
    )
}

export default LoadingScreen