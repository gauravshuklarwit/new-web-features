import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Practiced concepts</h1>
      
      <ol>
        <li>
          <Link href="/at-property">The @property Rule</Link>
        </li>
      </ol>
    </div>
  );
}
