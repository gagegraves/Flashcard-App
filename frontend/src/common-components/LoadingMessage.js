import React from "react";

export default function LoadingMessage() {
  return (
    <div className="text-center">
      <div className="spinner-border text-info text-center" role="status">
        <span className="sr-only">Now Loading...</span>
      </div>
    </div>
  );
}
