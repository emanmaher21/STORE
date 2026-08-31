

function ProductCard(props) {
  return (
    <div className="ProductCard" >
    <div className="image-placeholder" style={{ backgroundColor: '#e2e8f0', height: '150px', borderRadius: '8px' }}></div>
    
    <p className="category">{props.category}</p>
    <h3 className="title">{props.title}</h3>
    <p className="description">{props.description}</p>

    <div className="card-footer">
        <span className="price">{props.price}</span>
        <button className="view-btn">View Details</button>
    </div>
    </div>
  )
}

export default ProductCard