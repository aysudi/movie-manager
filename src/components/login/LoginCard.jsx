import styles from "./style.module.css";

const LoginCard = ({ setIsLogged, mode, setMode }) => {
  return (
    <div
      className={
        mode == "light" ? styles["login-light-box"] : styles["login-dark-box"]
      }
    >
      <div className="login-box w-1/3 m-auto flex flex-col gap-8 p-12 rounded-md shadow-2xl bg-white">
        <div className="login-text text-center flex flex-col gap-2">
          <h2 className="font-bold text-4xl mb-2">Movie Manager App</h2>
          <p>Please log in to manage your movie collection</p>
        </div>
        <button
          onClick={() => {
            setIsLogged("true");
            localStorage.setItem("isLogged", JSON.stringify("true"));
          }}
          className="bg-sky-950 text-white rounded-xl p-4 text-center text-xl font-bold cursor-pointer"
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default LoginCard;
