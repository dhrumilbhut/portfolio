const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} Dhrumil Bhut. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/50">
          Built with React & Vite
        </p>
      </div>
    </footer>
  );
};

export default Footer;
