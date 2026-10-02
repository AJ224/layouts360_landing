import { COMPANY } from "@/lib/company"
import { LegalDocument, LegalSection } from "@/components/marketing/legal-document"

export function PrivacyContent() {
  return (
    <LegalDocument
      title="Privacy Policy"
      intro={`${COMPANY.legalName} (“we”, “us”, or “Service Provider”), operating under the brand name ${COMPANY.productName}, explains how we collect, use, store, and protect personal data in connection with our website and our cloud-hosted software-as-a-service platform.`}
      otherHref="/terms"
      otherLabel="Terms & Conditions"
    >
      <LegalSection title="1. Who we are">
        <p>
          {COMPANY.productName} is a business-to-business software-as-a-service platform that digitises
          real-estate layouts and supports interactive project presentation, plot mapping, inventory
          management, booking tracking, payment tracking, and customer-facing property visualisation,
          together with implementation, onboarding, support, and maintenance services (the “Services”).
        </p>
        <p>
          We are incorporated under the Companies Act, 2013, with our principal place of business in{" "}
          {COMPANY.headquarters} ({COMPANY.postalCode}). This Privacy Policy is governed by the laws of
          India, including the Information Technology Act, 2000 and the Digital Personal Data Protection
          Act, 2023 (“DPDP Act”) and the rules made thereunder.
        </p>
      </LegalSection>

      <LegalSection title="2. Scope and roles under the DPDP Act">
        <p>
          Terms such as Data Fiduciary, Data Processor, Data Principal, and Personal Data have the
          meanings assigned under the DPDP Act.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong className="text-slate-900">Website and our own business records.</strong> When we
            collect Personal Data for our own account creation, billing, authentication, marketing
            enquiries, demo requests, and related business purposes (including of a client’s authorised
            signatories and Authorised Users), we act as a Data Fiduciary in our own right.
          </li>
          <li>
            <strong className="text-slate-900">Client Data on the Platform.</strong> When a client
            (the “Client”) uploads or enters Personal Data onto the Platform—including data of the
            Client’s staff and of the Client’s own customers or end-users—the Client is the Data
            Fiduciary. We process such Personal Data solely on the Client’s documented instructions, for
            the purpose of providing the Services, and act as a Data Processor in that capacity.
          </li>
        </ul>
        <p>
          Each party independently complies with its own obligations as a Data Fiduciary or Data
          Processor, as applicable, under the DPDP Act.
        </p>
      </LegalSection>

      <LegalSection title="3. Personal data we collect">
        <p>Depending on how you interact with us, we may collect:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong className="text-slate-900">Contact and account data</strong> — name, business
            email, phone number, company name, role, and login credentials for Authorised Users.
          </li>
          <li>
            <strong className="text-slate-900">Commercial and billing data</strong> — subscription
            details, invoicing information, and payment-related records as needed to administer Fees
            under an Order Form.
          </li>
          <li>
            <strong className="text-slate-900">Website and usage data</strong> — pages visited, device
            and browser information, IP address, referral source, and Platform usage logs needed for
            security, support, and product improvement.
          </li>
          <li>
            <strong className="text-slate-900">Client Data</strong> — plot/unit inventory data, mapping
            and area data, sale and booking records, end-customer personal data, documents, and
            transaction/audit logs that the Client or its Authorised Users upload or enter on the
            Platform.
          </li>
          <li>
            <strong className="text-slate-900">Communications</strong> — messages you send us via forms,
            email, phone, or WhatsApp regarding demos, support, or sales.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. How we use personal data">
        <p>We use Personal Data to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>provide, operate, secure, and support the website and the Services;</li>
          <li>create and manage accounts, authenticate users, and process billing;</li>
          <li>respond to enquiries, demos, and support requests;</li>
          <li>send service-related notices (including security and policy updates);</li>
          <li>improve the Platform, analytics, and Documentation, including through Aggregated Data
            and Derived Data that do not identify the Client, any Authorised User, or any natural
            person; and</li>
          <li>comply with Applicable Law and enforce our agreements.</li>
        </ul>
        <p>
          Where we process Personal Data comprised within Client Data, we do so only to provide the
          Services, in accordance with the Client’s documented instructions (deemed to include
          instructions necessarily implied by the Client’s configuration and use of the Platform),
          except where Applicable Law requires otherwise.
        </p>
      </LegalSection>

      <LegalSection title="5. Client responsibilities for end-user data">
        <p>
          Before uploading or entering any Personal Data onto the Platform (whether of employees,
          contractors, customers, or other end-users), the Client must obtain valid, informed consent
          from each relevant Data Principal, compliant with the DPDP Act, covering all purposes for
          which such Personal Data is intended to be collected, stored, and processed through use of
          the Platform.
        </p>
        <p>The Client is solely responsible for:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>determining which categories of Personal Data it uploads;</li>
          <li>providing all notices required under Section 5 of the DPDP Act; and</li>
          <li>maintaining records evidencing such consent.</li>
        </ul>
        <p>
          We have no obligation to independently verify the validity of consent obtained by the Client.
        </p>
      </LegalSection>

      <LegalSection title="6. Sharing and sub-processors">
        <p>
          We may engage third-party sub-processors (including our VPS/cloud hosting provider) to process
          Client Data and other data needed to deliver the Services, provided such sub-processors are
          bound by confidentiality and data-protection obligations no less protective than those in our
          Master Services Agreement.
        </p>
        <p>
          As at the effective date of this policy, Client Data is hosted in India. If Client Data is
          hosted or processed on servers outside India in the future, any transfer of Personal Data
          outside India shall be undertaken in compliance with Section 16 of the DPDP Act, including any
          list of restricted countries or territories notified by the Central Government from time to
          time.
        </p>
        <p>
          We do not sell Personal Data. We may disclose information if required by Applicable Law, a
          court, or a governmental or regulatory authority, or in connection with a merger, acquisition,
          or sale of assets relating to the Platform, subject to appropriate confidentiality
          protections.
        </p>
      </LegalSection>

      <LegalSection title="7. Security">
        <p>
          We implement reasonable technical and organisational security safeguards, consistent with
          Section 8(5) of the DPDP Act and prevailing industry practice, to protect Client Data and
          other Personal Data against accidental or unlawful destruction, loss, alteration, unauthorised
          disclosure, or access.
        </p>
        <p>
          Clients are responsible for maintaining the confidentiality of login credentials issued to
          Authorised Users and for all activity occurring under such credentials, and should promptly
          notify us of any unauthorised access or use.
        </p>
      </LegalSection>

      <LegalSection title="8. Retention">
        <p>
          We may retain Client Data for so long as the Client continues to use the Platform, and
          thereafter for a period as is required by Applicable Law. On termination or expiry of a
          subscription:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            on the Client’s written request made within 30 (thirty) days of termination, we will make
            available a reasonable export of the Client Data in a standard machine-readable format; and
          </li>
          <li>
            following that export window (or immediately, if no export is requested), we will delete or
            anonymise the Client Data in our systems, save for any copies we are required to retain under
            Applicable Law.
          </li>
        </ul>
        <p>
          Account, billing, and website enquiry records are retained for as long as needed for the
          purposes described in this policy or as required by Applicable Law.
        </p>
      </LegalSection>

      <LegalSection title="9. Personal data breaches">
        <p>
          We will notify the Client without undue delay on becoming aware of a Personal Data breach
          affecting Client Data, and will provide reasonably requested cooperation to enable the Client
          to comply with its own breach-notification obligations under the DPDP Act.
        </p>
      </LegalSection>

      <LegalSection title="10. Data Principal rights">
        <p>
          Where we are the Data Fiduciary (for example, for demo enquiries or Authorised User account
          data we hold for our own business purposes), Data Principals may contact us to exercise rights
          available under the DPDP Act, subject to Applicable Law and identity verification.
        </p>
        <p>
          Where Personal Data sits within Client Data on the Platform, we provide the Client such
          technical assistance as is reasonably available through the Platform’s existing functionality
          to help the Client respond to Data Principals exercising their rights. Responding to such
          requests (including identity verification and the final decision on the request) remains the
          Client’s sole responsibility as Data Fiduciary.
        </p>
      </LegalSection>

      <LegalSection title="11. Aggregated and derived data">
        <p>
          We may create Aggregated Data (Client Data and/or Platform usage data that has been aggregated,
          anonymised and/or de-identified) and Derived Data (insights, analytics, models, benchmarks, or
          reports generated through processing such data). As between the parties, we own Aggregated Data
          and Derived Data and may use them for lawful business purposes—including product improvement,
          analytics, benchmarking, and new features—provided they do not identify the Client, any
          Authorised User, or any natural person.
        </p>
      </LegalSection>

      <LegalSection title="12. Children">
        <p>
          The Services and website are directed at businesses and professionals. We do not knowingly
          collect Personal Data from children for consumer purposes. If you believe a child has provided
          Personal Data to us inappropriately, contact us and we will take appropriate steps.
        </p>
      </LegalSection>

      <LegalSection title="13. Changes">
        <p>
          We may update this Privacy Policy from time to time. For Clients under a Master Services
          Agreement, material updates that form a Supplemental Policy will be notified as set out in that
          agreement (typically at least 15 days’ prior written notice by email or in-Platform
          notification). The “Effective date” at the top of this page will be revised when changes take
          effect.
        </p>
      </LegalSection>

      <LegalSection title="14. Relationship to the Master Services Agreement">
        <p>
          If you are a Client under a Master Services Agreement and Order Form with{" "}
          {COMPANY.legalName}, the data-protection terms in that agreement (including Clause 8 — Data
          Protection) govern in the event of any conflict with this policy as to processing of Client
          Data on the Platform.
        </p>
      </LegalSection>
    </LegalDocument>
  )
}
