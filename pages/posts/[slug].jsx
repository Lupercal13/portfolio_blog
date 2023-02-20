import styles from "@/styles/Slug.module.css";
import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-ap-northeast-1.hygraph.com/v2/cle73oo220e3i01t6dfr58rbz/master"
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      datePublished
      author {
        id
        name
        avatar {
          url
        }
      }
      content {
        html
      }
      coverPhoto {
        id
        url
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export default function BlogPost({ post }) {
  return (
    // <main>
    //     <img src={post.coverPhoto.url} alt={post.title} />
    //     <div>
    //         <img src={post.author.avatar.url} alt={post.author.name} />
    //         <div>
    //             <p>By: {post.author.name}</p>
    //             <p>{post.datePublished}</p>
    //         </div>
    //     </div>
    //     <h2>{post.title}</h2>
    //     <div dangerouslySetInnerHTML={{__html: post.content.html}}></div>

    // </main>
    <div className="border-2 border-black rounded-xl m-2">

    <main className={styles.blog}>
      <h2 className="text-3xl mt-4 text-center md:text-left w-full border-b-2 border-gray-400 pb-2 mb-0">
        {post.title}
      </h2>
      <div className={styles.title}>
        {/* <img src={post.author.avatar.url} alt="" /> */}
        <div className={styles.authtext}>
          <h6>By {post.author.name} ||</h6>
          <h6 className={styles.date}>{post.datePublished}</h6>
        </div>
      </div>
      <div className="pb-2 border-b border-black">
        <img src={post.coverPhoto.url} className='w-full md:h-[500px] mt-4 rounded-3xl object-cover' alt="" />
      </div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content.html }}
      ></div>
    </main>
    </div>
  );
}
