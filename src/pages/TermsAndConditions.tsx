import LegalLayout from "../components/LegalLayout";
import LegalSection from "../components/LegalSection";
import Seo from "../components/Seo";

function TermsAndConditions() {
  return (
    <LegalLayout title="CricAnalyst Terms and Conditions" lastUpdated="20 November 2026">
      <Seo
        title="Terms and Conditions - CricAnalyst"
        description="Read the CricAnalyst Terms and Conditions governing the purchase, subscription, access, and use of the CricAnalyst platform."
        canonicalUrl="https://cricanalyst.io/terms-and-conditions"
      />
      <div className="flex flex-col gap-4">
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          Welcome to CricAnalyst.
        </p>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          These Terms and Conditions ("Terms") govern the purchase, subscription, access, and use of CricAnalyst, a cricket match recording and analytics platform operated by Green Stream Systems & Solutions (Private) Limited ("GreenStream", "we", "us", or "our") in collaboration with TryC Analytics.
        </p>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          CricAnalyst provides software and related services for recording cricket matches, capturing ball-by-ball data, managing match information, analysing player and team performance, processing video content, and generating statistics, reports, and visualisations.
        </p>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          By registering an account, purchasing a subscription, confirming a booking, or accessing or using CricAnalyst, you agree to these Terms and the applicable End User License Agreement (EULA).
        </p>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          If you are accessing CricAnalyst on behalf of a school, club, academy, organisation, or other entity, you confirm that you are authorised to accept these Terms on its behalf.
        </p>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          If you do not agree to these Terms, you must not purchase or use CricAnalyst services.
        </p>
      </div>

      <LegalSection
        heading="1. Scope of Services"
        blocks={[
          { type: "p", text: "CricAnalyst provides cricket recording, data management, and analytical services through its software platform and associated service offerings." },
          { type: "p", text: "Depending on the selected subscription package, available services may include:" },
          {
            type: "ul",
            items: [
              "Ball-by-ball cricket match recording and data capture.",
              "Match, team, and player information management.",
              "Cricket statistics and performance analysis.",
              "Video recording, uploading, processing, and playback.",
              "Match tagging, reporting, and visualisation.",
              "Cloud-based data storage and access.",
              "Analytical support and customised reporting.",
              "Additional technical and on-site services.",
            ],
          },
          { type: "p", text: "Features, access privileges, usage limits, storage allocations, and service availability may vary according to the selected subscription package, customer requirements, and applicable service arrangements." },
          { type: "p", text: "CricAnalyst reserves the right to introduce, improve, modify, or discontinue features where reasonably necessary for technical, operational, security, or business purposes, subject to applicable contractual obligations." },
        ]}
      />

      <LegalSection
        heading="2. Subscription Models"
        blocks={[
          { type: "p", text: "CricAnalyst offers annual subscriptions and match-based subscriptions to accommodate different customer requirements." },
          { type: "subheading", text: "2.1 Annual Subscriptions" },
          { type: "p", text: "Annual subscriptions provide access to CricAnalyst for twelve (12) months from the date of activation." },
          { type: "p", text: "Available packages may include:" },
          { type: "subheading", text: "Basic Plan" },
          { type: "p", text: "Provides access to the CricAnalyst software platform, together with available online training and support." },
          { type: "subheading", text: "Professional Plan" },
          { type: "p", text: "Includes the features of the Basic Plan and additional services, including cloud-based storage within the applicable package allocation." },
          { type: "subheading", text: "Enterprise Plan" },
          { type: "p", text: "Includes the features of the Professional Plan, together with additional analytical support and customised reporting services, subject to the agreed service scope." },
          { type: "p", text: "Enterprise customers requiring customised reports, specialised analytics, or additional services should submit their requirements at least seven (7) calendar days in advance to allow sufficient time for preparation and scheduling." },
          { type: "p", text: "The availability and delivery of customised services remain subject to confirmation by CricAnalyst." },
          { type: "subheading", text: "2.2 Match-Based Subscriptions" },
          { type: "p", text: "Match-based subscriptions provide temporary access to CricAnalyst for specific cricket matches or match days." },
          { type: "p", text: "Available options include:" },
          {
            type: "ul-rich",
            items: [
              { label: "Single-Day Subscription:", text: "Software access for one confirmed match day." },
              { label: "Multi-Day Subscription:", text: "Software access for two or more confirmed match days." },
            ],
          },
          { type: "p", text: "Match-based subscriptions are limited to the purchased dates, authorised users, and applicable service features." },
          { type: "p", text: "Additional match days, extended access, or supplementary services may require additional payments." },
          { type: "subheading", text: "2.3 Subscription Packages and Pricing" },
          { type: "p", text: "Subscription fees, available features, storage allocations, user limits, and other conditions will be specified through the applicable pricing information, quotation, invoice, or order confirmation." },
          { type: "p", text: "Prices may vary according to customer category, location (Special rates for Sri Lankan schools and institutions), currency, subscription package, usage requirements, and additional services." },
          { type: "p", text: "CricAnalyst may revise its pricing and subscription packages from time to time. Revised prices will apply prospectively and will not change an already confirmed purchase unless otherwise agreed." },
          { type: "p", text: "For current pricing and package information, customers should refer to the official CricAnalyst website or contact the CricAnalyst team." },
        ]}
      />

      <LegalSection
        heading="3. Payment Terms and Subscription Activation"
        blocks={[
          { type: "subheading", text: "3.1 Advance Payment" },
          { type: "p", text: "All annual subscriptions and match-based subscriptions require 100% payment in advance." },
          { type: "p", text: "Full payment must be received and verified before software access is activated, renewed, or extended." },
          { type: "p", text: "CricAnalyst reserves the right to withhold subscription activation until the applicable payment has been confirmed." },
          { type: "subheading", text: "3.2 Approved Payment Methods" },
          { type: "p", text: "Payments must be made using the approved payment methods communicated through the relevant invoice or official payment instructions." },
          { type: "p", text: "Customers are responsible for providing accurate payment information and ensuring that payments are completed within the specified period." },
          { type: "subheading", text: "3.3 Additional Services" },
          { type: "p", text: "Additional services, including video feed setup, camera provision, on-site analyst support, and customised services, may be invoiced after the services have been delivered." },
          { type: "p", text: "Payment must be completed within the period specified in the relevant invoice." },
          { type: "p", text: "Where advance payment is required for a particular additional service, this will be communicated and agreed upon before confirmation." },
          { type: "subheading", text: "3.4 Taxes and Additional Charges" },
          { type: "p", text: "Applicable taxes, payment processing fees, bank charges, and other agreed charges will be specified in the relevant quotation or invoice where applicable." },
          { type: "p", text: "Customers are responsible for any additional charges imposed by their banks, payment service providers, or relevant authorities unless otherwise agreed." },
          { type: "p", text: "CricAnalyst will apply taxes only where required under applicable law." },
        ]}
      />

      <LegalSection
        heading="4. Annual Subscription Duration and Renewal"
        blocks={[
          { type: "p", text: "Annual subscriptions are valid for twelve (12) months from the date of activation." },
          { type: "p", text: "Customers must complete their renewal payments (prices may change due to increased operations and other costs) before the subscription expiry date to maintain uninterrupted access to the applicable services." },
          { type: "p", text: "Subscriptions do not automatically renew unless an automatic renewal arrangement has been expressly agreed upon." },
          { type: "p", text: "Failure to renew may result in the restriction or suspension of software access and associated cloud-based services in accordance with Section 14." },
          { type: "p", text: "Any changes to subscription packages, storage allocations, or additional services will be subject to the applicable charges and agreed conditions." },
          { type: "p", text: "Unused subscription periods are generally non-refundable, except where required by applicable law or where a refund is approved under these Terms." },
        ]}
      />

      <LegalSection
        heading="5. Match-Based Bookings and Service Delivery"
        blocks={[
          { type: "p", text: "Match-based subscriptions must be purchased for the intended match dates." },
          { type: "p", text: "Customers are responsible for providing accurate information concerning the match schedule, venue, duration, and any additional services required." },
          { type: "p", text: "Software access will be provided for the confirmed subscription period, subject to payment verification and applicable technical requirements." },
          { type: "p", text: "Customers requiring additional match days or extended services must contact CricAnalyst to confirm availability and applicable charges." },
          { type: "p", text: "Where on-site analysts, cameras, or other equipment are requested, service delivery will be subject to resource availability, venue access, and the agreed service arrangements." },
          { type: "p", text: "Customers are responsible for obtaining any necessary venue permissions and providing reasonable access and operational facilities required for service delivery." },
        ]}
      />

      <LegalSection
        heading="6. Match Cancellation and Refund Policy"
        blocks={[
          { type: "p", text: "Once a match-based subscription booking and payment have been confirmed, the subscription fee is generally non-refundable." },
          { type: "p", text: "No refund will ordinarily be provided where a scheduled match is cancelled, abandoned, or interrupted due to:" },
          {
            type: "ul",
            items: [
              "Rain or adverse weather conditions.",
              "Ground or venue conditions.",
              "Decisions made by match officials or organisers.",
              "Changes to the participating teams or match schedule.",
              "Other circumstances outside our reasonable control.",
            ],
          },
          { type: "p", text: "This condition applies whether or not the scheduled match has commenced." },
          { type: "p", text: "However, this provision does not exclude refunds or other remedies required under applicable law or available for verified failures attributable to CricAnalyst." },
          { type: "p", text: "Where a match is postponed rather than cancelled, the postponement arrangements in Section 7 will apply." },
        ]}
      />

      <LegalSection
        heading="7. Match Postponement and Rescheduling"
        blocks={[
          { type: "p", text: "If a confirmed match is postponed or called off before the commencement of play due to unforeseen circumstances, and the match officials officially announce a rescheduled date, the original match payment will be carried forward to the rescheduled date without any additional match charges, provided the client informs CricAnalyst of the revised schedule. No refunds will be provided in such circumstances." },
          { type: "p", text: "However, if a match is abandoned after the commencement of play, any subsequent rescheduling of the match will be treated as a new booking, and the applicable match charges will apply. No refunds will be provided for the original match payment." },
          { type: "p", text: "Under the standard Sri Lankan pricing arrangement, the rescheduling charge is LKR 7,500 per rescheduled match day." },
          { type: "p", text: "For customers purchasing under other currencies or individually agreed packages, the applicable rescheduling charge will be specified in the relevant quotation or booking confirmation." },
          { type: "p", text: "All rescheduling charges must be paid and verified before software access is provided for the replacement dates." },
          { type: "p", text: "Rescheduling is subject to confirmation and the availability of any required technical or on-site services." },
          { type: "p", text: "Where CricAnalyst is unable to provide the agreed service on a rescheduled date, the parties may agree on an alternative arrangement or an appropriate refund or credit for services that cannot be delivered." },
        ]}
      />

      <LegalSection
        heading="8. Technical Service Failures, Refunds and Credit Adjustments"
        blocks={[
          { type: "p", text: "CricAnalyst takes reasonable measures to provide reliable software access and associated services." },
          { type: "p", text: "However, temporary interruptions may occur due to technical faults, internet connectivity, hosting infrastructure, maintenance, third-party services, or other operational circumstances." },
          { type: "p", text: "Where a verified failure attributable to CricAnalyst materially prevents delivery of a purchased service, the customer may contact CricAnalyst to request a review." },
          { type: "p", text: "Depending on the circumstances, an appropriate resolution may include:" },
          {
            type: "ul",
            items: [
              "Restoration of the affected service.",
              "Provision of equivalent service access on an alternative date.",
              "Extension of the affected subscription period.",
              "Service credits or adjustments.",
              "A partial or full refund for services that could not be delivered.",
            ],
          },
          { type: "p", text: "Refunds or adjustments may also be considered for duplicate payments, incorrect billing, or verified payments for services that cannot be supplied." },
          { type: "p", text: "Each request will be reviewed according to the nature of the issue, the services already delivered, and applicable legal requirements." },
          { type: "p", text: "Refunds approved by CricAnalyst will be processed through an appropriate payment method, subject to the processing times of the relevant financial institutions or payment providers." },
          { type: "p", text: "Nothing in these Terms limits any mandatory refund or consumer protection rights available under applicable law." },
        ]}
      />

      <LegalSection
        heading="9. Additional Services and Cloud Storage"
        blocks={[
          { type: "p", text: "CricAnalyst may offer supplementary services, including:" },
          {
            type: "ul",
            items: [
              "Video feed setup and camera provision.",
              "On-site match analysts.",
              "Customised analytical reports.",
              "Additional cloud storage.",
              "Technical assistance and other agreed services.",
            ],
          },
          { type: "p", text: "Additional services are subject to availability, applicable charges, and confirmation of the required scope." },
          { type: "subheading", text: "9.1 Cloud Storage" },
          { type: "p", text: "Cloud storage allocations depend on the purchased subscription package." },
          { type: "p", text: "Customers requiring storage beyond their allocated capacity may purchase additional storage according to the applicable pricing arrangements." },
          { type: "p", text: "CricAnalyst may notify customers when their storage usage approaches or exceeds the allocated limit." },
          { type: "p", text: "Further uploads or storage-related features may be restricted where the purchased storage allocation has been exceeded and additional capacity has not been arranged." },
          { type: "subheading", text: "9.2 Customer Data Backup" },
          { type: "p", text: "Customers are encouraged to maintain independent copies of important match videos, statistical records, reports, and other critical information." },
          { type: "p", text: "CricAnalyst will take reasonable measures to maintain the security and integrity of stored data but does not guarantee that data will remain available indefinitely." },
          { type: "p", text: "Data retention and deletion arrangements are governed by Section 14 and the CricAnalyst Privacy Policy." },
        ]}
      />

      <LegalSection
        heading="10. User Accounts and Responsibilities"
        blocks={[
          { type: "p", text: "Certain CricAnalyst services require users to create and maintain registered accounts." },
          { type: "p", text: "Users are responsible for:" },
          {
            type: "ul",
            items: [
              "Providing accurate and up-to-date account information.",
              "Maintaining the confidentiality of login credentials.",
              "Restricting account access to authorised individuals.",
              "Preventing unauthorised account sharing or transfer.",
              "Complying with applicable laws and platform usage requirements.",
              "Reporting suspected security breaches or unauthorised access.",
            ],
          },
          { type: "p", text: "Accounts must not be sold, transferred, shared, or otherwise provided to unauthorised third parties without written permission from CricAnalyst." },
          { type: "p", text: "Users must not attempt to interfere with the platform, bypass security controls, access restricted information, or use the software for unlawful purposes." },
          { type: "p", text: "Further licensing conditions and restrictions are provided in the CricAnalyst End User License Agreement (EULA)." },
        ]}
      />

      <LegalSection
        heading="11. Match Data, Videos and User Content"
        blocks={[
          { type: "p", text: 'CricAnalyst allows users to create, record, upload, store, analyse, and export cricket-related information, including match data, player information, statistics, videos, images, reports, and other materials ("User Content").' },
          { type: "subheading", text: "11.1 Ownership of User Content" },
          { type: "p", text: "Customers retain ownership of User Content that they legally own." },
          { type: "p", text: "CricAnalyst does not acquire ownership of original match footage, match records, or other customer-owned content merely because such information is uploaded, recorded, stored, or processed through the platform." },
          { type: "subheading", text: "11.2 Permission to Process User Content" },
          { type: "p", text: "By using CricAnalyst, customers grant GreenStream and its authorised service providers the limited rights reasonably necessary to host, store, process, transmit, analyse, display, and technically manage User Content for the purpose of delivering and supporting the contracted services." },
          { type: "p", text: "These rights do not constitute a transfer of ownership." },
          { type: "subheading", text: "11.3 Responsibility for Content" },
          { type: "p", text: "Customers are responsible for ensuring that they possess the necessary rights, permissions, licences, and consents to record, upload, process, or otherwise use content through CricAnalyst." },
          { type: "p", text: "This includes permissions relating to:" },
          {
            type: "ul",
            items: [
              "Players, coaches, and team officials.",
              "Match organisers and participating organisations.",
              "Schools, clubs, and cricket academies.",
              "Grounds, venues, and event organisers.",
              "Broadcasters and owners of video footage.",
              "Parents or legal guardians where minors are involved, when required by law.",
            ],
          },
          { type: "p", text: "CricAnalyst does not independently grant customers any recording, broadcasting, intellectual property, or other rights that they do not otherwise possess." },
        ]}
      />

      <LegalSection
        heading="12. Data Processing, Research and AI Analytics"
        blocks={[
          { type: "p", text: "CricAnalyst may process match data and related information to provide statistical analysis, performance reports, visualisations, and other analytical services." },
          { type: "p", text: "Such processing may also support platform maintenance, security, troubleshooting, and service improvements." },
          { type: "p", text: "CricAnalyst may develop advanced analytical capabilities, including AI-powered cricket performance analysis and predictive applications." },
          { type: "p", text: "Any secondary use of identifiable, confidential, or customer-restricted information for research, AI model training, product development, or publication will be subject to applicable contractual authorisation, legal requirements, and appropriate privacy safeguards." },
          { type: "p", text: "Where required, CricAnalyst will obtain the necessary customer authorisation or individual consent before undertaking such processing." },
          { type: "p", text: "Aggregated or appropriately anonymised information may be used for lawful statistical analysis, research, and service improvement, provided that applicable privacy and confidentiality requirements are respected." },
          { type: "p", text: "Additional information concerning personal data processing is provided in the CricAnalyst Privacy Policy." },
        ]}
      />

      <LegalSection
        heading="13. Service Availability and Technical Support"
        blocks={[
          { type: "p", text: "CricAnalyst relies on internet connectivity, cloud infrastructure, hosting providers, databases, third-party services, and other technologies." },
          { type: "p", text: "Although reasonable efforts are made to maintain service availability, CricAnalyst does not guarantee uninterrupted, error-free, or continuous operation." },
          { type: "p", text: "Temporary interruptions may occur due to scheduled maintenance, software updates, security measures, infrastructure failures, or circumstances outside our reasonable control." },
          { type: "p", text: "Where reasonably practicable, CricAnalyst will provide advance notice of planned maintenance that may materially affect service availability." },
          { type: "p", text: "Technical support will be provided according to the applicable subscription package and available support arrangements." },
          { type: "p", text: "CricAnalyst does not guarantee any particular cricket performance outcome, analytical result, or decision based on information generated through the platform." },
          { type: "p", text: "Customers remain responsible for independently reviewing important match records, statistics, reports, and analytical outputs before relying on them for significant decisions." },
        ]}
      />

      <LegalSection
        heading="14. Subscription Expiry, Service Suspension and Data Deletion"
        blocks={[
          { type: "subheading", text: "14.1 Subscription Expiry" },
          { type: "p", text: "Upon expiry of an annual subscription, the customer's entitlement to continued software access ends unless the subscription is renewed." },
          { type: "p", text: "CricAnalyst reserves the right to suspend software access and associated cloud-based services, including stored match videos and analytical information, within three (3) months following subscription expiry." },
          { type: "subheading", text: "14.2 Suspension Notice" },
          { type: "p", text: "For suspension arising from non-renewal of an annual subscription, CricAnalyst will issue a formal notice at least two (2) months before the scheduled suspension date." },
          { type: "p", text: "The notice will specify:" },
          {
            type: "ul",
            items: [
              "The subscription expiry status.",
              "The proposed suspension date.",
              "Available subscription renewal options.",
              "Instructions for downloading or transferring available data.",
              "Any applicable deadlines concerning account or data retention.",
            ],
          },
          { type: "p", text: "Customers are responsible for completing the necessary renewal arrangements or data backups before the notified deadlines." },
          { type: "subheading", text: "14.3 Account and Data Deletion" },
          { type: "p", text: "Where a customer fails to renew the subscription or respond to the relevant notices, CricAnalyst reserves the right to permanently delete the associated account and stored information after the applicable deletion deadline has been communicated." },
          { type: "p", text: "Such information may include match videos, analytical records, reports, and other customer content." },
          { type: "p", text: "The permanent deletion deadline will be separately communicated, allowing customers a reasonable opportunity to retrieve available information before deletion." },
          { type: "p", text: "Certain information may be retained where required by law, for legitimate security or dispute-resolution purposes, or temporarily within established backup retention processes." },
          { type: "p", text: "Once information has been permanently deleted from the relevant systems and backups, recovery may no longer be possible." },
          { type: "subheading", text: "14.4 Suspension for Other Reasons" },
          { type: "p", text: "CricAnalyst may suspend or restrict access where reasonably necessary due to:" },
          {
            type: "ul",
            items: [
              "Material violations of these Terms or the EULA.",
              "Fraudulent or unlawful activities.",
              "Unauthorised account access.",
              "Serious security threats.",
              "Significant misuse of platform resources.",
              "Applicable legal or regulatory requirements.",
            ],
          },
          { type: "p", text: "Where reasonably practicable and legally permitted, customers will be informed of the reason for suspension and any available corrective action." },
        ]}
      />

      <LegalSection
        heading="15. Intellectual Property and Software Licensing"
        blocks={[
          { type: "p", text: "CricAnalyst, including its software, source code, platform architecture, interfaces, designs, branding, databases, analytical methods, documentation, and proprietary technologies, is owned by or licensed to GreenStream and/or its respective technology and collaboration partners." },
          { type: "p", text: "Purchasing a subscription does not transfer ownership of CricAnalyst or its underlying intellectual property." },
          { type: "p", text: "Customers receive a limited right to access and use the software in accordance with the purchased subscription and the CricAnalyst End User License Agreement." },
          { type: "p", text: "Users must not copy, reverse engineer, commercially redistribute, sublicense, or otherwise exploit CricAnalyst or its proprietary technologies except where expressly authorised or permitted by applicable law." },
          { type: "p", text: "Nothing in this section affects customers' ownership of User Content that they legally own." },
        ]}
      />

      <LegalSection
        heading="16. Disclaimer and Limitation of Liability"
        blocks={[
          { type: "p", text: "CricAnalyst provides software and analytical tools intended to assist cricket match recording, data management, performance analysis, and decision-making." },
          { type: "p", text: "While reasonable efforts are made to ensure reliability, CricAnalyst does not guarantee that all recordings, statistics, reports, visualisations, or analytical outputs will be completely accurate, uninterrupted, or free from errors." },
          { type: "p", text: "To the maximum extent permitted by applicable law, GreenStream and its collaboration partners shall not be liable for indirect, incidental, consequential, or similar losses arising from the use of or inability to use CricAnalyst, including loss of business opportunities, anticipated profits, or business interruption." },
          { type: "p", text: "Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited, including liability arising from fraud or other conduct for which exclusion is prohibited by applicable law." },
          { type: "p", text: "The remedies for verified failures in delivering purchased services are addressed in Section 8." },
        ]}
      />

      <LegalSection
        heading="17. Changes to Terms, Governing Law and Dispute Resolution"
        blocks={[
          { type: "subheading", text: "17.1 Changes to Terms" },
          { type: "p", text: "CricAnalyst may update these Terms from time to time to reflect changes in services, technology, subscription arrangements, business operations, security requirements, or applicable laws." },
          { type: "p", text: "The latest version will display its updated date." },
          { type: "p", text: "Where changes materially affect existing paid subscriptions, CricAnalyst will provide reasonable advance notice where practicable." },
          { type: "p", text: "Changes will not retrospectively remove rights already accrued under an existing agreement unless legally permitted and appropriately agreed." },
          { type: "p", text: "Continued use following the effective date of a validly notified update may constitute acceptance of the revised Terms, subject to applicable law." },
          { type: "subheading", text: "17.2 Governing Law" },
          { type: "p", text: "These Terms are governed by the laws of Sri Lanka, subject to any mandatory legal protections that may apply to customers in other jurisdictions." },
          { type: "subheading", text: "17.3 Dispute Resolution" },
          { type: "p", text: "Customers are encouraged to contact CricAnalyst in the first instance regarding any dispute relating to subscriptions, payments, services, or platform usage." },
          { type: "p", text: "GreenStream will make reasonable efforts to review complaints and resolve disputes amicably." },
          { type: "p", text: "Nothing in these Terms prevents a party from pursuing remedies before a competent court or other authority where permitted by applicable law." },
          { type: "subheading", text: "17.4 Related Policies" },
          { type: "p", text: "These Terms should be read together with the following documents:" },
          {
            type: "ul-links",
            items: [
              { label: "CricAnalyst End User License Agreement (EULA): https://cricanalyst.io/eula", href: "https://cricanalyst.io/eula" },
              { label: "CricAnalyst Privacy Policy: https://cricanalyst.io/privacy-policy", href: "https://cricanalyst.io/privacy-policy" },
            ],
          },
          { type: "p", text: "The EULA governs software licensing and permitted use, while the Privacy Policy explains the processing and protection of personal information." },
          { type: "p", text: "Where an accepted quotation or separately executed agreement expressly modifies a commercial provision, the specifically agreed provision will apply to that transaction, subject to applicable law." },
        ]}
      />

      <LegalSection
        heading="18. Contact Us"
        blocks={[
          {
            type: "p",
            text: "For questions regarding these Terms, subscription packages, payments, bookings, refunds, account management, or CricAnalyst services, please contact:",
          },
          {
            type: "contact",
            lines: [
              "Green Stream Systems & Solutions (Private) Limited",
              "CricAnalyst",
              "In collaboration with TryC Analytics",
              "Email: info@cricanalyst.io",
              "CC: contact@greenstream.lk",
              "Mobile: +94 76 889 0999",
              "Phone: +94 112 223 326",
              "Website: https://cricanalyst.io",
            ],
          },
        ]}
      />

      <p className="text-gray-400 text-sm border-t border-gray-100 pt-8">
        © 2026 Green Stream Systems & Solutions (Private) Limited. All rights reserved.
      </p>
    </LegalLayout>
  );
}

export default TermsAndConditions;
