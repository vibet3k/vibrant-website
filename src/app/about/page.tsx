import { Metadata } from 'next';
import BackgroundLayout from '@/components/BackgroundLayout';

export const metadata: Metadata = {
  title: 'About Us | Vibrant Technology',
  description: 'Learn about our team and our approach to strategic IT services.',
};

export default function AboutPage() {
  return (
    <BackgroundLayout>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white/80 rounded-lg p-8 backdrop-blur-sm">
          <h1 className="text-4xl md:text-5xl font-bold text-vt-blue mb-6 font-lexend-deca">
            About Vibrant Technology
          </h1>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-lexend-deca">
            You already know the problem…
          </h2>

          <p className="text-lg text-gray-700 font-radley leading-relaxed mb-6">
            We know it, too, because {"we've"} spent decades on the inside, watching the pattern repeat: firms like yours stuck in reactive mode, chasing problems instead of preventing them – conditioned to believe {"'fast response times'"} are a strategy. Firefighting, not fireproofing.
          </p>

          <p className="text-lg text-gray-700 font-radley leading-relaxed mb-6">
            All that wasted effort and still {"you're"} left wondering why the same issues keep surfacing, why projects stall out, and why IT seems to always demand attention. After a while, the pattern stops looking like bad luck and starts looking like a bad plan.
          </p>

          <p className="text-lg text-gray-700 font-radley leading-relaxed mb-8">
            Vibrant Technology is the better plan: quiet, disciplined IT aligned to your core business needs.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-lexend-deca">
            {"Let's"} Run Dark
          </h2>

          <p className="text-lg text-gray-700 font-radley leading-relaxed mb-6">
            We {"don't"} measure success by how fast we close tickets. {"That's"} the wrong metric. We measure success by how rarely you have to open one.
          </p>

          <p className="text-lg text-gray-700 font-radley leading-relaxed mb-6">
            Technology is woven into every part of your business. When {"it's"} working, it {"doesn't"} demand your attention. You do your work, your team does theirs, and the systems stay out of the way. We call that {"\""}running dark{"\""} – when your tech stack hums in the background like a quiet, reassuring presence you barely notice.
          </p>

          <p className="text-lg text-gray-700 font-radley leading-relaxed mb-6">
            None of this happens by accident. It depends on real-world expertise, strategic thinking, and disciplined implementation. It requires a technology partner who listens to how your business runs and what your team needs. Done well, your systems are secure, resilient, and quickly recoverable. Your people can work from anywhere, knowing {"they'll"} be safe and productive.
          </p>

          <p className="text-lg text-gray-700 font-radley leading-relaxed font-semibold">
            So, {"let's"} run dark.
          </p>
        </div>
      </main>
    </BackgroundLayout>
  );
}