import Logo from "./assets/Logo.png";

const Footer = () => {
  return (
    <footer
      className="footer p-10 bg-base-200 text-base-content"
      style={{ position: "absolute", bottom: 0 }}
    >
      <aside>
        <img src={Logo} />
      </aside>
      <nav>
        <header className="footer-title">About Us</header>
        <p>Chingu</p>
        <p>Voyage 46</p>
        <p>Team 35</p>
      </nav>
      <nav>
        <header className="footer-title">Contributors</header>
        <p>Amber Hunt</p>
        <p>Bianca Benitez</p>
        <p>Chris Yoo</p>
        <p>Jamal Kayed</p>
        <p>Yi Lin</p>
      </nav>
      <nav>
        <header className="footer-title">GitHub</header>
        <a
          className="link link-hover"
          href="https://github.com/amberhunt955"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/amberhunt955
        </a>
        <a
          className="link link-hover"
          href="https://github.com/siasktv"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/siasktv
        </a>
        <a
          className="link link-hover"
          href="https://github.com/keldim"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/keldim
        </a>
        <a
          className="link link-hover"
          href="https://github.com/Yuroq"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/Yuroq
        </a>
        <a
          className="link link-hover"
          href="https://github.com/yi-lin-1234"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/yi-lin-1234
        </a>
      </nav>
    </footer>
  );
};
export default Footer;
