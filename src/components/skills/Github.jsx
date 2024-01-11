import React from "react";
import GitHubCalendar from "react-github-calendar";


function Github() {
  return (
    <div style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="shivam250702"
        blockSize={13}
        blockMargin={5}
        color="#c084f5"
        fontSize={15}
      />
    </div>
  );
}

export default Github;