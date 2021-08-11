const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>This is the header, {props.name}.</h1>
      <p>age: {props.age}</p>
      <p> rich: {props.rich}</p>
    </div>
  );
};

export default Header;
