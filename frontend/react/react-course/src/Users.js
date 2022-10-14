import { data } from './data';

export function UserCard() {
  return (
    <div>
      {data.map((user) => {
        return (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <h6>{user.company.name}</h6>
          </div>
        );
      })}
    </div>
  );
}

function UserProfile() {
  return (
    <div>
      <h1>UserProfile</h1>
    </div>
  );
}

export default UserProfile;
