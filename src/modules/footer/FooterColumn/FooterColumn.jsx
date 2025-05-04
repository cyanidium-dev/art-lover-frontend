import styles from "./FooterColumn.module.scss";

const FooterColumn = ({title, children})=> {
    return (
      <div className="mb-[32px] xl:mb-0">
        <p className={`${styles.title} mb-[24px] xl:mb-[32px]`}>{title}</p>
        {children}
      </div>
    )
}

export default FooterColumn;
