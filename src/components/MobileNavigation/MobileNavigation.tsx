import styles from './MobileNavigation.module.css';
import { BsShop } from 'react-icons/bs';
import { VscHeart } from 'react-icons/vsc';
import { GiBasket } from 'react-icons/gi';
import { RxPerson } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleCart } from '../../app/slices/shopViewSlice';

const MobileNavigation = () => {
	const dispatch = useDispatch();

	return (
		<nav className={styles.mobileNavigation}>
			<Link to='/sklep' className={styles.mobileNavigation_iconBox}>
				<BsShop />
				<p>Sklep</p>
			</Link>
			<Link to='/' className={styles.mobileNavigation_iconBox}>
				<VscHeart />
				<span>0</span>
				<p>Ulubione </p>
			</Link>
			<div
				className={styles.mobileNavigation_iconBox}
				onClick={() => {
					dispatch(toggleCart(true));
				}}
			>
				<GiBasket />
				<span>0</span>
				<p>Koszyk</p>
			</div>
			<div className={styles.mobileNavigation_iconBox}>
				<RxPerson />
				<p>Moje Konto</p>
			</div>
		</nav>
	);
};

export default MobileNavigation;
