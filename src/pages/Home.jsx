import { useNavigate } from "react-router-dom";
import { data } from "../api/data";

const Home = () => {
    const navigate = useNavigate();

  return (
    <div>
        {data.map((data, index) => (
            <div onClick={() => navigate(`detail/${data.id}`)} style={{cursor: "pointer", marginBottom: "30px"}} key={index}>
                <div>{data.name}</div>

                <div>{data.description}</div>
            </div>
        ))}
    </div>
  );
};

export default Home;