import { useState } from 'react';

/* eslint-disable react/prop-types */
export default function Area({ heading, children }) {
    const [areaChildren, setAreaChildren] = useState(children);

    function handleClick(childToDelete) {
        setAreaChildren(
            areaChildren.filter((areaChild) => {
                return areaChild !== childToDelete;
            })
        );
    }

    return (
        <div className="cv-area">
            <div className="heading">{heading}</div>
            {areaChildren.map((areaChild, index) => (
                // eslint-disable-next-line react/jsx-key
                <div className="cv-area-item" key={index}>
                    {areaChild}
                    <button
                        className="delete"
                        onClick={() => {
                            handleClick(areaChild);
                        }}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}
