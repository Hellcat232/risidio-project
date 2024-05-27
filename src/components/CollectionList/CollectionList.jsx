import artCollections from "../../api";
import CollectionCard from "../CollectionCard/CollectionCard";

const CollectionList = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        marginTop: 50,
        justifyContent: "space-around",
      }}
    >
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
    </div>
  );
};

export default CollectionList;
