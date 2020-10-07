import React from 'react';

export default function Divider(text) {

    return (
        <div style={{ display: "flex", alignItems: "center", paddingLeft: "30px", paddingRight: "30px", paddingTop: "30px" }}>
            <div style={{ borderBottom: "1px solid #FFFFFF80", width: "50%" }} />
            <span style={{ padding: "0 10px 0 10px", color: "white", whiteSpace: "pre" }}>
                {text}
            </span>
            <div style={{ borderBottom: "1px solid #FFFFFF80", width: "50%" }} />
        </div>
    );
};