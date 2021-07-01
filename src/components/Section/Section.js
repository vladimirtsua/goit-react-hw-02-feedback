import PropTypes from 'prop-types';
import styles from './section.module.css';

const Section = ({ title, children }) => (
	<section className={styles.section}>
		<h2 className={styles.section__title}>{title}</h2>
		{children}
	</section>
);

Section.propTypes = {
	title: PropTypes.string.isRequired,
};
export default Section;
