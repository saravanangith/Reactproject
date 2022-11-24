import "./css/button.css";

export function Button(props) {
  //   console.log(props);
  const { bgColor, btnFn, name } = props;
  return (
    <button
      onClick={(e) => btnFn(e)}
      id="btn"
      style={{ backgroundColor: bgColor }}
    >
      {name}
    </button>
  );
}
