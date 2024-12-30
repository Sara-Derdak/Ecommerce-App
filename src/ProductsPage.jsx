import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Styles pour react-toastify
import "./ProductsPage.css"; // Importer le fichier CSS

const ProductsPage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

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
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des produits:", error);
        toast.error("Erreur lors de la récupération des produits.");
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

  // Fonction d'ajout au panier avec notification
  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.title} ajouté au panier !`, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  return (
    <div className="container">
      <h1>Produits</h1>

      <div className="filterContainer">
        <label className="filterLabel">Filtrer by categorie: </label>
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
                {/* Crée une étoile pleine ou vide selon la note */}
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
                onClick={() => handleAddToCart(product)} // Ajouter au panier et afficher la notification
              >
                Ajouter au Panier
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ToastContainer pour afficher les notifications */}
      <ToastContainer />
    </div>
  );
};

export default ProductsPage;
