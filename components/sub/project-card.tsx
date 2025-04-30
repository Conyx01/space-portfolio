import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="w-full relative overflow-hidden rounded-lg shadow-lg transition duration-300 hover:shadow-2xl border border-[#2A0E61] bg-[#0F0F1B]"
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-48 object-cover rounded-t-lg"
      />

      <div className="relative p-6">
        <h1 className="text-2xl font-bold text-white mb-3">{title}</h1>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </Link>
  );
};
