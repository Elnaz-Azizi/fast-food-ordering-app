import React from 'react';

const Item = ({ title, ingredients, price, imageUrl, onAddToOrder }) => {
    return (
        <div className="card h-100 border-0 shadow-sm">
            <img src={imageUrl} className="card-img-top" alt={title} />
            <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title text-center">{title}</h5>
                <p className="card-text text-center text-muted">{ingredients}</p>
                <p className="card-text text-center fw-bold">SEK {price}</p>
                <button 
                    className="btn btn-primary mt-3 w-100" 
                    onClick={onAddToOrder}
                >
                    Add
                </button>
            </div>
        </div>
    );
};

export default Item;
