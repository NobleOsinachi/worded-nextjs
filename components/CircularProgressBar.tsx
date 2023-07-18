'use client';

import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CircularProgressBar() {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (percentage < 100)
            {
                setPercentage(percentage + 1);
            }
        }, 50);
    }, [percentage]);

    return (
        <div style={{ textAlign: "center" }}>
            <h4>Circular progress bar in React </h4>
            <div style={{ width: 150, marginLeft: 550 }}>
                <CircularProgressbar value={percentage} text={`${percentage}%`} />
            </div>
        </div>
    );
}
export default CircularProgressBar;
