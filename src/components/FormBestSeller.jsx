import Card from "./Card";
import styles from '../css/BestSeller.module.css'

function FormBestSeller() {
    return(
        <>
            <div className={styles.bodyDistributed}>
                <Card image={'https://media.s-bol.com/m7krYROP5VR0/r01XkD6/550x782.jpg'}/>
                <Card image={'https://media.s-bol.com/m7krYROP5VR0/r01XkD6/550x782.jpg'}/>
                <Card image={'https://media.s-bol.com/m7krYROP5VR0/r01XkD6/550x782.jpg'}/>
                <Card image={'https://media.s-bol.com/m7krYROP5VR0/r01XkD6/550x782.jpg'}/>
            </div>

            <div className={styles.bodyDistributed}>
                <Card image={'https://media.s-bol.com/m7krYROP5VR0/r01XkD6/550x782.jpg'}/>
                <Card image={'https://media.s-bol.com/m7krYROP5VR0/r01XkD6/550x782.jpg'}/>
                <Card image={'https://media.s-bol.com/m7krYROP5VR0/r01XkD6/550x782.jpg'}/>
                <Card image={'https://media.s-bol.com/m7krYROP5VR0/r01XkD6/550x782.jpg'}/>
            </div>
        </>
    );
}

export default FormBestSeller;