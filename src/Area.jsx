import { Fragment, cloneElement, useContext, useState } from 'react';
import { IsSubmitContext } from './IsSubmitContext';

/* eslint-disable react/prop-types */
export default function Area({ heading, children, className, isDeleteButtonActive, isAddButtonActive }) {
    // Check if document is on submit status
    const isSubmit = useContext(IsSubmitContext)

    // If 'children' is not an array (only one), put it in an array
    const childrenIsNotArray = !Array.isArray(children);
    if (childrenIsNotArray) {
        children = [children];
    }
    
    // Initialize state
    let [areaChildren, setAreaChildren] = useState(
        // Add unique key to children component
        children.map((areaChild) => {
            let uniqueId = generateUniqueId();
            return <Fragment key={uniqueId}>{areaChild}</Fragment>;
        })
    );

    function handleDelete(keyOfAreaChildToDelete) {
        // Remove the area child with the matches the 'key of area child to delete'
        const newArray = areaChildren.filter((areaChild) => {
            return areaChild.key !== keyOfAreaChildToDelete;
        });

        // Update state
        setAreaChildren(newArray);
    }

    // Add new child component inside Area
    function handleAdd() {
        // generate a unique id
        const uniqueId = generateUniqueId();

        // Create a new child component of the same type by cloning the first 'children
        const newAreaChild = <Fragment key={uniqueId}>{cloneElement(children[0])}</Fragment>;

        // Append the newly created area child.
        setAreaChildren([...areaChildren, newAreaChild])
    }

    return (
        <div className="cv-area">
            <div className="heading">{heading}</div>
            <div className={"content " + className}>
                {/* {render children components with corresponding delete key} */}
                {areaChildren.map((areaChild) => {
                    return (
                        <div className="cv-area-item" key={areaChild.key}>
                            <div>
                                {areaChild}
                                {
                                    !isSubmit && isDeleteButtonActive &&
                                    <button
                                        className="delete"
                                        onClick={() => {
                                            handleDelete(areaChild.key);
                                        }}
                                    >
                                        {"Delete This " + heading}
                                    </button>
                                }
                            </div>
                        </div>
                    );
                })}
                {!isSubmit && isAddButtonActive && <button className="add" onClick={handleAdd}>Add</button>}
            </div>
        </div>
    );
}


function generateUniqueId() {
    return Math.floor(Math.random() * 10000000000);
}