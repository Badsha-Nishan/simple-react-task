export default function User({ user }) {
  console.log(user);
  return (
    <div>
      <p>Name: {user.name} </p>
      <p>Email: {user.email} </p>
    </div>
  );
}
