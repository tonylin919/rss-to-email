# RSS to Email

Stay on top of your favorite RSS feeds - on your own terms. This project allows you to set up custom email updates based on the RSS feeds you specify, all within the comfort of your own Github account.

[Forked from bdevos / rss-to-email](https://github.com/bdevos/rss-to-email)

## How does it work

- Github workflow runs on a schedule
- Workflow retrieves updates from your RSS feeds since its last successful run
- Workflow sends the updates through a SMTP server of your choice

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

## Local dev server

This project includes a local dev server to view and modify the email template based on your RSS feeds.

Start the dev server:

```bash
npm install
npm run dev
```

## How does it work

Rendering the email starts in the [`renderEmail`](src/renderEmail.tsx) function. It will retrieve and parse the feeds, and trigger rendering the email with the [`Email`](src/email/Email.tsx) component.

## Build on top of

- [react-email](https://github.com/resendlabs/react-email)\
  This project is what triggered me to create this repo. It is still very beta, but if we can ditch all the clunky specialized tools for creating email layouts and replace them with a React / Typescript based solution :heart:
- [vite](https://vitejs.dev/)\
  For rendering and the dev server. Had to do some hacking to get it working well with HMR and my cache implementation is :poop:. But Vite itself is :fire:
- [dawidd6/action-send-mail](https://github.com/dawidd6/action-send-mail)\
  Github Action to send out emails, just bring your own SMTP provider
