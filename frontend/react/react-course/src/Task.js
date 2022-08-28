import "./task.css";

export function TaskCard({ ready }) {
  //   const cardStyle = {
  //     backgroundColor: "red",
  //     color: "white",
  //     padding: "20px",
  //   };
  const titleStyle = { fontWeight: "lighter" };
  return (
    // <div style={cardStyle}>
    <div className="card-task">
      <h1 style={titleStyle}>My Task</h1>
      <span>
        <p>This is my task</p>
        {/* <span style={ready ? {backgroundColor:"green"} : {backgroundColor: "red"} }> */}
        <span className={ready ? "bg-green" : "bg-red"}>
          {ready ? "Done" : "To do"}
        </span>
      </span>
    </div>
  );
}
