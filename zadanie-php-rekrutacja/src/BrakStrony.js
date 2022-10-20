import { Link } from 'react-router-dom';

const BrakStrony = () => {
    return ( 
        <div className="brak-strony">
            <h2>Nieznana strona</h2>
            <Link to="/">Idź do strony głównej</Link><br/>
            <Link to="/admin">Idź do strony administratora</Link>
        </div>
     );
}
 
export default BrakStrony;