import styles from './Statistics.module.css';
import PropTypes from 'prop-types';


export const Statistics = ({ title, stats }) => {
    return (
        <section class={styles.statistics}>
            {title && <h2 class={styles.title}>{title}</h2>}

            <ul class={styles.list}>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <li class={styles.item}
                            key={id}
                            style={{ backgroundColor: randomColor() }} >
                            <span class={styles.label}>{label}</span>
                            <span class={styles.percentage}>{percentage}%</span>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
};

export default function randomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}