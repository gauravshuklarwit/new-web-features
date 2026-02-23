import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Practiced concepts</h1>

      <ol>
        <li>
          <Link href="/at-property">The @property Rule</Link>
        </li>
        <li>
          <Link href="/relative-colors">Relative Colors</Link>
        </li>
        <li>
          <Link href="/form-component">Form Component</Link>
        </li>
        <li>
          <Link href="/color-functions">New CSS color spaces and functions</Link>
        </li>
      </ol>
    </div>
  );
}
