import "./page.css";

export default function Page() {
  return (
    <div className="ap-container">
      <h1 className="ap-heading">This is a heading</h1>
      <p className="ap-para">
        This is a paragraph <br />
        <span className="ap-span">This is a span</span>
      </p>
      <blockquote className="ap-quote">This is a blockquote</blockquote>
    </div>
  );
}
