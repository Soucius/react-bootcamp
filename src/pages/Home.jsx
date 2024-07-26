import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const {data} = await axios.get("https://fakestoreapi.com/products/");
      setAllData(data);
      setLoading(false);
    };

    getData();
  }, []);

  console.log(allData);

  return (
    loading ? <div>Home Page</div> :
    <div>
      {allData?.map((data, index) => (
        <div onClick={() => navigate(`detail/${data?.id}`)} style={{marginBottom: "30px", cursor:"pointer"}} key={index}>
          <div>{data?.title}</div>

          <img style={{width: "100px"}} src={data?.image} />
        </div>
      ))}
    </div>
  );
};

export default Home;