import Link from "next/link";
import { motion } from "framer-motion";
import constants from "./constants";
import { FiArrowRight } from "react-icons/fi";
import Image from 'next/image';

export default function Brief({ data }) {
  // digitalisate rotate random
  const min = -2;
  const max = 2;

  const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
  }

  return data.map((data, id) => {
    return (
      <div className="item" key={`briefe-${data.id}`}>
        <Link
          href={`/brief/${data.id}`}
          as={`/brief/${data.id}`}
          scroll={false}
        >
          <a>
            <motion.div
              whileTap={{ scale: constants.animation.interaction.whiletap }}
              key={`brief-motion-${data.id}`}
              className="item_preview"
              variants={constants.animation.post}
              layoutId={`${data.id}`}
            >
              {/* bild */}
              {data.digitalisate.page.map((item, index) => (
                <>
                  {/* <img
                    style={{
                      transform: `rotate(${
                        min + Math.random() * (max - min)
                      }deg)`,
                    }}
                    src={`../../pictures/digitalisate/${item}`}
                    key={index}
                  /> */}
                  <Image key={index} alt="Vercel logo" src={`/pictures/digitalisate/${item}`} layout='fill' loading="lazy" />
                  {/* <Image
                    alt="Next.js logo"
                    src="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png"
                    // width={600}
                    // height={400}
                    layout='fill'
                    loading="lazy"
                  /> */}

                </>
              ))}

              <div className="item_description">
                <h4>{data.datum}</h4>
                <h2>
                  <span className="sender_name">{data.sender.name}</span>
                  <br></br>
                  <span className="empfänger_name">
                  <img className="small-icon" src="../icons/forward.svg" />
                  {data.empfänger.name}
                  </span>
                </h2>
                {/* themen */}
                {data.themen.name.map((item, index) => (
                  <p>{item}</p>
                ))}
              </div>
            </motion.div>
          </a>
        </Link>
      </div>
    );
  });
}
