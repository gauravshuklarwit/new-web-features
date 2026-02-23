/* Traditional way */

// "use client";

// import { useRef } from "react";

// export default function InvokerCommands() {
//   const dialogElement = useRef<HTMLDialogElement>(null);

//   const handleClick = () => {
//     dialogElement.current?.showModal();
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Open Dialog</button>
//       <dialog ref={dialogElement}>Dialog content goes here</dialog>
//     </div>
//   );
// }

/* Modern way */
export default function Page() {
  return (
    <div>
      <button commandfor="my-dialog" command="show-modal">Open Dialog</button>
      <dialog id="my-dialog">Dialog content goes here</dialog>
    </div>
  );
}
