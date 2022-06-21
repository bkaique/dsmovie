import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movies";
import { BASE_URL } from "ultis/request";

function Listing() {

    const [Page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true

    })
    const [PageNumber, setPageNumber] = useState(0);
    useEffect(() => {

        axios.get(`${BASE_URL}/movies?size12&page=${PageNumber}&sort=title`)
            .then(resposta => {
                const data = resposta.data as MoviePage
                setPage(data);
            });

    }, [setPageNumber])



    return (

        <>

            <Pagination />
            <div className="container">
                <div className="row">
                    {Page.content.map(movie => (

                        <div key={movie.id} className="col-sm-6 col-lg-4 col-lx-3 mb-3">
                            <MovieCard movie={movie} />
                        </div>

                    ))}



                </div>
            </div>

        </>
    );

}

export default Listing