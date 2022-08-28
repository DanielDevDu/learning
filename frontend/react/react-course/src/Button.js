import PropTypes from "prop-types";

export function Button({ text = "Click me", name }) {
  const handleClick = () => {
    console.log("Click on Button");
  };
  return (
    <button onClick={handleClick}>
      <span>
        {text} - {name}
      </span>
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  // text: PropTypes.string.isRequired
};

Button.defaultProps = {
  name: "User",
};
