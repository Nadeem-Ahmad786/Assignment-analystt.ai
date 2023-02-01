import React, { useEffect, useState } from 'react'
import { getData } from '../api/auth'

const Home = () => {
    const [data, setData] = useState("");
    const [count, setCount] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    const lastPostIndex = currentPage* postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    useEffect(()=>{
        loadData()
    },[]);
    const loadData=()=>{
        getData()
        .then(response => {
            setData(response.data);
            setCount(Math.ceil(response.data.length/postsPerPage))
        })
    }
    const currentPosts = data.slice(firstPostIndex, lastPostIndex);
  return (
    <div className='bg-secondary vh-100 p-2 px-4'>
        { data && <>{currentPosts.map((element)=>{
            return (
            <div className='rounded p-2 mb-2 bg-light'>
                <div className='d-flex justify-content-between align-items-center'>
                    <p>Hello {element.username}</p>
                    <div>
                        <p className='fw-bold'>CONTACT</p>
                        <p>{element.name}</p>
                    </div>
                    <div>
                        <p className='fw-bold'>CITY</p>
                        <p>{element.address.city}</p>
                    </div>
                    <button className="btn btn-danger" type="button"  data-bs-toggle="collapse" data-bs-target={"#collapseExample"+element.id} aria-expanded="false" aria-controls={"collapseExample"+element.id}>View Details
                    </button>
                </div>
                <div className="collapse" id={"collapseExample"+element.id}>
                    <div className="card card-body">
                        <p className='fw-bold'>Description</p>
                        <p className='mb-0'>{element.company.catchPhrase}</p>
                        <p className=''>{element.company.bs}</p>
                        <div className='row'>
                            <div className='col'>
                                <p className='fw-bold'>Contact Person</p>
                                <p className=''>{element.name}</p>
                                <p className='fw-bold'>Email</p>
                                <p className=''>{element.email}</p>
                                <p className='fw-bold'>Phones</p>
                                <p className=''>{element.phone}</p>
                            </div>
                            <div className='col'>
                                <p className='fw-bold'>Address</p>
                                <p className=''>{element.address.suite} {element.address.street} {element.address.city} {element.address.zipcode}</p>
                                <p className='fw-bold'>City</p>
                                <p className=''>{element.address.city}</p>
                                <p className='fw-bold'>Zipcode</p>
                                <p className=''>{element.address.zipcode}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
            })}
            <div className='col-12 mt-4'>
                <nav aria-label="Page navigation example">
                <ul className='pagination justify-content-center'>
                <li className={currentPage==1 ?'page-item h4 disabled':'page-item h4'}><a class="page-link" href="#" onClick={()=>setCurrentPage(currentPage-1)}>&laquo;</a></li>
                    { Array.from(Array(count), (e, i) => {
                    return <li key={i+1} className={currentPage==i+1?"page-item h4 active": "page-item h4"} ><a class="page-link" href="#" onClick={()=>setCurrentPage(i+1)}>{i+1}</a></li>
                    })}
                    <li className={currentPage==count ?'page-item h4 disabled':'page-item h4'}><a class="page-link" href="#" onClick={()=>setCurrentPage(currentPage+1)}>&raquo;</a></li>
                </ul>
                </nav>
            </div>
            </>
        }
    </div>
  )
}

export default Home