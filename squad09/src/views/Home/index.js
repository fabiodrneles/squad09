//import Context from "../../components/context";
import Footer from "../../components/Footer";
//import IconSearch from '../../assets/icon-search.svg'; => imagem da lupa
import IconLogin from '../../assets/icon-user-alt.svg'
import IconInfo from '../../assets/icon-info-circle.svg';
import Header from "../../components/Header";
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

            <Header buttons={buttonStyles}/>
            {/*<Context /> */}
            <Footer />

        </>

    );
}

export default Home;