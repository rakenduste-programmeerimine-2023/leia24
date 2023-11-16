// components/MyComponent.js
import React from "react";

const TestComponent = ({ myArray }) => {
  return (
    <div>
      {/* Use myArray in your component */}
      {myArray.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
};

export default TestComponent;
