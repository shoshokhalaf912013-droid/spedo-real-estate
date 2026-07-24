# SPEDO Architecture

Version: 3.0

Last Updated: June 2026

Status: Official Architecture Document

---

# Introduction

SPEDO is not a traditional real estate website.

SPEDO is a Real Estate Operating System (REOS).

The website is only one interface built on top of the platform.

The true platform is the Core.

Every feature, every page, every API, every mobile application, and every future AI assistant communicates with the same Core.

The architecture has been designed around long-term scalability, maintainability, modularity, and data integrity.

The platform follows strict engineering principles.

Business logic never depends on UI.

Data is always the single source of truth.

Official developer documents are the only trusted source of information.

---

# Vision

Our vision is to build the most trusted real estate investment platform in Egypt and later across international markets.

Accuracy is more valuable than quantity.

Reliability is more valuable than appearance.

Automation is more valuable than manual work.

Every published project should be traceable back to its official developer documents.

Every unit should be verifiable.

Every generated page should originate from structured data.

---

# Mission

SPEDO transforms official developer data into reliable investment knowledge.

The platform enables investors to search, compare, analyze and purchase properties through verified information rather than advertisements.

---

# Core Philosophy

SPEDO follows a strict Data First Architecture.

Everything starts with structured data.

Data creates Projects.

Projects create Units.

Units create Pages.

Pages create the User Experience.

Therefore:

Data is the single source of truth.

UI never owns data.

Business logic never owns rendering.

Rendering never owns business logic.

---

# Engineering Principles

SPEDO follows the following engineering principles.

• Data First

• Core Before UI

• Engine First Development

• Official Documents Only

• Single Source of Truth

• Loose Coupling

• High Cohesion

• Dependency Injection

• Modular Design

• Replaceable Components

• Strong Typing

• Testability

• Scalability

• Long-Term Maintainability

---

# High Level Architecture

# Layer Responsibilities

---

# Browser Layer

The Browser Layer represents the user's environment.

Responsibilities:

• User Interaction

• Keyboard Input

• Mouse Events

• Touch Events

• Rendering HTML

• Executing JavaScript

The Browser never contains business logic.

The Browser never knows how projects are loaded.

The Browser only communicates with the Application Layer.

---

# Next.js Application Layer

The Application Layer is responsible for presenting the platform.

Responsibilities

• Routing

• Layouts

• React Components

• Server Components

• Client Components

• Metadata

• SEO Rendering

• Static Generation

• Server Rendering

The Application Layer must never contain business logic.

The Application Layer never calculates prices.

The Application Layer never performs searches.

The Application Layer only communicates with Services.

---

# Runtime Layer

The Runtime prepares the platform.

Responsibilities

• Boot Sequence

• Environment Preparation

• Initialize Configuration

• Start Kernel

• Load Modules

• Start Services

• Prepare Runtime State

• Signal System Ready

The Runtime executes exactly once during startup.

Nothing bypasses the Runtime.

---

# Kernel Layer

The Kernel is the heart of SPEDO.

Every module starts here.

Responsibilities

• Module Registration

• Boot Sequence

• Dependency Resolution

• Service Discovery

• Startup Order

• Runtime Initialization

The Kernel never performs business logic.

The Kernel coordinates the platform.

Modules never communicate directly.

Everything passes through the Kernel.

---

# Configuration Layer

Configuration is centralized.

Nothing inside the platform should contain hardcoded values.

Configuration includes

Application Settings

Search Settings

Localization

Environment

Project Loading

Feature Flags

Future AI Configuration

Future API Configuration

Future CRM Configuration

Changing configuration must never require changing business logic.

---

# Service Container

The Service Container provides Dependency Injection.

Responsibilities

• Singleton Services

• Shared Instances

• Lifetime Management

• Dependency Resolution

• Factory Registration

Benefits

No duplicated initialization.

No duplicated services.

Loose coupling.

High testability.

Future cloud deployment.

Every shared service is created once.

Every module receives the same instance.

---

# Event Bus

The Event Bus enables communication between independent modules.

Modules never call each other directly.

Instead they publish events.

Other modules subscribe to those events.

Examples

system.ready

project.loaded

search.completed

user.login

lead.created

payment.finished

crm.updated

analytics.generated

notification.sent

Benefits

Loose Coupling

Independent Modules

Replaceable Systems

Future Distributed Architecture

Future Microservices

The Event Bus becomes the nervous system of SPEDO.


---

# Module Registry

The Module Registry is responsible for discovering every available module inside the platform.

Every module must register itself during startup.

Modules never instantiate themselves.

Modules never know each other.

Responsibilities

• Register Modules

• Unregister Modules

• Module Discovery

• Module Enumeration

• Module Metadata

• Future Plug-ins

Every module has

• Unique Identifier

• Name

• Version

• Dependencies

• Status

Future Examples

Search Module

Projects Module

CRM Module

Investment Module

Analytics Module

Notification Module

GIS Module

Marketplace Module

AI Module

The Module Registry allows SPEDO to become a plug-in based platform.

---

# Services Layer

Services expose business capabilities to the Application Layer.

Services coordinate one or more Engines.

Services hide implementation details.

Services provide stable APIs.

Examples

Search Service

Project Service

Investment Service

Analytics Service

CRM Service

Lead Service

Notification Service

User Service

Authentication Service

Services never render UI.

Services never know React.

Services never know Next.js.

Responsibilities

• Business Operations

• Coordination

• Validation

• Orchestration

• Public APIs

---

# Engines Layer

Engines perform business logic.

An Engine solves one business problem.

Examples

Search Engine

Pricing Engine

Comparison Engine

Statistics Engine

Import Engine

Builder Engine

Investment Engine

SEO Engine

Recommendation Engine

AI Engine

Every Engine must be independent.

Every Engine must be reusable.

Every Engine must be testable.

Every Engine must never depend on UI.

Every Engine must never depend on React.

Every Engine must never depend on Next.js.

---

# Repository Layer

Repositories provide structured access to data.

Repositories are responsible for retrieving information.

Repositories never calculate business logic.

Repositories never render anything.

Examples

Property Repository

Project Repository

Developer Repository

Media Repository

Statistics Repository

Repositories isolate data access from business logic.

If the data source changes, only the Repository changes.

Everything above remains untouched.

---

# Why Services and Engines are Separate

SPEDO intentionally separates Services from Engines.

Engine

Contains business logic.

Service

Coordinates Engines.

Example

Search Service

↓

Search Engine

↓

Property Repository

Another example

Investment Service

↓

Pricing Engine

↓

Statistics Engine

↓

Project Repository

Benefits

Reusable Engines

Simpler Testing

Loose Coupling

Independent Development

Future Microservices

Future Cloud Deployment

---

# Contracts

Every communication inside SPEDO happens through Contracts.

Contracts define behavior.

Implementations provide functionality.

Benefits

Replaceable Modules

Easy Testing

Dependency Injection

Future APIs

Future Cloud Services

Future AI Providers

Examples

Search Contract

Project Contract

CRM Contract

Investment Contract

Notification Contract

Authentication Contract

The Core depends on Contracts.

Never on Implementations.


---

# Project System

The Project System is responsible for managing every real estate project inside SPEDO.

A Project is not simply a collection of units.

A Project is a complete business entity.

Every project follows the same structure regardless of the developer.

Responsibilities

• Project Metadata

• Project Identity

• Assets

• Availability

• Units

• Statistics

• Documents

• Import History

• Versioning

• Validation

Every project must implement the Project Contract.

Projects are loaded dynamically by the Project Engine.

Projects never communicate with each other.

Projects are completely isolated.

This allows unlimited scalability.

---

# Project Definition

Every project consists of five major parts.

Project

├── Metadata

├── Identity

├── Manifest

├── Assets

└── Units

Metadata describes the project.

Identity uniquely identifies the project.

Manifest describes project capabilities.

Assets contain project resources.

Units contain investment opportunities.

---

# Property Units

The Property Unit is the smallest business entity inside SPEDO.

Everything eventually reaches the Unit.

Every search result.

Every comparison.

Every investment analysis.

Every SEO page.

Every recommendation.

Every AI answer.

Every unit owns its own identity.

Each unit contains

• ID

• Slug

• Building

• Unit Number

• Floor

• Area

• Bedrooms

• Bathrooms

• View

• Finishing

• Delivery

• Price

• Payment Plan

• Availability

• SEO

• Source

• Statistics

• Last Updated

Each unit is completely independent.

Removing one unit never affects another.

---

# Unit Identity

Every Property Unit must have

Global Unique ID

Example

BC-A216

Slug

blue-crest-a-216

Project Code

BC

Building

A

Unit Number

216

Every identity must remain stable.

Changing prices must never change identity.

Changing availability must never change identity.

Identity is permanent.

---

# Official Data

Official developer documents are the only trusted source.

Accepted Sources

Official Excel Files

Official Price Lists

Official Brochures

Official Floor Plans

Official Master Plans

Official Payment Plans

Official Developer Documents

SPEDO never invents information.

SPEDO never estimates prices.

SPEDO never creates fake specifications.

Everything must be traceable back to its official source.

---

# Single Source of Truth

Every value inside SPEDO must have exactly one owner.

Example

Price

↓

Official Excel

↓

Importer

↓

Builder

↓

Property Unit

↓

Repository

↓

Engine

↓

Service

↓

Application

↓

UI

No duplicated values.

No manual synchronization.

No conflicting information.

Updating the source automatically updates the platform.

---

# Data Flow

Developer Documents

↓

Importer

↓

Builder

↓

Project Definition

↓

Property Units

↓

Repositories

↓

Engines

↓

Services

↓

Application

↓

Website

Every generated page originates from structured data.

Pages never own information.

Pages only display information.

This guarantees consistency across the entire platform.

---

# Builder Philosophy

The Builder transforms raw developer documents into structured platform data.

Responsibilities

• Read Official Files

• Validate Data

• Normalize Values

• Generate Units

• Generate IDs

• Generate Slugs

• Generate SEO

• Generate Statistics

• Export TypeScript Data

The Builder is the bridge between developer documents and the SPEDO Core.

Without the Builder, there is no trusted platform.

---

# Platform Independence

SPEDO Core is completely independent from any user interface.

The Core does not know:

• React

• Next.js

• HTML

• CSS

• Browser APIs

The Core only knows business logic.

Because of this separation, the same Core can power multiple platforms.

Current Platforms

• Next.js Website

Future Platforms

• React Native Mobile Application

• Flutter Mobile Application

• Desktop Application

• REST API

• GraphQL API

• CLI Tools

• AI Agents

• Third-Party Integrations

Only the Application Layer changes.

The Core remains identical.

---

# Engine First Development

Every feature inside SPEDO must be developed using the same sequence.

Official Data

↓

Repository

↓

Engine

↓

Service

↓

Application

↓

UI

Never the opposite.

User Interface is always the final layer.

This guarantees that every feature remains reusable.

---

# Dependency Rules

Dependencies always move downward.

Allowed

Application

↓

Runtime

↓

Kernel

↓

Configuration

↓

Container

↓

Event Bus

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

↓

Official Data

Forbidden

React

↓

Engine

Forbidden

Next.js

↓

Repository

Forbidden

Repository

↓

UI

Forbidden

Component

↓

Database

Forbidden

Page

↓

Engine

Forbidden

Engine

↓

React

Forbidden

Repository

↓

Next.js

Any violation of these rules introduces technical debt.

---

# Current Core Status

The current implementation contains

✓ Configuration System

✓ Runtime

✓ Kernel

✓ Service Container

✓ Event Bus

✓ Module Registry

✓ Search Engine

✓ Search Service

✓ Project Engine

✓ Property Repository

✓ Builder

✓ Import System

✓ Dynamic Project Definitions

✓ Project Registry

✓ Project Loader

✓ Type-safe Project Model

The Core is operational.

---

# Future Architecture

The architecture is already prepared for

AI Engine

Recommendation Engine

CRM

Lead Engine

Notification Engine

Authentication

Role Management

Analytics

GIS

Payment Gateway

Marketplace

REST API

GraphQL

Mobile Applications

Desktop Applications

Cloud Synchronization

Developer Dashboard

Customer Dashboard

Automation Engine

Document Generator

All future systems integrate through Services.

The Core architecture never changes.

---

# AI Integration

Artificial Intelligence is treated as another Engine.

AI does not access UI.

AI does not access React.

AI communicates only through Services.

Possible AI Modules

Investment Advisor

Property Recommendation

Market Prediction

Pricing Assistant

Lead Qualification

Customer Support

SEO Generation

Document Analysis

Translation

Future AI Providers can be replaced without changing business logic.

---

# API Strategy

SPEDO Core is API-ready.

Every Service can be exposed through

REST API

GraphQL

Internal APIs

Partner APIs

Future Mobile APIs

No business logic should exist inside Controllers.

Controllers only delegate requests to Services.

---

# Mobile Strategy

The mobile application must never duplicate business logic.

The mobile application communicates with Services through APIs.

The same Core powers

Website

Mobile

Desktop

Future Platforms

One Core.

Multiple Interfaces.


---

# Engineering Decisions

Every major engineering decision inside SPEDO must be documented.

The purpose is not only to record what was built.

The purpose is to explain why it was built.

Future engineers should understand the reasoning behind every architectural choice.

Examples

Why Kernel?

Why Runtime?

Why Event Bus?

Why Service Layer?

Why Engine Layer?

Why Repository Pattern?

Why Dependency Injection?

Why Data First?

Why Single Source of Truth?

Architecture without documented decisions becomes difficult to maintain over time.

---

# Current Architecture Status

Core Foundation

✓ Configuration System

✓ Runtime

✓ Kernel

✓ Service Container

✓ Event Bus

✓ Module Registry

✓ Search Engine

✓ Search Service

✓ Project Engine

✓ Property Repository

✓ Project Registry

✓ Project Loader

✓ Builder

✓ Import System

✓ Dynamic Project Definition

✓ Dynamic Unit Model

Application

✓ Next.js

✓ Dynamic Routing Foundation

✓ SEO Foundation

Data

✓ Official Import Pipeline

✓ Type-safe Project Model

✓ Property Factory

✓ Repository Layer

Future Packages

□ Dynamic Project Pages

□ Dynamic Property Pages

□ Advanced Search

□ Comparison Engine

□ Investment Analysis

□ Recommendation Engine

□ AI Advisor

□ CRM

□ Dashboard

□ Marketplace

□ GIS

□ Analytics

□ Notification Center

□ Mobile API

□ Desktop Application

---

# Long-Term Vision

SPEDO is designed as a Real Estate Operating System.

The website is only one interface.

The Core is the product.

Future interfaces may include

Website

Mobile Application

Desktop Application

REST API

GraphQL

Partner Portal

Developer Dashboard

Customer Dashboard

AI Assistant

Voice Assistant

Automation Platform

The Core remains identical.

Only interfaces evolve.

---

# Definition of Success

Success is not measured by the number of pages.

Success is not measured by visual appearance.

Success is measured by

Reliability

Accuracy

Maintainability

Performance

Scalability

Transparency

Automation

Developer Experience

Investment Value

Data Integrity

---

# Golden Rules

Rule 1

Data owns everything.

UI owns nothing.

Rule 2

Business logic belongs inside Engines.

Never inside Components.

Rule 3

Repositories retrieve data.

They never calculate business logic.

Rule 4

Services coordinate Engines.

They never render UI.

Rule 5

The Core never depends on React.

Rule 6

Official developer documents are the only trusted source.

Rule 7

Every feature starts with data.

The UI is always the last step.

Rule 8

Every layer has one responsibility.

Rule 9

No duplicated information.

No duplicated business logic.

No duplicated initialization.

Rule 10

If replacing the UI does not break the platform,

the architecture is correct.

---

# SPEDO Manifesto

SPEDO is not another property listing website.

SPEDO is not an advertising portal.

SPEDO is a trusted real estate operating system built on verified developer data.

Every project begins with official documents.

Every property unit has a permanent identity.

Every page is generated from structured data.

Every architectural decision favors long-term maintainability over short-term convenience.

The platform is designed to grow without rewriting its foundation.

The Core is independent.

The UI is replaceable.

The data is the single source of truth.

Architecture is permanent.

Technology evolves.

The mission of SPEDO is to provide the most trusted real estate data platform in Egypt and beyond.

---

# Final Principle

The website is not the platform.

The Core is the platform.

Everything else is only an interface to the Core.

---

© SPEDO Architecture
Version 3.0
Enterprise Edition