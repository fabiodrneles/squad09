//import Context from "../../components/context";
import Footer from "../../components/Footer";
//import IconSearch from '../../assets/icon-search.svg'; => imagem da lupa
import IconLogin from '../../assets/icon-user-alt.svg'
import IconInfo from '../../assets/icon-info-circle.svg';
import Header from "../../components/Header";
// IMPORT DA IMAGEM 
// TODO FAZER A TROCA DE IMAGEM NO FUNDO DA PAGINA
import IconIlustration from '../../assets/about-ilustration.svg';

import "./style.css";


function Home() {
    const buttonStyles = [
        {
            title: "SOBRE",
            icon: IconInfo,
            route: "/about",
            textColor: "#0A1744",
            backgroundColor: "#72EFDB",
        },
        {
            title: "LOGIN",
            icon: IconLogin,
            route: "/login",
            textColor: "#FFF",
            backgroundColor: "#1E3E7B",
        },

    ]



    return (
        <>

            <Header buttons={buttonStyles} />
            {/*<Context /> */}
//TODO EDITAR A ESCRITA
//TODO EDITAR AS classNaME DE ACORDO COM A VIEWS lOGIN
            <div className="about">
                <div className="aboutProject">
                    <div className="aboutProjectTitle">
                        <h1>Sobre o projeto</h1>
                    </div>
                    <div className="projectText">
                        <p>
                            Certamente, você já encontrou a palavra engajamento em diferentes contextos,
                            e nós alunos da NewTab Academy estamos engajados em te proporcionar ferramentas
                            que otimizem suas buscas de maneira assertiva.
                        </p>
                        <p>
                            Aqui no hashtagfinder, você acessa de forma rápida e simples as hashs mais comentadas do Twitter,
                            garantindo assim maior interação em suas postagens, além de monitorar o crescimento de suas próprias
                            hashes personalizadas e te deixar por dentro das maiores novidades, e tudo isso de forma gratuita.
                        </p>
                    </div>
                </div>
                <div className="aboutIlustration">
                    <img src={IconIlustration} alt="ilustração" className="IlustrationImage" />
                </div>
            </div>

            <Footer />

        </>

    );
}

export default Home;