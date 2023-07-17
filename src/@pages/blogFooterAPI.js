import Link from "next/link";

export default function BlogFooterApi(props) {
    return (
        <>
            <h2>The blogFooterApi</h2>
            {props.posts.map((post, index) => {
                return (

                    <>
                        hello world
                    </>
                );
            })}
        </>
    );
}


/* This function is used for pre-rendering static pages at build time. It allows you to fetch data from an API, database, or any other source, and return it as props to your page component. The data will be statically generated and cached, serving the same data to all users. */
export async function getStaticProps() {
    const response = await fetch("https://learnwebcode.github.io/json-example/posts.json");
    const data = await response.json();

    return {
        props: {
            posts: data.posts
        }
    };
}
