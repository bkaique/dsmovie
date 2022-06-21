import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movies";
import { BASE_URL } from "ultis/request";

function Listing() {


    const [PageNumber, setPageNumber] = useState(0);
useEffect(() =>{

    axios.get(`${BASE_URL}/movies?size12&page=1`)
    .then(resposta => {
        const data = resposta.data as MoviePage
        setPageNumber(data.number);
    });

},[])


   
    return (
    
                <>
                    <p>{PageNumber}</p>
                <Pagination />
                <div className="container">
                    <div className="row">

                        <div className="col-sm-6 col-lg-4 col-lx-3 mb-3">
                            <MovieCard />
                        </div>
                        <div className="col-sm-6 col-lg-4 col-lx-3 mb-3">
                            <MovieCard />
                        </div>
                        <div className="col-sm-6 col-lg-4 col-lx-3 mb-3">
                            <MovieCard />
                        </div>
                        <div className="col-sm-6 col-lg-4 col-lx-3 mb-3">
                            <MovieCard />
                        </div>
                        <div className="col-sm-6 col-lg-4 col-lx-3 mb-3">
                            <MovieCard />
                        </div>
                        <div className="col-sm-6 col-lg-4 col-lx-3 mb-3">
                            <MovieCard />
                        </div>
                        <div className="col-sm-6 col-lg-4 col-lx-3 mb-3">
                            <MovieCard />
                        </div>

                    </div>
                </div>

            </>
            );

}

            export default Listing