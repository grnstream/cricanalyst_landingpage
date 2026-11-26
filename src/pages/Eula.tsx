import LegalLayout from "../components/LegalLayout";
import LegalSection from "../components/LegalSection";
import Seo from "../components/Seo";

function Eula() {
  return (
    <LegalLayout title="CricAnalyst End User License Agreement (EULA)" lastUpdated="20 November 2026">
      <Seo
        title="EULA - End User License Agreement | CricAnalyst"
        description="Review the End User License Agreement (EULA) for CricAnalyst platform, detailing usage terms, subscriptions, and intellectual property."
        canonicalUrl="https://cricanalyst.io/eula"
      />
      <div className="flex flex-col gap-4">
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          This End User License Agreement ("EULA") governs access to and use of CricAnalyst, a cricket match recording and analytics platform operated by Green Stream Systems & Solutions (Private) Limited ("GreenStream", "we", "us", or "our") in collaboration with TryC Analytics.
        </p>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          By creating an account, purchasing a subscription, accessing, or using CricAnalyst, you agree to comply with this EULA and the applicable CricAnalyst Terms and Conditions.
        </p>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          If you use CricAnalyst on behalf of a school, club, academy, organisation, or other entity, you confirm that you are authorised to accept this EULA on its behalf.
        </p>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          If you do not agree to this EULA, you must not access or use the platform.
        </p>
      </div>

      <LegalSection
        heading="1. About CricAnalyst"
        blocks={[
          { type: "p", text: "CricAnalyst is a software platform designed to support cricket match recording, structured ball-by-ball data capture, video management, statistical analysis, performance evaluation, reporting, and visualisation." },
          { type: "p", text: "Depending on the selected subscription package, available features may include:" },
          {
            type: "ul",
            items: [
              "Ball-by-ball match recording and data management.",
              "Player, team, and match information management.",
              "Match statistics and performance analysis.",
              "Video recording, uploading, processing, and playback.",
              "Match tagging and analytical visualisations.",
              "Performance reports and customised analytics.",
              "Cloud-based storage and data access.",
              "Other related cricket analytical services.",
            ],
          },
          { type: "p", text: "Features, access privileges, usage limits, and storage allocations may vary according to the selected subscription package and applicable service arrangements." },
        ]}
      />

      <LegalSection
        heading="2. License to Use CricAnalyst"
        blocks={[
          { type: "p", text: "Subject to compliance with this EULA, the CricAnalyst Terms and Conditions, and payment of applicable subscription fees, GreenStream grants authorised users a limited, non-exclusive, non-transferable, non-sublicensable, and revocable right to access and use CricAnalyst for its intended purposes during the applicable subscription period." },
          { type: "p", text: "This licence permits users to access the software and use the features available under their subscription package." },
          { type: "p", text: "The licence does not transfer ownership of CricAnalyst, its software, source code, platform architecture, databases, analytical methods, designs, branding, or other proprietary technologies." },
          { type: "p", text: "The licence may be restricted, suspended, or terminated in accordance with this EULA and the CricAnalyst Terms and Conditions." },
        ]}
      />

      <LegalSection
        heading="3. Subscription-Based Access"
        blocks={[
          { type: "p", text: "CricAnalyst is made available through annual subscriptions and match-based subscriptions." },
          { type: "subheading", text: "3.1 Annual Subscriptions" },
          { type: "p", text: "Annual subscriptions provide authorised access to the software for twelve (12) months from the activation date, subject to the purchased package and applicable conditions." },
          { type: "subheading", text: "3.2 Match-Based Subscriptions" },
          { type: "p", text: "Match-based subscriptions provide temporary access to the software for confirmed single-day or multi-day cricket matches." },
          { type: "p", text: "Access is limited to the purchased subscription period and applicable service features." },
          { type: "subheading", text: "3.3 Subscription Conditions" },
          { type: "p", text: "Subscription fees, payment arrangements, renewals, cancellations, postponements, refunds, additional services, and cloud storage charges are governed by the CricAnalyst Terms and Conditions." },
          { type: "p", text: "Access may be restricted or suspended when a subscription expires, remains unpaid, or is otherwise terminated in accordance with the applicable agreement." },
        ]}
      />

      <LegalSection
        heading="4. User Accounts and Access Security"
        blocks={[
          { type: "p", text: "Certain CricAnalyst services require a registered user account." },
          { type: "p", text: "Users are responsible for:" },
          {
            type: "ul",
            items: [
              "Providing accurate and current registration information.",
              "Maintaining the confidentiality of usernames and passwords.",
              "Preventing unauthorised access to their accounts.",
              "Restricting access to authorised users.",
              "Promptly reporting suspected account misuse or security incidents.",
              "Complying with the applicable subscription and usage restrictions.",
            ],
          },
          { type: "p", text: "Users must not sell, transfer, share, or provide account access to unauthorised third parties without written permission from GreenStream." },
          { type: "p", text: "Where an organisation maintains multiple authorised users, the organisation is responsible for managing access privileges and ensuring that its users comply with this EULA." },
          { type: "p", text: "GreenStream may temporarily restrict account access where reasonably necessary to protect platform security, investigate suspected misuse, or prevent unauthorised activity." },
        ]}
      />

      <LegalSection
        heading="5. Acceptable Use and Restrictions"
        blocks={[
          { type: "p", text: "CricAnalyst must be used only for lawful and authorised purposes." },
          { type: "p", text: "Users must not:" },
          {
            type: "ul",
            items: [
              "Violate applicable laws, regulations, or third-party rights.",
              "Access another user's account or information without authorisation.",
              "Circumvent security mechanisms, subscription restrictions, or access controls.",
              "Introduce malicious software or interfere with platform operation.",
              "Copy, modify, reproduce, distribute, or create unauthorised derivative works of CricAnalyst.",
              "Reverse engineer, decompile, or attempt to obtain the platform's source code, except where permitted by applicable law.",
              "Use automated tools to scrape, extract, or systematically reproduce proprietary platform content without authorisation.",
              "Resell, sublicense, or commercially redistribute access to CricAnalyst without written permission.",
              "Use the platform to upload, process, or distribute unlawful, infringing, or unauthorised content.",
              "Use CricAnalyst in a manner that materially disrupts the services provided to other users.",
            ],
          },
          { type: "p", text: "GreenStream reserves the right to investigate suspected violations and take proportionate corrective action, including restricting, suspending, or terminating access where justified." },
        ]}
      />

      <LegalSection
        heading="6. Match Data, Videos and User Content"
        blocks={[
          { type: "p", text: 'CricAnalyst may allow users to record, upload, store, process, analyse, manage, or export cricket-related information, including match records, player information, statistics, videos, images, reports, and other materials ("User Content").' },
          { type: "subheading", text: "6.1 Ownership of User Content" },
          { type: "p", text: "Users retain ownership of User Content that they legally own." },
          { type: "p", text: "CricAnalyst does not acquire ownership of original match footage, match data, or other customer-owned content merely because it is recorded, uploaded, stored, or processed through the platform." },
          { type: "subheading", text: "6.2 Permission to Process Content" },
          { type: "p", text: "By using CricAnalyst, users grant GreenStream and its authorised service providers the limited rights reasonably necessary to host, store, process, transmit, analyse, display, and technically manage User Content for the purpose of delivering, maintaining, securing, and supporting the contracted CricAnalyst services." },
          { type: "p", text: "This permission does not transfer ownership of User Content." },
          { type: "subheading", text: "6.3 Responsibility for Content" },
          { type: "p", text: "Users are responsible for ensuring that they possess the necessary rights, permissions, licences, and consents to record, upload, store, process, or otherwise use content through CricAnalyst." },
          { type: "p", text: "Such permissions may relate to players, teams, coaches, schools, clubs, academies, match organisers, venues, broadcasters, video owners, and other relevant parties." },
          { type: "p", text: "Where minors are involved, users must obtain any parental, guardian, or institutional permissions required by applicable law." },
          { type: "p", text: "CricAnalyst does not independently grant users any recording, broadcasting, intellectual property, or other rights that they do not otherwise possess." },
        ]}
      />

      <LegalSection
        heading="7. Data Processing, Research and AI Analytics"
        blocks={[
          { type: "p", text: "CricAnalyst may process match data and related information to provide statistical analysis, performance reports, visualisations, and other services available under the user's subscription." },
          { type: "p", text: "Such processing may also be necessary for platform operation, maintenance, troubleshooting, security, and service improvement." },
          { type: "p", text: "CricAnalyst may develop advanced analytical capabilities, including AI-powered cricket analytics and predictive applications." },
          { type: "p", text: "Any secondary use of identifiable, confidential, or customer-restricted information for research, AI model training, product development, or publication will be subject to applicable contractual authorisation, legal requirements, and appropriate privacy safeguards." },
          { type: "p", text: "Where required, CricAnalyst will obtain the necessary customer authorisation or individual consent before undertaking such processing." },
          { type: "p", text: "Aggregated or appropriately anonymised information may be used for lawful statistical analysis, research, and service improvement, provided applicable privacy and confidentiality requirements are respected." },
          { type: "p", text: "Personal information will be handled in accordance with the CricAnalyst Privacy Policy." },
        ]}
      />

      <LegalSection
        heading="8. Intellectual Property Rights"
        blocks={[
          { type: "p", text: "CricAnalyst, including its software, source code, platform architecture, interfaces, designs, branding, databases, analytical methods, visualisations, documentation, and associated proprietary materials, is owned by or licensed to GreenStream and/or its respective technology and collaboration partners, as applicable." },
          { type: "p", text: "All rights not expressly granted under this EULA are reserved by their respective owners." },
          { type: "p", text: "Users must not reproduce, distribute, modify, commercially exploit, or otherwise use CricAnalyst proprietary materials beyond the permissions granted under this EULA." },
          { type: "p", text: "Nothing in this EULA transfers ownership of CricAnalyst or its underlying intellectual property to users." },
          { type: "p", text: "These restrictions do not affect users' ownership of User Content that they legally own." },
        ]}
      />

      <LegalSection
        heading="9. Third-Party Services and Technologies"
        blocks={[
          { type: "p", text: "CricAnalyst may rely on third-party technologies and service providers for hosting, authentication, databases, cloud storage, video processing, communications, analytics, and other technical functions." },
          { type: "p", text: "The availability and performance of these services may affect certain CricAnalyst features." },
          { type: "p", text: "Where applicable, users may also be subject to the lawful terms and conditions of third-party services they independently access or use." },
          { type: "p", text: "GreenStream will take reasonable measures when selecting and managing service providers but cannot guarantee uninterrupted operation of all third-party infrastructure." },
        ]}
      />

      <LegalSection
        heading="10. Service Availability, Updates and Maintenance"
        blocks={[
          { type: "p", text: "GreenStream takes reasonable measures to maintain the functionality, reliability, and security of CricAnalyst." },
          { type: "p", text: "However, uninterrupted, continuous, or error-free operation cannot be guaranteed." },
          { type: "p", text: "Temporary service interruptions may occur due to:" },
          {
            type: "ul",
            items: [
              "Scheduled maintenance and software updates.",
              "Hosting or cloud infrastructure issues.",
              "Internet connectivity failures.",
              "Third-party service interruptions.",
              "Security incidents or emergency maintenance.",
              "Other circumstances outside our reasonable control.",
            ],
          },
          { type: "p", text: "CricAnalyst may introduce updates, improvements, security patches, new features, or modifications to existing functionality." },
          { type: "p", text: "Where reasonably practicable, users will be informed in advance of planned maintenance or material service changes that may affect their access." },
          { type: "p", text: "Material failures in delivering purchased services will be addressed in accordance with the CricAnalyst Terms and Conditions and applicable law." },
        ]}
      />

      <LegalSection
        heading="11. Accuracy of Analytical Information"
        blocks={[
          { type: "p", text: "CricAnalyst provides tools intended to assist cricket match recording, data management, statistical analysis, performance evaluation, and decision-making." },
          { type: "p", text: "Although reasonable efforts are made to provide reliable functionality and analytical outputs, GreenStream does not guarantee that every recording, statistic, visualisation, report, or analysis will always be complete or free from errors." },
          { type: "p", text: "Analytical outputs may depend on the accuracy of user-entered data, recorded footage, available information, processing methods, and other technical factors." },
          { type: "p", text: "Users remain responsible for reviewing important information before relying on it for significant sporting, operational, or commercial decisions." },
          { type: "p", text: "CricAnalyst does not guarantee any particular sporting result, player performance outcome, or analytical conclusion." },
        ]}
      />

      <LegalSection
        heading="12. Data Storage, Backup and Retention"
        blocks={[
          { type: "p", text: "CricAnalyst may provide cloud-based storage for match videos, analytical records, and other User Content according to the applicable subscription package." },
          { type: "p", text: "Users are encouraged to maintain independent backups of important match footage, reports, and other critical information." },
          { type: "p", text: "Storage allocations, additional storage charges, subscription expiry, service suspension, data export, and account deletion arrangements are governed by the CricAnalyst Terms and Conditions." },
          { type: "p", text: "Personal information will be retained and deleted in accordance with the CricAnalyst Privacy Policy and applicable legal requirements." },
          { type: "p", text: "GreenStream will take reasonable technical and organisational measures to protect stored information but does not guarantee that all data will remain available indefinitely or that every form of data loss can be prevented." },
        ]}
      />

      <LegalSection
        heading="13. Suspension and Termination"
        blocks={[
          { type: "p", text: "GreenStream may restrict, suspend, or terminate access to CricAnalyst where:" },
          {
            type: "ul",
            items: [
              "The applicable subscription has expired or remains unpaid.",
              "A user materially violates this EULA or the CricAnalyst Terms and Conditions.",
              "An account is used fraudulently, unlawfully, or without authorisation.",
              "Platform usage creates a serious security or operational risk.",
              "Suspension or termination is required by applicable law.",
              "The relevant service is lawfully discontinued.",
            ],
          },
          { type: "p", text: "Where reasonably practicable, GreenStream will provide notice of suspension or termination and an opportunity to resolve the issue." },
          { type: "p", text: "Immediate restrictions may be imposed where reasonably necessary to address serious security threats, unlawful activity, or other urgent risks." },
          { type: "p", text: "Upon termination, the user's right to access and use CricAnalyst ends, subject to any applicable data retrieval, retention, and deletion arrangements." },
          { type: "p", text: "For annual subscription expiry, the suspension notice and data management procedures specified in the CricAnalyst Terms and Conditions will apply." },
          { type: "p", text: "Termination does not affect obligations or rights that have already accrued, including outstanding payments, intellectual property protections, and applicable legal responsibilities." },
        ]}
      />

      <LegalSection
        heading="14. Disclaimer and Limitation of Liability"
        blocks={[
          { type: "p", text: "CricAnalyst provides software and analytical tools to support cricket recording, data management, performance analysis, and related activities." },
          { type: "p", text: "While reasonable efforts are made to maintain reliable services, GreenStream does not warrant that the platform will be uninterrupted, completely error-free, or suitable for every individual requirement." },
          { type: "p", text: "To the maximum extent permitted by applicable law, GreenStream and its collaboration partners shall not be liable for indirect, incidental, consequential, or similar losses arising from the use of or inability to use CricAnalyst, including loss of business opportunities, anticipated profits, or business interruption." },
          { type: "p", text: "Nothing in this EULA excludes or limits liability that cannot lawfully be excluded or limited." },
          { type: "p", text: "Any applicable remedies for verified failures in delivering purchased services will be addressed under the CricAnalyst Terms and Conditions and relevant legal requirements." },
        ]}
      />

      <LegalSection
        heading="15. Privacy and Data Protection"
        blocks={[
          { type: "p", text: "GreenStream processes personal information in accordance with the CricAnalyst Privacy Policy and applicable data protection requirements." },
          { type: "p", text: "Information may be processed for account registration, authentication, subscription management, platform operation, data storage, analytics, technical support, security, and other legitimate service-related purposes." },
          { type: "p", text: "Where third-party providers or collaboration partners process personal information on behalf of CricAnalyst, appropriate safeguards will be applied as required by applicable law." },
          { type: "p", text: "Users may exercise applicable privacy rights in accordance with the CricAnalyst Privacy Policy." },
          { type: "p", text: "For further information, please refer to:" },
          {
            type: "ul-links",
            items: [
              { label: "CricAnalyst Privacy Policy: https://cricanalyst.io/privacy-policy", href: "https://cricanalyst.io/privacy-policy" },
            ],
          },
        ]}
      />

      <LegalSection
        heading="16. Changes to This EULA"
        blocks={[
          { type: "p", text: "GreenStream may update this EULA from time to time to reflect changes in CricAnalyst, its technology, functionality, security requirements, business operations, or applicable laws." },
          { type: "p", text: "The latest version will indicate the date on which it was last updated." },
          { type: "p", text: "Where changes materially affect existing users, GreenStream will provide reasonable advance notice where practicable." },
          { type: "p", text: "Changes will not retrospectively remove rights already accrued under an existing agreement unless legally permitted and appropriately agreed." },
          { type: "p", text: "Continued use of CricAnalyst following the effective date of a validly notified update may constitute acceptance of the revised EULA, subject to applicable law." },
        ]}
      />

      <LegalSection
        heading="17. Governing Law and Dispute Resolution"
        blocks={[
          { type: "p", text: "This EULA is governed by the laws of Sri Lanka, subject to any mandatory legal protections applicable in other jurisdictions." },
          { type: "p", text: "Users are encouraged to contact GreenStream regarding any dispute relating to software access, licensing, or platform usage." },
          { type: "p", text: "GreenStream will make reasonable efforts to resolve disputes amicably." },
          { type: "p", text: "Nothing in this EULA prevents either party from pursuing remedies before a competent court or other authority where permitted by applicable law." },
        ]}
      />

      <LegalSection
        heading="18. Relationship with Other CricAnalyst Policies"
        blocks={[
          { type: "p", text: "This EULA should be read together with:" },
          {
            type: "ul-links",
            items: [
              { label: "CricAnalyst Terms and Conditions: https://cricanalyst.io/terms-and-conditions", href: "https://cricanalyst.io/terms-and-conditions" },
              { label: "CricAnalyst Privacy Policy: https://cricanalyst.io/privacy-policy", href: "https://cricanalyst.io/privacy-policy" },
            ],
          },
          { type: "p", text: "The Terms and Conditions govern commercial matters, including subscriptions, payments, renewals, cancellations, refunds, additional services, and data access following subscription expiry." },
          { type: "p", text: "This EULA governs software licensing, permitted usage, intellectual property, and related user obligations." },
          { type: "p", text: "The Privacy Policy explains how personal information is collected, processed, stored, shared, retained, and protected." },
          { type: "p", text: "Where provisions overlap, the document specifically governing the relevant subject matter will ordinarily apply, subject to any expressly agreed contractual arrangements and applicable law." },
        ]}
      />

      <LegalSection
        heading="19. Contact Us"
        blocks={[
          {
            type: "p",
            text: "For questions regarding this EULA, software licensing, account access, intellectual property, or CricAnalyst services, please contact:",
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

export default Eula;
