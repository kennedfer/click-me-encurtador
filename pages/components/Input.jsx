export const Input = (props) => (
  <input
    onChange={(e) => props.setValue(e.target.value)}
    placeholder={props.placeholder}
    className="fg-1 custom-font pad b-rounded bg-secondary no-border c-gray"
    type="text"
  />
);
