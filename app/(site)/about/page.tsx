import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-0 py-12 w-full">
        <article className="prose prose-invert max-w-none dark:prose-invert">
          <h1 className="text-4xl font-bold mb-6 text-balance">About Me</h1>

          <section className="p-6 mb-12 border border-border rounded-lg hover:border-primary transition">
            <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Welcome to my blog! I'm a passionate writer, developer, and
              creator focused on sharing insights about web development, design,
              and emerging technologies. With years of experience in building
              digital products, I'm committed to helping others learn and grow
              in their development journey.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This blog is a space where I share my thoughts, tutorials, best
              practices, and reflections on the ever-evolving world of web
              development. My goal is to make complex topics accessible and
              engaging for everyone, from beginners to experienced developers.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">What I Write About</h2>
            <div className="grid gap-6 md:grid-cols-2 my-6">
              <div className="p-6 border border-border rounded-lg hover:border-primary transition">
                <h3 className="text-lg font-semibold mb-2">Web Development</h3>
                <p className="text-muted-foreground">
                  Modern frameworks, tools, and best practices for building
                  fast, scalable web applications.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg hover:border-primary transition">
                <h3 className="text-lg font-semibold mb-2">Design Systems</h3>
                <p className="text-muted-foreground">
                  Creating beautiful, consistent user interfaces and design
                  systems at scale.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg hover:border-primary transition">
                <h3 className="text-lg font-semibold mb-2">
                  Technology Trends
                </h3>
                <p className="text-muted-foreground">
                  Exploring new technologies, frameworks, and approaches shaping
                  the industry.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg hover:border-primary transition">
                <h3 className="text-lg font-semibold mb-2">
                  Developer Insights
                </h3>
                <p className="text-muted-foreground">
                  Tips, tricks, and lessons learned from years of software
                  development experience.
                </p>
              </div>
            </div>
          </section>

          <div className="flex flex-col md:flex-row gap-8">
            <section className="md:flex-1">
              <h2 className="text-2xl font-bold mb-4">Why Trust My Content?</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>
                    Hands-on experience building production applications
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Up-to-date knowledge of modern web technologies</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Commitment to teaching and sharing knowledge</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Real-world examples and practical solutions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Community feedback and continuous improvement</span>
                </li>
              </ul>
            </section>

            <section className="md:flex-1">
              <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Have questions or want to collaborate? I'd love to hear from
                you! Reach out through the
                <Link
                  href="/contact"
                  className="text-primary hover:underline mx-1"
                >
                  contact page
                </Link>
                or connect with me on social media.
              </p>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
}
