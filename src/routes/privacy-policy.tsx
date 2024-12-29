import { Link } from "react-router";

const table_of_contents = [
  {
    id: "introduction",
    title: "introduction",
  },
  {
    id: "information-collection",
    title: "Information Collection and Use",
  },
  {
    id: "data-collection",
    title: "The Data We Collect",
  },
  {
    id: "data-usage",
    title: "How we use your data",
  },
  {
    id: "data-share",
    title: "Who We Share Your Data With",
  },
  {
    id: "cookies",
    title: "Cookies",
  },
  {
    id: "data-security",
    title: "Google DoubleClick DART Cookie",
  },
  {
    id: "data-protection",
    title: "How we protect your data",
  },
  {
    id: "advertising-partners-privacy-policies",
    title: "Advertising Partners Privacy Policies",
  },
  {
    id: "third-party-privacy-policies",
    title: "Third Party Privacy Policies",
  },
  {
    id: "third-party-links",
    title: "Links To Other Websites/Third-Party Websites",
  },
  {
    id: "personal-info-rights",
    title: "Rights to Your Personal Information",
  },
  {
    id: "age-limitation",
    title: "Age Limitation",
  },
  {
    id: "law-enforcement",
    title: "Law Enforcement",
  },
  {
    id: "policy-changes",
    title: "Changes To This Privacy Policy",
  },
  {
    id: "compliance",
    title: "Compliance",
  },
  {
    id: "contact",
    title: "Contact Us",
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">Last updated: 05/06/2023</p>

      <nav className="mb-8 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Table of Contents</h2>
        <ol className="list-decimal pl-5 space-y-1">
          {table_of_contents.map((content) => (
            <li key={content.id}>
              <a
                href={`#${content.id}`}
                className="text-blue-600 hover:underline"
              >
                {content.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <section id="introduction" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>

        <div className="space-y-2">
          <p>
            quickmechs herein referred to as “we” “us” or “our” is a company
            that deals mainly in automobile-related fields, including automobile
            repairs, sales of spare parts, towing services, etc., is committed
            to protecting your privacy and building technology that gives you
            the most powerful, unique and safe online experience.
          </p>

          <p>
            This privacy statement applies to how the quickmechs.com website
            collects and utilizes site users’ (referred to as “you”, “your” “and
            user”) data and personal information. By using our website, you
            consent to the collection and use of your data according to this
            policy.
          </p>
        </div>
      </section>

      <section id="information-collection" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          <span>1.</span> Information Collection and Use
        </h2>

        <div className="">
          <p>
            While using our Site, we may ask you to provide us with certain
            personally identifiable information that can be used to contact or
            identify you. Personally Identifiable Information (PII) or Personal
            Information. This personal information comprises your name, email
            address, and phone number. At the point of collection, the reasons
            for requesting these details will be made clear to you.
          </p>

          <p>
            We may also collect your relevant payment or credit card information
            if you wish to pay for any services offered on our platform. Please
            be aware that all payment information shall be stored and processed
            by our third-party payment processors.
          </p>

          <p>
            For business owners or vendors, the information we collect includes
            your name, company name, address, email address, and telephone
            number.
          </p>

          <p>
            In cases where you contact us directly, we may also keep a record of
            the contents of the message and/or attachments you may send us, and
            any other information you may choose to provide.
          </p>
        </div>
      </section>

      <section id="data-collection" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          <span>2.</span>The Data We Collect
        </h2>

        <div>
          <p>
            Like many site operators, quickmechs collects information that your
            browser sends whenever you visit our Site ("Log Data").
          </p>

          <p>
            This Log Data may include information such as your computer's
            Internet Protocol ("IP") address, Internet Service Provider (ISP),
            browser type, browser version, the pages of our Site that you visit,
            the time and date of your visit, time spent on those pages, and
            other statistics.
          </p>

          <p>
            We may also aggregate anonymous data such as statistical or
            demographic data for any purpose. Anonymous data refers to data that
            does not identify you as an individual. Aggregated data may be
            derived from your personal data but is not considered personal
            information in law because it does not reveal your identity.
          </p>
          <p>
            The purpose of the information is for analyzing trends,
            administering the site, tracking users' movement on the website, and
            gathering demographic information.
          </p>
          <p>
            In addition, we may use third-party services such as Google
            Analytics that collect, monitor, and analyze data relevant to
            monitoring the performance of our website.
          </p>
        </div>
      </section>

      <section id="data-usage" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          <span>3.</span> How we use your data
        </h2>
        <div>
          <p>
            Please note that we will not give out or sell your information
            without your consent. However, we may use your Personal Information
            in the following ways;
          </p>

          <div>
            <ul className="list-disc pl-10 pt-2 space-y-1">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>
                Develop new products, services, features, and functionality
              </li>
              <li>Find and prevent fraudulent activities</li>
              <li>Process your requests</li>
              <li>Record your comments or inquiries on our website.</li>
              <li>
                Contact you with newsletters, marketing or promotional
                materials, and other information about our services
              </li>
              <li>
                Process your transactions upon the events that you wish to make
                payments via the online mediums we provide on our website
              </li>
              <li>Enable you to download content from our website.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="data-share" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          <span>4.</span> Who We Share Your Data With
        </h2>

        <div>
          <p>
            quickmechs shares your information with our third-party partners or
            hired agents who perform functions and provide services to us
            subject to the obligations consistent with this Privacy Policy.
            Their use of your data is based on the condition that the third
            parties use your information only on our behalf and according to our
            instructions. We also share your data with:
          </p>
          <ul className="list-disc pl-10 mt-2 space-y-1">
            <li>Third-party service providers like cloud storage platforms.</li>
            <li>Data analytics providers (Google Analytics)</li>
            <li>Login service providers (Google, Facebook, Apple),</li>
            <li>Online marketing service providers.</li>
            <li>Email marketing platforms we use (MailChimp)</li>
            <li>Payment services providers.</li>
          </ul>
        </div>
      </section>

      <section id="cookies" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          <span>5.</span> Cookies
        </h2>
        <div>
          <p>
            Cookies are files with a small amount of data, which may include an
            anonymous unique identifier. Cookies are sent to your browser from a
            website and stored on your computer's hard drive.
          </p>
          <p>
            They differentiate you from other users of the quickmechs site and
            help us monitor the movement of site users. Third parties including
            search engines, providers of measurement and analytics services,
            social media networks, and advertising companies that we use may
            also have access to these cookies.
          </p>
          <p>
            Like many sites, we use "cookies" to collect information. You can
            instruct your browser to refuse all cookies or to indicate when a
            cookie is being sent. However, if you do not accept cookies, you may
            not be able to use some portions of our Site.
          </p>
        </div>
      </section>

      <section id="changes" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          <span>6.</span> Google DoubleClick DART Cookie
        </h2>

        <p>
          Google is one of the third-party vendors on our site. It also uses
          cookies, known as DART cookies, to show ads to our site visitors based
          on their visit to www.quickmechs.com and other sites on the internet.
          However, you may choose to decline the use of DART cookies by visiting
          the Google ad and content network Privacy Policy{" "}
          <Link
            target="_blank"
            to="https://www.google.com/url?q=https://policies.google.com/technologies/ads&sa=D&source=editors&ust=1660214907043873&usg=AOvVaw0fXtBHjIk2sn03-keP3mDN"
          >
            here
          </Link>
          . Also, Google allows its users to opt-out of its personalized ads and
          to exempt their data from being used by Google Analytics.
        </p>
      </section>

      <section id="data-protection" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          <span>7.</span> How we protect your data
        </h2>
        <div className="space-y-2">
          <p>
            We would like you to know that we prioritize the security and
            privacy of your data. As a result, we take the following measures to
            keep them safe;
          </p>

          <ul className="list-disc pl-10 pt-2 space-y-1">
            <li>
              We use physical and electronic safeguards like SSL certificates to
              enhance our platform security and prevent unauthorized access to
              our systems.
            </li>
            <li>
              We restrict access to personal information to the employees and
              contractors ofquickmechs who need the information to perform their
              assigned tasks.
            </li>
            <li>
              We employ measures to ensure that anyone with this access is under
              strict confidentiality contract agreements with us and will be
              penalized if they go against any provisions of this privacy
              policy.
            </li>
          </ul>
          <p>
            The security of your Personal Information is important to us, but
            you must note that no method of transmission over the Internet, or
            method of electronic storage, is 100% secure. So, while we strive to
            use commercially acceptable means to protect your Personal
            Information, we cannot guarantee its absolute security.
          </p>

          <p>
            For this reason, we recommend that you use anti-virus software,
            firewalls, and other precautionary measures to protect yourself from
            security and privacy threats.
          </p>
        </div>
      </section>

      <section id="account-info-management" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          <span>8.</span> How to Manage your account Information
        </h2>
        <div className="space-y-2">
          <p>
            You have the right to delete your account at any time, subject to
            our verification process and any applicable legal or regulatory
            requirements. To delete your account, please contact us at{" "}
            <Link to={"mailto:contact@quickmechs.com"}>
              contact@quickmechs.com
            </Link>{" "}
            or follow the steps outlined in your account settings.
          </p>

          <p>Steps to permanently delete your account on Quickmechs</p>

          <ol className="list-decimal pl-10 pt-2 space-y-1">
            <li>Download the Quickmechs Application.</li>
            <li>Go to Account</li>
            <li>How can we help you</li>
            <li>Manage Account</li>
            <li>Click on Delete Account</li>
            <li>Give reasons why you want your account deleted.</li>
            <li>Proceed</li>
          </ol>

          <p>
            Please note that once you delete your account, all of your data and
            information associated with your account will be permanently deleted
            and cannot be recovered. This includes your personal information,
            payment information, and any other data or content you have shared
            or created on Quickmechs.
          </p>

          <p>
            Please note that once you delete your account, all of your data and
            information associated with your account will be permanently deleted
            and cannot be recovered. This includes your personal information,
            payment information, and any other data or content you have shared
            or created on Quickmechs.
          </p>

          <p>
            If you have any outstanding obligations or disputes with Quickmechs,
            such as outstanding payments or unresolved issues with other users,
            we reserve the right to retain your information and data as
            necessary to fulfill our legal obligations, protect our rights or
            the rights of others, and resolve any disputes.
          </p>

          <p>
            We may also retain certain information and data for our legitimate
            business purposes, such as maintaining our records and analyzing our
            user base and services. However, we will ensure that any retained
            data is de-identified and anonymized to the extent possible to
            protect your privacy.
          </p>

          <p>
            Please note that we may also retain certain data and information as
            required by law or to comply with our legal obligations, such as tax
            or accounting requirements.
          </p>

          <p>
            If you have any questions or concerns about our account deletion
            process or data retention practices, please contact us at{" "}
            <Link to={"mailto:contact@quickmechs.com"}>
              contact@quickmechs.com
            </Link>
            .
          </p>
        </div>
      </section>

      <section id="advertising-partners-privacy-policies" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          <span>9.</span> Advertising Partners Privacy Policies
        </h2>
        <div className="space-y-2">
          <p>
            Third-party ad servers or ad networks use technologies like cookies,
            JavaScript, or Web Beacons that are used in their respective
            advertisements and links that appear on quickmechs.com which are
            sent directly to users' browsers. They automatically receive your IP
            address when this occurs. These technologies are used to measure the
            effectiveness of their advertising campaigns and/or to personalize
            the advertising content that you see on websites that you visit.
            Note that quickmechs has no access to or control over these cookies
            that are used by third-party advertisers.
          </p>

          <p>
            Note that quickmechs has no access to or control over these cookies
            that are used by third-party advertisers.
          </p>
        </div>
      </section>

      <section id="third-party-privacy-policies" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          <span>10.</span> Third Party Privacy Policies
        </h2>
        <div className="space-y-2">
          <p>
            quickmechs's Privacy Policy does not apply to other advertisers or
            websites. As a result, we suggest that you review the individual
            Privacy Policies of these third-party ad servers for more
            information. It might also contain information on their procedures
            and how to decline certain options.
          </p>

          <p>
            You can choose to disable cookies through your browser options. To
            know more detailed information about cookie management with specific
            web browsers, it can be found on the browsers' respective websites.
            Alternatively, you may opt-out of seeing some of these ads by
            visiting the platforms below:
          </p>

          <ul className="list-disc space-y-1 pl-10 mt-2">
            <li>
              Network Advertising Initiative -{" "}
              <Link to={"http://optout.networkadvertising.org"} target="_blank">
                http://optout.networkadvertising.org
              </Link>
            </li>
            <li>
              Digital Advertising Alliance -{" "}
              <Link to={"http://optout.aboutads.info"} target="_blank">
                http://optout.aboutads.info{" "}
              </Link>
            </li>
            <li>
              DAA AppChoices page -{" "}
              <Link to={"http://www.aboutads.info/appchoices"} target="_blank">
                http://www.aboutads.info/appchoices{" "}
              </Link>
            </li>
          </ul>
          <p>
            You can also adjust your ad settings and preferences on relevant
            social media platforms like Facebook, Instagram, and Twitter.
          </p>
        </div>
      </section>

      <section id="third-party-links" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          <span>11.</span> Links To Other Websites/Third-Party Websites
        </h2>
        <div className="space-y-2">
          <p>
            Our website may contain links that will allow you to quickly access
            other websites of interest. However, you should note that we have no
            control over this other website. As a result, we cannot guarantee
            the security or privacy of any information you provide on these
            other sites as these sites are not covered by quickmechs’s privacy
            statement. Therefore, you should observe your due diligence and
            carefully read the privacy policy for the website in question.
          </p>
        </div>
      </section>

      <section id="personal-info-rights" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          <span>12.</span> Rights to Your Personal Information
        </h2>
        <div className="space-y-2">
          <p>
            We would like to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to the following:
          </p>
          <ul className="list-disc space-y-1 pl-10 mt-2">
            <li>
              The right to access – You have the right to request copies of your
              personal data. We may charge you a small fee for this service.
            </li>
            <li>
              The right to rectification – You have the right to request that we
              correct any information you believe is inaccurate. You also have
              the right to request that we complete the information you believe
              is incomplete.
            </li>
            <li>
              The right to erasure – You have the right to request that we erase
              your personal data, under certain conditions. The right to
              restrict processing – You have the right to request that we
              restrict the processing of your personal data, under certain
              conditions.
            </li>
            <li>
              The right to object to processing – You have the right to object
              to our processing of your personal data, under certain conditions.
            </li>
            <li>
              The right to data portability – You have the right to request that
              we transfer the data that we have collected to another
              organization, or directly to you, under certain conditions.
            </li>
          </ul>

          <p>
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </p>
        </div>
      </section>

      <section id="age-limitation" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          <span>13.</span> Age limitation
        </h2>
        <div className="space-y-2">
          <p>
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
          </p>

          <p>
            quickmechs does not knowingly collect any Personal Identifiable
            Information from children under the age of 18. If you think that
            your child provided this kind of information on our website, we
            strongly encourage you to contact us immediately and we will do our
            best efforts to promptly remove such information from our records.
          </p>
        </div>
      </section>

      <section id="law-enforcement" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          <span>14.</span> Law Enforcement
        </h2>
        <div className="space-y-2">
          <p>
            You agree that we may reveal your information to authorities if
            compelled to by a court order. We may also disclose your information
            if we believe you have violated the laws of the US, the terms of our
            Privacy policy, or at the notice of the risk of a third party. On
            such occasions, we may notify you before we release such
            information.
          </p>

          <p>
            However, we may also disclose your information if there arises an
            urgent need for it by United States Law Enforcements, at the request
            of any state which has jurisdiction over our operations and
            Platforms. You hereby release us from any damages which may arise
            from or related to the release of your personal information upon
            orders received from law enforcement agencies and litigants whether
            they are individuals or entities, be it State or Federal
            authorities.
          </p>
        </div>
      </section>

      <section id="policy-changes" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          <span>15.</span> Changes To This Privacy Policy
        </h2>
        <div className="space-y-2">
          <p>
            This Privacy Policy is effective as of 9th August 2022 and will
            remain in effect except concerning any changes in its provisions in
            the future, which will be in effect immediately after being posted
            on this page.
          </p>

          <p>
            We reserve the right to update or change our Privacy Policy at any
            time and you should check this Privacy Policy periodically. Your
            continued use of the Service after we post any modifications to the
            Privacy Policy on this page will constitute your acknowledgment of
            the modifications and your consent to abide and be bound by the
            modified Privacy Policy.
          </p>
          <p>
            If we make any material changes to this Privacy Policy, we will
            notify you either through the email address you have provided us or
            by placing a prominent notice on our website.
          </p>
        </div>
      </section>

      <section id="compliance" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          <span>16.</span> Compliance
        </h2>
        <div className="space-y-2">
          <p>
            This Privacy Policy is reviewed regularly to ensure that we process
            your information in a manner that complies with the conditions
            stated herein.
          </p>
        </div>
      </section>

      <section id="contact" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact
          us:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            By email:{" "}
            <Link to={"mailto:support@quickmechs.com"}>
              support@quickmechs.com
            </Link>{" "}
          </li>
          <li>
            By visiting this page on our website:{" "}
            <Link to={"https://quickmechs.com/home/support"}>
              https://quickmechs.com/home/support
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
