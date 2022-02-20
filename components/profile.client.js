import Link from "next/link";
import Image from "next/image";

export default function Profile({ profile }) {
  if (!profile) return;
  const { id, name } = profile;
  return (
    <Link href={`/profile/${id}`}>
      <a>
        <Image src="/vercel.svg" alt="Profile Logo" width={72} height={16} />
        <span>{name}</span>
      </a>
    </Link>
  );
}
