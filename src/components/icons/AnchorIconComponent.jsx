import * as React from "react";

function AnchorIconComponent({props}) {
  return (
    <svg viewBox="0 0 11 11" fill="none" {...props}>
      <path
        d="M1.564 10.714l-.997-.997L7.982 2.29H2.254L2.267.91h8.092v8.104H8.966l.013-5.727-7.415 7.427z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoAnchorIconComponent = React.memo(AnchorIconComponent);
export default MemoAnchorIconComponent;
