import Info from "@/icons/info.png";
import Check from "@/icons/check.png";
import Warning from "@/icons/alert.png";
import InfoRed from "@/icons/info-red.png";

import Image from "next/image";
import "./style.scss";

interface AlertProperty {
  text: string;
}

export const InfoAlert: React.FC<AlertProperty> = ({ text }) => {
  return (
    <div className="alert info">
      <div>
        <Image src={Info} width={22} height={22} alt="info-icon" />
      </div>
      <p>{text}</p>
    </div>
  );
};

export const SuccessAlert: React.FC<AlertProperty> = ({ text }) => {
  return (
    <div className="alert success">
      <div>
        <Image src={Check} width={21} height={21} alt="info-icon" />
      </div>
      <p>{text}</p>
    </div>
  );
};

export const WarningAlert: React.FC<AlertProperty> = ({ text }) => {
  return (
    <div className="alert warning">
      <div>
        <Image src={Warning} width={23} height={23} alt="info-icon" />
      </div>
      <p>{text}</p>
    </div>
  );
};

export const ErrorAlert: React.FC<AlertProperty> = ({ text }) => {
  return (
    <div className="alert error">
      <div>
        <Image src={InfoRed} width={22} height={22} alt="info-icon" />
      </div>
      <p>{text}</p>
    </div>
  );
};
