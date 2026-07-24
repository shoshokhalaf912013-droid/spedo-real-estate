# SPEDO Import System

Version: 2.0

Last Updated: June 2026

---

# Introduction

The Import System is one of the most important subsystems inside the SPEDO Core.

Its responsibility is to transform raw developer documents into structured, verified, production-ready project data.

Instead of manually entering hundreds of units, SPEDO generates them automatically.

---

# Philosophy

Developer documents are the only trusted source.

The Import System never invents information.

It only transforms official data into structured objects.

Every imported value remains traceable to its original source.

---

# Supported Sources

The Import System is designed to support multiple developer formats.

Current sources:

- Microsoft Excel (.xlsx)

Future sources:

- CSV
- XML
- JSON
- API
- ERP Export
- CRM Export
- PDF Extraction
- OCR Documents

---

# Import Pipeline

```
Developer File

↓

Importer

↓

Parser

↓

Validator

↓

Normalizer

↓

Builder

↓

TypeScript Generator

↓

Project Files

↓

Project Engine

↓

Search Engine

↓

Application
```

Every imported project follows exactly the same pipeline.

---

# Importer

The Importer is responsible for reading raw files.

Responsibilities:

- Read file
- Detect worksheet
- Extract rows
- Detect headers
- Detect buildings
- Detect unit types
- Return structured records

The Importer never creates Property Units.

---

# Parser

The Parser converts raw text into structured values.

Examples:

Price

↓

Number

Bedrooms

↓

Integer

Area

↓

Float

Building

↓

Normalized String

Floor

↓

Integer

Everything becomes strongly typed.

---

# Validator

The Validator guarantees data quality.

Checks include:

Missing values

Duplicate IDs

Invalid prices

Invalid areas

Invalid unit numbers

Invalid buildings

Unknown views

Corrupted rows

Nothing invalid reaches the platform.

---

# Normalizer

Different developers use different terminology.

Example:

```
One Bedroom

↓

1 Bedroom

↓

1 BR
```

All become

```
One Bedroom
```

Another example:

```
Pool View

Pool

Swimming Pool

↓

Pool View
```

Normalization guarantees consistency.

---

# Builder

The Builder converts imported records into Property Units.

Responsibilities:

Generate IDs

Generate Slugs

Generate SEO

Generate Statistics

Generate Payment Objects

Generate Availability

Generate Source Information

The Builder creates production-ready objects.

---

# Generator

The Generator exports TypeScript files.

Examples:

units.ts

metadata.ts

statistics.ts

availability.ts

project.ts

definition.ts

Everything is generated automatically.

---

# Source Tracking

Every imported property keeps its source.

Example:

Developer

File Name

Verification Date

Import Version

This allows complete traceability.

---

# Current Features

Implemented

✅ Excel Import

✅ Unit Builder

✅ TypeScript Generator

✅ Property Factory

✅ Source Metadata

Pending

⬜ CSV Import

⬜ API Import

⬜ OCR Import

⬜ PDF Extraction

⬜ Incremental Updates

⬜ Version History

⬜ Conflict Detection

---

# Error Handling

Import errors should never stop the platform.

Possible actions:

Skip Row

Report Error

Continue Import

Generate Report

Future versions will include visual error reports.

---

# Future Vision

Eventually developers will upload files directly.

SPEDO will automatically:

Import

Validate

Generate

Publish

Index

without writing a single line of code.

---

# Engineering Principles

Importer reads data.

Parser understands data.

Validator protects data.

Normalizer standardizes data.

Builder creates business objects.

Generator produces platform files.

Every component has one responsibility.

---

# Engineering Law

Never edit generated files manually.

Always regenerate them from the official source.

Developer documents remain the single source of truth.