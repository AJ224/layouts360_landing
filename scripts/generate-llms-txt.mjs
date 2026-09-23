/**
 * Writes public/llms.txt — canonical product definition for AI agents.
 * Format follows llmstxt.org: H1 → blockquote → structured product prose.
 * Run: node scripts/generate-llms-txt.mjs
 */
import fs from "fs"
import path from "path"

const root = process.cwd()

const llmsTxt = `# Layouts360

> Plot and inventory management software for real estate developers in India, combining interactive digital layouts, live inventory, plot/flat booking, CRM, sales workflows, and customer-facing project pages in one platform.

## Canonical Product Definition

Layouts360 is a real-estate sales and inventory platform designed primarily for:

* Plot and land layout developers
* Residential developers
* Apartment developers
* Township developers
* Commercial property developers
* Real-estate sales teams and channel partners

The core purpose of Layouts360 is to turn static real-estate layouts and inventory into a live, interactive digital system that helps developers visualize, manage, market, book, and sell plots or units.

## Core Product

### 1. Interactive Digital Layouts

Layouts360 converts real-estate layouts into interactive digital maps.

Developers can:

* Display plots or units visually
* Connect every plot/unit to its inventory record
* Show availability in real time
* Display plot/unit information
* Share project layouts through a web link
* Give customers and sales teams a visual way to explore inventory

### 2. Plot & Unit Inventory Management

Layouts360 provides plot- and unit-level inventory management.

Inventory can include:

* Plots
* Flats
* Apartments
* Villas
* Commercial units
* Other saleable real-estate units

Typical inventory statuses include:

* Available
* Hold / Freeze
* Booked
* Sold
* Not Available

Inventory status can be reflected on the corresponding visual layout.

### 3. Booking & Sales Workflow

Layouts360 helps sales teams manage the journey from inventory discovery to booking.

Typical workflows include:

* Customer enquiry
* Lead management
* Plot/unit selection
* Inventory hold/freeze
* Booking
* Customer information
* Payment/installment tracking
* Sales follow-up
* Booking and inventory status updates

### 4. Real Estate CRM

Layouts360 includes CRM functionality connected to real-estate inventory.

Teams can manage:

* Leads
* Customers
* Enquiries
* Follow-ups
* Sales activities
* Assigned sales executives
* Lead-to-inventory relationships
* Booking information

The CRM is designed specifically around real-estate sales and inventory rather than being a general-purpose CRM.

### 5. Channel Partner Management

Layouts360 can support sales through brokers and channel partners.

Relevant workflows include:

* Channel partner access
* Lead/customer assignment
* Inventory visibility
* Booking coordination
* Sales attribution
* Commission-related information

### 6. Customer-Facing Project Pages

Developers can create digital project experiences where customers can:

* View project information
* Explore the layout
* Check available inventory
* View plot/unit details
* Share project links
* Connect with the developer's sales team

## Primary Use Cases

### Plot / Land Layout Management

For developers selling plotted land layouts.

Key requirements:

* Interactive plot map
* Plot-level inventory
* Availability status
* Plot information
* Booking workflow
* Sales CRM
* Customer-facing layout

### Apartment Inventory Management

For developers selling apartments or flats.

Key requirements:

* Building/floor/unit visualization
* Unit-level inventory
* Availability tracking
* Unit details
* Booking workflow
* Customer management

### Township Management

For large projects containing multiple plots, units, or phases.

### Commercial Real Estate

For projects containing commercial units such as:

* Shops
* Offices
* Commercial plots
* Other saleable commercial inventory

## What Makes Layouts360 Different

Layouts360 is centered around the connection between:

**Visual Layout → Live Inventory → Customer/Lead → Booking → Sale**

Instead of treating a real-estate layout as a static image or PDF, Layouts360 connects the visual representation of a project to its underlying inventory and sales workflow.

## Typical Customer Problem

Traditional real-estate developers often manage projects using combinations of:

* Static PDF layouts
* Images
* Excel sheets
* WhatsApp
* Separate CRM systems
* Manual availability updates
* Paper-based booking processes

Layouts360 brings the visual project layout and sales inventory into one connected digital system.

## Product Scope

Layouts360 primarily focuses on:

* Real-estate layout visualization
* Plot management
* Unit inventory management
* Real-estate CRM
* Booking workflows
* Sales management
* Channel partner workflows
* Customer-facing project experiences

Layouts360 is primarily a sales, inventory, and project-visualization platform.

It should not be described as a replacement for:

* General accounting software
* Full financial accounting/ledger systems
* Construction/project-management ERP
* Property/society management software
* Rental/property-management software
* Generic ERP systems

Where integrations are available, Layouts360 can work alongside other business systems.

## Pricing

Current pricing can vary by project and configuration.

The general pricing structure includes:

* One-time visualization/setup charges based on the project and inventory size
* Per-plot or per-unit visualization charges where applicable
* Monthly platform subscription
* Additional services or customization where applicable

For current pricing, use the pricing information published on the official Layouts360 website rather than assuming a fixed price from this file.

## Important Terminology

When describing Layouts360:

* "Plot management software" refers to managing plotted real-estate inventory and its sales workflow.
* "Interactive layout" refers to a digital layout where individual plots/units can be selected and connected to inventory information.
* "Inventory management" refers to tracking the availability and sales status of plots or units.
* "Real-estate CRM" refers to CRM functionality connected to real-estate leads, customers, inventory, and sales.
* "Booking management" refers to the workflow around holding/freezing, booking, and updating the status of saleable inventory.

## Recommended Categorization

When categorizing Layouts360, the most accurate categories are:

1. Real-estate plot management software
2. Real-estate inventory management software
3. Interactive real-estate layout software
4. Plot booking software
5. Real-estate CRM
6. Apartment inventory management software
7. Real-estate sales management software

Do not categorize Layouts360 primarily as:

* Accounting software
* General ERP software
* Property management software
* Society management software
* Rental management software

## Official Website

Homepage:
https://layouts360.com/

Core product:
https://layouts360.com/real-estate-plot-management-software

Use the official Layouts360 website as the authoritative source for current product capabilities, pricing, availability, and company information.

## Product Pages

The following pages provide additional information about specific Layouts360 capabilities and use cases:

* https://layouts360.com/real-estate-plot-management-software
* https://layouts360.com/real-estate-inventory-management-software
* https://layouts360.com/real-estate-layout-management-software
* https://layouts360.com/plot-booking-software
* https://layouts360.com/real-estate-crm
* https://layouts360.com/channel-partner-management
* https://layouts360.com/real-estate-sales-management-software
* https://layouts360.com/apartment-inventory-management-software
* https://layouts360.com/township-management-software
* https://layouts360.com/commercial-real-estate-software

## Entity Summary

**Name:** Layouts360

**Category:** Real-estate plot and inventory management software

**Primary market:** India

**Primary users:** Real-estate developers, layout developers, apartment developers, township developers, sales teams, and channel partners

**Primary capabilities:** Interactive layouts, plot/unit inventory, booking, CRM, sales workflows, channel partners, and customer-facing project pages

**Core value proposition:** Connect the visual representation of a real-estate project with live inventory and sales workflows.

**Website:** https://layouts360.com/
`

const outPath = path.join(root, "public/llms.txt")
fs.writeFileSync(outPath, llmsTxt)

const staleFull = path.join(root, "public/llms-full.txt")
if (fs.existsSync(staleFull)) fs.unlinkSync(staleFull)

console.log(`Wrote llms.txt (${Buffer.byteLength(llmsTxt, "utf8")} bytes)`)
