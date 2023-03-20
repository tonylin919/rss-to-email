import { Container } from '@react-email/container'
import { Head } from '@react-email/head'
import { Html } from '@react-email/html'
import { Link } from '@react-email/link'
import { Preview } from '@react-email/preview'
import { Section } from '@react-email/section'
import { Text } from '@react-email/text'
import { Dayjs } from 'dayjs'
import FeedSwitch from './FeedSwitch'
import { formatDate } from '../utils/formatter'
import { SettledFeed } from '../parseFeeds'
import Rejected from './Rejected'
import { parseIntro } from './parseIntro'

interface Props {
  feeds: SettledFeed[]
  itemCount: number
  actionUrl: string | undefined
  from: Dayjs
  initialRun: boolean
}

export default function Email({ feeds, itemCount, actionUrl, from, initialRun }: Props) {
  const intro = parseIntro(initialRun, itemCount, from)

  return (
    <Html>
      <Section>
        <Container>
          {feeds.map((feed, i) => {
            switch (feed.status) {
              case 'fulfilled':
                return <FeedSwitch key={feed.value.link} feed={feed.value} hasBottomSeparator={i < feeds.length - 1} />
              case 'rejected':
                return <Rejected key={feed.feed} feed={feed.feed} reason={feed.reason} />
            }
          })}
        </Container>
      </Section>
    </Html>
  )
}
