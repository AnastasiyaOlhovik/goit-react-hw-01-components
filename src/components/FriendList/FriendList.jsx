import styles from './FriendList.module.css';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from "prop-types";


export const FriendList = ({ friends }) => {
    return (
        <ul class={styles.friendlist}>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    isOnline={isOnline}
                    name={name}

                />
            )
            )}
        </ul>
    )
}
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        })
    )

}