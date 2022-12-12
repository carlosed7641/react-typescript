import { useForm } from "../hooks/useForm"


interface FormData {
  email: string
  name: string
  age: number
}

export const Form = () => {
  const { email, name, age, handleChange, form } = useForm<FormData>({
    email: "example@gmail.com",
    name: "Example",
    age: 22
  })

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email: </label>
        <input
          value={email}
          type="email"
          className="form-control"
          name="email"
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Nombre: </label>
        <input
          value={name}
          type="text"
          className="form-control"
          name="name"
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Edad: </label>
        <input
          value={age}
          type="number"
          className="form-control"
          name="age"
          onChange={handleChange}
        />
      </div>
      <pre>{JSON.stringify(form)}</pre>
    </form>
  );
};
