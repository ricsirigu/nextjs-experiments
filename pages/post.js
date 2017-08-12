import Layout from '../components/MyLayout'
import fetch from 'isomorphic-unfetch'

const Post = (props) => (
    <Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?.>/g, '')}</p>
        <img src={props.show.image.medium} />
        <style jsx>{`
            h1, p {
                font-family: "Arial";
            }
        `}</style>
    </Layout>
)

Post.getInitialProps = async (context) => {
    const { id } = context.query
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await res.json()

    console.log(`Fetched show: ${show.name}`)

    return { show }
}

export default Post