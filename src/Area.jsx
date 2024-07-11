import { Fragment, useState } from 'react';

/* eslint-disable react/prop-types */
export default function Area({ heading, children }) {
    // If 'children' is not an array (only one), put it in an array
    const childrenIsNotArray = !Array.isArray(children);
    if (childrenIsNotArray) {
        children = [children];
    }

    // Initialize state
    let [areaChildren, setAreaChildren] = useState(
        // Add unique key to children component
        children.map((areaChild) => {
            let uniqueId = Math.floor(Math.random() * 10000000000);
            return <Fragment key={uniqueId}>{areaChild}</Fragment>;
        })
    );

    function handleClick(keyOfAreaChildToDelete) {
        // Remove the area child with the matches the 'key of area child to delete'
        const newArray = areaChildren.filter((areaChild) => {
            return areaChild.key !== keyOfAreaChildToDelete;
        });

        // Update state
        setAreaChildren(newArray);
    }

    return (
        <div className="cv-area">
            <div className="heading">{heading}</div>

            {/* {render children components with corresponding delete key} */}
            {areaChildren.map((areaChild) => {
                return (
                    <div className="cv-area-item" key={areaChild.key}>
                        {areaChild}
                        <button
                            className="delete"
                            onClick={() => {
                                handleClick(areaChild.key);
                            }}
                        >
                            Delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
