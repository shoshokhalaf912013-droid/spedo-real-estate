# Blue Crest Importer

## Purpose

The Blue Crest Importer is responsible for converting the official developer files into the SPEDO data structure.

It is a development tool and is never executed in production.

---

# Input Files

The importer reads only official developer files.

Supported sources:

- Blue Crest ATS NEW.xlsx
- Official Brochure.pdf
- Ground Floor.pdf
- Pool Floor.pdf

No unofficial data is accepted.

---

# Output

The importer generates the following files automatically:

src/data/projects/blue-crest/

├── project.ts
├── metadata.ts
├── location.ts
├── features.ts
├── buildings.ts
├── floors.ts
├── views.ts
├── units.ts
├── prices.ts
├── paymentPlans.ts
├── availability.ts
├── gallery.ts
├── images.ts
├── documents.ts
├── masterplan.ts
├── statistics.ts
├── seo.ts
└── index.ts

---

# Import Workflow

Official Developer Files

↓

Schema

↓

Validator

↓

Transformer

↓

Exporter

↓

SPEDO Data Files

---

# File Responsibilities

## schema.ts

Defines the structure of the Excel workbook.

Maps worksheet names and column names.

---

## validator.ts

Validates imported data.

Examples:

- Missing prices
- Duplicate Unit IDs
- Invalid areas
- Missing buildings

---

## transformer.ts

Transforms raw developer data into the SPEDO data model.

No files are written here.

---

## exporter.ts

Writes the final TypeScript files.

This is the only file allowed to generate project data.

---

## importer.ts

Coordinates the entire import process.

It never contains business logic.

---

## constants.ts

Shared constants.

Examples:

- Worksheet names
- Default currency
- Status values

---

## types.ts

Importer-specific interfaces.

These are used only during the import process.

---

# Development Rules

Never modify generated files manually.

Always modify the importer.

Run the importer again after updating developer files.

Generated files must always match the official developer documents.

---

# Goal

The importer exists to eliminate manual data entry and guarantee that every project inside SPEDO is generated from verified developer sources.