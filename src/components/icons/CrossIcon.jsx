import * as React from "react";

function CrossIcon(props) {
  return (
    <svg width={8} height={8} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.06 3.882l2.24-2.24L6.24.583 4 2.822 1.761.582.701 1.643l2.238 2.24L.583 6.238l1.06 1.06L4 4.944 6.357 7.3l1.06-1.06-2.356-2.358z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoCrossIcon = React.memo(CrossIcon);
export default MemoCrossIcon;
