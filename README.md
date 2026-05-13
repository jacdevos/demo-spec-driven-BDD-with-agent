# Demo: Spec-driven BDD with Agentic Development

> This repo showcases the concepts covered in the article ["BDD for Spec-driven Agentic Development"](https://jacques.nreality.com/2026-05-13/executable-markdown-specs-agentic-coding).

## What this demo shows

Using **Markdown-based specifications that can be executed as tests** to do two things:

1. **Drive a spec-driven agent development flow** — giving agents concrete, executable behaviour specs upfront instead of vague prompts.

2. **Keep specs honest over time** — the same specs run as tests in CI, so they don't just validate the code, they validate themselves. If behaviour changes and the spec is wrong, the build fails. This prevents spec drift.

## Why Markdown and Gauge

LLMs work really well with Markdown, and [Gauge](https://gauge.org/) is a BDD test framework that uses Markdown as its native spec format.

## The loop

```
Prompt with a Spec → Agent Plans → Agent Builds → Agent Runs Tests
```

## Running the specs

```bash
npm install
npm test
```
