import MotivationCard from "./MotivationCard";

const Body = () => {
  return (
    <div className="body">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const enteredUserName = formData.get("userName");
          console.log("Entered userName username:", enteredUserName);

          const userNameInputElement = document.getElementById(
            "usernameInput"
          ) as HTMLInputElement;

          if (userNameInputElement) {
            if (!enteredUserName) {
              userNameInputElement.setCustomValidity("Username is required!");
              //userNameInputElement.reportValidity(); // Triggers the browser's error display
              return; // stop further execution
            } else {
              userNameInputElement.setCustomValidity(""); // clear previous errors
            }

            // If valid, clear input
            userNameInputElement.value = "";
          }
        }}
      >
        <label htmlFor="usernameInput">Enter Username</label>
        <input
          id="usernameInput"
          name="userName"
          className="username-input"
          //required
        ></input>
        <button type="submit">Update</button>
      </form>
      <MotivationCard />
    </div>
  );
};

export default Body;
