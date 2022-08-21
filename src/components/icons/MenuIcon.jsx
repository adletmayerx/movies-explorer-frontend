import * as React from "react";

function MenuIcon(props) {
  return (
    <svg width={44} height={44} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 15H9v-2.5h22V15zM31 24H9v-2.5h22V24zM31 33H9v-2.5h22V33z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoMenuIcon = React.memo(MenuIcon);
export default MemoMenuIcon;
