function List({items, category}) {    

    return (
        <>
        <div>
            <h2 className="list-category">{category}</h2>
            <ol className="list-items">
                {items.map(item => (
                    <li>{item.name} : <strong>{item.qty}</strong></li>
                ))}
            </ol>
        </div>
         
        </>
    )

}

export default List;