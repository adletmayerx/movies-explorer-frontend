import * as React from "react";

function AccountIcon(props) {
  return (
    <svg width={26} height={30} fill="none" {...props}>
      <rect width={26} height={30} rx={4} fill="#313131" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5 12a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm1.5 0a4 4 0 11-8 0 4 4 0 018 0zm-6 5.25A3.75 3.75 0 007.25 21v1h1.5v-1A2.25 2.25 0 0111 18.75h4A2.25 2.25 0 0117.25 21v1h1.5v-1A3.75 3.75 0 0015 17.25h-4z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoAccountIcon = React.memo(AccountIcon);
export default MemoAccountIcon;
