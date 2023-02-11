const Notification = (props) => {
  const { className, Text, v } = props;
  return (
    <div className={`div ${className}`}>
      <img className="forImg" src={v} />

      <p className="forpara">{Text}</p>
    </div>
  );

  //  Write your code here.
};

const element = (
  <div className="for_background">
    <h1 className="forHeader">Notifications</h1>
    <div>
      <Notification
        className="Information_Message"
        Text="Information Message"
        v="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        className="Success_Message"
        Text="Success Message"
        v="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        className="Warning_Message"
        Text="Warning Message"
        v="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        className="Error_Message"
        Text="Error Message"
        v="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
  //  Write your code here.
);
//  <Notification className="Warning_Message" Text="Warning Message"/>
//                  <Notification className="Error_Message" Text="Error Message"/>
ReactDOM.render(element, document.getElementById("root"));
