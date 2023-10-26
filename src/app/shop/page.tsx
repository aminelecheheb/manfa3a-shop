import Sidebar from "@/components/Sidebar";
import styles from "@/styles/Shop.module.css";

const page = () => {
  return (
    <main className={styles.shop_container}>
      <Sidebar />
      <div className={styles.shop}>
        <h1>جميع الفئات</h1>
      </div>
    </main>
  );
};

export default page;
