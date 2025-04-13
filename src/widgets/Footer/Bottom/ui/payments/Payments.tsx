import Image from "next/image"
import mastercard from "../../../../../../public/assets/images/mastercard.svg"
import applepay from "../../../../../../public/assets/images/applepay.svg"
import paypal from "../../../../../../public/assets/images/paypal.svg"
import visa from "../../../../../../public/assets/images/visa.svg"
import yamoney from "../../../../../../public/assets/images/yamoney.svg"

import styles from "./Payments.module.scss"

const Payments = () => {
    return (
        <div className={styles.payments}>
            <Image src={mastercard} alt="mastercard"></Image>
            <Image src={applepay} alt="applepay"></Image>
            <Image src={paypal} alt="paypal"></Image>
            <Image src={visa} alt="visa"></Image>
            <Image src={yamoney} alt="yamoney"></Image>
        </div>
    )
}

export default Payments
