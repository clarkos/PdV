import Article from './ui/Article'
import Pagination from './ui/Pagination';

const Blog = () => {


  return (
    <div>
      <h1>Ultimas novedades</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-rows-auto gap-3">
        {/* {data.map((post: { id: number, userId: number, title: string, body: string }) => (
          <Article data={post} key={post.id} />
        ))} */}
      </div>
    </div>
  )
}

export default Blog