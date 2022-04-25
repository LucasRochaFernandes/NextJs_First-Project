import { GetServerSideProps } from "next";

import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";
import styles from "./home.module.scss";

interface IHomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: IHomeProps) {
  return (
    <>
      <Head>
        <title>Home | Ignews</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>Hey, welcome</span>
          <h1>
            News about the <br /> <span>React</span> world
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img src="/images/avatar.png" alt="Girl coding" />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve("price_1KqTLmA5zTvovfUJzERj4uJz");

  // const price = await stripe.prices.retrieve("price_1KqTLmA5zTvovfUJzERj4uJz", {
  //   expand: ["product"],
  // });

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-Us", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };
  return {
    props: { product },
  };
};
