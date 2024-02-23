const Footer = () => {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t border-border/40">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Design & Developed by{" "}
          <a
            target="_blank"
            href="https://www.thecirclstudio.com/"
            className="font-medium underline underline-offset-4"
          >
            The Circl Studio
          </a>{" "}
          &{" "}
          <a
            target="_blank"
            href="https://www.webstack.in"
            className="font-medium underline underline-offset-4"
          >
            WebStack
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
