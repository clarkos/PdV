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
      <Card className='flex flex-col h-[250px] overflow-x-auto'>
        <CardHeader className='flex-col items-start'>
          <CardTitle className='font-bold break-before-auto'>
            {data.title}
          </CardTitle>
          <CardDescription>{data.id} by User {data.userId}</CardDescription>
        </CardHeader>
        <CardContent className='text-xs'>
          {data.body}
        </CardContent>
        <CardFooter>
          <p className='text-xs font-light'></p>
        </CardFooter>
      </Card>
    </article>
  )
}

export default Article