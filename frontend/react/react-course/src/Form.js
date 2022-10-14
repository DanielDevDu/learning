export function Form() {
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted');
  };
  const handlerChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <form onSubmit={handlerSubmit}>
      <h1>User Register</h1>
      <input id='hola' onChange={handlerChange} />
      <button>Send</button>
    </form>
  );
}
