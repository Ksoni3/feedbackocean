import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul className="flex items-center gap-3 mt-10 text-linkedin">
        <li>
          <Link href="/feedback"> Feedback Page</Link>
        </li>
        <li>
          <Link href="/login"> Login Page</Link>
        </li>
      </ul>
    </main>
  );
}
