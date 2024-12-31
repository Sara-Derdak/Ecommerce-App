import React, { useState, useEffect } from "react";
import "./ProductsPage.css"; // Importer le fichier CSS

const ProductsPage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true); // État pour le chargement
  const [notification, setNotification] = useState(null); // État pour la notification

  // Récupération des produits depuis l'API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);

        // Récupérer les catégories uniques
        const uniqueCategories = [
          "All", // Inclure "All" par défaut dans la liste des catégories
          ...new Set(data.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
        setLoading(false); // Indique que le chargement est terminé
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des produits:", error);
        showNotification("Erreur lors de la récupération des produits.", "error");
        setLoading(false); // Arrêter le chargement même en cas d'erreur
      });
  }, []);

  // Fonction de filtrage des produits
  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);

    setFilteredProducts(
      category === "All"
        ? products
        : products.filter((product) => product.category === category)
    );
  };

  // Fonction d'affichage des notifications personnalisées
  const showNotification = (message, type = "success") => {
    setNotification({ message, type });

    // Supprimer la notification après 3 secondes
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  // Fonction d'ajout au panier avec notification
  const handleAddToCart = (product) => {
    addToCart(product);
    showNotification(`${product.title} ajouté au panier !`);
  };

  return (
    <div className="container">
      <h1>Produits</h1>

      {/* Notification personnalisée */}
      {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}

      {/* Indicateur de chargement */}
      {loading ? (
        <p>Chargement des produits...</p>
      ) : (
        <>
          <div className="filterContainer">
            <label className="filterLabel">Filtrer par catégorie: </label>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="filterSelect"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="productGrid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="productCard">
                <img src={product.image} alt={product.title} className="image" />
                <div className="info">
                  <h3 className="title">{product.title}</h3>
                  <div className="prices">
                    {product.oldPrice && (
                      <span className="oldPrice">${product.oldPrice.toFixed(2)}</span>
                    )}
                    <span className="newPrice">${product.price.toFixed(2)}</span>
                  </div>
                  <div className="rating">
                    {Array.from({ length: 5 }, (_, index) => (
                      <span
                        key={index}
                        style={{
                          color: index < product.rating.rate ? "#FFD700" : "#ccc",
                          fontSize: "24px",
                        }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <button
                    className="addButton"
                    onClick={() => handleAddToCart(product)}
                  >
                    Ajouter au Panier
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductsPage;
