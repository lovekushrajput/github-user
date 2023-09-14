import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function UserInfo() {
  const [user, setUser] = useState([]);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  let BaseUrl = "https://api.github.com/users";

  const getUserInfo = async () => {
    const res = await fetch(BaseUrl + pathname);
    const data = await res.json();
    setUser((PrevState) => PrevState.concat(data));
  };

  useEffect(() => {
    getUserInfo();
  }, [pathname]);

  return (
    <div className="py-5">
      <button
        onClick={() => navigate("/")}
        className="px-5 py-1 font-medium mx-1 bg-teal-400 rounded text-gray-200"
      >
        BACK
      </button>

      {user &&
        user?.map((uinfo, i) => (
          <div
            key={i}
            className="flex justify-center md:flex-row md:px-0 px-4 flex-col gap-10"
          >
            <img
              src={uinfo.avatar_url}
              alt="avatar"
              className="w-[350px] border-4 border-teal-400 md:mx-0 mx-auto"
            />

            <div className="text-lg px-3 leading-10">
              <h1 className="text-3xl  pb-4">{uinfo?.name}</h1>
              <h1>
                <span className="text-teal-400">Login_name</span>:{" "}
                {uinfo?.login}
              </h1>

              <h1>
                <span className="text-teal-400">Public_repos</span>:{" "}
                {uinfo?.public_repos}
              </h1>

              <h1>
                <span className="text-teal-400">Public_gists</span>:{" "}
                {uinfo?.public_gists}
              </h1>

              <h1>
                <span className="text-teal-400">Join</span>:{" "}
                {new Date(uinfo?.created_at).toLocaleDateString()}
              </h1>

              <a
                href={uinfo?.html_url}
                target="_blank"
                className="text-gray-200 font-semibold rounded cursor-pointer px-4 py-1 bg-teal-600 my-3 tracking-wide"
              >
                Visit
              </a>
            </div>
          </div>
        ))}
    </div>
  );
}

export default UserInfo;
