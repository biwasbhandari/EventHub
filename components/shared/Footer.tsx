import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/" aria-label="EventHub Home">
          <Image
            src="/assets/images/logo.svg"
            alt="EventHub Logo"
            width={128}
            height={38}
            priority
          />
        </Link>

        <p>&copy; {currentDate} EventHub. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
