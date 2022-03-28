import Link from "next/link";

export default function nav() {
  return (
    <div>
      <Link href="/">
        <a className="button">메롱</a>
      </Link>

      <Link href="/ack/ack1">
        <a className="click">메롱1</a>
      </Link>
    </div>
  );
}
