import "./tooltip.scss";

function Tooltip(props) {
  const { children, text } = props;
  return (
    <div className="tooltip">
      {children} <p className="helperText">{text}</p>
    </div>
  );
}

export default Tooltip;
