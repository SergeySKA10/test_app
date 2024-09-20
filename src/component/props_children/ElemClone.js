import React from "react";
// использование props.children, метода map и cloneElement для назначения классов
const ElemClone = (props) => {
    return (
        <div className="m-5">
            {
                React.Children.map(props.children, child => {
                    return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounder text-center'})
                })
            }
        </div>
    )
}

export default ElemClone;