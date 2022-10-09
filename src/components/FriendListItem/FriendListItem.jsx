import PropTypes from "prop-types";
import styles from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li class={styles.item} >
            <span class={isOnline ? styles.online : styles.ofline}>{isOnline}</span>
            <img class={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p class={styles.name}>{name}</p>
        </li>
    )

}

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired

}