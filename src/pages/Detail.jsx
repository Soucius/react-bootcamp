import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { data } from "../api/data";

const Detail = () => {
    const { id } = useParams();
    const [getData, setGetData] = useState(null);

    const location = useLocation();

    console.log(location.pathname, "location");

    useEffect(() => {
        if (id) {
            setGetData(data.find(data => data.id == id));
        }
    }, [id]);

    console.log(getData, "getData");

  return (
    <div>
        <div>{getData?.name}</div>

        <div>{getData?.description}</div>
    </div>
  );
};

export default Detail;