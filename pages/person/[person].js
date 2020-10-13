import Layout from "../../components/layout";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import { useRouter } from "next/router";
// import Link from 'next/link'
import data from "../../public/data.json";
import { motion } from "framer-motion";
import constants from "../../components/constants";
import Brief_view from "../../components/brief_view";

export default function person() {
  const router = useRouter();
  const { person } = router.query;

  const briefe_list = data.briefe.filter(function (item) {
    return item.id.includes(Number(person));
  });

  const item = data.familie.filter((data) => {
    return data.id === person;
  });

  return (
    <Layout>
      <Head>
        <title>Person</title>
      </Head>

      <motion.div
        className="scrollable"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={constants.animation.section_exit}
      >
        <Familie data={item} />
        <Brief_view data={briefe_list} />
      </motion.div>
    </Layout>
  );
}

export function Familie({ data }) {
  return data.map((data) => {
    return (
      <div className="item" key={`${data.id}`}>
        <motion.div
          key={`familie${data.id}`}
          variants={constants.animation.post}
          layoutId={`${data.id}`}
        >
          {/* <Link href="/person/[person]" as={`/person/${data.id}`}> */}
          <div className="item_preview">
            <img src={`../pictures/personen/thumbnails/${data.picture}`} />
            <div className="item_description">
              <h2>{data.name}</h2>
              <p>{data.beschreibung}</p>
            </div>
          </div>
          {/* </Link> */}
        </motion.div>
      </div>
    );
  });
}
