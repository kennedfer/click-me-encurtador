export const Button = (props) => (
  <button
    disabled={props.disabled}
    onClick={props.onClick}
    className="btn custom-font pad b-rounded no-border bg-primary c-white"
  >
    ENCURTAR
  </button>
);
