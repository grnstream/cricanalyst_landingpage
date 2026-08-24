import LegalLayout from "../components/LegalLayout";
import LegalSection from "../components/LegalSection";

function Eula() {
  return (
    <LegalLayout title="End User License Agreement (EULA)" lastUpdated="23 August 2026">
      <div className="flex flex-col gap-4">
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          This End User License Agreement ("EULA") governs access to and use
          of CricAnalyst, a cricket ball-by-ball recording and analysis
          platform operated by Green Stream Systems & Solutions (Private)
          Limited ("GreenStream") in collaboration with TryC Analytics.
        </p>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          By creating an account, subscribing to, accessing, or using
          CricAnalyst, you agree to this EULA. If you do not agree, you must
          not use the platform.
        </p>
      </div>

      <LegalSection
        heading="1. About CricAnalyst"
        blocks={[
          {
            type: "p",
            text: "CricAnalyst is designed to support the recording and analysis of cricket matches through structured ball-by-ball data capture, together with related match information, video, tagging, statistics, reports, performance information, and visualisations.",
          },
          {
            type: "p",
            text: "Features and access levels may vary according to the user's subscription, user level, usage pattern, and services provided.",
          },
        ]}
      />

      <LegalSection
        heading="2. License to Use"
        blocks={[
          {
            type: "p",
            text: "Subject to this EULA and payment of applicable subscription fees, GreenStream grants you a limited, non-exclusive, non-transferable, and revocable right to access and use CricAnalyst for its intended purposes.",
          },
          {
            type: "p",
            text: "No ownership rights in CricAnalyst, its software, technology, design, databases, analytical methods, branding, or other intellectual property are transferred to you.",
          },
        ]}
      />

      <LegalSection
        heading="3. User Accounts"
        blocks={[
          { type: "p", text: "Certain CricAnalyst services require a registered user account." },
          { type: "p", text: "You are responsible for:" },
          {
            type: "ul",
            items: [
              "Providing accurate account information;",
              "Keeping your login credentials secure;",
              "Preventing unauthorized use of your account; and",
              "Activities performed through your account where reasonably attributable to you.",
            ],
          },
          {
            type: "p",
            text: "Accounts must not be shared, transferred, or provided to unauthorized users unless expressly permitted by GreenStream.",
          },
        ]}
      />

      <LegalSection
        heading="4. Annual Subscriptions"
        blocks={[
          { type: "p", text: "CricAnalyst is provided through annual subscription plans." },
          {
            type: "p",
            text: "Subscription fees, features, usage limits, storage, access privileges, and other applicable conditions may vary depending on factors including:",
          },
          {
            type: "ul",
            items: [
              "User level or category;",
              "Usage pattern and volume;",
              "Required features and services;",
              "Data and storage requirements; and",
              "Other applicable service requirements.",
            ],
          },
          {
            type: "p",
            text: "The applicable subscription package and charges will be communicated to the user or organization before purchase or renewal.",
          },
          {
            type: "p",
            text: "Subscriptions must be renewed annually to maintain access to the applicable services. Failure to renew may result in restriction or suspension of access.",
          },
          {
            type: "p",
            text: "For further information regarding subscription plans, user levels, usage limits, pricing, or special requirements, please contact CricAnalyst.",
          },
        ]}
      />

      <LegalSection
        heading="5. Match Data, Video and User Content"
        blocks={[
          {
            type: "p",
            text: 'CricAnalyst may allow users to record, enter, upload, store, process, analyze, or export ball-by-ball records, match information, player and team information, videos, images, statistics, tags, reports, and other cricket-related content ("User Content").',
          },
          { type: "p", text: "Users retain ownership of User Content that they legally own." },
          {
            type: "p",
            text: "By using CricAnalyst, you grant GreenStream the limited rights necessary to host, store, process, transmit, analyze, and technically manage such content for the purpose of providing and supporting the CricAnalyst service.",
          },
          {
            type: "p",
            text: "CricAnalyst does not acquire ownership of your original match footage or match data merely because it is recorded, uploaded, or processed through the platform.",
          },
        ]}
      />

      <LegalSection
        heading="6. Responsibility for Recording and Content"
        blocks={[
          {
            type: "p",
            text: "You are responsible for ensuring that you have all necessary permissions, rights, licenses, and consents to record, upload, store, analyze, or otherwise process content using CricAnalyst.",
          },
          {
            type: "p",
            text: "This includes, where applicable, permissions relating to players, teams, coaches, match organizers, venues, broadcasters, video owners, clubs, schools, academies, and parents or guardians where minors are involved.",
          },
          {
            type: "p",
            text: "CricAnalyst does not provide users with any independent right to record or use match footage or other content where such rights have not otherwise been obtained.",
          },
        ]}
      />

      <LegalSection
        heading="7. Acceptable Use"
        blocks={[
          { type: "p", text: "You must not use CricAnalyst to:" },
          {
            type: "ul",
            items: [
              "Violate applicable laws or regulations;",
              "Upload or process content without appropriate rights or permissions;",
              "Infringe intellectual property, privacy, or other legal rights;",
              "Access another user's account without authorization;",
              "Circumvent platform security or access controls;",
              "Introduce malicious software or interfere with platform operation;",
              "Reverse engineer, copy, reproduce, scrape, or extract the platform or its underlying technology except where permitted by law; or",
              "Resell, sublicense, or commercially redistribute access without written authorization.",
            ],
          },
          {
            type: "p",
            text: "GreenStream may suspend or terminate accounts where these requirements are materially violated.",
          },
        ]}
      />

      <LegalSection
        heading="8. Intellectual Property"
        blocks={[
          {
            type: "p",
            text: "CricAnalyst, including its software, platform architecture, interfaces, designs, branding, databases, analytical methods, visualisations, documentation, and associated proprietary materials, is owned by or licensed to GreenStream and/or its respective technology and collaboration partners, as applicable.",
          },
          {
            type: "p",
            text: "Nothing in this EULA transfers ownership of such intellectual property to the user.",
          },
        ]}
      />

      <LegalSection
        heading="9. Service Availability and Data"
        blocks={[
          {
            type: "p",
            text: "CricAnalyst may rely on cloud infrastructure, internet connectivity, third-party services, hosting providers, databases, video processing services, and other technologies.",
          },
          {
            type: "p",
            text: "While reasonable measures are taken to maintain the platform, uninterrupted or error-free operation cannot be guaranteed.",
          },
          {
            type: "p",
            text: "Users are encouraged to maintain independent copies of important match footage, records, reports, and other critical data.",
          },
          {
            type: "p",
            text: "Features may be updated, modified, added, restricted, or discontinued where reasonably necessary for the operation, security, maintenance, or development of CricAnalyst.",
          },
        ]}
      />

      <LegalSection
        heading="10. Disclaimer and Limitation of Liability"
        blocks={[
          {
            type: "p",
            text: "CricAnalyst provides cricket recording, data management, analytical, and visualisation tools to assist users.",
          },
          {
            type: "p",
            text: "While reasonable efforts are made to provide reliable information and services, GreenStream does not guarantee that every recording, statistic, analysis, visualisation, report, or other output will always be complete, uninterrupted, or error-free.",
          },
          {
            type: "p",
            text: "To the maximum extent permitted by applicable law, GreenStream and its collaboration partners shall not be liable for indirect, incidental, consequential, or similar losses resulting from use of or inability to use CricAnalyst, including loss of data, match footage, business, opportunities, or profits.",
          },
          {
            type: "p",
            text: "Nothing in this EULA excludes or limits liability that cannot legally be excluded.",
          },
        ]}
      />

      <LegalSection
        heading="11. Suspension and Termination"
        blocks={[
          { type: "p", text: "Access to CricAnalyst may be suspended or terminated where:" },
          {
            type: "ul",
            items: [
              "Subscription fees remain unpaid or the annual subscription is not renewed;",
              "This EULA is materially violated;",
              "An account is used fraudulently, unlawfully, or without authorization;",
              "Use of the platform creates a security or operational risk; or",
              "Suspension or termination is required by law or due to discontinuation of the relevant service.",
            ],
          },
          {
            type: "p",
            text: "Users should export or retain copies of important data before their subscription or account ends where such export functionality is available.",
          },
        ]}
      />

      <LegalSection
        heading="12. Privacy"
        blocks={[
          {
            type: "p",
            text: "Personal information and platform data will be handled in accordance with the applicable CricAnalyst Privacy Policy and relevant data protection requirements.",
          },
          {
            type: "p",
            text: "By using CricAnalyst, you acknowledge that certain information may need to be processed for account management, authentication, platform operation, data storage, analytics, support, security, and related services.",
          },
        ]}
      />

      <LegalSection
        heading="13. Changes to This EULA"
        blocks={[
          {
            type: "p",
            text: "This EULA may be updated from time to time to reflect changes to CricAnalyst, its services, technology, subscription arrangements, business operations, or applicable legal requirements.",
          },
          {
            type: "p",
            text: "The latest version will indicate the date on which it was last updated. Continued use of CricAnalyst following an effective update constitutes acceptance of the revised EULA, subject to applicable law.",
          },
        ]}
      />

      <LegalSection
        heading="14. Governing Law"
        blocks={[
          {
            type: "p",
            text: "This EULA is governed by the laws of Sri Lanka, subject to any mandatory rights that may apply under applicable law.",
          },
          {
            type: "p",
            text: "Any dispute should first be raised with GreenStream so that the parties may attempt to resolve the matter amicably.",
          },
        ]}
      />

      <LegalSection
        heading="15. Contact Us"
        blocks={[
          {
            type: "p",
            text: "For questions regarding this EULA, subscriptions, pricing, user levels, usage requirements, or CricAnalyst services, please contact:",
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

export default Eula;
