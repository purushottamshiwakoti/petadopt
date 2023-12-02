import { cookies } from "next/headers";

import prismadb from "./prismadb";

const CheckUserAuth = async () => {
  const cookieStore = cookies();
  const user: any = cookieStore.get("user");
if(user){
  const fetchUser = await prismadb.user.findUnique({
    where: {
      id: user.value,
    },
  });
  if (fetchUser) {
    return fetchUser;
  } else {
    return false;
  }
}else{
  return false;

}
}

export default CheckUserAuth;
