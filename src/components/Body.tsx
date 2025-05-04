import { useRef } from "react";
import MotivationCard from "./MotivationCard";
//import { useDispatch } from "react-redux";
//import { setUserName } from "../redux/actions";
import { setUserName } from "../redux/reducer";
import { useStore } from "../zustand/store";

const Body = () => {
  //const dispatch = useDispatch();
  const setUserName = useStore((state) => state.setUserName);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="body">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const enteredUserName = inputRef?.current?.value;
          console.log("Entered userName username:", enteredUserName);
          //dispatch(setUserName(enteredUserName || ""));
          setUserName(enteredUserName || "");

          if (inputRef?.current) {
            if (!enteredUserName) {
              inputRef.current.setCustomValidity("Username is required!");
              inputRef.current.reportValidity(); //
              return; // stop further execution
            } else {
              inputRef.current.setCustomValidity(""); // clear previous errors
            }
            // If valid, clear input
            inputRef.current.value = "";
          }
        }}
      >
        <label htmlFor="usernameInput">Enter Username</label>
        <input
          id="usernameInput"
          name="userName"
          className="username-input"
          ref={inputRef}
          onInput={() => {
            if (inputRef.current) {
              inputRef.current.setCustomValidity(""); // Clear error as user types
            }
          }}
        ></input>
        <button type="submit">Update</button>
      </form>
      <MotivationCard />
    </div>
  );
};

export default Body;
