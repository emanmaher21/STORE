import ProductCard from './ProductCard';
function ProductsSection() {
  return (
    <section className="products-section">
      <h2>Our Products</h2>
      <div className="PRODUCTS">
        <ProductCard 
          title="Laptop" 
          category="Computers" 
          description="High performance laptop" 
          price="$900" 
        />
        <ProductCard 
          title="HeadPhone" 
          category="Electronics" 
          description="High performance HeadPhone" 
          price="$120" 
        />
        <ProductCard 
          title="SmartWatch" 
          category="Accessories" 
          description="High performance SmartWatch" 
          price="$200" 
        />
      </div>
    </section>
  )
}
export default ProductsSection