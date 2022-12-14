import { Cookies } from "react-cookie";
export const useCheckAuthentication = () => {
  const cookies = new Cookies();
  const haveToken = cookies.get("accessToken")?.length > 0;

  const isAuthenticated = haveToken;
  console.log(isAuthenticated);
  return isAuthenticated;
};
