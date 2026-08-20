import "./Footer.css";

function Footer() {

  const year = new Date().getFullYear();

  return (

    <footer className="site-footer">

      <p>
        &copy; {year} Chiraag R. All rights reserved.
      </p>

      <nav aria-label="Social links">

        <a
          href="https://github.com/chiraagchiru01"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/company/135964220/admin/dashboard/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a href="mailto:chiraagchiru01@gmail.com">
          chiraagchiru01@gmail.com
        </a>

      </nav>

    </footer>
  );
}

export default Footer;