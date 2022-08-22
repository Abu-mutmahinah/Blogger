const Footer = () => {
  return (
    <div className="footer-hero-container">
      <div className="footer-container">
        <div className="circle-container"></div>
        <h2 className="footer-heading">Subscribe to my blog.</h2>
        <p className="footer-subheading">I post fresh content every week.</p>
        <form action="">
          <input type="text" placeholder="Email address" required />
          <button className="footer-button">Subscribe</button>
        </form>
      </div>

      <div className="footer-copyright">Copyright 2022 - Jamiu Babatunde</div>
    </div>
  );
};

export default Footer;
