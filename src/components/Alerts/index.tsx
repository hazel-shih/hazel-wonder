import Info from "@/icons/info.svg";
import Check from "@/icons/check.svg";
import Warning from "@/icons/alert.svg";
import InfoRed from "@/icons/info-red.svg";

import Image from "next/image";
import "./style.scss";

interface AlertProperty {
  text: string;
}

export const InfoAlert: React.FC<AlertProperty> = ({ text }) => {
  return (
    <div className="alert info">
      <div>
        <Image src={Info} width={25} height={25} alt="info-icon" />
      </div>
      <p>{text}</p>
    </div>
  );
};

export const SuccessAlert: React.FC<AlertProperty> = ({ text }) => {
  return (
    <div className="alert success">
      <div>
        <Image src={Check} width={22} height={22} alt="info-icon" />
      </div>
      <p>{text}</p>
    </div>
  );
};

export const WarningAlert: React.FC<AlertProperty> = ({ text }) => {
  return (
    <div className="alert warning">
      <div>
        <Image src={Warning} width={22} height={22} alt="info-icon" />
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
