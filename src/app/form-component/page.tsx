// "use client"
import "./page.css";

import Form from "next/form";

export default function Page() {
  function handleSubmit() {
    window.alert("Form submitted");
  }

  return (
    <Form action="/search" className="form-container">
      {/* <Form action={handleSubmit} className="form-container"> */}
      <h1>Next.js Form component</h1>
      <div className="form-content">
        <input type="text" name="query" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>
    </Form>
  );
}
