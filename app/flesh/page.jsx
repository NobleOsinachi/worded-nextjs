'use client';
import React, { useState } from 'react';
// import './flesh.module.css';
import styles from './flesh.module.css';

const CircularProgressBar = ({ sqSize = 200, strokeWidth = 10, percentage = 25 }) => {
    const radius = (sqSize - strokeWidth) / 2;
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray * percentage) / 100;

    return (
        // <svg width={sqSize} height={sqSize} viewBox={viewBox}>
        //     <circle
        //         className="circle-background"
        //         cx={sqSize / 2}
        //         cy={sqSize / 2}
        //         r={radius}
        //         strokeWidth={`${strokeWidth}px`}
        //     />
        //     <circle
        //         className="circle-progress"
        //         cx={sqSize / 2}
        //         cy={sqSize / 2}
        //         r={radius}
        //         strokeWidth={`${strokeWidth}px`}
        //         transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        //         style={{
        //             strokeDasharray: dashArray,
        //             strokeDashoffset: dashOffset,
        //         }}
        //     />
        //     <text className="circle-text" x="50%" y="50%" dy=".3em" textAnchor="middle">
        //         {`${percentage}%`}
        //     </text>
        // </svg>




        <div >
            <div class={styles.circle_box}>
                <div>
                    <svg>
                        <circle cx="100" cy="100" r="95" />
                        <circle cx="100" cy="100" r="95" />
                    </svg>
                    <span>90%</span>
                </div>
                <strong>c++ developer</strong>
            </div>
            <div class="circle_box">
                <div>
                    <svg>
                        <circle cx="100" cy="100" r="95" />
                        <circle cx="100" cy="100" r="95" />
                    </svg>
                    <span>75%</span>
                </div>
                <strong>python developer</strong>
            </div>
            <div class="circle_box">
                <div>
                    <svg>
                        <circle cx="100" cy="100" r="95" />
                        <circle cx="100" cy="100" r="95" />
                    </svg>
                    <span>40%</span>
                </div>
                <strong>php developer</strong>
            </div>
        </div >
    );
};

const Flesh = () => {
    const [percentage, setPercentage] = useState(25);

    const handleChangeEvent = (event) => {
        setPercentage(event.target.value);
    };

    return (
        <div>
            <CircularProgressBar strokeWidth={10} sqSize={200} percentage={percentage} />
            <div>
                <input
                    id="progressInput"
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={percentage}
                    onChange={handleChangeEvent}
                />
            </div>
        </div>
    );
};

export default Flesh;
