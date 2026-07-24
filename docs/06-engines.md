# SPEDO Engines

Version: 2.0

Last Updated: June 2026

---

# Introduction

Engines are the computational heart of SPEDO.

Every complex business operation is executed by an Engine.

Services coordinate work.

Engines perform work.

Repositories provide data.

This separation keeps the platform clean and scalable.

---

# Position Inside Architecture

```
Application

↓

Runtime

↓

Kernel

↓

Services

↓

Engines

↓

Repositories

↓

Projects

↓

Units
```

An Engine never communicates directly with the UI.

---

# Purpose

An Engine is responsible for executing one business capability.

Examples include:

Searching

Importing

Building

Comparing

Analyzing

Generating

Validating

Calculating

Predicting

Every Engine should solve exactly one problem.

---

# Current Engines

The current SPEDO Core already contains:

## Search Engine

Responsible for searching property units.

Capabilities:

- Filtering

- Sorting

- Availability

- Bedrooms

- Price

- Area

- View

- Custom filters

---

## Project Engine

Responsible for loading projects.

Capabilities:

- Project registration

- Metadata

- Units

- Assets

- Discovery

- Project lifecycle

---

## Import Engine

Responsible for importing official developer data.

Capabilities:

- Excel parsing

- Data validation

- Cleaning

- Normalization

- Unit creation

---

## Builder

Responsible for generating production-ready files.

Capabilities:

- Build units

- Generate TypeScript

- Validate structure

- Export project data

---

# Future Engines

The architecture is prepared for:

Investment Engine

Comparison Engine

Pricing Engine

ROI Engine

Mortgage Engine

Recommendation Engine

Analytics Engine

Notification Engine

CRM Engine

Lead Engine

GIS Engine

Translation Engine

SEO Engine

Media Engine

Authentication Engine

AI Engine

Every major capability becomes its own Engine.

---

# Engine Rules

Every Engine must:

Have one responsibility.

Be testable.

Be framework independent.

Be reusable.

Be deterministic.

Avoid side effects whenever possible.

---

# Engine Communication

Correct

```
Application

↓

Search Service

↓

Search Engine

↓

Repository
```

Incorrect

```
Page

↓

Search Engine
```

Incorrect

```
React Component

↓

Import Engine
```

UI never owns Engines.

---

# Engine Independence

Engines should never know:

React

Next.js

HTML

CSS

Browser APIs

Rendering

They operate only on business objects.

---

# Engine Inputs

An Engine receives structured data.

Example:

```
SearchQuery

↓

Search Engine

↓

SearchResult
```

Another example:

```
Excel File

↓

Import Engine

↓

Imported Units
```

Everything is strongly typed.

---

# Engine Outputs

Every Engine returns structured objects.

Never HTML.

Never JSX.

Never React Components.

This allows the same Engine to work in:

Website

Admin Panel

Desktop App

Mobile App

API

AI Assistant

without modification.

---

# Engine Lifecycle

```
Receive Request

↓

Validate

↓

Execute

↓

Return Result
```

The Engine never stores UI state.

---

# Testing

Every Engine must have its own test.

Example:

```
tools/

test-search.ts

test-project-engine.ts

test-runtime.ts

test-app.ts
```

Future engines must follow the same standard.

---

# Current Status

Implemented

✅ Search Engine

✅ Project Engine

✅ Import Engine

✅ Builder

Pending

⬜ Investment Engine

⬜ ROI Engine

⬜ Comparison Engine

⬜ Recommendation Engine

⬜ AI Engine

⬜ CRM Engine

⬜ GIS Engine

⬜ Analytics Engine

---

# Long-Term Vision

Eventually SPEDO will contain dozens of independent Engines.

Each Engine will solve one business problem.

Together they will form the complete SPEDO Core.

This modular approach allows the platform to evolve without rewriting existing systems.

---

# Engineering Rule

Services coordinate.

Engines execute.

Repositories provide data.

The UI only consumes the results.