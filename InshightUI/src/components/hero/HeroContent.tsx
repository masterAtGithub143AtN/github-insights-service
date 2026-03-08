import { Button } from "../ui/Button";

export function HeroContent() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
        Discover the Best Open Source Projects with
        <span className="block text-blue-600 mt-2">
          Github Insights
        </span>
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
        Analyze repositories, filter projects by your skill level, and find
        the perfect open-source contributions. Github Insights helps
        developers explore trending repos, evaluate activity, and grow faster
        in the open-source ecosystem.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button>Explore Repositories</Button>
        <Button variant="secondary">View How It Works</Button>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400">
        Built for developers. No signup required to explore.
      </p>
    </div>
  );
}