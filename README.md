# BeyondBotz

BeyondBotz is a student-led FTC robotics research platform founded by Arsh Bhatia. It documents autonomous testing, match analysis, mentorship study, educational accessibility, and community-facing resources with clear labels for demo data and planned research.

This repository contains the production-ready Next.js website for beyondbotz.com. The site is structured so real trial logs, survey results, public match notes, and publications can be added later without rebuilding the project.

## Admissions Snapshot

### Mission Statement

BeyondBotz documents FTC robotics problems with honest methods, clear data labels, and resources that help students test, debug, and explain their engineering decisions.

### Elevator Pitch

BeyondBotz is a student-led FTC research platform that studies the parts of robotics competition students often notice but do not always measure: autonomous reliability, scouting notes, mentoring habits, and resource accessibility. It starts with realistic questions from FTC practice, then turns them into protocols, demo dashboards, benchmark rubrics, survey modules, and public writeups that another team could review or reuse.

### 150-Word Project Description

BeyondBotz is a student-led FTC robotics research platform founded by Arsh Bhatia to document the questions that appear during real competition work: why an autonomous route misses, which scouting notes help drive decisions, how mentoring changes debugging confidence, and what makes robotics resources usable for newer students. The project is intentionally static and transparent at this stage. Demo dashboards and benchmark scores are labeled as examples, while the site structure is ready for future trial logs, survey responses, public match review, and methodology notes. BeyondBotz combines robotics engineering, data analysis, and educational accessibility by turning practice-room problems into repeatable protocols: route sheets, scoring rubrics, survey modules, and resource audits. Its purpose is not to claim finished research before data exists. It is to build the habit of asking better FTC questions, collecting context carefully, and publishing materials that another student or team can check, reuse, and improve during FTC seasons.

### Resume Bullet

- Founded and built BeyondBotz, a student-led FTC robotics research platform that organizes autonomous benchmark protocols, demo analytics dashboards, survey modules, ethics notes, and educational resources for teams while clearly separating sample data from measured results.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint
- Vercel-ready static deployment

## Installation

Install dependencies:

```bash
pnpm install
```

## Local Development

Start the local development server:

```bash
pnpm dev
```

Open `http://localhost:3000`.

## Build Instructions

Run the production build:

```bash
pnpm build
```

Run linting:

```bash
pnpm lint
```

Run TypeScript checks:

```bash
pnpm typecheck
```

## Vercel Deployment

1. Push the repository to GitHub.
2. Open Vercel and choose **Add New Project**.
3. Import the BeyondBotz repository.
4. Keep the framework preset as **Next.js**.
5. Use the default build command:

```bash
pnpm build
```

6. Deploy.

No database, authentication, paid APIs, or server-only services are required.

## GitHub Pages Deployment

The repository includes a GitHub Actions workflow at `.github/workflows/pages.yml` that builds a static export and deploys the `out` folder to GitHub Pages.

To enable it:

1. Open the repository on GitHub.
2. Go to **Settings** > **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main` or run the **Deploy GitHub Pages** workflow manually from the **Actions** tab.

For the temporary GitHub Pages URL, the workflow sets:

```text
NEXT_PUBLIC_BASE_PATH=/BeyondBotz
```

That makes the site work at:

```text
https://shyha13.github.io/BeyondBotz/
```

When `beyondbotz.com` is connected to GitHub Pages later, remove the `NEXT_PUBLIC_BASE_PATH` line from `.github/workflows/pages.yml` so links and assets resolve from the domain root.

## Connecting beyondbotz.com

1. In Vercel, open the deployed project.
2. Go to **Settings** > **Domains**.
3. Add `beyondbotz.com`.
4. Add `www.beyondbotz.com` if you want the `www` version too.
5. Follow Vercel's DNS instructions at your domain registrar.
6. Common records are:

```text
A     @      76.76.21.21
CNAME www    cname.vercel-dns.com
```

7. Wait for DNS propagation and verify both the apex and `www` domain in Vercel.

## Content Notes

All placeholder research copy and demo data live in `src/data`. The dashboard and benchmark pages clearly label sample/demo data so the site does not imply unverified accomplishments or measured results.
