var NewComponent = React.createClass({
  render: function () {
    return (
      <div className="css-1kvwy4l-Box ef9av0h0">
        <label
          className="od-radio-label css-1hwfe2g-RadioLabel e11l498p0"
          style={{
            background: "unset",
            border: "1px solid rgb(217, 224, 230)",
            padding: "20px 16px",
          }}>
          <input
            type="radio"
            name="seller.relation_to_owner"
            className="css-9rf2l-RadioInput e11l498p2"
            defaultValue="Self"
          />
          <span className="css-2wggy3-RadioContent e11l498p1">I am the owner of this home</span>
        </label>
        <label
          className="od-radio-label css-1hwfe2g-RadioLabel e11l498p0"
          style={{
            background: "unset",
            border: "1px solid rgb(217, 224, 230)",
            padding: "20px 16px",
          }}>
          <input
            type="radio"
            name="seller.relation_to_owner"
            className="css-9rf2l-RadioInput e11l498p2"
            defaultValue="Agent"
          />
          <span className="css-2wggy3-RadioContent e11l498p1">I am a realtor or agent</span>
        </label>
        <label
          className="od-radio-label css-1hwfe2g-RadioLabel e11l498p0"
          style={{
            background: "unset",
            border: "1px solid rgb(217, 224, 230)",
            padding: "20px 16px",
          }}>
          <input
            type="radio"
            name="seller.relation_to_owner"
            className="css-9rf2l-RadioInput e11l498p2"
            defaultValue="AgentAndOwner"
          />
          <span className="css-2wggy3-RadioContent e11l498p1">
            I am both the homeowner and an agent
          </span>
        </label>
        <label
          className="od-radio-label css-1hwfe2g-RadioLabel e11l498p0"
          style={{
            background: "unset",
            border: "1px solid rgb(217, 224, 230)",
            padding: "20px 16px",
          }}>
          <input
            type="radio"
            name="seller.relation_to_owner"
            className="css-9rf2l-RadioInput e11l498p2"
            defaultValue="other"
          />
          <span className="css-2wggy3-RadioContent e11l498p1">Other</span>
        </label>
      </div>
    );
  },
});
