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
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{data.title}</CardTitle>
          <CardDescription>{data.id}</CardDescription>
        </CardHeader>
        <CardContent>
          {data.body}
        </CardContent>
        <CardFooter>
          <p>{data.userId}</p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Article