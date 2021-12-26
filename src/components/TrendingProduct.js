import React from 'react'

const TrendingProduct = () => {
    return (
        <>
            <div className="container-fluid">
      <div className="my-4 shadow p-2">
        <h2 className="text-center">Trending Products</h2>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-4">
       <div className="col">
         <div className="card shadow-lg">
           <img src="/images/15.jpg" className="card-img-top" alt="..."/>
           <div className="card-body">
             <h5 className="card-title">Card title</h5>
             <button className="btn btn-success">View Details</button>
             
           </div>
         </div>
       </div>
       <div className="col">
         <div className="card shadow-lg">
           <img src="/images/16.jpg" className="card-img-top" alt="..."/>
           <div className="card-body">
             <h5 className="card-title">Card title</h5>
             <button className="btn btn-success">View Details</button>
           </div>
         </div>
       </div>
       <div className="col">
         <div className="card shadow-lg">
           <img src="/images/17.jpg" className="card-img-top" alt="..."/>
           <div className="card-body">
             <h5 className="card-title">Card title</h5>
             <button className="btn btn-success">View Details</button>
         </div>
       </div>
       </div>
       <div className="col">
         <div className="card shadow-lg">
           <img src="/images/18.jpg" className="card-img-top" alt="..."/>
           <div className="card-body">
             <h5 className="card-title">Card title</h5>
             <button className="btn btn-success">View Details</button>
           </div>
         </div>
       </div>
     </div>
      
    </div>
 
        </>
    )
}

export default TrendingProduct
