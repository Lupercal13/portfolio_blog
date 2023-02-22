import Link from "next/link";
import Image from "next/image";

function BlogCard({ title, author, coverPhoto, datePublished, slug, description }) {
  return (
    <div className="grid grid-cols-1 ">
        <div className="justify-center shadow-xl mt-4  mx-8 rounded-xl border-black/30 border-2 h-full bg-gray-200">
          <div className="pt-2 ">
            <img
              src={coverPhoto.url}
              alt={title}
              className=" object-cover h-[300px] w-[95%] my-4 rounded-xl mx-auto"
            />
          </div>
          <div className="flex flex-col  -mt-2 border-b px-8">
            <h2 className="text-lg md:text-2xl font-semibold text-center text-gray-900 ">{title}</h2>
            <p className="py-4 text-sm tracking-wide sm:text-base">{description}</p>
          </div>
          <div className="ml-8 flex items-end gap-2 mb-2 pt-2 w-full">
            <img src={author.avatar.url} alt={author.name}  className="w-[7%]" />
            <div className="">
                <Link href='/About'>
              <h3 className="font-semibold text-gray-600 hover:text-gray-800">{author.name}</h3></Link>
              <h3 className="text-xs text-gray-600">{datePublished}</h3>
            </div>
          </div>
      <Link href={"/posts/" + slug}>
            <div className="w-full flex sm:justify-center px-8 mb-4 ">

            <button className=" w-full sm:w-[60%] border-4 border-black rounded-2xl py-1 mt-6 bg-purple-500 text-black text-xl font-semibold tracking-wider hover:scale-[100.5%] hover:bg-purple-500/95">Read Now</button>
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
