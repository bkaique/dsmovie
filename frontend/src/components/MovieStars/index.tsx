import { ReactComponent as StarFull } from 'assests/img/StarFull.svg';
import { ReactComponent as StarHalf } from 'assests/img/StarHalf.svg';
import { ReactComponent as StarEmpty } from 'assests/img/StarEmpty.svg';

import './style.css';

function MovieStars() {
    return (
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>

    );

}
export default MovieStars