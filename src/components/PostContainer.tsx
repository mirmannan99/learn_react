type Props = {
  title: string
  body: string
}

export default function PostContainer({ title, body }: Props) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        margin: '10px 0',
      }}
    >
      <h4
        style={{
          margin: '0 0 10px 0',
          fontSize: '1.2em',
          color: 'green',
        }}
      >
        {title}
      </h4>
      <p style={{ margin: '0 0 10px 0' }}>{body}</p>
    </div>
  )
}
