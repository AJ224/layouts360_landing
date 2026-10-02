import Link from "next/link"
import { COMPANY } from "@/lib/company"
import { LegalDocument, LegalSection } from "@/components/marketing/legal-document"

export function TermsContent() {
  return (
    <LegalDocument
      title="Terms & Conditions"
      intro={`These Terms & Conditions (“Terms”) govern your access to and use of the ${COMPANY.productName} website and, where applicable, the ${COMPANY.productName} software-as-a-service platform operated by ${COMPANY.legalName} (“Service Provider”, “we”, or “us”).`}
      otherHref="/privacy"
      otherLabel="Privacy Policy"
    >
      <LegalSection title="1. Acceptance">
        <p>
          By accessing our website, requesting a demo, creating an account, or using the Platform, you
          agree to these Terms and our{" "}
          <Link href="/privacy" className="font-medium text-blue-600 hover:underline">
            Privacy Policy
          </Link>
          . If you are accepting on behalf of a company or other entity, you represent that you have
          authority to bind that entity.
        </p>
        <p>
          Paid subscriptions are typically governed by a Master Services Agreement (“MSA”) and Order
          Form executed with {COMPANY.legalName}. If there is any conflict between these online Terms and
          an executed MSA or Order Form, the MSA and Order Form prevail for that Client relationship,
          except that commercial terms and scope specific to an Order Form prevail on those commercial
          matters.
        </p>
      </LegalSection>

      <LegalSection title="2. The Platform and Services">
        <p>
          {COMPANY.productName} is a cloud-hosted, business-to-business software-as-a-service platform
          that digitises real-estate layouts and enables interactive project presentation, plot mapping,
          inventory management, booking tracking, payment tracking, and customer-facing property
          visualisation, together with certain implementation, onboarding, support, and maintenance
          services (collectively, the “Services”).
        </p>
        <p>
          The Platform is a business and software management tool only. We are not a real estate agent,
          developer, promoter, or intermediary, and we make no representation regarding—and assume no
          responsibility for—the Client’s compliance with the Real Estate (Regulation and Development)
          Act, 2016, or any other Applicable Law in connection with use of the Platform or the underlying
          transactions recorded on it. The Client remains solely responsible for all statutory
          disclosures, registrations, and regulatory compliances applicable to its business.
        </p>
        <p>
          We may update, modify, or enhance the Platform (including adding, removing, or modifying
          features), provided such changes do not materially reduce the core functionality of Services
          purchased under a then-current Order Form during the applicable Subscription Term.
        </p>
      </LegalSection>

      <LegalSection title="3. Licence and acceptable use">
        <p>
          Subject to these Terms (and, for Clients, the MSA and payment of Fees), we grant a limited,
          non-exclusive, non-transferable, non-sublicensable licence, during the applicable subscription
          period, to access and use the Platform solely for the Client’s internal business purposes, in
          accordance with Documentation and any Order Form.
        </p>
        <p>You shall not, and shall procure that Authorised Users do not:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>copy, modify, adapt, or create derivative works of the Platform;</li>
          <li>
            reverse engineer, decompile, or disassemble the Platform, except to the extent such
            restriction is prohibited by Applicable Law;
          </li>
          <li>
            sell, resell, lease, sublicense, or otherwise make the Platform available to any third party
            outside the Client’s own organisation;
          </li>
          <li>remove or obscure any proprietary notices;</li>
          <li>
            use the Platform to build a competing product, or for competitive benchmarking, without our
            prior written consent; or
          </li>
          <li>
            use the Platform for any unlawful, fraudulent, or misleading purpose; to infringe any third
            party’s intellectual property or privacy rights; to upload Personal Data without a lawful
            basis and valid consent under the DPDP Act;             in a manner that violates RERA, anti-money-laundering law, or other Applicable Law governing the Client’s business; or to transmit
            malware or attempt unauthorised access to the Platform or another user’s account.
          </li>
        </ul>
        <p>
          The Client is responsible for maintaining the confidentiality of login credentials and for all
          activity under such credentials, and shall promptly notify us of any unauthorised access or
          use.
        </p>
      </LegalSection>

      <LegalSection title="4. Client Data and intellectual property">
        <p>
          As between the parties, we (and/or our licensors) remain the sole and exclusive owner of all
          Intellectual Property Rights in and to the Platform, Documentation, and all updates,
          enhancements, improvements, and derivative works thereof. No rights in the Platform are granted
          except the limited licence described above.
        </p>
        <p>
          The Client retains ownership of Client Data to the extent it lawfully belongs to the Client.
          The Client grants us a non-exclusive, worldwide, royalty-free, sub-licensable (solely to
          sub-processors) licence to host, copy, store, transmit, process, and display Client Data to the
          extent necessary to provide the Services.
        </p>
        <p>
          Aggregated Data and Derived Data are owned by us and may be used for lawful business purposes,
          provided they do not identify the Client, any Authorised User, or any natural person. Unless
          otherwise agreed in writing in an Order Form, custom development or bespoke features we create
          for a Client are owned exclusively by us and may be incorporated into the Platform generally.
        </p>
        <p>
          Feedback, suggestions, or ideas regarding the Platform may be used by us without restriction or
          compensation, and any resulting improvement forms part of our Platform IP.
        </p>
      </LegalSection>

      <LegalSection title="5. Fees and payment">
        <p>
          Fees, billing cycles, and payment terms are set out in the applicable Order Form. Fees are
          exclusive of applicable taxes (including GST), which are borne by the Client. Unless a
          different period is specified in the Order Form, invoices are typically payable within 15
          (fifteen) days of the invoice date.
        </p>
        <p>
          If the Client fails to pay any undisputed amount by its due date, we may charge interest on the
          overdue amount at 18% (eighteen percent) per annum (or the maximum rate permitted under
          Applicable Law, if lower), and/or suspend access to the Platform on 7 (seven) days’ prior
          written notice until the overdue amount is paid in full. Continued non-payment may lead to
          termination as set out in the MSA.
        </p>
      </LegalSection>

      <LegalSection title="6. Data protection">
        <p>
          Processing of Personal Data is described in our{" "}
          <Link href="/privacy" className="font-medium text-blue-600 hover:underline">
            Privacy Policy
          </Link>{" "}
          and, for Clients, in the MSA. In summary: the Client is the Data Fiduciary for Personal Data
          comprised within Client Data; we process that data as a Data Processor on the Client’s
          instructions. Separately, we act as Data Fiduciary for Personal Data we collect for our own
          account, billing, authentication, and business purposes.
        </p>
        <p>
          The Client warrants that it has obtained all consents, permissions, and rights necessary for
          Client Data to be lawfully processed on the Platform, and is solely responsible for the
          accuracy, quality, and legality of Client Data.
        </p>
      </LegalSection>

      <LegalSection title="7. Disclaimer of warranties">
        <p className="uppercase tracking-wide text-slate-700">
          Except as expressly set out in an executed MSA, the Platform, the Services, and all reports,
          analytics, maps, area calculations, dashboards, and other outputs generated through the
          Platform are provided on an “as is” and “as available” basis, without warranty of any kind,
          whether express, implied, or statutory, including any implied warranty of merchantability,
          fitness for a particular purpose, accuracy, completeness, non-infringement, or uninterrupted
          or error-free operation. We do not warrant the accuracy or reliability of any map, area,
          measurement, sale log, or other data or report generated, displayed, or exported by the
          Platform. The Client is solely responsible for independently verifying any such output before
          relying on it for any business, legal, or regulatory purpose.
        </p>
      </LegalSection>

      <LegalSection title="8. Limitation of liability">
        <p className="uppercase tracking-wide text-slate-700">
          To the maximum extent permitted by Applicable Law, in no event shall either party be liable to
          the other for any indirect, incidental, special, consequential, or punitive damages, or for
          any loss of profits, revenue, goodwill, business opportunity, or data, arising out of or in
          connection with these Terms or the Services, whether in contract, tort (including negligence),
          or otherwise, even if advised of the possibility of such damages.
        </p>
        <p className="uppercase tracking-wide text-slate-700">
          To the maximum extent permitted by Applicable Law, our aggregate liability arising out of or
          in connection with these Terms, the website, the Platform, and all Order Forms, whether in
          contract, tort, or otherwise, shall not exceed the total Fees actually paid by the Client to
          us under the applicable Order Form in the 12 (twelve) months immediately preceding the event
          giving rise to the claim. For website visitors who are not paying Clients, our aggregate
          liability shall not exceed INR 5,000.
        </p>
        <p>
          Nothing excludes or limits liability for fraud or fraudulent misrepresentation; death or
          personal injury caused by negligence; or any liability that cannot be excluded or limited under
          Applicable Law.
        </p>
      </LegalSection>

      <LegalSection title="9. Indemnification">
        <p>
          The Client shall indemnify, defend, and hold harmless the Service Provider, its Affiliates, and
          their respective officers, directors, and employees from and against claims, damages, losses,
          liabilities, penalties, and reasonable costs (including reasonable legal fees) arising out of
          or in connection with: (a) any breach of these Terms or the MSA by the Client or its Authorised
          Users; (b) any Client Data, or the Client’s acquisition or use of it; (c) any unlawful,
          fraudulent, or negligent act of the Client or its Authorised Users in connection with the
          Platform; or (d) any third-party claim (including by a Data Principal or a regulator) arising
          from the Client’s failure to obtain valid consent, or otherwise comply with Applicable Law, in
          respect of Personal Data uploaded to the Platform.
        </p>
      </LegalSection>

      <LegalSection title="10. Term, suspension, and termination">
        <p>
          Website access may be withdrawn or restricted at our discretion for misuse or security reasons.
          For Clients, Subscription Terms, auto-renewal, non-renewal notice (typically 30 days),
          termination for material breach (typically 15 days to remedy), insolvency, and payment default
          are governed by the MSA and Order Form.
        </p>
        <p>
          On termination or expiry: the Client’s licence ceases; accrued Fees remain payable; and data
          export/deletion follows the process in the MSA and Privacy Policy (typically a 30-day export
          window on written request).
        </p>
      </LegalSection>

      <LegalSection title="11. Confidentiality and publicity">
        <p>
          Confidential information disclosed between the parties is protected as set out in the MSA and
          its Non-Disclosure Annexure (where executed). Subject to confidentiality obligations, we may
          identify the Client as a customer and use the Client’s name and logo for reasonable marketing
          purposes (customer lists, case studies, website or pitch-deck references), consistent with any
          trademark guidelines provided. The Client may withdraw this permission by written notice
          (including email).
        </p>
      </LegalSection>

      <LegalSection title="12. Force majeure">
        <p>
          Neither party is liable for failure or delay in performance (other than a payment obligation) to
          the extent caused by circumstances beyond its reasonable control, including acts of God, natural
          disaster, pandemic, war, civil unrest, strikes, governmental action, or failure of third-party
          telecommunications, internet, or cloud-infrastructure providers, provided the affected party
          promptly notifies the other and uses reasonable efforts to mitigate.
        </p>
      </LegalSection>

      <LegalSection title="13. Changes to these Terms">
        <p>
          We may update these Terms from time to time. For Clients under an MSA, Supplemental Policies
          (including online terms of service) may be introduced or updated with at least 15 (fifteen)
          days’ prior written notice by email or in-Platform notification. Continued use after the
          effective date constitutes acceptance, except where the MSA requires written consent for
          changes that reduce protections under data protection or limitation of liability clauses.
        </p>
      </LegalSection>

      <LegalSection title="14. Governing law and dispute resolution">
        <p>These Terms are governed by, and shall be construed in accordance with, the laws of India.</p>
        <p>
          In the event of any dispute arising out of or relating to these Terms, the parties shall first
          attempt in good faith to resolve it through negotiation between senior representatives within
          15 (fifteen) days of a written notice of dispute. If unresolved, the dispute shall be referred
          to and finally resolved by arbitration under the Arbitration and Conciliation Act, 1996, by a
          sole arbitrator mutually appointed by the parties (or, failing agreement within 15 days,
          appointed in accordance with that Act). The seat and venue of arbitration shall be Mumbai,
          India, and the language of arbitration shall be English. Subject to arbitration, the courts at
          Mumbai shall have exclusive jurisdiction, including for interim relief.
        </p>
      </LegalSection>

      <LegalSection title="15. General">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            The Client shall not assign these Terms without our prior written consent. We may assign to
            an Affiliate or a successor in connection with a merger, acquisition, reorganisation, or sale
            of substantially all assets relating to the Platform.
          </li>
          <li>
            If any provision is held invalid or unenforceable, the remaining provisions continue in full
            force and effect.
          </li>
          <li>
            The parties are independent contractors. Nothing creates a partnership, joint venture,
            agency, or employment relationship.
          </li>
          <li>
            These Terms, together with the Privacy Policy and (where applicable) the MSA, Order Form, and
            NDA, constitute the entire agreement on their subject matter for the relevant relationship.
          </li>
        </ul>
      </LegalSection>
    </LegalDocument>
  )
}
