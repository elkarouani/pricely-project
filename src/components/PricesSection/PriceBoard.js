function PriceBoard(props) {
    let board_id = `${props.name.toUpperCase()}Price`;
    return (
        <div 
         id={board_id} 
         class={ props.is_active ? "active-board-container" : "non-active-board-container" }>
            <p class={ props.is_active ? "active-board-title" : "non-active-board-title" }>{props.name}</p>
            <p class={ props.is_active ? "active-board-subtitle" : "non-active-board-subtitle" }>{props.price}</p>
        </div>
    );
}

export default PriceBoard;