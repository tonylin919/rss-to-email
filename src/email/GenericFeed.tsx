import { Container } from '@react-email/container'
import { Hr } from '@react-email/hr'
import { Link } from '@react-email/link'
import { Section } from '@react-email/section'
import { Text } from '@react-email/text'
import { Output } from 'rss-parser'
import { CustomItem } from '../parseFeeds'
import { formatDate } from '../utils/formatter'
import Summary from './Summary'

interface Props {
  feed: Output<CustomItem>
  hasBottomSeparator: boolean
}

export default ({ feed, hasBottomSeparator }: Props) => {
  return (
    <Container>
      {feed.items.map((item) => (
        <Container key={item.guid}>
          <Link href={item.link}>
            {item.title}
          </Link>
        </Container>
      ))}
    </Container>
  )
}
