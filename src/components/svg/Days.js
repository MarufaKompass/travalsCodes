import { forwardRef } from "react";

function Root(props, ref) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 22C6.48 22 2 17.53 2 12C2 6.48 6.48 2 12 2C17.53 2 22 6.48 22 12C22 17.53 17.53 22 12 22ZM15.19 15.71C15.31 15.78 15.44 15.82 15.58 15.82C15.83 15.82 16.08 15.69 16.22 15.45C16.43 15.1 16.32 14.64 15.96 14.42L12.4 12.3V7.68C12.4 7.26 12.06 6.93 11.65 6.93C11.24 6.93 10.9 7.26 10.9 7.68V12.73C10.9 12.99 11.04 13.23 11.27 13.37L15.19 15.71Z"
        fill="#d6d7d8"
      />
    </svg>
  );
}
const Days = forwardRef(Root);
export default Days;
