import Featured from "../../components/Featured/Featured";
import List from "../../components/List/List";
import Navbar from "../../components/NavBar/Navbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List title="Continue To Watch" />
      <List title="Middle Eastern Movies & TV" />
      <List title="US TV Dramas" />
      <List title="Ensemble Movies" />
    </div>
  );
};

export default Home;
