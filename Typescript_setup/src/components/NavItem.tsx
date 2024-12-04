import { Link } from "react-router-dom";
import { useAnimate } from "framer-motion";
import { useEffect, useRef } from "react";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const NavItem = ({ href, children, className }: NavItemProps) => {
  const [_, animate] = useAnimate();
  const liRef = useRef<HTMLLIElement | null>(null);
  useEffect(() => {
    if (liRef.current) {
      const controls = animate([[liRef.current, { opacity: 1, x: 0, transition: { duration: 0.8 } }]]);

      controls.speed = 0.8;

      return () => controls.stop();
    }
  }, [animate]);

  return (
    <li ref={liRef} style={{ opacity: 0, transform: "translateX(-100%)" }}>
      <Link
        to={href}
        className={`text-base text-violet-900 text-opacity-70 hover:text-opacity-30 ${className} font-lato`}
      >
        {children}
      </Link>
    </li>
  );
};
