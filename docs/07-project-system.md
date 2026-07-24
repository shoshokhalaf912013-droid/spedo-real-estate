# SPEDO Project System

Version: 2.0

Last Updated: June 2026

---

# Introduction

The Project System is responsible for managing every real estate project inside the SPEDO Platform.

A project is much more than a collection of units.

It is a complete business entity containing metadata, assets, units, pricing, documents, payment plans, statistics, and developer information.

Every project follows one unified structure regardless of the developer.

---

# Purpose

The Project System guarantees that every project inside SPEDO behaves identically.

Whether the project contains:

- 20 Units
- 500 Units
- 20 Buildings
- Villas
- Apartments
- Mixed Use
- Commercial

The architecture never changes.

Only the data changes.

---

# Current Project Structure

```
Project

│

├── definition.ts

├── metadata.ts

├── project.ts

├── units.ts

├── gallery.ts

├── prices.ts

├── paymentPlans.ts

├── statistics.ts

├── location.ts

├── views.ts

├── features.ts

├── documents.ts

├── buildings.ts

├── floors.ts

├── availability.ts

└── importer.ts
```

Every project must respect the same structure.

---

# Project Definition

definition.ts contains the project identity.

Example:

- Project Code
- Developer Code
- Platform Code
- Name
- Short Name
- Currency

This file is considered immutable.

It should rarely change.

---

# Metadata

Metadata describes the project.

Examples:

Project Name

Developer

City

District

Category

Property Type

Status

Version

Country

Language

The metadata is consumed by the entire platform.

---

# Units

Units are the smallest business objects.

Each unit owns:

Unique ID

Slug

Building

Floor

Bedrooms

Bathrooms

Area

View

Price

Availability

SEO

Statistics

Units never contain UI information.

---

# Assets

Project assets include:

Gallery

Documents

Floor Plans

Master Plan

Location

Videos

Brochures

Price Lists

Everything related to project presentation belongs here.

---

# Project Loader

Responsible for loading projects.

Responsibilities:

Load Project

Validate Structure

Register Project

Load Units

Load Assets

Expose Project

The Loader guarantees that every project enters the platform correctly.

---

# Project Registry

The Registry stores every loaded project.

Capabilities:

Register

Find

List

Remove (future)

Reload (future)

Statistics (future)

The Registry becomes the central source for project discovery.

---

# Project Engine

The Project Engine coordinates the Project System.

Responsibilities:

Load Projects

Manage Lifecycle

Expose Metadata

Expose Units

Expose Assets

Discover Projects

Future versions will support dynamic loading.

---

# Project Lifecycle

```
Import

↓

Validate

↓

Generate

↓

Load

↓

Register

↓

Ready

↓

Published
```

Every project follows the same lifecycle.

---

# Current Projects

Current implementation:

✅ Blue Crest

Future projects:

⬜ Marvento

⬜ Hurghada Heights

⬜ Mark Resort

⬜ New Capital Projects

⬜ North Coast Projects

⬜ New Cairo Projects

No architectural change will be required.

---

# Scalability

The architecture supports:

Unlimited Developers

Unlimited Projects

Unlimited Buildings

Unlimited Units

Unlimited Documents

Unlimited Images

Unlimited Payment Plans

Growth is achieved by adding data.

Never by changing architecture.

---

# Engineering Rules

Every project must contain:

Definition

Metadata

Units

Assets

Statistics

Import Pipeline

Builder Support

SEO Information

Project Identity

No exceptions.

---

# Long-Term Vision

The Project System is designed to become the foundation of every future SPEDO product.

Website

Admin Dashboard

CRM

Mobile App

API

AI Assistant

Analytics

Investment Tools

All consume the same Project System.

---

# Engineering Law

Projects are data.

Pages are only representations of that data.

The Project System is the single source of truth for every real estate project inside SPEDO.