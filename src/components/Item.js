import React from 'react';

const Item = ({title, ingredients, price, onAddToOrder}) => {
    return (
        <div className="card" >
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Food Items" />
            <div className="card-body text-center">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{ingredients}</p>
                <p className="card-text fw-bold">{price}</p>
                <botton onClick={onAddToOrder} className="btn btn-dark">Add</botton>
            </div>
        </div>
    );
};

export default Item;
