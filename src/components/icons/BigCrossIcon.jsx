import * as React from "react";

function BigCrossIcon(props) {
  return (
    <svg width={32} height={32} {...props}>
      <path fill="#fff" d="M7.16 9.282L9.28 7.161l15.556 15.556-2.121 2.122z" />
      <path fill="#fff" d="M22.717 7.161l2.121 2.122L9.282 24.839l-2.121-2.121z" />
    </svg>
  );
}

const MemoBigCrossIcon = React.memo(BigCrossIcon);
export default MemoBigCrossIcon;
