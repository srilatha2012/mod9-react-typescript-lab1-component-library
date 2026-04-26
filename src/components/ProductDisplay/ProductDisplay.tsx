import type { ProductDisplayProps } from "../../types";

const ProductDisplay: React.FC<ProductDisplayProps> = ({
    product,
    showDescription,
    showStockStatus,
    onAddToCart,
    children }) => {

    return (
        <div className="max-w-3xl mx-auto border rounded-md overflow-hidden text-center shadow">
            {product.imageUrl && (
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-52 object-cover"
                />
            )}
            <div className="p-6">
                <h2 className="text-xl font-bold mb-4">{product.name}</h2>
                <p className="text-blue-600 font-bold text-2xl mb-4">{product.price}
                </p>
                {showDescription && (
                    <p className="text-gray-700 mb-4">{product.description}</p>
                )}
                {showStockStatus && (
                    <p className={product.inStock ? "text-green-600 mb-6" : "text-red-600 mb-6"}>
                        {product.inStock ? "In Stock" : "Out of Stack"}
                    </p>
                )}
                {onAddToCart && (
                    <button
                        onClick={() => onAddToCart(product.id)}
                        className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
                    >
                        AddToCart
                    </button>
                )}
                {children && <div className="mt-4">{children} </div>}
            </div>
        </div>
    )
}

export default ProductDisplay
