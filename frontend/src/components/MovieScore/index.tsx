
import MovieStars from 'components/MovieStars';
import './style.css';

function MovieScore() {
    var score = 1;
    var count =  10;
    return (
        <div className="dsmovie-score-container">
        <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
        <MovieStars />
        <p className="dsmovie-score-count">{count} avaliações</p>
    </div>
    );

}
export default MovieScore