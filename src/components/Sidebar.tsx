import styles from "@/styles/Layout.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h3>جميع الفئات</h3>
      <h3> أدوات كهرومنزلية</h3>
      <h3>إلكترونيات</h3>
      <h3> عتاد الرياضة</h3>
      <h3>ملابس رجالية</h3>
      <h3> عتاد التخييم</h3>
      <h3> أكسسوارات</h3>
    </div>
  );
};

export default Sidebar;
