import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 py-12 w-full">
        <article className="prose prose-invert max-w-none dark:prose-invert">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-sm mb-8">
            Last updated: December 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              My Blog ("we", "us", "our", or "Company") operates the website.
              This page informs you of our policies regarding the collection,
              use, and disclosure of personal data when you use our website and
              the choices you have associated with that data. We use your data
              to provide and improve the Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              2. Information Collection and Use
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect several different types of information for various
              purposes to provide and improve our Website to you.
            </p>

            <h3 className="text-xl font-semibold mb-3">
              Types of Data Collected:
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <strong>Personal Data:</strong> While using our Website, we may
                ask you to provide us with certain personally identifiable
                information that can be used to contact or identify you
                ("Personal Data"). This may include, but is not limited to:
                <ul className="mt-2 ml-6 space-y-2">
                  <li>• Email address</li>
                  <li>• First name and last name</li>
                  <li>• Cookies and Usage Data</li>
                </ul>
              </li>
              <li>
                <strong>Usage Data:</strong> We may also collect information on
                how the Website is accessed and used ("Usage Data"). This may
                include information such as your computer's Internet Protocol
                address (e.g. IP address), browser type, browser version, the
                pages you visit, the time and date of your visit, the time spent
                on those pages, and other diagnostic data.
              </li>
              <li>
                <strong>Cookies:</strong> We use cookies and similar tracking
                technologies to track activity on our Website and hold certain
                information.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Use of Data</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              My Blog uses the collected data for various purposes:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• To provide and maintain our Website</li>
              <li>• To notify you about changes to our Website</li>
              <li>
                • To allow you to participate in interactive features of our
                Website when you choose to do so
              </li>
              <li>• To provide customer support</li>
              <li>
                • To gather analysis or valuable information so that we can
                improve our Website
              </li>
              <li>• To monitor the usage of our Website</li>
              <li>• To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Analytics</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may use third-party Service Providers to monitor and analyze
              the use of our Website for content interest and viewing trends.
              These Service Providers may use Cookies to collect and track
              information and may combine information collected from multiple
              sources. Your data may be transferred to, stored in and processed
              in countries other than your country of residence.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cookies are files with small amounts of data that is downloaded to
              your device when you access our Website. We use cookies to:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Store information about your preferences and settings</li>
              <li>• Remember your theme preference (light/dark mode)</li>
              <li>• Understand how you interact with our content</li>
              <li>• Improve our Website's functionality</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              You can instruct your browser to refuse all cookies or to alert
              you when a cookie is being sent. However, if you do not accept
              cookies, you may not be able to use some portions of our Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              The security of your data is important to us, but remember that no
              method of transmission over the Internet or method of electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your Personal Data, we cannot
              guarantee its absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <div className="mt-4 p-4 border border-border rounded-lg bg-muted/50">
              <p className="text-foreground">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:privacy@myblog.com"
                  className="text-primary hover:underline"
                >
                  privacy@myblog.com
                </a>
              </p>
              <p className="text-foreground mt-2">
                Visit our{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  contact page
                </Link>{" "}
                for more information.
              </p>
            </div>
          </section>

          <section className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              This Privacy Policy is subject to change without notice. We
              encourage you to review this Privacy Policy periodically for any
              changes. Your continued use of the Website following the posting
              of revised Privacy Policy means that you accept and agree to the
              changes.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}
