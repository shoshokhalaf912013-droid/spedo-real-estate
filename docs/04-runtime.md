# SPEDO Runtime

Version: 2.0

Last Updated: June 2026

---

# Introduction

The Runtime is responsible for executing the SPEDO platform.

It creates the live execution environment that connects the Application with the Kernel.

The Runtime itself contains no business logic.

Its responsibility is orchestration.

---

# Purpose

The Runtime transforms a static codebase into a running platform.

Without the Runtime:

- Services are unavailable.
- Modules are not initialized.
- Engines never start.
- The Application cannot access the Core.

---

# Runtime Responsibilities

The Runtime is responsible for:

- Starting the Kernel.
- Preparing the execution environment.
- Initializing all registered modules.
- Starting shared services.
- Preparing the Application.
- Reporting startup completion.

---

# Runtime Flow

```
Application

↓

Create Runtime

↓

Runtime.start()

↓

Kernel.boot()

↓

Initialize Container

↓

Register Modules

↓

Start Services

↓

Platform Ready
```

---

# Startup Lifecycle

The Runtime follows a predictable startup sequence.

```
Created

↓

Initializing

↓

Booting Kernel

↓

Loading Modules

↓

Starting Services

↓

Ready

↓

Running
```

Future versions may also support:

```
Paused

↓

Resumed

↓

Shutdown

↓

Restart
```

---

# Runtime Components

Current Runtime Components:

- Kernel
- Service Container
- Module Registry

Future Components:

- Scheduler
- Background Jobs
- Cache Manager
- Event Queue
- Health Monitor
- Metrics Collector

---

# Runtime States

The Runtime always exists in one state.

Possible states are:

- Created
- Initializing
- Ready
- Running
- Failed
- Shutdown

Every transition should be deterministic.

---

# Runtime and Kernel

The Runtime owns the Kernel.

The Runtime starts it.

The Runtime never replaces it.

Relationship:

```
Runtime

↓

Kernel

↓

Services

↓

Engines
```

---

# Runtime and Application

The Application communicates only with the Runtime.

The Application should never initialize services manually.

Correct flow:

```
Application

↓

Runtime

↓

Kernel

↓

Services
```

Incorrect flow:

```
Application

↓

Search Engine
```

This is forbidden.

---

# Runtime Events

Current Runtime Events:

- Runtime Created
- Runtime Started
- Runtime Ready

Future Runtime Events:

- Runtime Failed
- Runtime Restarted
- Runtime Shutdown
- Runtime Reloaded

These events will be handled by the Event Bus.

---

# Runtime Goals

The Runtime should:

- Be lightweight.
- Be deterministic.
- Be testable.
- Be framework independent.
- Start quickly.
- Never contain business logic.

---

# Current Status

Implemented

✅ Runtime Class

✅ Kernel Startup

✅ Platform Startup

✅ Service Initialization

Pending

⬜ Event Dispatching

⬜ Runtime Metrics

⬜ Health Monitoring

⬜ Performance Timing

⬜ Graceful Shutdown

⬜ Restart Support

---

# Future Vision

The Runtime will eventually support:

- Server Runtime
- Browser Runtime
- Mobile Runtime
- Desktop Runtime
- Worker Runtime

All using the same SPEDO Core.

---

# Engineering Rule

The Runtime starts the platform.

The Runtime never becomes the platform.

Business logic always belongs to Services and Engines.

The Runtime is only responsible for execution.