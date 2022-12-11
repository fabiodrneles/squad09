import "./style.css";
import { FiSearch } from 'react-icons/fi';

function SearchBar () {
    return(
        <div id="divBusca">
            <FiSearch/>
            <input  type="text" id="txtBusca" placeholder="Buscar..."/>
            
        </div>
    );
}

export default SearchBar;