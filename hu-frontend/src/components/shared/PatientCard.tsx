import Image, { StaticImageData } from 'next/image';
import SwitchToggle from '../Form/SwitchToggle';
import { Message, Star } from '@/assets/icons/Icons';
import { Squircle } from 'corner-smoothing';
import { infoIcon } from "@/assets/images";

type Props = {
  name: string;
  age: number;
  gender: string;
  image: string | StaticImageData;
  online?: boolean;
};

const PatientCard = ({
  name,
  age,
  gender,
  image,
  online = false,
}: Props) => {
  return (
    <Squircle
      cornerRadius={30}
      as={'div'}
      className="patient-card"
    >
      <div className="patient-card-content">
        <Image src={image} alt={name} width={100} height={100} className="patient-image" />

        {/* Top Section */}
        <div className="patient-top-bar">
          {online && <span className="patient-online">Online</span>}

          <div className="patient-ai-toggle">
            <span><Star color="#fff" width={11} height={12} /> AI Response</span>
            <SwitchToggle isOn={true} setIsOn={() => {}} customClass="switch-sm" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="patient-content">
          <h2>{name}</h2>
          <p>
            {gender}, {age}yrs
          </p>

          <div className="patient-actions">
            <div className="patient-info">
              <Image
                src={infoIcon}
                alt="info"
                width={26}
                height={26}
                className="info-image"
              />
            </div>
            <div className="patient-message">
              <Message /> 1 New Message
            </div>
          </div>
        </div>
      </div>
    </Squircle>
  );
};
export default PatientCard;
