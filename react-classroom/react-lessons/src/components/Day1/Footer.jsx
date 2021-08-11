const Footer = (props) => {
  let date = new Date().getFullYear();
  return (
    <div>
      <p>© EFA {date}</p>
    </div>
  );
};

export default Footer;
