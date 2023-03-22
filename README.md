# RSS to Email

This project sets up email updates based on RSS feeds.

## Configuration

[feeds.ts](src/feeds.ts) contains RSS feed(s)

[cron schedule](.github/workflows/send-email.yaml#L5) in the workflow file. Refer to [crontab guru](https://crontab.guru/)

[repository variables](../../settings/variables/actions) in settings:
   - `SMTP_SERVER` for example: smtp.gmail.com
   - `SMTP_PORT` for example: 587

[repository secrets](../../settings/secrets/actions) in settings:
   - `MAIL_TO` the mail address to send the email to
   - `SMTP_USERNAME`
   - `SMTP_PASSWORD`
