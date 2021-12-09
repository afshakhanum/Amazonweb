function Box1(props) {
  return (
    <div>
      <p className="m-p1">{props.title}</p>
      <img className="categ" src={props.src} alt="" />
      <p className="m-p2">{props.caption}</p>
    </div>
  );
}

export default Box1;
