/* eslint-disable react/prop-types */
export default function Area({ heading, children }) {
    const childrenWithKey = children.map((child) => (
        <div className="cv-area-item" key={Math.random()}>
            {child}
        </div>
    ));

    return (
        <div className="cv-area">
            <div className="heading">{heading}</div>
            {childrenWithKey}
        </div>
    );
}
