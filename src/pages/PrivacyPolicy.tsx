import LegalLayout from "../components/LegalLayout";
import LegalSection from "../components/LegalSection";

function PrivacyPolicy() {
  return (
    <LegalLayout title="CricAnalyst Privacy Policy" lastUpdated="23 August 2026">
      <p className="text-gray-600 text-base md:text-lg leading-relaxed">
        This Privacy Policy explains how CricAnalyst, operated by Green
        Stream Systems & Solutions (Private) Limited ("GreenStream") in
        collaboration with TryC Analytics, collects, uses, stores, and
        protects information when you use the CricAnalyst platform.
      </p>

      <LegalSection
        heading="1. Information We Collect"
        blocks={[
          {
            type: "p",
            text: "When you use CricAnalyst, we may collect and process information including:",
          },
          {
            type: "ul",
            items: [
              "Account information such as name, email address, organization, and user level;",
              "Cricket match, team, and player information;",
              "Ball-by-ball match records, statistics, tags, and analytical data;",
              "Match videos, images, clips, and other content uploaded or recorded through the platform;",
              "Subscription, usage, and service information;",
              "Device, browser, IP address, login, and technical information required to operate and secure the platform.",
            ],
          },
        ]}
      />

      <LegalSection
        heading="2. How We Use Information"
        blocks={[
          { type: "p", text: "We may use collected information to:" },
          {
            type: "ul",
            items: [
              "Provide and operate CricAnalyst;",
              "Record, store, process, and analyze ball-by-ball cricket data;",
              "Provide video, statistics, reports, visualisations, and other platform features;",
              "Manage accounts and annual subscriptions;",
              "Provide customer and technical support;",
              "Maintain platform security and prevent unauthorized use;",
              "Improve the performance, functionality, and reliability of CricAnalyst; and",
              "Comply with applicable legal requirements.",
            ],
          },
        ]}
      />

      <LegalSection
        heading="3. Match Data, Videos and User Content"
        blocks={[
          {
            type: "p",
            text: "Users retain ownership of match data, videos, and other content that they legally own.",
          },
          {
            type: "p",
            text: "CricAnalyst may process and store such content only as reasonably necessary to provide, maintain, secure, and improve the platform and its associated services.",
          },
          {
            type: "p",
            text: "Users are responsible for obtaining any necessary permissions or consent for recording, uploading, or processing information relating to players, teams, matches, venues, or other individuals. Where minors are involved, appropriate parental, guardian, or institutional permissions must be obtained where required.",
          },
        ]}
      />

      <LegalSection
        heading="4. Data Storage and Third-Party Services"
        blocks={[
          {
            type: "p",
            text: "CricAnalyst may use trusted cloud infrastructure and third-party technology providers for services such as hosting, authentication, databases, video processing, storage, communications, analytics, and payments.",
          },
          {
            type: "p",
            text: "Information may therefore be processed or stored using these service providers where necessary to operate CricAnalyst.",
          },
          {
            type: "p",
            text: "We take reasonable technical and organizational measures to protect information against unauthorized access, loss, misuse, or disclosure. However, no internet-connected system can guarantee absolute security.",
          },
        ]}
      />

      <LegalSection
        heading="5. Sharing of Information"
        blocks={[
          { type: "p", text: "We do not sell users' personal information." },
          {
            type: "p",
            text: "Information may be shared with authorized service providers, technology partners, or collaboration partners only where reasonably necessary to operate and support CricAnalyst, or where disclosure is required by law.",
          },
        ]}
      />

      <LegalSection
        heading="6. Data Retention"
        blocks={[
          {
            type: "p",
            text: "Information may be retained for as long as reasonably necessary to provide CricAnalyst services, maintain accounts and subscriptions, meet legal or operational requirements, and protect the security and integrity of the platform.",
          },
          {
            type: "p",
            text: "Following account or subscription termination, certain data may be deleted or become unavailable, subject to applicable legal, backup, security, and operational requirements.",
          },
        ]}
      />

      <LegalSection
        heading="7. Your Rights and Responsibilities"
        blocks={[
          {
            type: "p",
            text: "Depending on applicable law, users may request access to, correction of, or deletion of certain personal information.",
          },
          {
            type: "p",
            text: "Users are responsible for keeping their account information accurate and protecting their login credentials.",
          },
        ]}
      />

      <LegalSection
        heading="8. Changes to This Policy"
        blocks={[
          {
            type: "p",
            text: "We may update this Privacy Policy from time to time to reflect changes in CricAnalyst, our services, technology, or legal requirements. The latest version will display the updated date.",
          },
        ]}
      />

      <LegalSection
        heading="9. Contact Us"
        blocks={[
          {
            type: "p",
            text: "For questions about this Privacy Policy, your information, data handling, or CricAnalyst services, please contact:",
          },
          {
            type: "contact",
            lines: [
              "Green Stream Systems & Solutions (Private) Limited",
              "CricAnalyst",
              "In collaboration with TryC Analytics",
              "Email: info@cricanalyst.io",
              "Phone: +94 76 889 0999",
            ],
          },
        ]}
      />

      <p className="text-gray-400 text-sm border-t border-gray-100 pt-8">
        © 2026 Green Stream Systems & Solutions (Private) Limited. All rights
        reserved.
      </p>
    </LegalLayout>
  );
}

export default PrivacyPolicy;
