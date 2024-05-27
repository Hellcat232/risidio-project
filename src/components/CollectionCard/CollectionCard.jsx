import artCollections from "../../api";
import css from "./CollectionCard.module.css";
const CollectionCard = () => {
  return (
    <ul style={{ display: "flex" }}>
      <li className={css.card}>
        <div>
          <img
            src="../../../public/nightComing.png"
            width={250}
            height={250}
            alt=""
          />
        </div>
        <div className={css["name-value"]}>
          <h3>Night sky</h3>
          <p>120 NFT</p>
        </div>
        <p style={{ margin: 0 }}>Price range: 0.12BTC - 0.18BTC</p>

        <p style={{ marginTop: 10, marginBottom: 10 }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni,
          consequuntur...
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div>
            <img
              src="../../../public/Rectangle 10.png"
              width={40}
              height={40}
              alt=""
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              marginLeft: 5,
            }}
          >
            <p style={{ margin: 0 }}>Artist</p>
            <h6 style={{ margin: 0 }}>Natali</h6>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default CollectionCard;
