import axios from 'axios'
import React, { useState } from 'react'

const Callingapis = () => {

    const [meta, setmeta] = useState([])

    const call= async()=>{
       const data=await axios.get('https://cataas.com/api/cats?tags=cute')
       setmeta(data.data)
       console.log(meta) }

  return (
    <>
      <div className='display flex bg-gray-600 text-amber-50 min-h-screen px-10 py-20'>
        <button onClick={call} className='bg-amber-700 h-20 w-20 rounded px-10 m-10 accent-neutral-200'>Click Me</button>
        <div  className='px-100  mt-10 bg-gray-900'>
            {meta.map((elem, idx) => {
  return (
    <div
      key={idx}
      className="bg-gray-300 text-amber-300 flex items-center justify-between w-full px-7 py-6 rounded mb-3"
    >
      <img src={`https://cataas.com/cat/${elem._id}`} alt="cat" className="h-60 w-auto rounded" />
      <p>{elem.id}</p>
    </div>
  );
})}
        </div>
      </div>
    </>
  )
}

export default Callingapis
