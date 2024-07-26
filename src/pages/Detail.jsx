import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const {id} = useParams();
  const [singleData, setSingleData] = useState();

  useEffect(() => {
    const getData = async () => {
      const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setSingleData(data);
    }

    getData();
  }, [id]);

  return (
    <div>
      <div style={{marginBottom: "30px"}}>
        <div>{singleData?.title}</div>

        <img style={{width: "200px"}} src={singleData?.image} alt={singleData?.title} />
      </div>
    </div>
  );
};

export default Detail;