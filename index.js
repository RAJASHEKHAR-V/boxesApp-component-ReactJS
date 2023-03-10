const Box = (props) => {
  const { className, text } = props;

  return (
    <div className={className}>
      <p>{text}</p>
    </div>
  );
};

const element = (
  <div className="bg-Container">
    <h1 className="heading">Boxes</h1>
    <div className="card">
      <Box className="small box-text" text="Small" />
      <Box className="medium box-text" text="Medium" />
      <Box className="large box-text" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
