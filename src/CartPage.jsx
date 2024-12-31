// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// const CartPage = ({ cart, addToCart, removeFromCart }) => {
//   // Calculer le total
//   const calculateTotal = () => {
//     return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
//   };

//   return (
//     <div style={styles.container}>
//       <h1>Votre Panier</h1>
//       {cart.length === 0 ? (
//         <p>Votre panier est vide.</p>
//       ) : (
//         <>
//           <div style={styles.cartGrid}>
//             {cart.map((item, index) => (
//               <div key={index} style={styles.cartCard}>
//                 <img src={item.image} alt={item.title} style={styles.image} />
//                 <div style={styles.info}>
//                   <h3 style={styles.title}>{item.title}</h3>
//                   <p style={styles.price}>${item.price.toFixed(2)}</p>
//                   <p>Quantité : {item.quantity}</p>
//                   <div style={styles.quantityControls}>
//                     <button
//                       onClick={() => removeFromCart(item.id)}
//                       style={styles.removeButton}
//                     >
//                       -
//                     </button>
//                     <button
//                       onClick={() => addToCart(item)}
//                       style={styles.addButton}
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <Router>
//             <Link to="/" >
//           <button onClick={()=>{}}></button>
//             </Link>
//           </Router>
//           <div style={styles.total}>
//             <h2>Total : ${calculateTotal()}</h2>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     padding: "20px",
//     fontFamily: "Arial, sans-serif",
//   },
//   cartGrid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//     gap: "20px",
//   },
//   cartCard: {
//     display: "flex",
//     border: "1px solid #ddd",
//     borderRadius: "8px",
//     padding: "10px",
//     backgroundColor: "#fff",
//   },
//   image: {
//     width: "100px",
//     height: "100px",
//     objectFit: "contain",
//     marginRight: "15px",
//   },
//   info: {
//     flex: 1,
//   },
//   title: {
//     fontSize: "16px",
//     marginBottom: "10px",
//   },
//   price: {
//     fontSize: "14px",
//     fontWeight: "bold",
//     color: "#28a745",
//     marginBottom: "10px",
//   },
//   quantityControls: {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//   },
//   addButton: {
//     padding: "5px 10px",
//     border: "none",
//     backgroundColor: "#28a745",
//     color: "#fff",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
//   removeButton: {
//     padding: "5px 10px",
//     border: "none",
//     backgroundColor: "#dc3545",
//     color: "#fff",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
//   total: {
//     marginTop: "20px",
//     textAlign: "right",
//     fontSize: "18px",
//     fontWeight: "bold",
//   },
// };

// export default CartPage;
import React from "react";
import { Link } from "react-router-dom";

const CartPage = ({ cart, addToCart, removeFromCart }) => {
  // Calculer le total
  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div style={styles.container}>
      <h1>Votre Panier</h1>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <div style={styles.cartGrid}>
            {cart.map((item, index) => (
              <div key={index} style={styles.cartCard}>
                <img src={item.image} alt={item.title} style={styles.image} />
                <div style={styles.info}>
                  <h3 style={styles.title}>{item.title}</h3>
                  <p style={styles.price}>${item.price.toFixed(2)}</p>
                  <p>Quantité : {item.quantity}</p>
                  <div style={styles.quantityControls}>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={styles.removeButton}
                    >
                      -
                    </button>
                    <button
                      onClick={() => addToCart(item)}
                      style={styles.addButton}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={styles.total}>
            <h2>Total : ${calculateTotal()}</h2>
          </div>
        </>
      )}

      {/* Bouton pour retourner à la page d'accueil */}
      <div style={styles.returnButtonContainer}>
        <Link to="/">
          <button style={styles.returnButton}>Retour à l'accueil</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  cartGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  cartCard: {
    display: "flex",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "10px",
    backgroundColor: "#fff",
  },
  image: {
    width: "100px",
    height: "100px",
    objectFit: "contain",
    marginRight: "15px",
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: "16px",
    marginBottom: "10px",
  },
  price: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#28a745",
    marginBottom: "10px",
  },
  quantityControls: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  addButton: {
    padding: "5px 10px",
    border: "none",
    backgroundColor: "#28a745",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
  },
  removeButton: {
    padding: "5px 10px",
    border: "none",
    backgroundColor: "#dc3545",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
  },
  total: {
    marginTop: "20px",
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "bold",
  },
  returnButtonContainer: {
    marginTop: "20px",
    textAlign: "center",
  },
  returnButton: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default CartPage;
