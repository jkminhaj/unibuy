import { useContext } from "react";
import AllProducts from "./components/AllProducts";
import SearchResults from "./components/SearchResults";
import { GlobalContext } from "../../../context/GlobalProvider";

const Home = () => {
    const {search} = useContext(GlobalContext);
    return (
        <div>
            {search?<SearchResults/>:<AllProducts/>}
        </div>
    );
};

export default Home;