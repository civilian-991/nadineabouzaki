import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

interface SocialLinksProps {
  links: {
    facebook: string;
    twitter: string;
    linkedin: string;
  };
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "w-10 h-10 text-xs",
  md: "w-12 h-12 text-sm",
  lg: "w-14 h-14 text-base",
};

export default function SocialLinks({ links, size = "md" }: SocialLinksProps) {
  return (
    <div className="flex items-center gap-3">
      <a
        href={links.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className={`social-icon ${sizeClasses[size]}`}
        aria-label="Facebook"
      >
        <FaFacebookF />
      </a>
      <a
        href={links.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className={`social-icon ${sizeClasses[size]}`}
        aria-label="Twitter"
      >
        <FaTwitter />
      </a>
      <a
        href={links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={`social-icon ${sizeClasses[size]}`}
        aria-label="LinkedIn"
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
}
