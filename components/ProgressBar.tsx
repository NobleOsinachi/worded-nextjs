import React, { ReactNode } from "react";
import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import {
    CircularProgressbar
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 4;
const value = 5;

interface ProgressBarProps {
    label: string,
    children?: any,
    description: string,
}

const ProgressBar = (props: ProgressBarProps) => {
    return (
        <div style={{ padding: "40px 40px 40px 40px" }}>

            <div style={{ marginBottom: 80 }}>
                <hr style={{ border: "2px solid #ddd" }} />
                <div style={{ marginTop: 30, display: "flex" }}>
                    <div style={{ width: "30%", paddingRight: 30 }}>{props?.children}</div>
                    <div style={{ width: "70%" }}>
                        <h3 className="h5">{props.label}</h3>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>

            <CircularProgressbar value={0} maxValue={10} text={`${value * 100}%`} />;

            <CircularProgressbar value={percentage} text={`${percentage}%`}
                strokeWidth={5}

            />
        </div>

    );
};

export default ProgressBar;


interface ExampleProps { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; label: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }

function Example(props: ExampleProps) {
    return (
        <div style={{ marginBottom: 80 }}>
            <hr style={{ border: "2px solid #ddd" }} />
            <div style={{ marginTop: 30, display: "flex" }}>
                <div style={{ width: "30%", paddingRight: 30 }}>{props.children}</div>
                <div style={{ width: "70%" }}>
                    <h3 className="h5">{props.label}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>

        
    );
}

