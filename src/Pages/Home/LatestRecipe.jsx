import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../Components/Header/Card';
import { Link } from 'react-router-dom';

function LatestRecipe() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getLastestItems = async () => {
            const response = await axios.get('https://recipe-heaven-backend.vercel.app/api/items');
            setItems(response.data);
        }
        getLastestItems();
    }, []);

    return (
        <div className='px-5 py-16'>
            <h2 className='text-3xl font-semibold text-secondary sm:leading-relaxed'>
                Latest Recipes
            </h2>
            {/* Get all Items */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                {
                    items.length > 0 ? items.slice(0, 4).map((item) => (
                        <Card key={item._id} item={item} />
                    )) : <p>Loading...</p>
                }
            </div>

            <div className='mx-auto mt-16 w-[20rem]'>
                <Link to='/search'>
                    <button className='py-4 px-8 hover:bg-btncolor text-secondary hover:text-white w-full transition ease-in duration-200 text-center text-base font-semibold border border-[#9c702a] focus:outline-none rounded-lg'>
                        View All Recipes
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default LatestRecipe;
