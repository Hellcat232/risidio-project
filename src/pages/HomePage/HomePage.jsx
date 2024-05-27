import AppBar from "../../components/AppBar/AppBar";
import BuyNow from "../../components/BuyNow/BuyNow";
import CollectionList from "../../components/CollectionList/CollectionList";

const HomePage = () => {
  return (
    <main>
      <AppBar />
      <BuyNow />
      <CollectionList />
    </main>
  );
};

export default HomePage;
