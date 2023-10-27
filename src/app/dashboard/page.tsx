import styles from "@/styles/Dashboard.module.css";
import CategoryForm from "./CategoryForm";
import Categories from "./Categories";

const page = () => {
  return (
    <main className={styles.dashboard}>
      <div className="container">
        <div className={styles.flex}>
          <div className={styles.actions}>
            <CategoryForm />
          </div>
          <div className={styles.display}>
            <Categories />
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
