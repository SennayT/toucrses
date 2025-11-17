export function PartnersSection() {
  const partners = [
    "Microsoft Learning Partner",
    "CompTIA Authorised Delivery Partner",
    "Linux Foundations Authorised Training Partner",
    "AWS Authorised Training Partner (Reseller)",
    "Autodesk Authorised Training Center",
    "Pearson VUE Authorised Training Partner",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Our Authorised Training Partners
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 text-center">
          We are proud to be partnered with the world's leading technology
          companies.
        </p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner) => (
            <div key={partner} className="flex justify-center items-center p-4">
              <span className="text-center font-semibold text-gray-500">
                {partner}
              </span>
              {/* In a real app, you'd use logos: <img src="..." alt={partner} /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
