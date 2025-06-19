import SubscribeBtn from "./SubscribeBtn";
import WriteBtn from "./WriteBtn";

export default function ActionButtonsLayout() {
  return (
    <div className="d-flex gap-3 p-2">
       <WriteBtn />   
       <SubscribeBtn />   
    </div>
  );
}
