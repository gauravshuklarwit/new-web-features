import Link from "next/link";
import { ViewTransition } from "react";

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
          <Link href="/color-functions">
            New CSS color spaces and functions
          </Link>
        </li>
        <li>
          <ViewTransition name="spa">
            <Link href="/spa-transitions">Same document view transitions</Link>
          </ViewTransition>
        </li>
        <li>
          <Link href="/activity-component">Activity Component</Link>
        </li>
        <li>
          <Link href="/anchor-positioning">Anchor positioning</Link>
        </li>
        <li>
          <Link href="/invoker-commands">Invoker commands</Link>
        </li>
        <li>
          <Link href="/interest-invokers">Interest Invokers</Link>
        </li>
      </ol>
    </div>
  );
}
