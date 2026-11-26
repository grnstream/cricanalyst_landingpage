import LegalLayout from "../components/LegalLayout";
import LegalSection from "../components/LegalSection";
import Seo from "../components/Seo";

function PrivacyPolicy() {
  return (
    <LegalLayout title="CricAnalyst Privacy Policy" lastUpdated="20 November 2026">
      <Seo
        title="Privacy Policy - CricAnalyst"
        description="Learn how CricAnalyst collects, uses, and safeguards your cricket match data, video footage, and personal information."
        canonicalUrl="https://cricanalyst.io/privacy-policy"
      />
      <div className="flex flex-col gap-4">
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          This Privacy Policy explains how CricAnalyst, a cricket match recording and analytics platform operated by Green Stream Systems & Solutions (Private) Limited ("GreenStream", "we", "us", or "our") in collaboration with TryC Analytics, collects, uses, stores, shares, and protects personal information when users access or use the CricAnalyst platform and associated services.
        </p>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          CricAnalyst provides cricket match recording, structured ball-by-ball data capture, video management, statistical analysis, performance reporting, and related analytical services.
        </p>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          We are committed to handling personal information responsibly and implementing reasonable technical and organisational measures to protect information entrusted to the platform.
        </p>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          This Privacy Policy applies to users, customers, organisations, and individuals whose personal information is processed through CricAnalyst.
        </p>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          By accessing or using CricAnalyst, you acknowledge the data processing practices described in this Privacy Policy. Where consent is required by applicable law, we will obtain it separately.
        </p>
      </div>

      <LegalSection
        heading="1. Information We Collect"
        blocks={[
          { type: "p", text: "CricAnalyst may collect and process the following categories of information." },
          { type: "subheading", text: "1.1 Account and Registration Information" },
          { type: "p", text: "When users register or access CricAnalyst, we may collect:" },
          {
            type: "ul",
            items: [
              "Name and contact information.",
              "Email address and telephone number.",
              "Organisation, school, club, or academy details.",
              "User category, role, and access privileges.",
              "Account credentials and authentication information.",
              "Subscription and account status.",
            ],
          },
          { type: "subheading", text: "1.2 Cricket Match and Player Information" },
          { type: "p", text: "CricAnalyst may process cricket-related information, including:" },
          {
            type: "ul",
            items: [
              "Match details, schedules, venues, and results.",
              "Player names, team affiliations, and player profiles.",
              "Ball-by-ball match records.",
              "Batting, bowling, fielding, and other performance statistics.",
              "Match events, tags, and analytical records.",
              "Performance reports and visualisations.",
              "Other information entered or generated through the platform.",
            ],
          },
          { type: "p", text: "Some cricket-related information may constitute personal data where it identifies or relates to an individual player, coach, official, or other person." },
          { type: "subheading", text: "1.3 Video, Images and Other Content" },
          { type: "p", text: "CricAnalyst may process:" },
          {
            type: "ul",
            items: [
              "Match videos and recorded footage.",
              "Images and video clips.",
              "Player and team-related visual content.",
              "Uploaded files and supporting materials.",
              "Content generated through video processing and analytical features.",
            ],
          },
          { type: "p", text: "Video and image content may contain identifiable individuals, including minors." },
          { type: "subheading", text: "1.4 Subscription and Payment Information" },
          { type: "p", text: "We may collect information necessary to manage subscriptions and payments, including:" },
          {
            type: "ul",
            items: [
              "Subscription package and duration.",
              "Billing and invoice details.",
              "Payment status and transaction references.",
              "Purchased services and additional storage allocations.",
              "Renewal, cancellation, and service history.",
            ],
          },
          { type: "p", text: "Where payments are processed through third-party (if online payments in place) payment providers, payment information may be handled directly by those providers according to their applicable privacy and security practices." },
          { type: "subheading", text: "1.5 Technical and Usage Information" },
          { type: "p", text: "When users access CricAnalyst, we may collect technical information such as:" },
          {
            type: "ul",
            items: [
              "IP address.",
              "Browser type and operating system.",
              "Device information.",
              "Login and authentication activity.",
              "Platform usage and access logs.",
              "Error reports and diagnostic information.",
              "Security-related events and technical performance data.",
            ],
          },
          { type: "p", text: "This information helps us operate, maintain, improve, and secure the platform." },
        ]}
      />

      <LegalSection
        heading="2. How We Use Information"
        blocks={[
          { type: "p", text: "CricAnalyst may use collected information for the following purposes:" },
          {
            type: "ul",
            items: [
              "Providing and operating the CricAnalyst platform.",
              "Managing user accounts and authentication.",
              "Recording and processing cricket match data.",
              "Generating statistics, reports, and performance analysis.",
              "Managing match videos and associated content.",
              "Providing cloud-based storage and related services.",
              "Managing subscriptions, billing, and payments.",
              "Delivering technical support and customer assistance.",
              "Maintaining platform security and preventing unauthorised access.",
              "Diagnosing technical issues and improving system reliability.",
              "Developing and improving platform functionality.",
              "Complying with applicable legal and regulatory obligations.",
            ],
          },
          { type: "p", text: "Personal information will be processed only for legitimate purposes and in accordance with applicable data protection requirements." },
        ]}
      />

      <LegalSection
        heading="3. Legal Basis for Processing Personal Information"
        blocks={[
          { type: "p", text: "Where required by applicable data protection laws, CricAnalyst processes personal information on an appropriate legal basis." },
          { type: "p", text: "Depending on the circumstances, this may include:" },
          {
            type: "ul-rich",
            items: [
              { label: "Contractual necessity:", text: "Processing required to provide purchased subscriptions and services." },
              { label: "Legal obligations:", text: "Processing necessary to comply with applicable laws and regulatory requirements." },
              { label: "Legitimate interests:", text: "Processing necessary for lawful business operations, security, fraud prevention, and service improvement, where permitted and appropriately balanced against individual rights." },
              { label: "Consent:", text: "Processing based on an individual's valid consent where consent is required." },
              { label: "Other lawful grounds:", text: "Processing permitted under applicable data protection legislation." },
            ],
          },
          { type: "p", text: "The applicable legal basis may vary according to the information involved, the purpose of processing, and the relevant jurisdiction." },
          { type: "p", text: "Where consent is relied upon, individuals may withdraw their consent in accordance with applicable law. Withdrawal will not affect the lawfulness of processing carried out before withdrawal." },
        ]}
      />

      <LegalSection
        heading="4. Match Data, Videos and User Content"
        blocks={[
          { type: "subheading", text: "4.1 Ownership of Content" },
          { type: "p", text: "Users and organisations retain ownership of match data, videos, and other content that they legally own." },
          { type: "p", text: "CricAnalyst does not acquire ownership of original match footage or customer-owned match information merely because it is recorded, uploaded, stored, or processed through the platform." },
          { type: "subheading", text: "4.2 Processing of User Content" },
          { type: "p", text: "CricAnalyst may host, store, process, analyse, transmit, and technically manage User Content as reasonably necessary to provide the contracted services." },
          { type: "p", text: "This may include generating match statistics, analytical reports, video clips, performance visualisations, and other platform outputs." },
          { type: "subheading", text: "4.3 Responsibility for Permissions" },
          { type: "p", text: "Customers and users are responsible for ensuring that they have the necessary rights, permissions, licences, and consents to record, upload, store, or process content through CricAnalyst." },
          { type: "p", text: "This may include permissions from players, teams, coaches, schools, clubs, academies, match organisers, venues, broadcasters, and other relevant parties." },
          { type: "p", text: "Where minors are involved, appropriate parental, guardian, or institutional permissions must be obtained where required by applicable law." },
          { type: "subheading", text: "4.4 Organisational Data" },
          { type: "p", text: "Where a school, club, academy, or other organisation uses CricAnalyst to manage player or match information, that organisation may determine the purposes and scope of certain personal data processing activities." },
          { type: "p", text: "In such circumstances, GreenStream may process information on behalf of the organisation according to the applicable contractual arrangements and legal responsibilities." },
          { type: "p", text: "The respective data protection responsibilities of GreenStream, the customer organisation, and any authorised collaboration partners will depend on their actual roles in processing the information." },
        ]}
      />

      <LegalSection
        heading="5. Data Processing for Research and AI Analytics"
        blocks={[
          { type: "p", text: "CricAnalyst may develop advanced analytical capabilities, including AI-powered cricket performance analysis, predictive models, automated reporting, and related technologies." },
          { type: "p", text: "Information processed through the platform may support statistical analysis, research, system improvement, and the development of analytical applications." },
          { type: "subheading", text: "5.1 Operational Analytics" },
          { type: "p", text: "CricAnalyst may process match data and related information to deliver the analytical features and services purchased by customers." },
          { type: "p", text: "Such processing may include generating match statistics, player performance reports, visualisations, and other contracted analytical outputs." },
          { type: "subheading", text: "5.2 Secondary Research and AI Development" },
          { type: "p", text: "Any secondary use of identifiable, confidential, or customer-restricted information for research, AI model training, product development, or publication will be subject to applicable contractual authorisation, legal requirements, and appropriate privacy safeguards." },
          { type: "p", text: "Where required, CricAnalyst will obtain the necessary customer authorisation or individual consent before undertaking such processing." },
          { type: "subheading", text: "5.3 Aggregated and Anonymised Information" },
          { type: "p", text: "CricAnalyst may use aggregated or appropriately anonymised information for lawful statistical analysis, research, and service improvement." },
          { type: "p", text: "Reasonable measures will be taken to reduce the risk of identifying individuals from information represented as anonymised." },
          { type: "p", text: "Information that remains reasonably capable of identifying an individual will continue to be treated as personal information where required by applicable law." },
        ]}
      />

      <LegalSection
        heading="6. Data Storage and Security"
        blocks={[
          { type: "p", text: "CricAnalyst may use cloud infrastructure, databases, hosting providers, and other technical services to store and process information." },
          { type: "p", text: "We implement reasonable technical and organisational security measures appropriate to the nature of the information and associated risks." },
          { type: "p", text: "These measures may include:" },
          {
            type: "ul",
            items: [
              "Account authentication and access controls.",
              "Role-based access restrictions.",
              "Secure communication mechanisms.",
              "Monitoring and logging of relevant security events.",
              "Data backup and recovery procedures.",
              "Security updates and system maintenance.",
              "Restrictions on unauthorised access to stored information.",
              "Appropriate safeguards when using third-party service providers.",
            ],
          },
          { type: "p", text: "Although reasonable efforts are made to protect information, no internet-connected platform or storage system can guarantee absolute security." },
          { type: "p", text: "Users are responsible for protecting their login credentials and promptly reporting suspected unauthorised account access." },
        ]}
      />

      <LegalSection
        heading="7. Sharing and Disclosure of Information"
        blocks={[
          { type: "p", text: "CricAnalyst does not sell users' personal information." },
          { type: "p", text: "We may share information with authorised parties where reasonably necessary to provide, maintain, secure, or support CricAnalyst services." },
          { type: "p", text: "Such parties may include:" },
          {
            type: "ul",
            items: [
              "Cloud hosting and storage providers.",
              "Authentication and database service providers.",
              "Video processing and technical infrastructure providers.",
              "Payment processing providers.",
              "Authorised technical support personnel.",
              "Technology and collaboration partners, including TryCAnalytics, where necessary for authorised services.",
              "Professional advisers or regulatory authorities where legally appropriate.",
            ],
          },
          { type: "p", text: "Information may also be disclosed where required by applicable law, a lawful regulatory request, or a valid legal process." },
          { type: "p", text: "Where third-party service providers process personal information on our behalf, we will apply appropriate contractual, organisational, and technical safeguards as required by applicable law." },
          { type: "p", text: "Access to information will be limited to what is reasonably necessary for the relevant authorised purpose." },
        ]}
      />

      <LegalSection
        heading="8. International Data Processing and Transfers"
        blocks={[
          { type: "p", text: "CricAnalyst may provide services to customers located in Sri Lanka and other countries." },
          { type: "p", text: "Depending on the hosting infrastructure, service providers, and technical arrangements used, personal information may be processed or stored outside the country in which the user or customer is located." },
          { type: "p", text: "Where international transfers of personal information occur, CricAnalyst will apply appropriate safeguards and comply with applicable cross-border data protection requirements." },
          { type: "p", text: "Such safeguards may include contractual protections, restrictions on access, security measures, and other mechanisms recognised by applicable law." },
          { type: "p", text: "Customers requiring specific information about international data processing arrangements may contact CricAnalyst using the details provided in this Policy." },
        ]}
      />

      <LegalSection
        heading="9. Data Retention"
        blocks={[
          { type: "p", text: "CricAnalyst retains information for as long as reasonably necessary to:" },
          {
            type: "ul",
            items: [
              "Provide contracted services.",
              "Maintain user accounts and subscriptions.",
              "Store match records, videos, and analytical information.",
              "Meet applicable legal and regulatory obligations.",
              "Maintain platform security and operational integrity.",
              "Resolve disputes and maintain necessary business records.",
            ],
          },
          { type: "p", text: "Retention periods may vary according to the type of information, subscription arrangements, contractual requirements, and applicable laws." },
          { type: "subheading", text: "9.1 Active Subscriptions" },
          { type: "p", text: "During an active subscription, customer data may be retained according to the purchased package, applicable storage allocations, and service requirements." },
          { type: "subheading", text: "9.2 Subscription Expiry" },
          { type: "p", text: "Following expiry of an annual subscription, access to CricAnalyst and associated cloud-based services may be suspended in accordance with the CricAnalyst Terms and Conditions." },
          { type: "p", text: "For suspension arising from non-renewal, CricAnalyst will provide at least two (2) months' advance notice of the scheduled suspension date." },
          { type: "p", text: "Customers will be given information about available renewal and data retrieval arrangements." },
          { type: "subheading", text: "9.3 Account and Data Deletion" },
          { type: "p", text: "Where an account remains inactive or a subscription is not renewed, CricAnalyst may delete associated information after the applicable deletion deadline has been communicated." },
          { type: "p", text: "Customers are responsible for downloading or transferring important information before the notified deadline." },
          { type: "p", text: "Certain information may be retained where required by law or reasonably necessary for security, accounting, dispute resolution, or other lawful purposes." },
          { type: "subheading", text: "9.4 Backup Data" },
          { type: "p", text: "Deleted information may remain temporarily within backup systems according to established backup retention and recovery procedures." },
          { type: "p", text: "Backup information will be subject to appropriate access restrictions and will be deleted or overwritten according to the applicable retention arrangements." },
          { type: "p", text: "Once information has been permanently deleted from the relevant systems and backups, recovery may no longer be possible." },
        ]}
      />

      <LegalSection
        heading="10. Privacy of Children and Young Players"
        blocks={[
          { type: "p", text: "CricAnalyst may be used by schools, cricket academies, clubs, and other organisations that manage information relating to children and young players." },
          { type: "p", text: "Such information may include player names, team details, match statistics, images, and video footage." },
          { type: "p", text: "Where personal information relating to minors is processed, the relevant customer or organisation must ensure that appropriate permissions and lawful processing arrangements are in place." },
          { type: "p", text: "Where required by applicable law, parental or guardian consent must be obtained." },
          { type: "p", text: "CricAnalyst will take reasonable measures to protect information relating to minors and restrict unauthorised access." },
          { type: "p", text: "Personal information relating to minors will not be used for unrelated marketing, research, or AI model training without the necessary legal basis and authorisation." },
        ]}
      />

      <LegalSection
        heading="11. Cookies and Similar Technologies"
        blocks={[
          { type: "p", text: "CricAnalyst may use cookies and similar technologies to support platform functionality, authentication, security, and user experience." },
          { type: "p", text: "These technologies may be used to:" },
          {
            type: "ul",
            items: [
              "Maintain authenticated user sessions.",
              "Remember relevant user preferences.",
              "Support platform security.",
              "Monitor technical performance.",
              "Identify and resolve operational issues.",
            ],
          },
          { type: "p", text: "Where optional analytics or other non-essential cookies are used, CricAnalyst will provide appropriate information and obtain consent where required by applicable law." },
          { type: "p", text: "Users may manage certain cookie preferences through their browser settings, although disabling essential cookies may affect platform functionality." },
        ]}
      />

      <LegalSection
        heading="12. Your Privacy Rights"
        blocks={[
          { type: "p", text: "Depending on applicable law, individuals may have rights concerning their personal information." },
          { type: "p", text: "These may include the right to:" },
          {
            type: "ul",
            items: [
              "Request access to personal information.",
              "Request correction of inaccurate or incomplete information.",
              "Request deletion of personal information where legally applicable.",
              "Withdraw consent where processing relies on consent.",
              "Object to or request restrictions on certain processing activities.",
              "Request information about how personal data is used or shared.",
              "Exercise other rights available under applicable data protection laws.",
            ],
          },
          { type: "p", text: "Requests may be submitted using the contact details provided in this Policy." },
          { type: "p", text: "We may request reasonable information to verify the identity and authority of the person making the request before disclosing, correcting, or deleting personal information." },
          { type: "p", text: "Where CricAnalyst processes personal information on behalf of a customer organisation, certain requests may need to be addressed through that organisation." },
          { type: "p", text: "Requests will be reviewed and handled within the timeframes required by applicable law." },
        ]}
      />

      <LegalSection
        heading="13. Data Breaches and Security Incidents"
        blocks={[
          { type: "p", text: "CricAnalyst takes reasonable measures to prevent unauthorised access, disclosure, alteration, or loss of personal information." },
          { type: "p", text: "If a security incident involving personal information occurs, we will assess its nature, scope, and potential impact." },
          { type: "p", text: "Where required by applicable law, we will notify the relevant authorities, affected organisations, or individuals within the applicable legal timeframes." },
          { type: "p", text: "We will also take reasonable steps to investigate, contain, and address identified security incidents." },
          { type: "p", text: "Users who suspect unauthorised account access or misuse of information should promptly contact CricAnalyst." },
        ]}
      />

      <LegalSection
        heading="14. Third-Party Websites and Services"
        blocks={[
          { type: "p", text: "CricAnalyst may contain links to external websites or integrate with third-party services." },
          { type: "p", text: "These services may operate under their own privacy policies and terms of use." },
          { type: "p", text: "CricAnalyst is not responsible for the independent privacy practices of third-party websites or services that are outside our control." },
          { type: "p", text: "Users are encouraged to review the applicable privacy policies before providing personal information to external services." },
        ]}
      />

      <LegalSection
        heading="15. Changes to This Privacy Policy"
        blocks={[
          { type: "p", text: "We may update this Privacy Policy from time to time to reflect changes in CricAnalyst, its services, technology, data processing practices, or applicable legal requirements." },
          { type: "p", text: "The latest version will display the date on which it was last updated." },
          { type: "p", text: "Where changes materially affect how personal information is processed, we will provide appropriate notice and obtain additional consent or authorisation where required by applicable law." },
          { type: "p", text: "Continued use of CricAnalyst does not replace any consent or other legal basis required for processing personal information." },
        ]}
      />

      <LegalSection
        heading="16. Relationship with Other CricAnalyst Policies"
        blocks={[
          { type: "p", text: "This Privacy Policy should be read together with the following documents:" },
          {
            type: "ul-links",
            items: [
              { label: "CricAnalyst End User License Agreement (EULA): https://cricanalyst.io/eula", href: "https://cricanalyst.io/eula" },
              { label: "CricAnalyst Terms and Conditions: https://cricanalyst.io/terms-and-conditions", href: "https://cricanalyst.io/terms-and-conditions" },
            ],
          },
          { type: "p", text: "The Terms and Conditions govern subscriptions, payments, renewals, cancellations, refunds, service delivery, and subscription expiry arrangements." },
          { type: "p", text: "The EULA governs software licensing, permitted usage, intellectual property, and related user obligations." },
          { type: "p", text: "This Privacy Policy explains the collection, processing, storage, sharing, retention, and protection of personal information." },
          { type: "p", text: "Nothing in the Terms and Conditions or EULA overrides mandatory privacy rights or data protection obligations under applicable law." },
        ]}
      />

      <LegalSection
        heading="17. Contact Us"
        blocks={[
          {
            type: "p",
            text: "For questions about this Privacy Policy, personal information, data protection, data access, correction, deletion, or CricAnalyst services, please contact:",
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

export default PrivacyPolicy;
