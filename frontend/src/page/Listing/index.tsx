import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { BASE_URL } from "ultis/request";

function Listing() {

    axios.get(`${BASE_URL}/movies?size12&page=0`)
    .then(resposta =>{
        console.log(resposta.data) ;
    });
    return (<><Pagination />
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
    