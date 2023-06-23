import { redirect } from "react-router-dom";

export function isAuth(e) {
  const auth = localStorage.getItem("isAuth") === "yes";

  if (auth) {
    return null;
  } else {
    return redirect("/login");
  }
}

export function isNotAuth() {
  const auth = localStorage.getItem("isAuth") === "yes";
  if (auth) {
    return redirect("/");
  } else {
    return null;
  }
}
