import { useNavigate } from "react-router-dom";
import "./Login.scss";

function Login() {
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleOnSubmit}>
        <div className="login__image-box">
          <img
            className="login__image"
            src="https://ca.slack-edge.com/T043CEKTYLB-U042Y8QDHTR-fe54155f302f-512"
          />
        </div>
        <h2>Welcome Back Patrick!</h2>
        <div className="login__input-box">
          <label className="login__input-label" for="username">
            Username:
          </label>
          <input
            className="login__input"
            type="text"
            name="username"
            value={"_patrick89"}
          />
        </div>
        <div className="login__input-box">
          <label className="login__input-label" for="password">
            Password:
          </label>
          <input
            className="login__input"
            type="password"
            name="password"
            value={"fakepasswordhere"}
          />
        </div>
        <button className="login__button login__button--save" type="submit">
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default Login;
