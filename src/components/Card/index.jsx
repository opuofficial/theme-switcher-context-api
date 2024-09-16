import React from "react";

const Card = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl overflow-hidden mx-5">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body dark:bg-slate-800">
        <h2 className="card-title dark:text-slate-100">Shoes!</h2>
        <p className="dark:text-slate-300">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <div className="card-actions justify-end">
          <button className="btn bg-[#b3e240] border-0">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
