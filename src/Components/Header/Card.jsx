import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegClock } from "react-icons/fa";

// Define category styles before using them in getCategoryStyle function
const categoryStyles ={
    Entrees:{
        backgroundColor:'#f0f5c4',
        color:'#59871f'
    },
    Breakfast:{
        backgroundColor:'#efedfa',
        color:'#3c3a8f'
    },
    Lunch:{
        backgroundColor:'#e5f7f3',
        color:'#1f8787'
    },
    Desserts:{
        backgroundColor:'#e8f5fa',
        color:'#397a9e'
    },
    Sides:{
        backgroundColor:'#feefc9',
        color:'#d16400'
    },
    Drinks:{
        backgroundColor:'#ffeae3',
        color:'#f0493e'
    },
    default:{
        backgroundColor:'#fff',
        color:'#000'
    }
};

const getCategoryStyle=(category)=>{
    return categoryStyles[category] || categoryStyles.default;
    
}

const Card = ({item}) =>{
    const categoryStyle = getCategoryStyle(item?.category);
    // let i=item?.menuId;
    // console.log(i);
    
  return (
    <div className='container mx-auto flex justify-center'>
      <div className='mx-w'>
        <div className='bg-white relative shadow-lg hover:shadow-xl transition duration-500'>
        <Link to={`/items/${item._id}`}>
            <img src={item?.thumbnail_image} alt="thumbnail_image" className='rounded-t-lg'/>
            <div className='py-6 px-5 rounded-t-lg'>
            
            <h1 className='text-gray-700 font-bold text-2xl mb-8 hover:text-gray-900 hover:cursor-pointer'>{item?.name}</h1>
                
                {/* Category and reading time */}
                <div className='flex justify-between items-center flex-wrap'>
                    <button className='mt-6 py-2 px-4 font-medium rounded-lg shadow-md hover:shadow-lg transition duration-300' style={
                        {
                            backgroundColor:categoryStyle.backgroundColor,
                            color:categoryStyle.color
                        }
                    }>{item?.category}</button>
                    <div className='flex items-center py-2 mt-6 gap-3'>
                        <FaRegClock/>
                        <span>{item?.more.length > 0 && item.more[0].prep_time}</span>
                    </div>
                </div>
            </div>
            <div className='absolute top-1 right-2 py-2 px-4 bg-white rounded-lg'>
                <span className='font-medium'>{item?.more[0].difficulty}</span>
            </div>
            </Link>
        </div>
         
      </div>
    </div>
  )
}

export default Card
