import Article from './ui/Article'

const Blog = async () => {

  const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())

  // console.log(posts);

  return (
    <div>
      <h1>Ultimas novedades</h1>
      {posts.map(post => (
        <Article data={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Blog