export default function Pricing() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-4">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Simple, Transparent Pricing
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Everything you need to establish a professional online presence. One-time investment, lasting results.
      </p>
    </div>

    {/* Pricing Card */}
    <div className="mt-12 md:mt-16 flex justify-center">
      <div className="w-full max-w-md bg-white border-2 border-blue-600 rounded-2xl shadow-xl p-8 md:p-10 lg:p-12 hover:shadow-2xl transition-shadow duration-300">
        
        {/* Card Header */}
        <div className="text-center mb-4">
          <h3 className="text-2xl font-bold text-gray-900">Include Pro</h3>
        </div>

        {/* Price */}
        <div className="text-center mb-2">
          <div className="text-5xl font-bold text-gray-900">$29</div>
          <p className="text-gray-600 mt-2">One-time payment</p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 my-6"></div>

        {/* Features */}
        <ul className="space-y-3 mt-6 mb-6">
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">Professional custom design</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">Fully mobile responsive</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">Contact forms & CTAs</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">SEO optimized structure</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">Fast loading performance</span>
          </li>
        </ul>

        {/* CTA Button */}
        <button 
          onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00?client_reference_id=e90d00f2-364c-4f96-a299-a4d59380a59b'}
          className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl mt-8"
        >
          Get Your Website - $29
        </button>

        {/* Footer Text */}
        <p className="text-center text-sm text-gray-500 mt-4">
          No hidden fees. No subscriptions. Pure value.
        </p>
      </div>
    </div>
  </div>
</section>
  );
}