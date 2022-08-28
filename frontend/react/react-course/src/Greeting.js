export function Greeting(props) {
  const data = props.data;
  const response = <>
    <h1>Hello {data.first_name} {data.last_name}</h1>
    <p>with email {data.email}</p>
    <p>Gender {data.gener}</p>
  </>
  return response;
}

export function OtherGreeting({ name, age = 20 }) {
  console.log(name)
  const response = <>
    <h1>Hello from Other {name} is {age}</h1>
  </>
  return response;
}

