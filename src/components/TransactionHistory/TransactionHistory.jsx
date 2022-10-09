import styles from './TransactionHistory.module.css';
import PropTypes from "prop-types";

export const TransactionHistory = ({ items }) => {
    return (
        <table class={styles.transaction}>
            <thead>
                <tr class={styles.title}>
                    <th class={styles.th}>Type</th>
                    <th class={styles.th}>Amount</th>
                    <th class={styles.th}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <tr key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                ))}
            </tbody>


        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        })
    )

}