import { Link } from "react-router-dom";

function UsersContainer({ users }) {
  return (
    <div className="flex gap-5 flex-wrap justify-center py-5">
      {users?.map(
        (user, idx) =>
          user?.login && (
            <div
              key={idx}
              className="flex w-[200px] border border-gray-500 bg-gray-900 p-3 flex-col items-center"
            >
              <img
                src={user?.avatar_url}
                alt="avatar"
                className="w-24 mb-4 border-4 border-teal-400 rounded-full"
              />
              <h1 className="text-xl text-white">{user?.name}</h1>
              <h2 className="text-xs text-teal-400">{user?.login}</h2>

              <Link to={"/" + user?.login}>
                <span className="text-gray-200 bg-teal-600 my-3 font-semibold block py-1 px-4 tracking-wide rounded">
                  View
                </span>
              </Link>
            </div>
          )
      )}
    </div>
  );
}

export default UsersContainer;
