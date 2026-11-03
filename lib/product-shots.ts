/**
 * Real product captures (demo account, sample data) and purpose-built crops of them.
 * Dimensions are the files' intrinsic pixels so frames keep the right aspect ratio.
 * Phone numbers in table captures are masked.
 */
export type ProductShot = { src: string; width: number; height: number; alt: string; label: string }

const S = (name: string, width: number, height: number, label: string, alt: string): ProductShot => ({
  src: `/product/crops/${name}.webp`,
  width,
  height,
  label,
  alt,
})

const FULL = (
  file: string,
  width: number,
  height: number,
  label: string,
  alt: string,
): ProductShot => ({
  src: `/product/showcase/${file}`,
  width,
  height,
  label,
  alt,
})

export const SHOTS = {
  plotDetail: S("plot-detail-focus", 740, 643, "Layout view · plot detail", "Plot 146 selected on the layout: 900 sq ft, east facing, with 36 ft and 25 ft side dimensions drawn, and the actions add enquiry, schedule visit, freeze and book"),
  crm: S("crm-focus", 1034, 674, "CRM · My day", "CRM My day view with tabs for enquiries, site visits and calendar, an empty first-calls column and site visit cards with done and no-show actions"),
  dashboardLeadership: S("dashboard-leadership", 522, 582, "Dashboard · today", "Dashboard panel with today's received and overdue amounts and the top performers by bookings over six months"),
  dashboardKpis: S("dashboard-kpis", 1576, 170, "Dashboard · this month", "Dashboard tiles for enquiries, bookings, sold plots and active layouts with the change this month"),
  dashboardMain: S("dashboard-main", 1576, 802, "Dashboard", "Dashboard with enquiries, bookings, sold and active layouts, a monthly pipeline chart for enquiry, freeze and book, today's received and overdue amounts and top performers"),
  paymentsKpis: S("payments-kpis", 1554, 110, "Payments · totals", "Payments totals: total receivable, total received and total pending"),
  paymentsMain: S("payments-main", 1554, 890, "Payments", "Payments view with total receivable, received and pending, filters by date, customer, layout, entry, status, mode, category and handler, and a ledger of entries"),
  layoutMap: S("layout-map-content", 1604, 836, "Layout view", "Layout view of a 145 plot project with colour-coded statuses, a filter panel with status and plot size counts, and a toolbar for info, photos, reset, map, filter, share and WhatsApp"),
  frozenPlots: S("frozen-plots-top", 1554, 276, "Frozen plots", "Frozen plots list with tabs for all, auto, manual and expiring, and a plot frozen for a customer with two days remaining"),
  bookings: S("bookings-top", 1554, 576, "Bookings", "Bookings table with stages active, payment, registration, sold and cancelled, and rows showing plot, booked on, customer, total price, pending amount and status"),
  channelPartners: S("channel-partners-top", 1554, 336, "Channel partners", "Channel partners table with commission percentage, bookings, amount to pay and status, plus invite links and add partner actions"),
  projects: S("projects-cards", 792, 566, "Projects", "Projects view listing an apartment project and the Shubham Park plotted layout with total and available square feet and plots"),
  layoutLedger: S("layout-ledger-top", 1554, 254, "Layout ledger", "Layout ledger listing sales received, spent and money left for each layout, with the number of partners"),
  soldPlots: S("sold-plots-top", 1554, 672, "Sold plots", "Sold plots list with customer, sold by, status, and a plot flagged as needing a record"),
  settings: S("settings-main", 1600, 802, "Settings", "Settings with sections for profile, team, roles, forms, freeze, GPS, integrations and IP restriction"),
  notifications: S("notifications-top", 1554, 744, "Notifications", "Notifications list of plot freezes and a new enquiry, each with the plot, the layout and the team member who did it"),
  editLayoutDetails: S("edit-layout-details", 1004, 826, "Edit plot layout", "Edit plot layout form with layout name, location, area in square feet, number of plots, survey number, road, latitude, longitude and key map"),
  editLayoutLabels: S("edit-layout-labels", 1004, 826, "Edit plot layout · map labels", "Map label options for a layout: plot number, survey number, plot rate, plot size, side dimensions, plot area, built-up area, facing and customer name on sold and frozen plots"),
  editLayoutNearby: S("edit-layout-nearby", 1004, 740, "Edit plot layout · nearby places", "Nearby places configured for a layout: two schools, a restaurant, a temple and a bus stop"),
  customers: S("customers-top", 1554, 612, "Customers", "Customers list with city and occupation columns, search and export"),
  attendance: S("attendance-top", 1554, 242, "Attendance", "Attendance view with a GPS ready indicator and a punch in button limited to the work zone"),
  layoutLight: S("layout-light-map", 2362, 1370, "Layout view · plan", "Layout plan of a 146 plot project with available, freezed and sold plots, a garden, and filters for status, plot size and facing"),
  /** Full-frame demo screenshots for the home product showcase (not cropped). */
  showcaseLayout: FULL(
    "showcase-layout.jpg",
    1024,
    526,
    "Layout view · 3D",
    "3D layout view with status and plot size filters, 442 available plots, and the map toolbar",
  ),
  showcasePlot: FULL(
    "showcase-plot.jpg",
    1024,
    526,
    "Layout view · plot selected",
    "Plot 316 selected on the 3D layout with AVAILABLE status and Freeze and Book actions",
  ),
  showcaseSold: FULL(
    "showcase-sold.png",
    1024,
    497,
    "Sold plots",
    "Sold plots list with customer, sold by, booked status, and export",
  ),
  showcaseBookings: FULL(
    "showcase-bookings.png",
    1024,
    495,
    "Bookings",
    "Bookings table with plot, customer, total price, pending amount and active or sold status",
  ),
  showcasePayments: FULL(
    "showcase-payments.png",
    1024,
    495,
    "Payments",
    "Payments view with total receivable, received and pending, and a ledger of entries",
  ),
} as const

export type ShotKey = keyof typeof SHOTS
