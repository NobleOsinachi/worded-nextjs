import Link from "next/link";

export default function Blog(props) {
    return (
        <>
            <h2>The Blog</h2>
            {props.posts.map((post, index) => {
                return (
                    <div key={index}>
                        <h3>
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <p>{post.content}</p>
                        <hr />
                    </div>
                );
            })}
        </>
    );
}

/* This function is used for pre-rendering static pages at build time. It allows you to fetch data from an API, database, or any other source, and return it as props to your page component. The data will be statically generated and cached, serving the same data to all users. */

// use for content EVERYONE will view
// Examples of using getStaticProps include fetching blog posts, product listings, or any data that doesn't require real-time updates.
export async function getStaticProps() {
    const response = await fetch("https://learnwebcode.github.io/json-example/posts.json");
    const data = await response.json();

    return {
        props: {
            posts: data.posts
        }
    };
}

// NOTES

/*

The decision of whether to use `getStaticProps` or `getServerSideProps` in Next.js depends on the specific requirements of your project and the nature of the data you need to fetch. Let's explore practical examples to understand when to use each method:

1. Use `getStaticProps` when:
   - You have data that can be pre-rendered at build time and remains the same for all users.
   - The data doesn't need to be updated frequently.
   - The data can be shared across multiple pages or components.
   - Example: A blog website where the list of blog posts is fetched from an external CMS. The list of blog posts doesn't change frequently, so you can use `getStaticProps` to pre-render the list at build time and serve it to all users. This approach ensures fast and efficient rendering for each request.

2. Use `getServerSideProps` when:
   - You have data that needs to be fetched and rendered on each request.
   - The data is personalized or varies for each user.
   - The data is frequently updated and needs to be fetched dynamically.
   - Example: A user profile page that displays personalized information. In this case, you would use `getServerSideProps` to fetch the user's data from a server-side source (e.g., a database) on each request. This ensures that the page always shows the most up-to-date information specific to each user.

To summarize:
- Use `getStaticProps` for fetching and pre-rendering data at build time when the data is static or doesn't change frequently.
- Use `getServerSideProps` for fetching data on each request, such as personalized or frequently updated data.

Remember that Next.js provides flexibility, and you can mix and match these methods within your project based on specific page requirements. Additionally, the Next.js documentation provides detailed explanations and more advanced scenarios for utilizing these data fetching methods, so it's always recommended to refer to the official documentation for further guidance.
*/
