// OurStory.jsx

import CTASection from "../../components/Homepage/CTASection";

const OurStory = () => {
  return (
    <section className="bg-neutral-two text-primary-text font-inter py-16">
      <div className="container mx-auto px-4 space-y-16 mb-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-poppins font-semibold text-primary mb-6">
            Our Story 📖
          </h2>
          <p className="text-lg text-primary-text-two">
            Creating the journey of Right Edu Consultants — from vision to a
            trusted name in global education.
          </p>
        </div>

        {/* Why We Started */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <h3 className="text-2xl font-poppins font-semibold text-primary">
            Why We Started &hyphen; The Purpose Behind the Journey
          </h3>
          <p>
            The global education landscape has expanded rapidly over the past
            decade — yet for many aspiring students, navigating this world
            remained overwhelming, confusing, and often discouraging. A lack of
            reliable information, language and cultural barriers, and
            uncertainty in choosing the right institution or destination made
            the journey difficult.
          </p>
          <p>
            But the challenges didn&apos;t end there. All too often, students
            and their families fell into the hands of unqualified or even
            fraudulent agents, misled by false promises and incomplete guidance.
            We saw students lose their money, their time, and, most painfully,
            their dreams — all because they lacked access to honest, informed,
            and ethical support.
          </p>
          <p>
            It was this widening gap — between aspiration and access — that
            sparked the vision behind Right Edu Consultants. Born from a genuine
            desire to create change, we launched our consultancy with a pure
            hope and strong purpose: to stand beside students, not just as
            agents, but as trusted mentors and lifelong partners.
          </p>
          <p>
            Our founders, with years of experience in international student
            recruitment and education marketing, had witnessed these issues
            firsthand. They understood that what students truly needed wasn't
            just a list of options, but the right guidance, ethical support, and
            transparent pathways to succeed abroad.
          </p>
          <p>
            And that&apos;s how our mission was born — not just to help students
            study overseas, but to build futures with integrity, care, and a
            global vision. At Right Edu Consultants, we believe every student
            deserves a guided, honest, and inspiring path to international
            education — and we are proud to walk that path with them, every step
            of the way.
          </p>
        </div>

        {/* How We Started */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <h3 className="text-2xl font-poppins font-semibold text-primary">
            How We Started &hyphen; From Vision to Reality
          </h3>
          <p>
            Our journey began in 2014 under the name
            <span className="font-semibold text-primary-two">
              Smart Edu Tourism Malaysia
            </span>
            — a small initiative helping Bangladeshi students connect with
            Malaysian universities. With a passionate team and deep local
            insights, we gradually built strong relationships with institutions,
            students, and academic leaders.
          </p>
          <p>
            As our network expanded and our services matured, we realized the
            potential to offer something more — something structured, scalable,
            and impactful. In 2023, we officially incorporated as{" "}
            <span className="font-semibold text-primary-two">
              Right Edu Consultants Sdn. Bhd.
            </span>
            , a private limited company under Malaysia&apos;s Companies Act
            2016.
          </p>
          <p>
            This marked a new era of professionalism, transparency, and growth.
          </p>

          {/* Achievements Summary */}
          <ul className="list-disc list-inside text-primary-text-two space-y-2 mt-4">
            <li>🌏 Partnered with 50+ Malaysian universities</li>
            <li>
              🌍 Built direct collaborations across 10+ European countries
            </li>
            <li>
              🎓 Assisted thousands of students in achieving their academic
              dreams
            </li>
            <li>
              🤝 Established a diverse and multilingual team committed to
              ethical consulting
            </li>
          </ul>
        </div>

        {/* Services Offered */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h4 className="text-xl font-poppins font-semibold text-primary">
            We&apos;ve also expanded our services to include:
          </h4>
          <ul className="list-disc list-inside text-primary-text-two space-y-2">
            <li>Program selection & career counseling</li>
            <li>Application & admission support</li>
            <li>Visa documentation & pre-departure guidance</li>
            <li>
              Strategic partnerships with universities and academic institutions
            </li>
          </ul>
        </div>

        {/* Closing Statement */}
        <div className="max-w-3xl mx-auto text-lg text-primary-text-two text-center">
          <p>
            At Right Edu Consultants, we believe in impacting lives through
            education — not just placing students, but preparing them for the
            world ahead.
          </p>
          <p className="mt-4 font-semibold text-primary">
            We&apos;re proud of where we started. And we&apos;re even more
            excited about where we&apos;re headed.
          </p>
        </div>
      </div>
      <CTASection />
    </section>
  );
};

export default OurStory;
