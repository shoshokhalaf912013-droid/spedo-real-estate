# SPEDO Services

Version: 2.0

Last Updated: June 2026

---

# Introduction

Services represent the Business Layer of SPEDO.

Every business capability is exposed through a Service.

The User Interface never communicates directly with Engines or Repositories.

Instead, it communicates only with Services.

This keeps the architecture clean, reusable, and maintainable.

---

# Why Services Exist

Without Services, every page would have to know:

- which Engine to use
- which Repository to access
- how to combine data
- where business logic lives

Services eliminate this complexity.

They provide one simple interface to the platform.

---

# Current Architecture

```
Application

↓

Runtime

↓

Kernel

↓

Service Container

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

---

# Current Services

SPEDO currently contains:

## Search Service

Responsible for property searching.

Responsibilities:

- receive search request
- validate query
- execute Search Engine
- return results

The UI never talks to Search Engine directly.

---

## Project Service

Responsible for project management.

Responsibilities:

- load projects

- retrieve project metadata

- retrieve project assets

- retrieve project units

- expose project information

---

# Future Services

The architecture is prepared for:

Investment Service

Comparison Service

Favorites Service

Authentication Service

Analytics Service

CRM Service

Lead Service

Notification Service

Developer Service

Maps Service

Currency Service

Translation Service

Media Service

SEO Service

AI Service

Every future capability becomes a Service.

---

# Service Responsibilities

A Service may:

✔ coordinate Engines

✔ communicate with Repositories

✔ combine multiple Engines

✔ validate requests

✔ prepare responses

A Service must never:

✖ render UI

✖ contain React code

✖ depend on Next.js

✖ manipulate HTML

---

# Service Container

Every Service is managed by the Service Container.

Advantages:

- Singleton instances
- Central registration
- Dependency Injection
- Easy replacement
- Easy testing

---

# Dependency Injection

Services should never create other Services manually.

Incorrect

```
const search = new SearchService();
```

Correct

```
const search =
container.resolve("search");
```

The Container owns object creation.

---

# Service Communication

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
Component

↓

Repository
```

Incorrect

```
Page

↓

Search Engine
```

Services are always the gateway.

---

# Design Principles

Services must be:

Small

Reusable

Stateless whenever possible

Easy to test

Easy to replace

Framework independent

---

# Current Status

Implemented

✅ Search Service

Pending

⬜ Project Service

⬜ Investment Service

⬜ Comparison Service

⬜ Favorites Service

⬜ Analytics Service

⬜ AI Service

⬜ CRM Service

⬜ Notification Service

---

# Future Vision

Eventually every feature inside SPEDO will become a Service.

The website will become only a visual consumer of Services.

The same Services will also power:

- Mobile Applications
- Desktop Applications
- APIs
- AI Assistants
- Admin Dashboard
- Developer Dashboard

without changing the business logic.

---

# Engineering Rule

Never bypass a Service.

Every business operation must enter the platform through a Service.

Services are the public API of the SPEDO Core.