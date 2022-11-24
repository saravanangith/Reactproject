import React from "react";

export function FormError(props) {
  const { property, isVisible } = props;
  return (
    isVisible && (
      <p style={{ color: "red", margin: "5px" }}>
        Please enter a valid {property}
      </p>
    )
  );
}
