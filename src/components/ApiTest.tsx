import { useState } from 'react'
import PostContainer from './PostContainer'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export default function ApiTest() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const fetchPosts = async () => {
    try {
      setLoading(prev => !prev)
      await new Promise(resolve => setTimeout(resolve, 5000))

      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (!res.ok) {
        throw new Error('Network response was not ok')
      }
      const data: Post[] = await res.json()

      setPosts(data)
      console.log(posts)
      setLoading(prev => !prev)
    } catch (error) {
      console.log('Error fetching posts:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div>
        <h1>Post from json </h1>
        <button onClick={fetchPosts} disabled={loading}>
          {loading
            ? 'Loading...'
            : `
            ${posts.length > 0 ? `Refresh Posts` : 'Fetch posts'}
      `}
        </button>

        {posts.length > 0 ? (
          <div>
            <h2>Posts = {posts.length}</h2>
            <ul id='posts-list'>
              {posts.map(post => (
                <li key={post.id} className='post-card'>
                  <PostContainer title={post.title} body={post.body} />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <h2>{loading ? 'Loading posts...' : 'No posts available'}</h2>
          </div>
        )}
      </div>
    </>
  )
}
