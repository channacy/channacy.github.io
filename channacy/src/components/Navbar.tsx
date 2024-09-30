import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div class="navbar">
        <ul>
          <li>
            <a class="header" href="/">
              Channacy Un
            </a>
            <a class="subheader" href="/about">
              About
            </a>
          </li>
          <li>
            <a class="header" href="/projects">
              Projects
            </a>
            <a class="subheader" href="/web">
              Web
            </a>
            <a class="subheader" href="/ai">
              AI/ML
            </a>
            <a class="subheader" href="/mobile">
              Mobile
            </a>
            <a class="subheader" href="/other">
              Other
            </a>
          </li>
          <li>
            <a class="header" href="/education">
              Education
            </a>
            <a class="subheader" href="/courses">
              Courses
            </a>
          </li>
          {/* <li>
            <a class="header" href="#">
              Experience
            </a>
            <a class="subheader" href="#">
              Professional
            </a>
            <a class="subheader" href="#">
              Volunteer
            </a>
            <a class="subheader" href="#">
              Research
            </a>
          </li> */}
          {/* <li>
            <a class="header" href="#">
              Blog
            </a>
            <a class="subheader" href="#">
              Sept 2024
            </a>
          </li> */}
          <li>
            <a class="header" href="#">
              Contact
            </a>
            <a class="subheader" href="https://github.com/channacy" target="_blank">
              GitHub
            </a>
            <a class="subheader" href="mailto:channacyun@gmail.com">
              Gmail
            </a>
            <a class="subheader" href="https://www.linkedin.com/in/channacy-un" target="_blank">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
