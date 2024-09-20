const DynamicComponent = (props) => {
    return (
        <div className={"m-3 p-3 border border-" + props.color}>
            {props.children}
        </div>
    )
}

export default DynamicComponent;

// использование props.children