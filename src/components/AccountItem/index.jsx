import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/235409ab36b0531ee42013689aac26be~c5_100x100.jpeg?x-expires=1693792800&x-signature=z%2B6AsKUyqsQif2Ph9rYpy23HEBs%3D"
                className={cx('avatar')}
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Văn A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>abc</span>
            </div>
        </div>
    );
}

export default AccountItem;
