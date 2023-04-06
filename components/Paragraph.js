import styles from './paragraph.module.scss';

const Paragraph = ({children}) => {
    return <p className={StyleSheet.paragraph}>
        {children}
    </p>
}
export default Paragraph;