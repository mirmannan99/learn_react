type MessageProps = { title: number; message: string }

export default function Message({ title, message }: MessageProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  )
}
