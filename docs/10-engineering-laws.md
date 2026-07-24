# SPEDO Engineering Laws

Version: 1.0

Last Updated: June 2026

---

# Introduction

This document defines the immutable engineering laws of the SPEDO Platform.

These are not recommendations.

They are architectural rules.

Every contributor must follow them.

Every new feature must respect them.

Every code review must enforce them.

Breaking these laws increases technical debt.

Following them guarantees long-term stability.

---

# Law 1

Data Before UI

The User Interface never owns business logic.

The UI only presents data.

All business rules belong inside the Core.

---

# Law 2

The Core Is Independent

The Core must never depend on:

- React
- Next.js
- HTML
- CSS
- Browser APIs

The Core must be executable independently.

---

# Law 3

Services Are The Public API

Pages.

Components.

Applications.

SDKs.

Mobile Apps.

Desktop Apps.

Everything communicates through Services.

Never directly through Engines.

---

# Law 4

One Responsibility

Every class.

Every Engine.

Every Service.

Every Repository.

must solve one problem only.

If one class solves multiple problems, split it.

---

# Law 5

Everything Is Testable

Every business component must have its own test.

No hidden behavior.

No untestable logic.

Testing is part of development.

---

# Law 6

Generated Files Are Never Edited

Generated files include:

units.ts

statistics.ts

availability.ts

prices.ts

and any future generated file.

Always modify the source.

Never modify generated output.

---

# Law 7

Developer Documents Are The Truth

The official developer files are the only trusted source.

Never invent values.

Never estimate prices.

Never manually modify imported data.

---

# Law 8

Projects Share One Structure

Every project must contain:

Definition

Metadata

Units

Assets

Importer

Statistics

SEO

Pricing

Availability

No project is allowed to invent its own architecture.

---

# Law 9

Repositories Never Know UI

Repositories expose data.

Nothing more.

They never render.

They never format HTML.

They never know React.

---

# Law 10

Engines Never Render

Engines calculate.

Validate.

Search.

Compare.

Generate.

Analyze.

They never render user interfaces.

---

# Law 11

Services Coordinate

Services orchestrate Engines.

They do not replace Engines.

Business workflows belong inside Services.

---

# Law 12

The Runtime Starts

The Runtime initializes the platform.

It never owns business logic.

---

# Law 13

The Kernel Owns The Platform

Everything starts from the Kernel.

Nothing bypasses the Kernel.

Modules register through the Kernel.

---

# Law 14

No Duplicate Business Logic

Business rules must exist only once.

Reuse.

Refactor.

Never copy.

---

# Law 15

Strong Typing Everywhere

Every business object must have a defined type.

Avoid "any".

Avoid hidden structures.

Types are documentation.

---

# Law 16

Composition Over Duplication

Build reusable modules.

Compose systems.

Avoid copy-paste architecture.

---

# Law 17

Scalability Before Convenience

A quick solution that breaks scalability is unacceptable.

Always think about future growth.

---

# Law 18

Architecture Before Features

Never sacrifice architecture for a temporary feature.

The architecture must survive for years.

---

# Law 19

Documentation Is Part Of Development

No subsystem is complete without documentation.

Documentation evolves with the code.

---

# Law 20

Think Like A Platform

SPEDO is not a website.

SPEDO is not an admin panel.

SPEDO is a platform.

Every decision must strengthen the platform rather than a single interface.

---

# Final Principle

Every line of code should answer one question:

"Will this decision make SPEDO easier to grow five years from now?"

If the answer is no,

do not write that code.