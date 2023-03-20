import { Container } from '@react-email/container'
import { Link } from '@react-email/link'
import { Text } from '@react-email/text'

interface Props {
  feed: string
  reason: any
}

export default ({ feed, reason }: Props) => {
  return (
    <Container>
      <Text>
        <Link href={feed}>
          {feed}
        </Link>
      </Text>
      <Text>Reason: {JSON.stringify(reason)}</Text>
    </Container>
  )
}
