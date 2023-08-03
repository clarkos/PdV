import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';

interface ArticleProps {
  data: {
    id: number;
    title: string;
    body: string;
    userId: number;
  }
}

const Article: React.FC<ArticleProps> = ({
  data
}) => {

  return (
    <article className=''>
      <Card className='flex flex-col'>
        <CardHeader className='flex-row justify-between items-center'>
          <CardTitle className=' font-bold break-before-auto'>
            {data.title}
          </CardTitle>
          <CardDescription>{data.id}</CardDescription>
        </CardHeader>
        <CardContent>
          {data.body}
        </CardContent>
        <CardFooter>
          <p className='text-xs font-light'>by User {data.userId}</p>
        </CardFooter>
      </Card>
    </article>
  )
}

export default Article