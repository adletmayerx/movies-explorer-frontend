import * as React from "react";

function LogoComponent(props) {
  return (
    <svg width={40} height={38} fill="none" {...props}>
      <path
        d="M0 19C0 8.507 8.507 0 19 0s19 8.507 19 19-8.507 19-19 19S0 29.493 0 19z"
        fill="#3DDC84"
      />
      <path
        d="M26.375 11h-14.75C10.175 11 9 12.212 9 13.706v7.497c0 .14.01.276.03.41-.02.2-.03.401-.03.605C9 26.515 13.477 30 19 30s10-3.485 10-7.782c0-.204-.01-.406-.03-.606.02-.133.03-.27.03-.409v-7.497C29 12.212 27.824 11 26.375 11z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoLogoComponent = React.memo(LogoComponent);
export default MemoLogoComponent;
