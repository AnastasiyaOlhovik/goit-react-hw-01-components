import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export const Profile = ({ profile: { avatar, username, tag, location, stats } }) => {
    return(
        <div class={styles.profile}>
            <div class={styles.description}>
                
        <img src={avatar}
            alt="User avatar"
            class={styles.avatar} />
                
                <p class={styles.name}>{username}</p>
                <p class={styles.tag}>@{tag}</p>
                <p class={styles.location}>{location}</p>
                
    </div>

    <ul class={styles.stats}>
       <li>
                    <span class={styles.label}>Followers</span>
                    <span class={styles.quantity}>{stats.followers}</span>
            </li>
        <li>    
                    <span class={styles.label}>Views</span>
                    <span class={styles.quantity}>{stats.views}</span>
            </li>
        <li>
                    <span class={styles.label}>Likes</span>
                    <span class={styles.quantity}>{stats.likes}</span>
        </li>     
        </ul>
        </div >
    );
};




Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
};

