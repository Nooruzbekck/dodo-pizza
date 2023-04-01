import styles from "./NotFoundBlock.module.scss";

export const NotFoundBlock = () => {
  return (
    <div>
      <h1 className={styles.root}>
        <span>:(</span> <br /> Ничего не найдено{" "}
      </h1>
      <p className={styles.description}>
          K сожаления данная страница отсуствует в нашем интернет-магазине
      </p>
    </div>
  );
};
