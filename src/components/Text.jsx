const Text = ({ number, name }) => {
    console.log(number, "number");

  return (
    <div>{name + " " + number}</div>
  );
};

export default Text;