import Form from "next/form";

export default function Page() {
  function handleSubmit() {
    alert("Form submitted");
  }

  return (
    // <Form action="/search">
    <Form action={handleSubmit}>
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </Form>
  );
}
