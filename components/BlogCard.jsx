import Link from "next/link";
import styles from "../styles/BlogCard.module.css";
function BlogCard({ title, author, coverPhoto, datePublished, slug }) {
  return (
    <div className="grid grid-cols-1">
        <div className="justify-center shadow-xl mt-4  mx-8 rounded-xl border-black/30 border-2 h-full ">
          <div className="pt-2 ">
            <img
              src={coverPhoto.url}
              alt={title}
              className=" object-cover h-[300px] w-full px-4 py-4"
            />
          </div>
          <div className="flex flex-col items-center -mt-2 border-b px-3 ">
            <h2 className="text-lg md:text-xl ">{title}</h2>
          </div>
          <div className="ml-8 flex items-end gap-4 mb-2 pt-2 w-full">
            <img src={author.avatar.url} alt={author.name} className="w-[8%]" />
            <div className="">
              <h3 className="font-semibold">{author.name}</h3>
              <h3 className="text-xs">{datePublished}</h3>
            </div>
          </div>
      <Link href={"/posts/" + slug}>
            <div className="w-full flex flex-col px-8 mb-4">

            <button className="border-4 border-black p-2 mt-6 bg-blue-200 font-semibold tracking-wider hover:scale-[100.5%] hover:bg-blue-100">Read Now</button>
            </div>
      </Link>
        </div>
    </div>

    // <div className={styles.card}>
    //   <Link href={"/posts/" + slug}>
    //     <div className={styles.imgContainer}>
    //       <img src={coverPhoto.url} alt="" />
    //     </div>
    //   </Link>
    //   <div className={styles.text}>
    //     <h2>{title}</h2>
    //     <div className={styles.details}>
    //       <div className={styles.author}>
    //         <img src={author.avatar.url} alt="" />
    //         <h3>{author.name}</h3>
    //       </div>
    //       <div className={styles.date}>
    //         <h3>{datePublished}</h3>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default BlogCard;
