import Proptypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './accountItems.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import Image from '../Images';

const cx = classNames.bind(styles);

function AccountItems({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image src={data.avatar} alt={data.nickname} className={cx('avatar')} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
                </h4>
                <span className={cx('username')}>@{data.nickname}</span>
            </div>
        </Link>
    );
}

// Check if props data is array or not, if not console will warning

AccountItems.propTypes = {
    data: Proptypes.object.isRequired,
};

export default AccountItems;
