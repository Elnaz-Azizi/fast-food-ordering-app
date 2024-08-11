import React from 'react';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';


const Item = ({ title, ingredients, price, imageUrl, onAddToOrder, theme }) => {
    return (
        <div className="card h-100 border-2 border-white rounded-0">
            <div style={{ height: '200px', overflow: 'hidden' }}>
                <img src={imageUrl} className="card-img-top" alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className={`card-body d-flex flex-column justify-content-between ${theme === "light" ? "" : "bg-dark text-light"}`}>
                <div className="text-center">
                    <h5 className="card-title"><FaPizzaSlice size={35} /> {title}</h5>
                    <p className="card-text">{ingredients}</p>
                    <p className="card-text fw-bold">SEK {price}</p>
                </div>
                <button 
                    className={`btn ${theme === "light" ? "btn-primary" : "btn-success"} mt-3 w-100`} 
                    onClick={onAddToOrder}
                >
                    Add
                </button>
            </div>
        </div>
    );
};

export default Item;

