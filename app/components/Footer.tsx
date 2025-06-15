import Logo from "@/components/Logo";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
      <div className="footer">
        <div className="flex flex-col md:flex-row md:justify-center md:items-center justify-center gap-10 md:gap-40">
        <div className="f-c-col items-start gap-1 md:gap-2 md:mr-[400px]">
          <Logo />
          <p className="text-secondaryText">
            Learn. Teach. Grow — all in one space.
          </p>
        </div>

        <div className="f-c-row gap-10">
        {/* Product */}
        <div className="f-c-col gap-2">
          <h6 className="text-primaryText/90 text-sm font-semibold">Product</h6>
          <Link href={"/"} className="hover:underline text-secondaryText text-xs md:text-base">
            Features
          </Link>
          <Link href={"/"} className="hover:underline text-secondaryText text-xs md:text-base">
            How it works
          </Link>
          <Link href={"/"} className="hover:underline text-secondaryText text-xs md:text-base">
            Start Teaching
          </Link>
          <Link href={"/"} className="hover:underline text-secondaryText text-xs md:text-base">
            Join a Classroom
          </Link>
          <Link href={"/"} className="hover:underline text-secondaryText text-xs md:text-base">
            Features
          </Link>
        </div>

        {/* Company */}
        <div className="f-c-col gap-2">
          <h6 className="text-primaryText/90 text-sm font-semibold">Company</h6>
          <Link href={"/"} className="hover:underline text-secondaryText text-xs md:text-base">
            About Us
          </Link>
          <Link href={"/"} className="hover:underline text-secondaryText text-xs md:text-base">
            What&apos; s New
          </Link>
          <Link href={"/"} className="hover:underline text-secondaryText text-xs md:text-base">
            Contact
          </Link>
          <Link href={"/"} className="hover:underline text-secondaryText text-xs md:text-base">
            Events
          </Link>
          <Link href={"/"} className="hover:underline text-secondaryText text-xs md:text-base">
            Careers
          </Link>
        </div>

        {/* Legal and Social */}
        <div className="f-c-col gap-2">
          <h6 className="text-primaryText/90 text-sm font-semibold">
            Legal and Social
          </h6>
          <Link href={"/"} className="hover:underline text-secondaryText text-xs md:text-base">
            Terms of Service
          </Link>
          <Link href={"/"} className="hover:underline text-secondaryText text-xs md:text-base">
            Privacy Policy
          </Link>
          <Link href={"/"} className="hover:underline text-secondaryText text-xs md:text-base">
            Refund Policy
          </Link>
          <Link href={"/"} className="hover:underline text-secondaryText text-xs md:text-base">
            Twitter
          </Link>
          <Link href={"/"} className="hover:underline text-secondaryText text-xs md:text-base">
            LinkedIn
          </Link>
        </div>
        </div>
      </div>
      <h4 className="text-primaryText font-semibold">
        © 2025 Acadro. Built with ❤️ in India.
      </h4>
    </div>
  );
};

export default Footer;
