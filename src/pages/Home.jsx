import { useDispatch, useSelector } from "react-redux";
import { modalOpenFunc } from "../redux/modalSlice";

const Home = () => {
  const {modal} = useSelector(state => state.modal);
  const dispatch = useDispatch();

  console.log(modal);

  const changeFunc = () => {
    dispatch(modalOpenFunc);
  };

  return (
    <div onClick={changeFunc}>{modal ? "value TRUE" : "value FALSE"}</div>
  );
};

export default Home;