
import ClientMapWrapper from '@/shared/DarkMap/ClientMap';
import styles from './page.module.scss';
import Personal from '@/pages/AboutUs/Personal/Personal';
import AboutOurSocial from '@/pages/AboutUs/AboutOurSocial/AboutOurSocial';
import HowComeToUs from '@/pages/AboutUs/HowComeToUs/HowComeToUs';
import OtherPoV from '@/pages/AboutUs/OtherPoV/OtherPoV';

const AboutUs = () => {
  return (
    <>
      <Personal />
      <AboutOurSocial />
      <ClientMapWrapper width={100} height={322} />
      <HowComeToUs />
      <OtherPoV />
    </>
  );
};

export default AboutUs;
