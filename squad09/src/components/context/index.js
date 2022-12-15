import SearchBar from "../SearchBar";
import "./style.css";

function Context() {
    return (
        <div className="center">
            {/* <div className="boxText">
                <div className="text1">
                    <h1>Encontre hashtags de maneira fácil.</h1>
                </div>
                <div className="text2">
                    <p>Digite o que deseja no campo de buscas e confira os resultados do Twitter abaixo.</p>
                </div>
            </div>*/}
            <SearchBar />
        </div>
    );
}

export default Context;