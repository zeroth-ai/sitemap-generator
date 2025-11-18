import { useState } from 'react';

const SitemapGenerator = () => {
  const [url, setUrl] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    // UI simulation only - no actual functionality
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Sitemap Generator
          </h1>
          <p className="text-gray-400">
            Generate a sitemap for any website URL
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-gray-800 rounded-lg border border-gray-700 shadow-lg p-6">
          {/* URL Input Section */}
          <div className="mb-6">
            <label htmlFor="url" className="block text-sm font-medium text-gray-300 mb-2">
              Website URL
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="url"
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
              <button
                onClick={handleGenerate}
                disabled={!url || isGenerating}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  !url || isGenerating
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
                }`}
              >
                {isGenerating ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Generating...
                  </div>
                ) : (
                  'Generate Sitemap'
                )}
              </button>
            </div>
            {!url && (
              <p className="text-sm text-gray-400 mt-2">
                Enter a valid website URL to get started
              </p>
            )}
          </div>

          {/* Preview Section */}
          <div className="border-t border-gray-700 pt-6">
            <h3 className="text-lg font-medium text-white mb-4">
              Sitemap Preview
            </h3>
            <div className="bg-gray-900 border border-gray-700 rounded-md p-4">
              <div className="text-gray-400 text-sm font-mono">
                {url ? (
                  <div className="space-y-2">
                    <div className="text-green-400">✓ Sitemap will be generated for:</div>
                    <div className="text-blue-400 ml-4">{url}</div>
                    <div className="text-gray-500 mt-4">
                      {/* Sample sitemap structure preview */}
                      {`<?xml version="1.0" encoding="UTF-8"?>`}
                      <br />
                      {`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`}
                      <br />
                      <span className="ml-4">{`<url>`}</span>
                      <br />
                      <span className="ml-8">{`<loc>${url}</loc>`}</span>
                      <br />
                      <span className="ml-8">{`<lastmod>${new Date().toISOString().split('T')[0]}</lastmod>`}</span>
                      <br />
                      <span className="ml-8">{`<priority>1.0</priority>`}</span>
                      <br />
                      <span className="ml-4">{`</url>`}</span>
                      <br />
                      {`</urlset>`}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    Enter a URL and click generate to see your sitemap
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-300">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>XML Format</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>SEO Optimized</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Fast Processing</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Free to Use</span>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-6 text-gray-500 text-sm">
          <p>This is a UI demonstration. Actual sitemap generation functionality will be implemented later.</p>
        </div>
      </div>
    </div>
  );
};

export default SitemapGenerator;