export const DivError = (props) => (
  <div className={props.error == "" ? "invisible" : "visible half-op"}>
    <div className="b-rounded full-w ta-center half-pad c-error ts-small bg-secondary">
      {props.error}
    </div>
  </div>
);
